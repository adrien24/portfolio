<template>

  <div>
  <div class="footerP">
    <div class="reseaux">
      <a href="https://github.com/adrien24"><i class="fab fa-github"></i></a>
      <a href="https://twitter.com/adrien06_"><i class="fab fa-twitter"></i></a>
      <a href="https://www.linkedin.com/in/adrienbouteiller/"><i class="fab fa-linkedin"></i></a>
    </div>

    <div class="infos">
      <p>All rights reserved to Adrien Bouteiller</p>
    </div>
  </div>

    <div class="footerP2">
      <div class="infos2">
        <p>All rights reserved to Adrien Bouteiller</p>
      </div>
      <div class="reseaux2">
        <a href="https://github.com/adrien24"><i class="fab fa-github"></i></a>
        <a href="https://twitter.com/adrien06_"><i class="fab fa-twitter"></i></a>
        <a href="https://www.linkedin.com/in/adrienbouteiller/"><i class="fab fa-linkedin"></i></a>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "FooterP"
}
</script>

<style scoped>
@keyframes translateRightA {
  0%{opacity: 1}
  5%{opacity: 1}
  15%{opacity: 0}
  100%{opacity: 0}

}

@keyframes translateRightR {
  0%{transform: translateX(0)}
  0%{opacity: 1}
  98%{opacity: 1}
  99%{opacity: 0}
  100%{transform: translateX(145.8%)}
}



@keyframes translateLeft {
  0%{opacity: 0}
  97%{opacity: 0}
  99%{opacity: 1}
  100%{opacity: 1}
}

@keyframes translateLeft2 {
  0%{opacity: 0}
  35%{opacity: 0}
  65%{opacity: 1}
  100%{opacity: 1}
}

.footerP {
  position: fixed;
  top: 91%;
  width: 100%;
  padding-top: 0.5rem;
  padding-bottom: 2rem;



}

.footerP > .reseaux {
  display: inline-block;
  width: 48%;
  animation: translateRightR 3s;
  opacity: 0;
  margin-top: 0.5%;
}

.footerP > .reseaux > a {
  color: white;
  padding-right: 10%;
  font-size: 2.5rem;

}



.footerP > .infos {
  width: 48%;
  display: inline-block;
  margin-bottom: 2%;
  position: absolute;
  top: 27%;
  animation: translateRightA 3s;
  opacity: 0;
}

.footerP > .reseaux > a:first-child {
  padding-left: 5%;
}


.footerP2 {
  position: fixed;
  top: 91%;
  width: 100%;
  padding-top: 0.5rem;
  padding-bottom: 2rem;


}

.footerP2 > .reseaux2 {
  display: inline-block;
  width: 48%;
  left: 70%;
  position: absolute;
  animation: translateLeft 3s;
  margin-top: 0.5%;
}

.footerP2 > .reseaux2 > a {
  color: white;
  padding-right: 10%;
  font-size: 2.5rem;
}

.footerP2 > .infos2 {
  width: 48%;
  display: inline-block;
  margin-bottom: 2%;
  position: absolute;
  top: 77%;
  left: 18%;
  animation: translateLeft2 3s;
}

.footerP2 > .reseaux2 > a:first-child {
  padding-left: 5%;
}

.infos > p, .infos2 > p{

  font-size: 1.4rem;
}

@media (max-width: 994px) {
  .footerP2 {
    display: none!important;
  }
}


@media (max-width: 994px) {
  .footerP {
    display: none!important;
  }
}





</style>
