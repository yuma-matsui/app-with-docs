import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Dashboard'
}

export default async function Page() {
  return (
    <>
      <h2>Here&apos;s Posts and Users data.</h2>
    </>
  )
}
