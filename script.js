// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar background on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Video Modal Functionality
const modal = document.getElementById('videoModal');
const modalVideo = document.getElementById('modalVideo');
const closeBtn = document.querySelector('.close');

// Video sources for different projects
const videoSources = {
    'prepify': 'assets/prepify-demo.mp4',
    'asl': 'https://www.youtube.com/embed/q3U3t5MgvFM', // Jack Ferreri ASL Project
    'graphflicks': 'assets/graphflicks-demo.mp4'
};

function playVideo(projectId) {
    const videoSrc = videoSources[projectId];
    if (videoSrc) {
        if (videoSrc.includes('youtube.com')) {
            // Handle YouTube videos
            const iframe = document.createElement('iframe');
            iframe.src = videoSrc;
            iframe.width = '100%';
            iframe.height = '400';
            iframe.frameBorder = '0';
            iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
            iframe.allowFullscreen = true;
            
            // Clear previous content and add iframe
            modalVideo.innerHTML = '';
            modalVideo.appendChild(iframe);
            modal.style.display = 'block';
        } else {
            // Handle local video files
            modalVideo.innerHTML = `<source src="${videoSrc}" type="video/mp4">Your browser does not support the video tag.`;
            modalVideo.load();
            modal.style.display = 'block';
            modalVideo.play();
        }
    } else {
        // If no video is available, show a placeholder or alert
        alert('Video demo coming soon!');
    }
}

// Close modal when clicking the close button
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
    if (modalVideo.tagName === 'VIDEO') {
        modalVideo.pause();
        modalVideo.src = '';
    } else {
        // Clear iframe content
        modalVideo.innerHTML = '';
    }
});

// Close modal when clicking outside the video
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
        if (modalVideo.tagName === 'VIDEO') {
            modalVideo.pause();
            modalVideo.src = '';
        } else {
            // Clear iframe content
            modalVideo.innerHTML = '';
        }
    }
});

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.style.display === 'block') {
        modal.style.display = 'none';
        if (modalVideo.tagName === 'VIDEO') {
            modalVideo.pause();
            modalVideo.src = '';
        } else {
            // Clear iframe content
            modalVideo.innerHTML = '';
        }
    }
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.project-card, .skill-tag, .contact-link');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Profile image hover effect enhancement
const profileImage = document.getElementById('profileImage');
if (profileImage) {
    profileImage.addEventListener('load', () => {
        profileImage.style.opacity = '1';
    });
    
    // Add loading state
    profileImage.style.opacity = '0';
    profileImage.style.transition = 'opacity 0.3s ease';
}

// Typing effect for hero title (optional enhancement)
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Initialize typing effect when page loads
document.addEventListener('DOMContentLoaded', () => {
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const originalText = heroTitle.innerHTML;
        // Uncomment the line below to enable typing effect
        // typeWriter(heroTitle, originalText, 50);
    }
});

// Add loading animation for images
function preloadImages() {
    const imageSources = [
        'assets/headshot.jpeg',
        'assets/PrepifyPicture.png',
        'assets/ASLPicture.png',
        'assets/graphflicks-screenshot.jpg'
    ];
    
    imageSources.forEach(src => {
        const img = new Image();
        img.src = src;
    });
}

// Preload images when page loads
document.addEventListener('DOMContentLoaded', preloadImages);

// Add scroll progress indicator
function createScrollProgress() {
    const progressBar = document.createElement('div');
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 0%;
        height: 3px;
        background: linear-gradient(90deg, #06b6d4, #0891b2);
        z-index: 9999;
        transition: width 0.1s ease;
    `;
    document.body.appendChild(progressBar);
    
    window.addEventListener('scroll', () => {
        const scrollTop = document.documentElement.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrollPercent = (scrollTop / scrollHeight) * 100;
        progressBar.style.width = scrollPercent + '%';
    });
}

// Initialize scroll progress
document.addEventListener('DOMContentLoaded', createScrollProgress);

// Add smooth reveal animations for sections
function revealOnScroll() {
    const sections = document.querySelectorAll('section');
    
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
            }
        });
    }, { threshold: 0.1 });
    
    sections.forEach(section => {
        section.classList.add('section-hidden');
        sectionObserver.observe(section);
    });
}

// Initialize section reveal animations
document.addEventListener('DOMContentLoaded', revealOnScroll);

// Add CSS for section animations
const style = document.createElement('style');
style.textContent = `
    .section-hidden {
        opacity: 0;
        transform: translateY(50px);
        transition: opacity 0.8s ease, transform 0.8s ease;
    }
    
    .section-hidden.revealed {
        opacity: 1;
        transform: translateY(0);
    }
`;
document.head.appendChild(style);
