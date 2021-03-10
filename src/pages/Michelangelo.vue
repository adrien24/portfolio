<template>
  <div class="Pdoubleboggey">

    <div class="presentation">
      <h1>Michelangelo</h1>
      <span></span>
      <img src="../assets/img/Mockup_michelangelo.png" alt="doubleboggey mokup"/>
    </div>

    <div class="contextedesign">
      <div class="contexte">
        <h2 v-scroll>Contexte</h2>
        <p v-scroll>Le boss est une épreuve que nous faisons à la fin du troisième semestre, il consiste à réaliser un
          site web en 2 jours sur un sujet choisi par nos professeurs. Le premier jour nous devons réaliser une maquette
          puis l’intégrer en HTML5/CSS/JS. Puis le deuxième jour nous devons l’intégrer en Vue.js. Le thème du boss de
          cette année était de réaliser un site sur un réalisateur ou une réalisatrice de cinéma en s’inspirant de son
          univers cinématographique. Si cet univers n’est pas clairement identifiable, vous pouvez vous appuyer sur
          l’univers d’un de ses films.
        </p>
      </div>
      <div class="design">
        <H2 v-scroll>Design graphique</H2>
        <p v-scroll>Le réalisateur que l’on m’a assigné était Michelangelo Antonioni. Il fait principalement des films
          dramatiques. J’ai donc opté pour un design sombre avec comme contraste du blanc. Le design est plutôt simple
          car je voulais faire quelque chose de réalisable dans les temps impartis. Le site est bien sûr responsive,
          j’ai utilisé Bootstrap pour disposer facilement mes éléments. </p>
      </div>

    </div>
      <div class="logiciels">
        <div class="LG">
          <h2 v-scroll>Logiciels & langages</h2>
          <p v-scroll>Pour ce projet j’ai utilisé Adobe XD qui m’a permis de faire très rapidement ma maquette. J’ai
            ensuite utilisé les langages HTML5/CSS/JS pour faire l’intégration de ma maquette. Puis j’ai utilisé Vue.js
            pour faire le site sous forme de spa. Il était aussi demandé de faire un fichier json avec toutes les
            informations sur la biographie de du réalisateurs et les films qu’il avait réalisés. Et enfin, il fallait
            créer un formulaire qui puisse nous permettre de rajouter des films à la page prévus à cet effet.

          </p>
        </div>

        <div class="video">

          <video autoplay loop>
            <source src="../assets/video/VidM.mp4"
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
  background: url("../assets/img/Background-michelangelo.png") no-repeat center top;
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
