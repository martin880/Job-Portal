import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  CircularProgress,
  CircularProgressLabel,
  useToast,
} from "@chakra-ui/react";
import { FaLongArrowAltRight, FaLongArrowAltLeft } from "react-icons/fa";

const MyJobs = () => {
  const email = "martinlumbangaol@gmail.com";
  const [jobs, setJobs] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const toast = useToast();

  useEffect(() => {
    setIsLoading(true);
    fetch(`http://localhost:3000/myJobs/${email}`)
      .then((res) => res.json())
      .then((data) => {
        setJobs(data);
        setIsLoading(false);
      });
  }, []);

  // set current page
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  // Calculate total number of pages
  const totalPages = Math.ceil(jobs.length / itemsPerPage);

  // pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentJobs = jobs.slice(indexOfFirstItem, indexOfLastItem);

  // next btn & previous btn
  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleSearch = () => {
    const filter = jobs.filter(
      (jobs) =>
        jobs.jobTitle.toLowerCase().indexOf(searchText.toLowerCase()) !== -1
    );
    setJobs(filter);
    setIsLoading(false);
  };

  const handleDelete = (id) => {
    try {
      fetch(`http://localhost:3000/job/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json)
        .then((data) => {
          if (data.acknowledged === true) {
            toast({
              title: `Something error`,
              position: "bottom",
              status: "error",
              isClosable: true,
            });
          } else {
            toast({
              title: `Job deleted succesfully`,
              position: "bottom",
              status: "success",
              isClosable: true,
            });
            // Update jobs state after successful delete
            setJobs((prevJobs) => prevJobs.filter((job) => job._id !== id));
          }
        });
    } catch (error) {
      toast({
        title: `Something error`,
        position: "bottom",
        status: "error",
        isClosable: true,
      });
    }
  };

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto xl:px-24 px-4">
        <div className="my-jobs-container">
          <h1 className="text-primary text-center p-4">Semua pekerjaan saya</h1>
          <div className="search-box p-2 text-center mb-2">
            <input
              onChange={(e) => setSearchText(e.target.value)}
              type="text"
              name="search"
              id="search"
              className="py-2 pl-3 border focus:outline-none lg:w-6/12 mb-4 w-full"
            />
            <button
              className="bg-sky-500 hover:bg-cyan-600 text-white font-semibold px-8 py-2 rounded-sm mb-4"
              onClick={handleSearch}
            >
              Search
            </button>
          </div>
        </div>

        {/* table */}
        <section className="py-1 bg-blueGray-50">
          <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4 mx-auto mt-5">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded ">
              <div className="rounded-t mb-0 px-4 py-3 border-0">
                <div className="flex flex-wrap items-center">
                  <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                    <h3 className="font-semibold text-base text-blueGray-700">
                      Semua pekerjaan
                    </h3>
                  </div>
                  <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
                    <Link to="/post-job">
                      <button
                        className="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                      >
                        Posting pekerjaan baru
                      </button>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="block w-full overflow-x-auto">
                <table className="items-center bg-transparent w-full border-collapse ">
                  <thead>
                    <tr>
                      <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center">
                        No.
                      </th>
                      <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center">
                        Pekerjaan
                      </th>
                      <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center">
                        Perusahaan
                      </th>
                      <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center">
                        Gaji
                      </th>
                      <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center">
                        Edit
                      </th>
                      <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center">
                        Delete
                      </th>
                    </tr>
                  </thead>
                  {isLoading ? (
                    <div className="flex items-center justify-center h-20">
                      <CircularProgress isIndeterminate color="green.300">
                        <CircularProgressLabel fontSize={8}>
                          Loading
                        </CircularProgressLabel>
                      </CircularProgress>
                    </div>
                  ) : (
                    <tbody>
                      {currentJobs.map((job, index) => (
                        <tr key={index}>
                          <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center text-blueGray-700 ">
                            {index + 1}
                          </th>
                          <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center font-semibold">
                            {job.jobTitle}
                          </td>
                          <td className="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center font-semibold">
                            {job.companyName}
                          </td>
                          <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center font-semibold">
                            Rp.{job.minPrice} - Rp.{job.maxPrice}
                          </td>
                          <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center font-semibold">
                            <button className="bg-green-700 py-2 px-6 text-white rounded-md">
                              <Link to={`/edit-job/${job?._id}`}>Edit</Link>
                            </button>
                          </td>
                          <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center font-semibold">
                            <button
                              onClick={() => handleDelete(job._id)}
                              className="bg-red-700 py-2 px-6 text-white rounded-md"
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  )}
                </table>
              </div>
            </div>
          </div>

          {/* pagination */}
          <div className="flex justify-center text-primary space-x-8 mb-8">
            {currentPage > 1 && (
              <button className="hover:underline" onClick={prevPage}>
                Previous
                <FaLongArrowAltLeft />
              </button>
            )}
            {currentPage < totalPages && (
              <button className="hover:underline" onClick={nextPage}>
                Next
                <FaLongArrowAltRight />
              </button>
            )}
          </div>
        </section>
      </div>
    </>
  );
};

export default MyJobs;
