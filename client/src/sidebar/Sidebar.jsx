import React from "react";
import Location from "./Location";

const Sidebar = ({ handleChange, handleClick }) => {
  return (
    <div className="space-y-5">
      <h3 className="text-primary text-lg font-bold mb-2">Filters</h3>
      <Location handleChange={handleChange} handleClick={handleClick} />
    </div>
  );
};

export default Sidebar;
