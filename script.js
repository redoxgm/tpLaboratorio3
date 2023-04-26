

function comprobarUsuario(){
    let txtUsuario = document.getElementById("txtUsuario").value;
    let cantidad = txtUsuario.length
    let mensajeError ="Debe ingresar un usuario"

    if(a != 0){
        txtUsuario;
       
    }else{
        mensajeError;
    }
}

function seguir(){
    document.getElementById("btnSeguir").addEventListener('click',function(){
        if(this.value === "Seguir"){
            this.value = "Dejar de Seguir"
        }else{
            this.value = "Seguir"
        }
        
    })
}

function botonMeGusta(){

    let btnLike =document.getElementById("btnLike").value;
    let contadorLike = document.getElementById("contadorLike").innerText;
   
  
       
       

    
}

seguir()
document.getElementById("btnLike").addEventListener('click',botonMeGusta)






