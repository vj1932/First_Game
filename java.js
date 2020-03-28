// challage 1

// chanllage 2
function gen() {
    var imge = document.createElement('img');
    var div = document.getElementById('crt-gen');
    imge.src = "https://media.giphy.com/media/IRFQYGCokErS0/giphy.gif ";
    div.appendChild(imge);
}

//challange 3
function prImg(choice) {
    console.log(choice);
    var humanChoice, botChoice;
    humanChoice = choice.id;
    console.log(humanChoice, 'human choice');
    botChoice = numToChoice(decToInt());
    console.log('computer Choice', botChoice);
    var result = decideWinner(humanChoice, botChoice);
    console.log(result);
    message = finalMessage(result);
    console.log(message);
    Dis(choice.id, botChoice, message);
}

function decToInt() {
    return Math.floor(Math.random() * 3);
}

function numToChoice(number) {
    return ['paper', 'rock', 'scessior'][number];
}

function decideWinner(choice, computerchoice) {
    var winData = {
        'paper': { 'paper': 0.5, 'rock': 1, 'scessior': 0 },
        'rock': { 'rock': 0.5, 'scessior': 1, 'paper': 0 },
        'scessior': { 'scessior': 0.5, 'rock': 0, 'paper': 1 }
    };

    var youscore = winData[choice][computerchoice];
    var cmpscore = winData[computerchoice][choice];
    return [youscore, cmpscore];
}

function finalMessage([youscore, cmpscore]) {
    if (youscore === 0) {
        return { 'message': 'You Lost!', 'color': 'red' };
    } else if (youscore === 0.5) {
        return { 'message': 'You Tide!', 'color': 'blue' };
    } else {
        return { 'message': 'You Won!', 'color': 'green' };
    }
}

function Dis(humanImg, botImg, finalMessage) {
    var imgdata = {
        'paper': document.getElementById('paper').src,
        'rock': document.getElementById('rock').src,
        'scessior': document.getElementById('scessior').
        src
    }
    document.getElementById('paper').remove();
    document.getElementById('rock').remove();
    document.getElementById('scessior').remove();
    var humandiv = document.createElement('div');
    var botdiv = document.createElement('div');
    var messagediv = document.createElement('div');

    humandiv.innerHTML = "<img src='" + imgdata[humanImg] + "'>"
    botdiv.innerHTML = "<img src='" + imgdata[botImg] + "'>"
    messagediv.innerHTML = "<h1 style='color:" + finalMessage['color'] +
        "; font-size:60px; padding:30px;' >" + finalMessage['message'] + "</h1>"

    document.getElementById('flex-box-rps-div').appendChild(humandiv);
    document.getElementById('flex-box-rps-div').appendChild(botdiv);
    document.getElementById('flex-box-rps-div').appendChild(messagediv);
}

// challange 4
var all_btn = document.getElementsByTagName("button");
console.log(all_btn);

var cpybtn = [];
for (let i = 0; i < all_btn.length; i++) {
    cpybtn.push(cpybtn[i]);
}
console.log(cpybtn);