import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './app'
import components from './components.json'
import routes from './route'
import Mint from './mint/index'
// import 'mint-ui/lib/style.css'
// import "./assets/reset.css"
// import "./assets/mint.css"
import "./assets/test.css";

document.addEventListener('DOMContentLoaded', function() {
  if (window.FastClick) window.FastClick.attach(document.body)
}, false)

Vue.use(VueRouter)
Vue.use(Mint)

const router = new VueRouter()

router.map(routes)
router.start(App, 'app')

let indexScrollTop = 0
router.beforeEach(transition => {
  if (transition.to.path !== '/') {
    indexScrollTop = document.body.scrollTop
  }
  document.title = transition.to.title || document.title
  transition.next()
})

router.afterEach(transition => {
  if (transition.to.path !== '/') {
    document.body.scrollTop = 0
  } else {
    Vue.nextTick(() => {
      document.body.scrollTop = indexScrollTop
    })
  }
})
