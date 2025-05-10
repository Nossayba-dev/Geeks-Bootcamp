from datetime import datetime
birthdate_str = input("Enter your birthdate (DD/MM/YYYY): ")

birthdate = datetime.strptime(birthdate_str, "%d/%m/%Y")
today = datetime.today()

age = today.year - birthdate.year - ((today.month, today.day) < (birthdate.month, birthdate.day))

candles = age % 10
candles_str = "i" * candles

birth_year = birthdate.year
is_leap_year = (birth_year % 4 == 0 and (birth_year % 100 != 0 or birth_year % 400 == 0))

def print_cake():
    print(f"       ___{candles_str}___")
    print("      |:H:a:p:p:y:|")
    print("    __|___________|__")
    print("   |^^^^^^^^^^^^^^^^^|")
    print("   |:B:i:r:t:h:d:a:y:|")
    print("   |                 |")
    print("   ~~~~~~~~~~~~~~~~~~~")

print("\nHere is your birthday cake:\n")
print_cake()
if is_leap_year:
    print("\nSince you were born in a leap year, here's another cake!\n")
    print_cake()
