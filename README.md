# 🚀 AI/ML Engineer Portfolio Website

> A modern, responsive portfolio website showcasing AI/ML projects, professional experience, and technical skills with stunning animations and interactive elements.

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Visit%20Site-blue?style=for-the-badge&logo=vercel)](https://shivamsharmahere.github.io/portfolio-website)
[![GitHub Repo](https://img.shields.io/badge/GitHub-Repository-black?style=for-the-badge&logo=github)](https://github.com/shivamsharmahere/portfolio-website)
[![React](https://img.shields.io/badge/React-18.0+-61DAFB?style=for-the-badge&logo=react)](https://reactjs.org/)
[![FastAPI](https://img.shields.io/badge/FastAPI-Backend-009688?style=for-the-badge&logo=fastapi)](https://fastapi.tiangolo.com/)

## 📸 Preview

![Portfolio Preview](https://via.placeholder.com/1200x600/1a1a1a/ffffff?text=Portfolio+Website+Preview)

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
- Python 3.10+
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

## 🔧 Customization

### **Portfolio Content**
Edit `frontend/src/data/mock.js` to customize:
- Personal information and contact details
- Skills and technologies
- Work experience and projects
- Testimonials and achievements

### **Styling**
- **Colors**: Modify `tailwind.config.js` for custom color scheme
- **Animations**: Adjust Framer Motion variants in components
- **Layout**: Update component structures for different layouts

### **Features**
- **Add Sections**: Create new components following existing patterns
- **Modify Animations**: Customize Framer Motion animations
- **Update Content**: Replace placeholder content with your information

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

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **React Team** - For the amazing React library
- **Tailwind CSS** - For the utility-first CSS framework
- **Framer Motion** - For smooth animations
- **Lucide Icons** - For beautiful icons
- **FastAPI** - For the high-performance backend framework

## 📞 Contact

**Shivam Sharma** - AI/ML Engineer

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-blue?style=for-the-badge&logo=linkedin)](https://linkedin.com/in/shivamsharmahere)
[![GitHub](https://img.shields.io/badge/GitHub-Follow-black?style=for-the-badge&logo=github)](https://github.com/shivamsharmahere)
[![Email](https://img.shields.io/badge/Email-Contact-red?style=for-the-badge&logo=gmail)](mailto:shivam.sharma@example.com)

---

⭐ **If you like this project, please give it a star!** ⭐

Made with ❤️ by Shivam Sharma
