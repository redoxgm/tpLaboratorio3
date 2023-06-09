
const app = Vue.createApp({
    data() {
        return {
            fotoGlobo: "https://i.imgur.com/Qx8uR89.png",
            fotoPerfil: "https://i.imgur.com/99qgQJy.jpeg",
            datosPersonales: ['Jane Doe',
                'email : jane_doe@rmail.com',
                'FechaNacimiento : 12/04/1996',
                'Telefono : 918-936-4569',
                'Ciudad: tokyo,Japon',
                'Trabajando en : https://canon.jp'],

            descripcion: '¡Hola a todos! Soy Jane, y actualmente vivo en la vibrante y emocionante ciudad de Tokio,Japón. Me encanta capturar la esencia de la vida urbana a través de mi lente, explorandoel constraste entre la arquitectura moderna y las tradiciones centenarias que convivenen esta metrópolis única. Desde rascacielos deslumbrantes y calles bulliciosas hastatemplos serenos y jardines tranquilos, encuentro inspiracion en cada rincon de esta increible ciudad. ',
            btnSeguir: "Seguir",
            bandera: true,
            posteo: "https://i.imgur.com/bq9db41.jpeg",

            numeroLike: 200,
            disableButton: false,
            comentario1: "juan Perez: ¡que buena Foto!",
            comentario2: "Sofia Paz: tengo que volver algun dia",

            usuario: '',
            comentario: '',
            nuevoComentario: [],
            bComentar: false,

            mostrarError: false,
            mostrarBtn: false

        }
    },
    methods: {
        seguir() {

            if (this.btnSeguir === "Seguir") {
                this.btnSeguir = "Dejar de Seguir"
            } else {
                this.btnSeguir = "Seguir"
            }

        },
        numLike() {
            this.disableButton = true
            this.numeroLike += 1

            if (this.numeroLike > 201) {
                this.disableButton = false
            }

        },
        agregarComentario() {
            this.bComentar = false
            this.mostrarError = false
            this.mostrarBtn = false

            if (this.usuario != "" && this.comentario != "") {
                this.bComentar = true
                this.mostrarBtn = true
                this.nuevoComentario.push({

                    usuario: this.usuario,
                    comentario: this.comentario
                }),

                    this.usuario = ''
                this.comentario = ''
            }
            else {
                this.mostrarError = true
            }
        },
        eliminarComentario(id) {
            const index = this.nuevoComentario.findIndex(comentario => comentario.id === id)
            if (index !== -1) {
                this.nuevoComentario.splice(index, 1)
            }
        }

    }
}

)