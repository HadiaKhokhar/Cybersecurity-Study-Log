
// ----- MAIN FUNCTION -----
function main() {
    const validateBtn = document.getElementById("validateBtn");
    const clearBtn = document.querySelector("#clearBtn"); // Fixed selector
    const toggleBtn = document.getElementById("toggleBtn");
    const pwdInput = document.getElementById("pwd");

    validateBtn.addEventListener("click", () => {
    validatePassword()
    });

    toggleBtn.addEventListener("click", () => togglePasswordVisibility(pwdInput));
    clearBtn.addEventListener('click',()=>{
        clearFields()
    })

}

// ---- Toggle password visibility ----
function togglePasswordVisibility(input) {
    const eyeIcon = input.parentElement.querySelector('.eye-icon');
    const eyeSlashIcon = input.parentElement.querySelector('.eye-slash-icon');

    if (input.type === 'password') {
        input.type = 'text';
        eyeIcon.classList.add('hidden');
        eyeSlashIcon.classList.remove('hidden');
    } else {
        input.type = 'password';
        eyeIcon.classList.remove('hidden');
        eyeSlashIcon.classList.add('hidden');
    }
}

// ----Validate Password Flow-----
async function validatePassword() {
    const passwordInput = document.getElementById("pwd");
    const password = passwordInput.value.trim();
    if (!password) {
        alert("Please enter a password.");
        return;
    }
    // Hashing
    const md5Text = document.getElementById("md5Hash");
    const sha256Text = document.getElementById("sha256Hash");
    const bcryptText = document.getElementById("bcryptHash");
    const argon2Text = document.getElementById("argon2Hash");
    const breachText = document.getElementById("breachResult");
    const [hashSHA25, hasMD5, hasBcrypt, hasArgon2,isBreached] = await Promise.all([
        hashSHA256(password),
        hashMD5(password),
        hashBcrypt(password),
        hashArgon2(password),
        checkPasswordBreach(password)
    ]);
    sha256Text.textContent = hashSHA25;
    md5Text.textContent = hasMD5;
    bcryptText.textContent = hasBcrypt;
    argon2Text.textContent = hasArgon2;
    breachText.textContent = isBreached ? "This password has been breached!" : "This password has not been breached."
}

// ---- Clear Fields ----
function clearFields() {
    document.getElementById("pwd").value = "";
    textContent = "Hash will appear here";  
    document.getElementById("sha256Hash").textContent = textContent;
    document.getElementById("md5Hash").textContent = textContent;
    document.getElementById("bcryptHash").textContent = textContent;
    document.getElementById("argon2Hash").textContent = textContent;
    document.getElementById("breachResult").textContent = "Result will appear here";

}

//  ------INDIVIDUAL HASHING FUNCTION------

// HASH SHA256
async function hashSHA256(password) {
    const encoder = new TextEncoder()
    const data = encoder.encode(password)
    const hashBuffer = await crypto.subtle.digest("SHA-256", data)
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray
        .map(byte => byte.toString(16).padStart(2, "0"))
        .join("");

    return hashHex;
}
// HASH MD5
function hashMD5(password) {
    const hash = CryptoJS.MD5(password);
    return hash.toString();
}
// HASH BCRYPT
function hashBcrypt(password) {
    const saltRounds = 10;
    const hash = dcodeIO.bcrypt.hashSync(password, saltRounds);
    return hash;
}
// HASH ARGON2
async function hashArgon2(password) {
    const result = await argon2.hash({
        pass: password,
        salt: "somesalt"
    });
    const fullHash = result.encoded;  //cotain extra info realted to this hash
    // only hash
    const displayHash = btoa(
        String.fromCharCode(...new Uint8Array(result.hash))
    );

    // return {
    //     // fullHash,
    //     displayHash
    // };
    return displayHash;
}
// HASH SHA1 [for breach check ]
async function sha1(password) {
    const encoder = new TextEncoder();
    const data = encoder.encode(password);

    const hashBuffer = await crypto.subtle.digest("SHA-1", data);

    const hashArray = Array.from(new Uint8Array(hashBuffer));

    const hashHex = hashArray
        .map(b => b.toString(16).padStart(2, "0"))
        .join("")
        .toUpperCase();

    return {
        prefix: hashHex.slice(0, 5),
        suffix: hashHex.slice(5)
    };
}


// ----- BREACH LOGIC -----
async function checkPasswordBreach(password) {
    // 1. Hash the password using SHA-1
    const { prefix, suffix } = await sha1(password);
    // 2. Send the first 5 characters of the hash to the API
    const response = await fetch(`https://api.pwnedpasswords.com/range/${prefix}`);
    const data = await response.text();
    // 3. Parse the response to find if the suffix exists
    const parsedData = data.split("\n").map(line => {
        const [hash, count] = line.split(":");
        return { hash, count: Number(count) };

    })
    // 4. Check if the suffix matches any of the returned hashes

    isBreached = parsedData.some(item => item.hash === suffix);
    return isBreached;

}


main()