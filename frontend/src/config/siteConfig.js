// 🚀 COMPLETE Portfolio Configuration - Everything in ONE file!
// This is your MASTER configuration file - update everything from here!

// ============ BASIC SITE SETTINGS ============
export const siteConfig = {
  // Site Information
  site: {
    title: "Shivam Sharma | AI/ML Engineer Portfolio",
    description: "AI/ML Engineer Portfolio - Modern React portfolio with interactive animations",
    url: "https://shivamsharmahere.github.io/portfolio-website", 
    author: "Shivam Sharma",
    keywords: ["AI Engineer", "Machine Learning", "Computer Vision", "NLP", "React Developer"]
  },

  // Feature Toggles - Turn sections ON/OFF easily
  features: {
    showExperience: true,
    showProjects: true,
    showSkills: true,
    showTestimonials: true,
    showContact: true,
    showEducation: true,
    showAchievements: true,
    showBlog: false, // Future blog section
    enableAnalytics: true,
    enableCustomCursor: true,
    enableParticles: true,
    enableDarkMode: true
  },

  // Social Media Links - Update your links here
  socialLinks: {
    linkedin: "https://linkedin.com/in/shivamsharmahere",
    github: "https://github.com/shivamsharmahere",
    twitter: "https://twitter.com/shivamsharmahere",
    instagram: "https://instagram.com/shivamsharmahere", 
    youtube: "https://youtube.com/@shivamsharmahere",
    email: "shivamsharma.aiml@gmail.com",
    telegram: "https://t.me/shivamsharmahere" // Add more as needed
  },

  // External Links
  externalLinks: {
    resume: "/resume/Shivam_Sharma_Resume_AI_Engineer.pdf",
    calendly: "https://calendly.com/shivamsharma",
    portfolio: "https://shivamsharmahere.github.io/portfolio-website",
    blog: "https://medium.com/@shivamsharma" // Future blog
  },

  // Theme Configuration
  theme: {
    primaryColor: "blue",
    secondaryColor: "purple", 
    accentColor: "green",
    warningColor: "amber",
    gradients: {
      primary: "from-blue-600 to-purple-600",
      secondary: "from-green-400 to-blue-500",
      accent: "from-purple-400 to-pink-400"
    }
  },

  // Contact Form Configuration
  contact: {
    formAction: "mailto:shivamsharma.aiml@gmail.com",
    autoReply: true,
    showLocation: true,
    showPhone: true,
    showAvailability: true
  }
};

// ============ NAVBAR CONFIGURATION ============
export const navbarConfig = {
  // Logo Configuration
  logo: {
    type: "icon", // "text", "icon", "image"
    text: "SS", // For text logo
    icon: "CircleUserRound", // Lucide icon name
    image: "/images/logo.png", // For image logo
    href: "#", // Logo click destination
    showOnMobile: true
  },

  // Navigation Items - Easy to add/remove/reorder
  navItems: [
    { 
      name: "About", 
      href: "#about", 
      show: true,
      mobileShow: true
    },
    { 
      name: "Experience", 
      href: "#experience", 
      show: siteConfig.features.showExperience,
      mobileShow: true
    },
    { 
      name: "Projects", 
      href: "#projects", 
      show: siteConfig.features.showProjects,
      mobileShow: true
    },
    { 
      name: "Skills", 
      href: "#skills", 
      show: siteConfig.features.showSkills,
      mobileShow: true
    },
    { 
      name: "Education", 
      href: "#education", 
      show: siteConfig.features.showEducation,
      mobileShow: false // Hide on mobile to save space
    },
    { 
      name: "Testimonials", 
      href: "#testimonials", 
      show: siteConfig.features.showTestimonials,
      mobileShow: false
    },
    { 
      name: "Contact", 
      href: "#contact", 
      show: siteConfig.features.showContact,
      mobileShow: true
    },
    {
      name: "Blog", 
      href: "#blog", 
      show: siteConfig.features.showBlog,
      mobileShow: false,
      external: true, // Opens in new tab
      url: siteConfig.externalLinks.blog
    }
  ],

  // Social Icons Configuration
  socialIcons: {
    show: true,
    showOnMobile: true,
    position: "right", // "left", "right", "center"
    icons: [
      {
        name: "github",
        icon: "Github", // Lucide icon name
        url: siteConfig.socialLinks.github,
        color: "text-green-400",
        hoverColor: "hover:text-green-300",
        glowColor: "rgba(34,197,94,0.6)",
        show: true
      },
      {
        name: "linkedin", 
        icon: "Linkedin",
        url: siteConfig.socialLinks.linkedin,
        color: "text-blue-400",
        hoverColor: "hover:text-blue-300", 
        glowColor: "rgba(59,130,246,0.6)",
        show: true
      },
      {
        name: "email",
        icon: "Mail",
        url: `mailto:${siteConfig.socialLinks.email}`,
        color: "text-white",
        hoverColor: "hover:text-gray-200",
        glowColor: "rgba(255,255,255,0.6)",
        show: true
      },
      {
        name: "twitter",
        icon: "Twitter", 
        url: siteConfig.socialLinks.twitter,
        color: "text-sky-400",
        hoverColor: "hover:text-sky-300",
        glowColor: "rgba(56,189,248,0.6)",
        show: false // Hidden by default, set to true to show
      },
      {
        name: "instagram",
        icon: "Instagram",
        url: siteConfig.socialLinks.instagram, 
        color: "text-pink-400",
        hoverColor: "hover:text-pink-300",
        glowColor: "rgba(244,114,182,0.6)",
        show: false
      }
    ]
  },

  // Resume Button Configuration
  resumeButton: {
    show: true,
    showOnMobile: true,
    text: "Resume",
    downloadText: "Download Resume",
    variant: "primary", // "primary", "outline", "ghost"
    position: "right", // Position in navbar
    mobileVariant: "outline", // Different style for mobile
    url: siteConfig.externalLinks.resume,
    download: true, // Enable download attribute
    analytics: true // Track downloads
  },

  // Navbar Behavior
  behavior: {
    scrollEffect: true, // Background change on scroll
    smoothScroll: true, // Smooth scrolling to sections
    hideOnScroll: false, // Hide navbar when scrolling down
    mobileBreakpoint: "md", // When to show mobile menu
    stickyPosition: "top", // "top", "bottom"
    autoClose: true // Close mobile menu after click
  },

  // Styling Options
  styling: {
    background: {
      default: "bg-transparent",
      scrolled: "bg-black/90 backdrop-blur-md border-b border-gray-800"
    },
    height: "h-16", // Navbar height
    maxWidth: "max-w-7xl", // Container max width
    padding: "px-4 sm:px-6 lg:px-8",
    textSize: "text-sm font-medium",
    spacing: "space-x-8", // Desktop nav item spacing
    mobileSpacing: "space-y-1", // Mobile nav item spacing
    transition: "transition-all duration-300"
  },

  // Custom CTAs (Call to Actions) - Add buttons/links
  customCTAs: [
    {
      name: "Hire Me",
      href: "#contact",
      show: false, // Set to true to enable
      variant: "primary",
      external: false,
      mobileShow: true
    },
    {
      name: "Book Call", 
      href: siteConfig.externalLinks.calendly,
      show: false,
      variant: "outline", 
      external: true,
      mobileShow: false
    }
  ]
};

// ============ PERSONAL INFORMATION ============ 
export const personalInfo = {
  name: "Shivam Sharma",
  title: "AI/ML Engineer",
  subtitle: "Building the Future with AI",
  location: "Jaipur, India",
  email: "shivamsharma.aiml@gmail.com",
  phone: "+91 9145898381",
  bio: "Results-driven AI/ML engineer with expertise in Computer Vision, NLP, machine learning, and deep learning. Passionate about creating intelligent systems that solve real-world problems.",
  avatar: "/images/profile.jpg",
  availability: "Available for new opportunities",
  timezone: "IST (UTC+5:30)",
  taglines: [
    "Building intelligent systems that matter",
    "Transforming ideas into AI-powered solutions", 
    "Passionate about the future of AI",
    "Creating tomorrow's technology today"
  ],
  shortIntro: "AI/ML Engineer specializing in Computer Vision, NLP, and scalable AI solutions. Building production-grade systems that drive innovation.",
  funFacts: [
    "🧠 Developed 15+ AI/ML projects",
    "☁️ Deployed solutions serving 1K+ daily users",
    "🎯 99.9% uptime on production systems",
    "📚 Continuous learner in emerging AI technologies"
  ]
};

// ============ EXPERIENCE SECTION ============
export const experienceData = [
  {
    id: 1,
    title: "AI Engineer",
    company: "Jan Elaaj",
    companyUrl: "https://janelaaj.com",
    location: "Delhi, India",
    period: "Mar 2025 - Present",
    duration: "6 months",
    type: "Full-time",
    logo: "/images/companies/janelaaj.png",
    description: "Leading AI initiatives and building production-grade chatbot infrastructure",
    achievements: [
      "Built production-grade chatbots using modular pipelines (MySQL, LLAMA 3.3 70B, BioBERT NER, Pinecone, Flask, NLP components)",
      "Engineered chatbot infrastructure compatible with AWS Lambda achieving 99% uptime",
      "Collaborated with IIT Guwahati on GenAI and Future Computing conferences",
      "Implemented RAG architecture serving 1000+ daily queries with sub-second response times",
      "Designed scalable NLP pipelines reducing response latency by 40%"
    ],
    technologies: ["LLAMA 3.3","GPT-OSS-120b", "BioBERT NER", "Pinecone", "Flask", "AWS Lambda", "MySQL", "NLP", "RAG"],
    highlights: [
      "99% uptime achievement",
      "1000+ daily queries handled",
      "40% latency reduction"
    ]
  },
  {
    id: 2,
    title: "AI/ML Developer Intern",
    company: "Jan Elaaj", 
    companyUrl: "https://janelaaj.com",
    location: "Delhi, India",
    period: "Dec 2024 - Mar 2025",
    duration: "4 months",
    type: "Internship",
    logo: "/images/companies/janelaaj.png",
    description: "Developed advanced multimodal AI systems for real-time analysis",
    achievements: [
      "Developed a real-time mood analysis pipeline using multimodal inputs (images/voice)",
      "Combined fine-tuned CNN (VGG19) on FER-2013 achieving 68% accuracy with WhisperX for voice processing (90%+ accuracy)",
      "Integrated Gemini 1.5 for sentiment analysis and NLP prompt engineering resulting in 40% engagement increase",
      "Deployed pipeline on AWS (EC2, Lambda, S3) with CI/CD handling 1k+ daily requests with 99.9% uptime",
      "Implemented real-time processing capable of analyzing 100+ concurrent sessions"
    ],
    technologies: ["VGG19", "FER-2013", "WhisperX", "Gemini 1.5", "AWS", "CI/CD", "Computer Vision", "NLP"],
    highlights: [
      "40% engagement increase",
      "99.9% uptime achieved", 
      "1000+ daily requests handled"
    ]
  },
  {
    id: 3,
    title: "Data Science Intern",
    company: "Netparam",
    companyUrl: "https://netparam.com",
    location: "Jaipur, India", 
    period: "June 2024 - July 2024",
    duration: "2 months",
    type: "Internship",
    logo: "/images/companies/netparam.png",
    description: "Built computer vision solutions for security applications",
    achievements: [
      "Engineered a Home Security Surveillance System using Python and OpenCV with face recognition achieving 72% accuracy",
      "Automated security logging using dynamic Excel reports reducing manual work by 70%",
      "Implemented real-time face detection and tracking with alert mechanisms",
      "Developed automated reporting system for security incidents and analytics"
    ],
    technologies: ["Python", "OpenCV", "Face Recognition", "Excel Automation", "Computer Vision", "Security Systems"],
    highlights: [
      "72% face recognition accuracy",
      "70% time reduction in manual logging"
    ]
  }
];

// ============ PROJECTS SECTION ============
export const projectsData = [
{
  id: 1,
  title: "Advanced RAG Agent with Hybrid Search",
  subtitle: "Production-worthy AI chatbot with intelligent document retrieval",
  description: "Retrieval-Augmented Generation (RAG) based AI chatbot that answers user queries using PDF documents as knowledge sources with advanced hybrid search capabilities.",
  longDescription: "A sophisticated RAG system featuring modular architecture with query expansion, hybrid retrieval combining dense and sparse methods, fusion using Reciprocal Rank Fusion (RRF), neural reranking with cross-encoders, and context compression. The multi-tool agent combines document Q&A, summarization, and web search capabilities through a clean Streamlit interface with citation tracking.",
  technologies: ["Python", "LangChain", "Streamlit", "FAISS", "Groq", "Qwen Embeddings", "Tavily API", "RAG", "Vector DB", "Cross-encoders"],
  features: [
    "Advanced RAG pipeline with query expansion",
    "Hybrid retrieval (dense + sparse)",
    "Reciprocal Rank Fusion (RRF) for result fusion",
    "Neural reranking with cross-encoders",
    "Context compression and citation tracking",
    "Multi-tool agent capabilities",
    "Interactive Streamlit UI with citation view",
    "Modular architecture for easy customization"
  ],
  metrics: ["Production-ready", "Modular Design", "Advanced Retrieval", "Citation Tracking"],
  category: "NLP",
  featured: true,
  status: "Completed",
  githubUrl: "https://github.com/shivamsharmahere/RAG-Agentic-HybridSearch",
  demoUrl: null,
  images: ["/images/projects/rag-agent1.jpg", "/images/projects/rag-agent2.jpg"],
  tags: ["RAG", "AI", "LangChain", "Vector Search", "NLP"],
  teamSize: "Solo Project",
  duration: "1 week",
  challenges: [
    "Implementing hybrid search with optimal fusion",
    "Neural reranking optimization",
    "Modular architecture design",
    "Context compression for large documents"
  ],
  learnings: [
    "Advanced RAG architecture patterns",
    "Hybrid search implementation",
    "Cross-encoder reranking techniques",
    "Production-ready AI system design"
  ]
},
  {
    id: 2,
    title: "MoodLens: Emotion Detection using CNN and FER-2013",
    subtitle: "Real-time emotion recognition system",
    description: "Real-time emotion detection using CNNs trained on FER-2013 dataset with image augmentation and class imbalance handling.",
    longDescription: "Computer vision solution for emotion recognition that addresses dataset challenges through advanced preprocessing and augmentation techniques. The system can detect 7 different emotions in real-time with optimized CNN architecture for edge deployment.",
    technologies: ["CNN", "FER-2013", "Image Augmentation", "TensorFlow", "OpenCV", "Python", "Computer Vision"],
    features: [
      "Real-time webcam emotion detection",
      "7-class emotion classification", 
      "Data augmentation pipeline",
      "Class imbalance handling",
      "Model optimization for edge devices",
      "Confidence scoring"
    ],
    metrics: ["68% accuracy", "Real-time processing", "Class balance optimization", "Edge deployment ready"],
    category: "Computer Vision",
    featured: true,
    status: "Completed",
    githubUrl: "https://github.com/shivamsharmahere/MoodLens-Emotion-Detection-using-CNN-and-FER-2013.git",
    demoUrl: "https://moodlens-demo.com",
    images: ["/images/projects/moodlens1.jpg"],
    tags: ["CNN", "Emotion Detection", "Computer Vision", "Real-time"],
    teamSize: "Solo Project", 
    duration: "2 weeks",
    challenges: [
      "Dataset class imbalance",
      "Real-time performance optimization",
      "Model accuracy improvement"
    ],
    learnings: [
      "CNN architecture design",
      "Data augmentation techniques",
      "Real-time computer vision"
    ]
  },
{
  id: 3,
  title: "SecureVision: ML-Enhanced Home Security System",
  subtitle: "Intelligent surveillance with face recognition",
  description: "Advanced home security system using OpenCV and machine learning featuring face recognition authentication, real-time Excel logging, and unknown intruder detection with timestamp capture.",
  longDescription: "Next-generation home security system that elevates traditional surveillance through machine learning integration. The system combines OpenCV computer vision with face recognition algorithms to provide authenticated access control, automated logging, and comprehensive security monitoring with real-time data management and unknown threat detection.",
  technologies: ["Python", "OpenCV", "Machine Learning", "Face Recognition", "Excel Integration", "Real-time Processing", "Computer Vision", "Authentication"],
  features: [
    "Face recognition user authentication",
    "Real-time Excel spreadsheet logging",
    "Unknown face capture with timestamps",
    "Date and time tracking system",
    "Multi-user recognition database",
    "Automated security alerts",
    "Image archival system",
    "Live monitoring dashboard"
  ],
  metrics: ["3 core security features", "Real-time processing", "100% Autonomous", "Automated logging"],
  category: "Computer Vision",
  featured: true,
  status: "Completed",
  githubUrl: "https://github.com/shivamsharmahere/Home-Security-Security-System-using-OpenCV",
  demoUrl: null,
  images: ["/images/projects/security-system1.jpg", "/images/projects/security-system2.jpg"],
  tags: ["OpenCV", "Face Recognition", "Security", "Machine Learning"],
  teamSize: "Solo Project",
  duration: "1 months",
  challenges: [
    "Face recognition accuracy optimization",
    "Real-time Excel integration",
    "Unknown face detection reliability",
    "System performance under varying lighting"
  ],
  learnings: [
    "OpenCV face recognition implementation",
    "Real-time data logging techniques",
    "Security system architecture design",
    "ML model integration for authentication"
  ]
},
  {
    id: 4,
    title: "DrVision: AI-Powered Therapeutic Behavioral Analysis Pipeline",
    subtitle: "Comprehensive AI therapy analysis system",
    description: "AWS-deployed pipeline analyzing therapy sessions through facial expressions, vocal sentiment, eye movements, and posture patterns with 95% completion rate.",
    longDescription: "Comprehensive AI system that processes therapy sessions using computer vision and NLP to analyze patient behavior patterns. Features parallel processing for 60% time reduction and generates automated HTML reports for therapists. The system integrates multiple AI models for holistic analysis including emotion detection, sentiment analysis, and behavioral pattern recognition.",
    technologies: ["Computer Vision", "NLP", "AWS", "Parallel Processing", "HTML Reports", "TensorFlow", "OpenCV", "Python"],
    features: [
      "Real-time facial expression analysis",
      "Voice sentiment processing", 
      "Eye movement tracking",
      "Posture pattern recognition",
      "Automated report generation",
      "Parallel processing optimization"
    ],
    metrics: ["95% completion rate", "60% time reduction", "Automated reporting", "Multi-modal analysis"],
    category: "Computer Vision",
    featured: false,
    status: "Completed",
    githubUrl: "https://github.com/shivamsharmahere/drvision",
    demoUrl: "https://drvision-demo.com",
    liveUrl: "https://drvision.app",
    images: ["/images/projects/drvision1.jpg", "/images/projects/drvision2.jpg"],
    videoUrl: "https://youtube.com/watch?v=drvision-demo",
    tags: ["AI", "Healthcare", "Computer Vision", "AWS"],
    teamSize: "Solo Project",
    duration: "3 months",
    challenges: [
      "Multi-modal data synchronization",
      "Real-time processing optimization",
      "AWS deployment scaling"
    ],
    learnings: [
      "Advanced computer vision techniques",
      "AWS cloud architecture",
      "Real-time data processing"
    ]
  }
];

// ============ SKILLS CONFIGURATION ============
export const skillsConfig = {
  categories: {
    "AI/ML": {
      color: "blue",
      icon: "🧠",
      description: "Artificial Intelligence & Machine Learning",
      skills: [
        { name: "Python", level: 95, category: "Languages", experience: "3 years" },
        { name: "TensorFlow", level: 90, category: "Frameworks", experience: "2 years" },
        { name: "PyTorch", level: 88, category: "Frameworks", experience: "2 years" },
        { name: "LangChain", level: 92, category: "Frameworks", experience: "1 year" },
        { name: "Computer Vision", level: 90, category: "Specialization", experience: "2.5 years" },
        { name: "NLP", level: 85, category: "Specialization", experience: "2 years" },
        { name: "Deep Learning", level: 88, category: "Specialization", experience: "2 years" },
        { name: "LLAMA Models", level: 85, category: "LLMs", experience: "1 year" },
        { name: "OpenAI APIs", level: 90, category: "APIs", experience: "1.5 years" },
        { name: "Scikit-Learn", level: 85, category: "Libraries", experience: "2.5 years" }
      ]
    },
    "Programming": {
      color: "green",
      icon: "💻", 
      description: "Programming Languages & Web Technologies",
      skills: [
        { name: "JavaScript", level: 85, category: "Web", experience: "2 years" },
        { name: "TypeScript", level: 80, category: "Web", experience: "1 year" },
        { name: "React", level: 88, category: "Frontend", experience: "2 years" },
        { name: "Node.js", level: 75, category: "Backend", experience: "1.5 years" },
        { name: "Flask", level: 82, category: "Backend", experience: "2 years" },
        { name: "MySQL", level: 85, category: "Database", experience: "2 years" },
        { name: "MongoDB", level: 78, category: "Database", experience: "1 year" },
        { name: "HTML/CSS", level: 90, category: "Frontend", experience: "3 years" }
      ]
    },
    "Cloud & DevOps": {
      color: "orange",
      icon: "🚀",
      description: "Cloud Platforms & Development Operations", 
      skills: [
        { name: "AWS Lambda", level: 88, category: "Serverless", experience: "1.5 years" },
        { name: "AWS EC2", level: 85, category: "Compute", experience: "1.5 years" },
        { name: "AWS S3", level: 80, category: "Storage", experience: "1.5 years" },
        { name: "Docker", level: 75, category: "Containerization", experience: "1 year" },
        { name: "CI/CD", level: 80, category: "Automation", experience: "1 year" },
        { name: "Git", level: 90, category: "Version Control", experience: "3 years" },
        { name: "GitHub Actions", level: 75, category: "Automation", experience: "1 year" }
      ]
    },
    "Data & Analytics": {
      color: "purple", 
      icon: "📊",
      description: "Data Science & Analytics Tools",
      skills: [
        { name: "Pandas", level: 90, category: "Data Manipulation", experience: "2.5 years" },
        { name: "NumPy", level: 88, category: "Scientific Computing", experience: "2.5 years" },
        { name: "Matplotlib", level: 85, category: "Visualization", experience: "2 years" },
        { name: "Seaborn", level: 82, category: "Visualization", experience: "2 years" },
        { name: "Jupyter", level: 90, category: "Development", experience: "3 years" },
        { name: "Streamlit", level: 78, category: "Web Apps", experience: "1 year" },
        { name: "Plotly", level: 75, category: "Visualization", experience: "1 year" }
      ]
    },
    "Tools & Software": {
      color: "indigo",
      icon: "🛠️",
      description: "Development Tools & Software",
      skills: [
        { name: "VS Code", level: 95, category: "IDE", experience: "3 years" },
        { name: "OpenCV", level: 85, category: "Computer Vision", experience: "2 years" },
        { name: "Postman", level: 80, category: "API Testing", experience: "1.5 years" },
        { name: "Figma", level: 70, category: "Design", experience: "1 year" },
        { name: "Notion", level: 85, category: "Productivity", experience: "2 years" },
        { name: "Slack", level: 80, category: "Communication", experience: "2 years" }
      ]
    }
  }
};

// ============ EDUCATION SECTION ============
export const educationData = {
  degree: "B.Tech in Computer Science & Engineering",
  specialization: "AI/ML Specialization",
  university: "Suresh Gyan Vihar University",
  universityShort: "SGVU",
  location: "Jaipur, Rajasthan",
  period: "2022 - 2026",
  expectedGraduation: "May 2026",
  status: "Pursuing (Final Year)",
  gpa: "8.5/10",
  relevantCoursework: [
    "Machine Learning & Deep Learning",
    "Computer Vision & Image Processing", 
    "Natural Language Processing",
    "Data Structures & Algorithms",
    "Database Management Systems",
    "Cloud Computing & AWS",
    "Software Engineering",
    "Web Development"
  ],
  achievements: [
    "Dean's List for 3 consecutive semesters",
    "Led AI/ML club as Vice President",
    "Published research paper on emotion recognition",
    "Winner of Inter-college AI hackathon"
  ],
  projects: [
    "Final Year Project: Multi-modal AI therapy analysis system",
    "Semester Project: Real-time emotion detection system",
    "Research Project: NLP-based sentiment analysis for healthcare"
  ]
};

// ============ ACHIEVEMENTS & METRICS ============
export const achievementsData = [
  { 
    text: "Uptime for chatbot infrastructure in production", 
    metric: "99%",
    icon: "⚡",
    category: "Performance"
  },
  { 
    text: "Increased user engagement in mood analysis pipeline", 
    metric: "40%",
    icon: "📈", 
    category: "Impact"
  },
  { 
    text: "Reduced manual logging time in security system", 
    metric: "70%",
    icon: "⏱️",
    category: "Efficiency"
  },
  { 
    text: "Analysis completion rate in DrVision project", 
    metric: "95%",
    icon: "🎯",
    category: "Accuracy"
  },
  { 
    text: "Processing time reduction through parallel computing", 
    metric: "60%",
    icon: "🚀",
    category: "Optimization"
  },
  { 
    text: "Real-time emotion classification accuracy on FER-2013", 
    metric: "68%",
    icon: "🧠",
    category: "AI/ML"
  },
  {
    text: "Daily requests handled by deployed AI systems",
    metric: "1K+",
    icon: "📊",
    category: "Scale"
  },
  {
    text: "Successful AI/ML projects completed",
    metric: "15+", 
    icon: "✅",
    category: "Portfolio"
  }
];

// ============ TESTIMONIALS SECTION ============
export const testimonialsData = [
  {
    id: 1,
    name: "Dr. Rajesh Kumar",
    role: "Senior AI Researcher",
    company: "Jan Elaaj",
    companyUrl: "https://janelaaj.com",
    text: "Shivam's work on our chatbot infrastructure has been exceptional. His ability to integrate complex AI models while maintaining production-grade reliability is remarkable. The 99% uptime achievement speaks volumes about his technical expertise.",
    rating: 5,
    avatar: "/images/testimonials/rajesh.jpg",
    linkedin: "https://linkedin.com/in/rajeshkumar",
    date: "March 2025",
    project: "AI Chatbot Infrastructure"
  },
  {
    id: 2,
    name: "Priya Mehta",
    role: "Data Science Lead", 
    company: "Netparam",
    companyUrl: "https://netparam.com",
    text: "Working with Shivam on the security surveillance system was a great experience. His technical skills in computer vision and problem-solving approach are outstanding. He delivered beyond expectations.",
    rating: 5,
    avatar: "/images/testimonials/priya.jpg",
    linkedin: "https://linkedin.com/in/priyamehta",
    date: "July 2024",
    project: "Security Surveillance System"
  },
  {
    id: 3,
    name: "Prof. Anand Sharma",
    role: "AI/ML Professor",
    company: "SGVU",
    text: "Shivam is one of the most dedicated students I've mentored. His grasp of AI concepts and practical implementation skills are impressive. His final year project showcases advanced understanding of multi-modal AI systems.",
    rating: 5,
    avatar: "/images/testimonials/anand.jpg",
    date: "February 2025",
    project: "Academic Guidance"
  }
];

// ============ BLOG/ARTICLES SECTION (Future) ============
export const blogData = [
  {
    id: 1,
    title: "Building Production-Ready AI Chatbots with LLAMA 3.3",
    excerpt: "A comprehensive guide to implementing scalable chatbot infrastructure with modern AI models",
    date: "2025-03-15",
    readTime: "8 min read",
    tags: ["AI", "Chatbots", "LLAMA", "Production"],
    featured: true,
    published: false // Set to true when ready
  },
  {
    id: 2,
    title: "Computer Vision for Healthcare: Lessons from DrVision",
    excerpt: "Insights from building a multi-modal AI system for therapeutic behavioral analysis",
    date: "2025-02-28",
    readTime: "12 min read", 
    tags: ["Computer Vision", "Healthcare", "AI", "AWS"],
    featured: true,
    published: false
  }
];

// ============ QUICK ADD FUNCTIONS ============
export const quickAdd = {
  // Add a new skill easily
  addSkill: (category, name, level, experience = "1 year") => {
    if (skillsConfig.categories[category]) {
      skillsConfig.categories[category].skills.push({ 
        name, 
        level, 
        category, 
        experience 
      });
    }
  },

  // Add a new project
  addProject: (projectData) => {
    const newProject = {
      id: projectsData.length + 1,
      featured: false,
      status: "Completed",
      ...projectData
    };
    projectsData.push(newProject);
  },

  // Add a new experience
  addExperience: (experienceData) => {
    const newExperience = {
      id: experienceData.length + 1,
      ...experienceData
    };
    experienceData.push(newExperience);
  },

  // Add a new social link
  addSocialLink: (platform, url) => {
    siteConfig.socialLinks[platform] = url;
  },

  // Add a new achievement
  addAchievement: (text, metric, icon = "🎯", category = "General") => {
    achievementsData.push({ text, metric, icon, category });
  },

  // Add a new testimonial
  addTestimonial: (testimonialData) => {
    const newTestimonial = {
      id: testimonialsData.length + 1,
      rating: 5,
      date: new Date().toLocaleDateString(),
      ...testimonialData
    };
    testimonialsData.push(newTestimonial);
  }
};

// ============ EXPORT EVERYTHING ============
export default {
  siteConfig,
  navbarConfig,
  personalInfo,
  experienceData,
  projectsData,
  skillsConfig,
  educationData,
  achievementsData,
  testimonialsData,
  blogData,
  quickAdd
};