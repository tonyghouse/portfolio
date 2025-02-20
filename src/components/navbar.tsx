'use client'
import React, { useContext, useState } from "react";
import { Link } from "react-scroll";
// import { IThemeContextType, ThemeContext } from "../context/ThemeContext";
import { FaAlignJustify } from "react-icons/fa";
import Image from "next/image";

function Navbar() {
  const [sideMenu, setSideMenu] = useState(false);

//   const themeContext = useContext<IThemeContextType>(ThemeContext);

  const toggleSideMenu = () => {
    setSideMenu(!sideMenu);
  };

  // const toggleTheme = () => {
  //   themeContext.toggleThemeMode();
  // };

  const navlinks = [
    { id: "01", name: "Skills", url: "skills" },
    { id: "02", name: "Experience", url: "experience" },
    { id: "03", name: "Projects", url: "projects" },
    { id: "04", name: "Contributions", url: "contributions" },
  ];

  return (
    <nav
      id="navigation"
      className="flex h-[5rem] w-full items-center justify-between px-4 md:px-6  "
    >
      <a href="/" className="cursor-pointer z-[100] ">
      {/* ${themeContext.themeMode ==="dark" ? "" : "bg-[#030202]"}  */}
        <div className={` 
         flex items-center justify-start w-[3.6rem] h-[5.1rem]  md:w-[4.1rem]
         md:h-[5.1rem] `}>
          {/* <Image
            src="/assets/svgs/tonylightlogo.svg"
            className="w-[2.2rem] h-[2.2rem] mx-auto md:w-11 md:h-11 text-[#030202]"
            width={200}
            height={200}
            alt="logo"
          /> */}

       <div
            
            className="w-[2.2rem] h-[2.2rem] mx-auto md:w-11 md:h-11 text-[#030202]"
          />
          Tony
        </div>
      </a>
      <div
        className={`${sideMenu ? "flex" : "hidden md:flex"} 
        fixed top-0  left-0 z-[10] h-full w-full 
        flex-col items-end justify-center
        p-6 backdrop-blur-md 
        md:relative md:h-auto md:w-auto md:flex-row md:items-center md:justify-center md:bg-transparent md:p-0`}
      >
        <ul
          className="slate font-[440] mr-2 flex flex-col font-monospace 
                       text-[1rem] leading-[2rem] tracking-[0.17rem]
                       md:flex-row md:text-[0.95rem] md:leading-[3rem]"
        >
          {navlinks.map((navLink) => (
            <li key={navLink.id} className="px-5 py-3 md:px-4 md:py-0">
              <Link
                onClick={toggleSideMenu}
                className="hover-accent"
                to={navLink.url}
                spy={true}
                smooth={true}
                duration={1000}
              >
                <span className="mr-2 accent bold">{navLink.id}</span>
                <span className="bold">{navLink.name}</span>
              </Link>
            </li>
          ))}
          {/* <ResumeButton/>
          <li key="theme" className="px-5 py-3 md:px-4 md:py-0 ">
            <button onClick={toggleTheme}>
              {themeContext.themeMode === "dark" ? <RxMoon /> : <RxSun />}
            </button>
          </li> */}
        </ul>
      </div>
      <div className="flex flex-row md:hidden items-center" >
      <FaAlignJustify
        onClick={toggleSideMenu}
        className={`
                    z-[100] w-[1rem] cursor-pointer text-center text-xl accent `}
      />
      </div>
    </nav>
  );
}

export default Navbar;
