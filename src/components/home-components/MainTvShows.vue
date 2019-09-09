<template>
    <div class="p-4">
        <h3>Discover: TV Shows</h3>
        <div class="row">
            <div class="col-4 px-2" v-for="movie in discoverTv">
                <div class="poster">
                    <img class="img-fluid" :src="getImagePath(movie.poster_path)" alt="">
                    <div class="overview text-center p-2"><p>{{movie.overview.substr(0, 250) + '...'}}</p></div>
                    <div class="poster-title text-center p-1">
                        <a class="text-white text-center" href="#">{{movie.name}}</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="mt-1"><a href="#">Browse more movies</a></div>
    </div>
</template>

<script>
export default {
    props:{
        discoverTv: {required: true}
    },
    data(){
        return {
            baseImgPath: 'https://image.tmdb.org/t/p/w300'
        }
    },
    methods: {
        getImagePath(path){
            return this.baseImgPath + path;
        }
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
    .overview{
        background-color: transparent;
        color: transparent;
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
    }
    .overview:hover{
        background-color: rgba(0, 0, 0, 0.6);
        color: white;
    }
</style>
