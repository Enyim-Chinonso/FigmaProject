
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.querySelector('nav ul');

  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
