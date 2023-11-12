import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
			'@assets': path.resolve(__dirname, './src/assets'),
			'@models': path.resolve(__dirname, './src/models'),
			'@api': path.resolve(__dirname, './src/api'),
			'@components': path.resolve(__dirname, './src/components'),
			'@stores': path.resolve(__dirname, './src/stores'),
			'@utils': path.resolve(__dirname, './src/utils')
		},
	},
	server: {
		port: 8086
	},
	build: {
		chunkSizeWarningLimit: 3000
	},
	plugins: [vue()],
})
