import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_layout/a')({
  staticData: { title: 'Overview' },
})
