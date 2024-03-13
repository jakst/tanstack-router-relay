import { createLazyFileRoute } from "@tanstack/react-router"
import * as React from "react"

export const Route = createLazyFileRoute("/")({
	component: HomeComponent,
})

function HomeComponent() {
	return (
		<div className="p-2">
			<h3>Welcome Home!</h3>
		</div>
	)
}
