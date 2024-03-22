import { createFileRoute } from "@tanstack/react-router"
import node from "../../../../__generated__/bQuery.graphql"

export const Route = createFileRoute("/_layout/a/b")({
	loader() {
		return node
	},
})
