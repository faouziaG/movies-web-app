<template>
  <div class="">
    <nav
        class="navbar navbar-expand-lg navbar-light bg-light d-flex justify-content-cente bg-black"
    >
      <span class="navbar-toggler-icon bg-warning rounded rounded-1 me-2"></span>
      <a class="navbar-brand text-warning" href="#">WebSite</a>
      <div class=" mx-2 collapse navbar-collapse" id="navbarSupportedContent">
        <form class="form-inline my-2 my-lg-0">
          <input
              class="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              v-model="searchedKey"
              style="width: 500px;max-width: 100%"

          />
        </form>
        <ul class="navbar-nav mr-auto align-self-end">
          <li class="nav-item">
            <RouterLink :to="{name:'watchlist'}" class="nav-link  text-white border border-warning rounded rounded-1 ">
              <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg"
                   class="ipc-icon ipc-icon--watchlist ipc-button__icon ipc-button__icon--pre"
                   id="iconContext-watchlist" viewBox="0 0 24 24" fill="currentColor" role="presentation">
                <path
                    d="M17 3c1.05 0 1.918.82 1.994 1.851L19 5v16l-7-3-7 3V5c0-1.05.82-1.918 1.851-1.994L7 3h10zm-4 4h-2v3H8v2h3v3h2v-3h3v-2h-3V7z"
                    fill="currentColor"></path>
              </svg>
              WatchList
            </RouterLink>
          </li>
          <li class="nav-item ms-1">
            <select class="nav-link bg-black text-white border  border-warning rounded rounded-1" name=""
                    id="gg">
              <option value="EN">EN</option>
              <option value="FR">FR</option>
            </select>
          </li>
        </ul>
      </div>
    </nav>
  </div>
  <div class="content">
    <section style="background-color: black">
      <div v-if="movie" style="max-width: 400px ; height: 200px" class="card d-flex flex-row m-1 col-3">
        <img style="width: 100px" class="card-img-left" :src="movie.Poster" alt="Card image cap">
        <div class="card-body">
          <h4>{{ movie.Title }}</h4>
          <p class="card-text">{{ movie.Year }}</p>
          <p class="badge badge-warning">{{ movie.Type }}</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import {defineProps, onMounted, ref} from "vue";
import {useMovies} from "@/services/useMovies";

const searchedKey = ref('best');

const {movie, fetchMovie} = useMovies();

const props = defineProps({
  id: {
    type: String,
    default: "",
    required: true
  }
})

onMounted(() => {
  loadMovie();
})

const loadMovie = async () => {
  await fetchMovie(props.id);
}


</script>
