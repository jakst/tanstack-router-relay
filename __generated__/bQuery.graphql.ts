/**
 * @generated SignedSource<<cb64c40c0a179dbc5fc76b8ff2265dac>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime"
export type bQuery$variables = Record<PropertyKey, never>
export type bQuery$data = {
	readonly user: string
}
export type bQuery = {
	response: bQuery$data
	variables: bQuery$variables
}

const node: ConcreteRequest = (function () {
	var v0 = [
		{
			alias: null,
			args: null,
			kind: "ScalarField",
			name: "user",
			storageKey: null,
		},
	]
	return {
		fragment: {
			argumentDefinitions: [],
			kind: "Fragment",
			metadata: null,
			name: "bQuery",
			selections: v0 /*: any*/,
			type: "Query",
			abstractKey: null,
		},
		kind: "Request",
		operation: {
			argumentDefinitions: [],
			kind: "Operation",
			name: "bQuery",
			selections: v0 /*: any*/,
		},
		params: {
			cacheID: "6f69f32dd913344dc1a80d56564908ec",
			id: null,
			metadata: {},
			name: "bQuery",
			operationKind: "query",
			text: "query bQuery {\n  user\n}\n",
		},
	}
})()

;(node as any).hash = "ecf37c7c6bc6cc6a1f4c8891fbc251c9"

export default node
