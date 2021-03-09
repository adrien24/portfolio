<template>
  <div class="Pdoubleboggey">

    <div class="presentation">
      <h1>Bureau</h1>
      <span></span>
      <img src="../assets/img/Mockup_modelisation.png" alt="doubleboggey mokup" style="width: 30%"/>
    </div>

    <div class="contextedesign">
      <div class="contexte">
        <h2 v-scroll>Contexte</h2>
        <p v-scroll>Pour le 4ème semestre nous devions réaliser un bureau en 3D avec des couleur et texture, puis nous
          devions l'intégrer en Vue.js pour interagir avec le décor et trouver via une suite d'énigme un trésor cacher
          dans un coffre.
        </p>
      </div>
      <div class="design">
        <H2 v-scroll>Design graphique</H2>
        <p v-scroll>Notre professeur nous avais préalablement préparé un espace dans lequel nous devions placer les
          différents objets en 3D. Mon collègue et moi ont donc réalisé une télévision, une Switch, deux écrans Pc, une
          chaise gaming, un tapis de souris avec posé dessus une souris et un clavier, un bureau et une table pour poser
          la télé.</p>
      </div>


      <div class="logiciels">
        <div class="LG">
          <h2 v-scroll>Logiciels & langages</h2>
          <p v-scroll>Nous avons appris à utiliser 3DS max pour réaliser les différentes pièces en 3D. Mais mon collègue
            ayant un Mac nous avons dû travail sur Blender pour faire l'ensemble de la pièce. Puis nous avons utilisé
            Three.js pour intégrer la pièce dans notre navigateur.
          </p>
        </div>

        <div class="video">
          <img src="../assets/img/Mockup_vid.png" alt="vid_doubleboggey" v-scroll/>
          <video autoplay loop muted v-scroll>
            <source src="../assets/video/3D-1.mp4"
                    type="video/mp4">
            Sorry, your browser doesn't support embedded videos.
          </video>
        </div>


      </div>

    </div>


    <div :class="[ 'g-cursor', { 'g-cursor_hover': hover }, {'g-cursor_hide': hideCursor} ]">
      <div :style="cursorCircle" class="g-cursor__circle"></div>
      <div class="g-cursor__point" ref="point" :style="cursorPoint"></div>
    </div>
    <HeaderP/>
    <Transition/>
    <FooterP/>
  </div>

</template>

<script>

import HeaderP from "../components/HeaderP";
import FooterP from "../components/FooterP";

export default {
  name: "doubleboggey",

  components: {

    HeaderP,
    FooterP,

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

<style scoped>

@keyframes scrollT {
  0% {
    opacity: 0
  }
  100% {
    opacity: 1
  }
}

@keyframes scrollTU {
  0% {
    opacity: 0
  }
  0% {
    transform: translateY(5%)
  }
  100% {
    opacity: 1
  }
  100% {
    transform: translateY(0%)
  }
}

.before-enter {
  animation: scrollT 3s;
  opacity: 0;
}

.enter {
  animation: scrollTU 3s;
  opacity: 1;
}

p {
  font-size: 1.3rem;
}

.Pdoubleboggey {
  height: 200vh !important;
}

.presentation {
  text-align: center;
  height: 50vh;
  margin-left: 8%;
  background: url("../assets/img/modelisation_bureau.png") no-repeat center top;
  background-size: 1800px;
  background-position: center;
}

h1 {
  font-family: "Neue Haas Grotesk Display Pro 65 Medium", sans-serif;
  font-size: 4rem;
  color: white;
}

.presentation > h1 {
  padding-top: 3% !important;
  position: absolute;
  right: 41%;
  font-size: 4vw;
}

.presentation > span {
  background: rgba(255, 255, 255, 1);
  width: 10%;
  position: absolute;
  height: 3px;
  top: 9%;
  left: 47%;
}


.presentation > img {
  position: absolute;
  top: 12%;
  right: 32%;
}


.contextedesign {
  width: 80%;
  display: flex;
  margin-left: 15%;
  justify-content: center;
  margin-top: 15%;
}

.contexte, .design {
  width: 46%;

}


.contexte > h2, .design > h2 {
  margin-bottom: 5%;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: white;
  color: transparent !important;
  font-size: 3rem;
}

.design {
  padding-left: 5%;
}

.contexte {
  padding-right: 5%;
}

.illustration > img {
  position: absolute;
  top: 150%;
  right: 32%;
}

.illustration > .img > img {
  position: fixed;
  left: 30%;
  top: 50%;
  width: 30%;
}


.logiciels {
  width: 100%;
  position: absolute;
  top: 60%;
  left: 18%;
  display: flex;
}

.LG {
  width: 30%;
  padding-top: 3%;
}

.LG > h2 {
  margin-bottom: 5%;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: white;
  color: transparent !important;
  font-size: 3rem;
}

.video {
  width: 30%;
  padding-left: 14%;

}

.video > video {
  position: absolute;
  width: 29.5%;
  padding-top: 1.5%;
  padding-left: 0.5%;
}

.video > img {
  position: absolute;
  width: 30%;
  padding-top: 1%;
}

#app > div > a {
  position: absolute;
  font-size: 4rem;
  top: 1520px !important;

  text-decoration: none;
  left: 13%;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: white;
  color: transparent !important;
  font-family: "NeueM", sans-serif;
}

#app > div > a:hover {
  animation: rempliT 3s;

}


@media (max-width: 1600px) {

  .Pdoubleboggey {
    height: 200vh !important;
  }

  .presentation {
    margin-left: 0;
  }

  .logiciels {
    top: 941px;
  }

  h1 {
    padding-top: 9% !important;
  }


  .presentation > img {
    width: 38% !important;
    right: 31%;
  }

  h2 {
    font-size: 2rem !important;
  }

  a {
    margin-top: -297px;
  }

}

@media (max-width: 768px) {

  .Pdoubleboggey {
    height: 264vh !important;
  }

  .presentation > h1 {
    display: none;
  }

  #app > div > div.presentation > img {
    top: 12%;
  }

  a {
    margin-top: 70px;
  }


  h1 {
    top: 10% !important;
    font-size: 2rem !important;
    right: 21% !important;
    left: 23% !important;
  }

  span {
    display: none !important;
  }

  .contextedesign {
    width: 100%;
    margin-left: 0;
  }

  .presentation > img {
    width: 85% !important;
    right: 17%;
  }

  .contexte, .design {
    width: 83%;
  }

  .contexte {
    position: absolute;
    top: 427px;

  }

  .design {
    padding-left: 0;
    top: 700px;
    position: absolute;

  }

  .logiciels {
    left: 9%;
    padding-top: 17px;
    top: 967px;
  }

  .LG {
    position: absolute;
    width: 100% !important;
    padding-top: 42px;
  }

  .LG > p {
    width: 84%;
  }

  .video {
    position: absolute;
    width: 187% !important;
    margin-top: 392px;
  }


}


</style>
