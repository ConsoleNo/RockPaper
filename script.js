window.addEventListener('DOMContentLoaded', function(){
    const choices = document.querySelectorAll('.hands'),
            score = document.querySelector('.game__account'),
            modal = document.querySelector('.modal'),
            result = document.querySelector('#result'),
            restart = document.querySelector('#restart'),
            scoreBand = {
                player: 0,
                computer: 0,
                draw: 0
            }
    
    function play(event) {
        restart.style.display = "inline-block"
        modal.style.display = "block"
        const playerChoice = event.target.id
        const computerChoice = getComputerChoice()
        const winner = getWinner(playerChoice, computerChoice)
        showWinner(winner, computerChoice)
    }
    function getComputerChoice() {
        const rand = Math.random()
        if(rand < 0.34) return 'rock'
        else if(rand < 0.67) return 'paper'
        else return 'scissors'
    }
    function getWinner(p, c) {
        if(p === c){
            return 'draw';
        }else if(p === 'rock'){
            if(c === 'paper'){
                return 'computer'
            }else{
                return 'player'
            }
        }else if(p === 'paper'){
            if(c === 'scissors'){
                return 'computer'
            }else{
                return 'player'
            }
        }else if(p === 'paper'){
            if(c === 'rock'){
                return 'computer'
            }else{
                return 'player'
            }
        }
    }
    function showWinner(winner, computerChoice) {
        if(winner === 'player'){
            scoreBand.player++
            result.innerHTML = `
                <h1 class="result__title won">You won!</h1>
                <i class="fas fa-hand-${computerChoice}"></i>
                <p class="result__description">Computer chose <b>${computerChoice}</b></p>
            `
            console.log(computerChoice.charAt(0));
        } else if(winner === 'computer'){
            scoreBand.computer++
            result.innerHTML = `
                <h1 class="result__title lost">You lost!</h1>
                <i class="fas fa-hand-${computerChoice}"></i>
                <p class="result__description">Computer chose <b>${computerChoice}</b></p>
            `
        } else {
            scoreBand.draw++
            result.innerHTML = `
                <h1 class="result__title draw">Draw!</h1>
                <i class="fas fa-hand-${computerChoice}"></i>
                <p class="result__description">Computer chose <b>${computerChoice}</b></p>
            `
        }
        score.innerHTML = `
            <p>Player: ${scoreBand.player}</p>
            <p>Draw: ${scoreBand.draw}</p>
            <p>Computer: ${scoreBand.computer}</p>
        `
        modal.style.display = 'block'
    }
    function restartGame() {
        scoreBand.computer = 0
        scoreBand.player = 0
        scoreBand.draw = 0
        score.innerHTML = `
            <p>Player: ${scoreBand.player}</p>
            <p>Draw: ${scoreBand.draw}</p>
            <p>Computer: ${scoreBand.computer}</p>
        `
        restart.style.display = 'none'
    }
    function clearModal(event) {
        if(event.target == modal){
            modal.style.display = 'none'
        }
    }
    choices.forEach(choice => choice.addEventListener('click', play))
    window.addEventListener('click', clearModal)
    modal.addEventListener('click', clearModal)
    restart.addEventListener('click', restartGame)
})