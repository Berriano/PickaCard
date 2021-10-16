'use strict';

// set variables
let lCard = document.getElementById('l-card');
let rCard = document.querySelector('#r-card');  

let aceChoice =  document.querySelector('#ace-choice');
let twoChoice =  document.querySelector('#two-choice');
let threeChoice =  document.querySelector('#three-choice');
let fourChoice =  document.querySelector('#four-choice');
let fiveChoice =  document.querySelector('#five-choice');
let sixChoice =  document.querySelector('#six-choice');
let sevenChoice =  document.querySelector('#seven-choice');
let eightChoice =  document.querySelector('#eight-choice');
let nineChoice =  document.querySelector('#nine-choice');
let tenChoice =  document.querySelector('#ten-choice');
let jackChoice =  document.querySelector('#jack-choice');
let queenChoice =  document.querySelector('#queen-choice');
let kingChoice =  document.querySelector('#king-choice');

let clubChoice =  document.querySelector('#club-choice');


// set random card and convert special cards
let randomCardNumber = Math.trunc(Math.random()*13)+1;
let randomCardSuit = Math.trunc(Math.random()*4)+1;

switch(randomCardSuit){

    case 1 : randomCardSuit = 'Hearts';
    break;
    case 2 : randomCardSuit = 'Spades';
    break;
    case 3 : randomCardSuit = 'Clubs';
    break;
    case 4 : randomCardSuit = 'Diamonds';
    break;
}

switch(randomCardNumber){
    case 1: randomCardNumber =  "Ace";
    case 11: randomCardNumber = "Jack";
    case 12: randomCardNumber = "Queen";
    case 13: randomCardNumber = "King";
}


let randomCard = `${randomCardNumber} of ${randomCardSuit}`;




// set number and suit choice by click

let mySuit ;
let myNumber ;
let myCard =  `${myNumber} of ${mySuit}`;




// /set functionality


lCard.addEventListener('click', function(){
    lCard.textContent = randomCard;  
});


// club choice

clubChoice.addEventListener('click', function(){
    mySuit = "Clubs";
    console.log(mySuit);
    });



//ace choice

aceChoice.addEventListener('click',function(){
    myNumber = "Ace";
    console.log(myNumber);
    });
//two choice

twoChoice.addEventListener('click', function(){
    myNumber = 2;
    console.log(myNumber);
    });

// three choice

threeChoice.addEventListener('click', function(){
    myNumber = 3;
    console.log(myNumber);
    });

fourChoice.addEventListener('click', function(){
    myNumber = 4;
    console.log(myNumber);
    });

fiveChoice.addEventListener('click', function(){
  myNumber = 5;
  console.log(myNumber);
   });

 sixChoice.addEventListener('click', function(){
     myNumber = 6;
            console.log(myNumber);
            });
sevenChoice.addEventListener('click', function(){
myNumber = 7;
console.log(myNumber);
});

eightChoice.addEventListener('click', function(){
myNumber = 8;
console.log(myNumber);
});
nineChoice.addEventListener('click', function(){
myNumber = 9;
console.log(myNumber);
});
tenChoice.addEventListener('click', function(){
    myNumber = 10;
    console.log(myNumber);
    });
jackChoice.addEventListener('click', function(){
myNumber = "Jack";
console.log(myNumber);
});
queenChoice.addEventListener('click', function(){
    myNumber = "Queen";
    console.log(myNumber);
    });
kingChoice.addEventListener('click', function(){
        myNumber = "King";
        console.log(myNumber);
        });
            
        
    