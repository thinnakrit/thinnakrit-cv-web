export interface ContactInfo {
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  github: string;
  portfolio?: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  profilePicture: string;
  contact: ContactInfo;
}

export interface BulletPoint {
  text: string;
}

export interface WorkExperienceItem {
  id: string;
  company: string;
  role: string;
  location: string;
  startDate: string;
  endDate: "Present" | (string & {});
  bullets: BulletPoint[];
  technologies: string[];
}

export interface EducationProject {
  name: string;
  description: string;
  technologies?: string[];
}

export interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  field: string;
  location: string;
  startDate: string;
  endDate: string;
  gpa?: string;
  honors?: string;
  projects?: EducationProject[];
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface CertificationItem {
  id: string;
  name: string;
  issuer: string;
  issuedDate: string;
  credentialId?: string;
  credentialUrl?: string;
  skills?: string[];
}

export interface ProjectItem {
  id: string;
  name: string;
  description: string;
  bullets: BulletPoint[];
  technologies: string[];
  repoUrl?: string;
  liveUrl?: string;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
}

export interface CVData {
  personal: PersonalInfo;
  summary: string;
  workExperience: WorkExperienceItem[];
  education: EducationItem[];
  certifications: CertificationItem[];
  technicalSkills: SkillCategory[];
  projects: ProjectItem[];
  achievements: Achievement[];
  hobbies: string[];
}
