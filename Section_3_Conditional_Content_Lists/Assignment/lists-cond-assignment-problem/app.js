const app = Vue.createApp({
    data() {
        return {
            tasks: [],
            enteredTasks: '',
            toggleTaskList: false
        }
    },
    computed: {
        buttonCaption() {
            return this.toggleTaskList ? 'Hide List' : 'Show List'
        }

    },
    methods: {
        addTask() {
            if (this.enteredTasks !== '') {
                this.tasks.push(this.enteredTasks)
                if (this.tasks.length === 1) {
                    this.toggleTaskList = !this.toggleTaskList;

                }
            }

        },
        toggleButton() {
            this.toggleTaskList = !this.toggleTaskList;

        }
    }

})

app.mount('#assignment');