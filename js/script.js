import { cardcomponent} from "../components/cardcomponent.js";
import { products} from "../data/product.js";

let renderArea = document.querySelector("#card-area")

products .map((product)=> {
     renderArea.innerHTML += cardcomponent(product)
     console.log(product)
})
