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
import Home from '@components/Home.vue';
import { createRouter, createWebHashHistory } from 'vue-router';
const routes = [
	{ path: '/', component: Home }
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
