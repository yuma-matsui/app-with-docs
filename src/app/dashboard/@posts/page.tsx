import sleep from "@/utils/sleep"

type Post = {
  id: number
  title: string
}

export default async function Posts() {
  await sleep(3000)
  const data: { posts: Post[] } = await (await fetch('http://localhost:3000/api/posts')).json()

  return (
    <ul>
      {data.posts.map(({ id, title }) => <li key={id}>{title}</li>)}
    </ul>
  )
}
