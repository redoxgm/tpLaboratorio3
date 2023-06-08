app.component('comentarios', {

    template:
        /*html*/
        ` 
           
            <div class="Perfil-Post">
            
            <p>Publicado hace 1 Semana </p>

            <img :src= "posteo" alt="Imagen" srcset="" width="300px" id="Posteo">
            <button id="btnLike" @click = "numLike" :disabled="disableButton">Me gusta</button>
            <div>{{numeroLike}} like </div>

            </div>
        


            <h5>Comentarios</h5>

            <div class="Coments">

                
                <p>{{comentario1}}</p>

                <p>{{comentario2}} </p>

                <div>

                <p v-for="comentario in nuevoComentario">{{ usuario }} : {{ comentario }}</p>
                
              </div>

                
                <div>
                    <input id="txtComentario" placeholder="Ingrese su Comentario" v-model="comentario"> 
                
                    <button id="btnComentar" @click = "agregarComentario" :disable="bComentar">Comentar</button>
                </div>


            </div>`,

    data() {
        return {

            comentario1: "juan Perez: ¡que buena Foto!",
            comentario2: "Sofia Paz: tengo que volver algun dia",


            comentario: '',
            nuevoComentario: [],
            bComentar: false,
            numeroLike: 200,
            disableButton: false,
            posteo: "https://i.imgur.com/bq9db41.jpeg",

        }
    },
    methods: {

        numLike() {
            this.disableButton = true
            this.numeroLike += 1

            if (this.numeroLike > 201) {
                this.disableButton = false
            }
        },

        agregarComentario() {
            this.bComentar = false

            if (this.usuario !== "" && this.comentario !== "" && this.comentario.length > 0) {
                this.bComentar = true
                this.nuevoComentario.push({

                    usuario: this.usuario,
                    comentario: this.comentario
                }),

                    this.usuario = '';
                this.comentario = '';
            }

        }




    }

})