import { RouterProvider } from "@tanstack/react-router"
import React from "react"
import ReactDOM from "react-dom/client"
import { router } from "./router"

const rootElement = document.getElementById("app")!

if (rootElement && !rootElement.innerHTML) {
	const root = ReactDOM.createRoot(rootElement)
	root.render(<App />)
}

function App() {
	return <RouterProvider router={router} />
}
