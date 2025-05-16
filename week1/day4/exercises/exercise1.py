#🌟 Exercise 1 : Pets
class Pets():
    def __init__(self, animals):
        self.animals = animals

    def walk(self):
        for animal in self.animals:
            print(animal.walk())

class Cat():
    is_lazy = True

    def __init__(self, name, age):
        self.name = name
        self.age = age

    def walk(self):
        return f'{self.name} is just walking around'

class Bengal(Cat):
    def sing(self, sounds):
        return f'{sounds}'

class Chartreux(Cat):
    def sing(self, sounds):
        return f'{sounds}'
    

class Siamese(Cat):
    pass

cat1 = Bengal("cat1", 1)
cat2 = Chartreux("cat2", 2)
cat3 = Siamese("cat3", 3)

all_cats = [cat1, cat2, cat3]

sara_pets = Pets(all_cats)



    
hight = int(input("Enter your height in cm: ")) 
if hight >= 145:
    print("You are tall enough to ride ")
else:
    print("You are not tall enough to ride , you need to grow some more to ride")
