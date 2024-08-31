'''
Write a
1. Python function named calculate_factorial that takes 
2.a non-negative integer n as input and returns the factorial of that number. 
The factorial of  a non-negative integer n is the product of all positive integers
 less than or equal to n.
'''
def calculate_factorial(n):
    # count = 0
    product = 1
    # while(count<n):
    #     count +=1
    #     product *=count
    # print(product)
    
    for num in range(1,n+1):
        product *=num

    print(product)
calculate_factorial(5)

