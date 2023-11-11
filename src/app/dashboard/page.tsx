import Posts from "@/components/Posts"
import Users from "@/components/Uesrs"
import { Metadata } from "next"
import Link from "next/link"
import { Suspense } from "react"

export const metadata: Metadata = {
  title: 'Dashboard'
}

export default async function Page() {
  return (
    <>
      <div>Dashboard</div>
      <Link href='/dashboard/settings'>Settings</Link>
      <h2>Posts</h2>
      <Suspense fallback={<>Loading...</>}>
        <Posts />
      </Suspense>

      <hr />
      <hr />

      <h2>Users</h2>
      <Suspense fallback={<>Loading Users...</>}>
        <Users />
      </Suspense>
    </>
  )
}
