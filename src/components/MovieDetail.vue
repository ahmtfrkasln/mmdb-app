<template>
    <div>
        <div class="row bg-dark py-2">
            <div class="col text-center">
                <a href="#">FULL CAST AND CREW</a>
            </div>
            <div class="col border-left border-secondary text-center">
                <a href="#">TRIVIA</a>
            </div>
            <div class="col border-left border-secondary text-center">
                <a href="#">USER REVIEWS</a>
            </div>
            <div class="col border-left border-secondary text-center">
                <a href="#">MORE</a>
            </div>

            <div class="col text-center">
                <a href="#">SHARE</a>
            </div>
        </div>
        <template v-if="details && credits">
            <div class="row bg-dark py-2">
                <div class="ml-4">
                    <a href="#" data-toggle="tooltip" data-placement="bottom" title="Add to watchlist">
                        <i class="fas fa-plus text-white bg-secondary p-3 h4"></i></a>
                </div>
                <div class="col text-white">
                    <span class="h1">{{details.title}} </span>
                    <span class="h3">({{details.release_date.substr(0, 4)}})</span>
                </div>
                <div class="row mr-4">
                    <i class="fas fa-star h1 text-warning my-auto"></i>
                    <span class="text-white">
                        <span class="h3">{{details.vote_average}}</span>/10 <br>
                        {{details.vote_count}}
                    </span>
                </div>
            </div>
            <div class="row bg-dark text-white">
                <div class="col border-secondary text-center">
                    Run time: {{(details.runtime/60).toFixed(0) + 'h ' + (details.runtime%60) + 'min'}}
                </div>
                <div class="col border-left border-secondary text-center">
                    Release date: {{details.release_date}}
                </div>
            </div>
            <div class="row bg-dark p-3">
                <div class="col-4">
                    <img class="img-fluid" :src="getImagePath(details.poster_path)" alt="">
                </div>
                <div class="col-8">
                    <template v-if="videos.length > 0">
                        <div class="bg-black h-100">
                            <div class="embed-container">
                                <template v-for="(video, i) in videos" >
                                    <iframe v-if="i === videoIndex" :src=getVideoPath(video.key) frameborder="0" allowfullscreen></iframe>
                                </template>
                            </div>
                            <p class="text-center pt-2">
                                <a class="text-white border border-white px-1 mr-1" href="" @click.prevent="firstVideo()">
                                    <i class="fas fa-fast-backward"></i> First video
                                </a>
                                <a class="text-white border border-white px-1" href="" @click.prevent="nextVideo()">
                                    Next video <i class="fas fa-forward"></i>
                                </a>
                            </p>
                        </div>
                    </template>

                    <template v-if="!videos || videos.length === 0">
                        <p class="text-warning">Video link is not exist</p>
                    </template>
                </div>
            </div>
            <div class="bg-light p-3">
                <p>{{details.overview}}</p>
                <hr>
                <h3>Cast</h3>

                <table class="table table-striped">
                    <tbody>
                    <tr v-for="cast in credits">
                        <td class="w-50">
                            <div class="row">
                                <img class="img-fluid" :src="getCastImage(cast.profile_path)" alt="">
                                <p class="col my-auto">{{cast.name}}</p>
                                <p class="my-auto mr-4">...</p>
                                <p class="col my-auto">{{cast.character}}</p>
                            </div>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </template>
    </div>
</template>

<script>
    import axios from "axios";
    export default {
        data(){
            return{
                apiKey: '?api_key=70e485ff76270023305e9f3c203e8426',
                baseImgPath: 'https://image.tmdb.org/t/p/w300',
                castImgPath: 'https://image.tmdb.org/t/p/w45',
                path: 'https://api.themoviedb.org/3/movie/',
                details: null,
                credits: null,
                videoIndex: 0,
                videos: []
            }
        },
        methods: {
            getData(){
                axios.get(this.path + this.$route.params.id + this.apiKey)
                    .then(res => res.data)
                    .then(result => {
                        this.details = result;
                    });
                axios.get(this.path + this.$route.params.id + '/credits' + this.apiKey)
                    .then(res => res.data)
                    .then(result => {
                        this.credits = result.cast.splice(0, 10);
                    });
                this.getVideo(this.$route.params.id);
            },
            getImagePath(path){
                return this.baseImgPath + path;
            },
            getCastImage(path){
                return this.castImgPath + path;
            },
            getVideoPath(key){
                return "https://www.youtube.com/embed/" + key;
            },
            getVideo(id){
                let path = 'https://api.themoviedb.org/3/movie/'+ id + '/videos?api_key=70e485ff76270023305e9f3c203e8426&language=en-US';
                axios.get(path)
                    .then(res => res.data)
                    .then(videos => {
                        let results = videos.results;
                        if(results && results.length > 0){
                            this.videos = results;
                        }
                    });
            },
            nextVideo(){
                this.videoIndex = (this.videoIndex + 1) % this.videos.length;
            },
            firstVideo(){
                this.videoIndex = 0;
            }
        },
        created(){
            this.getData();
        },
        watch:{
            '$route': 'getData'
        }
    };
</script>

<style scoped>
    a {
        color: white;
    }

    .embed-container {
        position: relative;
        padding-bottom: 56.25%;
        height: 0;
        overflow: hidden;
        max-width: 100%;
    }

    .embed-container iframe, .embed-container object, .embed-container embed {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }

    .bg-black{
        background-color: black;
    }
</style>
