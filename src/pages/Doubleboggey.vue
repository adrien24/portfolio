<template>
  <div class="Pdoubleboggey">

    <div class="presentation">
      <h1>Doubleboggey</h1>
      <span></span>
      <img src="../assets/img/Mockup_doubleboggey.png" alt="doubleboggey mokup" style="width: 30%"/>
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
          <img src="../assets/img/Mockup_vid.png" alt="vid_doubleboggey" v-scroll/>
          <video autoplay loop v-scroll>
            <source src="../assets/video/Vid_DB.mp4"
                    type="video/mp4">
            Sorry, your browser doesn't support embedded videos.
          </video>
        </div>


      </div>

    </div>
    <a href="https://doubleboggey2.adrienbouteiller.com">Voir le site</a>

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

.Pdoubleboggey {
  height: 200vh !important;
}

.presentation {
  text-align: center;
  height: 50vh;
  margin-left: 8%;
  background: url("../assets/img/double_boggey_background.jpg") no-repeat center top;
  background-size: 1800px;
}

h1 {
  font-family: "Neue Haas Grotesk Display Pro 65 Medium", sans-serif;
  font-size: 4rem;
  color: white;
}

.presentation > h1 {
  padding-top: 5% !important;
  position: absolute;
  right: 33%;
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
    right: 26%;
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
    width: 71% !important;
    right: 10%;
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
