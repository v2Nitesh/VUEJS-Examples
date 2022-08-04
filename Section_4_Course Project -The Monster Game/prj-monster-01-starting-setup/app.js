
function getRandomValue(max, min ) {
    return  Math.floor(Math.random() * (max - min)) + min;

}



const app = Vue.createApp({
    data() {
        return {
            playerHealth: 100,
            monsterHealth: 100,
            currentRound: 0,
            winner: null,
            logMessages: [],

        }
    },
    computed:{
        monsterBarStyle() {
            if (this.monsterHealth < 0){
                return {width: '0%'}
            }
           return {width: this.monsterHealth + '%'}
        },
        playerBarStyle() {
            if (this.playerHealth < 0){
                return {width: '0%'}
            }
            return {width: this.playerHealth + '%'}
         },
         mayUseSpecialAttack() {
            return this.currentRound % 3 !== 0;
        }

    },
    watch:{
        playerHealth(value) {
            if (value <= 0  && this.monsterHealth <= 0) {
                // A Draw
                this.winner = 'draw';

            } else if(value <= 0 ) {
                // Player Lost
                this.winner = 'monster';

            }

        },
        monsterHealth(value) {


            if (value <= 0  && this.playerHealth <= 0) {
                // A Draw
                this.winner = 'draw';

            } else if(value <= 0 ) {
                // Monster Lost
                this.winner = 'player';

            }
        }

    },
    methods: {
        startGame(){
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.currentRound =  0;
            this.winner = null;
            
        },
        attackMonoster() {
            this.currentRound++;
            const attackValue =  getRandomValue(12, 5);
            this.monsterHealth = this.monsterHealth - attackValue;
            this.addLogMessage('player', 'attack', attackValue);
            this.attackPlayer();

        },
        attackPlayer() {
            const attackValue =  getRandomValue(15, 8);
            this.playerHealth = this.playerHealth - attackValue;
            this.addLogMessage('monster', 'attack', attackValue);

        },
        specialAttackMonster() {
            this.currentRound++;
            const attackValue =  getRandomValue(25, 10);
            this.monsterHealth = this.monsterHealth - attackValue;
            this.addLogMessage('player', 'special-attack', attackValue);
            this.attackPlayer();
        },
        healPlayer() {
            const healValue =  getRandomValue(20, 8);
            if (this.playerHealth + healValue > 100) {
                this.playerHealth = 100;

            }else {
                this.playerHealth += healValue;
            }
            this.addLogMessage('player', 'heal', healValue)
            this.attackPlayer();
        },
        surrender(){
            this.winner = 'monster';
        },
        addLogMessage(who, what, value) {
            this.logMessages.unshift({
                actionBy: who,
                actionType: what,
                actionValue:value,
            })

        }
    }

})


app.mount('#game')