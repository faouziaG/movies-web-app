<template>
  <div class="row gutters justify-content-between">

    <div class="col-12 align-content-center">
      <h5 class="text-light mt-3 ">Movies List</h5>
      <div class="row" >
        <div style="max-width: 400px ; height: 200px" v-for="(movie , index ) in myWatchList" :key="index"
             class="card d-flex flex-row m-1 col-3"
        >
          <img style="width: 100px" class="card-img-left" :src="movie.Poster" alt="Card image cap">
          <div class="card-body">
            <h4>{{ movie.Title }}</h4>
            <p class="card-text">{{ movie.Year }}</p>
            <p class="badge badge-warning">{{ movie.Type }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

import {useMovies} from "@/services/useMovies";

const {
  myWatchList,
} = useMovies();





</script>

<style scoped>

</style>
