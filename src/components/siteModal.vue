<script setup>

import axios from "axios"
import { ref } from "vue"
import { useStore } from '../store'
const props = defineProps(["id"]);
const emits = defineEmits(["toggleModal"]);

const movies = ref(null);
const movieData = ref(null);

const store = useStore();

const getMovie = async () => {
  movieData.value = (
    await axios.get(`https://api.themoviedb.org/3/movie/${props.id}`, {
      params: {
        api_key: "45f0db8e20f87e3e431aa1750076bb74",
        append_to_response: "videos",
      },
    })
  )
};


getMovie();
// await store.getMovies();

console.log(props.id);

let id = props.id

</script>

<template>
  <Teleport to="body">
    <div class="modal-outer-container" @click.self="emits('toggleModal')">
      <div class="modal-inner-container" v-if="movieData">
        <button class="close-button" @click="emits('toggleModal')">X</button>
        <h1>{{ props.id }}</h1>
        <h1>{{ movieData.title }}</h1>
        <button class="purchaseBtn">Purchase</button>
        <img id="image" :src="`https://image.tmdb.org/t/p/w500${movieData.poster_path}`" alt="no image" />
      </div>
    </div>
  </Teleport>
</template>

<style scoped>
.modal-outer-container {
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background: #0000008c;
  z-index: 3;
}

.modal-outer-container .modal-inner-container {
  background-color: #abcbeb;
  width: clamp(280px, 100%, 800px);
  height: 400px;
  position: relative;
  border: 10px;
}

.modal-outer-container .modal-inner-container .close-button {
  position: absolute;
  right: 0px;
  padding: 1rem;
  border: none;
  background: #1F2123;
  font-weight: bold;
  font-size: 1.25rem;
  color: white;
}
</style>
