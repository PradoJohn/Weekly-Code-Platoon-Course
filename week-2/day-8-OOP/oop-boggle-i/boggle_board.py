import random
import re

class BoggleBoard:
  
  def __init__(self):
    # 4x4 grid with '_' place holder
    self.matrix = [['_' for _ in range(4)] for _ in range(4)] 

  # Shake function appends letters in the matrix
  def shake(self):
    for row in range(4):
      for column in range(4):
          random_letter = self.die()
          self.matrix[row][column] = random_letter

  # display function display the current stored matrix
  def display(self):  
    for row in self.matrix:
      print(' '.join(row))

  # Get 1 random letter from 6 random letter taken from 26 alpha letter
  # 6 letters from 26 alphabet
  def die(self):
      six_letters = []
      # For loop to create 6 random letters
      for _ in range(6):
        ltr = random.choice("ABCDEFGHIJKLMNOPQRSTUVWXYZ")
        six_letters.append('Qu' if ltr == 'Q' else ltr)
        
      # Take 1 random letter from the 6 random letter
      num = random.randint(0,5)
      return six_letters[num] 
    
  def play(self):
    
    while True:
        print("""
              --BOGGLE--
              1. Start
              2. Shake
              3. Include Word
              4. Quit
              --BOGGLE--
              """)
        user_input = int(input("Main Menu: \n==> "))
        match user_input:
          case 1:
            self.display()
          case 2:
            self.shake()
            self.display()
          case 3:
            self.include_word()
          case _:
            print('** Game Over **')
            break

  def include_word(self):
    result = False 
    user_input = str(input("Type the word: "))
    print("-----------------------")
    user_input = user_input.upper()
    #To Replace QU to Q
    word_input = re.sub('[qQ][uU]', 'Qu', user_input)
    
    # Step 1:(Row)We join each row and match with user input and => reversed
    for char in self.matrix:
        row_word = ''.join(char)
    result = True if row_word == word_input or row_word[::-1] == word_input else False
    
    # Step 2:(Column) matrix[row(iterates to 4)][column(0)]
    for col in range(4):
        column_word = ""
        for row in range(4):
          column_word += self.matrix[row][col]
        
    result = True if column_word == word_input or column_word[::-1] == word_input else False

    # Step 3:(Diagonal/Down) matrix[row][col] row and col iterate simultaneously
    down_diagonal = ""
    for i in range(len(self.matrix)):
      down_diagonal += self.matrix[i][i]
    result = True if down_diagonal == word_input or down_diagonal[::-1] == word_input else False

    # Step 4: (Diagonal/Up) matrix[row--][col++]
    diagonal_up = ""
    for i in range(4):
        diagonal_up += self.matrix[i][3 - i]
    result = True if diagonal_up == word_input or diagonal_up[::-1] == word_input else False


    self.display()
    print(f"\n** {result} **")

# We have the matrix 4x4
# A B C D
# F Z V
# H R X
# W     Y     

# user input
# Step 1:(Row)We join each row and match with user input and => reversed
# Step 2:(Column) matrix[row(iterates to 4)][column(0)]
# Step 2.1: join method for column => reversed
# Step 3:(Diagonal/Down) matrix[row][col] row and col iterate simultaneously
# Step 3.1: Join method and reversed => compare user input
# Step 4: (Diagonal/Up) matrix[row--][col++]
# Step 4.1: Join method and reversed => compare
# if match return True else False
# if user input in the matrix we return True or False


# --MAin--
boggle = BoggleBoard()

# # boggle.die()
boggle.play()



### REFERENCE CODES######
#   def shake():
#     for i in range(4):
#         row = []
#         for j in range(4):
#             random_letter = chr(random.randint(65,90))
#             if random_letter == "Q":
#               row.append("Qu")
#             else:
#                row.append(random_letter)
#         BoggleBoard.matrix.append(row)
#     for row in BoggleBoard.matrix:
#       print(row)