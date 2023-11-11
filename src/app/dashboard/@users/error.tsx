'use client'

import { useEffect } from "react"

export default function Error({
  error,
  reset
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error.message)
  }), [error]

  return (
    <div>
      <h2>Fetch Error! Couldn&apos;t get Users data.</h2>
      <button onClick={() => reset()}>
        Try again.
      </button>
    </div>
  )
}
