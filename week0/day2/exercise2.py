#ex2
family = {"rick": 43, 'beth': 13, 'morty': 5, 'summer': 8, 'achraf': 2}
total = 0
for key, value in family.items():
    if value < 3:
        print(f"{key} is {value} years old and his ticket is free")
    elif value < 12:
        total += 10
        print(f"{key} is {value} years old and his ticket is $10")
    else:
        total += 15
        print(f"{key} is {value} years old and his ticket is $15")

print(f"the total cost is ${total}")