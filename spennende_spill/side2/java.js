//henter de ulike elementene mine som hører til menybaren fra DOM, som må inkluderes for å gjøre den responsiv
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.andre_sider');
    const navlinks = document.querySelectorAll('.andre_sider li');

    burger.addEventListener('click', () => {
      nav.classList.toggle('nav-active');
      burger.classList.toggle('toggle');
    });
      
}

  navSlide();

//Henter img elementene fra DOM
let lukeBilderEl = document.querySelectorAll('img');

//henter resultat-element fra DOM
let resultat = document.querySelector('#resultat');

//Legger til en lytter til hvert img-element ved hjelp av en for-løkke
for(let i=0; i<lukeBilderEl.length; i++){
    lukeBilderEl[i].addEventListener('click', sjekkLuke);
};


// Lager et tilfeldig heltaltall fra og med 0 til og med 2
let tilfeldig = Math.floor(Math.random()*3);

// Plasserer 500kr bak en tilfeldig luke ved å gi det en klasse
for(let i=0; i<lukeBilderEl.length; i++){
    if(i == tilfeldig){
        lukeBilderEl[i].classList.add('500kr');
    }else{
        lukeBilderEl[i].classList.add('50kr');
    }
  };

//funksjon som sjekker luken og plasserer bildene bak lukene
function sjekkLuke(e){
    if (e.target.id == "Luke1"){
        if(e.target.classList.contains('500kr')){
            e.target.src = "../bilder/femhundrekr_blaa.png";
        }else {
            e.target.src = "../bilder/femtikr_blaa.png";
        }
    }else if (e.target.id == "Luke2"){
        if(e.target.classList.contains('500kr')){
            e.target.src = "../bilder/femhundrekr_blaa.png";
        }else {
            e.target.src = "../bilder/femtikr_blaa.png";
        }
    }else {
        if(e.target.classList.contains('500kr')){
            e.target.src = "../bilder/femhundrekr_blaa.png";
        }else {
            e.target.src = "../bilder/femtikr_blaa.png";
        }
    }
};

//henter de 3 lukene
let Luke1 = document.getElementById('Luke1');
let Luke2 = document.getElementById('Luke2');
let Luke3 = document.getElementById('Luke3');

//lager en click-lytter til luke 1 med følgende funksjon som sjekker om luken er klikket
Luke1.addEventListener('click', function handleClick() {
  if (Luke1.classList.contains('50kr')){
    resultat.innerText = ("Prøv en til luke og se om du har mer flaks!");
  } else {
    resultat.innerText = ("Gratulerer med største premien! Klarer du det en gang til?");
  }
});

//lager tilsvarende luke 1, for luke 2
Luke2.addEventListener('click', function handleClick() {
  if (Luke2.classList.contains('50kr')){
    resultat.innerText = ("Prøv en til luke og se om du har mer flaks!");
  } else {
    resultat.innerText = ("Gratulerer med største premien! Klarer du det en gang til?");
  }
});

//lager tilsvarende luke 1 og luke 2, for luke 3
Luke3.addEventListener('click', function handleClick() {
  if (Luke3.classList.contains('50kr')){
    resultat.innerText = ("Prøv en til luke og se om du har mer flaks!");
  } else {
    resultat.innerText = ("Gratulerer med største premien! Klarer du det en gang til?");
  }
});
