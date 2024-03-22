import { Outlet, createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/_layout")({
	component: Outlet,
})
