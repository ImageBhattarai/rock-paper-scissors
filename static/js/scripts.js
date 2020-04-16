// Rock Paper Scissors

function rpsGame(yourChoice) {
    var humanChoice = yourChoice.id;
    var botChoice = botTurn();
    var results = decideWinner(humanChoice, botChoice); //  ---->  [1,0], [0,1], [0.5, 0.5]
    var showMessage = finalMessage(results);      // ---->  {'message': 'color'}
    finalResult = resultFrontEnd(humanChoice, botChoice, showMessage)
 
    function botTurn() {
        return ['rock', 'paper', 'scissor'][Math.floor(Math.random() * 3)];
    }

    function decideWinner(yourChoice, computerChoice) {
        var winnerDatabase = {
            'rock': {'rock': 0.5, 'paper': 0, 'scissor': 1},
            'paper': {'rock': 1, 'paper': 0.5, 'scissor': 0},
            'scissor': {'rock': 0, 'paper': 1, 'scissor': 0.5},
        };
        return winnerDatabase[yourChoice][computerChoice];
    }

    function finalMessage(resultsResults) {
        switch (resultsResults) {
            case 0:
                return {'message': 'You lost', 'color': 'Red'};
                break;
            case 1:
                return {'message': 'You won', 'color': 'Green'};
                break;
            case 0.5:
                return {'message': 'You tied', 'color': 'Yellow'};
                break;
        }
    }

    function resultFrontEnd(yourChoice, computerChoice, yourResult) {
        var humanDiv = document.createElement('div');
        var botDiv = document.createElement('div');
        var messageDiv = document.createElement('div');
        // this is not a node
        imageDatabase = {
            'rock': document.getElementById('rock').src, 
            'paper': document.getElementById('paper').src,
            'scissor': document.getElementById('scissor').src,
        }; 
        
        // remove all elements
        document.getElementById('rock').remove();
        document.getElementById('paper').remove();
        document.getElementById('scissor').remove();        

        
        humanDiv.innerHTML = "<img src='" + imageDatabase[yourChoice] + "' height=150 width=150 style='box-shadow: 0px 10px 50px rgba(37, 50, 233, 1);'>";
        botDiv.innerHTML = "<img src='" + imageDatabase[computerChoice] + "' height=150 width=150 style='box-shadow: 0px 10px 50px rgba(243, 38, 24, 1);'>"; 
        messageDiv.innerHTML = "<h1 style='color: " + yourResult.color + "; font-size: 60px; padding: 30px;'>" + yourResult.message + "</h1>";
        document.getElementById('flex-box-rps-div').appendChild(humanDiv);
        document.getElementById('flex-box-rps-div').appendChild(messageDiv);
        document.getElementById('flex-box-rps-div').appendChild(botDiv);

    }

}