# Exercise 1 : Hello Worl
print("Hello World\n "*4 )
# Exercise 2 : Some Math
n=int
n=(99**3)*8 # (99^3)*8
print(f"the result of (99^3)*8 is {n}")
#  Exercise 3 : What’s your name ?
my_name = "Nossayba"
user_name = input("Enter your name: ")  
if user_name == my_name:
    print("Hallo hallo it's rare to see some have the name as me")
else:
    print("Hello", user_name, "nice to meet you , your name is beautibul") 
#   Exercise 4 : Tall enough to ride a roller coaster
hight = int(input("Enter your height in cm: ")) 
if hight >= 145:
    print("You are tall enough to ride ")
else:
    print("You are not tall enough to ride , you need to grow some more to ride")
# Exercise 5 : Favorite Numbers
my_fav_numbers = {8, 18, 108}

my_fav_numbers.add(28)
my_fav_numbers.add(38)

my_fav_numbers.discard(38)

friend_fav_numbers = {3, 14, 18}

our_fav_numbers = my_fav_numbers.union(friend_fav_numbers)

print("My favorite numbers:", my_fav_numbers)
print("Friend's favorite numbers:", friend_fav_numbers)
print("Our favorite numbers:", our_fav_numbers)

# Exercise 6: Tuple
my_tuple = (1, 2, 3, 4, 5)
# my_tuple.add(28) :impossible to add an element to a tuple
print(my_tuple)

#exercise 7: List
basket = ["Banana", "Apples", "Oranges", "Blueberries"]

basket.remove("Banana")

basket.remove("Blueberries")

basket.append("Kiwi")

basket.insert(0, "Apples")


apple_count = basket.count("Apples")

print("Number of Apples:", apple_count)

basket.clear()

print(basket)

#exercise 8:  Sandwich Orders
sandwich_orders = [
    "Tuna sandwich", 
    "Pastrami sandwich", 
    "Avocado sandwich", 
    "Pastrami sandwich", 
    "Egg sandwich", 
    "Chicken sandwich", 
    "Pastrami sandwich"
]

while "Pastrami sandwich" in sandwich_orders:
    sandwich_orders.remove("Pastrami sandwich")

finished_sandwiches = []

while sandwich_orders:
    current_sandwich = sandwich_orders.pop(0) 
    finished_sandwiches.append(current_sandwich)
    print(f"I made your {current_sandwich.lower()}")
