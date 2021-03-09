<template>
  <div class="contact">
    <div class="moi">
      <div class="textepresentation">
        <h1>Qui je suis ?</h1>
        <p>Bonjour, je m'appelle Adrien Bouteiller, j'ai 19 ans et je suis en deuxième année de DUT MMI (Métier du
          Multimédia et de l'Internet). Je suis passionné par le développement web et plus précisément le développement
          front-end.</p>
      </div>

      <div class="mecontact">

        <h2>Contact</h2>
        <a href="mailto:adrien.bouteiller01@gmail.com">adrien.bouteiller01@gmail.com</a>
        <p>numéro de téléphone : 06 79 91 75 81</p>
        <p>Stagiaire chez : <a href="https://www.lesgensetvous.fr/">LES GENS ET VOUS</a></p>


      </div>
    </div>
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
  name: "About",
  components: {Footer, Header},

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

h1 {
  font-size: 5vw;
  font-family: "Neue Haas Grotesk Display Pro 65 Medium", sans-serif;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: white;
  color: transparent !important;
  padding-bottom: 5%;

}

h2 {
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: white;
  color: transparent !important;
  font-size: 5vw;
}

.moi {
  width: 100%;
  display: flex;
  justify-content: center;
  padding-top: 15%;
}

.textepresentation {
  width: 40%;
}

.mecontact {
  width: 44%;
  padding-left: 10%;

}

.mecontact > h2 {
  padding-bottom: 5%;
}

a, p {
  font-size: 1.7vw;
  padding-bottom: 2%;
}

p {
  padding-bottom: 2%;

}

#app > div > div.moi > div.mecontact > p:nth-child(3) {
  padding-top: 2%;
}

@media (max-width: 768px) {
  .moi {
    padding-top: 35%;
  }
}

@media (max-width: 425px) {

  .textepresentation {
    position: absolute;
    width: 100%;
    padding-left: 10%;
    padding-right: 10%;

  }

  .mecontact {
    margin-top: 350px;
    width: 100% !important;

  }

  a, p {
    font-size: 5vw;
    padding-bottom: 2%;
  }

  h2, h1 {
    font-size: 9vw;
  }

}


</style>
