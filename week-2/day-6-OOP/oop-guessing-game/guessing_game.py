import random

class GuessingGame():

    def __init__(self, answer):
        self.answer = answer
        self.guess_result = None

    def guess(self, user_guess):
        if user_guess < self.answer:
            self.guess_result = 'low'
        elif user_guess > self.answer:
            self.guess_result = 'high'
        else:
            self.guess_result = 'correct'
        return self.guess_result

    def solved(self):
        return self.guess_result == 'correct'


# ----- main.py -----
game = GuessingGame(random.randint(1,100))
last_guess  = None
last_result = None

while game.solved() == False:
  if last_guess != None: 
    print(f"Oops! Your last guess ({last_guess}) was {last_result}.")
    print("")

  last_guess  = int(input("Enter your guess: "))
  last_result = game.guess(last_guess)


print(f"{last_guess} was correct!")