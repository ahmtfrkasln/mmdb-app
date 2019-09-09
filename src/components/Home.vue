<template>
  <div class="row">
    <div class="col-md-8 p-0">
      <Main :discoverMovie=discoverMovie :discoverTv=discoverTv :discoverPeople=discoverPeople />
    </div>
    <div class="col-md-4 p-0">
      <RightBar :upcomings=upcomings :nowPlaying=nowPlaying />
    </div>
  </div>
</template>

<script>
import Main from "./home-components/Main";
import RightBar from "./home-components/RightBar";
import axios from "axios";

export default {
  name: "Home",
  data() {
    return {
      apiKey: "70e485ff76270023305e9f3c203e8426",
      discoverMoviePath: "https://api.themoviedb.org/3/discover/movie?language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&api_key=",
      discoverTvPath: "https://api.themoviedb.org/3/discover/tv?language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&api_key=",
      discoverPeoplePath: "https://api.themoviedb.org/3/person/popular?language=en-US&page=1&api_key=",
      upcomingPath: "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1&api_key=",
      nowPlayingPath: "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1&api_key=",
      discoverMovie: [],
      discoverTv: [],
      discoverPeople: [],
      upcomings: [],
      nowPlaying: []
    };
  },
  methods: {
    getData() {

      axios
        .get(this.discoverMoviePath + this.apiKey)
        .then(res => res.data)
        .then(discover => {
          this.discoverMovie = discover.results.splice(0, 3)
        });

      axios
        .get(this.discoverTvPath + this.apiKey)
        .then(res => res.data)
        .then(discover => {
          this.discoverTv = discover.results.splice(0, 3)
        });

      axios
        .get(this.discoverPeoplePath + this.apiKey)
        .then(res => res.data)
        .then(discover => {
          this.discoverPeople = discover.results.splice(0, 9)
        });

      axios
        .get(this.upcomingPath + this.apiKey)
        .then(res => res.data)
        .then(upcomings => {
          this.upcomings = upcomings.results.splice(0, 10)
        });

      axios
        .get(this.nowPlayingPath + this.apiKey)
        .then(res => res.data)
        .then(nowPlaying => {
          this.nowPlaying = nowPlaying.results.splice(0, 10)
        });
    }
  },
  created() {
    this.getData();
  },
  components: {
    Main,
    RightBar
  }
};
</script>
