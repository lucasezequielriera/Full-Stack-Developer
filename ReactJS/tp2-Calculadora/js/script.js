'use strict'

// Constantes //
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
const visor = document.querySelector("#visor");
const sumar = document.querySelector("#sumar");
const restar = document.querySelector("#restar");
const multiplicar = document.querySelector("#multiplicar");
const dividir = document.querySelector("#dividir");
const resetear = document.querySelector("#resetear");
const resultado = document.querySelector("#resultado");

// Variables //
let primerNumero = 0;
Number(primerNumero);
let segundoNumero = 0;
Number(segundoNumero);
let calculo = 0;
Number(calculo);

// DOM (Escribir en la calculadora con el teclado) //
document.addEventListener('keyup', function (event) {
    event.preventDefault();
    const keyName = event.key;
    switch (keyName) {
        case "0": visor.textContent += 0; break;
        case "1": visor.textContent += 1; break;
        case "2": visor.textContent += 2; break;
        case "3": visor.textContent += 3; break;
        case "4": visor.textContent += 4; break;
        case "5": visor.textContent += 5; break;
        case "6": visor.textContent += 6; break;
        case "7": visor.textContent += 7; break;
        case "8": visor.textContent += 8; break;
        case "9": visor.textContent += 9; break;
        case "+": sumarCalculo(); break;
        case "-": restarCalculo(); break;
        case "*": multiplicarCalculo(); break;
        case "/": dividirCalculo(); break;
        case "Enter": obtenerResultado(); break;
        case "Backspace": eliminarCaracter(); break;
    }
});

// Listeners Botones //
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

// Listeners Productos de Cálculos //
resetear.addEventListener("click", resetearCalculo);
sumar.addEventListener("click", sumarCalculo);
restar.addEventListener("click", restarCalculo);
multiplicar.addEventListener("click", multiplicarCalculo);
dividir.addEventListener("click", dividirCalculo);
resultado.addEventListener("click", obtenerResultado);

// Función Resetear //
function resetearCalculo() {
    visor.textContent = "";
    calculo = 0;
    sumar.removeAttribute("value");
    restar.removeAttribute("value");
    multiplicar.removeAttribute("value");
}

// Función Sumar //
function sumarCalculo() {
    primerNumero = Number(visor.textContent);
    visor.textContent = ""
    sumar.setAttribute("value", true);
}

// Función Restar //
function restarCalculo() {
    primerNumero = Number(visor.textContent);
    visor.textContent = ""
    restar.setAttribute("value", true);
}

// Función Multiplicar //
function multiplicarCalculo() {
    primerNumero = Number(visor.textContent);
    visor.textContent = "";
    multiplicar.setAttribute("value", true);
}

// Función Dividir //
function dividirCalculo() {
    primerNumero = Number(visor.textContent);
    visor.textContent = "";
    dividir.setAttribute("value", true);
}

// Función Eliminar Caractéres del Visor //
function eliminarCaracter() {
    const nuevoVisor = visor.textContent.slice(0, -1);
    visor.textContent = nuevoVisor;
}

// Función Resultado //
function obtenerResultado() {
    segundoNumero = Number(visor.textContent);
    // Si se presiona el botón de suma //
    if (sumar.value == "true") {
        calculo = (primerNumero + segundoNumero);
        visor.textContent = calculo;
        primerNumero = 0;
        segundoNumero = 0;
    }
    // Si se presiona el botón de resta //
    else if (restar.value == "true") {
        calculo = (primerNumero - segundoNumero);
        visor.textContent = calculo;
        primerNumero = 0;
        segundoNumero = 0;
    }
    // Si se presiona el botón de multiplicación //
    else if (multiplicar.value == "true") {
        calculo = (primerNumero * segundoNumero);
        visor.textContent = calculo;
        primerNumero = 0;
        segundoNumero = 0;
    }
    // Si se presiona el botón de división //
    else if (dividir.value == "true") {
        calculo = (primerNumero / segundoNumero);
        visor.textContent = calculo;
        primerNumero = 0;
        segundoNumero = 0;
    }
    // Removiendo todos los "values" //
    sumar.removeAttribute("value");
    restar.removeAttribute("value");
    multiplicar.removeAttribute("value");
    dividir.removeAttribute("value");
}