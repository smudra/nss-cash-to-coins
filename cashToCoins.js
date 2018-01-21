var dollarAmount = 0.10;
var piggyBank = "";
var quarters = 0;
var dimes = 0;
var nickels = 0;
var pennies = 0;


if (dollarAmount >= 0.25) {
    quarters = dollarAmount / 0.25;
    quarters = Math.floor(quarters);
    dollarAmount = dollarAmount - (quarters * 0.25);
    dollarAmount = dollarAmount.toFixed(2);
}

    console.log("The quarters are :", quarters);
    console.log("The quarter (remainder) are: ", dollarAmount);

if (dollarAmount >= 0.10) {
    dimes = dollarAmount / 0.10;
    dimes = Math.floor(dimes);
    dollarAmount = dollarAmount - (dimes * 0.10);
    dollarAmount = dollarAmount.toFixed(2);
}

    console.log("The dimes are :", dimes);
    console.log("The dime (remainder) are: ", dollarAmount);

if (dollarAmount >= 0.05) {
    nickels = dollarAmount / 0.05;
    nickels = Math.floor(nickels);
    dollarAmount = dollarAmount - (nickels * 0.05);
    dollarAmount = dollarAmount.toFixed(2);
}

    console.log("The nickels are :", nickels);
    console.log("The dollarAmount (remainder) are: ", dollarAmount);


if (dollarAmount >= 0.01) {
    pennies = dollarAmount * 100;
}

    console.log("The pennies are :", pennies);
    console.log("The dollarAmount (remainder) are: ", dollarAmount);

    piggyBank = "Quarters: " + quarters + ", Dimes: " + dimes + ", Nickels: " + nickels + ", Pennies: " + pennies;

    console.log(piggyBank);


    document.getElementById("piggyBank").innerHTML = "Quarters: " + quarters + ",<br> Dimes: " + dimes + ",<br> Nickels: " + nickels + ",<br> Pennies: " + pennies; 
