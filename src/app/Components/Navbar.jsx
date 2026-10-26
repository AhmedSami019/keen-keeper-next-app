'use client'


import Link from "next/link";
import { usePathname } from "next/navigation";
import { RiHome2Line, RiTimeLine } from "react-icons/ri";
import { TfiStatsUp } from "react-icons/tfi";

const Navbar = () => {

    const pathName = usePathname()

    // nav links
    const links = <>
    <li><Link href={'/'}  className={pathName == "/"?  "btn btn-primary btn-sm" : 'btn btn-sm'}><RiHome2Line size={16} />Home</Link></li>
    <li><Link href={'/'}  className={pathName == "/timeline" ?  "btn btn-primary btn-sm" : 'btn btn-sm'}><RiTimeLine size={16} />Timeline</Link></li>
    <li><Link href={'/'}  className={pathName == "/stats" ?  "btn btn-primary btn-sm" : 'btn btn-sm'}><TfiStatsUp size={16} />Stats</Link></li>
    </>

  return (
    <div className="navbar bg-base-100 shadow-sm lg:px-15 w-full">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              aria-label="Menu"
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
            tabIndex={-1}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
           {links}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl inline-flex gap-0">
          <span className="font-bold">Keen</span>
          <span className="font-medium text-[#244D3F]">Keeper</span>
        </a>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-2">
          {links}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
