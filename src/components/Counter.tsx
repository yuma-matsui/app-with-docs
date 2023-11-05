'use client'

import { useState } from "react"

export default function Counter() {
  const [counter, setCounter] = useState(0)

  const onClickCountUp = () => setCounter(pre => pre + 1)

  return (
    <div>
      <p>{`${counter} click`}</p>
      <button onClick={onClickCountUp}>Click</button>
    </div>
  )
}
