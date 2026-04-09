
## 1️⃣ Account Security & Authentication



### Practical Projects


### 🧪 Hands-On Activities

- **Secure 3–5 important accounts as lab experiments**
  - Enable a password manager
  - Switch to unique long passwords
  - Enable MFA (authenticator app or hardware key preferred over SMS)

- **Write and benchmark a brute-force script**
  - Exhaustively try all 4-digit PINs in Python
  - Measure execution time
  - Estimate time required for 6- and 8-character mixed-symbol passwords

- **Phishing classification lab**
  - Collect 5 real emails and 5 fake examples (blur personal data)
  - Classify each
  - Identify red flags:
    - Suspicious domains
    - Email headers
    - Tone and urgency
    - Malicious links

---

## 2️⃣ Cryptography & Encryption

### Core Concepts
- Hashing:
  - What is hashing?
  - Types of hashing algorithms
  - Salting  
- Symmetric vs Asymmetric Encryption:
  - AES  
  - RSA  
- Digital Signatures  
- Encryption Systems  

### Practical Projects
- Implement different hashing algorithms in Python  
- Build your own simple encryption system  
- Create your own digital signature using RSA  

### 🧪 Hands-On Activities

- **Hash playground experiment**
  - Use SHA-256 and SHA-3 on:
    - Short words
    - Long phrases
    - Files
  - Modify one character and observe the avalanche effect

- **Salt simulation notebook exercise**
  - Concatenate random salt + password
  - Hash the result
  - Show identical passwords produce different hashes with different salts

- **Toy cipher implementation**
  - Implement:
    - Caesar cipher
    - Vigenère cipher or XOR cipher
  - Exchange encrypted messages
  - Write a script to decrypt them

---

## 3️⃣ Network & System Security

### Core Concepts
- HTTP vs HTTPS (TLS)  
- WiFi Protected Access (WPA)  
- Man-in-the-Middle (MITM) attacks  
- Packet sniffing  
- VPN  
- Firewall  
- Proxy  
- Ports (how services communicate)  
- SSH  
- Port scanning  

### Practical Projects
- Build a local port scanner  
- Capture and analyze your own HTTP headers (User-Agent, Referer)  
- Study how to prevent MITM attacks  

### 🧪 Hands-On Activities

- **Inspect HTTPS in your browser**
  - Open DevTools → Security tab
  - Compare:
    - Certificate issuer
    - TLS protocol version
    - Mixed content warnings
  - Test across banking, social, and blog websites

- **Local attacker lab (HTTP vs HTTPS)**
  - Run: `python -m http.server`
  - Create a simple login form
  - Inspect plaintext credentials over HTTP
  - Repeat using HTTPS with a self-signed certificate

- **Cookie & session exploration**
  - Inspect cookies:
    - Secure
    - HttpOnly
    - SameSite
  - Log out and observe session changes
  - Analyze protection against XSS and CSRF

---

## 4️⃣ Web Security & Vulnerabilities

### Core Concepts
- OWASP Top 10  
- XSS (Cross-Site Scripting)  
- CSRF (GET vs POST abuse)  
- SQL Injection  
- Arbitrary Code Execution (ACE)  
- Remote Code Execution (RCE)  
- Buffer Overflow & memory safety  

### Practical Projects
- Create a vulnerable SQL login form and secure it  
- Build an XSS demo and implement escaping  
- Demonstrate CSRF attack flow and prevention  
- Study arbitrary code execution mechanics safely  

### 🧪 Hands-On Activities

- **Buffer overflow intuition lab**
  - Write a small C program using unsafe functions (`gets`, `strcpy`)
  - Use a fixed-size buffer
  - Trigger crash with oversized input
  - Replace with safer alternatives and compare behavior

- **Mini threat model exercise**
  - Choose one app (messaging or banking)
  - Write:
    - Assets
    - Potential attackers
    - Attack surfaces
    - Existing defenses

---

## 5️⃣ Privacy & Tracking

### Core Concepts
- Cookies  
- URL tracking parameters  
- HTTP Referrers  
- Browser fingerprinting  

### Practical Project
- Build a Browser Privacy Auditor that displays:
  - User-Agent  
  - Referer  
  - Request headers  

### 🧪 Hands-On Activities

- **Tracking diary experiment**
  - Record visited sites for one day
  - Inspect cookies, localStorage, and permissions
  - Repeat with stricter browser profile or privacy extension
  - Compare differences

- **De-identification experiment**
  - Create a fresh browser profile or VM
  - Visit major platforms
  - Observe personalization timing
  - Identify actions that trigger tracking (logins, searches, watch time)

----------------------------------------------------------
                        RESORCES
----------------------------------------------------------
Pass keys : https://www.youtube.com/watch?v=bdp8RdjV6PU
Session vs Cookies: https://www.youtube.com/watch?v=K4UKj5htg-E




----------------------------------------------------------
                        PROJECTS
----------------------------------------------------------
- Create a 4-digit brute-force Python script  
- Simulate cracking a 4-digit mobile PIN (educational demo only)  
- Apply 2FA to all major accounts  
- Build a Password Complexity Calculator  
- Create a Simple Brute-Force Simulator  
