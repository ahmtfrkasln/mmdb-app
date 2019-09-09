<template>
    <div class="bg-light p-4">
        <h3>Discover: People</h3>

        <div id="carouselPeople" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
                <li data-target="#carouselPeople"
                    v-for="i in discoverPeople.length/3" :data-slide-to=i :class="{ 'active': i === 0 }"></li>
            </ol>
            <div class="carousel-inner">
                <div class="carousel-item" v-for="(people, i) in getPeople" :class="{ 'active': i === 0 }">
                    <div class="row">
                        <div class="col-4 px-2" v-for="person in people">
                            <div class="poster">
                                <img class="img-fluid" :src="getImagePath(person.profile_path)" alt="">
                                <div class="poster-title text-center p-1">
                                    <a class="text-white text-center" href="#">{{person.name}}<br><small>Department:</small> {{person.known_for_department}}</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <a class="carousel-control-prev" href="#carouselPeople" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselPeople" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>
        <div class="mt-1"><a href="#">Browse more people</a></div>
    </div>
</template>

<script>
export default {
    props:{
        discoverPeople: {required: true}
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
    },
    computed: {
        getPeople(){
            const arr = [];
            const clone = this.discoverPeople.slice(0);
            while (clone.length > 0){
                arr.push(clone.splice(0,3));
            }
            return arr;
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
</style>
