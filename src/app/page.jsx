import Image from "next/image";
import TopBanner from "./Components/TopBanner";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans">
      <section>
        <TopBanner></TopBanner>
      </section>
    </div>
  );
}
