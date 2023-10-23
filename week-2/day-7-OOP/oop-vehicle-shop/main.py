from car_management import CarManager

def menu():
    print("""
    \t\t\t----  WELCOME  ----
    \t\t\t1. Add a car
    \t\t\t2. View all cars
    \t\t\t3. View total number of cars
    \t\t\t4. See a car's details
    \t\t\t5. Service a car
    \t\t\t6. Update mileage
    \t\t\t7. Quit""")
def main():
    menu()
    while True:
        user_input = int(input("Main Menu: "))
        match user_input:
            case 1:
                CarManager.add_cars()
            case 2:
                CarManager.view_all_cars()
            case 3:
                CarManager.view_total_cars()
            case 4:
                CarManager.view_car_detail()
            case 5:
                break
            case 6:
                break
            case 7:
                break
            case _:
                print("Invalid Menu")
    


main()