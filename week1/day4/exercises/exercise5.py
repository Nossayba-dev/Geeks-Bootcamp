# Exercise 5 : TheIncredibles Family

from exercise4 import Family

members = [
        {'name':'Michael','age':35,'gender':'Male','is_child':False,'power': 'fly','incredible_name':'MikeFly'},
        {'name':'Sarah','age':32,'gender':'Female','is_child':False,'power': 'read minds','incredible_name':'SuperWoman'}
    ]


class TheIncredibles(Family):
    def use_power(self, name):
        if self.is_18(name):
            for member in self.members:
                if member['name'] == name:
                    print(member['power'])
        else:
            print("You are not over 18 years old")
    def incredible_presentation(self):
        print("Here is our powerful family")
        super().family_representation()
        


if __name__ == "__main__":
    my_family = TheIncredibles("Smith", members)

    my_family.use_power("Michael")
    my_family.use_power("Sarah")

    my_family.incredible_presentation()
    
    my_family.born(name="Baby Jack", age=0, gender="Male", is_child=True, power="Unknown Power", incredible_name="Baby Jack")
    
    my_family.use_power("Baby Jack")

    my_family.incredible_presentation()