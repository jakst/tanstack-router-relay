/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as LayoutImport } from './routes/_layout'
import { Route as IndexImport } from './routes/index'
import { Route as LayoutAImport } from './routes/_layout/a'
import { Route as LayoutABImport } from './routes/_layout/a/b'

// Create/Update Routes

const LayoutRoute = LayoutImport.update({
  id: '/_layout',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const LayoutARoute = LayoutAImport.update({
  path: '/a',
  getParentRoute: () => LayoutRoute,
} as any).lazy(() => import('./routes/_layout/a.lazy').then((d) => d.Route))

const LayoutABRoute = LayoutABImport.update({
  path: '/b',
  getParentRoute: () => LayoutARoute,
} as any).lazy(() => import('./routes/_layout/a/b.lazy').then((d) => d.Route))

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/_layout': {
      preLoaderRoute: typeof LayoutImport
      parentRoute: typeof rootRoute
    }
    '/_layout/a': {
      preLoaderRoute: typeof LayoutAImport
      parentRoute: typeof LayoutImport
    }
    '/_layout/a/b': {
      preLoaderRoute: typeof LayoutABImport
      parentRoute: typeof LayoutAImport
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren([
  IndexRoute,
  LayoutRoute.addChildren([LayoutARoute.addChildren([LayoutABRoute])]),
])

/* prettier-ignore-end */
