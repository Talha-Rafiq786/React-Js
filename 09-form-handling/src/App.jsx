import React from 'react'

const App = () => {

  const submit=(e)=>{
    e.preventDefault()
  }
  return (
    <div>
      <form  onSubmit={(e)=>{submit(e)}}>
        <input type="text" placeholder='Enter your name' />
      <button>Submit</button>
      </form>
    </div>
  )
}

export default App