import React from "react";
import InputField from "../components/InputField";

const Location = ({ handleChange }) => {
  return (
    <div>
      <h4 className="text-primary text-lg font-medium mb-2">Location</h4>
      <div>
        <label className="sidebar-label-container">
          <input type="radio" name="test" id="test" onChange={handleChange} />
          <span className="checkmark"></span>
          <h4 className="text-primary font-semibold">All</h4>
        </label>
        <InputField
          handleChange={handleChange}
          value="london"
          title="London"
          name="test"
        />
        <InputField
          handleChange={handleChange}
          value="seattle"
          title="Seattle"
          name="test"
        />
        <InputField
          handleChange={handleChange}
          value="san fransisco"
          title="San Fransisco"
          name="test"
        />
        <InputField
          handleChange={handleChange}
          value="boston"
          title="Boston"
          name="test"
        />
      </div>
    </div>
  );
};

export default Location;
