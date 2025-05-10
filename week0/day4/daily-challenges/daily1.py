import math

class Pagination:

    def __init__(self, items=None, page_size=10):
        if items == None:
            self.items = []
        else:
            self.items = items
        self.page_size = page_size
        self.current_idx = 0
        self.total_pages = math.ceil(len(self.items) / self.page_size)

    def get_visible_items(self):
        self.visible_items = math.ceil(len(self.items) / self.total_pages)
        self.items_idx = self.visible_items * self.current_idx
        return self.items[self.items_idx:self.items_idx+self.visible_items]
    
    def go_to_page(self, page_num):
        if page_num <= 0:
            raise ValueError("page index can't be smaller than 1")
        elif page_num > self.total_pages:
            raise ValueError("page number is out of reach")
        else:
            self.current_idx = page_num - 1

    def fist_page(self):
        self.current_idx = 0
    
    def last_page(self):
        self.current_idx = self.total_pages - 1

    def next_page(self):
        if self.current_idx < self.total_pages - 1:
            self.current_idx += 1
        else:
            raise ValueError("You are on the last page")
    
    def previous_page(self):
        if self.current_idx > 1:
            self.current_idx -= 1 
        else:
            raise ValueError("You are on the first page")
        
    def __str__(self):
        return str(self.get_visible_items())
        

alphabetList = list("abcdefghijklmnopqrstuvwxyz")
p = Pagination(alphabetList, 4)

print(p.get_visible_items())

p.next_page()
print(p.get_visible_items())

p.last_page()
print(p.get_visible_items())

p.go_to_page(10)
print(p.current_idx + 1)

p.go_to_page(0)  