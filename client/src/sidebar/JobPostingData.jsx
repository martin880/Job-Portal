import React from "react";
import InputField from "../components/InputField";

const JobPostingData = ({ handleChange }) => {
  const date = new Date();
  const twentyFourHourAgo = new Date(date - 24 * 60 * 60 * 1000);
  const sevenDaysAgo = new Date(date - 7 * 24 * 60 * 60 * 1000);
  const thirtyDaysAgo = new Date(date - 30 * 24 * 60 * 60 * 1000);

  // convert date to string
  const twentyFourHourAgoDate = twentyFourHourAgo.toISOString().slice(0, 10);
  const sevenDaysAgoDate = sevenDaysAgo.toISOString().slice(0, 10);
  const thirtyDaysAgoDate = thirtyDaysAgo.toISOString().slice(0, 10);

  return (
    <div>
      <h4 className="text-primary text-lg font-medium mb-2">Date of posting</h4>
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
          <h4 className="text-primary font-semibold">All date</h4>
        </label>
        <InputField
          handleChange={handleChange}
          value={twentyFourHourAgoDate}
          title="Last 24 hours"
          name="test"
        />
        <InputField
          handleChange={handleChange}
          value={sevenDaysAgoDate}
          title="Last 7 days ago"
          name="test"
        />
        <InputField
          handleChange={handleChange}
          value={thirtyDaysAgoDate}
          title="Last month"
          name="test"
        />
      </div>
    </div>
  );
};

export default JobPostingData;
