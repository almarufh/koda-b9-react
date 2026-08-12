import React, { useState } from 'react'

function Counter({set, get}) {
    const [err, setErr] = useState("")
  return (
    <div 
    className='flex flex-col gap-5 w-full justify-center items-center'>
        <span 
        className="text-xl font-bold text-orange-700  bg-blue-900 w-full py-4 pt-4 flex items-center justify-center"
        >COUNTER</span>
        <div 
        className="flex w-full justify-between px-8 items-center"
        >
            <button
            className='px-8 py-3 border text-xl font-bold rounded-md bg'
            onClick={()=> {
                if(get > 0) {
                    set(get - 1)
                }
            }}>-</button>
            <span
            className='p-5 text-xl text-orange-600 rounded-md'
            >{get}</span>
            <button
            className='px-8 py-3 border text-xl font-bold rounded-md bg'
            onClick={()=> {
                if(get < 10) {
                    set(get + 1)
                }
            }}>+</button>
        </div>
        <span className="">{err}</span>
    </div>
  )
}

export default Counter