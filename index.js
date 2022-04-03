const seleccionRaiting = document.querySelector('#selection');
let raiting = "";

const cardPrincipal = document.querySelector(".card-container");
const cardSecundaria = document.querySelector(".card-container2");
const boton = document.getElementById('submit');
boton.addEventListener("click", ()=> {
    cambiarCard();
    //mostrarRaiting();
})

function cambiarCard(){
    cardPrincipal.classList.toggle("remove");
    cardSecundaria.classList.toggle("remove");
}

const divSeleccionado = document.querySelectorAll('.option');

divSeleccionado.forEach(div => {
    div.addEventListener("click", (e) => {
        div.classList.toggle("changeColor");
        raiting = e.target.textContent;
        // console.log(raiting)
        seleccionRaiting.innerHTML = ` ${raiting}`;
    })
});