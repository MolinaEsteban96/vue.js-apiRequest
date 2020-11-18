const app = new Vue({
    el: "#app",
    data: {
        title: "EL DÓLAR HOY",
        name: "",
        state: false,
        todos: null,
        disabled: false
    },
    mounted(){
       this.getTodos();
    },
    methods: {
        changeState: function() {
            this.state = true;
            this.disabled = true;
        },
        getTodos: function(){
            fetch("https://www.dolarsi.com/api/api.php?type=valoresprincipales")
                .then(response=> response.json())
                .then(data => {
                    this.todos = data;
                    console.log(data)
                })
                .catch(e => console.log(e))
        }
    },
})