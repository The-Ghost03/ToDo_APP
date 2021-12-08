const ListeDesTaches = document.querySelector("#List_tache");

const Today = document.querySelector(".date");

const Heure = document.querySelector(".time");

const Une_Tache = document.querySelector(".tache");

var Tableau_Tache = Array.from(document.querySelectorAll(".tache"));

//const Contenu_de_Tache = document.querySelector('.contenu_tache')

var Bouton_Tache_faite = Array.from(document.querySelectorAll(".checked"));

const Zone_De_SAISE = document.querySelector("#INPUT");

var Tache_Saisie = "";

// const Bouton_Tache_non_faite = document.querySelector('.unchecked')

var Bouton_Tache_non_faite = Array.from(
    document.querySelectorAll(".unchecked")
);

const Bouton_Trash = Array.from(document.querySelectorAll(".trash"));

const Bouton_Add = document.querySelector(".add-icon");

class Today_Date {
    constructor() {
        this.name = "Date";
    }
}
const dt = new Date();

// ensure date comes as 01, 09 etc
var DD = ("0" + dt.getDate()).slice(-2);

// getMonth returns month from 0
var MM = ("0" + (dt.getMonth() + 1)).slice(-2);

var YYYY = dt.getFullYear();

var hh = ("0" + dt.getHours()).slice(-2);

var mm = ("0" + dt.getMinutes()).slice(-2);

var ss = ("0" + dt.getSeconds()).slice(-2);

Today.innerHTML = DD + " / " + MM + " / " + YYYY;

setInterval(myTimer, 1000);

function myTimer() {
    const dt = new Date();

    Heure.innerHTML = dt.toLocaleTimeString();
}

//////////////////////////////////////
///         backend side           ///
//////////////////////////////////////



function Ajouter_Une_Tache(Tache_Saisie) {

    const text = `<div class="tache">
    <span class="alreadyDone unchecked material-icons">radio_button_unchecked</span>
    <p class="contenu_tache"> ${Tache_Saisie} </p>
    <span class="trash material-icons">delete</span>
    </div>`;

    const position = "beforeend";

    //ListeDesTaches.insertAdjacentElement(position, text);

    ListeDesTaches.insertAdjacentHTML(position, text);

    Tableau_Tache = Array.from(document.querySelectorAll(".tache"));

    Bouton_Tache_faite = Array.from(document.querySelectorAll(".checked"));
    Bouton_Tache_non_faite = Array.from(document.querySelectorAll(".unchecked"));
}

Ajouter_Une_Tache("new task added from the code for test purpose. but the removing function isn't setted yet");
Ajouter_Une_Tache("new task 2 added from the code for test purpose. but the removing function isn't setted yet");





console.log("je verifie la taille au debut");
console.log(Tableau_Tache.length);


Bouton_Add.addEventListener("click", () => {

    Tache_Saisie = Zone_De_SAISE.value;
    Ajouter_Une_Tache(Tache_Saisie);

    console.log("je verifie la taille apres le click");
    console.log(Tableau_Tache.length);

    Zone_De_SAISE.value = "";


    Tableau_Tache = Array.from(document.querySelectorAll(".tache"));
    Bouton_Tache_faite = Array.from(document.querySelectorAll(".checked"));
    Bouton_Tache_non_faite = Array.from(document.querySelectorAll(".unchecked"));


});



Zone_De_SAISE.addEventListener("keyup", (event) => {

    if (event.keyCode === 13) {
        Tache_Saisie = Zone_De_SAISE.value;
        Ajouter_Une_Tache(Tache_Saisie);


        Zone_De_SAISE.value = "";
    }

});






//////////////////////////////////////
///         frontend side          ///
//////////////////////////////////////

function Done_task(Tache_non_faite) {


    Bouton_Tache_non_faite.forEach((element) => {

        const Contenu_de_Tache = Tache_non_faite.parentElement.childNodes[3];
        const Tache_Parente = Tache_non_faite.parentElement;

        if (Tache_non_faite.classList.contains("unchecked")) {
            Tache_non_faite.classList.remove("unchecked");

            Tache_non_faite.classList.add("checked");

            Contenu_de_Tache.classList.add("Task_done");
            Tache_Parente.classList.add("TD_tache");

            if (Tache_non_faite.classList.contains("checked")) {
                Tache_non_faite.innerHTML = "radio_button_checked";
            }
        } else if (Tache_non_faite.classList.contains("checked")) {
            Tache_non_faite.classList.remove("checked");

            Contenu_de_Tache.classList.remove("Task_done");
            Tache_Parente.classList.remove("TD_tache");

            Tache_non_faite.classList.add("unchecked");

            if (Tache_non_faite.classList.contains("unchecked")) {
                Tache_non_faite.innerHTML = "radio_button_unchecked";
            }
        }

    })
}

Tableau_Tache = Array.from(document.querySelectorAll(".tache"));
Bouton_Tache_faite = Array.from(document.querySelectorAll(".checked"));
Bouton_Tache_non_faite = Array.from(document.querySelectorAll(".unchecked"));


Bouton_Tache_non_faite.forEach((element) => {

    const Contenu_de_Tache = element.parentElement.childNodes[3];
    const Tache_Parente = element.parentElement;

    element.addEventListener("click", () => {

        if (element.classList.contains("unchecked")) {
            element.classList.remove("unchecked");

            element.classList.add("checked");

            Contenu_de_Tache.classList.add("Task_done");
            Tache_Parente.classList.add("TD_tache");

            if (element.classList.contains("checked")) {
                element.innerHTML = "radio_button_checked";
            }
        } else if (element.classList.contains("checked")) {
            element.classList.remove("checked");

            Contenu_de_Tache.classList.remove("Task_done");
            Tache_Parente.classList.remove("TD_tache");

            element.classList.add("unchecked");

            if (element.classList.contains("unchecked")) {
                element.innerHTML = "radio_button_unchecked";
            }
        }
    });
});





Bouton_Tache_faite = Array.from(document.querySelectorAll(".checked"));
Bouton_Tache_non_faite = Array.from(document.querySelectorAll(".unchecked"));
Tableau_Tache = Array.from(document.querySelectorAll(".tache"));

Bouton_Tache_faite.forEach((element) => {
    const Contenu_de_Tache = element.parentElement.childNodes[3];
    const Tache_Parente = element.parentElement;

    element.addEventListener("click", () => {
        if (element.classList.contains("checked")) {
            element.classList.remove("checked");

            element.classList.add("unchecked");

            if (element.classList.contains("unchecked")) {
                Contenu_de_Tache.classList.remove("Task_done");
                Tache_Parente.classList.remove("TD_tache");

                element.innerHTML = "radio_button_unchecked";
            }
        } else if (element.classList.contains("unchecked")) {
            element.classList.remove("unchecked");

            element.classList.add("checked");
            Contenu_de_Tache.classList.add("Task_done");
            Tache_Parente.classList.add("TD_tache");

            if (element.classList.contains("checked")) {
                element.innerHTML = "radio_button_checked";
            }
        }
    });
});


// - une fonction pour ajouter une tache a l'interface

// - une fonction pour supprimer une tache a l'interface

function Supprimer_Une_Tache() {}

// - une fonction pour marquer comme fait une tache et inversement

function Supprimer_Une_Tache() {}

Bouton_Trash.forEach((element) => {
    const Tache_Parente = element.parentElement;

    element.addEventListener("click", () => {
        Tache_Parente.parentNode.removeChild(Tache_Parente);
    });
});