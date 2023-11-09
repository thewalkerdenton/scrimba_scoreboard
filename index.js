let homeScore=0
let guestScore=0
let homeStoreEl=document.getElementById("home-score")
let guestStoreEl=document.getElementById("guest-score")

function homeIncrease1(){
    homeScore += 1
    homeStoreEl.textContent=homeScore
}

function homeIncrease2(){
    homeScore += 2
    homeStoreEl.textContent=homeScore
}

function homeIncrease3(){
    homeScore += 3
    homeStoreEl.textContent=homeScore
}

function guestIncrease1(){
    guestScore += 1
    guestStoreEl.textContent=guestScore
}

function guestIncrease2(){
    guestScore += 2
    guestStoreEl.textContent=guestScore
}

function guestIncrease3(){
    guestScore += 3
    guestStoreEl.textContent=guestScore
}

function gameReset(){
    guestScore = 0
    homeScore = 0
    guestStoreEl.textContent=guestScore
    homeStoreEl.textContent=homeScore
}