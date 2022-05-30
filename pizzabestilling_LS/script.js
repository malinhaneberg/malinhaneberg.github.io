       //Henter radio nodelist fra DOM
       let radioEls = document.querySelectorAll('.radiodiv input')
       console.log(radioEls)

       //Henter checkbox nodelist fra DOM
       let checkboxEls = document.querySelectorAll('.checkboxdiv input')
       console.log(checkboxEls)

       //henter navn input felt fra DOM
       let navnEl = document.querySelector('.tekstboksdiv #navn')
       
       //henter input felt med tiden som pizzaen skal hentes fra DOM
       let henteTidEl = document.querySelector('.tekstboksdiv #henteTid')
       
       //henter bestill knapp fra DOM
       let bestillEl = document.querySelector('#bestill')
       
       //henter body element fra DOM
       let bodyEl = document.querySelector('body')

       //henter div-en som inneholder alt fra DOM
       let takkForDinBestilling = document.querySelector('#hele')

       //legger til en lytter til knappen
       bestillEl.addEventListener('click', sendBestilling)

       let bunn = [];
       //funksjonen som sender bestillingen
       function sendBestilling() {
           //finner pizzabunn
           for(let i = 0; i < radioEls.length; i++){
               //sjekker hvilken som er valgt
               if(radioEls[i].checked){
                   //legger til valgt pizzabunn i array
                   bunn.push(radioEls[i].value) 
               }
           }

           //lager et tomt array til topping
           let topping = [];

           //henter topping
           for (let i = 0; i < checkboxEls.length; i++){
               //sjekker om topping er krysset av
               if(checkboxEls[i].checked){
               //legger til topping i array
               topping.push(checkboxEls[i].value) 
           }
           }

           //legger til verdien i navn-input hvis verdien boksen ikke står tom
           let navn = [];
           if (navnEl.value !== ""){
            navn.push(navnEl.value)
           }

           //legger til verdien i hentetid-input hvis verdien boksen ikke står tom
           let henteTid = [];
           if (henteTidEl.value !== ""){
            henteTid.push(henteTidEl.value)
           }

           // Undersøker om localStorage-variabelen er satt
          if (localStorage.antallPizzaBestilt) {
          // Alt lagres som tekst i localStorage, så vi må gjøre om til tall
            localStorage.antallPizzaBestilt = Number(localStorage.antallPizzaBestilt) + 1;
          } else {
            localStorage.antallPizzaBestilt = 1;
          } 
          
          //endrer HTML med innerHTML i slutten av funksjonen. Når bestill-knappen trykkes, byttes HTML-en ut med denne.  
           takkForDinBestilling.innerHTML = "Takk for din bestilling, " + (navn) + "!";
           takkForDinBestilling.innerHTML += "<br>";
           takkForDinBestilling.innerHTML += "<br>";
           takkForDinBestilling.innerHTML += "Du har bestilt " + localStorage.antallPizzaBestilt + " pizzaer hos oss.";
           takkForDinBestilling.innerHTML += "<br>";
           takkForDinBestilling.innerHTML += "<br>";
           takkForDinBestilling.innerHTML += (bunn) + " pizzabunn" + " med " + (topping)
           takkForDinBestilling.innerHTML += "<br>";
           takkForDinBestilling.innerHTML += "<br>";
           takkForDinBestilling.innerHTML += "Hentes av: " + navn + ", Kl:" + henteTid + "." + "<br>"
           takkForDinBestilling.innerHTML += "<br>" + "<a href='index.html'>Bestill igjen</a>"
           document.getElementById("hele").style.height = "300px"
           document.getElementById("hele").style.fontSize = "20px"
           document.getElementById("hele").style.display = "flex";
           document.getElementById("hele").style.alignItems = "center";
           document.getElementById("hele").style.justifyContent = "center";
           document.getElementById("hele").style.padding = "20px";
           document.getElementById("hele").style.textAlign = "center";
           
       }
