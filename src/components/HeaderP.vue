<template>

  <div>

  <div class="menuP">
    <router-link to="">WORK</router-link>
    <router-link to="">ABOUT</router-link>
    <router-link to="">HOME</router-link>

  </div>

  <div class="menuP2">
    <router-link to="/work">WORK</router-link>
    <router-link to="/">HOME</router-link>
    <router-link to="/about">ABOUT</router-link>
  </div>

  </div>
</template>

<script>
export default {
  name: "HeaderP",


}
</script>

<style scoped>


@keyframes translateRight {
  0%{z-index: 1}
 0%{transform: translateX(0%)}
  0%{opacity: 1}
  98%{opacity: 1}
  99%{opacity: 0}
  99%{z-index: 1}
  100%{transform: translateX(100%)}

}

@keyframes translateLeft {
  0%{transform: translateX(-100%)}
  100%{transform: translateX(0%)}
}

.menuP{
  overflow-x: hidden!important;

}

.menuP2{
  overflow-x: hidden;

}



div >.menuP{
  position: fixed;
  display: flex;
  flex-direction: column;
  top: 0;
  bottom: 0;
  right: 0;
  width: fit-content;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  border-left: white solid 1px;

  animation: translateRight 3s;
  opacity: 0;
  background-color: #131212;
  z-index:-1;
}





.menuP > a{
  color: white;
  position: relative;
  top: 15%;
  text-decoration: transparent!important;
  transform: translateY(-50%);
  margin-bottom: 150%;
  transform: rotate(90deg);
  font-size: 3rem;
  font-family: "Neue Haas Grotesk Display Pro 65 Medium", sans-serif;

}

.menuP > a:hover{
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: white;
  color: transparent !important;
  overflow: auto;
  transition: all 0.4s ease-in-out;
}


.menuP2{
  position: fixed;
  display: flex;
  flex-direction: column;
  top: 0;
  bottom: 0;
  width: fit-content;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  border-right: white solid 1px;
  z-index: 16;
  animation: translateLeft 3s;
  background-color: #131212;
}




.menuP2 > a{
  color: white;
  position: relative;
  top: 15%;
  text-decoration: transparent!important;
  transform: translateY(-50%);
  margin-bottom: 150%;
  transform: rotate(90deg);
  font-size: 3rem;
  font-family: "Neue Haas Grotesk Display Pro 65 Medium", sans-serif;
}

.menuP2 > a:hover{
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: white;
  color: transparent !important;
  overflow: auto;
  transition: all 0.4s ease-in-out;
}


@media (max-width: 992px) {



  .menuP{
    animation: none!important;
  }

  .menuP2{
    position: fixed;
    display: block;
    flex-direction: row;
    top: 0;
    bottom: 92%;
    right: 0;
    width: 100%;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    border-left: none;
    border-right: none;
    border-bottom: white solid 1px;
    z-index: 16;
    text-align: center;
    animation: translatebottom 3s;


  }

@keyframes translatebottom {
  0%{transform: translateY(-100%)}
  100%{transform: translateY(0%)}

}

  .menuP2 > a{
    color: white;
    position: relative;
    top: 15%;
    text-decoration: transparent!important;
    transform: translateY(-50%);
    margin-bottom: 150%;
    transform: rotate(90deg);
    font-size: 1.5rem;
  }

  .menuP2 > a:hover{
    text-decoration: underline white!important;
  }

  .menuP2 > a:nth-child(2){
    padding-left: 5%;
    padding-right: 5%;
  }

}

@media (min-width: 992px) and (max-width: 1700px) {
  .menuP2, .menuP{
    padding-left: 0.2rem;
    padding-right: 0.2rem;
  }
  .menuP2 > a, .menuP > a{
    font-size: 2rem;
    top: 20%;
  }
}



</style>
