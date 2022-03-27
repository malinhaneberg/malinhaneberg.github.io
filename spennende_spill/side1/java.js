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
      /* let likt = !vinn && (ruter.includes(innerText(spillerNaa))); */
      if(vinn){
        resultat.innerText = (spillerNaa + " vant!");
      } /* if (!vinn && true == 9) {
       
      } */
    

    })
  }

/*  function sjekkLikt (){
  if (rute1ErTrykket = true){
    resultat.innerText = ("") 
} if (rute2ErTrykket = true){
    resultat.innerText = ("")
}   if (rute3ErTrykket = true){
    resultat.innerText = ("")
} if (rute4ErTrykket = true){
  resultat.innerText = ("")
} if (rute5ErTrykket = true){
  resultat.innerText = ("")
}if (rute6ErTrykket = true){
  resultat.innerText = ("")
}if (rute7ErTrykket = true){
  resultat.innerText = ("")
}if (rute8ErTrykket = true){
  resultat.innerText = ("")
}if (rute9ErTrykket = true){
  resultat.innerText = ("Det ble likt!")
}
 } */

       
      /* if (!vinn) {
        if (){}
        antallTrekk();
      } 
      
      *//* if (!vinn && antallTrekk == 9) {
        resultat.innerText = ("Det ble likt!")
      } */

      //funket ikke siden spilleren ikke blir byttet siden likt variabelen er for vag (tror jeg)
      /* if (likt) {
        resultat.innerText = ("Det ble likt!"); 
      }*/
/*   var rute1 = ruter[0]
  var rute2 = ruter[1]
  var rute3 = ruter[2]
  var rute4 = ruter[3]
  var rute5 = ruter[4]
  var rute6 = ruter[5]
  var rute7 = ruter[6]
  var rute8 = ruter[7]
  var rute9 = ruter[8]

  var alleRuter = rute1 && rute2 && rute3 && rute4 &&rute5 && rute6 && rute7 && rute8 && rute9;

  alleRuter.addEventListener('click', clickHandler); 
  var ruteErTrykket = false; 

  function clickHandler(){ 
   ruteErTrykket = true;
    console.log(ruteErTrykket)
  }  */

/*   window.addEventListener('click', function(event){
    console.log(event.target);  
  }); */

/*   var alleRuter = ruter[0, 1, 2, 3, 4, 5, 6, 7, 8]

  alleRuter.addEventListener('click', function handleClick() {
    if (alleRuter.innerText == "X" || "O"){
      resultat.innerText = ("Likt");
    } else {
      resultat.innerText = ("");
    }
  });

  var rute1 = ruter[0]; 
  rute1.addEventListener('click', clickHandler); 
  var rute1ErTrykket = false; 
  function clickHandler(){ 
   rute1ErTrykket = true;
    console.log(rute1ErTrykket)
  } 

  var rute2 = ruter[1]; 
  rute2.addEventListener('click', clickHandler); 
  var rute2ErTrykket = false; 
  function clickHandler(){ 
   rute2ErTrykket = true;
    console.log(rute2ErTrykket)
  }

  var rute3 = ruter[2]; 
  rute3.addEventListener('click', clickHandler); 
  var rute3ErTrykket = false; 
  function clickHandler(){ 
   rute3ErTrykket = true;
    console.log(rute3ErTrykket)
  }

  var rute4 = ruter[3]; 
  rute4.addEventListener('click', clickHandler); 
  var rute4ErTrykket = false; 
  function clickHandler(){ 
   rute4ErTrykket = true;
    console.log(rute4ErTrykket)
  }

  var rute5 = ruter[4]; 
  rute5.addEventListener('click', clickHandler); 
  var rute5ErTrykket = false; 
  function clickHandler(){ 
   rute5ErTrykket = true;
    console.log(rute5ErTrykket)
  }

  var rute5 = ruter[4]; 
  rute5.addEventListener('click', clickHandler); 
  var rute5ErTrykket = false; 
  function clickHandler(){ 
   rute5ErTrykket = true;
    console.log(rute5ErTrykket)
  }

  var rute6 = ruter[5]; 
  rute6.addEventListener('click', clickHandler); 
  var rute6ErTrykket = false; 
  function clickHandler(){ 
   rute6ErTrykket = true;
    console.log(rute6ErTrykket)
  }

  var rute7 = ruter[6]; 
  rute7.addEventListener('click', clickHandler); 
  var rute7ErTrykket = false; 
  function clickHandler(){ 
   rute7ErTrykket = true;
    console.log(rute7ErTrykket)
  }

  var rute8 = ruter[7]; 
  rute8.addEventListener('click', clickHandler); 
  var rute8ErTrykket = false; 
  function clickHandler(){ 
   rute8ErTrykket = true;
    console.log(rute8ErTrykket)
  }

  var rute9 = ruter[8]; 
  rute9.addEventListener('click', clickHandler); 
  var rute9ErTrykket = false; 
  function clickHandler(){ 
   rute9ErTrykket = true;
    console.log(rute9ErTrykket)
  } */

/*   if (rute1ErTrykket == rute2ErTrykket){
    console.log("hei")
  }
  var alleRuterTrykket = rute1ErTrykket == true + rute2ErTrykket == true + rute3ErTrykket == true + rute4ErTrykket == true + rute5ErTrykket == true + rute6ErTrykket == true + rute7ErTrykket == true + rute8ErTrykket == true == rute9ErTrykket == true;
  console.log(alleRuterTrykket); */

  /* var rute3 = ruter[2]; 

  rute3.addEventListener('click', clickHandler); 
  var rute3ErTrykket = false; 

  function clickHandler(){ 
   rute3ErTrykket = true;
    console.log(rute3ErTrykket)
  }

  var rute4 = ruter[3]; 

  rute4.addEventListener('click', clickHandler); 
  var rute4ErTrykket = false; 

  function clickHandler(){ 
   rute4ErTrykket = true;
    console.log(rute4ErTrykket)
  } */


 /*  function sjekkLikt (i){
    let ingenVinnerUtfall = !vinnerUtfall[0] && !vinnerUtfall[1] && !vinnerUtfall[2] && !vinnerUtfall[3] && !vinnerUtfall[4] && !vinnerUtfall[5] && !vinnerUtfall[6] && !vinnerUtfall[7] && !vinnerUtfall[8]; */

    /* function antallTrekk (i){
    for(i = 1; i < ruter.length; i++){
      if (i < 9){
        resultat.innerText = ("")
        console.log(i)
      } else {
        resultat.innerText = ("hei")
        console.log(i)
      }
      }  */

    /* let ingenVinnerUtfall = !vinnerUtfall[0] && !vinnerUtfall[1] && !vinnerUtfall[2] && !vinnerUtfall[3] && !vinnerUtfall[4] && !vinnerUtfall[5] && !vinnerUtfall[6] && !vinnerUtfall[7] && !vinnerUtfall[8];

    if (ingenVinnerUtfall && ruter[0, 1, 2, 3, 4, 5, 6, 7, 8] == "X" || "O"){
      resultat.innerText = ("Likt");
      console.log("likt")
    } */
  /* }; */

/* 
for(i = 0; i<=72; i+=8){
if (i == 72){
  resultat.innerText = ("Det ble likt!")
} else {
  resultat.innerText = ("")
}
} */

//denne er ikke ferdig, men visste ikke hvordan jeg skulle implementere den når jeg gjorde den ferdig, men tanken var å sjekke hvor mange trekk som ble gjort og hvis det var 9 trekk uten vinner så skulle det annonserers likt
/* let trekk = antallKlikk();

 ruter.forEach(function(antallKlikk){
  rute.addEventListener('click', function(){
    for(trekk = 0; trekk < ruter.length; trekk++ ){
      if (trekk == 9){
       resultat.innerText("Det ble likt!");
       }
    
    }
  })
 })
 */
 



//prøvde å legge til lytter som sjekker antall click, og hvis alle rutene er klikket og inneholder X eller O skulle det bli likt
 /*  ruter.addEventListener('click', function handleClick() {
    if (ruter.every(innerText.contains(spillerNaa))){
      resultat.innerText = ("Likt!");
    } 
  }); */


//denne funket ikke
/* function sjekkLikt (){
  let vinn = utfall.every(index => ruter[index].innerText.trim() == spillerNaa);
  let likt = !vinn && (ruter.innerText.trim().includes(spillerNaa));
  if (likt) {
    resultat.innerText = ("Det ble likt!");
  }
}
 */

  //legger til lyttere til hver enkelt rute
  ruter.forEach(function(rute){
    rute.addEventListener('click', function(){
      if(rute.innerText.trim()!="") return
      rute.innerText = spillerNaa;
      sjekkVinner();
      /* sjekkLikt(); */
      spillerNaa = spillerNaa == "X" ? "O" : "X";
      
    })
  
  })
