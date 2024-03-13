import { Link, Outlet, createRootRoute } from "@tanstack/react-router"
import { TanStackRouterDevtools } from "@tanstack/router-devtools"
import * as React from "react"
import { Suspense } from "react"
import { RelayEnvironmentProvider } from "react-relay"
import { relayEnvironment } from "../relay-environment"

export const Route = createRootRoute({
	component: RootComponent,
})

function RootComponent() {
	return (
		<RelayEnvironmentProvider environment={relayEnvironment}>
			<div className="p-2 flex gap-2 text-lg">
				<Link
					to="/"
					activeProps={{
						className: "font-bold",
					}}
					activeOptions={{ exact: true }}
				>
					Home
				</Link>{" "}
				<Link
					to={"/about"}
					activeProps={{
						className: "font-bold",
					}}
				>
					About
				</Link>
			</div>
			<hr />

			<Suspense>
				<Outlet />
			</Suspense>

			<TanStackRouterDevtools position="bottom-right" />
		</RelayEnvironmentProvider>
	)
}
