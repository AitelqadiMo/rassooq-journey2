import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        // Force completely new asset names on each build
        entryFileNames: `assets/app-${Date.now()}-[hash].js`,
        chunkFileNames: `assets/chunk-${Date.now()}-[hash].js`,
        assetFileNames: `assets/style-${Date.now()}-[hash].[ext]`,
        manualChunks: {
          vendor: ['react', 'react-dom'],
          amplify: ['aws-amplify', '@aws-amplify/ui-react', '@aws-amplify/ui-react-core'],
          ui: ['@radix-ui/react-dialog', '@radix-ui/react-dropdown-menu', '@radix-ui/react-select'],
          router: ['react-router-dom'],
          query: ['@tanstack/react-query'],
          icons: ['lucide-react'],
          animation: ['framer-motion'],
        }
      }
    }
  }
}));
