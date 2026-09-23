//Comdicional
import { quest1C as quest1C } from "./comdicional/questao-1C.js";
import { quest2C as quest2C } from "./comdicional/questao-2C.js";
import { quest3C as quest3C } from "./comdicional/questao-3C.js";
import { quest4C as quest4C } from "./comdicional/questao-4C.js";

//Arry
import { quest1A as quest1A } from "./arry/questao-1A.js";
import { quest2A as quest2A } from "./arry/questao-2A.js";
import { quest3A as quest3A } from "./arry/questao-3A.js";
import { quest9A as quest9A } from "./arry/questao-9A.js";

//POO
import { quest6P as quest6P } from "./POO/questao6P.js";
import { quest7P as quest7P } from "./POO/questao7P.js";
import { quest8P as quest8P } from "./POO/questao8P.js";
import { quest9P as quest9P } from "./POO/questao9P.js";



//Comdicional
document.getElementById("Q1")?.addEventListener("click",quest1C)
document.getElementById("Q2")?.addEventListener("click",quest2C)
document.getElementById("Q3")?.addEventListener("click",quest3C)
document.getElementById("Q4")?.addEventListener("click",quest4C)

//arry
document.getElementById("Q5")?.addEventListener("click",quest1A)
document.getElementById("Q6")?.addEventListener("click",quest2A)
document.getElementById("Q7")?.addEventListener("click",quest9A)
document.getElementById("Q8")?.addEventListener("click",quest3A)

//POO
document.getElementById("Q")?.addEventListener("click",quest6P)
document.getElementById("Q")?.addEventListener("click",quest7P)
document.getElementById("Q")?.addEventListener("click",quest8P)
document.getElementById("Q9")?.addEventListener("click", quest9P)