  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyD7BX2-8D9cFgysi8DS_rTaHRnReY8VwXA",
    authDomain: "filmer-caff8.firebaseapp.com",
    projectId: "filmer-caff8",
    storageBucket: "filmer-caff8.appspot.com",
    messagingSenderId: "805872240970",
    appId: "1:805872240970:web:3629e2af6ec6f701f719b3"
  }; 

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  // Lager en referanse til databasen
    let db = firebase.firestore();

  // Henter HTML-elementer fra DOM
    let listeEl = document.querySelector("#liste");
    let inputEl = document.querySelector("input");
    let knappEl = document.querySelector("button");

// Legger til lytter på knappen, som gjør at funksjonen leggTilFilm kjøres når knappen trykkes
knappEl.addEventListener("click", leggTilFilm);

// Henter data. Når dataene er ferdig hentet, starter "then"-biten
db.collection("Filmer").get().then((snapshot) => {
    // Henter ut dokumentene
    let dokumenter = snapshot.docs;
  
    // Går gjennom dokumentene og sender dem videre      
    for (let i = 0; i < dokumenter.length; i++) {
      visFilmElement(dokumenter[i]);
    }
  });

  // Funksjon som viser hvert element
    function visFilmElement(dokument) {
    // Lager et <div>-element med klassen "listediv"
    let divEl = document.createElement("div");
    divEl.setAttribute("class", "listediv");  
    
    // Lager et <div>-element til selve filmlisten, og legger til dokumentets id i "data-id"
    let divEl2 = document.createElement("div");
    divEl2.setAttribute("data-id", dokument.id);
    divEl2.innerHTML = dokument.data().SeFilm;
    
    // Hvis filmen er sett, legger vi til klassen "Sett"
    if (dokument.data().Sett) {
      divEl2.setAttribute("class", "Sett");
    }
  
    // Legger til en lytter for å endre tilstand fra ikke sett til sett (og omvendt)
    divEl2.addEventListener("click", endreTilstand);
  
    // Legger til det andre <div>-elementet i det første
    divEl.appendChild(divEl2);
  

    // Lager en sletteknapp med klassen "Fjern" og legger til dokumentets id i "data-id"
    let slettKnappEl = document.createElement("button");
    slettKnappEl.setAttribute("class", "Fjern");
    slettKnappEl.innerHTML = "Fjern";
    slettKnappEl.setAttribute("data-id", dokument.id);
    slettKnappEl.addEventListener("click", slettFilm);
  
    // Legger til sletteknappen i det første <div>-elementet
    divEl.appendChild(slettKnappEl);
  
    // Legger til elementet på siden
    listeEl.appendChild(divEl);   

   }

// Funksjon som legger til en film
function leggTilFilm() {
    db.collection("Filmer").add({
      SeFilm: inputEl.value,
      Sett: false    
    });
  }

// Lytter etter endringer i databasen
db.collection("Filmer").onSnapshot(snapshot => {
    // Kaller funksjonen oppdater(), som lager filmlisten på nytt
    oppdater();
  });  

  function oppdater() {
    db.collection("Filmer").orderBy("Sett").get().then((snapshot) => {
      // Henter ut dokumentene
      let dokumenter = snapshot.docs;
  
      // Tømmer listeelementet (<div>-elementet der filmlisten dannes)
      listeEl.innerHTML = "";
  
      // Går gjennom dokumentene og lager et element for hvert av dem      
      for (let i = 0; i < dokumenter.length; i++) {
        visFilmElement(dokumenter[i]);
      }
    })
  }
  
// Funksjon som endrer tilstanden til et element i filmlisten
function endreTilstand(e) {
    // Finner id-en til klikket element
    let id = e.target.getAttribute("data-id");
  
    // Henter dokumentet med samme id fra databasen
    db.collection("Filmer").doc(id).get().then(doc => {
      let status = doc.data().Sett;
  
      // Bytter verdien til status
      status = !status;
      
      // Oppdaterer elementet
      db.collection("Filmer").doc(id).update({
        Sett: status
      });
    });
  }
  
// Funksjon som sletter en film fra listen
function slettFilm(e) {
    // Finner id-en til elementet som ble klikket på
    let id = e.target.getAttribute("data-id");
  
    // Sletter elementet
    db.collection("Filmer").doc(id).delete();
  }  
