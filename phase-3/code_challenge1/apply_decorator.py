'''
Write a Python function named apply_decorator that takes a 
function func as input and applies a decorator named decorator_func.
 The decorator should simply print "Decorator Applied" before calling the original function.
'''
'''
a function that takes another function as an argument and returns a new function that adds some kind 
of functionality
'''
def apply_decorator(func):
    def wrapper(*args, **kwrags):
        print('Decorator applied')
        return func(*args,**kwrags)
    return wrapper
def decorator_func(func):
    return apply_decorator(func)

def day():
    print('today is awesome')

# Example of how to use apply_decorator
@apply_decorator
def my_function():
    print("Original Function Called")

# Call the decorated function
my_function()