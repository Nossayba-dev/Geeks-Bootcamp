# Challenge 1
n = int(input("Enter a number: "))
i = int(input("Enter a length: "))
multiples = []

for i in range(1, i + 1):
    multiples.append(n * i)

print(multiples)
# Challenge 2

user_word = input("Enter a word: ")

new_word = ""

for i in range(len(user_word)):
    if i == 0 or user_word[i] != user_word[i - 1]:
        new_word += user_word[i]

print("New word:", new_word)
