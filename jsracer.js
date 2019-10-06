"use strict"

function diceRoll () {
  let dice = 0
  while (dice === 0) {
    dice = Math.floor(Math.random()*7)
  }
  return dice  
}

function sleep (milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds) {
      break;
    }
  }
}



function printLine (player, pos) {

}

function advance (player) {

}

function finished () {

}

function winner () {
    
}

function clearScreen () {
  // Un-comment this line if you have trouble with console.clear();
  // return process.stdout.write('\033c');
  console.clear();
}

function printBoard (player,road) {
  const output = []
  for (let i=0; i<player; i++ ) {
    output.push(road[i].join('|'))
  }
  return output.join('\n')
}

function game() {
  const kamus = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  let player = Number(process.argv[2])
  if (player < 2) {
    return `jumlah pemain minimal harus 2`
  }  
  let board = Number(process.argv[3])
  if (board < 15) {
    return `panjang lintasan harus lebih dari 15`
  }
  let road = []
  let playerlist = []
  for (let i=0; i<player; i++) {
    let temp = []
    for (let j=0; j<board; j++) {
      if (j === 0) {
        temp.push(kamus[i])                
      } else {        
        temp.push(' ')        
      }
    }
    road.push(temp)
    playerlist.push(kamus[i])
  } 
  
  while (true) {    
    for (let i=0; i<player; i++) {
      if (road[i][board-1] === ' ') {
        clearScreen()    
        console.log(printBoard (player,road))
        sleep(1000)
        clearScreen()           
        let dice = diceRoll ()
        let posisi = road[i].indexOf(playerlist[i])          
        if ((posisi + dice ) <= board-1) {
          road[i][posisi+dice] = playerlist[i]
          road[i][posisi] = ' '
        } else {
          road[i][board-1] = playerlist[i]
          road[i][posisi] = ' '
        }            
      }
      
      if ((road[i][board-1] != ' ' && road[i][board-1] != '*')) {
        console.log(printBoard (player,road))
        sleep(1000)
        clearScreen()                 
        return `pemenangnya adalah ${road[i][board-1]}`        
      }          
    } 
  } 
  
}

console.log(game())