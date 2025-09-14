// Import ALL data from centralized configuration
import { 
  siteConfig, 
  navbarConfig,
  personalInfo, 
  experienceData, 
  projectsData, 
  skillsConfig, 
  educationData, 
  achievementsData, 
  testimonialsData 
} from '../config/siteConfig';

// Export everything from the centralized config - NO DUPLICATE DATA!
export const portfolioData = {
  // Personal Information from siteConfig
  personalInfo: {
    name: personalInfo.name,
    title: personalInfo.title,
    location: personalInfo.location,
    email: personalInfo.email,
    phone: personalInfo.phone,
    linkedin: siteConfig.socialLinks.linkedin,
    github: siteConfig.socialLinks.github,
    summary: personalInfo.bio,
    bio: personalInfo.bio,
    avatar: personalInfo.avatar,
    taglines: personalInfo.taglines,
    shortIntro: personalInfo.shortIntro,
    funFacts: personalInfo.funFacts,
    availability: personalInfo.availability,
    timezone: personalInfo.timezone
  },

  // Experience from siteConfig
  experience: experienceData,

  // Projects from siteConfig  
  projects: projectsData,

  // Skills converted from siteConfig format
  skills: {
    languages: skillsConfig.categories["Programming"]?.skills || [],
    aiml: skillsConfig.categories["AI/ML"]?.skills || [],
    devops: skillsConfig.categories["Cloud & DevOps"]?.skills || [],
    tools: skillsConfig.categories["Data & Analytics"]?.skills.concat(skillsConfig.categories["Tools & Software"]?.skills || []) || []
  },

  // All skills organized by categories (for new components)
  skillsCategories: skillsConfig.categories,

  // Education from siteConfig
  education: educationData,

  // Achievements from siteConfig
  achievements: achievementsData,

  // Testimonials from siteConfig
  testimonials: testimonialsData,

  // Site configuration
  siteConfig: siteConfig,

  // Navbar configuration
  navbarConfig: navbarConfig,

  // Social links from siteConfig
  socialLinks: siteConfig.socialLinks,

  // External links from siteConfig
  externalLinks: siteConfig.externalLinks
};