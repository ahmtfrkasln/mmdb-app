<template>
    <div class="bg-light">

        <MainTrailers :discoverMovie=discoverMovie />
        <MainTvShows :discoverTv=discoverTv />
        <hr>
        <MainPeople :discoverPeople=discoverPeople />

    </div>
</template>

<script>
    import MainTrailers from './MainTrailers'
    import MainTvShows from './MainTvShows'
    import MainPeople from './MainPeople'

    export default {
        props: {
            discoverMovie: {required: true},
            discoverTv: {required: true},
            discoverPeople: {required: true}
        },
        components: {MainTrailers, MainTvShows, MainPeople}
    }
</script>
