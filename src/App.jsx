
import './App.css'
import { useState } from 'react';
import Score from './components/score';
import Question from './components/question ';
import QuestionBank from './components/questionBank'
function App() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestionIndex + 1;
    if (nextQuestion < QuestionBank.length) {
      setCurrentQuestionIndex(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <>
      <div >
      {showScore ? (
        <Score score={score} totalQuestions={QuestionBank.length} />
      ) : (
        <Question
          question={QuestionBank[currentQuestionIndex]}
          handleAnswerOptionClick={handleAnswerOptionClick}
        />
      )}
    </div>
    </>
  )
}

export default App
