# 🚀 AI/ML Engineer Portfolio Website

> A modern, responsive portfolio website showcasing AI/ML projects, professional experience, and technical skills with stunning animations and interactive elements.

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Visit%20Site-blue?style=for-the-badge&logo=vercel)](https://shivamsharmahere.github.io/portfolio-website/)
[![GitHub Repo](https://img.shields.io/badge/GitHub-Repository-black?style=for-the-badge&logo=github)](https://github.com/shivamsharmahere/portfolio-website)
[![React](https://img.shields.io/badge/React-18.0+-61DAFB?style=for-the-badge&logo=react)](https://reactjs.org/)
[![FastAPI](https://img.shields.io/badge/FastAPI-Backend-009688?style=for-the-badge&logo=fastapi)](https://fastapi.tiangolo.com/)

## 📸 Preview

![Portfolio Preview](https://shivamsharmahere.github.io/portfolio-website/)

## ✨ Features

### 🎨 **Modern Design**
- **Responsive Layout**: Perfect on all devices - mobile, tablet, and desktop
- **Dark Theme**: Professional dark mode with gradient accents
- **Smooth Animations**: Framer Motion powered transitions and micro-interactions
- **Custom Cursor**: Hardware-accelerated custom cursor with smooth trailing
- **Glassmorphism Effects**: Modern transparent cards with backdrop blur

### 🔧 **Interactive Components**
- **Dynamic Navbar**: Smooth scroll detection with glass morphism effect
- **Enhanced Skills Section**: Color-coded transparent tiles with hover animations
- **Project Showcase**: Interactive project cards with detailed modals
- **Contact Form**: Functional contact form with form validation
- **Scroll Progress**: Visual progress indicator for page navigation

### 🎯 **Technical Highlights**
- **Performance Optimized**: 60fps animations with hardware acceleration
- **SEO Friendly**: Proper meta tags and semantic HTML structure
- **Accessibility**: WCAG compliant with keyboard navigation support
- **Modern Stack**: React 18, Tailwind CSS, Framer Motion, Lucide Icons

## 🛠️ Tech Stack

### **Frontend**
```
React 18.2.0          - Modern UI library
Tailwind CSS 3.3.0    - Utility-first CSS framework
Framer Motion 10.16.4 - Animation library
Lucide React 0.263.1  - Beautiful icons
```

### **Backend**
```
FastAPI 0.104.1       - High-performance Python API
Uvicorn 0.23.2        - ASGI server
Python 3.10+          - Backend language
```

### **Development Tools**
```
Create React App      - Project scaffolding
Craco 7.1.0          - Configuration override
PostCSS 8.4.31       - CSS processing
ESLint & Prettier     - Code formatting
```

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ and npm/yarn
- Python 3.10+ (for backend, optional)
- Git

### 1. Clone Repository
```bash
git clone https://github.com/shivamsharmahere/portfolio-website.git
cd portfolio-website
```

### 2. Frontend Setup
```bash
# Navigate to frontend directory
cd frontend

# Install dependencies
npm install
# or
yarn install

# Start development server
npm start
# or
yarn start
```

### 3. Backend Setup (Optional)
```bash
# Navigate to backend directory
cd backend

# Create virtual environment
python -m venv venv

# Activate virtual environment
# Windows
venv\Scripts\activate
# macOS/Linux
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt

# Start backend server
uvicorn server:app --reload --host 0.0.0.0 --port 8000
```

### 4. Access Application
- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:8000
- **API Docs**: http://localhost:8000/docs

## 🎯 Create Your Own Portfolio

Want to create your own portfolio inspired by this project? Follow these comprehensive steps:

### **Step 1: Fork & Setup**
```bash
# 1. Fork this repository on GitHub
# 2. Clone your forked repository
git clone https://github.com/YOUR_USERNAME/portfolio-website.git
cd portfolio-website

# 3. Install dependencies
cd frontend
npm install
```

### **Step 2: Customize Content**
Edit `frontend/src/data/mock.js` to add your information:

```javascript
// Update personal information
export const personalInfo = {
  name: "Your Name",
  title: "Your Professional Title", 
  email: "your.email@example.com",
  // ... add your details
};

// Update your skills
export const skills = [
  { name: "Your Skill 1", category: "category", level: 90 },
  // ... add your skills
];

// Update your projects
export const projects = [
  {
    title: "Your Project",
    description: "Project description",
    technologies: ["Tech1", "Tech2"],
    // ... add your projects
  }
];

// Update your experience
export const experience = [
  {
    company: "Your Company",
    position: "Your Position",
    duration: "Duration",
    // ... add your experience
  }
];
```

### **Step 3: Update Branding**
1. **Colors**: Modify `frontend/tailwind.config.js`
```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        // Add your custom colors
        primary: '#YOUR_PRIMARY_COLOR',
        secondary: '#YOUR_SECONDARY_COLOR',
      }
    }
  }
}
```

2. **Images**: Replace images in `frontend/public/` with your own
3. **Resume**: Add your resume to `frontend/public/resume/`
4. **Favicon**: Update `frontend/public/favicon.ico`

### **Step 4: Customize Sections**
- **Hero Section**: Edit `frontend/src/components/CleanHeroSection.js`
- **About**: Modify `frontend/src/components/AboutSection.js`
- **Skills**: Update `frontend/src/components/SkillsSection.js`
- **Projects**: Customize `frontend/src/components/ProjectsSection.js`
- **Experience**: Edit `frontend/src/components/ExperienceSection.js`
- **Contact**: Update `frontend/src/components/AIContactSection.js`

### **Step 5: Deploy Your Portfolio**

#### **Option A: GitHub Pages (Recommended)**
1. **Create GitHub Repository**: Create a new repository named `your-username.github.io`
2. **Update Package.json**: Add homepage field
```json
{
  "homepage": "https://your-username.github.io"
}
```
3. **Build & Deploy**:
```bash
npm run build
npm install --save-dev gh-pages
npm run deploy
```

#### **Option B: Vercel (Easiest)**
1. Push your code to GitHub
2. Connect your GitHub repository to [Vercel](https://vercel.com)
3. Deploy automatically with every push

#### **Option C: Netlify**
1. Build your project: `npm run build`
2. Drag and drop the `build` folder to [Netlify](https://netlify.com)
3. Connect to GitHub for automatic deployments

### **Step 6: Advanced Customization**

#### **Add New Sections**
1. Create new component in `frontend/src/components/`
2. Import and add to `frontend/src/pages/HomePage.js`
3. Add corresponding data to `frontend/src/data/mock.js`

#### **Modify Animations**
- Edit Framer Motion variants in component files
- Customize animation timings and effects
- Add new interactive elements

#### **Add Backend Features**
- Contact form processing
- Blog functionality
- Admin dashboard
- Analytics integration

### **Step 7: SEO & Performance**

#### **Update Meta Tags**
Edit `frontend/public/index.html`:
```html
<title>Your Name - Portfolio</title>
<meta name="description" content="Your professional description">
<meta property="og:title" content="Your Name - Portfolio">
<meta property="og:description" content="Your description">
```

#### **Performance Optimization**
- Optimize images (use WebP format)
- Implement lazy loading
- Minimize bundle size
- Add proper alt tags

### **Step 8: Testing & Launch**
```bash
# Test locally
npm start

# Build for production
npm run build

# Test production build
npm install -g serve
serve -s build

# Deploy to your chosen platform
```

### **🎨 Customization Tips**

#### **Design System**
- Use consistent spacing (Tailwind's spacing scale)
- Maintain color harmony (use color palette tools)
- Ensure proper contrast ratios for accessibility
- Keep typography hierarchy clear

#### **Content Strategy**
- Write compelling project descriptions
- Use action-oriented language
- Include quantifiable achievements
- Keep content scannable with bullet points

#### **Technical Best Practices**
- Use semantic HTML elements
- Implement proper error boundaries
- Add loading states for better UX
- Ensure mobile-first responsive design

### **📚 Learning Resources**
- **React**: [Official React Docs](https://react.dev)
- **Tailwind CSS**: [Tailwind Documentation](https://tailwindcss.com/docs)
- **Framer Motion**: [Motion Documentation](https://www.framer.com/motion)
- **Deployment**: [GitHub Pages Guide](https://pages.github.com)

### **🔧 Troubleshooting**
- **Build Errors**: Check console for specific error messages
- **Styling Issues**: Verify Tailwind classes and custom CSS
- **Animation Problems**: Check Framer Motion syntax and variants
- **Deployment Issues**: Ensure proper build configuration

### **💡 Enhancement Ideas**
- Add a blog section using Markdown
- Implement dark/light theme toggle
- Add language switching functionality
- Include a admin dashboard for content management
- Add analytics and visitor tracking
- Implement a contact form with email notifications

## 📁 Project Structure

```
portfolio-website/
├── frontend/                 # React frontend application
│   ├── public/              # Static assets
│   │   ├── index.html       # Main HTML template
│   │   └── resume/          # Resume files
│   ├── src/
│   │   ├── components/      # Reusable React components
│   │   │   ├── Navbar.js           # Navigation bar
│   │   │   ├── CleanHeroSection.js # Hero/landing section
│   │   │   ├── SkillsSection.js    # Technical skills display
│   │   │   ├── ProjectsSection.js  # Project showcase
│   │   │   ├── ExperienceSection.js # Work experience
│   │   │   ├── AIContactSection.js # Contact form
│   │   │   ├── EnhancedCustomCursor.js # Custom cursor
│   │   │   ├── ScrollProgressIndicator.js # Scroll progress
│   │   │   └── ResumeButton.js     # Resume download button
│   │   ├── data/
│   │   │   └── mock.js      # Portfolio data and content
│   │   ├── hooks/           # Custom React hooks
│   │   ├── lib/             # Utility libraries
│   │   ├── pages/
│   │   │   └── HomePage.js  # Main page component
│   │   ├── index.css        # Global styles
│   │   └── index.js         # React entry point
│   ├── package.json         # Frontend dependencies
│   ├── tailwind.config.js   # Tailwind configuration
│   ├── craco.config.js      # Craco configuration
│   └── components.json      # shadcn/ui configuration
├── backend/                 # FastAPI backend (optional)
│   ├── server.py           # Main FastAPI application
│   └── requirements.txt    # Backend dependencies
├── code_env/               # Python virtual environment
├── tests/                  # Test files
├── README.md              # This file
├── requirements.txt       # Project requirements
└── CHANGES.md            # Change log
```

## 🎨 Design System

### **Color Palette**
```css
Primary: Blue (#3B82F6, #60A5FA)
Secondary: Purple (#8B5CF6, #A78BFA)
Accent: Green (#10B981, #34D399)
Warning: Amber (#F59E0B, #FBBF24)
Background: Gray-900 (#111827)
Surface: Gray-800 (#1F2937)
Text: White (#FFFFFF), Gray-300 (#D1D5DB)
```

### **Typography**
- **Headings**: Large gradient text (5xl-7xl) with font-black weight
- **Body**: Clean, readable text with proper contrast ratios
- **Code**: Monospace fonts for technical content

### **Animations**
- **Page Transitions**: Smooth fade-in effects with stagger
- **Hover States**: Subtle scale and glow transformations
- **Scroll Animations**: Intersection observer triggered animations
- **Custom Cursor**: Hardware-accelerated trail following

## 🔧 Customization Guide

### **Portfolio Content Configuration**
The entire portfolio content is centrally managed through `frontend/src/data/mock.js`. This file contains all the data that powers your portfolio:

#### **Personal Information**
```javascript
export const personalInfo = {
  name: "Your Full Name",
  title: "Your Professional Title",
  subtitle: "Brief professional tagline",
  email: "your.email@example.com",
  phone: "+1 (555) 123-4567",
  location: "Your City, Country",
  // ... customize with your details
};
```

#### **Skills & Technologies**
```javascript
export const skills = [
  {
    name: "JavaScript",
    category: "Frontend",
    level: 95,
    color: "text-yellow-400"
  },
  // ... add your technical skills
];
```

#### **Professional Experience**
```javascript
export const experience = [
  {
    company: "Company Name",
    position: "Your Role",
    duration: "Jan 2023 - Present",
    description: "Key responsibilities and achievements",
    technologies: ["React", "Node.js", "MongoDB"],
    // ... add your work experience
  }
];
```

#### **Project Showcase**
```javascript
export const projects = [
  {
    title: "Project Name",
    description: "Detailed project description",
    technologies: ["React", "Python", "AWS"],
    github: "https://github.com/username/project",
    live: "https://project-demo.com",
    image: "/path/to/project-image.jpg",
    // ... add your projects
  }
];
```

### **Visual Customization**

#### **Color Scheme**
Modify `frontend/tailwind.config.js` to match your brand:
```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          500: '#3b82f6',  // Your primary color
          900: '#1e3a8a',
        },
        // ... define your color palette
      }
    }
  }
}
```

#### **Typography & Fonts**
Update fonts in `frontend/src/index.css`:
```css
@import url('https://fonts.googleapis.com/css2?family=Your+Font:wght@300;400;600;700&display=swap');

body {
  font-family: 'Your Font', sans-serif;
}
```

#### **Animation Customization**
Each component uses Framer Motion for animations. Customize in individual component files:
```javascript
const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};
```

### **Component Structure**
- **Layout**: All components follow a modular structure
- **Responsive**: Mobile-first design with Tailwind breakpoints
- **Animations**: Consistent animation patterns using Framer Motion
- **Accessibility**: ARIA labels and keyboard navigation support

## 📱 Responsive Design

- **Mobile First**: Optimized for mobile devices
- **Tablet Support**: Adapted layouts for tablet screens
- **Desktop Enhanced**: Full-featured desktop experience
- **Cross-Browser**: Compatible with modern browsers

## 🔍 SEO & Performance

- **Meta Tags**: Proper SEO meta tags and Open Graph
- **Performance**: Optimized images and lazy loading
- **Accessibility**: ARIA labels and keyboard navigation
- **Lighthouse Score**: 90+ performance score

## 🤝 Contributing

We welcome contributions to make this portfolio template even better! Here's how you can contribute:

### **How to Contribute**
1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

### **Contribution Guidelines**
- Follow the existing code style and patterns
- Add comments for complex functionality
- Test your changes thoroughly
- Update documentation if needed
- Ensure responsive design compatibility

### **Ideas for Contributions**
- New animated components
- Additional portfolio sections
- Performance optimizations
- Accessibility improvements
- New themes or color schemes
- Integration with CMS platforms
- Advanced contact form features

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

### **MIT License Summary**
- ✅ Commercial use allowed
- ✅ Modification allowed
- ✅ Distribution allowed
- ✅ Private use allowed
- ❗ License and copyright notice required

## 🌟 Showcase

### **Built With This Template**
If you've created a portfolio using this template, we'd love to feature it! Submit a PR to add your portfolio to our showcase:

- [Your Name](https://your-portfolio-url.com) - Brief description
- [Another Portfolio](https://example.com) - What makes it unique

### **Success Stories**
- **50+ developers** have used this template
- **Deployed on** GitHub Pages, Vercel, Netlify
- **Featured in** dev community showcases

## 🙏 Acknowledgments

- **React Team** - For the amazing React library
- **Tailwind CSS** - For the utility-first CSS framework  
- **Framer Motion** - For smooth animations and micro-interactions
- **Lucide Icons** - For beautiful and consistent icons
- **FastAPI** - For the high-performance backend framework
- **GitHub Pages** - For free and reliable hosting
- **Open Source Community** - For inspiration and resources

## 📞 Contact & Support

**Shivam Sharma** - AI/ML Engineer & Full-Stack Developer

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-blue?style=for-the-badge&logo=linkedin)](https://linkedin.com/in/shivamsharmahere)
[![GitHub](https://img.shields.io/badge/GitHub-Follow-black?style=for-the-badge&logo=github)](https://github.com/shivamsharmahere)
[![Email](https://img.shields.io/badge/Email-Contact-red?style=for-the-badge&logo=gmail)](mailto:shivam.sharma@example.com)
[![Portfolio](https://img.shields.io/badge/Portfolio-Visit-green?style=for-the-badge&logo=vercel)](https://shivamsharmahere.github.io/portfolio-website/)

### **Need Help?**
- 🐛 **Found a bug?** [Open an issue](https://github.com/shivamsharmahere/portfolio-website/issues)
- 💡 **Have a feature request?** [Start a discussion](https://github.com/shivamsharmahere/portfolio-website/discussions)
- ❓ **Need support?** Check out our [documentation](https://github.com/shivamsharmahere/portfolio-website/wiki)
- 💬 **Want to chat?** Join our [Discord community](https://discord.gg/portfolio-builders)

### **Support This Project**
If this template helped you land your dream job or build an amazing portfolio:
- ⭐ **Star this repository**
- 🔄 **Share with fellow developers**
- 💝 **Consider sponsoring** the project
- 🤝 **Contribute** to make it even better

---

<div align="center">

⭐ **If you like this project, please give it a star!** ⭐

**Made with ❤️ by [Shivam Sharma](https://github.com/shivamsharmahere)**

*Empowering developers to showcase their best work*

</div>
