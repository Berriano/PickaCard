'use strict';

// set variables
let lCard = document.getElementById('l-card');
let rCard = document.querySelector('#r-card'); 

let mySuit ;
let myNumber;

let score = 0;
let correctGuess = 500;
let withinOne = 250;
let withinTwo = 125;
let withinThree = 75;
let withinFour = 50;
let withinFive = 25;

//buttons
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
let heartChoice =  document.querySelector('#heart-choice');
let spadeChoice =  document.querySelector('#spade-choice');
let diamondChoice =  document.querySelector('#diamond-choice');

let reset = document.querySelector('#reset');

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

console.log(randomCard);


// if statement scoring

const scoringSystem = function(){
if(randomCardNumber === myNumber && randomCardSuit === mySuit){
    
    console.log( `You score ${correctGuess} points`);
    console.log( myNumber , randomCardNumber);
}
    else if((randomCardNumber - 1 || randomCardNumber +1) === myNumber  && randomCardSuit === mySuit){
        console.log( `You score ${withinOne} points`);
        console.log( myNumber , randomCardNumber);
    }
    else if ((randomCardNumber - 2 || randomCardNumber + 2) === myNumber  && randomCardSuit === mySuit){
        console.log( `You score ${withinTwo} points`);
        console.log( myNumber , randomCardNumber);
    }
    else if ((randomCardNumber - 3 || randomCardNumber +3) === myNumber  && randomCardSuit === mySuit){
        console.log( `You score ${withinThree} points`);
        console.log( myNumber , randomCardNumber);
    }
    else if ((randomCardNumber - 4 || randomCardNumber + 4) === myNumber  && randomCardSuit === mySuit){
        console.log( `You score ${withinFour} points`);
        console.log( myNumber , randomCardNumber);
    }
    else if ((randomCardNumber - 5 || randomCardNumber + 5) === myNumber  && randomCardSuit === mySuit){
    console.log( `You score ${withinFive} points`);}
    else {console.log('No points this time!!');console.log( myNumber , randomCardNumber);
    }
    }


// /set functionality


lCard.addEventListener('click', function(){
    lCard.textContent =  `${randomCardNumber} of ${randomCardSuit}.`;
    scoringSystem();
});


rCard.addEventListener('click', function(){
    if(myNumber && mySuit){

    rCard.textContent =`${myNumber} of ${mySuit}`;
}
else    rCard.textContent =`Please Pick a Card!!`;
});

// suit choice

clubChoice.addEventListener('click', function(){
    mySuit = "Clubs";
    console.log(mySuit);
    });

heartChoice.addEventListener('click', function(){
mySuit = "Hearts";
console.log(mySuit);
});

spadeChoice.addEventListener('click', function(){
mySuit = "Spades";
console.log(mySuit);
})

diamondChoice.addEventListener('click', function(){
mySuit = "Diamonds";
console.log(mySuit);
})


 //number choice 

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
            
                // ------------------RESET--------------------//

// reset.addEventListener('click', scoringSystem())

