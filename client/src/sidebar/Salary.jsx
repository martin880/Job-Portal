import React from "react";
import Button from "../components/Button";
import InputField from "../components/InputField";

const Salary = ({ handleChange, handleClick }) => {
  return (
    <>
      <div>
        <h4 className="text-lg font-medium mb-2">Salary</h4>
        <div className="mb-4">
          <Button onClickHandler={handleClick} value="" title="Hourly" />
          <Button
            onClickHandler={handleClick}
            value="Monthly"
            title="Monthly"
          />
          <Button onClickHandler={handleClick} value="Yearly" title="Yearly" />
        </div>
      </div>
      <div>
        <label className="sidebar-label-container">
          <input
            type="radio"
            name="test"
            id="test"
            onChange={handleChange}
            onClick={handleClick}
          />
          <span className="checkmark"></span>
          <h4 className="text-primary font-semibold">All</h4>
        </label>
        <InputField
          handleChange={handleChange}
          value={30}
          title="< 3000"
          name="test2"
        />
        <InputField
          handleChange={handleChange}
          value={50}
          title="< 5000"
          name="test2"
        />
        <InputField
          handleChange={handleChange}
          value={80}
          title="< 8000"
          name="test2"
        />
        <InputField
          handleChange={handleChange}
          value={100}
          title="< 10000"
          name="test2"
        />
      </div>
    </>
  );
};

export default Salary;
