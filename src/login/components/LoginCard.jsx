import React from 'react'

function LoginCard() {
  return (
    <form className='flex flex-col items-center justify-center w-[700px] h-[310px] shadow shadow-zinc-400 rounded-[13px]'>
    <h1 className='text-3xl font-bold mb-5'>LOGIN  FgfgORM</h1>
    <div className='flex flex-col'> 
      <label htmlFor="">Email</label>
      <input className='border border-zinc-300 rounded-[6px] my-2' type="email" />
    </div>
    <button className='bg-yellow-500 py-2 px-4  rounded-[10px] hover:bg-yellow-700' type='submit'>Submit</button>
  </form>
  )
}

export default LoginCard