"use strict";
//const prompt = require('prompt-sync')();

// TODO - write your code here.

const randomDamage = () => {
    return Math.floor(Math.random() * 10) + 1;
  };
  const chooseOption = (opt1, opt2) => {
    const randNum = Math.round(Math.random());
    return randNum === 0 ? opt1 : opt2;
  };

  const attackPlayer = function (health) {
    const newHealth = health - randomDamage();
    return newHealth;
  };
  const logHealth = (player, health) => {
    console.log(` ${player} health: ${health}`);
  };

  const logDeath = (winner, loser) => {
    console.log(` ${winner} defeats ${loser}`);
  };
  
  const isDead = (health) => health <= 0;
 
  function fight(player1, player2, player1Health, player2Health) {
    while(true) {
        const attacker = chooseOption(player1, player2);
        if (attacker === player1) {
            player2Health = attackPlayer(player2Health);
            logHealth(player2, player2Health);
            if (isDead (player2Health)===  true) {
                logDeath (player1, player2);
                break;
            }
        } else {
             player1Health = attackPlayer(player1Health);
            logHealth(player1, player1Health);
            if (isDead (player1Health)===  true) {
                logDeath (player1, player2);
                break;
            }
        }
    }
  }
fight('Sara', 'Steve', 100, 100);