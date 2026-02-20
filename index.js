let homeScore=document.getElementById("home_score")
let guestScore=document.getElementById("guest_score")

let homeLeader=document.getElementById("home_leader")
let guestLeader=document.getElementById("guest_leader")

let HomeScore=0
let GuestScore=0

function Leader(){
    if(HomeScore==GuestScore){
        homeLeader.textContent="TIED"
        guestLeader.textContent="TIED"
    }
    else if(HomeScore>GuestScore){
        homeLeader.textContent="LEADER"
        guestLeader.textContent=""
    }
    else if(HomeScore<GuestScore){
        homeLeader.textContent=""
        guestLeader.textContent="LEADER"
    }
}

function home_plus_one(){
    HomeScore+=1
    console.log("Home Score is incremented by 1")
    homeScore.textContent=HomeScore
    Leader()
}

function home_plus_two(){
    HomeScore+=2
    console.log("Home Score is incremented by 2")
    homeScore.textContent=HomeScore
    Leader()
}

function home_plus_three(){
    HomeScore+=3
    console.log("Home Score is incremented by 3")
    homeScore.textContent=HomeScore
    Leader()
}

function guest_plus_one(){
    GuestScore+=1
    console.log("Guest Score is incremented by 1")
    guestScore.textContent=GuestScore
    Leader()
}

function guest_plus_two(){
    GuestScore+=2
    console.log("Guest Score is incremented by 2")
    guestScore.textContent=GuestScore
    Leader()
}

function guest_plus_three(){
    GuestScore+=3
    console.log("Guest Score is incremented by 3")
    guestScore.textContent=GuestScore
    Leader()
}

function newgame(){
    HomeScore=0
    GuestScore=0
    homeScore.textContent=HomeScore
    guestScore.textContent=GuestScore
    console.log("New game has started!")
    homeLeader.textContent="\u00A0"
    guestLeader.textContent="\u00A0"
}