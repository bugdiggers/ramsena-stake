import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import compressPlugin from 'vite-plugin-compression';
import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig({
  plugins: [
    react(), // Use SWC-based React plugin
    // Gzip compression
    compressPlugin({
      algorithm: 'gzip', // Compress with gzip
      ext: '.gz', // Extension for compressed files
      threshold: 10240, // Compress files larger than 10 KB
    }),
    // Brotli compression
    compressPlugin({
      algorithm: 'brotliCompress', // Compress with Brotli
      ext: '.br', // Extension for compressed files
      threshold: 10240, // Compress files larger than 10 KB
    }),
    // Bundle analyzer
    visualizer({ filename: './bundle-visualization.html', open: false }), // Analyze bundle size
  ],
  build: {
    target: 'es2020', // Target modern JavaScript syntax
    sourcemap: false, // Disable source maps in production for smaller build size
    cssCodeSplit: true, // Split CSS into separate files for better caching
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes('node_modules')) {
            return 'vendor'; // Group all node_modules in a separate chunk
          }
        },
      },
    },
    // Minify with SWC's default minifier (use 'terser' or 'esbuild' if you prefer other options)
    minify: 'terser',
  },
  server: {
    gzip: true, // Enable gzip for the development server
  },
});
