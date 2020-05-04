import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import {validateUrl, convertUrl2Link} from './utilities/String'
import {indexByScrollPosition} from './utilities/Dom'
import ClickOutside from 'vue-click-outside'

Vue.directive('click-outside', ClickOutside)
Vue.config.productionTip = false
const APP_KEY = '9c54dcd5a0bfd0b1edf86c8a746f60ae'
Kakao.init(APP_KEY)

Vue.prototype.validateUrl = validateUrl
Vue.prototype.convertUrl2Link = convertUrl2Link
Vue.prototype.indexByScrollPosition = indexByScrollPosition

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
