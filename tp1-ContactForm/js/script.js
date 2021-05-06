'use strict'

// Cosntantes //
const selectInsurance = document.querySelector("#insurance");

// Función leer "select" //
function readValue() {
    if (selectInsurance.value == "selectInsurance") {
        document.querySelector(".textPrice").innerHTML = "";
    } else if (selectInsurance.value == "basic") {
        document.querySelector(".textPrice").innerHTML = "The price is: $500";
    } else if (selectInsurance.value == "intermediate") {
        document.querySelector(".textPrice").textContent = "The price is: $1000";
    } else if (selectInsurance.value == "premium") {
        document.querySelector(".textPrice").innerHTML = "The price is: $1500";
    }
}

// Evento al pulsar botón //
document.querySelector(".button").addEventListener("click", (e) => {
    e.preventDefault();
    if ((selectInsurance.value == "basic") || (selectInsurance.value == "intermediate") || (selectInsurance.value == "premium")) {
        swal({
            icon: "success",
            button: false,
            text: "You have sent the form!",
            timer: 2000
        });
    } else {
        swal({
            icon: "error",
            button: false,
            text: "You must choose an option of the type of insurance",
            timer: 2000
        });
    };
});

// Evento al cambiar de valor en "select" //
selectInsurance.addEventListener("change", () => {
    readValue();
})

// Inicializar función //
readValue();