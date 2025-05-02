// Smooth scroll fade-in on scroll
const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('visible');
    appearOnScroll.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});

// Contact form handling (fake validation example)
document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const status = document.querySelector('.form-status');
  status.textContent = 'Sending...';

  // Simulate async sending
  setTimeout(() => {
    status.textContent = 'Thanks! Your message has been sent.';
  }, 1000);
});

