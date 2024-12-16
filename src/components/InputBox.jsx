import React from "react";
import './InputBox.css'

const InputBox = () => {
  return (
    <>
      <div className="form-control">
        <div className="field-wrapper">
          <label htmlFor="from">From</label>
          <input type="number" id="from" />
        </div>
        <div className="field-wrapper">
          <label>Currency Type</label>
          <select>
            <option value="usd">usd</option>
          </select>
        </div>
      </div>
    </>
  );
};

export default InputBox;
