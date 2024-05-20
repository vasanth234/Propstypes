import React from 'react'

import PropTypes from 'prop-types'

function Child(props){
  return (
    <>
<h2 style={{color:'green'}}>{props.name}</h2>
<p className='text-primary'>{props.age}</p>
</>
  )
}
//In below we had mentioned as isRequired means it is mandatory field to be mention
Child.propTypes={
  name:PropTypes.string.isRequired,
  age:PropTypes.number
}



const App = () => {
  //Here in below we have given the props are name and age in the corret format of datatpe ,so no issues will be in console.
  return (
    <div>
      
   <Child name="karna" age={67}/>

    </div>
  )
}

export default App