
import * as store from "./store.js"
import {test} from "./reservations.js"
import * as render from "./render.js"
const trips= await store.async(store.trajets)
console.table(trips)
function afficher() {
    render.renderTrajets(trips)     
} 
afficher()

