import React from "react";
import PageHeader from "../components/PageHeader";

const SalaryPage = () => {
  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-24 px-4">
      <PageHeader title={"Estimasi Gaji"} path={"Gaji"} />
      <div className="mt-5">
        <div className="search-box p-2 text-center mb-2">
          <input
            type="text"
            name="search"
            id="search"
            className="py-2 pl-3 border focus:outline-none lg:w-6/12 mb-4 w-full"
          />
          <button className="bg-sky-500 hover:bg-cyan-600 text-white font-semibold px-8 py-2 rounded-sm mb-4">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default SalaryPage;
