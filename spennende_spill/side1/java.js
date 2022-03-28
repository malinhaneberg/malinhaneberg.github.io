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
//kaller funksjonen til menybaren
navSlide();

//henter elementene fra DOM (alle rutene til spill brettet) og legger dem i en array
let resultat = document.querySelector('#resultat');
let ruter = document.querySelectorAll('.rute');
ruter = Array.from(ruter);

//lager en variabel for nåværende spiller/den som starter
let spillerNaa = "X";

//lager en variabel for utfallene som gir vinn
let vinnerUtfall = [
[0, 1, 2],
[3, 4, 5],
[6, 7, 8],
[0, 3, 6],
[1, 4, 7],
[2, 5, 8],
[0, 4, 8],
[2, 4, 6]
];


//funksjon som sjekker hvem som vinner
function sjekkVinner (){
  vinnerUtfall.forEach(function(utfall){
    let vinn = utfall.every(index => ruter[index].innerText.trim() == spillerNaa);
    console.log(vinn)
    if(!vinn && antallTrykk == 9){
      resultat.innerText = "Likt";
    } else if (vinn) {
      resultat.innerText = (spillerNaa + " vant!");
    }
  })
}

let antallTrykk = 0;

for(let i=0; i<ruter.length; i++){
//console.log(ruter[i])
ruter[i].addEventListener('click', sjekkTrykk)
}

function sjekkTrykk(e){
//console.log(e)
//console.log(this)
antallTrykk++
let i = Number(e.target.id)
//console.log(ruter[i])
ruter[i].removeEventListener('click', sjekkTrykk)
}

//legger til lyttere til hver enkelt rute
ruter.forEach(function(rute){
  rute.addEventListener('click', function(){
    if(rute.innerText.trim()!="") return
    rute.innerText = spillerNaa;
    sjekkVinner();
    spillerNaa = spillerNaa == "X" ? "O" : "X";
    
  })

})
