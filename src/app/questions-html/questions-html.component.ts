import { Component } from '@angular/core';

@Component({
  selector: 'app-questions-html',
  templateUrl: './questions-html.component.html',
  styleUrls: ['./questions-html.component.css']
})
export class QuestionsHTMLComponent {
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
      { question: 'What does the HTML &lt;sup&gt; tag represent?', options: ['1. Superscript text', '2. Main content', '3. Metadata about the HTML document', '4. Content aside from the content it is placed in'], correctAnswer: 1 },
      { question: 'Which tag is used for creating an ordered list?', options: ['1. &lt;ol&gt;', '2. &lt;ul&gt;', '3. &lt;li&gt;', '4. &lt;dl&gt;'], correctAnswer: 1 },
      { question: 'What is the purpose of the HTML &lt;s&gt; element?', options: ['1. Strikethrough text', '2. Main content', '3. Metadata about the HTML document', '4. Content aside from the content it is placed in'], correctAnswer: 1 },
      { question: 'Which tag is used for creating a form in HTML?', options: ['1. &lt;form&gt;', '2. &lt;input&gt;', '3. &lt;label&gt;', '4. &lt;button&gt;'], correctAnswer: 1 },
      { question: 'What is the correct HTML element for inserting a line break?', options: ['1. &lt;break&gt;', '2. &lt;lb&gt;', '3. &lt;newline&gt;', '4. &lt;br&gt;'], correctAnswer: 4 },
      { question: 'In HTML, what does the &lt;strong&gt; tag represent?', options: ['1. It defines italic text', '2. It defines strong text', '3. It defines a list', '4. It defines a section that contains the main content'], correctAnswer: 2 },
      { question: 'Which attribute is used to specify the URL of the page that the link goes to?', options: ['1. href', '2. url', '3. link', '4. src'], correctAnswer: 1 },
      { question: 'What is the purpose of the HTML &lt;aside&gt; element?', options: ['1. It defines a paragraph', '2. It defines a section that contains the main content', '3. It contains metadata about the HTML document', '4. It defines content aside from the content it is placed in'], correctAnswer: 4 },
      { question: 'Which tag is used for creating an input field in a form?', options: ['1. &lt;input&gt;', '2. &lt;label&gt;', '3. &lt;form&gt;', '4. &lt;button&gt;'], correctAnswer: 1 },
      { question: 'What does the HTML &lt;cite&gt; tag represent?', options: ['1. Citation', '2. Main content', '3. Metadata about the HTML document', '4. Content aside from the content it is placed in'], correctAnswer: 1 },
      { question: 'Which attribute is used to specify the text direction?', options: ['1. text-direction', '2. dir', '3. text-align', '4. direction'], correctAnswer: 2 },
      { question: 'What is the purpose of the HTML &lt;mark&gt; element?', options: ['1. Highlighted text', '2. Main content', '3. Metadata about the HTML document', '4. Content aside from the content it is placed in'], correctAnswer: 1 },
      { question: 'Which attribute is used to specify the width of a table cell?', options: ['1. width', '2. cell-width', '3. colspan', '4. table-cell-width'], correctAnswer: 1 },
      { question: 'What does the HTML &lt;sub&gt; tag represent?', options: ['1. Subscript text', '2. Main content', '3. Metadata about the HTML document', '4. Content aside from the content it is placed in'], correctAnswer: 1 },
      { question: 'What is the correct HTML element for inserting a horizontal line?', options: ['1. &lt;line&gt;', '2. &lt;rule&gt;', '3. &lt;hr&gt;', '4. &lt;break&gt;'], correctAnswer: 3 },
      { question: 'What is HTML used for?', options: ['1. Styling', '2. Scripting', '3. Structuring content', '4. Networking'], correctAnswer: 3 },
      { question: 'Which tag is used for creating a hyperlink?', options: ['1. &lt;a&gt;', '2. &lt;link&gt;', '3. &lt;hlink&gt;', '4. &lt;url&gt;'], correctAnswer: 1 },
      { question: 'What does HTML stand for?', options: ['1. Hyperlink and Text Markup Language', '2. Hyper Text Markup Language', '3. Hyper Transfer Markup Language', '4. High-level Text Markup Language'], correctAnswer: 2 },
      { question: 'What is the purpose of the HTML &lt;head&gt; element?', options: ['1. Main content', '2. Structure of the body', '3. Metadata about the HTML document', '4. Header for a document or section'], correctAnswer: 3 },
      { question: 'Which tag is used to define an unordered list?', options: ['1. &lt;ul&gt;', '2. &lt;ol&gt;', '3. &lt;li&gt;', '4. &lt;dl&gt;'], correctAnswer: 1 },
      { question: 'What does the &lt;abbr&gt; tag represent?', options: ['1. Hyperlink', '2. Abbreviation', '3. Address', '4. Bold text'], correctAnswer: 2 },
      { question: 'What is the purpose of the HTML &lt;cite&gt; element?', options: ['1. Citation', '2. Main content', '3. Metadata about the HTML document', '4. Content aside from the content it is placed in'], correctAnswer: 1 },
      { question: 'Which attribute is used to specify an alternative text for an image?', options: ['1. alt', '2. title', '3. src', '4. img'], correctAnswer: 1 },
      { question: 'What does the &lt;code&gt; tag represent?', options: ['1. Code snippet', '2. Main content', '3. Metadata about the HTML document', '4. Content aside from the content it is placed in'], correctAnswer: 1 },
      { question: 'What is the correct HTML element for creating a hyperlink?', options: ['1. &lt;a&gt;', '2. &lt;link&gt;', '3. &lt;hlink&gt;', '4. &lt;url&gt;'], correctAnswer: 1 },
      { question: 'Which attribute is used to specify the character encoding for an HTML document?', options: ['1. charset', '2. encoding', '3. codepage', '4. meta'], correctAnswer: 1 },
      { question: 'What is the purpose of the HTML &lt;blockquote&gt; element?', options: ['1. Block-level quotation', '2. Main content', '3. Metadata about the HTML document', '4. Footer for a document or section'], correctAnswer: 1 },
      { question: 'Which tag is used for creating a table?', options: ['1. &lt;table&gt;', '2. &lt;tab&gt;', '3. &lt;tr&gt;', '4. &lt;tbl&gt;'], correctAnswer: 1 },
      { question: 'What does the &lt;var&gt; tag represent?', options: ['1. Variable', '2. Main content', '3. Metadata about the HTML document', '4. Content aside from the content it is placed in'], correctAnswer: 1 },
      { question: 'What is the purpose of the HTML &lt;figcaption&gt; element?', options: ['1. Figure caption', '2. Main content', '3. Metadata about the HTML document', '4. Content aside from the content it is placed in'], correctAnswer: 1 },
      { question: 'Which attribute is used to specify the width of a table cell?', options: ['1. width', '2. cell-width', '3. colspan', '4. table-cell-width'], correctAnswer: 1 },


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


