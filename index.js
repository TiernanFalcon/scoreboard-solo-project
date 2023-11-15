
let homeScore = 0
let guestScore = 0

let displayHome = document.getElementById('homeScore')

document.querySelector('#btn1Home').addEventListener('click', add1Home)
document.querySelector('#btn2Home').addEventListener('click', add2Home)
document.querySelector('#btn3Home').addEventListener('click', add3Home)

document.querySelector('#btn1Guest').addEventListener('click', add1Guest)
document.querySelector('#btn2Guest').addEventListener('click', add2Guest)
document.querySelector('#btn3Guest').addEventListener('click', add3Guest)



// not sure if it's better to do the code in sections of functionality
// e.g. all functions together, like I've done
// or if it's better to do all the HOME code together and then all the GUEST code together

function add1Home() {
    homeScore += 1
    displayHome.textContent = homeScore
    // revised to clean up code. left old versions below
        
}

function add2Home() {
    homeScore += 2
    document.querySelector('#homeScore').textContent = homeScore
        
}

function add3Home() {
    homeScore += 3
    document.querySelector('#homeScore').textContent = homeScore
        
}



function add1Guest() {
    guestScore += 1
    document.querySelector('#guestScore').textContent = guestScore
        
}

function add2Guest() {
    guestScore += 2
    document.querySelector('#guestScore').textContent = guestScore
        
}

function add3Guest() {
    guestScore += 3
    document.querySelector('#guestScore').textContent = guestScore
        
}