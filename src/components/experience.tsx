'use client'
import Link from "next/link";
import React, { useState } from "react";

function Experience() {
  const experienceRecord:any = {

    "Software Developer (SDE-2)": {
      position: "Software Developer (SDE-2)",
      organisation: "Symphony AI",
      url: "https://www.symphonyai.com/",
      duration: "Nov 2023 -  Present",
      content: [
        "Utilized AI Search on vectorized data coupled with LLM to carry out essential data matching operations",
        "Developed event-driven architectures using Azure Service bus to ensure real-time data processing",
        "Redis and the Jedis library were utilized to implement effective caching strategies",
        "Implemented the ability to read large-scale XLS Files using the Apache POI library and managed CSV Files using the Apache CSV library",
        "Implemented a bulk data import functionality utilizing client-provided files, leveraging multi-threading capabilities through the Spring Reactive",
        "Enhanced application security by implementing JWT, and role-based access control (RBAC) for inter service communication",
        "Implemented real-time invoice PDF generation by leveraging Thymleaf for design, resulting in a significant boost to system productivity and user interaction",
        "Reviewed and evaluated design and code alterations made by fellow developers to detect bugs and quality issues",
        "Reviewed and evaluated design and code alterations made by fellow developers to detect bugs and quality issues"
      ],
    },
    
    "Senior Software Engineer (SDE-2)": {
      position: "Senior Software Engineer (SDE-2)",
      organisation: "LTI Mindtree",
      url: "https://www.ltimindtree.com/",
      duration: "Jan 2023 - Seps 2023",
      content: [
        "Designed and implemented primary workflow of application which reduced the development time",
        "Developed an ETL job with reduction of 10X in execution time and consumption of less CPU and Memory resources",
        "Debugged and fixed performance issues related to Memory and CPU with reduced resource consumption by 2X using Jprofile.",
        "Written optimal postgres database queries by analysing execution plan to reduce query exection time by 2X",
        "Identified and implemented code using QueryDsl library to execute database queries with less lines of code",
        "Deployed dockerized applications in containerized environments using Bitbucket piplines and AWS Elastic Kubernetes for efficient scaling and orchestration"
      ],
    },
    "Software Engineer (SDE-1)": {
      position: "Software Engineer (SDE-1)",
      organisation: "LTI Mindtree",
      url: "https://www.ltimindtree.com/",
      duration: "March 2021 - Dec 2022",
      content: [
          "Quickly grasped the client's specific requirements. Simultaneously, was able to understand the app's workflow which boosted overall productivity",
        "Played a crucial role in designing application workflow by identifying minimal API endpoints",
        "Implemented crucial functionalities with accurate requirements and minimal bugs by analysing business requirements given by Business Analysts",
        "Developed a fast & accurate search functionality with reduction of 4X in response time using QueryDsl Library",
        "Unit Tests were meticulously written using Junit and Mockito. These enabled thorough testing of the application's various functionalities, verifying their robust performance"

      ],
    },
  };
  
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      <div id="experience" 
           className="flex flex-col items-center w-full text-left section-padding section-margin">
        <div className="flex items-center w-full pb-8 header-line">
          <span className="mr-4 text-xl accent font-monospace">02.</span>
          <span className="text-[22px] whitespace-nowrap slate font-poppins font-[600]">
            Experience
          </span>
        </div>
        <p className="w-full mb-3 leading-7 slate font-inter ">
          As of 2025, I have 4 years of professional developer experience in building backend applications.
           Along side worked and contributed to prominent open-source projects.
        </p>
      
        <div className="flex flex-col w-full mt-10 md:flex-row flex-start md:gap-20">
          <ul className="flex mb-8 mr-6 overflow-x-scroll text-sm md:flex-col slate-alt font-monospace work-list md:mb-0">
            {Object.keys(experienceRecord).map((k, i) => {
              return (
                <li
                   key={k}
                  onClick={() => setActiveTab(i)}
                  className={`p-3 px-6 cursor-pointer border-b-2 md:border-b-0 md:border-l-2 ${
                    activeTab === i ? "active-item" : ""
                  }`}
                >
                  {k}
                </li>
              );
            })}
          </ul>
          <div className="p-2 ">
            {Object.keys(experienceRecord).map((k, i) => {
              return (
                <div key={k} className={`${activeTab === i ? "" : "hidden"}`}>
                  <div className={`font-poppins text-xl mb-1 font-[500]`}>
                    <span className="mr-2 slate">{experienceRecord[k].position}</span>
                    <Link href={experienceRecord[k].url} className={"accent"} target="_blank" rel="noreferrer" >
                      @ {experienceRecord[k].organisation}
                    </Link>
                  </div>
                  <span className={"slate text-sm font-monospace"}>
                    {experienceRecord[k].duration}
                  </span>
                  <ul className="flex flex-col mt-4 text-sm leading-6 bullet-list slate-alt font-inter">
                    {Object.values(experienceRecord[k].content).map((v:any) => (
                      <li key={v} className={"mb-2"}>{v}</li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Experience;
