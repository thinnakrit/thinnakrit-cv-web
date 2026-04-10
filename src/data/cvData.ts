import type { CVData } from "@/types/cv.types";
import thinnakritAvatar from "@/assets/thinnakrit-avatar.jpeg";

export const cvData: CVData = {
  personal: {
    name: "Thinnakrit Knoo-aksorn",
    title: "Software Engineer · Tech Lead · Engineering Manager",
    profilePicture: thinnakritAvatar,
    contact: {
      email: "jay.thinnakrit@gmail.com",
      phone: "+66-954-646362",
      location: "Nonthaburi, Thailand",
      linkedin: "linkedin.com/in/thinnakrit",
      github: "github.com/thinnakrit",
    },
  },

  summary:
    "Results-driven Software Engineer and Engineering Leader with 10+ years of experience architecting scalable systems and leading cross-functional engineering teams across fintech, retail, and enterprise domains. Proven track record in full-stack development, microservice architecture, cloud infrastructure, and agile delivery — driving technical strategy, establishing engineering best practices, and shipping high-impact digital products at scale.",

  workExperience: [
    {
      id: "exp-1",
      company: "TMBThanachart Bank (ttb bank)",
      role: "Software Engineer — Tech Lead & Scrum Master",
      location: "Bangkok, Thailand",
      startDate: "2022-09",
      endDate: "Present",
      bullets: [
        {
          text: "Led cross-functional mobile engineering team as Tech Lead and Scrum Master — defined technical roadmap, owned architecture decisions, established coding standards, and conducted code reviews across Flutter and React Native applications serving ttb bank's digital-first customer base.",
        },
        {
          text: "Architected and shipped full-stack product features across React/Next.js frontends and Node.js/NestJS + Kotlin (Spring Boot) microservices; engineered Kubernetes/Docker CI/CD pipelines that improved deployment reliability and reduced release cycle time.",
        },
        {
          text: "Drove AI tooling adoption across the SDLC — integrated Design System MCP, Figma MCP for automated design-to-code handoff, and an Atlassian Rovo AI-powered code review bot — reducing manual PR review overhead and accelerating feature delivery velocity.",
        },
        {
          text: "Architected the ttb BusinessOne Design System end-to-end: published 50+ production-ready, accessible React components with design token governance and contribution standards, adopted across multiple product teams and reducing duplicated UI engineering effort org-wide.",
        },
      ],
      technologies: [
        "Flutter", "React Native", "React", "Next.js",
        "Node.js", "NestJS", "Kotlin", "Spring Boot",
        "TypeScript", "Kubernetes", "Docker", "MCP", "AI",
      ],
    },
    {
      id: "exp-2",
      company: "SCG",
      role: "Senior Application Developer",
      location: "Bangkok, Thailand",
      startDate: "2019-08",
      endDate: "2022-08",
      bullets: [
        {
          text: "Architected and delivered a cross-platform mobile application (React Native) for condominium management serving residents and property administrators — built on serverless AWS infrastructure (Lambda, DynamoDB, API Gateway, S3) for high availability and cost efficiency.",
        },
        {
          text: "Engineered scalable Node.js backend APIs and led agile delivery in cross-functional squads with product, design, and QA — achieving zero critical production incidents post-launch.",
        },
      ],
      technologies: [
        "React Native", "Node.js", "TypeScript",
        "AWS Lambda", "DynamoDB", "API Gateway", "S3",
      ],
    },
    {
      id: "exp-3",
      company: "King Power",
      role: "Frontend Developer",
      location: "Bangkok, Thailand",
      startDate: "2017-01",
      endDate: "2019-07",
      bullets: [
        {
          text: "Built and scaled a high-traffic retail e-commerce platform (React) with payment gateway integration, automated tax invoice generation, multilingual localization, and end-to-end order management for international customers.",
        },
        {
          text: "Partnered with UX designers and backend engineers to deliver pixel-perfect, performant interfaces — improving site usability and contributing to increased customer conversion for a nationally recognized retail brand.",
        },
      ],
      technologies: ["React", "JavaScript", "TypeScript"],
    },
    {
      id: "exp-4",
      company: "True Corporation",
      role: "Web Developer",
      location: "Bangkok, Thailand",
      startDate: "2015-11",
      endDate: "2016-12",
      bullets: [
        {
          text: "Developed internal CRM and operational tooling (React) integrating RESTful APIs from backend systems — streamlining account management and issue resolution workflows for customer service teams across the organization.",
        },
      ],
      technologies: ["React", "JavaScript"],
    },
  ],

  education: [
    {
      id: "edu-1",
      institution: "Prince of Songkla University",
      degree: "Bachelor of Business Administration",
      field: "Information Technology",
      location: "Thailand",
      startDate: "2012-01",
      endDate: "2016-01",
    },
  ],

  certifications: [
    {
      id: "cert-1",
      name: "The Complete Flutter Development Bootcamp with Dart",
      issuer: "Udemy",
      issuedDate: "2025-02",
      skills: ["Flutter", "Dart"],
    },
    {
      id: "cert-2",
      name: "Building Hybrid Applications with Flutter",
      issuer: "Skooldio",
      issuedDate: "2025-02",
      skills: ["Flutter", "Dart"],
    },
  ],

  technicalSkills: [
    {
      category: "Languages",
      skills: ["TypeScript", "JavaScript", "Dart", "Kotlin"],
    },
    {
      category: "Frontend & Mobile",
      skills: ["React", "Next.js", "React Native", "Flutter"],
    },
    {
      category: "Backend",
      skills: ["Node.js", "NestJS", "Spring Boot", "REST APIs", "Microservices"],
    },
    {
      category: "Cloud & Infrastructure",
      skills: ["AWS", "Kubernetes", "Docker", "CI/CD", "Serverless"],
    },
    {
      category: "AI & Developer Tools",
      skills: ["MCP Integrations", "Google Gen AI SDK", "Atlassian Rovo", "Bitbucket"],
    },
    {
      category: "Leadership & Process",
      skills: ["Technical Leadership", "Scrum Master", "System Design", "Agile / Scrum", "Design Systems"],
    },
  ],

  projects: [],

  achievements: [
    {
      id: "ach-1",
      title: "1st Place — Southern Region Web Development Competition",
      description:
        "Represented Prince of Songkla University at the regional level, winning first place and advancing to the national finals as a candidate for the country-level team.",
    },
  ],

  hobbies: [],
};
