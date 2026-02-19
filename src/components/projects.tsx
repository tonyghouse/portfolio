"use client";
import React, { useContext } from "react";

import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import Project from "./project";
import FeaturedProject from "./featured-project";
import Link from "next/link";

function Projects() {
  const socialRavenDarkBanner = "/assets/images/projects/socialraven-banner-dark.png";
  const socialRavenLightBanner = "/assets/images/projects/socialraven-banner-light.png";
  const blankLightBanner = "/assets/images/projects/blank-banner-light.png";

  const featuredProjectList = [
    {
      name: "Social Raven - Social media management tool",
      description:
        "Social media management tool that helps in scheduling posts, analyse traffic for social media accounts",
      tags: ["SpringBoot", "ReactJs / NextJs", "Postgres", "Kafka", "Redis"],
      links: [
        {
          icon: <FaGithub />,
          url: "https://github.com/tonyghouse/socialraven-ui",
        },
        {
          icon: <FaExternalLinkAlt />,
          url: "https://socialraven.tonyghouse.com",
        },
      ],
      imageLight: socialRavenLightBanner,
      imageDark: socialRavenDarkBanner,
    },
    {
      name: "Mailzard - Marketing and Transactional Emails, Simplified",
      description: "Email automation platform that lets users create campaigns, design templates, schedule sends, manage subscribers, and track analytics.",
      tags: ["SpringBoot", "ReactJs / NextJs", "Postgres"],
      links: [
        {
          icon: <FaGithub />,
          url: "https://github.com/tonyghouse/mailzard-ui",
        },
        {
          icon: <FaExternalLinkAlt />,
          url: "https://mailzard.tonyghouse.com",
        },
      ],
      imageLight: blankLightBanner,
      imageDark: blankLightBanner,
    },
    // {
    //   name: "ConvoMail - Streamline Your Inbox, Amplify Your Chat",
    //   description:
    //     "ConvoMail transforms your email experience by blending the efficiency of chat with the professionalism of traditional emailing.",
    //   tags: [
    //     "SpringBoot",
    //     "ReactJs / NextJs",
    //     "Postgres",
    //     "MeiliSearch",
    //     "Redis",
    //   ],
    //   links: [
    //     {
    //       icon: <FaGithub />,
    //       url: "https://github.com/tonyghouse/convomail-ui",
    //     },
    //     {
    //       icon: <FaExternalLinkAlt />,
    //       url: "https://convomail.tonyghouse.com",
    //     },
    //   ],
    //   imageLight: blankLightBanner,
    //   imageDark: blankLightBanner,
    // },
  ];

  const otherProjectList = [
    {
      title: "NoteKnack - browser extension to save notes for different sites",
      description: "Browser extension to save notes for different sites",
      links: [
        {
          icon: <FaGithub />,
          url: "https://github.com/tonyghouse/noteknack-extension",
        },
        {
          icon: <FaExternalLinkAlt />,
          url: "https://noteknack.tonyghouse.com",
        },
      ],
      tags: ["Javascript"],
    },
    {
      title: "Tern - Monitoring tool",
      description: "Monitoring tool to observe apps in environments",
      links: [
        {
          icon: <FaGithub />,
          url: "https://github.com/tonyghouse/tern-monitoring-tool-ui",
        },
        {
          icon: <FaExternalLinkAlt />,
          url: "https://tern.tonyghouse.com",
        },
      ],
      tags: ["Java", "Spring", "Postgres", "Kafka", "ReactJs / NextJs"],
    },
    // {
    //   title: "RollbackRanger - Roolback the data modified by API",
    //   description: "Tool to rollback the data modified by API",
    //   links: [
    //     {
    //       icon: <FaGithub />,
    //       url: "https://github.com/tonyghouse/rollbackranger-ui",
    //     },
    //     {
    //       icon: <FaExternalLinkAlt />,
    //       url: "https://rollbackranger.tonyghouse.com",
    //     },
    //   ],
    //   tags: ["Java", "Spring", "Postgres", "Kafka", "ReactJs / NextJs"],
    // },
    {
      title: "QueryCraft - Db Utility tools",
      description: "Util tools for your db",
      links: [
        {
          icon: <FaGithub />,
          url: "https://github.com/tonyghouse/querycraft-ui",
        },
        {
          icon: <FaExternalLinkAlt />,
          url: "https://querycraft.tonyghouse.com",
        },
      ],
      tags: ["Javascript", "ReactJs / NextJs"],
    },
  ];

  return (
    <>
      <div
        id="projects"
        className="flex flex-col items-center w-full section-padding section-margin "
      >
        <div className="flex items-center w-full pb-10 header-line ">
          <span className="mr-4 text-xl accent font-monospace">03.</span>
          <h3 className="slate whitespace-nowrap text-2xl font-[600] font-poppins">
            Featured Projects
          </h3>
        </div>
        {featuredProjectList.map((p, i) => {
          return (
            <FeaturedProject
              key={p.name}
              imageLight={p.imageLight}
              imageDark={p.imageDark}
              title={p.name}
              description={p.description}
              tags={p.tags}
              links={p.links}
              orientation={!(i % 2)}
            />
          );
        })}

        <div className="flex flex-col items-center w-full ">
          <div className="flex flex-col items-center justify-center w-full pb-4">
            <h3 className="slate mb-[0.3rem] text-2xl font-[600] font-poppins">
              Other Projects
            </h3>
            <Link
              href="https://github.com/tonyghouse?tab=repositories"
              className={"accent font-monospace text-sm"}
            >
              view github repos
            </Link>
          </div>

          <div className="grid w-full gap-4 md:grid-cols-3 ">
            {otherProjectList.map((p) => {
              return (
                <Project
                  key={p.title}
                  title={p.title}
                  description={p.description}
                  tags={p.tags}
                  links={p.links}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
