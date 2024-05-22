import React from "react";

const Jobs = ({ result }) => {
  return (
    <>
      <div>
        <h3 className="text-primary text-md font-semibold mb-2">
          {result.length} Lowongan Pekerjaan
        </h3>
      </div>
      <section>{result}</section>
    </>
  );
};

export default Jobs;
