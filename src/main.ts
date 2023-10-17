import { createApp } from 'vue'
import App from './App.vue'
import './assets/style.scss'

import Chartkick from 'vue-chartkick'
import 'chartkick/chart.js'

const app = createApp(App);
app.use(Chartkick);
app.mount('#app');
