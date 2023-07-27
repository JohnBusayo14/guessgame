const guess = document.getElementById("guess");
const answer = document.getElementById("answer")
const comment = document.getElementById("comment")
const main = document.getElementById("main")
const score1 = document.getElementById("score1")
const attempt = document.getElementById("attempt")
const btn = document.getElementById("btn")

let live = 5
let result = 0
let getstarted = false
//button
btn.addEventListener("click",randomNumber)



// GENERATE RANDOM

function randomNumber(){    
  let randomNUM = Math.floor(Math.random()*10) + 1
    answer.value = randomNUM
    live--;
    attempt.innerText  = `Your remaining live:${live}`
    if (guess.value == randomNUM){
        comment.innerHTML = 'Congratulation'
        main.style.backgroundColor = "green"
        result = result + 1
       
        score1.innerHTML =`Your score is: ${result}`
    }
    else{
        comment.innerHTML = 'ooops!'
        main.style.backgroundColor = "red"
        console.log("count");
    }
    if (live==0){
        getstarted=true
        comment.innerHTML ='Game Over!!!'
    }

}



