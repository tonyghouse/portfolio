"use client";

import React from "react";

function Skills() {
  const JavaIcon = "/assets/icons/svg/java.svg";
  const GoLangIcon = "/assets/icons/svg/golang.svg";
  const SpringIcon = "/assets/icons/svg/spring.svg";
  const ReactJsIcon = "/assets/icons/svg/reactjs.svg";
  const PostgresIcon = "/assets/icons/svg/postgresql.svg";
  const MongoDbIcon = "/assets/icons/svg/mongodb.svg";
  const RedisIcon = "/assets/icons/svg/redis.svg";
  const KafkaIcon = "/assets/icons/svg/kafka.svg";
  const MeilisearchIcon = "/assets/icons/svg/meilisearch.svg";
  const GraphqlIcon = "/assets/icons/svg/graphql.svg";
  const DockerIcon = "/assets/icons/svg/docker.svg";
  const KubernetesIcon = "/assets/icons/svg/kubernetes.svg";
  const JavascriptIcon = "/assets/icons/svg/javascript.svg";
  const skillList = [
    {
      name: "java",
      imageLink: JavaIcon,
    },
    {
      name: "javascript",
      imageLink: JavascriptIcon,
    },
    {
      name: "spring",
      imageLink: SpringIcon,
    },
    {
      name: "react",
      imageLink: ReactJsIcon,
    },
    {
      name: "postgres",
      imageLink: PostgresIcon,
    },
    {
      name: "mongodb",
      imageLink: MongoDbIcon,
    },
    {
      name: "redis",
      imageLink: RedisIcon,
    },
    {
      name: "kafka",
      imageLink: KafkaIcon,
    },
    {
      name: "graphql",
      imageLink: GraphqlIcon,
    },
    {
      name: "meilisearch",
      imageLink: MeilisearchIcon,
    },
    {
      name: "docker",
      imageLink: DockerIcon,
    },
    {
      name: "kubernetes",
      imageLink: KubernetesIcon,
    },
  ];

  return (
    <>
      <div
        id="skills"
        className="flex flex-col items-center w-full section-padding section-margin  "
      >
        <div className="flex items-center w-full  header-line">
          <span className="mr-4 text-xl accent font-monospace">01.</span>
          <h3 className="text-2xl whitespace-nowrap slate font-[600] font-poppins">
            Skills
          </h3>
        </div>
        <div className="grid items-center w-full  justify-items-center custom-grid-template div-back  ">
          {skillList.map((skill) => (
            <div
              key={skill.name}
              className="p-2 my-6 text-center hover:scale-110 md:p-4 md:my-10"
            >
              <img
                src={skill.imageLink}
                className="w-6 h-6 mx-auto mb-1 md:mb-2 md:w-16 md:h-16 grayscale hover:grayscale-0 "
                alt={skill.name}
              />
              <div className="text-xs capitalize slate md:text-sm font-monospace">
                {skill.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Skills;
