import random

def get_random_temp():
    return random.randint(-10, 40)

def main():
    temp = get_random_temp()
    print(f"The temperature right now is {temp} degrees Celsius.")

    if temp < 0:
        print("Brrr, that’s freezing! Wear some extra layers today.")
    elif 0 <= temp <= 16:
        print("Quite chilly! Don’t forget your coat.")
    elif 17 <= temp <= 23:
        print("It's a pleasant day! A light jacket should be fine.")
    elif 24 <= temp <= 32:
        print("It's warm outside! Perfect for short sleeves.")
    elif 33 <= temp <= 40:
        print("It's really hot! Stay hydrated and avoid the sun during peak hours.")
    else:
        print("Unusual temperature detected!")

main()