import * as React from "react"
import { graphql, useFragment } from "react-relay"
import type { companyDetailsFragment$key } from "../../__generated__/companyDetailsFragment.graphql"

const detailsFragment = graphql`
	fragment companyDetailsFragment on Info {
		name
		founded
		launch_sites
		employees
	}
`

export function CompanyDetails(props: { dataRef: companyDetailsFragment$key }) {
	const company = useFragment(detailsFragment, props.dataRef)

	return (
		<div>
			<h3 className="mt-6 font-bold">{company.name}</h3>
			<p>Founded: {company.founded}</p>
			<p>Launch sites: {company.launch_sites}</p>
			<p>Employees: {company.employees}</p>
		</div>
	)
}
