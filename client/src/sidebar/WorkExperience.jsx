import React from "react";
import InputField from "../components/InputField";

const WorkExperience = ({ handleChange }) => {
  return (
    <div>
      <h4 className="text-primary text-lg font-medium mb-2">Work Experience</h4>
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
          value="intership"
          title="Intership"
          name="test"
        />
        <InputField
          handleChange={handleChange}
          value="work remotely"
          title="Work remotely"
          name="test"
        />
      </div>
    </div>
  );
};

export default WorkExperience;
