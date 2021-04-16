var readlineSync = require('readline-sync');

var username = readlineSync.question("Hey! What's your name ?");

var score = 0;

console.log("Welcome "+ username+" to DO YOU KNOW chetan!!")

function play(question,answer){

 var userAns = readlineSync.question(question);

 if(userAns.toLowerCase() === answer.toLowerCase()){
   console.log("You're right !!!")
   score = score + 2;
   console.log("Your current score is ",score)
   console.log("-----------")
 } else {
   console.log("You're wrong !!!")
   score = score - 1;
   console.log("The correct answer is",answer)
   console.log("Your current score is ",score)
   console.log("-----------")
 }
}
 console.log("Your score is ",score)
  console.log("-------------")


var quest = [{
  question : "It is very simple- what is my name hahaha... ? ",
  answer : "chetan"
}, {
  question : "What is chetan favourtite fruit ? ",
  answer : "pomegranate"
}, {
  question : "My favourite superhero would be ? ",
  answer : "my mom"
}, {
  question : "what is the first letter of my college ? ",
  answer : "g"
}, {
  question : "from whom i talked a lot ? ",
  answer : "jiji"
}, {
  question : "what is my dateof birh only date? ",
  answer : "19"
}
];

for(i=0; i < quest.length;i++){
  var currentQuestion = quest[i];
  play(currentQuestion.question,currentQuestion.answer)
};





var highscore = [{
  name : 'chetan',
  score: '12',
}, {
  name : 'jiji',
  score: '4'
}];

for(i in highscore){
    if(score > highscore[i].score){
      highscore[i].name = username;
      highscore[i].score = score
      console.log(highscore)
      break;
    }
}
console.log("Leaderboard")
console.log("-----------")
console.log(highscore)