    
    let score = JSON.parse(localStorage.getItem('score'));
    let user;
    let comp;
    let result;

    if (score === null) {
        score = {
            wins: 0,
            loses: 0,
            ties: 0
        };
    }
    
    updatescore();
    
    function compf() {
        const r = Math.random();
        if (r < 0.33)
            comp = 'rock';
        else if (r > 0.33 && r < 0.66)
            comp = 'paper';
        else
            comp = 'Scissors';
        return comp;
    }
    
    function compa(userChoice) {
        user = userChoice;
        if (userChoice === 'rock') {
            if (comp == userChoice) {
                result = "It's a tie";
               
            }
            else if (comp == 'paper') {
                result = 'Computer wins';
            }
            else {
                result = 'You win';
            }
        }
        else if (userChoice === 'paper') {
            if (comp == userChoice) {
                result = 'It\'s a tie';
            }
            else if (comp == 'rock') {
                result = 'You win';
            }
            else {
                result = 'Computer wins';
            }
        }
        else {
            if (comp == userChoice) {
                result = 'It\'s a tie';
            }
            else if (comp == 'paper') {
                result = 'You win';
            }
            else {
                result = 'Computer wins';
            }
        }

        if (result === 'It\'s a tie') {
            score.ties = score.ties + 1;
        }
        else if (result === 'You win') {
            score.wins = score.wins + 1;
        }
        else {
            score.loses = score.loses + 1;
        }

        localStorage.setItem('score', JSON.stringify(score));
        
        updatescore();
    }

    function updatescore() {
        document.querySelector('.js-score')
            .innerHTML = `Wins: ${score.wins} Loses: ${score.loses} Ties: ${score.ties}`;
        document.querySelector('.js-score-2')
            .innerHTML = `You::${user} &&  Computer::${comp}<br> <span class="result-text"> ${result}</span>`;
    }

    function resetScore() {
        score.loses = 0;
        score.wins = 0;
        score.ties = 0;
        localStorage.removeItem('score');
        updatescore();
    }

    console.log(JSON.stringify(score));
