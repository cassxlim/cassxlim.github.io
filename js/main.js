const toggle = document.querySelector('.menu-icon');

toggle.addEventListener('click', () => {
    document.querySelector('header').classList.toggle('active-nav');
  
});
