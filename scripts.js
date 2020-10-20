// CONSTANTES
const contenido = document.getElementById("meter")
const lista = document.getElementById("list")
const boton = document.getElementById("boton")
const contenidoValor = contenido.value


contenido.addEventListener("input",()=> {if(contenido.value.length>0){boton.removeAttribute("disabled")}
else if(contenido.value.length<0){boton.setAttribute("disabled","disabled")}})




// ACCIONES RELACIONADAS AL PRESIONAR EL BOTON DE AGREGAR
let clickear = boton.addEventListener("click",() =>{





if(contenido.value.length>0){
// CREAMOS LAS LI Y EL BOTON DE BORRAR CON CADA UNO
let itemList = document.createElement("LI")
let itemListClass = itemList.classList.add("ItemListClass")
let itemButton = document.createElement("input")
    itemButton.type = "button"
    itemButton.value = "BORRAR"
let itemButtonClass = itemButton.classList.add("ItemButtonClass")

    

  
       
// ASIGNAMOS COMO CHILD DE LA LISTA A LOS LI
// Y LES DAMOS COMO CONTENIDO LO QUE SE META EN EL INPUT DE TEXTO
lista.appendChild(itemList)
itemList.textContent = contenido.value

// ASIGNAMOS COMO CHILD DE LOS LI SUS RESPECTIVOS BOTONES DE DELETE


itemList.appendChild(itemButton)
   


// CONDICIONAL PARA QUE AL INGRESAR TEXTO Y APRETAR EL BOTON SE VAYA ESTE TEXTO DEL CAMPO DE TEXTO
if(itemList){contenido.value=null}




// ACCIONES RELACIONADAS AL APRETAR EL BOTON DE DELETE (Borrar el elemento)
itemButton.addEventListener("click",()=>{
    lista.removeChild(itemList)
})
}




})








