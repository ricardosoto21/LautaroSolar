import { defineConfig } from 'vite';
import { resolve } from 'node:path';

export default defineConfig({
  build: { rollupOptions: { input: {
    main: resolve(import.meta.dirname, 'index.html'), gracias: resolve(import.meta.dirname, 'gracias/index.html'),
    privacidad: resolve(import.meta.dirname, 'privacidad/index.html'), terminos: resolve(import.meta.dirname, 'terminos/index.html'), cookies: resolve(import.meta.dirname, 'cookies/index.html'), notFound: resolve(import.meta.dirname, '404/index.html')
  } } }
});
