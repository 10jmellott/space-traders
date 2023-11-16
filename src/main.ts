import '@styles/main.scss';
import { createRouter, createWebHashHistory } from 'vue-router';
import { createApp } from 'vue';
import App from './App.vue';
import { createPinia } from 'pinia';

import Home from '@components/Home.vue';

const routes = [
	{ path: '/', component: Home }
];

const router = createRouter({
	history: createWebHashHistory(),
	routes,
});

createApp(App)
	.use(router)
	.use(createPinia())
	.mount('#app')
