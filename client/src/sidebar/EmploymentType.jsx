import React from "react";
import InputField from "../components/InputField";

const EmploymentType = ({ handleChange }) => {
  return (
    <div>
      <h4 className="text-primary text-lg font-medium mb-2">
        Type of employeement
      </h4>
      <div>
        <label className="sidebar-label-container">
          <input
            type="radio"
            name="test"
            id="test"
            value={""}
            onChange={handleChange}
          />
          <span className="checkmark"></span>
          <h4 className="text-primary font-semibold">Any experience</h4>
        </label>
        <InputField
          handleChange={handleChange}
          value="full-time"
          title="Full-Time"
          name="test"
        />
        <InputField
          handleChange={handleChange}
          value="part-time"
          title="Part-Time"
          name="test"
        />
        <InputField
          handleChange={handleChange}
          value="contract"
          title="Contract"
          name="test"
        />
      </div>
    </div>
  );
};

export default EmploymentType;
