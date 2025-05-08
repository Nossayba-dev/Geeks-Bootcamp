# Ask the user for their birthdate in the format DD/MM/YYYY.
# Parse the date using datetime.
# Calculate the age based on the current date.
# Determine the last digit of the age → this is the number of candles.
# Check if the birth year is a leap year.
# Print the cake with candles.
# Bonus: If it’s a leap year, print two cakes.
from datetime import datetime
# Step 1: Get the user's birthdate
birthdate_str = input("Enter your birthdate (DD/MM/YYYY): ")

# Step 2: Parse the date
birthdate = datetime.strptime(birthdate_str, "%d/%m/%Y")
today = datetime.today()

# Step 3: Calculate the age
age = today.year - birthdate.year - ((today.month, today.day) < (birthdate.month, birthdate.day))

# Step 4: Get the last digit of age for candles
candles = age % 10
candles_str = "i" * candles

# Step 5: Check for leap year
birth_year = birthdate.year
is_leap_year = (birth_year % 4 == 0 and (birth_year % 100 != 0 or birth_year % 400 == 0))

# Step 6: Build the cake
def print_cake():
    print(f"       ___{candles_str}___")
    print("      |:H:a:p:p:y:|")
    print("    __|___________|__")
    print("   |^^^^^^^^^^^^^^^^^|")
    print("   |:B:i:r:t:h:d:a:y:|")
    print("   |                 |")
    print("   ~~~~~~~~~~~~~~~~~~~")

# Step 7: Print one or two cakes
print("\nHere is your birthday cake:\n")
print_cake()
if is_leap_year:
    print("\nSince you were born in a leap year, here's another cake!\n")
    print_cake()
