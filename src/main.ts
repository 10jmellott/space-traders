// Global Styles
import '@styles/main.scss';

// Vue
import { createApp } from 'vue';
import App from './App.vue';

// Pinia
import { createPinia } from 'pinia';
const pinia = createPinia();

// FontAwesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas)

// Vue Router
import Home from '@pages/Home.vue';
import Travel from '@pages/Travel.vue';
import Contracts from '@pages/Contracts.vue';
import { createRouter, createWebHashHistory } from 'vue-router';
const routes = [
	{ path: '/', component: Home },
	{ path: '/travel', component: Travel },
	{ path: '/contracts', component: Contracts },
];
const router = createRouter({
	history: createWebHashHistory(),
	routes,
});

// Create the App
createApp(App)
	.component('font-awesome-icon', FontAwesomeIcon)
	.use(router)
	.use(pinia)
	.mount('#app')
