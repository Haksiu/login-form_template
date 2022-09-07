import React from 'react'

const Main = () => {
  return (
    <div className='flex items-center justify-center w-full mt-[235px]'>
        <form className='bg-gray-300 shadow-xl rounded px-8 pt-6 pb-8 w-[400px]'>
            <div className='mb-4'>
                <label className='flex items-center justify-center text-gray-800 text-md font-bold mb-2' for="username">
                    Username
                </label>
                <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' id="username" type="text" placeholder="Username"></input>
            </div>
            <div className='mb-6'>
                <label className='flex items-center justify-center text-gray-800 text-md mb-2 font-bold' for="password">
                    Password
                </label>
                <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' id="password" type="password" placeholder='*************'></input>
            </div>
            <div className='flex items-center justify-around'>
                <button className='bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold uppercase py-2 px-4 rounded focus:outline-none focus:shadow-outilne'>
                    Login
                </button>
                <button className='bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold uppercase py-2 px-4 rounded focus:outline-none focus:shadow-outilne'>
                    Register
                </button>
            </div>
        </form>
        </div>
  )
}

export default Main