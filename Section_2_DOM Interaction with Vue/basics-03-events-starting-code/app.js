const app = Vue.createApp({
  data() {
    return {
      counter: 10,
      name: '',
      confirmedName: ''
    };
  },
  methods:{
    confirmInput() {
      this.confirmedName = this.name;
    },
    add(num) {
      this.counter =  this.counter + num; 
    },
    reduce(num) {
      this.counter = this.counter - num;;
    },
    setName(event,lastName){
      this.name = event.target.value + ' ' + lastName;
    },
    submitForm() {
      // event.preventDefault();
      alert("Submitted")
    }

  }
});

app.mount('#events');
