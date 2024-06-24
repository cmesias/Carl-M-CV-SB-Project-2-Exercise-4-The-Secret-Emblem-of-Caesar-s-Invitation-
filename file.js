const emblemClue1 = "Eagle";
const emblemClue2 = "Laurel";
const emblemClue3 = 7;

// Step 1, if, else if, else
let location = '';

if (emblemClue1 === 'Eagle') {
    location = 'Forum';
} else if (emblemClue1 === 'Lion') {
    location = 'Colosseum';
} else {
    location = 'Villa';
}

// Step 2, boolean
if (emblemClue2 === "Laurel" && location === "Forum") {
    location += " of Augustus";
} else if (emblemClue2 === "Grapes" || location === "Villa") {
    location += " of Pompey";
}

// Step 3, switch statement
switch (emblemClue3) {
    case 7:
        location += "North";
    break;
    case 3:
        location += "South";
    break;
    case 9:
        location += "East";
    break;
    case 4:
        location += "West";
    break;
    default:
        location += "Invalid Direction";
    break;
}

// Question: Why is it important to be careful when using == (double equals) 
// instead of === (triple equals) in our conditionals?

// 1. Using == (double equals) will check for equality of values only without considering 
//    the data type.
//
// 2. Using === (triple examples will check for both value and data type).

// Here is an example of both, this would return as true:
/*
    /// Example using == (double equals) ///
    let value_first = 7;
    let value_second = '7';

    if (value_first == value_second)
    {
        // In our hard coded values on line 42 and 43, this if statement will run
        console.log('They are equal')
    } else {
        // This will NOT run because we are only check if the values are the same, not the data type
        console.log('Not equal')
    }

    
    /// Example using === (triple equals/strict) ///
    let value_first = 7;
    let value_second = '7';

    if (value_first === value_second)
    {
        // This will NOT run because we are checking if both the value and data types are the same
        console.log('They are equal')
    } else {
        // In our hard coded values on line 57 and 58, this if statement will run
        console.log('Not equal')
    }
*/