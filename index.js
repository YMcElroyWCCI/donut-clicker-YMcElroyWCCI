// Header
// create header section contains a navigation menu 
const nav = document.querySelector("nav");

const collapsibleNavBar = document.getElementsByClassName("collapsibleNavBar");
var i;

for (i=0; i< collapsibleNavBar.length; i++) {
    collapsibleNavBar[i].addEventListener("click", function() {
        this.classList.toggle("active");
        const content = this.nextElementSibling;
        if(content.style.display === "block") {
            content.style.display = "none";
            nav.style.marginBottom = "0px";
        } else {
            content.style.display = "block";
            nav.style.marginBottom = "65px";
        }
    });
}

// Main
// Iteration 1
// Feature 1: Have a way to count donuts
// Iteration 4
// Feature 1: When you click the clicker button the Donut counter should change.
const donutButton = document.images["donutButton"];
const donutNumber = document.querySelector(".donut-count");

donutButton.addEventListener("click", addDonut);
var donutCount = 0;

function addDonut() {
    donutCount += Math.pow(1.2, clickMultiplierCount);
    donutNumber.innerText = numberWithCommas(Math.round(donutCount));
}

function retrieveDonutCount() {
    return donutCount;
}

// Iteration 1
// Feature 2: be able to purchase the first Auto Clicker with 100 donuts from the donut count
// Feature 3: The cost of each auto clicker will go up with each purchase by an additional ten percent
// Feature 4: Ensure there are enough clicks to buy the Auto Clicker
// Feature 5: The amount of auto clickers affect the amount of donuts added when "activate auto clickers" event is called
// Iteration 4
// Feature 3: The Auto Clicker count and the Donut Multipliers count should be displayed.
// Feature 5: The Auto Clickers and Donut Multipliers price in clicks should be displayed.
const purchaseAutoClicker = document.querySelector("#purchase-auto-clicker");
const autoClickerPriceEach = document.querySelector("#auto-clicker-price");
const autoClickersTotalPurchased = document.querySelector("#auto-clickers-total");

purchaseAutoClicker.addEventListener("click",purchaseAutoClickerCount);

var autoClickerPrice = 100;
var autoClickerCount = 0;

function purchaseAutoClickerCount() {
    if (donutCount >= autoClickerPrice) {
        donutCount -= autoClickerPrice;
        autoClickerCount += 1;
        autoClickerPrice =Math.round(autoClickerPrice * 1.10);
        donutNumber.innerText = numberWithCommas(Math.round(donutCount));
        autoClickerPriceEach.innerText =numberWithCommas (autoClickerPrice);
        autoClickersTotalPurchased.innerText = numberWithCommas(autoClickerCount);
        if (autoClickerCount <= 1) {
            activateAutoClickers();
    }  
}
}

function retrieveAutoClickerCount() {
    return autoClickerCount;
}

function activateAutoClickers() {
    setInterval(function(){
    donutCount += autoClickerCount * Math.pow(1.2, clickMultiplierCount);
    donutNumber.innerText = numberWithCommas(Math.round(donutCount));
    }, 1000);
   
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

// Iteration 2
// Feature 1: Be able to purchase the first donut multiplier with 10 clicks from the click count
// Feature 2: The cost of each donut multiplier will go up with each purchase by and additional ten percent
// Feature 3: Ensure there are enough donuts to buy a donut multiplier
// Feature 4: The first donut multiplier should increase the value of a click 1.2x
// Feature 5: The amount the subsequent Donut Multipliers click bonus will go up exponentially.
// Feature 6 : The Donut Multipliers click bonus will apply to clicks from the Auto Clicker.
// Iteration 4
// Feature 3: The Auto Clicker count and the Donut Multipliers count should be displayed.
// Feature 5: The Auto Clickers and Donut Multipliers price in clicks should be displayed.
const purchaseClickMultipliers = document.querySelector("#purchase-click-multiplier");
const clickMultiplierPriceEach = document.querySelector("#click-multiplier-price");
const clickMultiplierTotal = document.querySelector("#click-multiplier");

purchaseClickMultipliers.addEventListener("click", purchaseClickMultiplier);

var clickMultiplierPrice = 10;
var clickMultiplierCount = 0;

function purchaseClickMultiplier() {
    if (donutCount >= clickMultiplierPrice) {
        donutCount -= clickMultiplierPrice;
        clickMultiplierCount += 1;
        clickMultiplierPrice = Math.round(clickMultiplierPrice * 1.1);
        donutNumber.innerText = numberWithCommas(Math.round(donutCount));
        clickMultiplierPriceEach.innerText = numberWithCommas(clickMultiplierPrice);
        clickMultiplierTotal.innerText = numberWithCommas (clickMultiplierCount);
    }
}

// Iteration 5
// Feature 1: Implement a way to reset the game
const resetButton = document.querySelector("#reset-game-button");

resetButton.addEventListener("click", resetGame);

function resetGame(){
    location.reload();
} 