/* VUE ROUTER */
import { createRouter, createWebHistory } from 'vue-router'

/* PAGES */
import SkillPage from '../views/SkillPage'
import FormationPage from '../views/FormationPage'
import ParcoursPage from '../views/ParcoursPage'
import ProjetPage from '../views/ProjetPage'
import HobbyPage from '../views/HobbyPage'
import ContactPage from '../views/ContactPage'

/* ROUTES */
const routes = [
  {
    path: '/',
    name: 'homePage',
    component: SkillPage,
  },
  {
    path: '/formation',
    name: 'formationPage',
    component: FormationPage,
  },
  {
    path: '/parcours',
    name: 'parcoursPage',
    component: ParcoursPage,
  },
  {
    path: '/hobby',
    name: 'hobbyPage',
    component: HobbyPage,
  },
  {
    path: '/contact',
    name: 'contactPage',
    component: ContactPage,
  },
  {
    path: '/projet',
    name: 'projetPage',
    component: ProjetPage,
  },
]

/* ROUTER */
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
