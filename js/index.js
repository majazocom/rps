let userWeapon; //Här sparar vi valet som användaren gör
let computerWeapon; //Här sparar vi datorns val
let test = 'Leffe';
let userWins = 0;
let computerWins = 0;
let rounds = 0;

//Hämta användarens val
document.getElementById('rock').addEventListener('click', () => {
    rounds = rounds + 1;
    userWeapon = 'rock';
    randomComputerWeapon();
    document.getElementById('winner').innerHTML = getWinner();
    if (rounds == 10) {
        console.log(userWins, computerWins);
    }
})
document.getElementById('scissor').addEventListener('click', () => {
    rounds = rounds + 1;
    userWeapon = 'scissor';
    randomComputerWeapon();
    document.getElementById('winner').innerHTML = getWinner();
    if (rounds == 10) {
        console.log(userWins, computerWins);
    }
})
document.getElementById('paper').addEventListener('click', () => {
    rounds = rounds + 1;
    userWeapon = 'paper';
    randomComputerWeapon();
    document.getElementById('winner').innerHTML = getWinner();
    if (rounds == 10) {
        console.log(userWins, computerWins);
    }
})
//Slumpa datorns val
let randomComputerWeapon = () => {
    console.log(rounds);
    computerWeapon = Math.round(Math.random() * 2);

    if (computerWeapon == 0) {
        computerWeapon = 'rock'
    } else if (computerWeapon == 1) {
        computerWeapon = 'scissor'
    } else {
        computerWeapon = 'paper'
    }
}
//Avgör vinnare
let getWinner = () => {
    if (userWeapon == computerWeapon) {
        return 'its a tie';
    } else if (userWeapon == 'rock' && computerWeapon == 'scissor') {
        userWins++;
        return 'you won';
    } else if (userWeapon == 'rock' && computerWeapon == 'paper') {
        computerWins++;
        return 'computer won';
    } else if (userWeapon == 'scissor' && computerWeapon == 'paper') {
        userWins++;
        return 'you won';
    } else if (userWeapon == 'scissor' && computerWeapon == 'rock') {
        computerWins++;
        return 'computer won';
    } else if (userWeapon == 'paper' && computerWeapon == 'rock') {
        userWins++;
        return 'you won';
    } else if (userWeapon == 'paper' && computerWeapon == 'scissor') {
        computerWins++;
        return 'computer won';
    }
}

//Visa vinnare


