const ControlButtons = ({ reviewCode, clearCode, clearReview }) => {
  return (
    <div className="button-container">
      <button className="btn" onClick={reviewCode}>
        Review
      </button>
      <button className="btn btn-clear" onClick={clearCode}>
        Clear Code
      </button>
      <button className="btn btn-clear" onClick={clearReview}>
        Clear Review
      </button>
    </div>
  );
};

export default ControlButtons;
