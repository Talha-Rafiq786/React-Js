import React, { useState } from 'react'

const App = () => {
  const [num, setNum] = useState(0)

  const change = ()=>{
    setNum(ok => ok + 1)
    setNum(ok => ok + 1)
    setNum(ok => ok + 1)
    setNum(ok => ok + 1)
    setNum(ok => ok + 1)
    setNum(ok => ok + 1)
    setNum(ok => ok + 1)
  }
  return (
    <div>
      <h1>{num}</h1>
      <button onClick={change}>Click</button>
    </div>
  )
}

export default App