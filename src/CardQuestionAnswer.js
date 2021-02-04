import React, {useState} from 'react'
import './App.scss'

const CardQuestionAnswer = ({QuestionAnswer}) => {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [showScore, setShowScore] = useState(false)

  const handleButton = () => {
    // if(QuestionAnswer[currentQuestion].answerOptions[currentQuestion].isCorrect === false) {
    // } else {
    //   setCurrentQuestion(currentQuestion + 1)
    // }
    if(currentQuestion < QuestionAnswer.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowScore(true)
    }
    
  }
  {console.log(QuestionAnswer.length)}
  return (
    <div>
      {showScore 
        ? (
          <div className="score">
            <h1>
              You scored 1 out of {QuestionAnswer.length}
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
                  <button onClick={handleButton}>{answerOption.answerText}</button>
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
