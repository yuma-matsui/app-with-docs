type User = {
  id: number
  name: string
}

export const revalidate = 30
export async function GET() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const users: User[] = await res.json()

  return Response.json({ users })
}
