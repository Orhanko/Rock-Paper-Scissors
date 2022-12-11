let userCounter = 0;
let computerCounter = 0;
const divResultOutput = document.querySelector('.text')

function random(){
    let number = Math.floor(Math.random() * 3) + 1;
    if(number == 1){
        return "paper";
    }else if(number == 2){
        return "rock";
    }else{
        return "scissors";
    }
}




function homeResult(){
    const homeContainer = document.querySelector('.home-container');
    const homeResult = document.querySelector('.homeResult')
    homeResult.remove();
    let userResult = userCounter.toString();
    const divHome = document.createElement('div');
    divHome.classList.add('homeResult');
    divHome.style.border = "1px solid black";
    divHome.style.padding = "5px"
    divHome.style.borderRadius = "4.5px"
    divHome.textContent = userResult;
    homeContainer.appendChild(divHome);
}

    function guestResult(){
        const guestContainer = document.querySelector(".guest-container");
        const guestResult = document.querySelector(".guestResult")
        guestResult.remove();
        let computerResult = computerCounter.toString();
        const divGuest = document.createElement("div");
        divGuest.classList.add('guestResult');
        divGuest.style.border = "1px solid black";
        divGuest.style.padding = "5px"
        divGuest.style.borderRadius = "4.5px"
        divGuest.textContent = computerResult;
        guestContainer.appendChild(divGuest);
        }




function oneRound(userChoice) {
    
    if(userCounter<5 && computerCounter<5){
    let computerChoice = random();
    console.log(computerChoice)
    
    /*let userChoice = ""

    while(userChoice != "paper" && userChoice != "rock" && userChoice != "scissors"){
        userChoice = prompt("Please, make a choice!")
    }
    let userChoiceFinal = userChoice.toLowerCase();*/
    
    switch(userChoice){
        case "scissors":
            if (userChoice === computerChoice){
                console.log("Same choice!");
                resultOutput = "This round is a Tie. The result remains the same"
                divResultOutput.textContent = resultOutput
                
                console.log("The Result is: " + userCounter + ":" + computerCounter)
            }else if(computerChoice == "paper"){
                resultOutput = "You won this round, " + "The computer chose: " + computerChoice
                divResultOutput.textContent = resultOutput
                console.log("You won this round, " + "The computer chose: " + computerChoice);
                userCounter++;
                homeResult();
                console.log("The Result is: " + userCounter + ":" + computerCounter)
            }else if(computerChoice == "rock"){
                resultOutput = "You lost this round, " + "The computer chose: " + computerChoice
                divResultOutput.textContent = resultOutput
                console.log("You lost this round, " + "The computer chose: " + computerChoice);
                computerCounter++;
                guestResult(); 
                console.log("The Result is: " + userCounter + ":" + computerCounter)
            }
            break;
        case "paper":
            if (userChoice === computerChoice){
                console.log("Same choice");
                resultOutput = "This round is a Tie. The result remains the same"
                divResultOutput.textContent = resultOutput
                console.log("The Result is: " + userCounter + ":" + computerCounter)
            }else if(computerChoice == "rock"){
                resultOutput = "You won this round, " + "The computer chose: " + computerChoice
                divResultOutput.textContent = resultOutput
                console.log("You won this round, " + "The computer chose: " + computerChoice);
                userCounter++;
                homeResult();
                console.log("The Result is: " + userCounter + ":" + computerCounter)
            }else if(computerChoice == "scissors"){
                console.log("You lost this round, " + "The computer chose: " + computerChoice);
                resultOutput = "You lost this round, " + "The computer chose: " + computerChoice
                divResultOutput.textContent = resultOutput
                computerCounter++;
                guestResult();
                console.log("The Result is: " + userCounter + ":" + computerCounter)
            }
            break;

        case "rock":
            if (userChoice === computerChoice){
                console.log("Same choice!");
                resultOutput = "This round is a Tie. The result remains the same"
                divResultOutput.textContent = resultOutput
                console.log("The Result is: " + userCounter + ":" + computerCounter)
            }else if( computerChoice == "scissors"){
                resultOutput = 'You won this round, The computer chose: ' + computerChoice
                divResultOutput.textContent = resultOutput
                console.log("You won this round, " + "The computer chose: " + computerChoice);
                userCounter++
                homeResult();
                console.log("The Result is: " + userCounter + ":" + computerCounter)
            }else if(computerChoice == "paper"){
                resultOutput = "You lost this round, " + "The computer chose: " + computerChoice
                divResultOutput.textContent = resultOutput
                console.log("You lost this round, " + "The computer chose: " + computerChoice);
                computerCounter++
               guestResult();
                console.log("The Result is: " + userCounter + ":" + computerCounter)

            }
            break;
    }
}else{
    return;
}

if(userCounter == 5 && userCounter > computerCounter){
    console.log("User won")
    divResultOutput.textContent = "You won! Congratulations 🎉🎉🎉"
}else if(computerCounter == 5 && userCounter < computerCounter){
    console.log("Computer won")
    divResultOutput.textContent = "The computer won 😞. Try your luck again after reseting the result"
}
}
    


function resetResult(){
    userCounter = 0;
    homeResult();
    const home = document.querySelector(".homeResult")
    home.style.backgroundColor = "#5AC5C6"
    home.style.border = "none"
    computerCounter = 0;
    guestResult();
    const guest = document.querySelector(".guestResult")
    guest.style.backgroundColor = "#5AC5C6"
    guest.style.border = "none"
    divResultOutput.textContent = ""
}
const divPaper = document.querySelector(".paper")
const divScissors = document.querySelector(".scissors")
const divRock = document.querySelector(".rock")

divPaper.addEventListener("click", () =>{
    let paper = "paper"
    oneRound(paper)
})

divScissors.addEventListener("click", () =>{
    let scissors = "scissors"
    oneRound(scissors)
})

divRock.addEventListener("click", () =>{
    let rock = "rock"
    oneRound(rock)
})