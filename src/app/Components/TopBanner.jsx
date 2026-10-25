import React from "react";
import { FaPlus } from "react-icons/fa";

const TopBanner = () => {
  return (
    <div className="flex flex-col items-center gap-8 py-10 my-5">
      <h1 className="text-5xl font-bold">Friends to keep close in your life</h1>
      <p className="text-gray-600 md:w-2/3 text-center">
        Your personal shelf of meaningful connections. Browse, tend, and nurture
        the relationships that matter most.
      </p>
      <button className="btn btn-primary"><FaPlus />Add a friend</button>

      {/*  */}
      <section className="flex gap-5">
        <div className="p-10 shadow rounded-2xl text-center space-y-3">
            <h2 className="text-4xl font-bold">10</h2>
            <p>Total friends</p>
        </div>
        <div className="p-10 shadow rounded-2xl text-center space-y-3">
            <h2 className="text-4xl font-bold">3</h2>
            <p>Total friends</p>
        </div>
        <div className="p-10 shadow rounded-2xl text-center space-y-3">
            <h2 className="text-4xl font-bold">6</h2>
            <p>Total friends</p>
        </div>
        <div className="p-10 shadow rounded-2xl text-center space-y-3">
            <h2 className="text-4xl font-bold">12</h2>
            <p>Total friends</p>
        </div>
      </section>
    </div>
  );
};

export default TopBanner;
