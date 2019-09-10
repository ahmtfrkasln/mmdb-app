<template>
    <div id="app">
        <div class="container shadow-root">
            <Navbar/>
            <router-view></router-view>
            <Footer />
        </div>
    </div>
</template>

<script>
    import Navbar from './components/Navbar'
    import Footer from './components/Footer'

    export default {
        name: 'app',
        components: {Navbar, Footer}
    }
</script>

<style>
    html, body, #app {
        font-size: 14px;
        background-color: #ccc;
    }

    .shadow-root {
        box-shadow: 0 1px 7px #444;
    }

    .row {
      margin: 0 !important;
    }

  .container{
    padding: 0 !important;
  }

</style>
