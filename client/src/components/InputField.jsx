import React from "react";

const InputField = ({ handleChange, value, title, name }) => {
  return (
    <div>
      <label className="sidebar-label-container">
        <input type="radio" name={name} value={value} onChange={handleChange} />
        <span className="checkmark"></span>
        <h4 className="text-primary font-semibold">{title}</h4>
      </label>
    </div>
  );
};

export default InputField;
