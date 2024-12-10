// Função para navegação suave entre seções
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
  
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });
  });
  
  // Efeito de animação de fade-in ao rolar a página
  window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('.section');
    const scrollPosition = window.scrollY + window.innerHeight;
  
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
  
      // Verifica se a seção está visível na tela
      if (scrollPosition > sectionTop + sectionHeight / 4) {
        section.classList.add('visible');
      }
    });
  });
  
  // Adiciona a classe 'visible' a todas as seções para animação
  document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
      section.classList.add('invisible');
    });
  });