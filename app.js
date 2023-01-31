let guestScore = document.getElementById('guest-score');
let homeScore = document.getElementById('home-score');
let homeResult = 00
let guestResult = 00
let result = "00"

function addOneHome() {
    homeResult += 1
    homeScore.textContent = homeResult

}
function addTwoHome() {
    homeResult += 2
    homeScore.textContent = homeResult

}
function addThreeHome() {
    homeResult += 3
    homeScore.textContent = homeResult

}
function addOneGuest() {
    guestResult += 1
    guestScore.textContent = guestResult

}
function addTwoGuest() {
    guestResult += 2
    guestScore.textContent = guestResult

}
function addThreeGuest() {
    guestResult += 3
    guestScore.textContent = guestResult

}

function newGame() {
    guestScore.textContent = result;
    homeScore.textContent = result;
    homeResult = 0
    guestResult = 0
}