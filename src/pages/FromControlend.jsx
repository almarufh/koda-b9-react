import React, { useState } from 'react'

function FromControlend() {
    const [name, setName] = useState({
        value: '',
        error: false
    })

    const [email, setEmail] = useState({
        value: '',
        error: false
    })

    const dataInput = [
        {
            label: "Nama Lengkap",
            type: "text",
            class: "name"
        },
        {
            label: "Email",
            type: "email",
            class: "email"
        }
    ]
  return (
    <main className='w-full h-screen flex flex-col gap-2 items-center'>
        <form className='border w-5/10 flex flex-col items-center gap-5'>
            <label className='flex flex-col items-center gap-2'>
                <div className="border w-40 h-40 rounded-full">
                    <img src="" alt="" />
                </div>
                <input type="file" name=""  className='border'/>
            </label>
            <div className='flex flex-col gap-1 w-full'>
                <label htmlFor="name">Nama Lengkap</label>
                <input 
                    className='border outline-none'
                    type="text" 
                    name="name" 
                    id="name"
                    value={name.value}
                    onChange={(e)=> {
                        e.preventDefault()
                        console.log(e.target.value)
                        setName
                    }}
                />
            </div>
            <div className='flex flex-col gap-1 w-full'>
                <label htmlFor="email">Email</label>
                <input 
                    className='border outline-none'
                    type="email" 
                    name="email" 
                    id="email" 
                />
            </div>
        </form>
    </main>
  )
}

export default FromControlend