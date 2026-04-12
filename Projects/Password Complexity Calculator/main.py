password = input("Enter your password: ")

has_lower = False
has_upper = False
has_digit = False
has_specialchar = False

# Check each character in the password
for char in password:
    if char.islower():
        haslower = True
    if char.isupper():
        hasupper = True
    if char.isdigit():
        hasdigit = True
    if not char.isalnum():
        hasspecialchar = True
    if has_lower and has_upper and has_digit and has_specialchar:
        break

# Check the Score
score = 0
password_length = len(password)
if password_length >= 8:
    score += 1
if has_lower:
    score += 1
if has_upper:
    score += 1
if has_digit:
    score += 1
if has_specialchar:
    score += 1  
# Check the strength of the password
if score <= 2:
    print("Your password is weak.")
elif score == 3:
    print("Your password is medium.")
else:
    print("Your password is strong.")
