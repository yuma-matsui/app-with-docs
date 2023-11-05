import Counter from "@/components/Counter"

export default function DashboardLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <section>
      <h2 className="text-xl">
        Dashboard Layout
      </h2>
      {children}
    </section>
  )
}
