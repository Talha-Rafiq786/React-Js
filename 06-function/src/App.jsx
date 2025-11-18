import React from 'react'

const App = () => {

  // function btnClick() {
  //   console.log('Button is Clicked');
  // }

  function inpChange(elem){
    console.log(elem.target.value);
    
  }


  return (
    <div >
      {/* <h1>Hello Word</h1>
      <button onClick={btnClick}>Click</button>
      <button onClick={function(){console.log('Second Click');
      }}>Click</button> */}
    <div>
      <input onChange={inpChange} type="text" placeholder='Enter Your NAme' />
    </div>

    </div>
  )
}

export default App