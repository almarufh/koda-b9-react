import React, { useEffect, useState } from 'react'
import fetchUrl from '../utils/fetchUrl.js'

function Pokemon() {
  const [search, setSearch] = useState("")
  const [data, setData] = useState([])
  useEffect(()=>{
    (async()=> {
      try {
        console.log("fetchuing")
        const results = await fetchUrl("https://pokeapi.co/api/v2/pokemon?limit=56&offset=0")
        setData(results)
      } catch (err) {
        console.log(err)
      }
    })()
  }, [])

  const searching = data.filter((e)=> (e.name.toLocaleLowerCase()).includes(search.toLocaleLowerCase()))
  
  function getSearch (e) {
    e.preventDefault()
    const data = new FormData(e.target)
    const value = data.get("search")
    setSearch(value)
    e.target.reset()
  }

  return (
    <div className="flex flex-col py-5">
      <form onSubmit={getSearch} className="flex w-full px-4 gap-1">
        <input type="text" name="search" placeholder='search keywords' className='w-full border border-cyan-500 rounded-md p-2 outline-none' />
        <button type='submit' className='flex gap-2 bg-cyan-100 justify-center items-center px-4 py-1 rounded-xl'>
          <img src="/search.svg" alt="search" />
          <span className='font-bold text-md text-[#0fffaf]'>SEARCH</span>
        </button>

      </form>
      <div className='grid grid-cols-4 gap-3 p-4'>{
      searching.length < 1  ? <p className='text-red-400 w-full flex h-screen items-center justify-center col-span-4 text-bold text-4xl'>"{search}" not found!</p> :  
        searching.map((res, idx)=> {
          return (
            <article key={idx} className='flex flex-col rounded-xl items-center justify-between pb-2 bg-blue-100 border-l-2 border-b-5 border-b-emerald-200'>
              <img src={res.foto} alt={res.name} />
              <span className="font-bold text-md">{res.name.toUpperCase()}</span>
              <div className="flex gap-2 italic bg-emerald-200 px-6 py-1 rounded-md">
                {res.types.map((type, i)=> {
                  return (
                    <span key={i}>{type}</span>
                  )
                })}
              </div>
            </article>
          )
        })
      }</div>
    </div>
  )
}

export default Pokemon