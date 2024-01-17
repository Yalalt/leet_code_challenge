# Christmas Tree hiiw
import colorama
from colorama import Fore, Back, Style, init


init()
# Happy New Year 2024
# (rowNo * 2 - 1) all stars
# = all stars - 1 empty spaces
def ChristmasTree(height):
    stars = 1
    maxStars = height * 2 - 1
    print(Back.YELLOW + "Happy New Year 2024")
    for row in range(height):
        spaces = (maxStars - stars) // 2
        print(spaces * " " + Back.GREEN + stars * "*" + Style.RESET_ALL + spaces * " ")
        stars += 2
    
    # Hol hesegiin hiiw
    spcs = (maxStars - height // 2) // 2
    treepad = height // 2
    for row in range(2):
        print(spcs * " " + treepad * "*" + spcs * " ")
    
        
ChristmasTree(7)