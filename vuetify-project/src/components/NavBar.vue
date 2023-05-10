<template>
    <v-app id="home"></v-app>
    <v-app-bar app color="black" dark flat class="px-12" >
    <v-btn >
        <v-icon color="warning" icon="mdi-drama-masks" size="x-large"></v-icon> <a class="text-yellow">Bannana</a>
    </v-btn>
    <v-spacer></v-spacer>
    <v-btn text class="text-yellow"> Home</v-btn>
    <v-btn text class="text-yellow"> About</v-btn>
    <v-btn text class="text-yellow" href="/pizdec">Naked BANNANNA</v-btn>
    </v-app-bar>
</template>
<script>
export default {
name: 'NavBar',
}
</script>