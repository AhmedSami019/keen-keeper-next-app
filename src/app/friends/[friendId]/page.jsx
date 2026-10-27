import Image from "next/image";
import { BsChatLeftText } from "react-icons/bs";
import { FiArchive, FiVideo } from "react-icons/fi";
import { LuPhoneCall } from "react-icons/lu";
import { RiDeleteBin6Line, RiNotificationSnoozeLine } from "react-icons/ri";
import QuickCheckIn from "./QuickCheckIn";

const FriendDetailsPage = async ({ params }) => {
  const { friendId } = await params;

  // load data
  const res = await fetch("http://localhost:3000/friends.json");
  const friends = await res.json();
  const friend = friends.find((frd) => frd.id == friendId);
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mx-3 lg:mx-30 my-10">
      <section className="grid grid-rows-2 gap-5">
        <div
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
            <p className="text-gray-500">{friend.bio}</p>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <button className="btn bg-white">
            <RiNotificationSnoozeLine />
            Snooze 2 weeks
          </button>
          <button className="btn bg-white">
            <FiArchive />
            Archive
          </button>
          <button className="btn text-red-600 bg-white">
            <RiDeleteBin6Line />
            Delete
          </button>
        </div>
      </section>
      <section className="grid grid-rows-3 gap-5">
        <div className="grid grid-cols-3 gap-5 w-full">
          <div className="shadow rounded-xl bg-white p-10 text-center my-auto">
            <h4 className="text-2xl font-bold">40</h4>
            <p className="text-gray-500">Days Since Contact</p>
          </div>
          <div className="shadow rounded-xl bg-white p-10 text-center my-auto">
            <h4 className="text-2xl font-bold">40</h4>
            <p className="text-gray-500">Goal (in days)</p>
          </div>
          <div className="shadow rounded-xl bg-white p-10 text-center my-auto">
            <h4 className="text-2xl font-bold">40</h4>
            <p className="text-gray-500">Next Due</p>
          </div>
        </div>
        <div className="shadow rounded-xl bg-white p-10 space-y-4">
          <div className="flex justify-between items-center">
            <h4 className="text-xl">Relationship Goal</h4>
            <button className="btn btn-sm">Edit</button>
          </div>
          <div>
            <p>
              Connect every <span className="font-bold">30 days</span>
            </p>
          </div>
        </div>
        <div>
          <QuickCheckIn friend={friend}></QuickCheckIn>
        </div>
      </section>
    </div>
  );
};

export default FriendDetailsPage;
