'use strict';

// set variables
const lCard = document.getElementById('l-card');
const rCard = document.querySelector('#r-card');  

// set random card and convert special cards
let randomCardNumber = Math.trunc(Math.random()*13)+1;
let randomCardSuit = Math.trunc(Math.random()*4)+1;

switch(randomCardSuit){

    case 1 : randomCardSuit = ('Hearts');
    break;
    case 2 : randomCardSuit = ('Spades');
    break;
    case 3 : randomCardSuit = ('Clubs');
    break;
    case 4 : randomCardSuit = ('Diamonds');
    break;
}

switch(randomCardNumber){
    case 1: randomCardNumber = ("Ace");
    case 11: randomCardNumber =("Jack");
    case 12: randomCardNumber =("Queen");
    case 13: randomCardNumber =("King");
}


let randomCard = `${randomCardNumber} of ${randomCardSuit}`;




// /set functionality



lCard.addEventListener('click', function(){
    lCard.textContent = randomCard;  
});
rCard.addEventListener('click', function(){
    console.log('right card clicked');
});



