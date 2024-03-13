/**
 * @generated SignedSource<<9ff9c38e7cd75045cae30c7b1ee7746b>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type companyDetailsFragment$data = {
  readonly employees: number | null | undefined;
  readonly founded: number | null | undefined;
  readonly launch_sites: number | null | undefined;
  readonly name: string | null | undefined;
  readonly " $fragmentType": "companyDetailsFragment";
};
export type companyDetailsFragment$key = {
  readonly " $data"?: companyDetailsFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"companyDetailsFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "companyDetailsFragment",
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
  "type": "Info",
  "abstractKey": null
};

(node as any).hash = "9a52da7294cedc550e153d8514b80f8e";

export default node;
