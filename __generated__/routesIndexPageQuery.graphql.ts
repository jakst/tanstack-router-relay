/**
 * @generated SignedSource<<7e105e82b08cf7e38d10f80abedfb29b>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type routesIndexPageQuery$variables = Record<PropertyKey, never>;
export type routesIndexPageQuery$data = {
  readonly company: {
    readonly " $fragmentSpreads": FragmentRefs<"companyDetailsFragment">;
  } | null | undefined;
};
export type routesIndexPageQuery = {
  response: routesIndexPageQuery$data;
  variables: routesIndexPageQuery$variables;
};

const node: ConcreteRequest = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "routesIndexPageQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Info",
        "kind": "LinkedField",
        "name": "company",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "companyDetailsFragment"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "routesIndexPageQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Info",
        "kind": "LinkedField",
        "name": "company",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "name",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "founded",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "launch_sites",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "employees",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "e31fe8cf275244b4516aa1663649ae33",
    "id": null,
    "metadata": {},
    "name": "routesIndexPageQuery",
    "operationKind": "query",
    "text": "query routesIndexPageQuery {\n  company {\n    ...companyDetailsFragment\n  }\n}\n\nfragment companyDetailsFragment on Info {\n  name\n  founded\n  launch_sites\n  employees\n}\n"
  }
};

(node as any).hash = "6bd7f0d5da2f5d98a7ea2bf21cc624bf";

export default node;
