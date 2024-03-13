import { createLazyFileRoute } from "@tanstack/react-router"
import * as React from "react"
import { graphql, usePreloadedQuery } from "react-relay"
import { CompanyDetails } from "../components/company-details"

export const Route = createLazyFileRoute("/")({
	component: HomeComponent,
})

const query = graphql`
	query routesIndexPageQuery {
		company {
			...companyDetailsFragment
		}
	}
`

function HomeComponent() {
	const preload = Route.useLoaderData()
	const { company } = usePreloadedQuery(query, preload)

	return (
		<div className="p-2">
			<h3>Welcome to Relay!</h3>

			{company && <CompanyDetails dataRef={company} />}
		</div>
	)
}
