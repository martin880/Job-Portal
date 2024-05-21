import React from "react";
import Location from "./Location";
import Salary from "./Salary";
import JobPostingData from "./JobPostingData";
import WorkExperience from "./WorkExperience";
import EmploymentType from "./EmploymentType";
import NewsLetter from "../components/NewsLetter";

const Sidebar = ({ handleChange, handleClick }) => {
  return (
    <div className="space-y-6">
      <h3 className="text-primary text-lg font-bold mb-2">Filters</h3>
      <Location handleChange={handleChange} />
      <Salary handleChange={handleChange} handleClick={handleClick} />
      <JobPostingData handleChange={handleChange} />
      <WorkExperience handleChange={handleChange} />
      <EmploymentType handleChange={handleChange} />
      <NewsLetter />
    </div>
  );
};

export default Sidebar;
