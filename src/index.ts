//Comdicional
import { queste1C as quest1C } from "./comdicional/questao-1C.js";
import { queste2C as quest2C } from "./comdicional/questao-2C.js";
import { queste3C as quest3C } from "./comdicional/questao-3C.js";
import { queste4C as quest4C } from "./comdicional/questao-4C.js";

//Arry
import { queste1A as quest1A } from "./arry/questao-1A.js";
import { queste2A as quest2A } from "./arry/questao-2A.js";
import { quest3A as quest3A } from "./arry/questao-3A.js";
import { quest9A as quest9A } from "./arry/questao-9A.js";

//POO
import { queste6P as quest6P } from "./POO/questao6P.js";
import { queste7P as quest7P } from "./POO/questao7P.js";



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
document.getElementById("Q9")?.addEventListener("click",quest6P)
document.getElementById("Q10")?.addEventListener("click",quest7P)