import { createFileRoute } from "@tanstack/react-router"
import { loadQuery } from "react-relay"
import node, {
	routesIndexPageQuery,
} from "../../__generated__/routesIndexPageQuery.graphql"
import { relayEnvironment } from "../relay-environment"

export const Route = createFileRoute("/")({
	async loader() {
		return loadQuery<routesIndexPageQuery>(
			relayEnvironment,
			node,
			{},
			// By default Relay will cache the data indefinitely. This policy makes
			// Relay instantly show the results from the cache, but refetches in the
			// background on every page visit.
			{ fetchPolicy: "store-and-network" }
		)
	},
})
