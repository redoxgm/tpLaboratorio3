
function seguir(){
    document.getElementById("btnSeguir").addEventListener('click',function(){
        if(this.value === "Seguir"){
            this.value = "Dejar de Seguir";
        }else{
            this.value = "Seguir";
        }
        
    })
}

function botonMeGusta(){
   
    let botonMeGusta = document.getElementById("btnLike").value;
    let numeroLike = document.getElementById("numeroLike").innerText;
    numeroLike= parseInt(numeroLike);
    let numeroLikeactualizado = 0;
    numeroLikeactualizado = numeroLike + 1;
    document.getElementById("numeroLike").innerText= numeroLikeactualizado;
    
    if(numeroLikeactualizado > 0){
        
        botonMeGusta.disabled = true;
       

        }
    
   
    }
    
function comentarios(){

    let txtComentario = document.getElementById("txtComentario").value;
    let txtUsuario = document.getElementById("txtUsuario").value;
    let cantidad = txtUsuario.length;
    let cantidadComentario =txtComentario.length;
    let mensajeError ="Debe ingresar un usuario";
    
    console.log(txtUsuario)

    if(cantidad != 0 && cantidadComentario !=0){

       let nuevoComentarios = document.createTextNode(txtUsuario + ": " + txtComentario )
       let botonEliminar = document.createElement('input');
       botonEliminar.type = "button";
       botonEliminar.value = "Eliminar";
       botonEliminar.id= "btnEliminar";
       let parrafo =document.createElement('p');
       parrafo.id ="parrafoComentario";
       parrafo.appendChild(nuevoComentarios);
       parrafo.appendChild(botonEliminar);

       document.getElementById("divComentarios").appendChild(parrafo);

       
       document.getElementById("btnEliminar").addEventListener('click',function(){

            let borrar = document.getElementById("parrafoComentario");
            let elemento = borrar.parentNode;
            elemento.removeChild(borrar);
       })


     
    }else{
       
       let nuevoComentarios = document.createTextNode("Usuario no ingresado o Comentario en blanco")
       let parrafoError =document.createElement('h3');
       parrafoError.id = "error";
       parrafoError.appendChild(nuevoComentarios);
       document.getElementById("divComentarios").appendChild(parrafoError);
       
       function eliminarError(){
        let borrar = document.getElementById("error");
            let elemento = borrar.parentNode;
            elemento.removeChild(borrar);
       }
       
       setTimeout(eliminarError,3000)

    }

}

seguir();

document.getElementById("btnLike").addEventListener('click',botonMeGusta);

document.getElementById("btnComentar").addEventListener('click',comentarios);






