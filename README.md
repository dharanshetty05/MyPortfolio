# My Portfolio Website

A modern, responsive portfolio website built with React and Tailwind CSS, showcasing my skills, projects, and professional experience.

## 🚀 **Live Demo**

[View Portfolio](https://dharanshetty05.github.io/MyPortfolio)

## ✨ **Features**

### **🎨 Modern Design**
- **Glassmorphism Effects**: Transparent navbar with backdrop blur
- **Gradient Backgrounds**: Subtle gradients for visual depth
- **Smooth Animations**: Custom CSS animations and transitions
- **Responsive Design**: Mobile-first approach with desktop enhancements

### **📱 Responsive Layout**
- **Mobile-First**: Optimized for mobile devices
- **Tablet Support**: Adaptive layout for tablets
- **Desktop Experience**: Enhanced hover effects and animations
- **Touch-Friendly**: Proper touch targets and spacing

### **🎭 Interactive Elements**
- **Hover Effects**: Cards lift and shadows increase on hover
- **Smooth Transitions**: 500ms duration for all interactions
- **Staggered Animations**: Progressive loading of components
- **Micro-interactions**: Subtle scale and color changes

### **📋 Sections**
- **Hero**: Introduction with call-to-action buttons
- **About**: Personal story and key highlights
- **Projects**: Showcase of technical projects with GitHub links
- **Skills**: Interactive skills with proficiency levels
- **Education**: Timeline-based education history
- **Experience**: Professional experience with technology stacks
- **Contact**: Multiple ways to get in touch

## 🛠 **Tech Stack**

### **Frontend**
- **React 18**: Modern React with hooks and functional components
- **Tailwind CSS**: Utility-first CSS framework
- **React Router**: Client-side routing
- **React Icons**: Icon library for visual elements

### **Styling & Design**
- **Custom Animations**: CSS keyframes and transitions
- **Google Fonts**: Inter, Poppins, and JetBrains Mono
- **Color System**: Semantic color palette with gradients
- **Responsive Grid**: CSS Grid and Flexbox layouts

### **Development Tools**
- **Vite**: Fast build tool and development server
- **PostCSS**: CSS processing
- **ESLint**: Code linting (if configured)

## 🎨 **Design System**

### **Color Palette**
```css
Primary Colors: Blue gradient (#3b82f6 to #2563eb)
Accent Colors: Purple gradient (#d946ef to #c026d3)
Neutral Colors: Gray scale (#fafafa to #171717)
```

### **Typography**
- **Display Font**: Poppins (headings)
- **Body Font**: Inter (content)
- **Mono Font**: JetBrains Mono (code)

### **Spacing**
- **8px Grid System**: Consistent spacing throughout
- **Responsive Padding**: Adaptive padding for different screen sizes
- **Component Gaps**: Proper spacing between elements

## 📁 **Project Structure**

```
react-tailwind-portfolio/
├── public/
│   ├── DHS_Resume.pdf
│   └── favicon.ico
├── src/
│   ├── assets/
│   │   ├── profile.jpg
│   │   └── techie.jpg
│   ├── components/
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Education.jsx
│   │   ├── Experience.jsx
│   │   ├── Hero.jsx
│   │   ├── Navbar.jsx
│   │   ├── Projects.jsx
│   │   └── Skills.jsx
│   ├── pages/
│   │   └── Home.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.mjs
└── README.md
```

## 🚀 **Getting Started**

### **Prerequisites**
- Node.js (version 16 or higher)
- npm or yarn package manager

### **Installation**

1. **Clone the repository**
   ```bash
   git clone https://github.com/dharanshetty05/react-tailwind-portfolio.git
   cd react-tailwind-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

### **Build for Production**

```bash
npm run build
```

The built files will be in the `dist/` directory.

## 📱 **Responsive Design**

### **Breakpoints**
- **Mobile**: `< 768px` - Single column layout
- **Tablet**: `768px - 1024px` - Adaptive grid layouts
- **Desktop**: `> 1024px` - Multi-column layouts with hover effects

### **Mobile Features**
- **Touch-Friendly**: Large touch targets
- **Readable Text**: Optimized font sizes
- **Stacked Layout**: Single column for better readability
- **Simplified Navigation**: Hamburger menu

### **Desktop Features**
- **Hover Effects**: Enhanced interactions
- **Multi-Column**: Side-by-side content
- **Timeline Layout**: Alternating timeline for education/experience
- **Enhanced Animations**: More complex hover states

## 🎭 **Animations & Interactions**

### **Custom Animations**
```css
fade-in: 0.6s ease-in-out
slide-up: 0.8s ease-out
slide-down: 0.8s ease-out
scale-in: 0.5s ease-out
float: 3s ease-in-out infinite
glow: 2s ease-in-out infinite alternate
```

### **Hover Effects**
- **Card Lift**: `transform hover:-translate-y-2`
- **Shadow Enhancement**: `hover:shadow-2xl`
- **Scale Effects**: `group-hover:scale-110`
- **Color Transitions**: Smooth color changes

### **Performance**
- **Hardware Acceleration**: Transform-based animations
- **Smooth Transitions**: 500ms duration
- **Staggered Loading**: Progressive reveals

## 🎨 **Component Details**

### **Navbar**
- **Glassmorphism**: Transparent background with blur
- **Scroll Detection**: Changes appearance on scroll
- **Mobile Menu**: Hamburger menu with smooth animations
- **Active States**: Visual indicators for current page

### **Hero Section**
- **Background Elements**: Floating gradient orbs
- **Gradient Text**: Eye-catching typography
- **CTA Buttons**: Prominent call-to-action
- **Social Links**: Circular icon buttons

### **Projects**
- **Card Layout**: Modern card design with hover effects
- **Technology Tags**: Color-coded tech stacks
- **GitHub Links**: Direct links to source code
- **Category Labels**: Project type indicators

### **Skills**
- **Interactive Tabs**: Filterable skill categories
- **Proficiency Bars**: Visual skill levels
- **Icon Design**: Gradient backgrounds for icons
- **Hover Effects**: Scale and color transitions

### **Education & Experience**
- **Timeline Design**: Alternating left/right layout
- **Color Coding**: Different colors for different types
- **Achievement Tags**: Key highlights as pills
- **Responsive Timeline**: Stacks on mobile

### **Contact**
- **Two-Column Layout**: Contact info and social links
- **Contact Cards**: Individual cards for each method
- **Social Media**: Large, interactive cards
- **CTA Button**: Prominent email button

## 🔧 **Customization**

### **Colors**
Edit `tailwind.config.js` to modify the color palette:
```javascript
colors: {
  primary: { /* blue gradient */ },
  accent: { /* purple gradient */ },
  neutral: { /* gray scale */ }
}
```

### **Content**
Update component data arrays to modify content:
- **Projects**: Edit `projects` array in `Projects.jsx`
- **Skills**: Modify `skills` object in `Skills.jsx`
- **Education**: Update `educationData` in `Education.jsx`
- **Experience**: Change `workData` in `Experience.jsx`

### **Styling**
- **Typography**: Modify font families in Tailwind config
- **Spacing**: Adjust padding and margins
- **Animations**: Customize animation durations and effects

## 📊 **Performance**

### **Optimizations**
- **CSS Purge**: Tailwind removes unused styles
- **Image Optimization**: Proper sizing and formats
- **Font Loading**: Preconnect to Google Fonts
- **Code Splitting**: React Router for lazy loading

### **Best Practices**
- **Semantic HTML**: Proper heading hierarchy
- **Accessibility**: ARIA labels and focus states
- **SEO**: Meta tags and structured data
- **Mobile-First**: Progressive enhancement

## 🚀 **Deployment**

### **Netlify**
1. Connect GitHub repository
2. Build command: `npm run build`
3. Publish directory: `dist`

### **Vercel**
1. Import GitHub repository
2. Framework preset: Vite
3. Build command: `npm run build`

### **GitHub Pages**
1. Add `gh-pages` package
2. Update `package.json` scripts
3. Deploy with `npm run deploy`

## 🤝 **Contributing**

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 **License**

This project is open source and available under the [MIT License](LICENSE).

## 📞 **Contact**

- **Email**: dharanshetty05@gmail.com
- **LinkedIn**: [Dharan Shetty](https://www.linkedin.com/in/dharan-shetty)
- **GitHub**: [dharanshetty05](https://github.com/dharanshetty05)

---

**Built with ❤️ using React & Tailwind CSS**
