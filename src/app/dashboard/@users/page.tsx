import sleep from "@/utils/sleep"

type User = {
  id: number
  name: string
}

export default async function Users() {
  await sleep(1000)
  const users: User[] = await (await fetch('https://jsonplaceholder.typicode.com/users')).json()

  return (
    <ul>
      {users.map(({ id, name }) => <li key={id}>{name}</li>)}
    </ul>
  )
}
