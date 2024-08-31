'''
Define a Python class named Car with the following attributes: make, model, year. 
Implement a method named display_info that prints out the car's information.
'''

class Car:
    def __init__(self,make,model,year):
        self.make= make
        self.model= model
        self.year = year
    def display_info(self):
        print(f'Make: {self.make}')
        print(f'Make: {self.model}')
        print(f'Make: {self.year}')

joshuas_car = Car('Range Rover','SUV Luxury',2025 )
joshuas_car.display_info()