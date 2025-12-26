export type WorkExperience = {
  company: string;
  role: string;
  startDate: string;
  endDate: string;
  achievements: string[];
};

export type Skill = {
  title: string;
  body: string[];
};

export type Education = {
  title: string;
  startDate?: string;
  endDate: string;
  relevant: string[];
};

export type Certification = {
  title: string;
  date: string;
};

export type Language = {
  name: string;
  level: string;
};

export type Resume = {
  name: string;
  bio: string[];
  workExperiences: WorkExperience[];
  skills: Skill[];
  educations: Education[];
  certifications: Certification[];
  languages: Language[];
  hobbies: string[];
};

const name = "Delebayo Fadejin";

const bio = [
  "Having studied Agricultural and Environmental Engineering with rich experience in energy sector and project management, I'm passionate about using my skills (Python, TypeScript, JavaScript, C++...) in data engineering to build scalable data platforms, pipelines, automated and backend systems in the above mentioned fields.",
  "I love me data-driven innovations and I have this strong commitment (judging by my track record of activities up until now that you found me) to making a positive impact in my sphere. My work focuses on designing reliable data pipelines, developing backend services, and working with modern cloud and container technologies to support scalable applications.",
  "I am seeking a wide range of opportunities to learn, share ideas and greatly juxtapose my skills across these fields. Reach out to me today, the world is&nbsp;&nbsp;<span class='highlight font-bold italic animate-pulse'>just a code away</span>&nbsp;&nbsp;from another new innovation!"
];

const workExperiences: WorkExperience[] = [
  {
    company: "Banksome Group, Lagos, Nigeria",
    role: "Facility Executive Officer",
    startDate: "JAN 2023",
    endDate: "PRESENT",
    achievements: [
      "Facilitated cross-functional collaboration, resulting in a 20% reduction in facility-related downtime, equating to approximately 3 days per month, and a 15% increase in overall workplace efficiency.",
      "Managed daily operations and maintenance, ensuring 100% compliance with safety regulations, averting any safety incidents over the course of a year, and achieving a 95% functionality uptime, equivalent to less than one day of downtime per month.",
      "Implemented streamlined processes, leading to a 25% reduction in workflow bottlenecks, and a 30% increase in departmental productivity, translating to an additional 2 projects completed per month.",
      "Fostered a positive workplace environment, evidenced to an additional 6 satisfied employees per team, and a 20% decrease in reported facility-related concerns, reducing complaints by 2 per week."
    ]
  },
  {
    company: "Caspian Pacific Group | Lagos, Nigeria",
    role: "Engineer & Technical Support",
    startDate: "AUG 2022",
    endDate: "DEC 2022",
    achievements: [
      "Sourced information and data for technical writing, drawings, and reports, maintaining a 95% accuracy rate in project documentation over 24 months.",
      "Functioned as the creative designer for all creative and visual designs, delivering high-quality design projects for internal and external stakeholders of the Group and other companies under it.",
      "Managed software and hardware facilities, websites, and provided technical support to company subsidiaries across Nigeria, the United Kingdom, and the United Arab Emirates (UAE), maintaining a 98% uptime for critical systems and resolving 90% of technical issues within 24 hours.",
      "Provided support in the smart metering project, resulting in a 30% increase in energy service efficiency and a 25% reduction in billing errors for residences in Alfa Bay, Lekki.",
      "Supported the tax and audit department at RFR Consulting, assisting in the automation and integration of software systems, leading to a 20% increase in audit efficiency."
    ]
  },
  {
    company: "Specogreeno Concerns Limited, Rivers, Nigeria",
    role: "Service Engineer, Rental Manager, ICT Personnel",
    startDate: "JUN 2019",
    endDate: "JUL 2020",
    achievements: [
      "Conducted regular maintenance and troubleshooting of heavy-duty generators, achieving a 95% uptime rate throughout the year.",
      "Acted as the primary liaison for rental inquiries, managing and documenting approximately 20 rental contracts over the course of the year, ensuring compliance and customer satisfaction.",
      "Managed a significant rental contract valued at ₦1M, supplying a 1000KVA diesel generator to the Rivers State government for the Rivers State Cassava Processing Initiative, resulting in a 100% satisfaction rate from the client.",
      "Played a crucial role in supporting the operations of the cassava processing plant in Afam, Oyigbo Local Government Area, by supplying power through the rental generator, contributing to a 20% increase in local agricultural output over the year.",
      "Demonstrated technical expertise in pressure testing cylinder heads and valve seats, extending the lifespan of generators by an average of 2 years."
    ]
  }
];

const skills: Skill[] = [
  { title: "Languages", body: ["Python", "JavaScript", "TypeScript", "Go", "Arduino"] },
  { title: "Frameworks/Libraries", body: ["React", "Nodejs", "Nextjs", "GraphQL", "Flask"] },
  { title: "Storages/Databases", body: ["SQL", "MongoDB", "Neo4j", "Kafka"] },
  { title: "Tooling", body: ["Git", "Google Cloud Console", "Docker", "Kubernetes"] }
];

const educations: Education[] = [
  {
    title: "B.Sc Agricultural and Environmental Engineering, University of Ibadan, Oyo",
    endDate: "APR 2019",
    relevant: [
      "Algebra",
      "Elementary Computer Programming",
      "Fluid Mechanics",
      "Manufacturing Science I",
      "Computer Modelling of Agricultural Systems",
      "Environmental Engineering"
    ]
  }
];

const certifications: Certification[] = [
  { title: "Introduction to Data Engineering - IBM", date: "2024" },
  { title: "The Arduino Platform and C Programming - University of California, Irvine", date: "2023" },
  { title: "Problem Solving Using Computational Thinking - University of Michigan", date: "2022" }
];

const languages: Language[] = [
  { name: "English", level: "PROFICIENT" },
  { name: "Yoruba", level: "PROFICIENT" },
  { name: "German", level: "BEGINNER" }
];

const hobbies = ["Reading biographies", "Swimming", "Football", "Traveling"];

export const resume: Resume = {
  name,
  bio,
  workExperiences,
  skills,
  educations,
  certifications,
  languages,
  hobbies
};
