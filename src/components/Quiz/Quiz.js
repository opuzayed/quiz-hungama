import React from "react";
import toast, { Toaster } from "react-hot-toast";
import { FaEye } from "react-icons/fa";
import "./Quiz.css";
const Quiz = (props) => {
  const { q, index } = props;
  console.log(q);
  const { question, options } = q;
  const onChangeValue = (event) => {
    const targetValue = event.target.value;
    const val = q.correctAnswer;
    if (targetValue === val) {
      toast.success("Correct Answer");
    } else {
      toast.error("Wrong Answer");
    }
  };

  const onClickValue = (event) => {
    const rightval = q.correctAnswer;
    toast.success(rightval);
  };
  return (
    <div className="quiz-card">
      <div className="quiz-head">
        <h4>
          Quiz {index + 1}: {question}
        </h4>
        <span onClick={onClickValue}>
          <FaEye />
        </span>
      </div>
      <div onChange={onChangeValue}>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            value={options[0]}
            name="flexRadioDefault"
            id="flexRadioDefault1"
          />
          <label className="form-check-label" HTMLFor="flexRadioDefault1">
            {options[0]}
          </label>
        </div>
      </div>
      <div onChange={onChangeValue}>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            value={options[1]}
            name="flexRadioDefault"
            id="flexRadioDefault1"
          />
          <label className="form-check-label" HTMLFor="flexRadioDefault1">
            {options[1]}
          </label>
        </div>
      </div>
      <div onChange={onChangeValue}>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            value={options[2]}
            name="flexRadioDefault"
            id="flexRadioDefault1"
          />
          <label className="form-check-label" HTMLFor="flexRadioDefault1">
            {options[2]}
          </label>
        </div>
      </div>
      <div onChange={onChangeValue}>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            value={options[3]}
            name="flexRadioDefault"
            id="flexRadioDefault1"
          />
          <label className="form-check-label" HTMLFor="flexRadioDefault1">
            {options[3]}
          </label>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default Quiz;
