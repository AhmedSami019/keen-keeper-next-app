"use client";

import DataContext from "@/app/context/DataContext";
import { useContext } from "react";
import { BsChatLeftText } from "react-icons/bs";
import { FiVideo } from "react-icons/fi";
import { LuPhoneCall } from "react-icons/lu";
import { toast } from "react-toastify";

const QuickCheckIn = ({ friend }) => {
  const { handleTimelineEntry } = useContext(DataContext);

  const handleAction = (type) => {
    handleTimelineEntry(friend, type);
    const messages = {
      call: `Call activity added for ${friend.name}!`,
      text: `Text activity added for ${friend.name}!`,
      "video-call": `Video call activity added for ${friend.name}!`,
    };

    toast.success(messages[type]);
  };

  return (
    <div className="bg-white shadow rounded-2xl p-5 space-y-5">
      <h4 className="text-xl">Quick Check-in</h4>

      <div className="grid grid-cols-3 gap-5">
        <button
          onClick={() => handleAction("call")}
          className="bg-base-200 p-5 space-y-2 rounded-2xl shadow cursor-pointer hover:bg-base-300"
        >
          <LuPhoneCall size={27} className="mx-auto" />
          <p className="text-center font-semibold">Call</p>
        </button>

        <button
          onClick={() => handleAction("text")}
          className="bg-base-200 p-5 space-y-2 rounded-2xl shadow cursor-pointer hover:bg-base-300"
        >
          <BsChatLeftText size={27} className="mx-auto" />
          <p className="text-center font-semibold">Text</p>
        </button>

        <button
          onClick={() => handleAction("video-call")}
          className="bg-base-200 p-5 space-y-2 rounded-2xl shadow cursor-pointer hover:bg-base-300"
        >
          <FiVideo size={27} className="mx-auto" />
          <p className="text-center font-semibold">Video Call</p>
        </button>
      </div>
    </div>
  );
};

export default QuickCheckIn;