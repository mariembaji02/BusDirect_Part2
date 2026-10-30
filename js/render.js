import { estComplet,placesLibres } from "./reservations.js";


let gridTrajets=document.querySelector(".gridTrajets");
export function renderTrajets(trips) {
     
      gridTrajets.innerHTML=trips.map(trip=>{
        const dispo=placesLibres(trip)
        const complet=estComplet(trip)
        const {id,departure,destination,departureTime,arrivalTime,price,reservations,waitingList,capacity}=trip
          return  `<div class="trajet-Crad  border border-gray-400 shadow-md p-3 rounded-md   flex flex-col gap-2 ">
                        <p>trajet#${trip.id}</p>
                        <h2 class="font-bold  text-2xl">${trip.departure}->${trip.destination} </h2>
                        <div class="flex justify-between items-center"> <p class="text-gray-400 text-md">${trip.departureTime}-${trip.arrivalTime}</p> <p class="font-bold text-xl">${trip.price}DH</p></div>
                        <div class="flex justify-between items-center"> <p class="statut p-3 rounded-xl ${complet?"bg-red-200 text-red-700":"bg-green-200 text-green-700" }">${complet ? "Complet" :"Disponible"}</p> <p class="">${dispo} place disponible</p></div>
                        <div class="flex justify-between p-3  text-lg w-full"> <p ><i class="fa-solid fa-bus" ></i> ${trip.capacity}</p> <p class=""><i class="fa-solid fa-user"></i>&nbsp  ${trip.waitingList.length} en attente</p></div>
                    </div>`;
                 }).join("");

      const totalPassager=trips.reduce((total,trip)=>{
        return  total+trip.reservations.length;
       },0)
       let passagers=document.querySelector(".totalPassager")
       passagers.textContent=totalPassager
      console.log("total:",totalPassager)

       const recette=trips.reduce((total,trip)=>{
        return  total+trip.reservations.length*trip.price;
       },0)
       let chiffreAffire=document.getElementById("recette")
       chiffreAffire.textContent=recette
        console.log("Recette:",recette)         
}

export function renderPagination(page, total) {}    
export function renderCabine(trip) {}    
export function renderListeAttente(trip){}    
export function afficherMessage(el, texte){}    

