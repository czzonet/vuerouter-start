import Vue from 'vue'
import VueRouter from 'vue-router'
import HelloOne from './components/HelloOne.vue'
import HelloTwo from './components/HelloTwo.vue'

Vue.config.productionTip = false
Vue.use(VueRouter)

const routes = [
  {path:'/one',component:HelloOne},
  {path:'/two',component:HelloTwo}
]

const router = new VueRouter({
  routes
})

export default router;