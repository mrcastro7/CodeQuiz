# Web APIs Homework: Code Quiz https://mrcastro7.github.io/CodeQuiz/

Built a timer-based quiz application that stores high scores client-side. 

# Here is what the application does 

* Play proceeds as follows:

  * The user arrives at the landing page and is presented with a call-to-action to "Start Quiz." Also note the navigation option to "View Highscores" and the "Time" value set at 0.

  * Clicking the "Start Quiz" button presents the user with a series of questions. The timer is initialized with a value and immediately begins countdown.

  * Score is calculated by time remaining. Answering quickly and correctly results in a higher score. Answering incorrectly results in a time penalty (for example, 15 seconds are subtracted from time remaining).

  * When time runs out and/or all questions are answered, the user is presented with their final score and asked to enter their initials. Their final score and initials are then stored in `localStorage`.

* Your application should also be responsive, ensuring that it adapts to multiple screen sizes.

# Technologies Used 
* HTML
* CSS
* Javascript
* jQuery
