"use strict";


//============================== Phone Number ==============================//
        
var phoneNumber = null;

function gatherPhoneNumber() {

    phoneNumber = prompt("What's your phone number?  Come on, I'm totally not sketchy at all, just put it right in there.  Oh yea, and use this format: xxx-xxx-xxxx").toString();

    var isNumber = true; 


    if ( (phoneNumber[3] !== "-") || (phoneNumber[7] !== "-") ) {

        isNumber = false;
    }

    if (isNumber) {

        return phoneNumber;

    } else {


        alert("That's not a phone number!  Do it again!");
        gatherPhoneNumber();
    }
}

gatherPhoneNumber();


//============================== Birth Date ==============================//
        

var birthDate = null;

function gatherBirthDate() {

    birthDate = prompt("What's your birthday.  Seriously, no sketchification happening here.  Make sure it's in the following format: xx/xx/xx").toString();

    var isBirthDate = true;

    if ( (birthDate.length !== ("xx/xx/xx").length) || (birthDate[2] !== "/") || (birthDate[5] !== "/") ) {

        isBirthDate = false;
    }

    if (isBirthDate) {

        return birthDate;

    } else {

        alert("DOES NOT COMPUTE!!!  TRY AGAIN!!!");
        gatherBirthDate();
    }
}

gatherBirthDate();


//============================== Post Code ==============================//
        

var postalCode = null;

function gatherPostalCode() {

    postalCode = prompt("What's your zip code.  This is totally normal for a blank page to do.  Make sure it's in one of the following formats: xxxxx OR xxxxx-xxxx");

    // debugger;

    postalCode.toString();

    var isPostalCode = true;

    if ( (postalCode.length < 5) || (postalCode.length > 5) && (postalCode[5] !== "-") || (postalCode.length > 10) ) {

        isPostalCode = false;
    }

    if (isPostalCode) {

        return postalCode;

    } else {

        alert("DOES NOT COMPUTE!!!  TRY AGAIN!!!");
        gatherPostalCode();
    }
}    

gatherPostalCode();


//============================== State ==============================//
        

var state = null;

function gatherState() {

    state = prompt("What state do you live in?  We just want to hang out.  Make sure it's in the following format: XX").toUpperCase();

    var isState = true;

    if ( (state.length < 2) || (state.length > 2) ) {

        isState = false;
    }


    if(isState) {

        return state

    } else {

        alert("DOES NOT COMPUTE!!! TRY AGAIN!!!");
        gatherState();
    }
}

gatherState();


//============================== Married ==============================//
        

var married = null;

function areTheyMarried() {

    married = prompt("Are you married?  Just curious.  Make sure you answer yes or no!").toLowerCase();

    var isMarried = true;

    if ( married === "no" ) {

        isMarried = false;
    }

    if (isMarried) {

        married = "Married";
        return married;

    } else if (!isMarried) { 

        married = "Single";
        return married;
    }

    if ( (married !== "yes") || or (married !== "no") ) {

        alert("YES OR NO!  WE ARE JUST CURIOUS, JEEZ!!!");
        areTheyMarried();
    }
}

areTheyMarried();


//============================== Final Output ==============================//
        

alert("Check this fool out: \n\nPhone Number: " + phoneNumber + " \nBirth Date: " + birthDate + " \nPostal Code: " + postalCode + "\nState: " + state + " \nMarital Status: " + married);



