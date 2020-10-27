let userWeapon; //Här sparar vi valet som användaren gör
let computerWeapon; //Här sparar vi datorns val
let test = 'Leffe';

//Hämta användarens val
document.getElementById('rock').addEventListener('click', () => {
    userWeapon = 'rock';
})
document.getElementById('scissor').addEventListener('click', () => {
    userWeapon = 'scissor';
})
document.getElementById('paper').addEventListener('click', () => {
    userWeapon = 'paper';
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
}
//Avgör vinnare

//Visa vinnare


