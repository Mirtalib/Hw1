import React from 'react'
import LoginCard from './login/components/LoginCard'
import Todocard from './mainpage/components/Todocard'
import Header from './mainpage/components/Header'

function App() {
  return (
    <div className='flex h-screen justify-center items-center'>
      {/* <LoginCard/> */}
      <Header/>
      <Todocard/>
    </div>
  )
}

export default App