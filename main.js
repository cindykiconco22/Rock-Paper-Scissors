var paper   = document.querySelector('#paper')
var rock    = document.querySelector('#rock')
var scissor = document.querySelector('#scissors')
var currentPlayShow = document.querySelector('#currentPlayShow')
var top_buttons_div = document.querySelector('#buttons')
var final_win = document.querySelector('#final_win')
var final_statement = document.querySelector('#final_statement')
var userClickPlay = document.querySelector('#userClickPlay')
var result = document.querySelector('#result')
var userValue = document.querySelector('#userValue')
var computerValue = document.querySelector('#computerValue')
var computerScore = document.querySelector('#computerScore')
var userScore = document.querySelector('#userScore')
var chosenCurrentPlay = 0;
var userChosen
//To count if the 4 chances of playing are over or not
var counter = 0;
//variables to keep count of win and lose values for user and computer
var user_wins = 0;
var computer_wins = 0;

//on paper
paper.addEventListener('click', function(){
    chosenCurrentPlay = 1
    currentPlayShow.textContent = "Current play: paper"
    maintainButtonStyles(paper, rock, scissor)

})

//on Rock
rock.addEventListener('click', function(){
    chosenCurrentPlay = 3
    currentPlayShow.textContent = "Current play: rock"
    maintainButtonStyles(rock, paper, scissor)
})

//on Scissors
scissors.addEventListener('click', function(){
    chosenCurrentPlay = 2
    currentPlayShow.textContent = "Current play: scissors"
    maintainButtonStyles(scissor, rock, paper)
})

//On User Play
userClickPlay.addEventListener('click', function(){
    //if play is clicked on nothing chosen, alert please choose a play choice first
    if(chosenCurrentPlay == 0){
        alert("Please choose a goal for the next game!")
    }else{
        counter++
        if(counter < 5){
            //Continue to play
            //if a play goal was chosen, then ...
            var userChoice = chosenCurrentPlay
            var computersChoice = generateRandomNumber()
        
            //Assigning chosen values for the users visibility
            userValue.textContent     = userChoice
            computerValue.textContent = computersChoice
        
            //if both computer and user generate a value that is not equal to the chosen plar, they both lose!
            if(chosenCurrentPlay == userChoice && chosenCurrentPlay == computersChoice){
                readUsersChoiceToTheUser(userChoice)
                readComputerChoiceToUser(computersChoice)
                result.textContent = "It's a tie, play again!"
                
            }else if(userChoice === 1){
                //Push the value for the users visibilty
                userValue.textContent = "Paper"
                //Push what the computer has chosen to the users visibilty
                readComputerChoiceToUser(computersChoice)
                //Compare with the computers generated values Now, to check if the user won or the computer won
                if(computersChoice > userChoice){
                //Computer wins
                    computer_wins++
                    result.textContent = "Computer Wins"
                }
                //paper covers rock
                if(computersChoice == 3){
                    user_wins++
                    result.textContent = "User Wins"
                }
            }else if(userChoice === 2){
                //scissors
                //Push the value for the users visibilty
                userValue.textContent = "Scissors"
                readComputerChoiceToUser(computersChoice)

                //Compare with the computers generated values Now, to check if the user won or the computer won
                if(computersChoice > userChoice){
                //Computer wins
                    computer_wins++
                    result.textContent = "Computer Wins"
                }
                //Check to see if its a tie
                if(computersChoice == userChoice){
                    result.textContent = "Its a tie"
                }
            }else if(userChoice === 3){
                //rock
                //Push the value for the users visibilty
                userValue.textContent = "Rock"
                readComputerChoiceToUser(computersChoice)
        
                //Compare with the computers generated values Now, to check if the user won or the computer won
                if(userChoice > computersChoice){
                //Computer wins
                    user_wins++
                    result.textContent = "User Wins"
                }

                //if computer generates paper at this point, it wins because paper covers rock
                if(computersChoice == 1){
                    computer_wins++
                    result.textContent = "Computer Wins"
                }
            }

            userScore.textContent = user_wins
            computerScore.textContent = computer_wins

        }else{
            // final win goes to computer or the user at this level after 4 tries
            user_computer_wins(user_wins, computer_wins, final_statement)
            top_buttons_div.style.display = "none"
            final_win.style.display="block"
            alert("You only play the game four times!, Click on restart!")
        }

    }
})

//Functions
function generateRandomNumber(){
    return Math.floor(Math.random() * 3) + 1
}

function readComputerChoiceToUser(choice){
    if(choice == 1){
        computerValue.textContent = "Paper"
    }else if(choice == 2){
        computerValue.textContent = "Scissors"
    }else if(choice == 3){
        computerValue.textContent = "Rock"
    }
}

function readUsersChoiceToTheUser(choice){
    if(choice == 1){
        userValue.textContent = "Paper"
    }else if(choice == 2){
        userValue.textContent = "Scissors"
    }else if(choice == 3){
        userValue.textContent = "Rock"
    }
}

function maintainButtonStyles(current, option1, option2){
    current.style.background= "blueviolet"
    current.style.color     = "whitesmoke"
    // rock button color after paper btn is active
    option1.style.color      = "black"
    option1.style.background = "tomato"
    // scissor button color after paper is active
    option2.style.color   = "black"
    option2.style.background = "tomato"
}

function user_computer_wins(user, computer, element){
    if(user > computer){
        element.textContent = "!! User wins this round !!"
    }else if(computer > user){
        element.textContent = "!! Computer wins this round !!"
    }else if(computer == user){
        element.textContent = "!! Its a tie !!"
    }
}