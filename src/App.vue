<template>
  <div id="app">



    <transition
      name="fade"
      mode="out-in"
    >

    <router-view/>

    </transition>


  </div>
</template>

<script>
import Header from "./components/Header";
import Background from "./components/Background";


export default {
  name: 'App',
  components: {
    Background,
    Header,

  },


}


</script>

<style lang="scss">
@import "assets/sass/base";

body{
  overflow-x: hidden;
}

*{
  cursor: none;
}

a:hover{
  cursor: cell;

}




.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0
}

@font-face {
  font-family: 'NeueM';
  /*src: url('./assets/fonts/Neue/MAK.eot'); /* IE9 Compat Modes */
  /*src: url('./assets/fonts/Neue/MAK.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
  src: url('./assets/fonts/Neue/NeueHaasDisplayMediu.woff') format('woff')/*, !* Modern Browsers *!
  url('static/fonts/Mak/MAK.ttf') format('truetype')*/ ; /* Safari, Android, iOS */
  font-style: normal;
  font-weight: normal;
  text-rendering: optimizeLegibility;
}

@font-face {
  font-family: 'NeueL';
  /*src: url('./assets/fonts/Neue/MAK.eot'); /* IE9 Compat Modes */
  /*src: url('./assets/fonts/Neue/MAK.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
  src: url('./assets/fonts/Neue/NeueHaasDisplayLight.woff') format('woff')/*, !* Modern Browsers *!
  url('static/fonts/Mak/MAK.ttf') format('truetype')*/ ; /* Safari, Android, iOS */
  font-style: normal;
  font-weight: normal;
  text-rendering: optimizeLegibility;
}



</style>
