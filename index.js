let homeScoreEl = document.getElementById("home-score");
let guestScoreEl = document.getElementById("guest-score");
let plusOneHomeBtn = document.getElementById("plus-one-home");
let plusTwoHomeBtn = document.getElementById("plus-two-home");
let plusThreeHomeBtn = document.getElementById("plus-three-home");
let plusOneGuestBtn = document.getElementById("plus-one-guest");
let plusTwoGuestBtn = document.getElementById("plus-two-guest");
let plusThreeGuestBtn = document.getElementById("plus-three-guest");
homeScore = 0;
guestScore = 0;

function oneHome () {
    homeScore += 1;
    homeScoreEl.textContent = homeScore;
}

function twoHome () {
    homeScore += 2;
    homeScoreEl.textContent = homeScore;
}

function threeHome () {
    homeScore += 3;
    homeScoreEl.textContent = homeScore;
}

function oneGuest () {
    guestScore += 1;
    guestScoreEl.textContent = guestScore;
}

function twoGuest () {
    guestScore += 2;
    guestScoreEl.textContent = guestScore;
}

function threeGuest () {
    guestScore += 3;
    guestScoreEl.textContent = guestScore;
}