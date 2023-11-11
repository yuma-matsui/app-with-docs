type Post = {
  id: number
  title: string
}

export const revalidate = 30
export async function GET() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const posts: Post[] = await res.json()

  return Response.json({ posts })
}
