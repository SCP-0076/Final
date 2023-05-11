<template>
    <v-app-bar app color="black" dark flat class="px-12" >
        <router-link class="link" to="/"><v-btn ><v-icon color="warning" icon="mdi-drama-masks" size="x-large"></v-icon> <a class="text-yellow">Bannana</a></v-btn></router-link>
    <v-spacer></v-spacer>
    <router-link class="link" to="/"><v-btn text class="text-yellow"> About</v-btn></router-link>
    <router-link class="link" to="/pizdec"><v-btn text class="text-yellow">Naked BANNANNA</v-btn></router-link>
    </v-app-bar>
</template>
<script>
export default {
name: 'NavBar',
}
</script>