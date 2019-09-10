<template>
    <div class="col p-0 dropdown">
        <input id="search" class="w-100 rounded-left" type="text"
               placeholder="Find Movies, TV shows, Celebrities..."
               @keypress="keyPress" v-model="text">
        <div class="dropdown-menu w-100">
            <p v-if="processing" class="text-center"><img src="@/assets/pressing.gif" alt=""></p>
            <template v-if="!processing">
                <button class="close px-2" @click="hideDropdown">&times;</button>
                <div class="list-group mt-5">
                    <a class="list-group-item list-group-item-action"
                       :href="'/movie/' + res.id" v-for="res in results">
                        <div class="row">
                            <img class="img-fluid" :src="getImagePath(res.poster_path)" alt="">
                            <h5 class="col my-auto">{{res.title + ' (' + res.release_date.substr(0, 4) + ')'}}</h5>
                        </div>
                    </a>
                </div>

            </template>
        </div>
    </div>
</template>

<script>
    import axios from "axios";
    import JQuery from 'jquery';
    let $ = JQuery;

    export default {
        data(){
            return{
                apiKey: '70e485ff76270023305e9f3c203e8426',
                text: '',
                timeOut: null,
                processing: false,
                baseImgPath: 'https://image.tmdb.org/t/p/w45',
                results: []
            }
        },
        methods:{
            keyPress(){
                this.processing = true;
                this.showDropdown();
                if(this.timeOut){
                    clearTimeout(this.timeOut);
                }
                this.timeOut = setTimeout(this.timeOutFunc, 2000)
            },
            timeOutFunc(){
                const path = 'https://api.themoviedb.org/3/search/movie?language=en-US&query='
                    + this.text + '&page=1&include_adult=false&api_key=';
                axios.get(path + this.apiKey)
                    .then(res => res.data)
                    .then(result => {
                        this.processing = false;
                        this.results = result.results.splice(0, 6);
                    });
            },
            showDropdown(){
                $('#search').dropdown('show');
            },
            hideDropdown(){
                $('#search').dropdown('hide');
            },
            getImagePath(path){
                return this.baseImgPath + path;
            }
        }
    }
</script>

<style scoped>

</style>
