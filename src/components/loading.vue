<template>
  <div class="loading">
    <div>
  <h1 class="prenom">Loading</h1>

      <p>.</p>
      <p>.</p>
      <p>.</p>
      <p>.</p>
      <p>.</p>
      <p>.</p>
      <p>.</p>
      <p>.</p>
      <p>.</p>
      <p>.</p>
      <p>.</p>



  </div>

  </div>
</template>

<script>
export default {
  name: "Loading"
}
</script>

<style scoped>




@keyframes backward{
  0%{z-index: 10000}
  0%{transform: translateY(0%)}
  0%{ opacity: 1}
  85%{ opacity: 1}
  100%{opacity: 0}
  100%{z-index: 0}
  70%{transform: translateY(0%)}
  100%{transform: translateY(-100%)}
}

@keyframes TextT {
  0%{transform: translateY(0%)}
  50%{transform: translateY(-20%)}
  100%{transform: translateY(0%)}
}

@keyframes Text2 {
  0%{transform: translateY(0%)}
  50%{transform: translateY(-20%)}
  100%{transform: translateY(0%)}
}




.loading{
  position: absolute;
  top: 0;
  height: 100vh;
  width: 100%;
  animation: backward 3s;
  background-color: #131212;
  opacity: 0;

}

.loading > div{
  position: absolute;
  top: 40%;
  transform: translateY(-50%);
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
}

h1{
  font-size: 5rem;
  text-align: center;
  text-transform: uppercase;
  margin-bottom: -40px;
  position: relative;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: white;
  color: transparent !important;
  z-index: 3;
  font-family: "Neue Haas Grotesk Display Pro 65 Medium", sans-serif;

}




p{
  font-size: 5rem;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: white;
  color: transparent !important;
  z-index: 3;
 display: inline-block;
  font-family: "Neue Haas Grotesk Display Pro 65 Medium", sans-serif;
}

p:nth-child(2n){
  animation: TextT 1s;
  animation-delay: 1s;
}

p:nth-child(2n+1){

  animation: Text2 1s;
}

@media (min-width: 320px) and (max-width: 1350px) {

  .loading > div{
    margin-top: 67%;
  }

  h1{
    font-size: 4rem;
  }

  .loading > div{

    padding-bottom: 150px;
    top: 0;
    transform: translateY(-50%);
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
  }



  .loading{
    height: 150vh;
    position: fixed;
  }

}


</style>
