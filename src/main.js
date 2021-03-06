import 'leaflet/dist/leaflet.css'
import { Icon } from 'leaflet';
import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

delete Icon.Default.prototype._getIconUrl;
Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

new Vue({
  render: h => h(App),
}).$mount('#app')
