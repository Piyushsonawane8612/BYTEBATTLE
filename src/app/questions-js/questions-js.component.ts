import { Component } from '@angular/core';

@Component({
  selector: 'app-questions-js',
  templateUrl: './questions-js.component.html',
  styleUrls: ['./questions-js.component.css']
})
export class QuestionsJSComponent {
  // Variables to keep track of quiz progress and score
  currentQuestion: number = 0;
  score: number = 0;
  questions: Array<{ question: string; options: string[]; correctAnswer: number }> = [];
  userAnswers: number[] = [];
  quizStarted: boolean = false;

  // Function to start the quiz
  startQuiz(): void {
    const questionCountInput = document.getElementById('questionCount') as HTMLInputElement;
    const questionCount = parseInt(questionCountInput.value);

    if (questionCount > 0) {
      this.questions = this.generateRandomQuestions(questionCount);
      this.displayQuestion();
      this.quizStarted = true;

      // Hide the initial quiz-related elements

      document.getElementById('questionInput')!.style.display = 'none';
      document.getElementById('startButton')!.style.display = 'none';

      // Hide the box-container
    const boxContainer = document.querySelector('.box-container') as HTMLElement;
    if (boxContainer) {
      boxContainer.style.display = 'none';
    }

      // Hide the user input box
      questionCountInput.style.display = 'none';

      // Show the quiz section
      document.getElementById('quiz')!.style.display = 'block';
      document.getElementById('scoreCard')!.style.display = 'none';
    }
  }

  // Function to move to the previous question
  previousQuestion(): void {
    // Move to the previous question if available
    if (this.currentQuestion > 0) {
      this.currentQuestion--;
      this.displayQuestion();
    } else {
      // Alert if trying to go back from the first question
      alert('You are already at the first question.');
    }
  }

  // Function to generate random questions from a predefined set
  generateRandomQuestions(count: number): Array<{ question: string; options: string[]; correctAnswer: number }> {
    const allQuestions: Array<{ question: string; options: string[]; correctAnswer: number }> = [
      { question: "What is the correct way to declare a variable in JavaScript?", options: ['1. var name = "John";', '2. let name = "John";', '3. const name = "John";', '4. All of the above'], correctAnswer: 4 },
      { question: 'What is the output of console.log(typeof 5);?', options: ['1. string', '2. number', '3. object', '4. boolean'], correctAnswer: 2 },
      { question: 'What is the difference between == and === operators in JavaScript?', options: ['1. == checks for value equality, === checks for both value and type equality', '2. == checks for type equality, === checks for value equality', '3. There is no difference', '4. == checks for strict equality, === checks for loose equality'], correctAnswer: 1 },
      { question: 'How do you create a function in JavaScript?', options: ['1. function myFunction() { ... }', '2. def myFunction(): ...', '3. function = myFunction() { ... }', '4. let myFunction = () => { ... }'], correctAnswer: 1 },
      { question: 'What is the scope of a variable declared with var?', options: ['1. Global scope', '2. Function scope', '3. Block scope', '4. None of the above'], correctAnswer: 1 },
      { question: 'What is the keyword used to create objects in JavaScript?', options: ['1. object', '2. new', '3. create', '4. instance'], correctAnswer: 2 },
      { question: 'How do you access a property of an object?', options: ['1. object.property', '2. object["property"]', '3. get(object, "property")', '4. Both 1 and 2'], correctAnswer: 4 },
      { question: 'What is the difference between a for loop and a while loop?', options: ['1. for loop iterates a fixed number of times, while loop iterates until a condition is met', '2. while loop iterates a fixed number of times, for loop iterates until a condition is met', '3. There is no difference', '4. for loop is used for arrays, while loop is used for objects'], correctAnswer: 1 },
      { question: 'How do you create an array in JavaScript?', options: ["1. array = [1, 2, 3]", "2. array()", "3. new Array(1, 2, 3)", "4. Both 1 and 3"], correctAnswer: 4 },
      { question: 'How do you add an element to the end of an array?', options: ['1. array.push(element)', '2. array.add(element)', '3. array.append(element)', '4. array.insert(element)'], correctAnswer: 1 },
      { question: 'What is the difference between a string and a number?', options: ['1. Strings are used to represent text, numbers are used to represent numerical values', '2. Numbers can be used in calculations, strings cannot', '3. Strings are immutable, numbers are mutable', '4. All of the above'], correctAnswer: 4 },
      { question: 'How do you concatenate strings in JavaScript?', options: ['1. string1 + string2', '2. string1.concat(string2)', '3. string1 & string2', '4. string1.join(string2)'], correctAnswer: 1 },
      { question: 'What is the DOM in JavaScript?', options: ['1. Document Object Model', '2. Data Object Model', '3. Digital Object Model', '4. Display Object Manager'], correctAnswer: 1 },
      { question: 'How do you manipulate the DOM elements in JavaScript?', options: ['1. document.getElementById("elementId")', '2. querySelector()', '3. Both 1 and 2', '4. innerHTML property'], correctAnswer: 3 },
      { question: 'What is an event listener in JavaScript?', options: ['1. A function that listens for user actions on an element', '2. A special type of variable', '3. A built-in function for debugging', '4. A library for DOM manipulation'], correctAnswer: 1 },
      { question: 'What is the syntax for adding an event listener in JavaScript?', options: ['1. element.addEventListener(event, functionName)', '2. element.onclick = functionName', '3. Both 1 and 2', '4. element.listen(event, functionName)'], correctAnswer: 3 },
      { question: 'What is callback function in JavaScript?', options: ['1. A function passed as an argument to another function', '2. A function called after an event occurs', '3. A special type of object', '4. A function called inside another function'], correctAnswer: 1 },
      { question: 'What is the purpose of the fetch API in JavaScript?', options: ['1. Used to make asynchronous HTTP requests', '2. Used for data validation', '3. Used for DOM manipulation', '4. Used for event handling'], correctAnswer: 1 },
      { question: 'What is Promise in JavaScript?', options: ['1. A representation of an eventual completion (or failure) of an asynchronous operation', '2. A special type of loop', '3. A function for error handling', '4. A variable that can hold multiple values'], correctAnswer: 1 },
      { question: 'What is the syntax for creating a Promise in JavaScript?', options: ['1. new Promise((resolve, reject) => { ... })', '2. Promise.create(() => { ... })', '3. promise(resolve, reject) { ... }', '4. There is no built-in way to create a Promise'], correctAnswer: 1 },
      { question: 'What is the difference between resolve and reject in Promise?', options: ['1. resolve indicates successful completion, reject indicates error', '2. resolve adds data to the Promise, reject removes data', '3. resolve is used for API calls, reject is used for user input', '4. Both resolve and reject always succeed'], correctAnswer: 1 },
      { question: 'What is the purpose of async/await keywords in JavaScript?', options: ['1. To simplify writing asynchronous code', '2. To handle errors in Promises', '3. To create new threads', '4. To pause the execution of a function'], correctAnswer: 1 },
      { question: 'What is the syntax for using async/await with Promises?', options: ['1. async function myFunction() { await promise; }', '2. const result = await Promise.resolve(data);', '3. Both 1 and 2', '4. async await(promise) { ... }'], correctAnswer: 3 },
      { question: 'What is the advantage of using arrow functions in JavaScript?', options: ['1. More concise syntax than traditional functions', '2. Lexical this binding', '3. Both 1 and 2', '4. No advantages, just different syntax'], correctAnswer: 3 },
      { question: 'What is the purpose of modules in JavaScript?', options: ['1. To organize code into reusable parts', '2. To share data between different parts of the program', '3. Both 1 and 2', '4. To create custom functions'], correctAnswer: 3 },
      { question: 'What is the syntax for importing and exporting modules in JavaScript?', options: ['1. import { moduleName } from "modulePath";', '2. export default functionName;', '3. Both 1 and 2', '4. require("modulePath")'], correctAnswer: 3 },
      { question: 'What is the purpose of the spread operator (...) in JavaScript?', options: ['1. Unpacks an iterable into its individual elements', '2. Combines multiple arrays into a single array', '3. Creates a copy of an array or object', '4. Used for mathematical operations'], correctAnswer: 1 },
      { question: 'What is destructuring assignment in JavaScript?', options: ['1. Assigns values from an array or object to multiple variables in a concise way', '2. Creates new arrays or objects from existing ones', '3. Used for error handling', '4. Modifies the values inside an array or object'], correctAnswer: 1 },
      { question: 'What is the difference between class methods and static methods in JavaScript?', options: ['1. Class methods are accessible on instances, static methods are accessible on the class itself', '2. Static methods cannot be modified, class methods can be', '3. Class methods take the instance as an argument, static methods do not', '4. There is no difference, both are the same'], correctAnswer: 1 },
      { question: 'What is the purpose of the super keyword in JavaScript classes?', options: ['1. Access properties and methods from the parent class', '2. Call the parent class constructor', '3. Both 1 and 2', '4. Used for inheritance in multi-class situations'], correctAnswer: 3 },
      { question: 'What is the difference between let and const keywords in JavaScript?', options: ['1. let creates mutable variables, const creates immutable variables', '2. let is block-scoped, const is globally scoped', '3. let allows reassignment, const does not', '4. Both 1 and 3'], correctAnswer: 4 },
      { question: 'What is the difference between == and === operators in JavaScript with regards to null and undefined?', options: ['1. == treats null and undefined as equal, === does not', '2. == throws an error when comparing null and undefined, === does not', '3. == converts null and undefined to other types before comparison, === does not', '4. There is no difference in comparing null and undefined with both operators'], correctAnswer: 1 },
      { question: 'What is the purpose of type conversions in JavaScript?', options: ['1. Automatically convert data types for compatibility in operations', '2. Used for data validation', '3. Change the internal representation of data in memory', '4. Used for formatting data for display'], correctAnswer: 1 },
      { question: 'What is the difference between deep and shallow copy in JavaScript?', options: ['1. Deep copy creates a new copy of the entire object graph, shallow copy only copies references to the original values', '2. Deep copy is slower than shallow copy', '3. Deep copy cannot be used with primitive types, shallow copy can', '4. There is no difference, both types create identical copies'], correctAnswer: 1 },
      { question: 'What is the purpose of Error objects in JavaScript?', options: ['1. Represent runtime errors and provide information about them', '2. Used for custom error handling', '3. Both 1 and 2', '4. Indicate successful completion of an operation'], correctAnswer: 3 },
      { question: 'What is the syntax for handling errors with the try/catch block in JavaScript?', options: ['1. try { ... } catch (error) { ... }', '2. if (error) { ... } else { ... }', '3. onerror = { ... }', '4. error { ... }'], correctAnswer: 1 },
      { question: 'What is the purpose of the debugger in JavaScript?', options: ['1. Step through code line by line to diagnose errors', '2. Set breakpoints at specific lines to pause execution', '3. Inspect variables and their values during execution', '4. All of the above'], correctAnswer: 4 },




];


    // Shuffle the questions to get a random order
    const shuffledQuestions = allQuestions.sort(() => Math.random() - 0.5);

    // Return a subset of questions based on the count provided
    return shuffledQuestions.slice(0, count);
  }


// Function to display the current question and options
displayQuestion(): void {
  const questionElement = document.getElementById('question')!;
  const optionsElement = document.getElementById('options')!;
  const currentQuestionData = this.questions[this.currentQuestion];

  // Display the current question
  questionElement.innerHTML = currentQuestionData.question;

  // Display options for the current question
  optionsElement.innerHTML = '';

  // Apply styles for individual options in the list
  const liStyle = `
      margin-bottom: 10px;
      padding: 10px;
      border-radius: 5px;
      transition: background-color 0.3s ease;
      background-color: #f0f0f0;`; // Use the default background color for all options

  // Iterate through options and create labels for each
  currentQuestionData.options.forEach((option, index) => {
      const isChecked = index === (this.userAnswers[this.currentQuestion] || -1); // Check if the option is the user's answer
      const isDisabled = this.userAnswers[this.currentQuestion] !== undefined; // Disable the radio button if the user has answered

      optionsElement.innerHTML += `
          <li style="${liStyle}">
              <label style="cursor: pointer;" onclick="this.selectOption(${index})">
                  <input type="radio" name="answer" value="${index}" ${isChecked ? 'checked' : ''} ${isDisabled ? 'disabled' : ''}>
                  ${option}
              </label>
          </li>`;
  });
}


  // Function to simulate clicking the radio button when the user clicks on the list item
  selectOption(index: number): void {
    const radioBtn = document.querySelector(`input[name="answer"][value="${index}"]`) as HTMLInputElement;
    radioBtn.checked = true;
  }

  // Function to move to the next question
  nextQuestion(): void {
    // Check if the user has not answered the question
    if (this.userAnswers[this.currentQuestion] === undefined) {
      // Get the selected answer
      const selectedAnswer = document.querySelector('input[name="answer"]:checked') as HTMLInputElement;

      // Check if an answer is selected
      if (selectedAnswer) {
        // Get the index of the selected answer
        const answerIndex = parseInt(selectedAnswer.value);

        // Store the selected answer in userAnswers array
        this.userAnswers[this.currentQuestion] = answerIndex;

        // Check if the selected answer is correct
        if (answerIndex === this.questions[this.currentQuestion].correctAnswer - 1) {
          // Increment the score and show result for the correct answer
          this.score++;
        }
      } else {
        // If no answer is selected, show an alert
        alert('Please select an answer.');
        return; // Exit the function without moving to the next question
      }
    }

    // Move to the next question
    this.currentQuestion++;

    // Check if there are more questions
    if (this.currentQuestion < this.questions.length) {
      // Display the next question
      this.displayQuestion();
    } else {
      // If no more questions, show the final score
      this.showScore();
    }
  }

  // Function to display the result for the current question
  showResult(message: string, className: string): void {
    const resultElement = document.getElementById('result')!;
    resultElement.innerHTML = message;
    resultElement.className = className;
  }

  showScore(): void {
    // Check if the user has not answered the question
    if (this.userAnswers[this.currentQuestion] === undefined) {
      // Get the selected answer
      const selectedAnswer = document.querySelector('input[name="answer"]:checked') as HTMLInputElement;

      // Check if an answer is selected
      if (selectedAnswer) {
        // Get the index of the selected answer
        const answerIndex = parseInt(selectedAnswer.value);

        // Store the selected answer in userAnswers array
        this.userAnswers[this.currentQuestion] = answerIndex;

        // Check if the selected answer is correct
        if (answerIndex === this.questions[this.currentQuestion].correctAnswer - 1) {
          // Increment the score and show result for the correct answer
          this.score++;
        }
      } else {
        // If no answer is selected, show an alert
        alert('Please select an answer.');
        return; // Exit the function without moving to the next question
      }
    }

    // Move to the next question
    this.currentQuestion++;

    // Get elements for score display
    const scoreElement = document.getElementById('score')!;
    const scorePercentageElement = document.getElementById('scorePercentage') as HTMLDivElement;

    // Update the score display
    scoreElement.innerHTML = `${this.score}/${this.questions.length}`;

    // Calculate the score percentage
    const scorePercentage = ((this.score / this.questions.length) * 100).toFixed(2);

    // Calculate the rotation angle based on the percentage score
    const rotationAngle = (parseFloat(scorePercentage) / 100) * 360;

    // Set the CSS variable for the rotation angle
    scorePercentageElement.style.setProperty('--rotation-angle', `${rotationAngle}deg`);

    // Update the score percentage display
    scorePercentageElement.innerHTML = ` ${scorePercentage}`;
    scorePercentageElement.setAttribute('data-score', scorePercentage);

    // Hide the quiz section and show the score card section
    document.getElementById('quiz')!.style.display = 'none';
    document.getElementById('scoreCard')!.style.display = 'block';
}

// Function to restart the quiz
restartQuiz(): void {
  // Reset quiz-related variables and UI
  this.currentQuestion = 0;
  this.score = 0;
  this.userAnswers = [];
  this.quizStarted = false;

  // Show the initial quiz-related elements
  document.getElementById('questionInput')!.style.display = 'block';
  document.getElementById('startButton')!.style.display = 'block';

  // Show the box-container
  const boxContainer = document.querySelector('.box-container') as HTMLElement;
  if (boxContainer) {
    boxContainer.style.display = 'block';
  }

  // Show the user input box
  const questionCountInput = document.getElementById('questionCount') as HTMLInputElement;
  questionCountInput.style.display = 'block';

  // Hide the quiz section and score card section
  document.getElementById('quiz')!.style.display = 'none';
  document.getElementById('scoreCard')!.style.display = 'none';
}

}

