var readlineSync = require("readline-sync");
for(j=1;j!="N";j++){

  console.log("Welcome To Travel Quiz\n");
  console.log("NOTE: You will NOT ENJOY the game if you Google it & Give only one best try of yours\n")
  console.log("\nTYPE ONLY OPTIONS AS YOUR ANSWER i.e if answer is option a then put only ----> a \n")
  var yourName = readlineSync.question("May I know your name ?\n");
  console.log("Welcome " + yourName +" Enjoy your Quiz journey!\n");
  var score = 0;
  var highScore = [{name: "Anup", score:10}]
  for(i=0;i<highScore.length;i++)
  {
    console.log("Highest Score of " + highScore[i].name + " is " + highScore[i].score)
  }
  console.log("TRY to Beat Highest Score")
  var questions = [{question: "\n1) Which Indian hill station in India is known as the “Queen of the Hills”?\n\t a Mussoorie\n\t b Darjeeling\n\t c Shimla\n\t d Shillong\n", answer: "a" },{question: "2) Which Indian state is famous for boating activities on its backwaters?\n\t a Kerala\n\t b Karnataka\n\t c Jammu and Kashmir\n\t d Odisha\n",answer: "a"},{question: "3) Which is the tallest Himalayan mountain in the Indian territory?\n\t a Mount Everest\n\t b Mount Godwin Austen (K2)\n\t c Kanchenjunga\n\t d Nanga Parbat\n",answer: "c"},{question: "4) I am home to India’s largest museum. Which city am I?\n\t a Bangalore\n\t b New Delhi\n\t c Kolkata\n\t d Mumbai\n",answer: "c"},{question: "5) Which of these monuments will you find in Mumbai?\n\t a Fort St. George\n\t b India Gate\n\t c The Writers’ Building\n\t d Gateway of India\n", answer: "d"},{question: "6) Which of the following would you not find in New Delhi?\n\t a Connaught Place\n\t b Jantar Mantar\n\t c Red Fort\n\t d Hawa Mahal\n",answer: "d"},{question: "7) Which city is known as the ‘Electronic City of India’?\n\t a Hyderabad\n\t b Bangalore\n\t c Mumbai\n\t d Chennai\n",answer: "b"},{question: "8) Which of the below is a palm-shaped, man-made island in Dubai?\n\t a Palm Dubai\n\t b Palm Jumeriah\n\t c Palm UAE\n\t d None of the above\n",answer: "b"},{question: "9) What is the largest industry in the Maldives?\n\t a Fishing\n\t b Mining\n\t c Tourism\n\t d Steel Industry\n",answer: "c"},{question: "10) Which city in South India is also known as the City of Palaces?\n\t a Ooty\n\t b Cochin\n\t c Mysore\n\t d Chennai\n",answer: "c"}]

  function quiz(questionf,answerf)
  {
    var answer = readlineSync.question(questionf) 
    if(answer === answerf)
    {
      console.log("Correct!\n\t")
      score++
    }
    else
    {
      console.log("Wrong!\n\t")
    }
  }

  for (i=0;i<questions.length;i++)
  {
    var result = quiz(questions[i].question,questions[i].answer)
  }
  console.log("Your Score is", score)
  console.log("\nSend me Screenshot if you beat highest score")
  var j = readlineSync.question("Do you want to play again ? Y/N\n")
}