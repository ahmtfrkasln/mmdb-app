<template>
  <div class="bg-dark">
    <div id="nav-spacer" class="bg-dark"></div>
    <nav class="row p-2 border-top border-secondary">
        <button class="btn px-3 my-auto hide-md">
            <h3><i class="fas fa-bars text-white"></i></h3>
        </button>
      <a class="navbar-brand my-auto" href="#">
        <img src="@/assets/mmdb-logo.png" height="50" alt />
      </a>

      <div id="nav-main" class="col my-auto">
          <div class="row">
              <input class="col rounded-left" type="text" placeholder="Find Movies, TV shows, Celebrities...">
              <select class="hide-sm col-2 ml-1" name="" id=""></select>
              <div class="bg-warning rounded-right py-1 px-2 ml-1">
                <i class="fas fa-search"></i>
              </div>
              <div class="hide-sm  ml-5 my-auto font-smaller">
                  <ul class="navbar-nav bd-navbar-nav flex-row text-white">
                      <li class="nav-item font-weight-bold px-2">
                          <a href="#">MMDb<span class="text-primary">Pro</span></a>
                      </li>
                      <li class="nav-item-spacer-solid mx-1"></li>
                      <li class="nav-item px-2">
                          <a href="#">Help</a>
                      </li>
                      <li class="nav-item-spacer-solid mx-1"></li>
                      <li class="nav-item px-2"><a href="#"><i class="fab fa-facebook-square"></i></a></li>
                      <li class="nav-item px-2"><a href="#"><i class="fab fa-instagram"></i></a></li>
                      <li class="nav-item px-2"><a href="#"><i class="fab fa-twitter"></i></a></li>
                      <li class="nav-item px-2"><a href="#"><i class="fab fa-youtube"></i></a></li>
                  </ul>
              </div>
          </div>
          <div class="hide-sm row w-75">
            <ul class="navbar-nav bd-navbar-nav flex-row w-100">
              <li class="nav-item-spacer"></li>
              <li class="nav-item mx-auto menu">
                <a href="#">Movies, TV<br>& Showtimes</a>
              </li>
              <li class="nav-item-spacer"></li>
              <li class="nav-item mx-auto menu">
                <a href="#">Celebs, Events<br>& Photos</a>
              </li>
              <li class="nav-item-spacer"></li>
              <li class="nav-item mx-auto menu">
                <a href="#">News &<br>Community</a>
              </li>
              <li class="nav-item-spacer"></li>
              <li class="nav-item my-auto mx-auto menu">
                <a class="text-warning" href="#">Watchlist</a>
              </li>
              <li class="nav-item-spacer"></li>
                <li class="nav-item mx-auto px-4"></li>
            </ul>
          </div>
      </div>
    </nav>
  </div>
</template>

<style scoped>
      nav{
        background-color: black;
      }
      a{
        color: white;
      }
      .nav-item-spacer-solid{
        background-color: grey;
        width: 1px;
      }
      .nav-item-spacer{
        background: linear-gradient(to bottom, rgba(51,51,51,0) 3%, #333 15%, #727272 50%, #232323 85%);
        width: 1px;
      }
      .font-smaller{
          font-size: .9em;
      }
      .menu{
          margin-top: 5px;
          line-height: 1;
      }
      a:hover{
          color: white;
          transition: text-shadow .5s;
          text-shadow: 0 0 5px white;
      }

    @media only screen and (max-width: 767px) {
      .hide-sm{
        display: none;
      }
    }
    @media only screen and (min-width: 768px) {
      #nav-spacer{
        padding-top: 1rem;
      }
        .navbar-brand{
            margin-left: 20px;
        }
      .hide-md{
        display: none;
      }
    }
</style>
