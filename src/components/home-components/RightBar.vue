<template>
    <div id="right-panel">
        <div class="p-3">
            <h4>Upcoming</h4>
            <div class="row m-3" v-for="movie in upcomings">
                <div>
                    <a href="#" data-toggle="tooltip" data-placement="bottom" title="Add to watchlist">
                        <i class="fas fa-plus text-white bg-secondary p-2"></i></a>
                </div>
                <div class="col">
                    <a :href="'/movie/' + movie.id">{{movie.title}}</a>
                </div>
            </div>
            <a href="#">See more</a>
        </div>
        <hr>
        <div class="p-3">
            <h4>Now Playing</h4>
            <div class="row m-3" v-for="movie in nowPlaying">
                <div>
                    <a href="#" data-toggle="tooltip" data-placement="bottom" title="Add to watchlist">
                        <i class="fas fa-plus text-white bg-secondary p-2"></i></a>
                </div>
                <div class="col">
                    <a :href="'/movie/' + movie.id">{{movie.title}}</a>
                </div>
            </div>
            <a href="#">See more</a>
        </div>

    </div>
</template>

<script>
export default {
    props:{
        upcomings: {required: true},
        nowPlaying: {required: true}
    }
}
</script>

<style scoped>
    #right-panel{
        border-left: solid grey 3px;
        background-color: #eee;
    }
</style>
