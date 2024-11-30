import { Component } from '@angular/core';

@Component({
  selector: 'app-questions-angular',
  templateUrl: './questions-angular.component.html',
  styleUrls: ['./questions-angular.component.css']
})
export class QuestionsAngularComponent {
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
      { question: 'What is Angular?', options: ['1. A JavaScript framework for building web applications', '2. A database management system', '3. A programming language', '4. A web server'], correctAnswer: 1 },
      { question: 'What are the core building blocks of Angular applications?', options: ['1. Components, modules, templates, directives, services, dependency injection', '2. Classes, objects, functions, variables', '3. HTML, CSS, JavaScript', '4. Servers, databases, APIs'], correctAnswer: 1 },
      { question: 'What is a component in Angular?', options: ['1. A reusable piece of UI with its own template, logic, and styles', '2. A function that performs a specific task', '3. A way to store and manage data', '4. A way to communicate with external services'], correctAnswer: 1 },
      { question: 'What is a module in Angular?', options: ['1. A container for a set of related components, directives, services, and pipes', '2. A single file that contains JavaScript code', '3. A way to organize code into logical units', '4. All of the above'], correctAnswer: 4 },
      { question: 'What is a template in Angular?', options: ['1. An HTML file that defines the structure and content of a component', "2. A JavaScript file that contains the component's logic", '3. A CSS file that styles the component', '4. A way to create dynamic content'], correctAnswer: 1 },
      { question: 'What is a directive in Angular?', options: ['1. An attribute that adds behavior to an HTML element', '2. A component that can be nested within other components', '3. A way to share data between components', '4. A way to create custom HTML tags'], correctAnswer: 4 },
      { question: 'What is a service in Angular?', options: ['1. A class that provides a specific functionality, often used for data access or business logic', '2. A way to share data and functionality across components', '3. A way to communicate with external APIs', '4. All of the above'], correctAnswer: 4 },
      { question: 'What is dependency injection in Angular?', options: ['1. A mechanism for providing services to components', '2. A way to make components more modular and testable', '3. A way to manage dependencies between components', '4. All of the above'], correctAnswer: 4 },
      { question: 'How do you create components in Angular?', options: ['1. Using the ng generate component command', '2. Manually creating TypeScript, HTML, and CSS files', '3. Using a third-party tool', '4. All of the above'], correctAnswer: 1 },
      { question: 'How do you bind data to the view in Angular?', options: ['1. Using property binding', '2. Using event binding', '3. Using two-way binding', '4. All of the above'], correctAnswer: 4 },
      { question: 'How do you handle user input in Angular?', options: ['1. Using event binding', '2. Using forms', '3. Using directives', '4. All of the above'], correctAnswer: 4 },
      { question: 'How do you navigate between different views in Angular?', options: ['1. Using routing', '2. Using the routerLink directive', '3. Using the Router service', '4. All of the above'], correctAnswer: 4 },
      { question: 'What is the difference between @Component and @Directive decorators in Angular?', options: ['1. Components create UI with templates, directives add behavior without templates', '2. Components are singletons, directives can be used multiple times', '3. Components handle data, directives handle events', '4. All of the above'], correctAnswer: 1 },
      { question: 'What are pipes in Angular?', options: ['1. Functions that transform data for display', '2. Classes that provide reusable functionality', '3. Ways to share data between components', '4. Tools for testing Angular applications'], correctAnswer: 1 },
      { question: 'What are some benefits of using Angular?', options: ['1. Improved developer productivity and code maintainability', '2. Single-page applications with dynamic content', '3. Rich UI components and powerful routing capabilities', '4. All of the above'], correctAnswer: 4 },
      { question: 'What are some common challenges of using Angular?', options: ['1. Steeper learning curve compared to simpler frameworks', '2. Larger initial bundle size than other frameworks', '3. Higher memory footprint and performance overhead', '4. All of the above'], correctAnswer: 4 },
      { question: 'What are some popular tools and libraries for Angular development?', options: ['1. Angular CLI, RxJS, NgRx, Material Design', '2. Bootstrap, jQuery, Chart.js, Font Awesome', '3. React Router, Redux, Axios, Webpack', '4. None of the above'], correctAnswer: 1 },
      { question: 'What are some best practices for writing Angular code?', options: ['1. Use clear and concise naming conventions', '2. Keep components small and focused', '3. Write modular and reusable code', '4. All of the above'], correctAnswer: 4 },
      { question: 'How do you test Angular applications?', options: ['1. Unit testing with Jasmine and Karma', '2. End-to-end testing with Protractor', '3. Both unit and end-to-end testing', '4. Visual regression testing tools'], correctAnswer: 3 },
      { question: 'What are some popular UI libraries for Angular?', options: ['1. Material Design, PrimeNG, Kendo UI', '2. Bootstrap, Foundation, Bulma', '3. React Bootstrap, Ant Design, Chakra UI', '4. None of the above'], correctAnswer: 1 },
      { question: 'What is difference between Ivy and View Engine in Angular?', options: ['1. Ivy is newer and faster renderer, View Engine is legacy', "2. Ivy uses tree-shaking for smaller bundles, View Engine doesn't", "3. Ivy supports lazy loading and code-splitting, View Engine doesn't ", "4. All of the above"], correctAnswer: 4 },
      { question: 'What is AOT (Ahead-of-Time) compilation in Angular?', options: ['1. Compiles Angular code to static JavaScript before runtime', '2. Improves application performance and security', '3. Reduces initial loading time and cold start problem', '4. All of the above'], correctAnswer: 4 },
      { question: 'What are some emerging trends in Angular development?', options: ['1. Progressive Web Apps (PWAs)', '2. Server-side rendering (SSR) and hybrid rendering', '3. Microfrontends and composability', '4. All of the above'], correctAnswer: 4 },
      { question: 'What are some resources for learning and improving Angular skills?', options: ['1. The official Angular documentation and tutorials', '2. Online courses and training platforms', '3. Blogs, forums, and community resources', '4. All of the above'], correctAnswer: 4 },
      { question: 'How can you stay up-to-date with the latest changes in Angular?', options: ['1. Follow the official Angular blog and social media', '2. Attend conferences and workshops', '3. Participate in the Angular community', '4. All of the above'], correctAnswer: 4 },
      { question: 'What are some ethical considerations when using Angular?', options: ['1. Open-source license and contribution guidelines', '2. Accessibility and inclusivity practices', '3. Avoiding plagiarism of UI components and designs', '4. All of the above'], correctAnswer: 4 },
      { question: 'What are some differences between Angular and other popular JavaScript frameworks like React and Vue.js?', options: ['1. Angular has steeper learning curve but more structured architecture, React and Vue.js are more flexible but need additional libraries', '2. Angular uses TypeScript while React and Vue.js primarily use JavaScript', '3. Angular promotes component-based development while React uses virtual DOM and Vue.js has a composition API', '4. All of the above'], correctAnswer: 4 },
      { question: 'What are some popular state management libraries used with Angular?', options: ['1. NgRx, MobX, Redux', '2. Apollo Client, Relay, SWR', '3. rxjs-state, Akita, ngxs', '4. All of the above'], correctAnswer: 1 },
      { question: 'What are some security considerations when building Angular applications?', options: ['1. Input validation to prevent XSS and SQL injection attacks', '2. Use trusted libraries and avoid outdated dependencies', '3. Secure API communication and authorization protocols', '4. All of the above'], correctAnswer: 4 },
      { question: 'How can you improve the performance of Angular applications?', options: ['1. Code splitting and lazy loading for efficient loading', '2. Use change detection wisely and avoid unnecessary recalculations', '3. Implement caching mechanisms for frequently used data', '4. All of the above'], correctAnswer: 4 },
      { question: 'What are some tools and techniques for debugging Angular applications?', options: ['1. Chrome DevTools and Angular DevTools extension', '2. Console logging and breakpoint debugging', '3. Error handling and unit testing', '4. All of the above'], correctAnswer: 4 },
      { question: 'What are some best practices for working with teams in Angular development?', options: ['1. Clear code documentation and shared coding standards', '2. Effective communication and collaboration tools', '3. Code reviews and continuous integration/continuous delivery (CI/CD)', '4. All of the above'], correctAnswer: 4 },
      { question: 'What are some ways to make your Angular applications more accessible to users with disabilities?', options: ['1. Use semantic HTML and ARIA attributes', '2. Support keyboard navigation and screen readers', '3. Provide alternative text for images and descriptions for non-visual content', '4. All of the above'], correctAnswer: 4 },
      { question: 'What are some upcoming features and enhancements planned for Angular in the future?', options: ['1. Improved tooling and build performance', '2. Better compiler optimizations and smaller bundle sizes', '3. Focus on developer experience and accessibility features', '4. All of the above'], correctAnswer: 4 },
      { question: 'How can you contribute to the Angular open-source community?', options: ['1. Report bugs and suggest improvements through GitHub issues', '2. Create and share learning resources and tutorials', '3. Answer questions on forums and help other developers', '4. All of the above'], correctAnswer: 4 },
      { question: 'What are some key takeaways and benefits you gained from learning and working with Angular?', options: ['1. Improved development skills and understanding of web technologies', '2. Ability to build complex and dynamic web applications', '3. Increased career opportunities and demand for Angular developers', '4. All of the above'], correctAnswer: 4 },
      { question: 'What advice would you give to someone who is interested in learning Angular?', options: ["1. Start with the fundamentals and practice, utilize community resources, don't hesitate to ask for help", "2. Choose a project to work on, experiment and explore different libraries, keep learning and improving", "3. Learn from experienced developers, engage with the community, remember it's a continuous learning journey", '4. All of the above'], correctAnswer: 4 },
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


