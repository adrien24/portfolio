<template>
  <div class="Pdoubleboggey">

    <div class="presentation">
      <h1>Doubleboggey</h1>
      <span></span>
      <img src="../assets/img/Mockup_doubleboggey.png" alt="doubleboggey mokup"/>
    </div>

    <div class="contextedesign">
      <div class="contexte">
        <h2 v-scroll>Contexte</h2>
        <p v-scroll>Double Boggey est une association de golfeurs et de golfeuses d’Occitanie. Cette association se veut
          réunie de nombreuses personnes pour partager des moments conviviaux autour de l’univers du golf. Leur image
          sur le net n’est cependant pas très représentative de leur association et ceux-ci veulent l’améliorer.</p>
      </div>
      <div class="design">
        <H2 v-scroll>Design graphique</H2>
        <p v-scroll>Le site devait être moderne : en effet, la refonte du site doit s’éloigner de l’identité visuelle
          déjà proposée afin d’améliorer l’image de l’association. Le site doit être lisible et compréhensible ; la
          cible de l’association reste fixée aux individus d’une 50aine
          d’années, mais la plupart des adhérents dépassent cette tranche d’âge.
          Le site doit communiquer de la convivialité : l’association cherche à recruter, et à augmenter l’esprit de
          partage du sport dans la bonne humeur et la passion.</p>
      </div>
    </div>


    <div class="logiciels">
      <div class="LG">
        <h2 v-scroll>Logiciels & langages</h2>
        <p v-scroll>Pour les logiciels, j’ai utilisé Photoshop pour faire des retouches sur certaines images. Mais
          aussi Illustrator pour faire le nouveau logo du site, et Adobe XD pour réaliser la maquette. J’ai intégré le
          site avec Wordpress car celui-ci devait être dynamique. J’ai donc utilisé le page builder Elementor
          (gratuit) et des plugins wordpress. Pour les langages j’ai utilisé du HTML/CSS/JS pour intégrer une partie
          de la maquette pour en faire une présentation à mon commanditaire, puis je l’ai intégrée sur Wordpress.
        </p>
      </div>

      <div class="video">

        <video autoplay loop>
          <source src="../assets/video/Vid_DB.mp4"
                  type="video/mp4">
          Sorry, your browser doesn't support embedded videos.
        </video>
      </div>


    </div>

    <div class="voirplus">
    <a href="https://doubleboggey2.adrienbouteiller.com">Voir le site</a>
  </div>

    <div :class="[ 'g-cursor', { 'g-cursor_hover': hover }, {'g-cursor_hide': hideCursor} ]">
      <div :style="cursorCircle" class="g-cursor__circle"></div>
      <div class="g-cursor__point" ref="point" :style="cursorPoint"></div>
    </div>
    <HeaderP/>

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


.presentation {
  text-align: center;
  height: 500px;
  margin-left: 5%;
  background: url("../assets/img/double_boggey_background.jpg") no-repeat center top;
  width: 100%;
  background-size: 1800px;
}

.presentation > h1 {
  padding-top: 100px;
  font-size: 4rem;
  margin-left: -5%;
  color: white;
  font-family: "Neue Haas Grotesk Display Pro 65 Medium", sans-serif;
}

.presentation > img {
  margin-top: 70px;
  width: 587px;
}

.contextedesign {
  width: 100%;
  display: flex;
  margin-left: 18%;
  margin-top: 5%;
}

h2 {
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: white;
  color: transparent !important;
}

.contexte, .design {
  width: 35%;
}

.design {
  margin-left: 5%;
}


.logiciels {
  width: 100%;
  display: flex;
  margin-left: 18%;
  margin-top: 5%;
  overflow-y: hidden;

}


.LG, .video {
  width: 35%;
}

.video {
  margin-left: 5%;
  background: url('../assets/img/Mockup_vid.png');
  background-size: 85%;
  background-position-y: 0;
  padding-top: 0.5%;
  background-repeat: no-repeat;
  padding-bottom: 5%;


}

.video > video {
  width: 82%;
  margin-left: 1.5%;
  background-size: 50%;


}

a {
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: white;
  color: transparent !important;
  font-family: "Neue Haas Grotesk Display Pro 65 Medium", sans-serif;
  text-decoration: none;
  font-size: 4rem;
  margin-left: 20%;
  margin-bottom: 5%;

}
.voirplus{
  margin-bottom: 9%;
}

@media (max-width: 992px) {

  .presentation{
    margin-left: 0;
  }
  .presentation > h1{
    padding-top: 193px;
    font-size: 3.5rem;
  }

  .presentation > img{
    margin-top: 59px;
    width: 400px;
  }

  .contextedesign, .logiciels{
    display: block;

  }


  .contexte, .design, .LG, .video{
    width: 65%;
  }

  .contexte{
    margin-bottom: 5%;
  }

  .LG{
    margin-bottom: 5%;
  }
  .video{
    padding-top: 1%;
  }

  .design, .video{
    margin-left: 0;
  }

  .voirplus{
     text-align: center;

   }

  .voirplus > a {
    margin-left: 0;
  }
}

@media (max-width: 425px) {


    h1{
      font-size: 2.6rem!important;
      margin-left: 0.1%!important;
    }

  .presentation > img {
    margin-top: 77px;
    width: 296px;
  }

  .contextedesign, .logiciels{
    margin-left: 10%;
  }

  .contexte, .design, .LG, .video{
    width: 82%;
  }


}


</style>
