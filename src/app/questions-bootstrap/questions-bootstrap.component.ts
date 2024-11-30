import { Component } from '@angular/core';

@Component({
  selector: 'app-questions-bootstrap',
  templateUrl: './questions-bootstrap.component.html',
  styleUrls: ['./questions-bootstrap.component.css']
})
export class QuestionsBootstrapComponent {
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
      { question: 'What is the purpose of Bootstrap?', options: ['1. To create responsive, mobile-first websites', '2. To write JavaScript code', '3. To manage databases', '4. To test websites'], correctAnswer: 1 },
      { question: 'What is the grid system in Bootstrap?', options: ['1. A way to create flexible and responsive layouts', '2. A system for managing images', '3. A way to create forms', '4. A system for managing navigation'], correctAnswer: 1 },
      { question: 'What are the different container classes in Bootstrap?', options: ['1. container, container-fluid, container-sm', '2. grid, row, col', '3. header, footer, main', '4. jumbotron, alert, card'], correctAnswer: 1 },
      { question: 'What are the different grid classes in Bootstrap?', options: ['1. col-, col-sm-, col-md-, col-lg-, col-xl-', '2. row-, row-sm-, row-md-, row-lg-, row-xl-', '3. container-, container-sm-, container-md-, container-lg-, container-xl-', '4. grid-, grid-sm-, grid-md-, grid-lg-, grid-xl-'], correctAnswer: 1 },
      { question: 'How do you create responsive images in Bootstrap?', options: ['1. Using the img-fluid class', '2. Using the img-responsive class', '3. Using the img-thumbnail class', '4. Using the img-rounded class'], correctAnswer: 1 },
      { question: 'What are the different typography classes in Bootstrap?', options: ['1. display-1, display-2, display-3, display-4', '2. lead, heading, body', '3. font-weight-bold, font-italic, text-uppercase', '4. All of the above'], correctAnswer: 4 },
      { question: 'How do you create buttons in Bootstrap?', options: ['1. Using the button class', '2. Using the btn class', '3. Using the link class', '4. Using the a class'], correctAnswer: 2 },
      { question: 'What are the different button styles in Bootstrap?', options: ['1. primary, secondary, success, danger, warning, info, light, dark, link', '2. small, medium, large', '3. block, outline', '4. All of the above'], correctAnswer: 4 },
      { question: 'How do you create forms in Bootstrap?', options: ['1. Using the form class', '2. Using the input class', '3. Using the label class', '4. All of the above'], correctAnswer: 4 },
      { question: 'What are the different form control classes in Bootstrap?', options: ['1. form-control, form-group, form-label', '2. input-group, input-group-addon', '3. btn-group, btn-group-toggle', '4. All of the above'], correctAnswer: 4 },
      { question: 'How do you create navigation bars in Bootstrap?', options: ['1. Using the navbar class', '2. Using the nav class', '3. Using the ul class', '4. Using the li class'], correctAnswer: 1 },
      { question: 'How do you create dropdowns in Bootstrap?', options: ['1. Using the dropdown class', '2. Using the menu class', '3. Using the nav-item class', '4. Using the list-group class'], correctAnswer: 1 },
      { question: 'What are the different dropdown styles in Bootstrap?', options: ['1. menu-right, menu-left, menu-sm, menu-lg', '2. single, multi, submenu', '3. dropup, dropdown-right, dropdown-left', '4. All of the above'], correctAnswer: 4 },
      { question: 'How do you create cards in Bootstrap?', options: ['1. Using the card class', '2. Using the box class', '3. Using the panel class', '4. Using the block class'], correctAnswer: 1 },
      { question: 'What are the different components of a card in Bootstrap?', options: ['1. card-header, card-body, card-footer', '2. card-title, card-text, card-image', '3. card-link, card-group, card-deck', '4. All of the above'], correctAnswer: 4 },
      { question: 'How do you create carousels in Bootstrap?', options: ['1. Using the carousel class', '2. Using the slide class', '3. Using the rotate class', '4. Using the banner class'], correctAnswer: 1 },
      { question: 'What are the different controls in a carousel in Bootstrap?', options: ['1. prev, next, indicators', '2. slides, captions, controls', '3. pause, autoplay, animate', '4. All of the above'], correctAnswer: 4 },
      { question: 'How do you create modals in Bootstrap?', options: ['1. Using the modal class', '2. Using the popup class', '3. Using the dialog class', '4. Using the window class'], correctAnswer: 1 },
      { question: 'What are the different triggers for modals in Bootstrap?', options: ['1. click, hover, focus', '2. button, link, image', '3. toggle, show, hide', '4. All of the above'], correctAnswer: 4 },
      { question: 'How do you create popovers in Bootstrap?', options: ['1. Using the popover class', '2. Using the tooltip class', '3. Using the hint class', '4. Using the tip class'], correctAnswer: 1 },
      { question: 'What are the different positions for popovers in Bootstrap?', options: ['1. top, bottom, left, right', '2. top-left, top-right, bottom-left, bottom-right', '3. inside, outside, auto', '4. All of the above'], correctAnswer: 4 },
      { question: 'How do you create tooltips in Bootstrap?', options: ['1. Using the tooltip class', '2. Using the popover class', '3. Using the tip class', '4. Using the hint class'], correctAnswer: 1 },
      { question: 'What are the different triggers for tooltips in Bootstrap?', options: ['1. hover, focus', '2. click, touch', '3. context menu, keyboard', '4. All of the above'], correctAnswer: 2 },
      { question: 'How do you create progress bars in Bootstrap?', options: ['1. Using the progress class', '2. Using the bar class', '3. Using the stripe class', '4. Using the animate class'], correctAnswer: 1 },
      { question: 'What are the different styles for progress bars in Bootstrap?', options: ['1. striped, animated', '2. stacked, pills', '3. success, danger, warning, info', '4. All of the above'], correctAnswer: 4 },
      { question: 'How do you create alerts in Bootstrap?', options: ['1. Using the alert class', '2. Using the warning class', '3. Using the message class', '4. Using the popup class'], correctAnswer: 1 },
      { question: 'How do you customize Bootstrap with custom CSS?', options: ['1. By creating custom classes and overriding Bootstrap styles', '2. By modifying the main Bootstrap CSS file', '3. By using JavaScript to manipulate the DOM', '4. By modifying the default Sass variables'], correctAnswer: 1 },
      { question: 'What are the benefits of using Bootstrap grid system?', options: ['1. Responsive layouts for different screen sizes', '2. Easy to use and learn', '3. Consistent styling across elements', '4. All of the above'], correctAnswer: 4 },
      { question: 'What is the difference between Bootstrap CDN and downloading the library?', options: ['1. CDN is hosted server-side, downloaded files are local', '2. CDN offers latest version, downloaded files might be outdated', '3. CDN requires internet access, downloaded files work offline', '4. All of the above'], correctAnswer: 4 },
      { question: 'How do you use JavaScript features in Bootstrap?', options: ['1. Bootstrap provides some built-in JavaScript plugins', '2. You can integrate your own JavaScript code with Bootstrap components', '3. Bootstrap only works with CSS', '4. None of the above'], correctAnswer: 1 & 2 },
      { question: 'What are some popular alternatives to Bootstrap?', options: ['1. Tailwind CSS, Bulma, Foundation', '2. jQuery, HTML5 Boilerplate, Materialize', '3. Sass, Less, Stylus', '4. None of the above'], correctAnswer: 1 },
      { question: 'What are some best practices for using Bootstrap?', options: ['1. Choose appropriate components for your needs', '2. Use semantic markup for accessibility', '3. Keep your code clean and modular', '4. All of the above'], correctAnswer: 4 },
      { question: 'How can you improve the performance of Bootstrap websites?', options: ['1. Use only the components you need', '2. Minimize external requests, like fonts', '3. Utilize browser caching mechanisms', '4. All of the above'], correctAnswer: 4 },
      { question: 'What are some resources for learning more about Bootstrap?', options: ['1. Official Bootstrap documentation and tutorials', '2. Online communities and forums', '3. Video courses and tutorials', '4. All of the above'], correctAnswer: 4 },
      { question: 'What are some common mistakes to avoid when using Bootstrap?', options: ['1. Overusing components and making the layout cluttered', '2. Not customizing styles to fit your brand', '3. Ignoring accessibility best practices', '4. All of the above'], correctAnswer: 4 },
      { question: 'How can you stay up-to-date with the latest changes in Bootstrap?', options: ['1. Follow the official Bootstrap blog and social media', '2. Check the changelog for new features and bug fixes', '3. Participate in the Bootstrap community', '4. All of the above'], correctAnswer: 4 },
      { question: 'What are some ethical considerations when using Bootstrap?', options: ['1. Attribution for the Bootstrap project', '2. Avoiding plagiarism of pre-built themes', '3. Building inclusive and accessible websites', '4. All of the above'], correctAnswer: 4 },
      { question: 'How can Bootstrap help you build better websites?', options: ['1. Faster development with pre-built components', '2. More consistent and professional UI/UX', '3. Improved responsiveness and mobile-first approach', '4. All of the above'], correctAnswer: 4 }


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


