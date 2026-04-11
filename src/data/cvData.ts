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
    "Software Engineer and Tech Lead with 10+ years of experience. Developed software across fintech, retail, and enterprise — spanning mobile, web, backend, and cloud. Leads teams, shapes architecture decisions, and ships production software.",

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
          text: "Led the mobile engineering team as Tech Lead and Scrum Master. Set the technical direction, reviewed architecture proposals, and wrote the coding standards the team follows daily.",
        },
        {
          text: "Shipped features across React/Next.js, Node.js/NestJS, and Kotlin Spring Boot services. Set up Kubernetes/Docker CI/CD pipelines that cut deployment failures and reduced the time to ship a release.",
        },
        {
          text: "Brought AI tools into our dev workflow: Design System MCP, Figma MCP, and Atlassian Rovo for automated code review. Cut the time engineers spend on PR review by removing repetitive feedback cycles.",
        },
        {
          text: "Launched the ttb BusinessOne Design System from Figma: 50+ reusable React components with shared design token standards. All product teams adopted it, which removed a lot of repeated UI work across the company.",
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
          text: "Delivered a React Native app for condominium management, serving residents and property administrators. Deployed on serverless AWS (Lambda, DynamoDB, API Gateway, S3) for high availability.",
        },
        {
          text: "Wrote Node.js backend APIs and coordinated releases with product, design, and QA teams. Shipped to production with zero critical incidents in the months following launch.",
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
          text: "Engineered a high-traffic retail e-commerce platform using React. Delivered payment gateway, tax invoicing, multilingual localization, and order management for international customers.",
        },
        {
          text: "Worked closely with UX designers and backend engineers to ship fast, detail-oriented interfaces that served heavy traffic from domestic shoppers and international duty-free customers.",
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
          text: "Created internal CRM tools using React, wired to backend REST APIs. Helped customer service teams manage accounts and resolve customer issues faster.",
        },
      ],
      technologies: ["React", "JavaScript"],
    },
    {
      id: "exp-5",
      company: "Thaiware Communication Co., Ltd.",
      role: "Full Stack Developer Intern",
      location: "Bangkok, Thailand",
      startDate: "2013-02",
      endDate: "2013-07",
      bullets: [
        {
          text: "Developed an e-commerce platform for software product sales using PHP and jQuery, covering product listings, cart, and checkout flows.",
        },
        {
          text: "Designed and wired a real-time movie screening schedule system against Major Cineplex's data feed, giving users up-to-date showtime information.",
        },
      ],
      technologies: ["PHP", "JavaScript", "jQuery", "MySQL"],
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
        "Represented Prince of Songkla University at the regional level. Won first place and advanced to the national finals.",
    },
  ],

  hobbies: [],
};
