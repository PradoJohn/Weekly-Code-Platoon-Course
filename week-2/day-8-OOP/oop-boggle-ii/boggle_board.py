import random

# 65-90 unicode [A-Z]

class BoggleBoard:
  
      # array of letters for random selection
      def __init__(self):
            self.matrix = [['_' for _ in range(4)] for _ in range(4)] # 4x4 grid with '_' place holder

      def shake(self):
            for row in range(4):
                  for column in range(4):
                        random_letter = self.die()
                        self.matrix[row][column] = random_letter

      def display(self):  
            for row in self.matrix:
                  print(' '.join(row))

      # This will return 1 random letter from 6 random letter taken from 26 alpha letter
      # 6 letters from 26 alphabet
      def die(self):
            six_letters = []
            # For loop to create 6 random letters
            for _ in range(6):
                  ltr = random.choice("ABCDEFGHIJKLMNOPQRSTUVWXYZ")
            if ltr == 'Q':
                  six_letters.append('Qu')
            else:
                  six_letters.append(ltr)
            
            # Take 1 random letter from the 6 random letter
            num = random.randint(0,5)

            return six_letters[num] 
    
      def play(self):
            play = True
            while play:
                  choice = int(input("To shake things up, enter 1 \nTo leave the game, enter 2\n "))
                  if choice == 1:
                        self.shake()
                        self.display()
                  elif choice == 2:
                        play = False
                  else:
                        print("The only options are 1 or 2")



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

# boggle.die()
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