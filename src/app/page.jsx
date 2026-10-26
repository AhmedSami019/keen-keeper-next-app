import Image from "next/image";
import TopBanner from "./Components/TopBanner";
import Friends from "./Components/Friends";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center font-sans bg-base-200">
      <section>
        <TopBanner></TopBanner>
      </section>
      <div className="divider w-3/4 mx-auto"></div>
      <section className="w-full">
        <Friends></Friends>
      </section>
    </div>
  );
}
