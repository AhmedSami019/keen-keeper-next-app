import Image from "next/image";
import Link from "next/link";
import React from "react";

const Friends = async () => {
  const res = await fetch("http://localhost:3000/friends.json");
  const friends = await res.json();
  return (
    <div className="flex flex-col items-center md:items-start w-full p-3 lg:px-20 space-y-5">
      <h2 className="text-3xl font-bold ">Your Friends</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-5 mx-auto">
        {friends.map((friend) => (
          <Link 
            href={`/friends/${friend.id}`}
            key={friend.id}
            className="flex flex-col items-center gap-3 text-center bg-white shadow p-5 rounded-2xl"
          >
            {/* avatar */}
            <div className="avatar">
              <div className="w-24 rounded-full">
                <Image
                  src={friend.picture}
                  alt="profile picture"
                  width={100}
                  height={100}
                ></Image>
              </div>
            </div>
            {/* text content */}

            <h3 className="text-xl font-semibold">{friend.name}</h3>

            <div className="flex flex-col gap-2 items-center">
              <p className="text-gray-500 text-xs"> 37 days ago</p>
              <div className="space-x-1 text-xs">
                {friend.tags.map((tag, index) => (
                  <span key={index} className="badge badge-soft badge-primary">
                    {tag}
                  </span>
                ))}
              </div>

              <p
                className={
                  friend.status == "almost-due"
                    ? "badge badge-warning"
                    : friend.status == "overdue"
                      ? "badge badge-error"
                      : "badge badge-primary"
                }
              >
                {friend.status}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Friends;
