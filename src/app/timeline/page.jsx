"use client";

import React, { useContext } from "react";
import DataContext from "../context/DataContext";
import SearchableDropdown from "../Components/SearchableDropdown";
import { IoCallSharp, IoVideocam } from "react-icons/io5";
import { BsChatSquareTextFill } from "react-icons/bs";

const TimelinePage = () => {
  const { meetData } = useContext(DataContext);
  return (
    <div className="mx-2 md:mx-30 my-10 space-y-3">
      <h2 className="text-5xl font-bold">Timeline</h2>
      <SearchableDropdown></SearchableDropdown>
      <div className="space-y-2 my-5">
        {meetData.length == 0 ? (
          <h2 className="text-gray-500 text-center mt-20">There is no meet</h2>
        ) : (
          <div className="space-y-1">
            {meetData.map((meet, index) => (
              <div
                key={index}
                className="bg-white shadow rounded-xl px-5 py-3 flex items-center gap-5"
              >
                <div>
                  {meet.type == "call" ? <IoCallSharp></IoCallSharp>: meet.type == "video" ? <IoVideocam></IoVideocam>: <BsChatSquareTextFill></BsChatSquareTextFill>}
                </div>
                <div className="space-y-2">
                  <h4 className="text-lg text-gray-600">
                    <span className="font-bold">{meet.type}</span> with {meet.friendName}
                  </h4>
                  <p className="text-gray-500 text-sm">{meet.date}</p>
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
