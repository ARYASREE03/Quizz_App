
import Option from './Option';

function Question({ question, handleAnswerOptionClick }) {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{question.questionText}</h5>
        <div className="list-group">
          {question.options.map((option, index) => (
            <Option
              key={index}
              optionText={option.text}
              isCorrect={option.isCorrect}
              handleAnswerOptionClick={handleAnswerOptionClick}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Question;
