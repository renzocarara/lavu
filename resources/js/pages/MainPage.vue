<template>
    <div>
        <h1 class="text-center">Ricky and Morty characters:</h1>
        
        <div v-if="isLoading">
            <v-progress-circular indeterminate color="deep-purple"></v-progress-circular>
            <p class="purple--text">Reading data...</p>
        </div>
        <v-container class="d-flex flex-wrap justify-center">   
            <v-card width="200" class="mx-3 my-3" v-for="character in rm" :key="character.id">
                <v-card-title>{{ character.id }}. {{ character.name }}</v-card-title>
                <v-img :src="character.image"></v-img>
            </v-card>
        </v-container>   

    </div>
</template>

<script>
export default {
    name:"MainPage",  // nome di questo componente
    data () { 
        return {
            rm: [],
            isLoading:true,
        }
    },
    mounted() {
        console.log('loadRmData() called...');
        this.loadRmData();
        },
    methods: {
        loadRmData() {
            // leggo i dati via api call
            axios({
                method: 'GET',
                url: '/api/rm', // API locale all'interno di questa APP
            })
                .then(response => {
                    this.handleSuccess(response);
                })
                .catch(error => {
                    this.handleError(error);
                })
                .finally(()=> {this.isLoading=false;});
        },

        handleSuccess(response) {
            console.log('API CALL SUCCESS');
            console.log('response.data', response.data);
            // 
            this.rm = response.data;
        },
        handleError(error) {
            console.log('API CALL FAILED');
            console.log('error', error);
            alert('API call failed!');
        },
    }
}
</script>

<style lang="css" scoped>
img.avatar{
    width:60;height: 60px;
}
</style>
