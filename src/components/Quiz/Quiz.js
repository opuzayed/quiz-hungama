import React from "react";
import toast, { Toaster } from "react-hot-toast";

const Quiz = ({ q }) => {
  console.log(q);
  const { question, options } = q;
  const onChangeValue = (event) => {
    const targetValue = event.target.value;
    const val = q.correctAnswer;
    if (targetValue === val) {
      toast.success("Correct Answer");
    } else {
      toast.success("Wrong Answer");
    }
  };
  return (
    <div>
      <div>
        <h4>{question}</h4>
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
