import { Component } from '@angular/core';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent {
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
      { question: 'What does CSS stand for?', options: ['Cascading Style Sheets', 'Computer Style Selectors', 'Creative Style Scripts', 'Colorful Style Syntax'], correctAnswer: 1 },
      { question: 'Which of these is a valid CSS selector?', options: ['div#header', 'p.class', 'h1[title]', 'a(href)'], correctAnswer: 1 },  
      { question: 'What property is used to change the font size of an element?', options: ['font-family', 'font-size', 'font-weight', 'font-style'], correctAnswer: 2 }, 
      { question: 'What is the correct way to set the background color of an element to red?', options: ['background-color: red;', 'color: red;', 'background: red;', 'bgcolor: red;'], correctAnswer: 1 },  
      { question: 'How do you create a class selector in CSS?', options: ['.class-name', '#class-name', 'class(name)', 'class=name'], correctAnswer: 1 },  
      { question: 'What is the difference between inline, internal, and external styles?', options: ['No difference', 'Location in the HTML file', 'Syntax', 'Specificity'], correctAnswer: 2 },  
      { question: 'What is the box model in CSS?', options: ['A packaging model for HTML elements', 'A visual representation of element structure', 'A way to organize CSS rules', 'A method for creating layouts'], correctAnswer: 2 },  
      { question: 'What property is used to set the width of an element?', options: ['width', 'size', 'dimension', 'length'], correctAnswer: 1 },  
      { question: 'What property is used to set the height of an element?', options: ['height', 'length', 'vertical-size', 'v-size'], correctAnswer: 1 },  
      { question: 'What property is used to set the margin of an element?', options: ['margin', 'padding', 'border', 'spacing'], correctAnswer: 1 },  
      { question: 'What property is used to set the padding of an element?', options: ['padding', 'margin', 'border', 'spacing'], correctAnswer: 1 },  
      { question: 'What property is used to set the border of an element?', options: ['border', 'margin', 'padding', 'outline'], correctAnswer: 1 },  
      { question: 'What property is used to float an element to the left?', options: ['float: left;', 'align: left;', 'position: left;', 'left: float;'], correctAnswer: 1 },  
      { question: 'What property is used to clear a float?', options: ['clear: both;', 'clear: float;', 'clear: none;', 'clear: all;'], correctAnswer: 1 },  
      { question: 'What is the difference between relative, absolute, and fixed positioning?', options: ['Visual appearance', 'Relationship to parent elements', 'Browser compatibility', 'Specificity'], correctAnswer: 2 },  
      { question: 'What is the z-index property used for?', options: ['Setting font size', 'Setting element width', 'Controlling element stacking order', 'Creating layouts'], correctAnswer: 3 },
      { question: 'What is the shorthand property for setting all four border properties at once?', options: ['border-all', 'border: all', 'border-full', 'border-value'], correctAnswer: 2 },
      { question: "What pseudo-class selects an element that is currently the users " , options: [':focus', ':active', ':selected', ':hover'], correctAnswer: 1 },
      { question: 'How do you specify a negative margin value?', options: ['-5px', 'margin: -5px', 'negative-margin: 5px', 'margin-minus: 5px'], correctAnswer: 1 },
      { question: 'What is the purpose of CSS frameworks like Bootstrap or Foundation?', options: ['Providing pre-built styles', 'Simplifying responsive design', 'Enhancing accessibility', 'Improving performance'], correctAnswer: 2 },
      { question: 'How do you create a CSS animation that loops infinitely?', options: ['animation-duration: infinite', 'animation-play-state: running', 'animation-iteration-count: 0', 'animation-timing-function: linear'], correctAnswer: 3 },
      { question: 'What is the difference between a @media query and a viewport unit?', options: ['Media queries apply styles based on device properties', 'Viewport units are relative to the browser window size', 'Both are the same thing', 'Media queries are for print styles'], correctAnswer: 1 },
      { question: 'How do you prevent text from being selected by the user?', options: ['user-select: none', 'text-selection: off', 'unselectable', 'non-selectable'], correctAnswer: 1 },
      { question: 'What does the display: none property do to an element?', options: ['Hides it visually', 'Removes it from the DOM', 'Sets its opacity to 0', 'Makes it unfocusable'], correctAnswer: 1 },
      { question: 'How can you target an element that is the first child of another element?', options: [':first-child', ':nth-child(1)', ':first', ':child-of'], correctAnswer: 1 },
      { question: 'What is the benefit of using CSS grid for layout compared to flexbox?', options: ['Easier to create complex layouts', 'More precise control over element positioning', 'Better browser compatibility', 'No real difference'], correctAnswer: 1 },
      { question: 'How do you create a sticky navigation bar that remains fixed at the top of the page as the user scrolls?', options: ['position: fixed; top: 0; left: 0; right: 0;', 'position: sticky; top: 0;', 'use JavaScript', 'create a custom CSS class'], correctAnswer: 2 },
      { question: 'What is the semantic meaning of the <header> element in HTML?', options: ['Container for page title and logo', 'Introductory content for a section', 'Navigation bar', 'Heading of a document'], correctAnswer: 1 },
      { question: 'How can you target an element based on its attribute value?', options: ['[attribute-name="value"]', '.attribute-value', ':attr(attribute-name="value")', 'attribute: value'], correctAnswer: 1 },


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
