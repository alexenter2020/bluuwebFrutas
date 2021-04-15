const app = new Vue({
    el: '#app',
    data: {
        titulo: 'Hola mundo con Vue (Soy JSe)',
        frutas: [
            {nombre: 'Pera', cantidad:10},
            {nombre: 'Manzana', cantidad:0},
            {nombre: 'Banano', cantidad:11}
        ],

        nuevaFruta: '',
        total: 0
    },
    methods:{
        agregarFruta () {
            this.frutas.push({
                nombre:this.nuevaFruta, cantidad: 0
            })
            console.log("Agregaste fruta")
            this.nuevaFruta = '';
        }
    },

    computed: {
        sumarFrutas() {
            this.total = 0;
            for (fruta of this.frutas){
                this.total = this.total + fruta.cantidad;
            }
            return this.total;
        }
    }
})

var app2 = new Vue ({
    el: '#app2',
    data: {
        message: 'Usted cargó esta página el ' + new Date().toLocaleString()
    }
})