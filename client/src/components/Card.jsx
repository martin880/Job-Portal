import React from "react";
import { Link } from "react-router-dom";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FcClock } from "react-icons/fc";
import { FaSackDollar } from "react-icons/fa6";
import { IoCalendarNumberSharp } from "react-icons/io5";

const Card = ({ data }) => {
  const {
    jobTitle,
    companyName,
    companyLogo,
    minPrice,
    maxPrice,
    salaryType,
    jobLocation,
    employmentType,
    postingDate,
    description,
  } = data;
  return (
    <section className="card">
      <Link to={"/"} className="flex gap-4 flex-col sm:flex-row items-start">
        <img src={companyLogo} alt=""></img>
        <div>
          <h4 className="text-primary mb-1">{companyName}</h4>
          <h3 className="text-primary text-lg font-semibold mb-2">
            {jobTitle}
          </h3>
          <div className="text-primary/70 text-base flex flex-wrap gap-2 mb-2">
            <span className="flex items-center gap-2">
              <FaMapMarkerAlt /> {jobLocation}
            </span>
            <span className="flex items-center gap-2">
              <FcClock /> {employmentType}
            </span>
            <span className="flex items-center gap-2">
              <FaSackDollar /> {minPrice} - {maxPrice}k
            </span>
            <span className="flex items-center gap-2">
              <IoCalendarNumberSharp /> {postingDate}
            </span>
          </div>
          <p className="text-base text-primary/70">{description}</p>
        </div>
      </Link>
    </section>
  );
};

export default Card;
