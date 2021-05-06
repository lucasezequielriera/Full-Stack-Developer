'use strict'

// Constantes //
const visor = document.querySelector("#visor");
const numero0 = document.querySelector("#numero0");
const numero1 = document.querySelector("#numero1");
const numero2 = document.querySelector("#numero2");
const numero3 = document.querySelector("#numero3");
const numero4 = document.querySelector("#numero4");
const numero5 = document.querySelector("#numero5");
const numero6 = document.querySelector("#numero6");
const numero7 = document.querySelector("#numero7");
const numero8 = document.querySelector("#numero8");
const numero9 = document.querySelector("#numero9");
const sumar = document.querySelector("#sumar");
const restar = document.querySelector("#restar");
const multiplicar = document.querySelector("#multiplicar");
const dividir = document.querySelector("#dividir");
const resetear = document.querySelector("#resetear");
const resultado = document.querySelector("#resultado");

numero0.addEventListener("click", () => { visor.textContent += 0; });
numero1.addEventListener("click", () => { visor.textContent += 1; });
numero2.addEventListener("click", () => { visor.textContent += 2; });
numero3.addEventListener("click", () => { visor.textContent += 3; });
numero4.addEventListener("click", () => { visor.textContent += 4; });
numero5.addEventListener("click", () => { visor.textContent += 5; });
numero6.addEventListener("click", () => { visor.textContent += 6; });
numero7.addEventListener("click", () => { visor.textContent += 7; });
numero8.addEventListener("click", () => { visor.textContent += 8; });
numero9.addEventListener("click", () => { visor.textContent += 9; });
resetear.addEventListener("click", () => { visor.textContent = ""; });

sumar.addEventListener("click", () => {
    let suma = Number(visor.textContent); 
    visor.textContent = ""
});