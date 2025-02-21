import Link from "next/link";
import React , {useContext} from "react";
import {FaRegFolder,FaGithub} from "react-icons/fa";




function Project({ title, description, links, tags }:any) {

  return (
    <>
      <div className={` ${"shadow-gray-400"}
       flex flex-col p-8 rounded shadow-2xl  div-back   `}>
        <div className="flex items-center justify-between">
          <FaRegFolder className="text-3xl accent"/>
          <div className="flex items-center slate">
            {links.map((l:any, i:any) => {
              return (
                <Link
                  key={i}
                  href={l.url}
                  target="_blank" rel="noreferrer">
                    <div className={`hover-accent ${l} ${
                    i === links.length - 1 ? "" : "mx-6"
                  }`} >
                    {l.icon}
                  </div>
                  </Link>
              );
            })}
          </div>
        </div>
        <h4 className="slate pt-6 cursor-default font-[600] font-poppins">{title}</h4>
        <p className={`slate pt-2 text-sm cursor-default font-inter`}>
          {description}
        </p>
        <ul className="flex flex-wrap items-center mt-6 text-sm cursor-default font-[450] slate opacity-60 font-monospace">
          {tags.map((t:any, i:any) => {
            return (
              <li key={i} className="mr-5 whitespace-nowrap">
                {t}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default Project;
