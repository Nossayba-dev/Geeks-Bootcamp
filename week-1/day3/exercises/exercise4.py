class Zoo:
    def __init__(self,zoo_name):
        self.zoo_name=zoo_name
        self.animals=[]
    
    def add_animal(self,new_animal):
        self.animals.append(new_animal)

    def get_animals(self):
        for x in self.animals:
            print(x)
    
    def sell_animal(self,animal_sold):
        self.animals.remove(animal_sold)

    def sort_animals(self):
        self.a=self.animals.sort()
        for y in self.animals:
            print(f"{y[0].upper()} : {y}")

new_york_zoo=Zoo("zoo")
new_york_zoo.add_animal("horse")
new_york_zoo.add_animal("dog")
new_york_zoo.add_animal("cat")
new_york_zoo.get_animals()
new_york_zoo.sort_animals()