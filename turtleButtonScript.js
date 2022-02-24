

let balanceT = document.getElementById("balance") // balance text
let countT = document.getElementById("count") // count text
let balance = 0
let count = 0
document.getElementById('turtle').style.visibility='hidden';

function clickButton() {
    balance = balance + 25000 // add $25,000 to balance
    
    const currency = function(number) { // fomrmat balance
        return new Intl.NumberFormat('en', {style: 'currency',currency: 'USD'}).format(number);
    }
    
    balanceT.innerText = currency(balance); // change balance value
    
    count = count + 1 // add 1 to count every time button is pressed
    
    countT.innerText = "You've clicked the button " + count + " times" // change count text
    
    let random_num = Math.floor(Math.random() * 100) + 1; // random num gen
    
    if (random_num == 1) { // 1% chance to turn into a turtle
        document.getElementById('turtle').style.visibility='visible';
        document.getElementById('button').style.visibility='hidden';
    }
}

function reset() {
    balance = 0
    count = 0
    document.getElementById('button').style.visibility='visible';
    document.getElementById('turtle').style.visibility='hidden';
    balanceT.innerText = "$0.00"
    countT.innerText = "You've clicked the button 0 times"
    random.innerText = " "
}
