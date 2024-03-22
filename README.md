# Tanstack Router complex HMR crash reproductions

To reproduce

- `pnpm install`
- `pnpm dev`
- open http://localhost:3999 (you'll be redirected to http://localhost:3999/a/b,
  which is the problematic route)
- In your editor, open [bQuery.graphql.ts](./__generated__/bQuery.graphql.ts)
- With the browser still open, press save inside the file.
- HMR should trigger and render this error:

```
Invariant failed: No match found for route '/_layout/a/b' while rendering the '/_layout/_layout/a/b' route. Did you mean to pass '{ strict: false }' instead?
```
