import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: 'Dashboard'
}

export default function Page() {
  return (
    <>
      <div>Dashboard</div>
      <Link href='/dashboard/settings'>Settings</Link>
    </>
  )
}
