const input = document.querySelector('input')
const submitBtn = document.querySelector('.submit-btn');
const reStartGame = document.querySelector('.start_game_btn');
let numberUpdates = document.querySelector('.message');
let guessesNumber = document.querySelector('.guesses span');

let randomNumber = Math.floor(Math.random()*101)
reStartGame.addEventListener('click',() => {
    randomNumber = Math.floor(Math.random()*101)
})
let guessesNumberArray = []
submitBtn.addEventListener('click',(e) => {
    e.preventDefault()
    reStartGame.disable = true;
    reStartGame.classList.add('cursor-not-allowed')
    let inputNum = parseInt(input.value)
    console.log(inputNum);
    if(input.value !== ''){
        if(randomNumber === inputNum){
            numberUpdates.innerText = 'You got it! Congrats';
            guessesNumberArray.push(input.value)
            submitBtn.disable = true
            reStartGame.disable = false
            reStartGame.classList.remove('cursor-not-allowed')
            submitBtn.classList.add('cursor-not-allowed')
            reStartGame.addEventListener('click',() =>{
                guessesNumberArray = [];
                input.value = ``;
                randomNumber = Math.floor(Math.random()*101)
            })
        }else if(randomNumber > inputNum){
            numberUpdates.innerText = 'Too low!';
            guessesNumberArray.push(input.value)
            input.value = ``
    
        }else{
            numberUpdates.innerText = 'you think very high';
            guessesNumberArray.push(input.value)  
            input.value = ``
    
        }
    }else{
        numberUpdates.innerText = 'Please enter a number';
    }

   
    console.log(guessesNumberArray);
    guessesNumber.innerText = guessesNumberArray.toString()
})