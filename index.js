const body = document.querySelector('body')
const num = document.querySelector('.num')
const input = document.querySelector('input')
const checkBtn = document.querySelector('.check-btn')
const playAgain = document.querySelector('.again-btn')
const gameInfo = document.querySelector('.gameInfo')
const trials = document.querySelector('.score')
const highscore = document.querySelector('.highscore')
const gameOver = document.querySelector('.game-over')
const gameOverBtn = document.querySelector('.game-over button')


// logic
let user = input.value
let tries = 20
let high = 0
checkBtn.onclick = () => {
  play()
}
playAgain.onclick = () =>{
    over()
}
gameOverBtn.onclick = () => {
    over()
}
// functions
function over(){
        num.textContent = '?'
        checkBtn.style.display = "block"
        playAgain.style.display = 'none'
        input.value = ''
        num.textContent = '?'
        body.style.background = 'black'
        high = 0
        gameInfo.textContent = '🤔❔ Start guessing.....'
        gameOver.style.display = 'none'
}
function play(){
      let randomNum = Math.floor(Math.random() * 5) + 1;
    console.log(randomNum)
    if(input.value){
            if (input.value == randomNum) {
                console.log("Congratulations! You got it right.")
                body.style.background = 'green'
                tries = 20
                gameInfo.textContent = '🎊🎊 Correct Number!!!'
                trials.textContent = tries

                if( input.value  > high ) {
                    high = input.value
                    highscore.textContent = high
                } 

                num.textContent = randomNum
                console.log('up')
                checkBtn.style.display = 'none'
                playAgain.style.display = 'block'
                
            } else if (input.value > randomNum) {
                tries --
                trials.textContent = tries
                gameInfo.textContent = '📈 Number-too-high.'
                input.value = ""
                console.log('no')
            }else if(user < randomNum){
                tries --
                trials.textContent = tries
                gameInfo.textContent = "📉 Number - too-  low."
                input.value = ""
                console.log('no')
            }
        }
    if(tries === 0){
        gameOver.style.display = 'block'
    }
}