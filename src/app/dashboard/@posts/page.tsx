import sleep from "@/utils/sleep"

type Post = {
  id: number
  title: string
}

export default async function Posts() {
  await sleep(3000)
  const posts: Post[] = await (await fetch('https://jsonplaceholder.typicode.com/posts')).json()

  return (
    <ul>
      {posts.map(({ id, title }) => <li key={id}>{title}</li>)}
    </ul>
  )
}
