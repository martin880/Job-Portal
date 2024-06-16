import React, { useState } from "react";
import { IconButton, useColorMode } from "@chakra-ui/react";
import logo from "../img/webhook.png";
import { Link, NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { MdCloseFullscreen } from "react-icons/md";
// import { FaSun, FaMoon } from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { colorMode, toggleColorMode } = useColorMode();

  const handleMenuToggler = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { path: "/", title: "Cari pekerjaan" },
    { path: "/my-job", title: "Pekerjaan saya" },
    { path: "/salary", title: "Estimasi gaji" },
    { path: "/post-job", title: "Posting pekerjaan" },
  ];

  return (
    <>
      <header className="max-w-screen-2xl container max-auto xl:px-24 px-4">
        <nav className="flex justify-between items-center py-6">
          <a href="/" className="flex items-center gap-2 text-2xl">
            <img src={logo} className="w-10 h-10 justify-between flex"></img>
            <span className="font-semibold">Situs Lowongan Kerja</span>
          </a>
          {/* nav items untuk layar besar */}
          <ul className="hidden md:flex gap-12">
            {navItems.map(({ path, title }) => (
              <li key={path} className="text-base text-primary">
                <NavLink
                  to={path}
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  {title}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* <IconButton
            icon={
              colorMode === "light" ? (
                <FaSun color="orange" />
              ) : (
                <FaMoon color="blue" />
              )
            }
            isRound={"true"}
            size={"sm"}
            alignSelf={"flex-end"}
            onClick={toggleColorMode}
          ></IconButton> */}

          {/* Sign up & login button */}
          <div className="text-base text-primary font-medium space-x-5 hidden lg:block">
            <Link
              to="/login"
              className="py-2 px-5 border rounded text-white bg-blue"
            >
              Login
            </Link>
            <Link
              to="/sign-up"
              className="py-2 px-5 border rounded text-blue border-blue"
            >
              Sign Up
            </Link>
          </div>

          {/* mobile menu display */}
          <div className="md:hidden block">
            <button onClick={handleMenuToggler}>
              {isMenuOpen ? (
                <MdCloseFullscreen className="w-4 h-5 text-black" />
              ) : (
                <FaBars className="w-4 h-5 text-black" />
              )}
            </button>
          </div>
        </nav>

        {/* nav items for mobile devices */}
        <div
          className={`px-4 bg-gray-100 py-5 rounded-sm ${
            isMenuOpen ? "" : "hidden"
          }`}
        >
          <ul>
            {navItems.map(({ path, title }) => (
              <li
                key={path}
                className="text-base text-primary first:text-primary py-1"
              >
                <NavLink
                  to={path}
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  {title}
                </NavLink>
              </li>
            ))}
            <li className="text-white py-1 my-2">
              {" "}
              <Link
                to="/login"
                className="py-2 px-5 border rounded text-white bg-blue"
              >
                Login
              </Link>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
};

export default Navbar;
