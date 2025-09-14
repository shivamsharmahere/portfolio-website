export const portfolioData = {
  personalInfo: {
    name: "Shivam Sharma",
    title: "AI/ML Engineer",
    location: "Jaipur, India",
    email: "shivamsharma.aiml@gmail.com",
    phone: "+91 9145898381",
    linkedin: "https://linkedin.com/in/shivam-sharma-ai",
    github: "https://github.com/shivam-sharma-ai",
    summary: "Results-driven AI/ML engineer with expertise in Computer Vision, NLP, machine learning, and deep learning. Experienced in developing autonomous AI systems and generative AI solutions, including LLM implementations, model training pipelines, and evaluation frameworks."
  },

  experience: [
    {
      id: 1,
      title: "AI Engineer",
      company: "Jan Elaaj",
      location: "Delhi",
      period: "Mar 2025 - Present",
      type: "Full-time",
      achievements: [
        "Built production-grade chatbots using modular pipelines (MySQL, LLAMA 3.3 70B, BioBERT NER, Pinecone, Flask, NLP components)",
        "Engineered chatbot infrastructure compatible with AWS Lambda (99% uptime)",
        "Collaborated with IIT Guwahati on GenAI and Future Computing conferences"
      ],
      technologies: ["LLAMA 3.3", "BioBERT NER", "Pinecone", "Flask", "AWS Lambda", "MySQL"]
    },
    {
      id: 2,
      title: "AI/ML Developer Intern",
      company: "Jan Elaaj",
      location: "Delhi",
      period: "Dec 2024 - Mar 2025",
      type: "Internship",
      achievements: [
        "Developed a real-time mood analysis pipeline using multimodal inputs (images/voice)",
        "Combined fine-tuned CNN (VGG19) on FER-2013 (68% accuracy) and WhisperX for voice processing (90%+ accuracy)",
        "Integrated Gemini 1.5 for sentiment analysis and NLP prompt engineering (40% engagement increase)",
        "Deployed pipeline on AWS (EC2, Lambda, S3) with CI/CD (1k+ daily requests, 99.9% uptime)"
      ],
      technologies: ["VGG19", "FER-2013", "WhisperX", "Gemini 1.5", "AWS", "CI/CD"]
    },
    {
      id: 3,
      title: "Data Science Intern",
      company: "Netparam",
      location: "Jaipur",
      period: "June 2024 - July 2024",
      type: "Internship",
      achievements: [
        "Engineered a Home Security Surveillance System using Python and OpenCV, with face recognition (72% accuracy)",
        "Automated security logging using dynamic Excel reports (70% time reduction)"
      ],
      technologies: ["Python", "OpenCV", "Face Recognition", "Excel Automation"]
    }
  ],

  projects: [
    {
      id: 1,
      title: "DrVision: AI-Powered Therapeutic Behavioral Analysis Pipeline",
      description: "AWS-deployed pipeline analyzing therapy sessions through facial expressions, vocal sentiment, eye movements, and posture patterns with 95% completion rate.",
      longDescription: "Comprehensive AI system that processes therapy sessions using computer vision and NLP to analyze patient behavior patterns. Features parallel processing for 60% time reduction and generates automated HTML reports for therapists.",
      technologies: ["Computer Vision", "NLP", "AWS", "Parallel Processing", "HTML Reports"],
      metrics: ["95% completion rate", "60% time reduction", "Automated reporting"],
      category: "Computer Vision",
      featured: true,
      status: "Completed",
      githubUrl: "https://github.com/shivam-sharma-ai/drvision",
      demoUrl: "https://drvision-demo.com"
    },
    {
      id: 2,
      title: "PDF Q&A App with Langchain and Llama 3.1",
      description: "Retrieval augmented generation Q&A system for document analysis using LangChain, Ollama, and ChromaDB with scalable Flask API.",
      longDescription: "Advanced RAG system that enables intelligent document querying through natural language. Built with modern AI stack including vector databases and optimized for scalability.",
      technologies: ["LangChain", "Llama 3.1", "ChromaDB", "Flask", "Ollama", "RAG"],
      metrics: ["Scalable API", "Intuitive UI", "Document Analysis"],
      category: "NLP",
      featured: true,
      status: "Completed",
      githubUrl: "https://github.com/shivam-sharma-ai/pdf-qa-app",
      demoUrl: "https://pdf-qa-demo.com"
    },
    {
      id: 3,
      title: "MoodLens: Emotion Detection using CNN and FER-2013",
      description: "Real-time emotion detection using CNNs trained on FER-2013 dataset with image augmentation and class imbalance handling.",
      longDescription: "Computer vision solution for emotion recognition that addresses dataset challenges through advanced preprocessing and augmentation techniques.",
      technologies: ["CNN", "FER-2013", "Image Augmentation", "TensorFlow", "OpenCV"],
      metrics: ["68% accuracy", "Real-time processing", "Class balance optimization"],
      category: "Computer Vision",
      featured: false,
      status: "Completed",
      githubUrl: "https://github.com/shivam-sharma-ai/moodlens",
      demoUrl: "https://moodlens-demo.com"
    }
  ],

  skills: {
    languages: [
      { name: "Python", level: 95, category: "primary" },
      { name: "JavaScript", level: 80, category: "primary" },
      { name: "R", level: 70, category: "secondary" },
      { name: "MySQL", level: 85, category: "primary" }
    ],
    aiml: [
      { name: "TensorFlow", level: 90, category: "primary" },
      { name: "PyTorch", level: 88, category: "primary" },
      { name: "LangChain", level: 92, category: "primary" },
      { name: "Scikit-Learn", level: 85, category: "primary" },
      { name: "OpenAI APIs", level: 90, category: "primary" },
      { name: "LLAMA", level: 88, category: "primary" },
      { name: "BioBERT NER", level: 85, category: "secondary" },
      { name: "WhisperX", level: 80, category: "secondary" }
    ],
    devops: [
      { name: "AWS Lambda", level: 88, category: "primary" },
      { name: "AWS EC2", level: 85, category: "primary" },
      { name: "AWS S3", level: 80, category: "primary" },
      { name: "Docker", level: 75, category: "secondary" },
      { name: "CI/CD", level: 80, category: "secondary" }
    ],
    tools: [
      { name: "Pandas", level: 90, category: "primary" },
      { name: "NumPy", level: 88, category: "primary" },
      { name: "OpenCV", level: 85, category: "primary" },
      { name: "Flask", level: 82, category: "primary" },
      { name: "Streamlit", level: 78, category: "secondary" }
    ]
  },

  education: {
    degree: "B.Tech in Computer Science & Engineering",
    specialization: "AI/ML Specialization",
    university: "Suresh Gyan Vihar University",
    location: "Jaipur",
    period: "2022-2026",
    status: "Pursuing"
  },

  achievements: [
    { text: "99% uptime for chatbot infrastructure", metric: "99%" },
    { text: "Increased user engagement in mood analysis pipeline", metric: "40%" },
    { text: "Reduced manual logging time in security system", metric: "70%" },
    { text: "Analysis completion rate in DrVision project", metric: "95%" },
    { text: "Processing time reduction in DrVision", metric: "60%" },
    { text: "Real-time emotion classification accuracy", metric: "68%" }
  ],

  testimonials: [
    {
      id: 1,
      name: "Dr. Rajesh Kumar",
      role: "Senior AI Researcher",
      company: "Jan Elaaj",
      text: "Shivam's work on our chatbot infrastructure has been exceptional. His ability to integrate complex AI models while maintaining production-grade reliability is remarkable.",
      rating: 5
    },
    {
      id: 2,
      name: "Priya Mehta",
      role: "Data Science Lead",
      company: "Netparam",
      text: "Working with Shivam on the security surveillance system was a great experience. His technical skills and problem-solving approach are outstanding.",
      rating: 5
    }
  ]
};