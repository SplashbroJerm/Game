//empty array
let num = [];
let hitAmnt = 1;
let standAmnt = 0;
let dealer = [];
let dealerResult =0;
let blnce = 100;
let amntBet = 0;
let result = 0;
let nGame=0;
let jop = 0;
// amntBet = Math.min(Math.max(amntBet, 1), blnce);

function hit() {
  if (standAmnt === 0 && result < 21 && nGame === 1) {
    if (hitAmnt === 1) {
      hitAmnt++;
      num.push(Math.floor(Math.random() * 10) + 1);
      result = num[0] + num[1] + num[2];
      yours.innerHTML = `Your Cards: ${num[0]} + ${num[1]} + ${num[2]} = ${result}`;
    } else if (hitAmnt === 2 && result < 21) {
      hitAmnt++;
      num.push(Math.floor(Math.random() * 10) + 1);
      result = num[0] + num[1] + num[2] + num[3];
      yours.innerHTML = `Your Cards: ${num[0]} + ${num[1]} + ${num[2]} + ${num[3]} = ${result}`;
    } else if (hitAmnt === 3 && result < 21) {
      hitAmnt++;
      num.push(Math.floor(Math.random() * 10) + 1);
      result = num[0] + num[1] + num[2] + num[3] + num[4];
      yours.innerHTML = `Your Cards: ${num[0]} + ${num[1]} + ${num[2]} + ${num[3]} + ${num[4]} = ${result}`;
    } else if (hitAmnt === 4 && result < 21) {
      hitAmnt++;
      num.push(Math.floor(Math.random() * 10) + 1);
      result = num[0] + num[1] + num[2] + num[3] + num[4] + num[5];
      yours.innerHTML = `Your Cards: ${num[0]} + ${num[1]} + ${num[2]} + ${num[3]} + ${num[4]} + ${num[5]} = ${result}`;
    }
  }
}

// function hit(){
// if(standAmnt === 0){
//     num.push(Math.floor(Math.random() * 10) +1);
//     result = num[0] + num[1] + num[2];
//     yours.innerHTML = `Your Cards: ${num[0]} + ${num[1]} + ${num[2]} = ${result}`
//     hitAmnt++;
//     if(hitAmnt == 3 || hitAmnt >= 3){
//         num.push(Math.floor(Math.random() * 10) +1);
//         result = num[0] + num[1] + num[2] + num[3];
//         yours.innerHTML = `Your Cards: ${num[0]} + ${num[1]} + ${num[2]} + ${num[3]} = ${result}`
//         hitAmnt++;
//     }
//     else if(hitAmnt == 4){
//         num.push(Math.floor(Math.random() * 10) +1);
//         result = num[0] + num[1] + num[2] + num[3] + num[4];
//         yours.innerHTML = `Your Cards: ${num[0]} + ${num[1]} + ${num[2]} + ${num[3]} + ${num[4]} = ${result}`
//         hitAmnt++;
//     }
//     if (hitAmnt == 5){
//         num.push(Math.floor(Math.random() * 10) +1);
//         result = num[0] + num[1] + num[2] + num[3] + num[4] + num[5];
//         yours.innerHTML = `Your Cards: ${num[0]} + ${num[1]} + ${num[2]} + ${num[3]} + ${num[4]} + ${num[5]} = ${result}`
//         hitAmnt++;
//     }
//     if(hitAmnt == 6){
//         num.push(Math.floor(Math.random() * 10) +1);
//         result = num[0] + num[1] + num[2] + num[3] + num[4] + num[5] + num[6];
//         yours.innerHTML = `Your Cards: ${num[0]} + ${num[1]} + ${num[2]} + ${num[3]} + ${num[4]} + ${num[5]} + ${num[6]} = ${result}`
//         hitAmnt++;
//     }
//     if(hitAmnt == 7 || hitamnt >= 7){
//         num.push(Math.floor(Math.random() * 10) +1);
//         result = num[0] + num[1] + num[2] + num[3] + num[4] + num[5] + num[6] + num[7];
//         yours.innerHTML = `Your Cards: ${num[0]} + ${num[1]} + ${num[2]} + ${num[3]} + ${num[4]} + ${num[5]} + ${num[6]} + ${num[7]} = ${result}`
//         hitAmnt++;
//     }
//     if(result >= 21){
//         hitamnt = 1000
//     }
// }
// }

// function startGame() {
//   if (hitAmnt === 0) {
//     num.push(Math.floor(Math.random() * 10) + 1);
//     num.push(Math.floor(Math.random() * 10) + 1);
//     result = num[0] + num[1];
//     yours.innerHTML = `Your Cards: ${num[0]} + ${num[1]} = ${result}`;
//     dealers.innerHTML = `Bot's Cards: ? + ? = ?`;
//   }
// }

function reset() {
  if(amntBet === 0){
    alert("You must bet an amount before starting.")
    console.log("no bet")
  } else if (standAmnt === 0 && hitAmnt === 1 && jop === 0 && amntBet >= 1) {
    jop++;
    nGame = 0;
    nGame++;
    dealer = [];
    tandAmnt = 0;
    hitAmnt = 1;
    num = [];
    num.push(Math.floor(Math.random() * 10) + 1);
    num.push(Math.floor(Math.random() * 10) + 1);
    result = num[0] + num[1];
    yours.innerHTML = `Your Cards: ${num[0]} + ${num[1]} = ${result}`;
    dealers.innerHTML = `Bots Cards: ? + ? = ?`;
    outcome.innerHTML = ``;
  }
}
function stand() {
  standAmnt++;
  if (standAmnt === 1) {
    dealer.push(Math.floor(Math.random() * 10) + 1);
    dealer.push(Math.floor(Math.random() * 10) + 1);
    dealerResult = dealer[0] + dealer[1];
    dealers.innerHTML = `Bots Cards: ${dealer[0]} + ${dealer[1]} = ${dealerResult}`;
  }
  if (dealerResult <= 16 && standAmnt == 2) {
    dealer.push(Math.floor(Math.random() * 10) + 1);
    dealerResult = dealer[0] + dealer[1] + dealer[2];
    dealers.innerHTML = `Bots Cards: ${dealer[0]} + ${dealer[1]} + ${dealer[2]} = ${dealerResult}`;
  }
  if (dealerResult <= 16 && standAmnt == 3) {
    dealer.push(Math.floor(Math.random() * 10) + 1);
    dealerResult = dealer[0] + dealer[1] + dealer[2] + dealer[3];
    dealers.innerHTML = `Bots Cards: ${dealer[0]} + ${dealer[1]} + ${dealer[2]} + ${dealer[3]} = ${dealerResult}`;
  }
  if (dealerResult <= 16 && standAmnt == 4) {
    dealer.push(Math.floor(Math.random() * 10) + 1);
    dealerResult = dealer[0] + dealer[1] + dealer[2] + dealer[3] + dealer[4];
    dealers.innerHTML = `Bots Cards: ${dealer[0]} + ${dealer[1]} + ${dealer[2]} + ${dealer[3]} + ${dealer[4]} = ${dealerResult}`;
  }
}
// let balance = document.getElementById('balance');
function amountBalance() {
  balance.innerHTML = `Balance: $${blnce}`;
}
amountBalance();
function amountBet() {
  betAmount.innerHTML = `Amount Bet: $${amntBet}`;
}
amountBet();

let bettingNum = document.getElementById("betting");
let maxBet = document.getElementById("maxBet");
function betting() {
  if (Number(bettingNum.value) > blnce) {
    maxBet.innerHTML = `Cannot bet more than you have.`;
  } else if (Number(bettingNum.value) <= blnce) {
    amntBet = Number(bettingNum.value);
    betAmount.innerHTML = `Amount Bet: $${amntBet}`;
  }
}
function finish() {
  if(standAmnt > 1){
    standAmnt = 0;
    jop = 0;

      console.log("finish")
    if (result > 21 || (dealerResult > result && dealerResult < 21) || dealerResult === 21) {
      outcome.innerHTML = `YOU LOSE!!!`;
      blnce -= amntBet;
      balance.innerHTML = `Balance: $${blnce}`;
      amntBet = 0;
      betAmount.innerHTML = `Amount Bet: $${amntBet}`;
    } else if (result < 21 && result > dealerResult || dealerResult > 21) {
      outcome.innerHTML = `YOU WIN!!!`;
      blnce += amntBet;
      balance.innerHTML = `Balance: $${blnce}`;
      amntBet = 0;
      betAmount.innerHTML = `Amount Bet: $${amntBet}`;
    } else if(result === dealerResult){
      outcome.innerHTML = `TIE !?!!??!`;
      balance.innerHTML = `Balance: $${blnce}`;
      amntBet = 0;
      betAmount.innerHTML = `Amount Bet: $${amntBet}`;
    }
    if(blnce === 0){
    
      var poor = document.getElementById('poor');
      if(poor.style.display === "block"){
          poor.style.display = "none"
      } else {
          poor.style.display = "block"
      }
      var button = document.getElementById('button');
      if(button.style.display === "none"){
          button.style.display = "block"
      } else {
          button.style.display = "none"
      }
      var button2 = document.getElementById('button2');
      if(button2.style.display === "none"){
          button2.style.display = "block"
      } else {
          button2.style.display = "none"
      }
      var button3 = document.getElementById('button3');
      if(button3.style.display === "none"){
          button3.style.display = "block"
      } else {
          button3.style.display = "none"
      }
      var button4 = document.getElementById('button4');
      if(button4.style.display === "none"){
          button4.style.display = "block"
      } else {
          button4.style.display = "none"
      }
      var button5 = document.getElementById('button5');
      if(button5.style.display === "none"){
          button5.style.display = "block"
      } else {
          button5.style.display = "none"
      }
      var button6 = document.getElementById('button6');
      if(button6.style.display === "none"){
          button6.style.display = "block"
      } else {
          button6.style.display = "none"
      }
      var betting = document.getElementById('betting');
      if(betting.style.display === "none"){
          betting.style.display = "block"
      } else {
          betting.style.display = "none"
      }
      document.getElementById('header').innerHTML = ``
      document.getElementById('p1').innerHTML = ``
      document.getElementById('p2').innerHTML = ``
      document.getElementById('dealers').innerHTML = ``
      document.getElementById('outcome').innerHTML = `YOUR BANKRUPT AND HOMELESS NOW`
      document.getElementById('yours').innerHTML = ``
      document.getElementById('balance').innerHTML = ``
      document.getElementById('betAmount').innerHTML = ``
      document.getElementById('maxBet').innerHTML = ``
      document.getElementById('pie').innerHTML = ``

    }
  }
}


function allIn() {
  amntBet = blnce;
  betAmount.innerHTML = `Amount Bet: $${amntBet}`;
}

// if(blnce === 0){
//     var poorIMG = document.getElementById('poor');
//     if(poorIMG.style.display === "none"){
//         poorIMG.style.display = "block"
//     } else {
//         poorIMG.style.display = "none"
//     }
//     document.getElementById('header').innerHTML = ``
//     document.getElementById('p1').innerHTML = ``
//     document.getElementById('p2').innerHTML = ``
//     document.getElementById('dealers').innerHTML = ``
//     document.getElementById('outcome').innerHTML = `YOUR BANKRUPT AND HOMELESS NOW`
//     document.getElementById('yours').innerHTML = ``
//     document.getElementById('button').innerHTML = ``
//     document.getElementById('button2').innerHTML = ``
//     document.getElementById('button3').innerHTML = ``
//     document.getElementById('button4').innerHTML = ``
//     document.getElementById('balance').innerHTML = ``
//     document.getElementById('betAmount').innerHTML = ``
//     document.getElementById('maxBet').innerHTML = ``
//     document.getElementById('pie').innerHTML = ``
//     document.getElementById('betting').innerHTML = ``
//     document.getElementById('button5').innerHTML = ``
//     document.getElementById('button6').innerHTML = ``

// }

/*if(standAmnt === 0 && hitAmnt === 1 && jop === 0 && amntBet >= 1){
          jop++;
          nGame = 0;
          nGame++;
          dealer = [];
          standAmnt = 0;
          hitAmnt = 1;
          num = [];
          num.push(Math.floor(Math.random() * 10) + 1);
          num.push(Math.floor(Math.random() * 10) + 1);
          result = num[0] + num[1];
          yours.innerHTML = `Your Cards: ${num[0]} + ${num[1]} = ${result}`;
          dealers.innerHTML = `Bots Cards: ? + ? = ?`;
          outcome.innerHTML = ``;
      }*/