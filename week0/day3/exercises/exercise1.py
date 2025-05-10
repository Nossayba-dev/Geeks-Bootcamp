class Cat:
    def __init__(self, cat_name, cat_age):
        self.name = cat_name
        self.age = cat_age


cat1=Cat("lucky",1)
cat2=Cat("kiro",2)
cat3=Cat("lona",4)

def oldest(cats):
    oldest = cats[0]
    for cat in cats:
        if cat.age > oldest.age:
            oldest = cat
    return oldest


cats=[cat1, cat2 ,cat3]
oldest_cat = oldest(cats)

print(oldest_cat.name , oldest_cat.age)

