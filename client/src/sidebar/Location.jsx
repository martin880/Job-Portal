import React from "react";
import InputField from "../components/InputField";

const Location = ({ handleChange }) => {
  return (
    <div>
      <h4 className="text-primary text-lg font-medium mb-2">Location</h4>
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
          {/* <h4 className="text-primary font-semibold">All</h4> */}
        </label>
        {/* <InputField
          handleChange={handleChange}
          value="jakarta"
          title="Jakarta"
          name="test"
        />
        <InputField
          handleChange={handleChange}
          value="singapure"
          title="Singapure"
          name="test"
        />
        <InputField
          handleChange={handleChange}
          value="medan"
          title="Medan"
          name="test"
        /> */}
        <InputField
          handleChange={handleChange}
          value="batam"
          title="Batam"
          name="test"
        />
      </div>
    </div>
  );
};

export default Location;
