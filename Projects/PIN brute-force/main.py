import time
pin = 4456
attempts = 0
found = False
for i in range (0,10000):
    guess_num = f"{i:04d}"
    attempts += 1
    if guess_num == pin:
        found = True
        print("PIN found: ", guess_num)
        print("Attempts: ", attempts)
        break
    else:
        if attempts % 5 == 0:
            print("Attempt: ", attempts, " - Incorrect PIN: ", guess_num)
            print("Pausing for 5 seconds to avoid lockout...")
            time.sleep(5)
            attempts = 0
if not found:
    print("PIN not found")

