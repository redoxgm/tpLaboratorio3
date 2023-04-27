



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
    let numeroLikeactualizado = numeroLike + 1;
    document.getElementById("numeroLike").innerText= numeroLikeactualizado;
   
   
    console.log(numeroLike);
    console.log(numeroLikeactualizado)
   
   
   
}

function comentarios(){

    let txtComentario = document.getElementById("txtComentario").value;
    let txtUsuario = document.getElementById("txtUsuario").value;
    let cantidad = txtUsuario.length;
    let mensajeError ="Debe ingresar un usuario";
    
    console.log(txtUsuario)

    if(cantidad != 0){

       let nuevoComentarios = document.createTextNode(txtUsuario + ": " + txtComentario )
       let parrafo =document.createElement('p');
       parrafo.appendChild(nuevoComentarios);
       document.getElementById("divComentarios").appendChild(parrafo);

       console.log(cantidad);
     
    }else{
       console.log("error")
    }

}

seguir();
document.getElementById("btnLike").addEventListener('click',botonMeGusta);
document.getElementById("btnComentar").addEventListener("click",comentarios);






