<template>
    <div>
        <h1>About this app</h1>
        <v-card class="d-flex justify-center flex-column">

            <v-card-title>Purpose</v-card-title>
                <v-card-text>
                    This is a simple exercise to combine Laravel framework (BACKEND) with Vue framework (FRONTEND) in a single web application.
                </v-card-text>

            <v-card-title>How it works</v-card-title>
            <v-card-text>
                The dataflow starts from the web.php.<br>
                At startup the Laravel router resolves the browser URL,
                it doesn't matter the entered URL, the home.blade.php view is returned.
                The blade contains a reference to the Vue instance (id="#app") that render the main Vue component,
                that is the Vue "entry-point" (App.vue). <br>
                App.vue uses the vue-router (through "&lt;view-router&gt;" tag) to render the vue component
                according to the specified URL. <br>
            <v-img class="my-2" alt="lavu flowchart" max-width="420" src="assets/laravelvue_flowchart.png"></v-img>
                The URL='/' (the root) will render the MainPage component.<br>
                The URL='/about' will render the About component.<br>
                The MainPage component makes an Axios call to a Laravel API.
                According to the api.php file, the corresponding Laravel controller (rmController.php) is invoked
                and the data is returned to the component via the Axios response.
                For simplicity the Laravel controller retrieves data making a call to an external API, but,
                commonly it should read from a DB. <br>
                The MainPage component display received data.
            </v-card-text>


            <v-card-title>Technologies</v-card-title>
            <v-card-text>
                <ul>
                    <li>LARAVEL v8.14.0</li>
                    <li>VUE.JS v2.6.12</li>
                    <li>VUETIFY v2.3.17</li>
                    <li>VUE-ROUTER v3.4.9</li>
                </ul>
            </v-card-text>

        </v-card>
    </div>
</template>

<script>
export default {
    name:"About",  // nome di questo componente
    
}
</script>

<style lang="css" scoped>

</style>
