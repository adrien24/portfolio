<template>

  <div class="Accueil">

    <div>
      <div class="animated-title">
        <div class="text-top">
          <div>
            <h1>Adrien Bouteiller</h1>
          </div>
        </div>
      </div>


      <h2>Welcome</h2>
    </div>


    <div class="show-image">
      <img src="../assets/img/Photo_profil.png" alt="photo de profil"/>
    </div>

    <div :class="[ 'g-cursor', { 'g-cursor_hover': hover }, {'g-cursor_hide': hideCursor} ]">
      <div :style="cursorCircle" class="g-cursor__circle"></div>
      <div class="g-cursor__point" ref="point" :style="cursorPoint"></div>
    </div>
    <Background/>
    <Header/>
    <Loading/>

    <Footer/>
  </div>


</template>

<script>


import Background from "../components/Background";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Loading from "../components/loading";


export default {
  name: 'Accueil',

  components: {
    Loading,
    Background,
    Header,
    Footer,


  },

  data() {
    return {
      "xChild": 0,
      "yChild": 0,
      "xParent": 0,
      "yParent": 0,
      "hover": false,
      "hideCursor": true
    }
  },
  computed: {
    cursorCircle() {
      return `transform: translateX(${this.xParent}px) translateY(${this.yParent}px) translateZ(0) translate3d(0, 0, 0);`
    },
    cursorPoint() {
      return `transform: translateX(${this.xChild - 3}px) translateY(${this.yChild - 3}px) translateZ(0) translate3d(0, 0, 0);`
    }
  },
  methods: {
    moveCursor(e) {
      this.xChild = e.clientX;
      this.yChild = e.clientY;
      setTimeout(() => {
        this.xParent = e.clientX - 15;
        this.yParent = e.clientY - 15;
      }, 100);
    }
  },
  mounted() {
    window.scrollTo(0, 0)
    document.addEventListener("mousemove", this.moveCursor);
    document.addEventListener('mouseleave', e => {
      this.hideCursor = true;
    });
    document.addEventListener('mouseenter', e => {
      this.hideCursor = false;
    });

  }
}


</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


@import url('https://fonts.googleapis.com/css?family=Roboto:700');






.Accueil {
  overflow-y: hidden;
  overflow-x: hidden;
  height: 100vh;
  margin: 0;
  width: 100vw;
  position: relative;

}


template {
  overflow-x: hidden;
}




.show-image {

  position: absolute;
  top: 18%;
  left: 60%;
  float: right;
  z-index: 10
}

@keyframes showTopText {
  0% {
    transform: translate3d(0, 100%, 0);
  }

  100% {
    transform: translate3d(0, 0, 0);
  }
}

@keyframes showBottomText {
  0% {
    transform: translate3d(0, -100%, 0);
  }
  100% {
    transform: translate3d(0, 0, 0);
  }
}

.animated-title {
  color: #E3E3E3;
  font-family: Roboto, Arial, sans-serif;
  height: 90vmin;
  left: 30%;
  position: absolute;
  top: 64%;
  transform: translate(-50%, -50%);
  width: 44vmin;
  z-index: 10;
}

.animated-title > div {
  height: 50%;
  overflow: hidden;
  position: absolute;
  left: -35%;
  width: 229%;
}

.animated-title > div div {
  font-size: 12vmin;
  padding: 2vmin 0;
  position: absolute;
}

.animated-title > div div h1 {
  display: block;
  font-size: 6rem;

}

div > h2{
  position: absolute;
  top: 200px;
  left: 5%;
  font-size: 10vw;
  -webkit-text-stroke-width: 2px;
  -webkit-text-stroke-color: white;
  color: transparent !important;
}


.animated-title > div.text-top div {
  animation: showTopText 1s;
  animation-delay: 3.5s;
  animation-fill-mode: forwards;
  bottom: 0;
  font-size: 3rem;
  transform: translate(0, 100%);
}

.animated-title > div.text-top div h1:first-child {
  color: white;
}

.animated-title > div.text-bottom {
  bottom: 0;
}

.animated-title > div.text-bottom div {
  animation: showBottomText 0.5s;
  animation-delay: 4.75s;
  animation-fill-mode: forwards;
  top: 0;
  font-size: 2rem;
  transform: translate(0, -100%);
}

/*title top second*/
.Accueil > div:nth-child(2) > div {
  top: 14%;
  width: 166%;

}

#app > div > div.animated-title {
  z-index: 8;
}

#app > div > div:nth-child(1) > div > div.text-bottom > div, #app > div > div:nth-child(1) > div > div.text-bottom {
  width: 150%;
}

.Accueil > div:nth-child(2) > div {
  border-bottom: none;
}

.Accueil > div:nth-child(2) > div > div {
  font-size: 1.5rem;
  animation-delay: 5.5s;
}

/*title top second*/

/*Image profil*/
.show-image > img {
  width: 60%;
}


@media (min-width: 320px) and (max-width: 1350px) {


  #app > div > div:nth-child(1) > div > div.text-top {
    width: 130% !important;
  }

  h1 {
    font-size: 2.2rem !important;
  }

  h2 {
    font-size: 1.5rem;
  }

  p {
    font-size: 1.1rem;
  }
}

@media (min-width:425px) and (max-width: 900px) {
  #app > div > div.show-image {
    top: 74%;
    left: 31%;
    width: 51%;
  }



  .Accueil{
    height: 200vh!important;
  }

  .animated-title {
    left: 42%;
  }

  .text-top{
    left: 18%!important;
    top: -9%;
  }

  #app > div > div:nth-child(1) > div > div > div > h1{
    font-size: 3rem!important;
  }

  #app > div > div:nth-child(1) > h2{
    left: 16%;
    font-size: 8rem;
  }
}

@media (min-width: 320px) and (max-width: 425px) {

  .Accueil{
    height: 130vh!important;
  }
  #app > div > div.show-image {
    top: 500px;
  }

  .text-top{
    left: 30%!important;
    top: -150px;
  }


  h1 {
    font-size: 2.4rem !important;
  }

  h2 {
    margin-bottom: 5%;
    font-size: 5rem!important;
    left: 2%!important;
  }



  #app > div > div.show-image {
    display: none;
    left: 10% !important;
  }

  img {
    width: 89% !important;
  }

  #app > div > div:nth-child(2) > div {
    width: 200%;
  }

  #app > div.Accueil > div:nth-child(2) > div {
    left: -5%;
  }

  div.animated-title {
    left: 30%;
    width: 100%!important;
  }

}


</style>
