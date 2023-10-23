import csv

user_input = input('Type animal: ')
# if this animan is in the dictionary or list then we read it
match user_input:
    case 'dogs':
        # Open the CSV file for reading
        with open('data/dogs.csv') as myfile:
            # Create a CSV reader object
            csv_reader = csv.DictReader(myfile, skipinitialspace=True)

            # Iterate through each row in the CSV file
            for row in csv_reader:
                # Each row is a list of values, so you can access them by index
                name, age, breed = row['name'], row['age'], row['breed']
                print(f"{name} | {age} | {breed}")

    case 'cats':

        # Open the CSV file for reading
        with open('data/cats.csv') as myfile:
            # Create a CSV reader object
            csv_reader = csv.DictReader(myfile, skipinitialspace=True)

            # Iterate through each row in the CSV file
            for row in csv_reader:
                # Each row is a list of values, so you can access them by index
                name, age, breed = row['name'], row['age'], row['breed']
                print(f"{name} | {age} | {breed}")
    case _:
        print("No Animal Found")