const boton = document.getElementById("btn");
boton.addEventListener("click", ()=> {
let comments =document.getElementById("comments").value;
document.getElementById("comments").value = " ";
const cont = document.getElementById("cont");

const newComments = document.createElement("div");
if (comments.length === 0 || comments == null ) {
    alert(" debes ingresar un mesaje");
    return false;
}

const chck = document.createElement("input");
chck.type = "checkbox";
let textNewComment = document.createTextNode(comments);

const contenedorElemento = document.createElement("p");
contenedorElemento.appendChild(textNewComment);
newComments.appendChild(contenedorElemento);

cont.appendChild(newComments);
})