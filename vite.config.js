import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import inkline from '@inkline/plugin/vite';

const inklineConfig = {
    outputDir: 'src/css/variables'
};

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [inkline(inklineConfig), vue()]
});
