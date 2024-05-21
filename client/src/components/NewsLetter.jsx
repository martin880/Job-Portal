import React from "react";
import { FaRegEnvelopeOpen } from "react-icons/fa";
import { RiRocket2Fill } from "react-icons/ri";

const NewsLetter = () => {
  return (
    <>
      <div>
        <div>
          <h3 className="text-lg text-primary font-bold mt-2 mb-2 flex items-center gap-2">
            <FaRegEnvelopeOpen />
            Email me for the job
          </h3>
          <p className="text-primary/75 text-base mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
            accusantium, dolor natus voluptatibus nesciunt cumque adipisci autem
            unde incidunt numquam illo voluptatem a. Fugit accusamus esse, quasi
            autem ipsum illo.
          </p>
          <div className="w-full space-y-4">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="name@email.com"
              className="w-full block py-2 pl-3 border focus:outline-none"
            />
            <input
              type="submit"
              value={"Subscribe"}
              className="w-full block py-2 pl-3 border focus:outline-none font-semibold rounded text-blue border-blue cursor-pointer"
            />
          </div>
        </div>

        {/* 2nd part */}
        <div className="mt-20">
          <h3 className="text-lg text-primary font-bold mb-2 flex items-center gap-2">
            <RiRocket2Fill />
            Get me noticed faster
          </h3>
          <p className="text-primary/75 text-base mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
            accusantium,
          </p>
          <div className="w-full space-y-4">
            <input
              type="submit"
              value={"Upload your resume"}
              className="w-full block py-2 pl-3 border focus:outline-none font-semibold rounded text-blue border-blue cursor-pointer"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsLetter;
