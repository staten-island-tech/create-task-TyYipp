import random
list = ["rock", "paper", "scissors"]
computer = random.choice(list)
print(computer)
def game():
    player = input("Choose rock, paper, or scissors: ")
    def stat():
        print("Computer had: " + computer)
        print("You had: " + player.lower())
    if player.lower() == computer:
        print("draw")
        stat()
    elif player.lower() == "scissors" and computer == "rock" or player.lower() == "paper" and computer == "scissors" or player.lower() == "rock" and computer == "paper":
        print("you lost")
        stat()
    elif player.lower() == "paper" and computer == "rock" or player.lower() == "rock" and computer == "scissors" or player.lower() == "scissors" and computer == "paper":
        print("you won")
        stat()
    else:
        print("try again monkey")
        game()
game()
    
