# quiz_app


QuizApp is a simple quiz application built with React. It presents the user with a series of questions and options, keeps track of the user's score, and displays the final score at the end.

## Technologies Used

- **React**: The application is built using React, a popular JavaScript library for building user interfaces.
- **React Hooks**: The application uses React Hooks (`useState` and `useEffect`) for managing state and side effects in functional components.
- **Local Storage**: The application uses the Web Storage API (specifically `localStorage`) to persist the current question and score across browser sessions.
- **JSON**: The questions for the quiz are stored in a JSON file and imported into the application.

## Features

- **Question Navigation**: The application presents one question at a time and navigates to the next question when an answer option is clicked.
- **Score Calculation**: The application keeps track of the user's score, incrementing it whenever the user clicks a correct answer.
- **Score Display**: The application displays the final score to the user at the end of the quiz.
- **State Persistence**: The application persists the current question and score in local storage, so the quiz can be continued even after refreshing or closing the browser.

## Installation

1. Clone the repository: `git clone https://github.com/notoriousmk/quiz_app.git`
2. Navigate into the project directory: `cd QuizApp`
3. Install the dependencies: `npm install`
4. Start the application: `npm start`
