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

//henter linjene fra DOM
var border1 = document.getElementById('border1');
var border2 = document.getElementById('border2');
var border3 = document.getElementById('border3');
var border4 = document.getElementById('border4');
var border5 = document.getElementById('border5');
var border6 = document.getElementById('border6');
var border7 = document.getElementById('border7');
var border8 = document.getElementById('border8');
var border9 = document.getElementById('border9');

//samler alle linjene i en array
let heleBorder = [border1, border2, border3, border4, border5, border6, border7, border8, border9]

//henter resultat element fra DOM
let resultat = document.querySelector('.resultat')

//funksjon som skriver ut "Fortsett å følg linjen" til resultat-elementet, om musen går inn på de ulike linje-elementene"
function MouseEnter(elem){
  if (heleBorder[8]){
    resultat.innerText = "Fortsett å følg linjen!";
  } if (heleBorder[7]){
  resultat.innerText = "Fortsett å følg linjen!";
  } if (heleBorder[6]){
  resultat.innerText = "Fortsett å følg linjen!";
  } if (heleBorder[5]){
  resultat.innerText = "Fortsett å følg linjen!";
  } if (heleBorder[4]){
  resultat.innerText = "Fortsett å følg linjen!";
  } if (heleBorder[3]){
  resultat.innerText = "Fortsett å følg linjen!";
  } if (heleBorder[2]){
  resultat.innerText = "Fortsett å følg linjen!";
  } if (heleBorder[1]){
  resultat.innerText = "Fortsett å følg linjen!";
  } if (heleBorder[0]){
  resultat.innerText = "Fortsett å følg linjen!";
  }
}

//funksjon som skriver ut "Synd du tapte..." til resultat-elementet, om musen forlater de ulike linje-elementene"
function MouseLeave(elem) {
  if (heleBorder[8]){
    resultat.innerText = "Synd du tapte...";
  } if (heleBorder[7]){
    resultat.innerText = "Synd du tapte...";
  } if (heleBorder[6]){
    resultat.innerText = "Synd du tapte...";
  } if (heleBorder[5]){
    resultat.innerText = "Synd du tapte...";
  } if (heleBorder[4]){
    resultat.innerText = "Synd du tapte...";
  } if (heleBorder[3]){
    resultat.innerText = "Synd du tapte...";
  } if (heleBorder[2]){
    resultat.innerText = "Synd du tapte...";
  } if (heleBorder[1]){
    resultat.innerText = "Synd du tapte...";
  } if (heleBorder[0]){
    resultat.innerText = "Synd du tapte...";
  }
}

//Henter mål-elementet fra DOM 
let maal = document.querySelector('.maal')

//funksjon som skriver ut "Gratulerer du vant!" til resultat elementet, når musen blir ført over mål-elementet
function MouseOver(elem) {
    resultat.innerText = ("Gratulerer du vant!")
}
