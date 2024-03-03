import React, { useEffect, useState } from 'react';
import './App.css';

export default function Question(props) {

  // Data received from API GET request (using fetch) to state
  const [state, setState] = useState([]);
  const quizData = state;

  useEffect(()=>{
    async function getDataFromApi(){
      try {
        const request = await fetch("https://the-trivia-api.com/v2/questions/")
        const data = await request.json()
        setState(data);
        console.log("rendered");
        console.log("quizData", quizData);
        console.log("API request:", data)
      } catch (error) {
        console.error("Error Fetching 5Q API data:", error);
      }
    }

    getDataFromApi()
  }, []);
  

  // Variable will keep count of the number of questions answered
  let moreQuestions = 0;

  // Generate an array of numbers (0, 1, 2, 3) in random order to use as indices later to render answer options in random order
  let randomInteger = [];
  let renderingFiveQuestions = quizData.slice(0, 5).map(function (section) {
    let randomInteger = [];
    while (randomInteger.length < 4) {
      let randomIndex = Math.floor(Math.random() * 4);

      if (!randomInteger.includes(randomIndex)) {
        randomInteger.push(randomIndex);
      }
    }

    // assigning data to variables
    let question = section.question.text;
    let arrayOfAllOptions = [section.correctAnswer, ...section.incorrectAnswers];
    let correct = section.correctAnswer;

    // Map over array of all options to convert each option into paragraph tags
    let arrayOfAllOptionsAsParagraphs = arrayOfAllOptions.map((option, index) => (
      <p
        id={`customId_${section.id}_${index}`}
        // Function triggered on click
        onClick={(e) => { selectAnswer(e); }}
        key={index}
        className='options-Class'
      >
        {option}
      </p>
    ));

    // Get options in random order by using the randomInteger array as the indices
    let optionsInRandomOrder = randomInteger.map(index => arrayOfAllOptionsAsParagraphs[index]);

    function selectAnswer(e) {
      // Get section attribute to keep track of questions answers
      let questionSection = document.getElementById(`div ${section.id}`);
      let sectionDataClickedAttribute = questionSection.getAttribute("data-clicked");
      let isSectDataClicked = sectionDataClickedAttribute === 'false' ? false : true;

      // If isSectionDataClicked is true, meaning the section question has already been answered, do not give any more tries
      if (!isSectDataClicked) {
        const indexOfCorrectOption = arrayOfAllOptions.indexOf(correct); // 0
        // On each question answered, increment the moreQuestions count
        moreQuestions++;
        // if the moreQuestion count equals five, refresh the app
        if (moreQuestions === 5) {
          console.log("All questions attempted");
          setTimeout(() => {
            window.location.reload(false);
          }, 3000);
        }
        console.log("Question answered");

        // If the wrong answer is clicked
        if (e.target.innerText !== correct) {
          let correctOptionId = arrayOfAllOptionsAsParagraphs[indexOfCorrectOption].props.id;

          // document.getElementById(e.target.id).style.background = '#a19999';
          document.getElementById(e.target.id).style.background = '#52518d';

          document.getElementById(correctOptionId).style.background = '#4c9452';
          questionSection.setAttribute('data-clicked', 'true');

          console.log("Wrong Answer");
        }
        // If he correct answer is clicked
        else if (e.target.innerText === correct) {
          document.getElementById(e.target.id).style.background = '#4c9452';
          questionSection.setAttribute('data-clicked', 'true');

          console.log("Correct Answer");
        }
      }
    }

// Render each question with its options
    return (
      <div className="div"
        data-clicked={false}
        id={`div ${section.id}`}
        key={section.id}
      >
        <p className='question-Class'>{question}</p>
        <div>
          {optionsInRandomOrder}
        </div>
      </div>
    );
  });

// Render all questions
  return (
    <div>
      {renderingFiveQuestions}
    </div>
  );
}
