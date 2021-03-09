<template>
  <div>


    <Header/>

    <h1>WORK</h1>
    <router-link to="/doubleboggey">
      <div class="doubleboggey">

        <p>2020-2021</p>
        <h2>Doubleboggey</h2>
        <p>Doubleboggey est une association de golf. Le but de ce projet était de faire une refonte totale du site</p>

      </div>
    </router-link>
    <router-link to="/michelangelo">
      <div class="Michelangelo">

        <p>2021</p>
        <h2>Michelangelo</h2>
        <p>Michelangelo est un projet d'étude réalisé pendant un examen. Le but était de réaliser un site web en 2
          jours</p>

      </div>
    </router-link>

    <router-link to="/nearide">
      <div class="Nearide">
        <p>2020</p>
        <h2>Nearide</h2>
        <p>Nearide est un projet de second semestre qui consistait à réaliser un site situant les spots de skate de
          Franche-Comté</p>
      </div>
    </router-link>

    <router-link to="/bureau">
      <div class="bureau">

        <p>2021</p>
        <h2>Bureau</h2>
        <p>Pour le dernier semestre de ma formation je devais réaliser un bureau entièrement en 3D et faire des animations dessus en Three.js</p>

      </div>
    </router-link>

    <Footer/>
    <div class="scrollwin"/>
    <div :class="[ 'g-cursor', { 'g-cursor_hover': hover }, {'g-cursor_hide': hideCursor} ]">
      <div :style="cursorCircle" class="g-cursor__circle"></div>
      <div class="g-cursor__point" ref="point" :style="cursorPoint"></div>
    </div>
    <Header/>
    <Footer/>
  </div>


</template>

<script>

import Header from "../components/Header";
import Footer from "../components/Footer";


export default {
  name: "Work",
  components: {
    Footer,
    Header


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


  },


}
</script>


<style scoped>


#app > div {
  height: 250vh;
}


h1 {
  position: fixed;
  font-size: 12rem;
  top: 170px;
  left: -1%;
  transform: rotate(-90deg);
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: white;
  color: transparent !important;
  overflow: auto;
}

h2 {
  font-size: 3rem;
}

p {
  font-size: 1.5rem;

}


.doubleboggey {
  background: url("../assets/img/DoubleboggeyP.png") no-repeat;
  bottom: 0;
  width: 35%;
  float: left;
  position: absolute;
  top: 75px;
  left: 10%;
  height: 800px;
  margin-left: 5%;
  margin-top: 96px;
  animation: Bsize1 0.5s;
}

@keyframes Bsize1 {
  0% {
    width: 30%
  }
  100% {
    width: 35%
  }
  0% {
    height: 85%
  }
  100% {
    height: 99%
  }
}

@keyframes Bsize2 {
  0% {
    width: 35%
  }
  100% {
    width: 30%
  }
  0% {
    height: 99%
  }
  100% {
    height: 85%
  }

}

.doubleboggey:hover {
  animation: Bsize2 1s;
  width: 30%;
  background: url("../assets/img/DoubleboggeyS.png") no-repeat;
}

.doubleboggey > p:first-child {
  margin-top: 10%;
  margin-left: 10%;
}

.doubleboggey > h2 {
  margin-top: 5%;
  margin-left: 10%;
}

.doubleboggey > p:nth-child(3) {
  padding: 666px 15% 8%;
  position: absolute;
  top: 0;
  opacity: 0;
  animation: cacherT 2;
}

@keyframes CacherT {

  0% {
    opacity: 0
  }
  100% {
    opacity: 1
  }
}

#app > div > a > div > p:nth-child(3):hover {
  animation: TextD 2s;
  opacity: 1;
}

@keyframes TextD {

  0% {
    opacity: 0
  }
  100% {
    opacity: 1
  }
}


.Michelangelo {
  background: url("../assets/img/Michelangelo.png") no-repeat;
  width: 35%;
  float: left;
  position: absolute;
  top: 391px;
  right: 10.5%;
  height: 800px;
  margin-right: 5%;
  margin-top: 5%;
  animation: Bsize1 0.5s;
}

@keyframes Bsize1 {
  0% {
    width: 30%
  }
  100% {
    width: 35%
  }
}

.bureau {
  background: url("../assets/img/chaise_gaming.png") no-repeat;
  width: 35%;
  float: left;
  position: absolute;
  top: 1191px;
  right: 10.5%;
  height: 800px;
  margin-right: 5%;
  margin-top: 5%;
  animation: Bsize1 0.5s;
}

@keyframes Bsize1 {
  0% {
    width: 30%
  }
  100% {
    width: 35%
  }
}

@keyframes Bsize2 {
  0% {
    width: 35%
  }
  100% {
    width: 30%
  }
}

.Michelangelo:hover {
  animation: Bsize2 1s;
  width: 30%;
  background: url("../assets/img/MichelangeloS.png") no-repeat;

}

.bureau:hover {
  animation: Bsize2 1s;
  width: 30%;
  background: url("../assets/img/chaise_gamingS.png") no-repeat;

}

.Michelangelo > p:first-child {
  margin-top: 10%;
  margin-left: 10%;
}

.bureau > p:first-child {
  margin-top: 10%;
  margin-left: 10%;
}

.Michelangelo > h2 {
  margin-top: 5%;
  margin-left: 10%;
}

.bureau > h2 {
  margin-top: 5%;
  margin-left: 10%;
}

.Michelangelo > p:nth-child(3) {
  padding: 666px 15% 8%;
  position: absolute;
  opacity: 0;
  top: 0;
  animation: cacherT 2;
}

.bureau > p:nth-child(3) {
  padding: 666px 15% 8%;
  position: absolute;
  opacity: 0;
  top: 0;
  animation: cacherT 2;
}


#app > div > div.Michelangelo > p:nth-child(3):hover {
  animation: TextD 2s;
  opacity: 1;
}

#app > div > div.bureau > p:nth-child(3):hover {
  animation: TextD 2s;
  opacity: 1;
}

@keyframes TextD {

  0% {
    opacity: 0
  }
  100% {
    opacity: 1
  }
}


.Nearide {
  background: url("../assets/img/Nearide.png") no-repeat;
  width: 35%;
  float: left;
  position: absolute;
  top: 971px;
  left: 10%;
  height: 800px;
  margin-left: 5%;
  animation: Bsize1 0.5s;
}

@keyframes Bsize1 {
  0% {
    width: 30%
  }
  100% {
    width: 35%
  }
}

@keyframes Bsize2 {
  0% {
    width: 35%
  }
  100% {
    width: 30%
  }
}

.Nearide:hover {
  animation: Bsize2 1s;
  width: 30%;
  background: url("../assets/img/NearideS.png") no-repeat;

}

.Nearide > p:first-child {
  margin-top: 10%;
  margin-left: 10%;
}

.Nearide > h2 {
  margin-top: 5%;
  margin-left: 10%;
}

.Nearide > p:nth-child(3) {
  padding: 666px 15% 8%;
  position: absolute;
  opacity: 0;
  top: 0;
  animation: cacherT 2;
}

@keyframes CacherT {

  0% {
    opacity: 0
  }
  100% {
    opacity: 1
  }
}

#app > div > div.Nearide > p:nth-child(3):hover {
  animation: TextD 2s;
  opacity: 1;
}

@keyframes TextD {

  0% {
    opacity: 0
  }
  100% {
    opacity: 1
  }
}


@media (min-width: 320px) and (max-width: 768px) {

  .Nearide:hover, .doubleboggey:hover, .Michelangelo:hover, .bureau:hover {
    width: 72% !important;
    animation: none !important;
  }

  .Nearide, .doubleboggey, .Michelangelo, .bureau {
    animation: none;
  }


  #app > div > a > div {
    margin-top: 33px;
  }

  #app > div {
    height: 291vh;
  }

  .doubleboggey, .Michelangelo, .Nearide, .bureau {
    height: 388px !important;
    width: 72%;

  }

  .doubleboggey {
    background: url("../assets/img/DoubleboggeyS.png");
  }

  .Michelangelo {
    background: url("../assets/img/MichelangeloS.png");
  }

  .bureau {
    background: url("../assets/img/chaise_gamingS.png");
  }

  .Nearide {
    background: url("../assets/img/NearideS.png");
  }

  .doubleboggey > h2, .Michelangelo > h2, .Nearide > h2, .bureau > h2 {
    font-size: 2rem;
  }

  .doubleboggey > p:nth-child(3), .Michelangelo > p:nth-child(3), .Nearide > p:nth-child(3), .bureau > p:nth-child(3) {
    opacity: 1;
    padding-top: 148px !important;
    font-size: 1.2rem;
  }

  .Michelangelo {
    margin-right: 3.2%;
    top: 550px;
  }

  .bureau {
    margin-right: 3.2%;
    top: 1508px !important;
  }

  .Nearide {
    top: 1030px !important;
  }


}

@media (max-width: 900px) {
  #app > div > h1 {
    display: none;

  }


}

@media (max-width: 1199px) {
  h1 {
    display: none;
  }
}

@media (min-width: 1200px) and (max-width: 1599px) {

  h1 {
    left: -5%;
    top: 170px;
  }
}

@media (max-width: 1600px) {
  .Nearide, .doubleboggey, .Michelangelo, .bureau {
    height: 645px;
  }

  .Nearide {
    top: 816px;
  }

  .bureau {
    top: 1037px;
  }

  .Nearide > p:nth-child(3), .doubleboggey > p:nth-child(3), .Michelangelo > p:nth-child(3), .bureau > p:nth-child(3) {
    padding-top: 510px;
  }

}

@media (min-width: 1600px) {
  h1 {
    left: -1%;
  }
}

@media (max-width: 1906px) {
  .Michelangelo {
    right: 10%;
  }

  .bureau {
    right: 10%;
  }
}


</style>
