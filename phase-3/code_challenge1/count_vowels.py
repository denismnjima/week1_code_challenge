'''
Write a Python 
1.function named count_vowels that 
2.takes a string text as input and 
3.returns the count of vowels (a, e, i, o, u) in the string. Ignore case sensitivity.
'''
import re
def count_vowels(text):
    # vowels = 'aeiou'
    # count = 0
    # for char in text.lower():
    #     if char in vowels:
    #         count +=1
    # return count
    vowels = re.findall(r'[aeiou]',text)
    print(len(vowels))

count_vowels('This was a good day')