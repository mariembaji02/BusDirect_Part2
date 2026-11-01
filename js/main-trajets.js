
import * as store from "./store.js"
import {estComplet, test} from "./reservations.js"
import * as render from "./render.js"
const trips= await store.async(store.trajets)
let total=6;
let page=1  
// console.table(trips)
function afficher(trips) {
  
    render.renderPagination(trips,page,total)
}   
afficher(trips)

function Recherche(trips)
{
  let ville=document.getElementById("cherche").value.toLowerCase();
  let statut=document.getElementById("filter").value;
  
  let NewTable=trips.filter(trip=>{
       let search=trip.departure.toLowerCase().includes(ville)||trip.destination.toLowerCase().includes(ville);
       if(!search)
       {
        console.log("aucun trajet trouver")
        
       }
       let filter=true;
          if(statut==="Disponible"){ filter=!estComplet(trip)}
          if(statut==="Complet"){ filter=estComplet(trip)};
       
        
      
       return search && filter
  })
   
     afficher(NewTable)
}
    let input = document.getElementById("cherche");
    let select = document.getElementById("filter");
    input.addEventListener("input",()=>{Recherche(trips)})
    select.addEventListener("change",()=>{Recherche(trips)})
    
    
    // select.addEventListener("change",Recherche())