<template>
    <div class="bg-dark p-3">
        <div class="row">
            <div class="col-4 px-2" v-for="movie in discoverMovie">
                <div class="poster" data-toggle="tooltip" data-placement="bottom" :title="movie.overview.substr(0, 100) + '...'">
                    <img class="img-fluid" :src="getImagePath(movie.poster_path)" alt="">
                    <div class="text-center">
                        <a class="text-white poster-media display-3" href="" @click.prevent="getVideo(movie.id)">
                            <i class="far fa-play-circle"></i>
                        </a>
                    </div>
                    <div class="poster-title text-center p-1">
                        <a class="text-white text-center" :href="'/movie/' + movie.id">{{movie.title}}</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="mt-1"><a href="#">Browse more movies</a></div>
        <MainTrailerModal :videoKey=videoKey :title=videoTitle />
    </div>
</template>

<script>
import MainTrailerModal from './MainTrailerModal'
import axios from "axios";
import JQuery from 'jquery';
let $ = JQuery;

export default {
    props:{
        discoverMovie: {required: true}
    },
    data(){
        return {
            baseImgPath: 'https://image.tmdb.org/t/p/w300',
            videoKey: null,
            videoTitle: null
        }
    },
    methods: {
        getImagePath(path){
            return this.baseImgPath + path;
        },
        getVideo(id){
            this.videoKey = null;
            let path = 'https://api.themoviedb.org/3/movie/'+ id + '/videos?api_key=70e485ff76270023305e9f3c203e8426&language=en-US';
            axios.get(path)
                .then(res => res.data)
                .then(videos => {
                    let results = videos.results;
                    if(results && results.length > 0){
                        this.videoKey = results[0].key;
                        this.videoTitle = results[0].name;
                       $('#video-player').modal('show')
                    }
                });
        }
    },
    components: {
        MainTrailerModal
    }
}
</script>

<style scoped>
    .poster{
        position: relative;
    }
    .poster-title{
        background-color: rgba(0, 0, 0, 0.5);
        position: absolute;
        bottom: 0;
        width: 100%;
    }
    .poster-media {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    i:hover{
        transition: text-shadow .5s;
        text-shadow: 0 0 5px white;
    }
</style>
