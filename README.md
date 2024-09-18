# Trivia Quiz App
## Overview

This is a trivia quiz application built using React. It fetches five trivia questions from an external API and presents them to the user. Users can select an answer from randomly shuffled options, and feedback is given for correct and incorrect answers. Once all questions are attempted, the app refreshes automatically. The project showcases use of React state management, conditional rendering, and making API requests.

## Technologies used
- HTML
- CSS
- React
- JSX
- Javascript

## Project Structure
All files are in the same(root) directory.

|           |                                                                                    |
|-------------------|---------------------------------------------------------------------------------------------------|
| main.jsx          | Entry point for rendering the app into the root DOM element.                                       |
| App.jsx           | Main application component that renders the quiz interface and the Question component.             |
| Question.jsx      | Component responsible for fetching questions from the API and rendering them, including logic for handling answers and displaying results. |
| App.css           | Styles specific to the quiz interface.                                                            |
| index.css         | General global styles.                                                                            |
| index.html        | HTML file containing the root div element where the app is rendered.                              |
| .eslintrc.cjs     | ESLint configuration file to maintain code quality.                                               |
| .gitignore        | Specifies files and directories to ignore in version control.                                     |
| package.json      | Manages project dependencies and scripts.                                                         |
| vite.config.js    | Configuration file for Vite, the development server used in this project.                         |

## Usage

Upon loading, the app fetches five trivia questions from The Trivia API and displays them. Each question has four options displayed in a random order. Click on an answer to select it. The selected answer's background color changes based on whether it's correct or incorrect. Correct answers will be highlighted in the color green. If an incorrect option was selected it will be highlighted in purple, as well as the correct answer in green. You may then proceed to the next question. After all five questions have been answered answered, the app will automatically refresh after 3 seconds, displaying a new set of five questions.

## Installation and Setup

Clone or download the repository.
```
git clone https://github.com/HayaOnGit/Quiz-Web-App-React.git
```
Run npm install to install the necessary dependencies.<br>
Use npm run dev to start the development server (powered by Vite).<br>
Open the provided localhost link in your web browser to view the app.<br>

## Contributing

Contributions are welcome! If you find any issues or have ideas for improvements, feel free to open an issue or submit a pull request.
