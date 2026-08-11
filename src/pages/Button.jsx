import React, { useState } from 'react'

function Button() {
    const [num, setNum] = useState(0)
    console.log(num)
    
    return (
    <>
    <form style={{
        display: 'flex', 
        flexDirection: 'column',
        gap: '4px',
        width: '50%',
        height: '100vh',
        margin: 'auto',
        justifyContent: 'center',
        alignItems: 'center',
        border: 'solid 1px'
    }} onSubmit={(e)=> {
        e.preventDefault()
        setNum(parseInt(e.target.num.value) + num)
    }}>
        <label style={{ backgroundColor: '#f0f0f0', color: '#333' }} htmlFor="num">
          Masukkan Angka:
        </label>
        <input type="number" name='num' id='num' />
        <button>Add</button>
        <span style={{
            marginTop: '20px'
        }}
        >Value = {num}</span>
    </form>
    </>
  )
}

export default Button