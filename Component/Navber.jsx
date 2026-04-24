import React from "react";
import { ImStatsDots } from "react-icons/im";
import { IoMdTime } from "react-icons/io";
import { MdHome } from "react-icons/md";

const Navber = () => {
  return (
    // <div className="navbar bg-base-100 shadow-sm">
    //   <div className="flex-1">
    //     <a className="btn btn-ghost text-xl">KeenKeeper</a>
    //   </div>
    //   <div className="flex-none">
    //     <ul className="menu menu-horizontal px-1 gap-4">

    //     </ul>
    //   </div>
    // </div>
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li className="hover:bg-emerald-400 bg-blue-400">
              <a>
                <MdHome />
                Home
              </a>
            </li>
            <li className="hover:bg-emerald-400 bg-blue-400">
              <a>
                <IoMdTime />
                Timeline
              </a>
            </li>
            <li className="hover:bg-emerald-400 bg-blue-400">
              <a>
                {" "}
                <ImStatsDots />
                Stats
              </a>
            </li>
          </ul>
        </div>
        <h1 className="btn btn-ghost text-xl items-center">KeenKeeper</h1>
      </div>
      <div className="navbar-end  hidden lg:flex">
        <ul className="menu menu-horizontal gap-4 rounded-2xl px-1">
          <li className="hover:bg-emerald-400 bg-blue-400">
            <a>
              <MdHome />
              Home
            </a>
          </li>
          <li className="hover:bg-emerald-400 bg-blue-400">
            <a>
              <IoMdTime />
              Timeline
            </a>
          </li>
          <li className="hover:bg-emerald-400 bg-blue-400">
            <a>
              {" "}
              <ImStatsDots />
              Stats
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navber;
