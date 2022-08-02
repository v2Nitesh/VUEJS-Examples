const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      fullName: '',
      lastName: ''
    };
  },

  watch:{

    counter(value){
      if(value > 50){
        const that = this;
        setTimeout(()=> {
          that.counter = 0;

        }, 2000)
       
      }
    }

    // name(value, oldValue){
    //   console.log("name Watcher", value, 'Old Val ==> ' + oldValue)

    //   if (value === ''){
    //     this.fullName = ''
    //   }else {
    //     this.fullName = value + ' ' + this.lastName

    //   }
    // },
    // lastName(value) {

    //   if (value === ''){
    //     this.fullName = ''
    //   }else {
    //     this.fullName = this.name + ' ' + value

    //   }

    // }

  },

  computed: {
    // fullName(){
    //   console.log("Running Again....");
    //   if (this.name === '')
    //   {
    //     return '';
    //   }
    //   return this.name + ' ' + 'Meshram';


    // }
  },

  methods: {
    outputFullname() {
      console.log("Running Again....");
      if (this.name === '')
      {
        return '';
      }
      return this.name + ' ' + this.lastName;

    },

    setName(event) {
      this.name = event.target.value // + ' ' + lastName;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetInput() {
      // document.querySelector('input').value = '';
      this.name = '';
    }
  }
});

app.mount('#events');
