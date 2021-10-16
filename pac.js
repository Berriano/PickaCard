'use strict';


//generate random card number

function cardNumber(){

    let cNo = Math.floor(Math.random()*13);
    
    switch(true){

        case cNo == 0:
        console.log("10 of ");
        break;
        
        case cNo == 1:
        console.log("Ace of");
        break;

        case cNo == 2:
        console.log("2 of ");
        break;

        case cNo == 3:
        console.log("3 of ");
        break;

        case cNo == 4:
        console.log("4 of ");
        break;

        case cNo == 5:
        console.log("5 of ");
        break;

        case cNo == 6:
        console.log("6 of ");
        break;

        case cNo == 7:
        console.log("7 of ");
        break;

        case cNo == 8:
        console.log("8 of ");
        break;

        case cNo == 9:
        console.log("9 of ");
        break;

        case cNo == 10:
        console.log("Jack of ");
        break;

        case cNo == 11:
        console.log("Queen of ");
        break;

        case cNo == 12:
        console.log("King of ");
        break;

    }

}


function cardSuit (){

    let cSuit = Math.floor(Math.random()*4); 
    
    switch (true){

        case cSuit == 0:
        console.log("Clubs");
        break;

        case cSuit == 1:
        console.log("Spades");
        break;

        case cSuit == 2:
            console.log("Hearts");
            break;
        
        case cSuit == 3:
            console.log("Diamonds");
            break;
        }



}
function wholeCard (){

cardNumber();
cardSuit();

}

wholeCard();

const lBtn = document.querySelector('#l-card');
lBtn.addEventListener('click' , wholeCard);



