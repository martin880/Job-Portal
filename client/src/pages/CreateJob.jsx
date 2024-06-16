import React, { useState } from "react";
import { useForm } from "react-hook-form";
import CreateableSelect from "react-select/creatable";
import { useToast } from "@chakra-ui/react";

const CreateJob = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const toast = useToast();

  const onSubmit = (data) => {
    data.skills = selectedOption;
    // console.log(data);
    fetch("http://localhost:3000/post-job", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        if (result.acknowledged === true) {
          toast({
            title: `Job posted succesfully`,
            position: "bottom",
            status: "success",
            isClosable: true,
          });
        } else {
          toast({
            title: `Something error`,
            position: "bottom",
            status: "error",
            isClosable: true,
          });
        }
        reset();
      });
  };

  const options = [
    { value: "HTML", label: "HTML" },
    { value: "CSS", label: "CSS" },
    { value: "Javascript", label: "Javascript" },
    { value: "Typescript", label: "Typescript" },
    { value: "C++", label: "C++" },
    { value: "C#", label: "C#" },
    { value: "VB.NET", label: "VB.NET" },
    { value: "React JS", label: "React JS" },
    { value: "Angular JS", label: "Angular JS" },
    { value: "Vue JS", label: "Vue JS" },
    { value: "Node JS", label: "Node JS" },
    { value: "Python", label: "Python" },
    { value: "Golang", label: "Golang" },
    { value: "MySQL", label: "MySQL" },
    { value: "Mongo DB", label: "Mongo DB" },
  ];

  return (
    <div className="max-w-screen-2xl container max-auto xl:px-24 px-4">
      {/*  */}
      <div className="bg-[#FAFAFA] py-10 px-4 lg:px-16">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/* 1st row */}
          <div className="create-job-flex">
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-md text-gray-600 font-semibold">
                Nama Pekerjaan
              </label>
              <input
                type="text"
                defaultValue={"Web Developer"}
                {...register("jobTitle")}
                className="create-job-input"
              />
            </div>
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-md text-gray-600 font-semibold">
                Perusahaan
              </label>
              <input
                type="text"
                placeholder="Ex: Google"
                {...register("companyName")}
                className="create-job-input"
              />
            </div>
          </div>

          {/* 2nd row */}
          <div className="create-job-flex">
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-md text-gray-600 font-semibold">
                Gaji Minimum
              </label>
              <input
                type="text"
                placeholder="min salary"
                {...register("minPrice")}
                className="create-job-input"
              />
            </div>
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-md text-gray-600 font-semibold">
                Gaji Maksimal
              </label>
              <input
                type="text"
                placeholder="max salary"
                {...register("maxPrice")}
                className="create-job-input"
              />
            </div>
          </div>

          {/* 3rd row */}
          <div className="create-job-flex">
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-md text-gray-600 font-semibold">
                Tipe Gaji
              </label>
              <select {...register("salaryType")} className="create-job-input">
                <option value="">pilih tipe gaji</option>
                <option value="Hourly">Hourly</option>
                <option value="Monthly">Monthly</option>
                <option value="Yearly">Yearly</option>
              </select>
            </div>
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-md text-gray-600 font-semibold">
                Alamat Perusahaan
              </label>
              <input
                type="text"
                placeholder="alamat"
                {...register("jobLocation")}
                className="create-job-input"
              />
            </div>
          </div>

          {/* 4th row */}
          <div className="create-job-flex">
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-md text-gray-600 font-semibold">
                Tanggal Posting Pekerjaan
              </label>
              <input
                type="date"
                placeholder=""
                {...register("postingDate")}
                className="create-job-input cursor-pointer"
              />
            </div>
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-md text-gray-600 font-semibold">
                Pengalaman Kerja
              </label>
              <select
                {...register("experienceLevel")}
                className="create-job-input"
              >
                <option value="">pilih pengalaman kerja</option>
                <option value="WithExperience">Pengalaman</option>
                <option value="NoExperience">Tidak ada pengalaman</option>
                <option value="Intership">Magang</option>
                <option value="WorkRemotely">Remote</option>
              </select>
            </div>
          </div>

          {/* 5th row */}
          <div className="w-full">
            <label className="block mb-2 text-md text-gray-600 font-semibold">
              Skill yang dibutuhkan :
            </label>
            <CreateableSelect
              defaultValue={selectedOption}
              onChange={setSelectedOption}
              options={options}
              isMulti
              className="create-job-input py-4"
            />
          </div>

          {/* 6th row */}
          <div className="create-job-flex">
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-md text-gray-600 font-semibold">
                Logo Perusahaan
              </label>
              <input
                type="url"
                placeholder="Ex : https://icons/google-logo/150/Google_Icons.png"
                {...register("companyLogo")}
                className="create-job-input cursor-pointer"
              />
            </div>
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-md text-gray-600 font-semibold">
                Status Karyawan
              </label>
              <select
                {...register("employmentType")}
                className="create-job-input"
              >
                <option value="">pilih</option>
                <option value="Full-time">Full Time</option>
                <option value="Part-time">Part-time</option>
                <option value="Contract">Kontrak</option>
              </select>
            </div>
          </div>

          {/* 7th row */}
          <div className="w-full">
            <label className="block mb-2 text-md text-gray-600 font-semibold">
              Deskripsi Pekerjaan
            </label>
            <textarea
              className="w-full pl-3 py-1.5 focus:outline-none placeholder:text-primary"
              rows={6}
              defaultValue={
                "Design, develop, and maintain high-quality software applications and systems"
              }
              placeholder="deskripsi pekerjaan"
              {...register("description")}
            ></textarea>
          </div>

          {/* last row */}
          <div className="w-full">
            <label className="block mb-2 text-md text-gray-600 font-semibold">
              Diposting oleh :
            </label>
            <input
              type="email"
              placeholder="your email"
              {...register("postedBy")}
              className="create-job-input"
            />
          </div>

          <input
            type="submit"
            className="block mt-12 bg-blue text-white font-semibold px-8 py-2 rounded-sm cursor-pointer"
          />
        </form>
      </div>
    </div>
  );
};

export default CreateJob;
