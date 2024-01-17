import random
list = ["rock", "paper", "scissors"]
computer = random.choice(list)
def game():
    player = input("Choose rock, paper, or scissors: ")
    def stat():
        print("Computer had: " + computer)
        print("You had: " + player)
    if player == computer:
        print("draw")
        stat()
    elif player == "scissors" and computer == "rock":
        print("you lost")
        stat()
    elif player == "paper" and computer == "rock":
        print("you won")
        stat()
    elif player == "paper" and computer == "scissors":
        print("you lost")
        stat()
    elif player == "rock" and computer == "scissors":
        print("you won")
        stat()
    elif player == "scissors" and computer == "paper":
        print("you won")
        stat()
    elif player == "rock" and computer == "paper":
        print("you lost")
        stat()

while play == "yes":
    play = input("Do you still want to play?: ")
    game()  

    
