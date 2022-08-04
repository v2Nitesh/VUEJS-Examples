const app = Vue.createApp({
    data(){
        return {
            tasks:[],
            enteredTasks: '',
            toggleTaskList: false
        }
    },
    methods:{
        addTask() {
            if (this.enteredTasks !== ''){
                this.tasks.push(this.enteredTasks)
                if (this.tasks.length === 1){
                    this.toggleTaskList = !this.toggleTaskList;

                }
            }
            
        },
        toggleButton(){
            this.toggleTaskList = !this.toggleTaskList;

        }
    }

})

app.mount('#assignment');