// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, cloudflare (build-only),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... } }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
<<<<<<< HEAD
  vite: {
    // Wichtig: Ersetze 'petanque' durch den exakten Namen deines GitHub-Repositorys
    base: '/petanque/',
  }
=======
  tanstackStart: {
    spa: {
      enabled: true,
      prerender: {
        outputPath: "/index.html",
      },
    },
  },
  cloudflare: {
    viteEnvironment: { name: "ssr" },
  },
>>>>>>> 44b953d3ea1dd5ded987e267e5ebe698dda79675
});
