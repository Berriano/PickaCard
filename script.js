'use strict';

// set variables
let lCard = document.getElementById('l-card');
let rCard = document.querySelector('#r-card'); 
let scoreCard = document.querySelector('.scorer');


let mySuit ;
let myNumber;

let score = 0;
let correctGuess = 500;
let withinOne = 250;
let withinTwo = 125;
let withinThree = 75;
let withinFour = 50;
let withinFive = 25;
let correctNumber = 15;
let correctSuit = 10;
let correctColor = 5;

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

let randomCard = `${randomCardNumber} of ${randomCardSuit}`;

console.log(randomCard);


// scoring

const switchScoring = function(){ 


if(myNumber===randomCardNumber && mySuit === randomCardSuit){
     scoreCard.textContent = `Score:${score += correctGuess}`;
        console.log( `You score ${correctGuess} points`);
          console.log( myNumber, mySuit , randomCardNumber, randomCardSuit); 
 } 
else if((myNumber+5) === randomCardNumber && mySuit === randomCardSuit){
    scoreCard.textContent = `Score:${score +=withinFive}`;
     console.log( `You score ${withinFive} points`);
        console.log( myNumber, mySuit , randomCardNumber, randomCardSuit);
 }
else if((myNumber-5) === randomCardNumber && mySuit === randomCardSuit){
    scoreCard.textContent = `Score:${score +=withinFive}`;
       console.log( `You score ${withinFive} points`);
          console.log( myNumber, mySuit , randomCardNumber, randomCardSuit);
}
else if((myNumber-4) === randomCardNumber && mySuit === randomCardSuit){
 scoreCard.textContent = `Score:${score +=withinFour}`;
    console.log( `You score ${withinFour} points`);
         console.log( myNumber, mySuit , randomCardNumber, randomCardSuit);
}
else if((myNumber+4) === randomCardNumber && mySuit === randomCardSuit){
scoreCard.textContent = `Score:${score +=withinFour}`;
 console.log( `You score ${withinFour} points`);
    console.log( myNumber, mySuit , randomCardNumber, randomCardSuit);
}
else if((myNumber-3) === randomCardNumber && mySuit === randomCardSuit){
    scoreCard.textContent = `Score:${score +=withinThree}`;
        console.log( `You score ${withinThree} points`);
            console.log( myNumber, mySuit , randomCardNumber, randomCardSuit);
}
else if((myNumber+3) === randomCardNumber && mySuit === randomCardSuit){
    scoreCard.textContent = `Score:${score +=withinThree}`;
        console.log( `You score ${withinThree} points`);
            console.log( myNumber, mySuit , randomCardNumber, randomCardSuit);
}
else if((myNumber-2) === randomCardNumber && mySuit === randomCardSuit){
    scoreCard.textContent = `Score:${score +=withinTwo}`;
        console.log( `You score ${withinTwo} points`);
            console.log( myNumber, mySuit , randomCardNumber, randomCardSuit);
}
else if((myNumber+2) === randomCardNumber && mySuit === randomCardSuit){
    scoreCard.textContent = `Score:${score +=withinTwo}`;
        console.log( `You score ${withinTwo} points`);
            console.log( myNumber, mySuit , randomCardNumber, randomCardSuit);
}
else if((myNumber-1) === randomCardNumber && mySuit === randomCardSuit){
    scoreCard.textContent = `Score:${score +=withinOne}`;
        console.log( `You score ${withinOne} points`);
            console.log( myNumber, mySuit , randomCardNumber, randomCardSuit);
}
else if((myNumber+1) === randomCardNumber && mySuit === randomCardSuit){
    scoreCard.textContent = `Score:${score +=withinOne}`;
        console.log( `You score ${withinOne} points`);
            console.log( myNumber, mySuit , randomCardNumber, randomCardSuit);
}
else if (myNumber === randomCardNumber && mySuit !== randomCardSuit){
    scoreCard.textContent = `Score:${score += correctNumber}`;
        console.log( `You score ${correctNumber} points`);
            console.log( myNumber, mySuit , randomCardNumber, randomCardSuit);
}
else if(myNumber !== randomCardNumber && mySuit === randomCardSuit){
    scoreCard.textContent = `Score:${score += correctSuit}`;
        console.log( `You score ${correctSuit} points`);
            console.log( myNumber, mySuit , randomCardNumber, randomCardSuit);
}

//------------------------- sort correct card color--------------------------------//


// else if(myNumber !== randomCardNumber && mySuit === randomCardSuit){
//     scoreCard.textContent = `Score:${score +=withinFive}`;
//         console.log( `You score ${withinFive} points`);
//             console.log( myNumber, mySuit , randomCardNumber, randomCardSuit);
// }

} 


  // /set functionality

  const myNumFunc = myNo =>{ myNumber = myNo;
  console.log(myNumber);};

lCard.addEventListener('click', function(){

switch(randomCardNumber){
    case 1: randomCardNumber =  "Ace";
    break;
    case 11: randomCardNumber = "Jack";
    break;
    case 12: randomCardNumber = "Queen";
    break;    
    case 13: randomCardNumber = "King";
    break;
}
  lCard.textContent =  `${randomCardNumber} of ${randomCardSuit}.`;
  
switchScoring();
  
});


rCard.addEventListener('click', function(){

    if(myNumber && mySuit){

        switch(myNumber){
            case 1: myNumber =  "Ace";
            break;
            case 11: myNumber = "Jack";
            break;
            case 12: myNumber = "Queen";
            break;
            case 13: myNumber = "King";
            break;
        }


        
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
myNumFunc(1);
})

twoChoice.addEventListener('click', function(){
myNumFunc(2);
})

threeChoice.addEventListener('click', function(){
myNumFunc(3);
})

fourChoice.addEventListener('click', function(){
myNumFunc(4);
})

fiveChoice.addEventListener('click', function(){
myNumFunc(5);
})

 sixChoice.addEventListener('click', function(){
myNumFunc(6);
 })
sevenChoice.addEventListener('click', function(){
myNumFunc(7);
})

eightChoice.addEventListener('click', function(){
myNumFunc(8);
})
nineChoice.addEventListener('click', function(){
myNumFunc(9);
})
tenChoice.addEventListener('click', function(){
myNumFunc(10);
})
jackChoice.addEventListener('click', function(){
myNumFunc(11);
})
queenChoice.addEventListener('click', function(){
myNumFunc(12);
})
kingChoice.addEventListener('click', function(){
myNumFunc(13);
})
            
                // ------------------RESET--------------------//

 reset.addEventListener('click', function(){

    randomCardNumber = Math.trunc(Math.random()*13)+1;
    randomCardSuit = Math.trunc(Math.random()*4)+1;
    
  
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
    randomCard = `${randomCardNumber} of ${randomCardSuit}`;
     console.log(randomCard);

     lCard.textContent = `Guess again and click me.....`


 })

