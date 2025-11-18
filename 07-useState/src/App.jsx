import React, { useState } from 'react'

const App = () => {
  const [num, setNum] = useState(0)

  function Increase(){
    setNum(num + 1)
  }
  function Decrease(){
    setNum(num - 1)
  }
  function Jump(){
    setNum(num + 5)
  }
  return (
    <div>
      <h1>{num}</h1>
      <button onClick={Increase}>Increase</button>
      <button onClick={Decrease}>Decrease</button>
      <button onClick={Jump}>5 Jump</button>
    </div>
  )
}

export default App