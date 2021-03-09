import Vue from 'vue'
import Router from 'vue-router'
import Accueil from "../pages/Accueil";
import About from "../pages/About";
import Work from "../pages/Work";
import Doubleboggey from "../pages/Doubleboggey"
import Michelangelo from "../pages/Michelangelo";
import Nearide from "../pages/Nearide";
import Bureau from "../pages/Bureau";


Vue.use(Router)



export default new Router({
  routes: [
    {path: '/',name: 'Accueil',component: Accueil},
    {path: '/about',name: 'About',component: About},
    {path: '/work',name: 'Work',component: Work},
    {path: '/doubleboggey',name: 'Doubleboggey',component: Doubleboggey},
    {path: '/michelangelo',name: 'Michelangelo',component: Michelangelo},
    {path: '/nearide',name: 'Nearide',component: Nearide},
    {path: '/bureau',name: 'Bureau',component: Bureau},


  ]
})


