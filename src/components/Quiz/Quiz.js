import React from "react";

const Quiz = ({ q }) => {
    
  console.log(q);
  const { question, options } = q;
  function onChangeValue(event) {
    // setGender(event.target.value);
    
    console.log(event.target);
  }
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
            name="flexRadioDefault"
            id="flexRadioDefault1"
          />
          <label className="form-check-label" HTMLFor="flexRadioDefault1">
          {options[3]}
          </label>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
