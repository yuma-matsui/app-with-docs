export default function DashboardLayout({
  children,
  posts,
  users
}: {
  children: React.ReactNode
  posts: React.ReactNode
  users: React.ReactNode
}) {
  return (
    <section>
      <h2 className="text-xl">
        Dashboard
      </h2>
      {children}
      <hr />
      {posts}
      <hr />
      {users}
    </section>
  )
}
