import {ref} from "vue";
import api from "@/boot/api";


const movies = ref([]);
const movie = ref(null);
const myWatchList = ref([]);
const loading = ref(false);

const fetchMovies = (searchedKey)=>{
    loading.value = true;
    api.get("" , {
        params:{
            s:searchedKey
        }
    }).then((res)=>{
        movies.value = res.data.Search;
    }).catch(()=>{

    });
    loading.value = false;
}

const fetchMovie = (id)=>{
    loading.value = true;
    api.get("" , {
        params:{
            i:id
        }
    }).then((res)=>{
        movie.value = res.data.Search;
    }).catch(()=>{

    });
    loading.value = false;
}

export function useMovies(){
    return {
        fetchMovies ,
        fetchMovie,

        movies,
        movie,
        loading,
        myWatchList,
    }
}
