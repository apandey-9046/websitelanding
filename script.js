const hamburger = document.getElementById('hamburger');
const list = document.getElementById('list');
const overlay = document.getElementById('overlay');
const icon = document.getElementById('cat');

hamburger.addEventListener('click', () => {
  list.classList.toggle('navlist-active');
  overlay.classList.toggle('overlay-active');
  
  // Toggle hamburger (bars) and close (circle-xmark) icons
  icon.classList.toggle('fa-bars');
  icon.classList.toggle('fa-circle-xmark');
});

// Optional: Close menu when clicking on overlay
overlay.addEventListener('click', () => {
  list.classList.remove('navlist-active');
  overlay.classList.remove('overlay-active');
  icon.classList.add('fa-bars');
  icon.classList.remove('fa-circle-xmark');
});
