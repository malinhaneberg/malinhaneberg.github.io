const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav_links');
    const navlinks = document.querySelectorAll('.nav_links li');

    burger.addEventListener('click', () => {
      nav.classList.toggle('nav-active');
      burger.classList.toggle('toggle');
    });
      
}

  navSlide();

