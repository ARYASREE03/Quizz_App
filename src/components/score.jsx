

function Score({ score, totalQuestions }) {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Your Score</h5>
        <p className="card-text">
          You scored {score} out of {totalQuestions}
        </p>
      </div>
    </div>
  );
}

export default Score;
