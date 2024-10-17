import React from 'react';

function Option({ optionText, isCorrect, handleAnswerOptionClick }) {
  return (
    <button
      onClick={() => handleAnswerOptionClick(isCorrect)}
      className="list-group-item list-group-item-action"
    >
      {optionText}
    </button>
  );
}

export default Option;
