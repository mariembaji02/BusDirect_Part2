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
      // console.log("total:",totalPassager)

       const recette=trips.reduce((total,trip)=>{
        return  total+trip.reservations.length*trip.price;
       },0)
       let chiffreAffire=document.getElementById("recette")
       chiffreAffire.textContent=recette
        // console.log("Recette:",recette)    
    
}

export function renderPagination(trips,page,total) {
 
  let start=(page-1)*total;
  let end=page*total;
  let newTrips=trips.slice(start,end);
  renderTrajets(newTrips)

  let nombrePages=Math.ceil(trips.length/total)
  let arraynombre = Array.from({ length: nombrePages }, (_, i) => i + 1);
  let paginationItem=document.querySelector(".pagination")
  paginationItem.innerHTML=
  `
          <button class="border p-4 rounded-md w-13 text-center h-13 cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"  id="before" ${page===1?"disabled":""}>
          <i class="fa-solid fa-chevron-left"></i>
          </button>
        ${ paginationItem.innerHTML=arraynombre.map((index)=>{
          return `<button  data-page=${index} class="num border cursor-pointer p-4 ${ page===index ?"bg-[rgb(13,194,167)] text-white" :""} rounded-md w-13 text-center h-13">
                  ${index}
                  </button>`
        }).join("")}
        <button class="border p-4 rounded-md w-13 text-center h-13 cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed" ${ page===nombrePages?"disabled":""}  id="after">
        <i class="fa-solid fa-chevron-right"></i>
        </button>
   `

   paginationItem.querySelectorAll(".num").forEach(num=>{
   if(num.textContent.trim()===page)
   {
       num.style.backgroundColor="rgb(13,194,167)"
       num.style.color="white"
   }
   })
   let prev=document.getElementById("before")
   let next=document.getElementById("after")
   prev.addEventListener("click",()=>{
        if(page>1)
        {
            page--;
            renderPagination(trips,page,total)
        }
   })
   paginationItem.addEventListener("click",(e)=>{
      let num= e.target.closest("[data-page]");
        page=Number(num.textContent.trim());
        renderPagination(trips,page,total)
       
        // alert(num.textContent.trim())
   })
  next.addEventListener("click",()=>{
        if(page < nombrePages)
        {
            page++;  
            renderPagination(trips,page,total)
        }
   })


  
  
}    
export function renderCabine(trip) {}    
export function renderListeAttente(trip){}    
export function afficherMessage(el, texte){}    

