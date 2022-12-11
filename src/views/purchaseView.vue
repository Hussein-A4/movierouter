<script setup>
import { useStore } from '../store/index.js'
import { storeToRefs } from 'pinia'
import modal from "../components/siteModal.vue"

const main = useStore()

var moviesData = []
var cartData = []

// extract specific store properties
const { movies, getMovies } = storeToRefs(main)

main.getMovies()
moviesData = movies
console.log(moviesData)

const openModal = () => {
    console.log('clicked')
    //check if exists to avoid duplicates
}

const checkout = () => {
    console.log('checkout')
}
</script>

<template>
    <h1>Purchase</h1>
    <img v-for="movie in moviesData" :src="movie.poster" @click="openModal(movie.id)"/>
    <button @click="checkout()"> </button>
    <div class="siteModal">
        <modal />
    </div>
</template>

<style scoped>
img{
    aspect-ratio: 2/3;
    width: 200px;
}
</style>