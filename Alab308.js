// The initial numbers that must be verified.
const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;

// Check one: add up to 50
// This is a fairly simple operation using
// arithmetic operators and a comparison.
const isSum50 = (n1 + n2 + n3 + n4) == 50;
// Check two: at least two odd numbers
// Here, we use modulus to check if something is odd.
// Since % 2 is 0 if even and 1 if odd, we can use
// arithmetic to count the total number of odd numbers.
const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;


// Check three: no number larger than 25
// This time, we use the OR operator to check
// if ANY of the numbers is larger than 25.
const isOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;

// Check four: all unique numbers
// This is long, and there are more efficient
// ways of handling it with other data structures
// that we will review later.
const isUnique = n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;

// Here, we put the results into a single variable 
// for convenience. Note how we negate isOver25 using
// the ! operator. We could also have tested for 
// "isUnder25" as an alternative.
const isValid = isSum50 && isTwoOdd && !isOver25 && isUnique;

// Finally, log the results.
//console.log(isValid);

// Here's another example of how this COULD be done,
// but it SHOULD NOT be done this way. As programmers,
// we break things into small, manageable pieces so that
// they can be better understood, scaled, and maintained.
const dontDoThis = ((n1 + n2 + n3 + n4) == 50) && 
  ((n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2) && 
  !(n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25) && 
    (n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4);

   /*****************************************
    My Work   Part one*  */


//Check that all are divisible by 5
const allDivide5 = (n1 % 5 === 0) && (n2 % 5 === 0) && (n3 % 5 === 0) && (n4 % 5 === 0);
console.log(`Are all 4 numbers divisible by 5 ? ${allDivide5}`);

//Check if first is larger than last
const firstMoreLast = (n1 > n4);
console.log(`Is the first number larger than the last? ${firstMoreLast}`);

//Arithemetic chain
const arithChain = ((n2 - n1) * n3) % n4;
console.log(`The result from n2-n1, times n3, and the remainder from dividing by n4: ${arithChain}`)

//Change the way that isOver25 calculates
const isUnder25 = (n1 <= 25) && (n2 <= 25)
   && (n3 <= 25) && (n4 <= 25);
    console.log(`The value of each is less than 25 ${isUnder25}`)

   //**********************************************
   // My Work Part two* */
//Total distance in miles
const totalDistance = 1500;
//Budget in dollars
const fuelBudget = 175;
//Cost per gallon
const fuelCostPerGallon = 3;

//Fuel effeciencies in miles per gallon
const fuelEffeciency55 = 30;

const fuelEffeciency60 = 28;

const fuelEffeciency75 = 23;




// Calculate the fuel needed and cost for different speeds
const fuelNeeded55 = totalDistance / fuelEffeciency55;
const fuelCost55 = fuelNeeded55 * fuelCostPerGallon;
const tripTime55 = totalDistance / 55;

// Log results for 55 mph
console.log(`At 55 mph:`);
console.log(`Fuel needed: ${totalDistance} / ${fuelEffeciency55} = ${fuelNeeded55.toFixed(2)} gallons`);
console.log(`Fuel cost: ${fuelNeeded55.toFixed(2)} * ${fuelCostPerGallon} = $${fuelCost55.toFixed(2)}`);
console.log(`Trip time: ${totalDistance} / 55 = ${tripTime55.toFixed(2)} hours`);
console.log(`Is budget sufficient? ${fuelCost55} <= ${fuelBudget} => ${fuelCost55 <= fuelBudget}`);

const fuelNeeded60 = totalDistance / fuelEffeciency60;
const fuelCost60 = fuelNeeded60 * fuelCostPerGallon;
const tripTime60 = totalDistance / 60;

// Log results for 60 mph
console.log(`\nAt 60 mph:`);
console.log(`Fuel needed: ${totalDistance} / ${fuelEffeciency60} = ${fuelNeeded60.toFixed(2)} gallons`);
console.log(`Fuel cost: ${fuelNeeded60.toFixed(2)} * ${fuelCostPerGallon} = $${fuelCost60.toFixed(2)}`);
console.log(`Trip time: ${totalDistance} / 60 = ${tripTime60.toFixed(2)} hours`);
console.log(`Is budget sufficient? ${fuelCost60} <= ${fuelBudget} => ${fuelCost60 <= fuelBudget}`);

const fuelNeeded75 = totalDistance / fuelEffeciency75;
const fuelCost75 = fuelNeeded75 * fuelCostPerGallon;
const tripTime75 = totalDistance / 75;

// Log results for 75 mph
console.log(`\nAt 75 mph:`);
console.log(`Fuel needed: ${totalDistance} / ${fuelEffeciency75} = ${fuelNeeded75.toFixed(2)} gallons`);
console.log(`Fuel cost: ${fuelNeeded75.toFixed(2)} * ${fuelCostPerGallon} = $${fuelCost75.toFixed(2)}`);
console.log(`Trip time: ${totalDistance} / 75 = ${tripTime75.toFixed(2)} hours`);
console.log(`Is budget sufficient? ${fuelCost75} <= ${fuelBudget} => ${fuelCost75 <= fuelBudget}`);




