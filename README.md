# Jack Ferreri - Resume Website

A modern, responsive personal resume website built with HTML, CSS, and JavaScript. Features a beautiful design with smooth animations, project showcase, and mobile-first responsive layout.

## 🚀 Features

- **Modern Design**: Clean, professional layout with gradient backgrounds and smooth animations
- **Responsive**: Mobile-first design that works perfectly on all devices
- **Interactive**: Smooth scrolling navigation, hover effects, and video modal functionality
- **Project Showcase**: Display your projects with images and video demos
- **Social Links**: Easy access to LinkedIn, GitHub, and email
- **Performance Optimized**: Fast loading with optimized images and smooth animations

## 📁 Project Structure

```
Jack-Resume-Website-Fall-2025/
├── index.html          # Main HTML file
├── styles.css          # CSS styles and animations
├── script.js           # JavaScript functionality
├── assets/             # Images and media files
│   ├── headshot.jpg    # Your profile photo
│   ├── project1.jpg    # Project 1 screenshot
│   ├── project2.jpg    # Project 2 screenshot
│   ├── project3.jpg    # Project 3 screenshot
│   ├── project1-demo.mp4  # Project 1 video demo
│   ├── project2-demo.mp4  # Project 2 video demo
│   └── project3-demo.mp4  # Project 3 video demo
└── README.md           # This file
```

## 🛠️ Setup Instructions

1. **Clone or Download** the project files to your local machine

2. **Add Your Content**:
   - Replace `assets/headshot.jpg` with your professional headshot
   - Add project screenshots to `assets/project1.jpg`, `assets/project2.jpg`, etc.
   - Add video demos to `assets/project1-demo.mp4`, etc. (optional)

3. **Customize Information**:
   - Update personal information in `index.html`
   - Modify project descriptions and links
   - Update social media links and contact information

4. **Test Locally**:
   - Open `index.html` in your web browser
   - Test on different devices and screen sizes

5. **Deploy**:
   - Upload to any web hosting service (GitHub Pages, Netlify, Vercel, etc.)

## 🎨 Customization Guide

### Personal Information
Edit the following sections in `index.html`:

```html
<!-- Update your name and title -->
<h1 class="hero-title">Hi, I'm <span class="highlight">Your Name</span></h1>
<p class="hero-subtitle">Your Title</p>

<!-- Update social links -->
<a href="https://linkedin.com/in/your-profile" target="_blank">
<a href="https://github.com/your-username" target="_blank">
<a href="mailto:your.email@example.com">
```

### Projects
Replace the project cards with your own:

```html
<div class="project-card">
    <div class="project-media">
        <img src="assets/your-project.jpg" alt="Your Project" class="project-image">
        <div class="project-overlay">
            <button class="play-btn" onclick="playVideo('yourProject')">
                <i class="fas fa-play"></i>
            </button>
        </div>
    </div>
    <div class="project-content">
        <h3 class="project-title">Your Project Name</h3>
        <p class="project-description">Your project description...</p>
        <div class="project-tech">
            <span class="tech-tag">Technology 1</span>
            <span class="tech-tag">Technology 2</span>
        </div>
        <div class="project-links">
            <a href="your-github-link" class="project-link">
                <i class="fab fa-github"></i> Code
            </a>
            <a href="your-demo-link" class="project-link">
                <i class="fas fa-external-link-alt"></i> Live Demo
            </a>
        </div>
    </div>
</div>
```

### Skills
Update the skills section with your expertise:

```html
<div class="skill-tags">
    <span class="skill-tag">Your Skill 1</span>
    <span class="skill-tag">Your Skill 2</span>
    <!-- Add more skills as needed -->
</div>
```

### Colors and Styling
Modify the color scheme in `styles.css`:

```css
/* Primary colors */
--primary-color: #2563eb;
--secondary-color: #667eea;
--accent-color: #fbbf24;

/* Update these values to match your preferred color scheme */
```

## 📱 Responsive Design

The website is fully responsive and includes:
- Mobile navigation with hamburger menu
- Flexible grid layouts
- Optimized typography for all screen sizes
- Touch-friendly interactive elements

## 🎬 Video Demo Feature

The website includes a video modal system for project demos:

1. Add your video files to the `assets/` folder
2. Update the `videoSources` object in `script.js`:

```javascript
const videoSources = {
    'project1': 'assets/your-project1-demo.mp4',
    'project2': 'assets/your-project2-demo.mp4',
    // Add more projects as needed
};
```

3. Click the play button on any project card to view the demo

## 🚀 Deployment Options

### GitHub Pages
1. Create a new repository on GitHub
2. Upload your files
3. Go to Settings > Pages
4. Select source branch and save

### Netlify
1. Drag and drop your project folder to [netlify.com](https://netlify.com)
2. Your site will be live instantly

### Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in your project directory
3. Follow the prompts

## 🔧 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to fork this project and customize it for your own use. If you make improvements, consider sharing them back!

## 📞 Support

If you need help customizing or deploying your resume website, feel free to reach out!

---

**Built with ❤️ for showcasing your professional journey**
