<template>
 <div class="menu">
    <router-link to="/work">WORK</router-link>
    <router-link to="/">HOME</router-link>
    <router-link to="/about">ABOUT</router-link>

  </div>

</template>

<script>


export default {
  name: "Header",
}



</script>

<style scoped>


.menu{
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
  z-index: 16;

}





.menu > a{
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

.menu > a:hover{
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: white;
  color: transparent !important;
  overflow: auto;
  transition: all 0.4s ease-in-out;
}




@media (max-width: 992px) {


  .menu{
    position: fixed;
    display: block;
    flex-direction: row;
    top: 0;
    bottom: 92%;
    right: 0;
    width: 100%;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    padding-top: 1%;
    border-left: none;
    border-bottom: white solid 1px;
    z-index: 16;
    text-align: center;

  }



  .menu > a{
    color: white;
    position: relative;
    top: 15%;
    text-decoration: transparent!important;
    transform: translateY(-50%);
    margin-bottom: 150%;
    transform: rotate(90deg);
    font-size: 1.5rem;
  }

  .menu > a:hover{
    text-decoration: underline white!important;
  }

  .menu > a:nth-child(2){
    padding-left: 5%;
    padding-right: 5%;
  }

}

@media (min-width: 992px) and (max-width: 1700px) {
  .menu{
    padding-left: 0.2rem;
    padding-right: 0.2rem;
  }
  .menu > a{
    font-size: 2rem;
    top: 20%;
  }
}


</style>
