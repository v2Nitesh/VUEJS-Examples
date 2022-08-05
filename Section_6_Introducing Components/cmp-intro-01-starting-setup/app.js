const app = Vue.createApp({
    data() {
        return {
            friends: [
                {
                    id: 'Manuel Lorenz',
                    name: 'Manuel Lorenz',
                    phone: '01234 5678 991',
                    email: 'manuel@localhost.com'
                },
                {
                    id: 'Julie',
                    name: 'Julie Jones',
                    phone: '09876 543 221',
                    email: 'julie@localhost.com'
                }
            ]
        }

    },
    methods: {
    }

})

app.component('friend-contact', {

    template: `
    <li>
    <h2>{{ friend.name }}</h2>
    <button :key="friend.id" @click="toggleDetails">{{ detailsAreVisible ? 'Hide' : 'Show'}} Details</button>
    <ul v-if="detailsAreVisible">
      <li><strong>Phone:</strong> {{ friend.phone  }}</li>
      <li><strong>Email:</strong> {{ friend.email  }}</li>
    </ul>
  </li>
  `,

    data() {
        return {
            detailsAreVisible: false,
            friend: {
                id: 'Manuel Lorenz',
                name: 'Manuel Lorenz',
                phone: '01234 5678 991',
                email: 'manuel@localhost.com'

            }
        }


    },
    methods: {
        toggleDetails() {
            this.detailsAreVisible = !this.detailsAreVisible;
        }

    }

});

app.mount('#app')
