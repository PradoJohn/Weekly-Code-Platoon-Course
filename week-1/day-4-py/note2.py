# 

import os

# cwd = os.getcwd()

# print(cwd)


abs_path_to_file = os.path.abspath('./test.txt')

print(abs_path_to_file)

with open(abs_path_to_file, 'r') as file:
    for line in file:
        print(line)