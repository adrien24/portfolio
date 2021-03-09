<template>
  <div class="footer">
    <div class="reseaux">
      <a href="https://github.com/adrien24"><i class="fab fa-github"></i></a>
      <a href="https://twitter.com/adrien06_"><i class="fab fa-twitter"></i></a>
        <a href="https://www.linkedin.com/in/adrienbouteiller/"><i class="fab fa-linkedin"></i></a>
    </div>
    <div class="infos">
      <p>All rights reserved to Adrien Bouteiller</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style scoped>

.footer {
  position: fixed;
  top: 91%;
  width: 100%;
  padding-top: 0.5rem;
  padding-bottom: 2rem;

}

.footer > .reseaux {
  display: inline-block;
  width: 48%;
  margin-top: 0.5%;
}

.footer > .reseaux > a {
  color: white;
  padding-right: 10%;
  font-size: 2.5rem;


}

.footer > .infos {
  width: 48%;
  display: inline-block;
  position: absolute;
  top: 27%;
}

.footer > .reseaux > a:first-child {
  padding-left: 5%;
}

.infos > p{
  margin-left: 30%;
  font-size: 1.4rem;
}




@media (max-width: 994px) {
  .footer {
    display: none!important;
  }
}


@media (max-width: 992px) {



  .footer {
    position: absolute;
    text-align: center;

  }

  .footer > .reseaux {
    width: 100%;
  }

  .reseaux {
    display: block;
  }

  div.footer > div.infos {
    display: block;
    width: 100%;
    margin-top: 15%;
    margin-right: 5%;
  }

  a:nth-child(1) {
    padding-left: 0!important;
  }

  a:nth-child(3) {
    padding-right: 0!important;
  }
}





</style>

