const ListeDesTaches = document.querySelector('#List_tache')

const Today = document.querySelector('.date')

const Heure = document.querySelector('.time')

const Une_Tache = document.querySelector('.tache')

//const Contenu_de_Tache = document.querySelector('.contenu_tache')

var Bouton_Tache_faite = Array.from(document.querySelectorAll('.checked'))


const Zone_De_SAISE = document.querySelector('#INPUT')

var Tache_Saisie = ""

// const Bouton_Tache_non_faite = document.querySelector('.unchecked')

var Bouton_Tache_non_faite = Array.from(document.querySelectorAll('.unchecked'))

const Bouton_Trash = Array.from(document.querySelectorAll('.trash'))

const Bouton_Add = document.querySelector('.add-icon')



class Today_Date {
    constructor() {
        this.name = 'Date';
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


Today.innerHTML = DD + " / " + MM + " / " + YYYY

setInterval(myTimer, 1000);

function myTimer() {
    const dt = new Date();

    Heure.innerHTML = dt.toLocaleTimeString();
}
// var intervalID = setInterval(heure_du_jour, 1000);

// - permet de dire que une tache est faite
// add la classe cheked et le contenu qui va avec


Bouton_Tache_non_faite.forEach(element => {

    const Contenu_de_Tache = element.parentElement.childNodes[3]
    const Tache_Parente = element.parentElement

    element.addEventListener('click', () => {

        if (element.classList.contains("unchecked")) {

            element.classList.remove("unchecked")

            element.classList.add("checked")

            Contenu_de_Tache.classList.add("Task_done")
            Tache_Parente.classList.add("TD_tache")

            if (element.classList.contains("checked")) {

                element.innerHTML = "radio_button_checked"
            }

        } else if (element.classList.contains("checked")) {

            element.classList.remove("checked")

            Contenu_de_Tache.classList.remove("Task_done")
            Tache_Parente.classList.remove("TD_tache")

            element.classList.add("unchecked")

            if (element.classList.contains("unchecked")) {

                element.innerHTML = "radio_button_unchecked"
            }
        }

    })
});


// Bouton_Tache_non_faite.addEventListener('click', () => {
//     Bouton_Tache_non_faite.innerHTML = "radio_button_checked"
//     Bouton_Tache_non_faite.classList.toggle("uncheked")
//     Bouton_Tache_non_faite.classList.add("cheked")
// })


// - une tache n'est pas encore faite
// a la classe uncheked et le contenu qui va avec


Bouton_Tache_faite.forEach(element => {


    const Contenu_de_Tache = element.parentElement.childNodes[3]
    const Tache_Parente = element.parentElement


    element.addEventListener('click', () => {

        if (element.classList.contains("checked")) {

            element.classList.remove("checked")

            element.classList.add("unchecked")

            if (element.classList.contains("unchecked")) {
                Contenu_de_Tache.classList.remove("Task_done")
                Tache_Parente.classList.remove("TD_tache")

                element.innerHTML = "radio_button_unchecked"
            }
        } else if (element.classList.contains("unchecked")) {

            element.classList.remove("unchecked")

            element.classList.add("checked")
            Contenu_de_Tache.classList.add("Task_done")
            Tache_Parente.classList.add("TD_tache")

            if (element.classList.contains("checked")) {

                element.innerHTML = "radio_button_checked"
            }

        }

    })
});

//////////////////////////////////////
///         frontend side          ///
//////////////////////////////////////


// - une fonction pour ajouter une tache a l'interface





// - une fonction pour supprimer une tache a l'interface

function Supprimer_Une_Tache() {

}


// - une fonction pour marquer comme fait une tache et inversement

function Supprimer_Une_Tache() {

}

Bouton_Trash.forEach(element => {

    const Tache_Parente = element.parentElement

    element.addEventListener('click', () => {
        Tache_Parente.parentNode.removeChild(Tache_Parente)
    })

});

//////////////////////////////////////
///         backend side           ///
//////////////////////////////////////


// - une fonction pour ajouter une tache dans la bd JSON.parse(mystr)



function Ajouter_Une_Tache(Tache_Saisie) {

    const text = `<div class="tache">
                     <span class="alreadyDone unchecked material-icons">radio_button_unchecked</span>
                     <p class="contenu_tache"> ${Tache_Saisie} </p>
                     <span class="trash material-icons">delete</span>
                </div>`

    const position = "beforeend"

    ListeDesTaches.insertAdjacentElement(position, text);

}
Ajouter_Une_Tache("hdy hdh")
    // - une fonction pour supprimer une tache dans la bd


Zone_De_SAISE.addEventListener("keyup", event => {


    if (event.keyCode === 13) {

        Tache_Saisie = Zone_De_SAISE.value
        Ajouter_Une_Tache(Tache_Saisie)
        Zone_De_SAISE.value = ""
    }
})



Bouton_Add.addEventListener('click', () => {
    Tache_Saisie = Zone_De_SAISE.value
    Ajouter_Une_Tache(Tache_Saisie)
    Zone_De_SAISE.value = "";


})