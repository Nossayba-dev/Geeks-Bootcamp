class Dog :
    def __init__(self,name,height):
        self.name = name
        self.height =height

    def bark(self):
        print(f"{self.name} goes woof!")
    def jump(self):
        print(f"{self.name}jumps{self.height*2} cm high")

davids_dog=Dog("Rex",50)
davids_dog = Dog("Rex", 50)

# Print details and call methods
print(f"David's dog is named {davids_dog.name} and is {davids_dog.height} cm tall.")
davids_dog.bark()
davids_dog.jump()

sarahs_dog = Dog("Teacup", 20)

# Print details and call methods
print(f"\nSarah's dog is named {sarahs_dog.name} and is {sarahs_dog.height} cm tall.")
sarahs_dog.bark()
sarahs_dog.jump()


if davids_dog.height > sarahs_dog.height:
    print(f"\nThe bigger dog is {davids_dog.name}.")
elif sarahs_dog.height > davids_dog.height:
    print(f"\nThe bigger dog is {sarahs_dog.name}.")
else:
    print("\nBoth dogs are the same height.")