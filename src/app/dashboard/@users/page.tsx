import sleep from "@/utils/sleep"

type User = {
  id: number
  name: string
}

export default async function Users() {
  await sleep(1000)
  const data: { users: User[] } = await (await fetch('http://localhost:3000/api/users')).json()

  return (
    <ul>
      {data.users.map(({ id, name }) => <li key={id}>{name}</li>)}
    </ul>
  )
}
