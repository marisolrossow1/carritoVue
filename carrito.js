const app = Vue.createApp({
    data(){
        return {
            capsulaId: 1,
            nombre: '',
            descripcion: '',
            img: '',
            precio: '',
            categoria: '',
            capsulas: [],
            carrito: [],
            total: 0
        }
    },
    created() {
            console.log('Creación de Vue :D');
            this.getJSON();
    },
    methods: {
        async getJSON(){
            const resp = await fetch("api/productos.json");
            const json = await resp.json();
            console.log(json);
            this.capsulas = json.capsulas;
        },
        obtenerProducto(id){
            const capsula = this.capsulas.find( item => item.id == id );
            return capsula ? capsula.nombre : '';
        },
        agregarAlCarrito(capsula) {
            console.log('Agregado al carrito');
            const agregadoCarrito = {
                nombre: capsula.nombre,
                capsulaId: capsula.id,
                precio: capsula.precio,
            };
            console.log(agregadoCarrito);
            this.carrito.push(agregadoCarrito);
            this.totalCarrito();
        },
        totalCarrito(){
            this.total = 0;
            this.carrito.forEach(cafe => {
            this.total += cafe.precio;
            });
        }
    }
})

app.mount('#app');