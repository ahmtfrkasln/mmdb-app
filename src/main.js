import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'

Vue.config.productionTip = false

import Home from './components/Home.vue'
import MovieDetail from './components/MovieDetail.vue'

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    { path: '/', component: Home },
    { path: '/movie/:id', component: MovieDetail }
  ],
  mode: 'history'
})

new Vue({
  render: h => h(App), router
}).$mount('#app')
