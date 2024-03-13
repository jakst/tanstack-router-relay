import { Environment, Network, RecordSource, Store } from "relay-runtime"

const network = Network.create(async (request, variables) => {
	const resp = await fetch("https://spacex-production.up.railway.app/", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			query: request.text,
			variables,
		}),
	})

	if (!resp.ok) {
		const error = new Error(`Network error ${resp.status} ${resp.statusText}`)
		throw error
	}

	const json = await resp.json()

	// GraphQL returns exceptions (for example, a missing required variable) in the "errors"
	// property of the response. If any exceptions occurred when processing the request,
	// throw an error to indicate to the developer what went wrong.
	if (Array.isArray(json.errors)) {
		const error = new Error(
			`Error fetching GraphQL query '${
				request.name
			}' with variables '${JSON.stringify(variables)}': ${JSON.stringify(
				json.errors
			)}`
		)
		console.error(error)
		throw error
	}

	return json
})

const store = new Store(RecordSource.create())

export const relayEnvironment = new Environment({ store, network })
