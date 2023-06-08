
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
            usuario: '',



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

    }
})






