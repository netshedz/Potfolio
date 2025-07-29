function openSection(sectionId) {
  const sections = document.querySelectorAll('.content');
  sections.forEach(section => section.style.display = 'none');

  const active = document.getElementById(sectionId);
  if (active) {
    active.style.display = 'block';
  }
}

// Show default section
window.onload = () => openSection('home');
