document.addEventListener("DOMContentLoaded", function () {
  // Object Array to hold all the questions

  // quiz container ----------------
  (function () {
    // End of Quiz container -------------

    // Start of question counter
    var userInput = new Array();
    var correctAnswer = [{
      "Deer",
      "Batman",
      "Krypton",
      "Enzo Ferrari"
  }];

    function getScore() {
      var numberQuestions = 4;

      for (var i = 0; i < numberQuestions; i++) {
        if (userInput[i] == correctAnswers[i]) {
          score += 1;
        }
        else {
          score += 0;
        }

      }
      returnScore;
    }
    function returnScore() {
      prompt("Your score is " + getScore() + "/" + total);;
    }
    total = correctAnswer.length;

    function getCheckedValue(radioQuestion) {
      var radio = document.getElementsByClassName(radioQuestion);
      for (var i = 0; i < radio.lenght; i++) {
        if (radio[i].checked) return radio[i].value;
      }
    }

    function getScore() {
      for (var i = 0; i < total; i++) {
        if (getCheckedValue("question" + i) === correctAnswer[i]) score += 1;
        returnScore;
      }

      function returnScore() {
        prompt("Your score is " + getScore() + "/" + total);
      }
    }
    function button() {
      for (var i = 0; i < numberQuestions; i++) {
        if (userInput[i] == correctAnswers[i]) {
          score += 1;
        } else {
          score += 0;
        }
      }
      returnScore;
      
      document.getElementById('Result').innerHTML = sum; // print result in div
    }

  });  // End of function --------------------


}); // DOMContentLoaded end  ------------------

