import React from "react";
import Button from "../components/Button";
import InputField from "../components/InputField";

const Salary = ({ handleChange, handleClick }) => {
  return (
    <>
      <div>
        <h4 className="text-lg text-primary font-medium mb-2">Salary</h4>
        <div className="mb-4 text-primary">
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
            value={""}
            onChange={handleChange}
            onClick={handleClick}
          />
          <span className="checkmark"></span>
          <h4 className="text-primary font-semibold">All</h4>
        </label>
        <InputField
          handleChange={handleChange}
          value={6000000}
          title="< 6 jt"
          name="test2"
        />
        <InputField
          handleChange={handleChange}
          value={7000000}
          title="< 8 jt"
          name="test2"
        />
        <InputField
          handleChange={handleChange}
          value={8000000}
          title="< 10 jt"
          name="test2"
        />
        <InputField
          handleChange={handleChange}
          value={10000000}
          title="> 10 jt"
          name="test2"
        />
      </div>
    </>
  );
};

export default Salary;
