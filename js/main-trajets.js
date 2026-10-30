
import * as store from "./store.js"
import {test} from "./reservations.js"
import * as render from "./render.js"
const trips= await store.async(store.trajets)
// console.table(trips)
function afficher(trips) {
    render.renderTrajets(trips)     
} 
afficher(trips)

function Recherche(trips)
{
  let ville=document.getElementById("cherche").value.toLowerCase();
  let statut=document.getElementById("filter").value.toLowerCase();
  
  let NewTable=trips.filter(trip=>{
       let search=trip.departure.toLowerCase().includes(ville)||trip.destination.toLowerCase().includes(ville);
       return search
  })
   
     afficher(NewTable)
}
    let input = document.getElementById("cherche");
    let select = document.getElementById("filter");
    input.addEventListener("input",()=>{Recherche(trips)})
    
    // select.addEventListener("change",Recherche())