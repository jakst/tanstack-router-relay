import { Navigate, createFileRoute } from "@tanstack/react-router"
import * as React from "react"

export const Route = createFileRoute("/")({
	component: () => <Navigate to="/a/b" />,
})
