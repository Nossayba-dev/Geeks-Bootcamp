#   Exercise 4 : Family

class Family:
    def __init__(self, last_name, members):
        self.last_name = last_name
        self.members = members

    def born(self, **kwarg):
        self.members.append(kwarg)
        print(f"Congratulation to the {self.last_name} family")

    def is_18(self, name):
        for member in self.members:
            if member['name'] == name and member['age'] >= 18:
                return True
        else:
            return False

    def family_representation(self):
        print(f"Family name: {self.last_name}")
        for member in self.members:
            print(member)


if __name__ == "__main__":
    members = [
        {"name": "John", "age": 40, "gender": "male"},
        {"name": "Emma", "age": 35, "gender": "female"},
        {"name": "Alex", "age": 17, "gender": "male"}
    ]
    my_family = Family("Smith", members)

    my_family.family_representation()

    print("\nIs Alex 18 or older?", my_family.is_18("Alex"))  # False
    print("Is John 18 or older?", my_family.is_18("John"))   # True

    my_family.born(name="Luna", age=0, gender="female")

    print("\nAfter birth:")
    my_family.family_representation()