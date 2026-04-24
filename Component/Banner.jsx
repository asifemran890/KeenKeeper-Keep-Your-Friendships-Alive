import React from "react";
import { IoMdAdd } from "react-icons/io";

const Banner = () => {
  return (
    <div className=" max-w-6xl mx-auto border ">
      <div className=" p-10">
        <h1 className="lg:text-5xl text-3xl font-bold text-center">
          Friends to keep close in your life
        </h1>
        <p className="text-center mt-6 ">
          Your personal shelf of meaningful connections. Browse, tend, and
          <br /> nurture, the relationships that matter most.
        </p>

        <div class="flex justify-center items-center ">
          <button class="bg-emerald-700 flex items-center gap-2 mt-5 text-white px-4 py-2 rounded">
            <IoMdAdd /> Add a Friend
          </button>
        </div>
      </div>
      <div className=" flex flex-wrap justify-center gap-5 mb-8 ">
        <div>
          <div className=" border w-[200px] h-[100px] items-center bg-emerald-50">
            <h1 className="text-center p-4">10</h1>
            <p className="text-center ">total friend</p>
          </div>
        </div>
        <div>
          <div className=" border w-[200px] h-[100px] items-center bg-emerald-50">
            <h1 className="text-center p-4">10</h1>
            <p className="text-center ">total friend</p>
          </div>
        </div>
        <div>
          <div className=" border w-[200px] h-[100px] items-center bg-emerald-50">
            <h1 className="text-center p-4">10</h1>
            <p className="text-center ">total friend</p>
          </div>
        </div>
        <div>
          <div className=" border w-[200px] h-[100px] items-center bg-emerald-50">
            <h1 className="text-center p-4">10</h1>
            <p className="text-center ">total friend</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
