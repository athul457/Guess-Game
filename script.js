'use strict';

const secreteNumber = Math.trunc(Math.random()*20+1);
document.querySelector('.number').textContent=secreteNumber;
let score=20;
let highScore =0;
document.querySelector('.again').addEventListener('click',function(){
  document.querySelector('.score').textContent = 0 ;
})
document.querySelector('.check').addEventListener('click',function (){
  const guess = Number(document.querySelector('.guess').value);
  if(!guess){
    document.querySelector('.message').textContent="Enter Any Number to start";
  }
  else if(guess === secreteNumber){
    document.querySelector('.message').textContent="You Won";
    document.querySelector('body').style.backgroundColor='#60b347';
    if(score >highScore){
      highScore= score ;
      document.querySelector('.highscore').textContent=highScore;
    }
  }
  else if(guess > secreteNumber){
    if(score > 0){
      document.querySelector('.message').textContent="The number is High";
      score--;
      document.querySelector('.score').textContent=score;
    }
    else{
      document.querySelector('.message').textContent="You Lost"
    }
  }
  else if(guess < secreteNumber){
    if(score > 0){
      document.querySelector('.message').textContent="The number is low";
      score--;
      document.querySelector('.score').textContent=score;
    }
    else{
      document.querySelector('.message').textContent="You Lost"
    }
  }
});