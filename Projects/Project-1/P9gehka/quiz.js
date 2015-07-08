"use strict";
//Sorry for the mistakes in the comments
//English is not my native language
var MakeQuiz, quiz, allQuestion, addClass, Button, addClasses;
//make array of questions, choices and correctAnswer
allQuestion = [{question: "What value return this code <code>[] + []</code>?", choices: ['""', "[]", "Nan", "0"], correctAnswer:0}];
allQuestion.push({question: "And now <code>[] + {}</code>?", choices: ['""', "[]", "Nan", "[object Object]"], correctAnswer:3});
allQuestion.push({question: "What about OR <code>null || 2 || undefined</code>?'", choices: ['null', "undefined", "2", "false"], correctAnswer:2});
allQuestion.push({question: "... AND <code>1 && null && 2</code>?'", choices: ['null', "true", "1", "2"], correctAnswer:0});
allQuestion.push({question: "Last... <code>null + 1 = 1</code>?'", choices: ['null', "1", "Nun", "'null1'"], correctAnswer:1});

//some function for help 
addClass = function (elem, clazz) {
  var c = elem.className.split(' ');
  for(var i=0; i<c.length; i++) {
    if (c[i] == clazz) return;
  }

  if (elem.className == '') elem.className = clazz;
  else elem.className += ' ' + clazz;
}

addClasses = function (elem, clazzesArr) {
  clazzesArr.forEach( function(clazz) {
    addClass(elem, clazz);
  })
},

//class MakeQuiz, take container and question. create quiz in container
MakeQuiz = function(quizContainerElement, allQuestion) {
  var makeQuestion, quizElements;

  this.container = quizContainerElement;//save container in this, when quiz is finished
  //replace quiz dom for score dom
  this.question = allQuestion;// user answer is stored hear

  quizElements = this.builtDOM(quizContainerElement);//create DOM quiz, and return array of buttons, button next, space for text question

  makeQuestion = this.makeQuestion(allQuestion, quizElements);//make question
  makeQuestion();//start first question

  quizContainerElement.addEventListener("click", this.takeAnswer(makeQuestion))//when click on container, answer check, click on button
}

MakeQuiz.prototype.takeAnswer = function (callback) {
  var _this, i;
  _this = this;//save this , in return function this will be quizContainerElement
  i = 0;

  return function(e) {
    var attr;

    if(e.target.tagName !== "BUTTON") {return; } //check if click on button
    attr = e.target.getAttribute("data-attr");

    _this.question[i].answer = +attr;//save answer

    if(_this.finalScore) {//if function makeQuestion set this.finalScore = true - finish quiz and
      //show finalScrore
      _this.showFinalScore();
      return;
    }

    i++;// counter, each launch takeAnswer increases i, and save answer in this.question[i]
    callback();//lauch makeQuestion
  }
}
//make Dom final Scrore from this.question. {question, answer, correctAnswer, choices}
MakeQuiz.prototype.showFinalScore = function () {

  var newContainer, layoutRow, span, i, item, value, correctAnswer, clazz;

  newContainer = this.container.cloneNode(false);
  addClass(newContainer, "final-score");

  this.question.forEach(function (question) {
    layoutRow = document.createElement("div");
    for(item in question) {
      span = document.createElement("span");
      value = question[item]
      correctAnswer = question.correctAnswer;
      switch (item) {//set value of DOM element, andd add some bootstrap classes
        case "question":
          span.innerHTML = value;
          addClasses(span, ["col-sm-4", "text-info"]);
          break
        case "answer":
          clazz = (question[item] === correctAnswer) ? "text-success" : "text-warning";
          span.innerHTML = question.choices[value] || "no answer";
          addClasses(span, ["col-sm-2", "col-sm-offset-1", clazz]);
          break
        case "correctAnswer":
          span.innerHTML = question.choices[value];
          addClasses(span, ["col-sm-2", "col-sm-offset-1", "text-success"]);
          break
      }
      if(item !== "choices") {layoutRow.appendChild(span); } //ignore choices
    }
    addClasses(layoutRow, ["row", "top-buffer"])
    newContainer.appendChild(layoutRow);
  });

  this.container.parentNode.replaceChild(newContainer, this.container);
}
//change button.innerHTML, text.innerHTML from new question arr;
MakeQuiz.prototype.makeQuestion = function (allQuestion, quizElements) {
  var i, buttons, _this;
  _this = this;
  i = 0;
  buttons = quizElements.buttons;

  return function() {

    if(allQuestion[i + 1] == null) { _this.finalScore = true; }

    _this.answer = allQuestion[i].correctAnswer;

    quizElements.questionSpace.innerHTML= allQuestion[i].question;

    allQuestion[i].choices.forEach(function (question, j) {
      buttons[j].changeValue("" + question);
    });

    i++;//counter, each launch makeQuestion take value from next item of array
  }
}

//create dom whis bootstrap classes and return needed elements {buttons: buttonsArr, nextButton: next, questionSpace: question}
MakeQuiz.prototype.builtDOM = function(container) {
  var i, p, button, buttonsArr, layoutRow, next, question;
  buttonsArr = [];
  question = document.createElement("p");
  addClass(question, "text-info");
  container.appendChild(question);

  for(i = 0; i < 5; i++) {
    button = document.createElement("button");
    button.setAttribute("data-attr", i);

    if(!(i%2)) {
      layoutRow = document.createElement("div");
      addClasses(layoutRow, ["row", "top-buffer"]);
    } else { 
      addClass(button, "col-sm-offset-4")
      container.appendChild(layoutRow) 
    }
    if(i === 4) {
      addClasses(button, ["btn", "btn-default", "btn-md", "col-sm-6"]);
      button.innerHTML = "Next";
      layoutRow.appendChild(button);
      break;
    }

    addClasses(button, ["btn", "btn-default", "btn-md", "col-sm-4"]);

    buttonsArr.push(new Button(button));

    layoutRow.appendChild(button);
  }

  container.appendChild(layoutRow);

  return {buttons: buttonsArr, nextButton: next, questionSpace: question};
}

Button = function (buttonElement) {
  this.element = buttonElement;
}
//function change value of button
Button.prototype.changeValue = function (Value) {
  this.element.innerHTML = Value;
}
//start quizElements
quiz = new MakeQuiz(
  document.getElementById("quiz"),//container for quiz
  allQuestion
  );