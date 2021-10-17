'use strict';

// set variables
let lCard = document.getElementById('l-card');
let rCard = document.querySelector('#r-card'); 
let scoreCard = document.querySelector('.scorer');


let mySuit ;
let myNumber;

let score = 0;
const scoreArray =[5,10,15,25,50,75,125,250,500]



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


if(matchUpFunc(myNumber)){
     scoreCardFunc(`Score:${score += scoreArray[8]}`);
        console.log( `You score ${scoreArray[8]} points`);
          
 } 
else if(matchUpFunc(myNumber+5)){
    scoreCardFunc(`Score:${score += scoreArray[3]}`);
     console.log( `You score ${scoreArray[3]} points`);
       
 }
else if(matchUpFunc(myNumber-5)){
   scoreCardFunc( `Score:${score +=scoreArray[3]}`);
       console.log( `You score ${scoreArray[3]} points`);
         
}
else if(matchUpFunc(myNumber-4)){
scoreCardFunc( `Score:${score += scoreArray[4]}`);
    console.log( `You score ${ scoreArray[4]} points`);
        
}
else if(matchUpFunc(myNumber+4)){
scoreCard.textContent = `Score:${score += scoreArray[4]}`;
 console.log( `You score ${ scoreArray[4]} points`);
   
}
else if(matchUpFunc(myNumber-3)){
   scoreCardFunc( `Score:${score += scoreArray[5]}`);
        console.log( `You score ${ scoreArray[5]} points`);
           
}
else if(matchUpFunc(myNumber+3)){
   scoreCardFunc( `Score:${score += scoreArray[5]}`);
        console.log( `You score ${ scoreArray[5]} points`);
           
}
else if(matchUpFunc(myNumber-2)){
   scoreCardFunc( `Score:${score += scoreArray[6]}`);
        console.log( `You score ${ scoreArray[6]} points`);
           
}
else if(matchUpFunc(myNumber+2)){
   scoreCardFunc( `Score:${score += scoreArray[6]}`);
        console.log( `You score ${ scoreArray[6]} points`);
           
}
else if(matchUpFunc(myNumber-1)){
   scoreCardFunc( `Score:${score += scoreArray[7]}`);
        console.log( `You score ${ scoreArray[7]} points`);
           
}
else if(matchUpFunc(myNumber+1)){
    scoreCardFunc( `Score:${score += scoreArray[7]}`);
        console.log( `You score ${ scoreArray[7]} points`);
           
}
else if (myNumber === randomCardNumber && mySuit !== randomCardSuit){
    scoreCardFunc( `Score:${score +=  scoreArray[2]}`);
        console.log( `You score ${ scoreArray[2]} points`);
           
}
else if(myNumber !== randomCardNumber && mySuit === randomCardSuit){
    scoreCardFunc( `Score:${score += scoreArray[1]}`);
        console.log( `You score ${scoreArray[1]} points`);
           
}


} 


  // /set functionality

  const myNumFunc = myNo =>{ myNumber = myNo;
  console.log(myNumber);};
  const scoreCardFunc = scoreText => scoreCard.textContent = scoreText;
  const matchUpFunc= match => match ===randomCardNumber && mySuit === randomCardSuit;

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

