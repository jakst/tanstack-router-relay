import { createLazyFileRoute } from "@tanstack/react-router"
import * as React from "react"
import { graphql } from "react-relay"

export const Route = createLazyFileRoute("/_layout/a/b")({
	component: Component,
})

graphql`
	query bQuery {
		user
	}
`

function Component() {
	const data = Route.useLoaderData()
	return <div>{JSON.stringify(data)}</div>
}
