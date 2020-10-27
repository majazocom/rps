let userWeapon; //Här sparar vi valet som användaren gör
let computerWeapon; //Här sparar vi datorns val
let test = 'Leffe';

//Hämta användarens val
document.getElementById('rock').addEventListener('click', () => {
    userWeapon = 'rock';
    randomComputerWeapon();
})
document.getElementById('scissor').addEventListener('click', () => {
    userWeapon = 'scissor';
    randomComputerWeapon();
})
document.getElementById('paper').addEventListener('click', () => {
    userWeapon = 'paper';
    randomComputerWeapon();
})
//Slumpa datorns val
let randomComputerWeapon = () => {
    computerWeapon = Math.round(Math.random() * 2);

    if (computerWeapon == 0) {
        computerWeapon = 'rock'
    } else if (computerWeapon == 1) {
        computerWeapon = 'scissor'
    } else {
        computerWeapon = 'paper'
    }
    getWinner();
}
//Avgör vinnare
let getWinner = () => {
    if (userWeapon == computerWeapon) {
        console.log('its a tie');
    } else if (userWeapon == 'rock' && computerWeapon == 'scissor') {
        console.log('A winner is you!');
    } else if (userWeapon == 'rock' && computerWeapon == 'paper') {
        console.log('A winner is computer!');
    } else if (userWeapon == 'scissor' && computerWeapon == 'paper') {
        console.log('A winner is you!');
    } else if (userWeapon == 'scissor' && computerWeapon == 'rock') {
        console.log('A winner is computer!');
    } else if (userWeapon == 'paper' && computerWeapon == 'rock') {
        console.log('A winner is you!');
    } else if (userWeapon == 'paper' && computerWeapon == 'scissor') {
        console.log('A winner is computer!');
    }
}

//Visa vinnare


