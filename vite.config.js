import { TanStackRouterVite } from "@tanstack/router-vite-plugin"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import relay from "vite-plugin-relay"

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [relay, react(), TanStackRouterVite()],
})
