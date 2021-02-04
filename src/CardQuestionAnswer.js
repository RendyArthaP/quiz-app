import React, {useState} from 'react'
import './App.scss'

const CardQuestionAnswer = ({QuestionAnswer}) => {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [showScore, setShowScore] = useState(false)
  const [score, setScore] = useState(0)

  const handleButton = ({isCorrect}) => {
    if(isCorrect === true || currentQuestion < QuestionAnswer.length - 1) {
      setScore(score + 1);
      setCurrentQuestion(currentQuestion + 1);
    }else {
      setShowScore(true)
    }
  }

  return (
    <div>
      {showScore 
        ? (
          <div className="score">
            <h1>
              You scored {score} out of {QuestionAnswer.length}
            </h1>
          </div>
        ) 
        : 
        (
          <div className="wrapper-card">
          <h1>
            Question {currentQuestion + 1} / {QuestionAnswer.length}
          </h1>
          <div className="question-answer"> 
            <div className="question">
              <h2>{QuestionAnswer[currentQuestion].question}</h2>
            </div>
            <div className="answer">
              {QuestionAnswer[currentQuestion].answerOptions.map((answerOption) => 
                <div key={answerOption.id}>
                  <button onClick={() => handleButton(answerOption.isCorrect)}>{answerOption.answerText}</button>
                </div>
              )}
            </div>
          </div>
        </div>
        )
      }
    </div>
  )
}
export default CardQuestionAnswer
