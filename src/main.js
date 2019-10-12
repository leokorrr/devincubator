import Vue from 'vue'
import AOS from 'aos';
import VueParticles from 'vue-particles'

import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import 'aos/dist/aos.css'; 

AOS.init()

Vue.use(VueParticles)
        
library.add(faArrowDown)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
