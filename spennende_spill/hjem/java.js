//henter de ulike elementene mine som hører til menybaren fra DOM, som må inkluderes for å gjøre den responsiv
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.andre_sider');
    const navlinks = document.querySelectorAll('.andre_sider li');
//Legger til en lyttere til burger-diven, slik at når man trykker på burger ikonet/classen så "knyttes" linjene i burger-ikonet sammen og classene i nav-diven knyttes sammen med classen nav-active som gjør at menyen blir riktig. 
    burger.addEventListener('click', () => {
      nav.classList.toggle('nav-active');
      burger.classList.toggle('toggle');
    });
      
}
//kaller funksjonen
  navSlide();
