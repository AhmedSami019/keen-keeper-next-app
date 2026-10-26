"use client";

import React, { useContext } from "react";
import DataContext from "../context/DataContext";

const TimelinePage = () => {
  const { meetData } = useContext(DataContext);
  console.log(meetData);
  return (
    <div className="mx-2 md:mx-30 my-10">
      <h2 className="text-5xl font-bold">Timeline</h2>
      <div className="space-y-2 my-5">
        {meetData.length == 0 ? (
          <h2 className="text-gray-500 text-center mt-20">There is no meet</h2>
        ) : (
          <div>
            {meetData.map((meet, index) => (
              <div key={index} className="bg-white rounded-2xl p-3 flex items-center gap-5">
                <div>
                <h2>kire</h2>
                </div>
                <div>
                    <h4 className="text-lg text-gray-600"><span className="font-bold">text</span> yup</h4>
                    <p className="text-gray-500">Date meet</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default TimelinePage;
