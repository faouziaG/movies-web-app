<template>
  <div class="row gutters justify-content-between">
    <div class="col-xl-8 col-lg-8 col-md-8 col-sm-6 col-12">

      <div id="carouselExampleCaptions" class="carousel slide m-0" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner  m-3">
          <div style="width: 200px;height: 400px" v-for="(movie , index) in movies" :key="index" class="carousel-item "
               :class="index==0 ? 'active' : ''">
            <img :src="movie.Poster" class="rounded d-block w-100" alt="Carousel">
            <div class="carousel-caption d-none d-md-block">
              <h5>{{ movie.Title }}</h5>
              <p>{{ movie.Year }}</p>
            </div>
          </div>
        </div>
        <a class="carousel-control-prev" style="color: yellow" href="#carouselExampleCaptions" role="button"
           data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only" style="color: yellow">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>

    </div>
    <div class="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12 align-content-center">
      <h5 class="text-light mt-3 ">Movies List</h5>
      <div class="" style="max-height: 800px ; overflow-y: scroll">
        <div style="max-width: 400px ; height: 200px" v-for="(movie , index ) in movies" :key="index"
             class="card d-flex flex-row m-1"
        >
          <img style="width: 100px" class="card-img-left" :src="movie.Poster" alt="Card image cap">
          <div class="card-body">
            <h4 @click="showMovie(movie)">{{ movie.Title }}</h4>
            <p class="card-text">{{ movie.Year }}</p>
            <p class="badge badge-warning">{{ movie.Type }}</p>
            <div role="button" @click="addToWatchList(movie)"  class="justify-content-end"
                 :class="myWatchList.indexOf(movie)===-1?'':'text-warning'">
              Add to Watch List
              <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg"
                   class="ipc-icon ipc-icon--watchlist ipc-button__icon ipc-button__icon--pre"
                   id="iconContext-watchlist" viewBox="0 0 24 24" fill="currentColor" role="presentation">
                <path
                    d="M17 3c1.05 0 1.918.82 1.994 1.851L19 5v16l-7-3-7 3V5c0-1.05.82-1.918 1.851-1.994L7 3h10zm-4 4h-2v3H8v2h3v3h2v-3h3v-2h-3V7z"
                    fill="currentColor"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

import {useMovies} from "@/services/useMovies";
import {defineProps, onMounted, watch} from "vue";
import router from "@/router";

const props = defineProps({
  searchedKey: {
    type: String,
    default: 'bes',
    required: false
  }
})

const {
  fetchMovies,
  movies,
  loading,
  myWatchList
} = useMovies();


onMounted(() => {
  loadMovies();
})

const loadMovies = async () => {
  console.log(props.searchedKey)
  await fetchMovies(props.searchedKey);
  console.log(movies.value)
}

watch(() => props.searchedKey, () => {
  console.log("Load Moor ", props.searchedKey);
  loadMovies();
})

const addToWatchList = (movie) => {
  if (myWatchList.value.indexOf(movie) === -1) {
    myWatchList.value.push(movie);
  } else {
    myWatchList.value = myWatchList.value.filter((m)=>m!==movie);
  }
}

const showMovie = (movie)=>{
  router.push({
    name:'details',
    params:{
      id:movie.imdbID
    }
  })
}


</script>

<style scoped>

</style>
