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

// //scorecard


// switch statement scoring


const switchScoring = function(){ 

switch (randomCard) {

    case  `${myNumber} of ${mySuit}` :
        scoreCard.textContent = `Score:${score += correctGuess}`;
           console.log( `You score ${correctGuess} points`);
              console.log( myNumber, mySuit , randomCardNumber, randomCardSuit); 
         break;


    case `${myNumber+4} of ${mySuit}`:
        scoreCard.textContent = `Score:${score +=withinFour}`;
            console.log( `You score ${withinFour} points`);
              console.log( myNumber, mySuit , randomCardNumber, randomCardSuit);
              break;

     case `${myNumber-4} of ${mySuit}`:
                scoreCard.textContent = `Score:${score += withinFour}`;
                    console.log( `You score ${withinFour} points`);
                      console.log( myNumber, mySuit , randomCardNumber, randomCardSuit);
                      break;
        

    case `${myNumber+3} of ${mySuit}` :
        scoreCard.textContent = `Score:${score += withinThree}`;
            console.log( `You score ${withinThree} points`);
                console.log( myNumber, mySuit , randomCardNumber, randomCardSuit);
                break;
                
    case `${myNumber-3} of ${mySuit}` :
                    scoreCard.textContent = `Score:${score += withinThree}`;
                        console.log( `You score ${withinThree} points`);
                            console.log( myNumber, mySuit , randomCardNumber, randomCardSuit);
                            break;
            
    case`${myNumber+2} of ${mySuit}`:

            scoreCard.textContent = `Score:${score += withinTwo}`;
                 console.log( `You score ${withinTwo} points`);
                   console.log( myNumber, mySuit , randomCardNumber, randomCardSuit);
                   break;
                 
    case`${myNumber-2} of ${mySuit}`:

                   scoreCard.textContent = `Score:${score += withinTwo}`;
                        console.log( `You score ${withinTwo} points`);
                          console.log( myNumber, mySuit , randomCardNumber, randomCardSuit);
                          break;

     case  `${myNumber-1} of ${mySuit}`  :
                      scoreCard.textContent = `Score:${score += withinOne}`;
                        console.log( `You score ${withinOne} points`);
                            break;
                      
                      
      case `${myNumber+1} of ${mySuit}`  :
                        scoreCard.textContent = `Score:${score += withinOne}`;
                        console.log( `You score ${withinOne} points`);
                            break;

            //-------------------number scoring not working -------------------------//

        case  myNumber: 
            scoreCard.textContent = `Score:${score += correctNumber}`;
            break;
            

        default :console.log(`NO POINTS SCORED`);
        break;
    }

}



  // scoringSystem();
  switchScoring();

  // /set functionality
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
    // myNumber = "Ace";
    myNumber = 1;
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
// myNumber = "Jack";
myNumber = 11;
console.log(myNumber);
});
queenChoice.addEventListener('click', function(){
    // myNumber = "Queen";
    myNumber = 12;
    console.log(myNumber);
    });
kingChoice.addEventListener('click', function(){
        // myNumber = "King";
        myNumber = 13;
        console.log(myNumber);
        });
            
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

