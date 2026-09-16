//Comdicional
import { queste1 as quest1C } from "./comdicional/questao-1C.js";
import { queste2 as quest2C } from "./comdicional/questao-2C.js";
import { queste3 as quest3C } from "./comdicional/questao-3C.js";
import { queste4 as quest4C } from "./comdicional/questao-4C.js";

//Arry
import { queste1 as quest1A } from "./arry/questao-1A.js";
import { queste9 as quest9A } from "./arry/questao-9A.js";
import { queste2 as quest2A } from "./arry/questao-2A.js";

//POO
import { queste6 as quest6P } from "./POO/questao6P.js";

//Comdicional
document.getElementById("Q1")?.addEventListener("click",quest1C)
document.getElementById("Q2")?.addEventListener("click",quest2C)
document.getElementById("Q3")?.addEventListener("click",quest3C)
document.getElementById("Q4")?.addEventListener("click",quest4C)

//arry
document.getElementById("Q5")?.addEventListener("click",quest1A)
document.getElementById("Q6")?.addEventListener("click",quest9A)
document.getElementById("Q7")?.addEventListener("click",quest2A)

//POO
document.getElementById("Q9")?.addEventListener("click",quest6P)