// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
  });
});

// Dark/Light Mode Toggle
const modeToggle = document.createElement('div');
modeToggle.innerHTML = '<i class="fas fa-moon"></i>';
modeToggle.classList.add('mode-toggle');
document.body.appendChild(modeToggle);

modeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  const icon = modeToggle.querySelector('i');
  icon.classList.toggle('fa-moon');
  icon.classList.toggle('fa-sun');
});

// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Form Validation
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = contactForm.querySelector('input[type="text"]');
    const email = contactForm.querySelector('input[type="email"]');
    const message = contactForm.querySelector('textarea');

    if (!name.value || !email.value || !message.value) {
      alert('Please fill all fields!');
      return;
    }

    // Simulate form submission (replace with actual API call)
    alert(`Thanks, ${name.value}! Your message has been sent.`);
    contactForm.reset();
  });
}

// Animate sections on scroll
const animateOnScroll = () => {
  const sections = document.querySelectorAll('section');
  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    if (sectionTop < windowHeight - 100) {
      section.style.opacity = '1';
      section.style.transform = 'translateY(0)';
    }
  });
};

// Set initial state for animation
document.querySelectorAll('section').forEach(section => {
  section.style.opacity = '0';
  section.style.transform = 'translateY(20px)';
  section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
});

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);

// Optional: Fetch GitHub Projects (replace with your username)
const fetchGitHubProjects = async () => {
  try {
    const response = await fetch('https://api.github.com/users/YOUR_GITHUB_USERNAME/repos?sort=updated');
    const repos = await response.json();
    const projectGrid = document.querySelector('.project-grid');

    if (projectGrid && repos.length > 0) {
      projectGrid.innerHTML = ''; // Clear placeholder projects
      repos.slice(0, 3).forEach(repo => {
        projectGrid.innerHTML += `
          <div class="project-card">
            <img src="images/project-placeholder.jpg" alt="${repo.name}">
            <h3>${repo.name.replace(/-/g, ' ')}</h3>
            <p>${repo.description || 'No description available.'}</p>
            <div class="project-links">
              <a href="${repo.html_url}" target="_blank"><i class="fab fa-github"></i> Code</a>
              ${repo.homepage ? `<a href="${repo.homepage}" target="_blank"><i class="fas fa-external-link-alt"></i> Live Demo</a>` : ''}
            </div>
          </div>
        `;
      });
    }
  } catch (error) {
    console.error('Failed to fetch GitHub projects:', error);
  }
};

// Uncomment to enable GitHub API (replace YOUR_GITHUB_USERNAME)
// fetchGitHubProjects();