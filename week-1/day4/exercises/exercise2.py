# Exercise 2 : Dogs

class Dog():
    def __init__(self, name, age, weight):
        self.name = name
        self.age = age
        self.weight = weight

    def bark(self):
        print(f"{self.name} is barking")

    def run_speed(self):
        return self.weight/10
    
    def fight(self, other_dog):
        if self.run_speed() * self.weight > other_dog.run_speed() * other_dog.weight:
            print(f"{self.name} won the fight")
        else:
            print(f"{other_dog.name} won the fight")

if __name__ == "__main__":
    dog1 = Dog("Rex", 3, 10)
    dog2 = Dog("Max", 5, 15)
    dog3 = Dog("Buddy", 2, 20)

    dog1.bark()
    dog2.bark()
    dog3.bark()

    dog1.fight(dog2)
    dog2.fight(dog3)
    dog3.fight(dog1)