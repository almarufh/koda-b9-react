import React, { useEffect, useState } from 'react'
import {fetchApi, fetchUrl} from '../utils/fetchUrl.js'
import { Link, useSearchParams,  } from 'react-router'

function Pokemon() {
  const [param, setParam] = useSearchParams()
  const [search, setSearch] = useState(param.get("search") || "")
  const [selectedType, setSelectedType ] = useState(param.get("type") || "")
  const [type, setType] = useState([])
  const [data, setData] = useState([])

  useEffect(()=>{
    (async()=> {
      try {
        const results = await fetchUrl("https://pokeapi.co/api/v2/pokemon?limit=300&offset=0")
        const res = await fetchApi("https://pokeapi.co/api/v2/type?")
        setData(results)
        setType(res.results)
      } catch (err) {
        console.log(err)
      }
    })()
  }, [])

  const query = search.toLocaleLowerCase();

  const searching = data.filter((e) => {
    const nameMatch = e.name.toLocaleLowerCase().includes(query);
    
    const typeMatch = selectedType 
      ? e.types.some((t) => t.toLocaleLowerCase().includes(selectedType.toLocaleLowerCase()))
      : true;

    return nameMatch && typeMatch;
  });

  function getSearch (e) {
    e.preventDefault()
    const data = new FormData(e.target)
    const value = data.get("search")
    setParam((prevParam) => {
      if (value) {
        prevParam.set("search", value);
      } else {
        prevParam.delete("search");
      }
      setSearch(value)
      return prevParam;
    });
    setSearch(value)
    e.target.reset()
  }

  return (
    <div className="flex flex-col py-5 min-h-screen">
      <form onSubmit={getSearch} className="flex w-full px-4 gap-1">
        <input 
          onChange={(e)=>{
            const value = e.target.value;
            setParam((prevParam) => {
              if (value) {
                prevParam.set("search", value);
              } else {
                prevParam.delete("search");
                setSearch(value)
              }
              return prevParam;
            });
          }}
          type="text" 
          name="search" 
          defaultValue={search}
          placeholder='search keywords' 
          className='w-full border border-cyan-500 rounded-md p-2 outline-none' 
        />
        <button type='submit' className='flex gap-2 bg-cyan-100 justify-center items-center px-4 py-1 rounded-xl'>
          <img src="/search.svg" alt="search" />
          <span className='font-bold text-md text-[#0fffaf] cursor-pointer'>SEARCH</span>
        </button>
      </form>

      <section 
        className='flex flex-wrap items-center justify-center gap-6 py-4 px-4'
      >
        { type.length < 1 
          ? (<p>Loading....</p>)
          : (
            type.map((re, id)=>{
              return (
                <span  onClick={
                  (e)=> {
                    e.preventDefault()
                    const name = re.name
                    setParam((prevParam)=> {
                      if(name){
                        prevParam.set("type", name)
                        setSelectedType(name)
                      } else {
                        prevParam.delete("type")
                      }
                      return prevParam
                    })
                  }

                } className={`${selectedType === re.name ? "bg-emerald-200" : "bg-blue-100"} flex justify-center py-1 px-2 text-md rounded-md cursor-pointer`} key={id}>{re.name.toUpperCase()}</span>
              )
            })
          ) 
        }
      </section>

      <div className='grid grid-cols-4 gap-3 p-4'>{
      searching.length < 1  ? <p className='text-red-400 w-full flex h-screen items-center justify-center col-span-4 text-bold text-4xl'>"{search}" not found!</p> :  
        searching.map((res, idx)=> {
          return (
            <article key={idx} className='flex flex-col rounded-xl items-center justify-between pb-2 bg-blue-100 border-l-2 border-b-5 border-b-emerald-200'>
              <Link to={`/pokemon/${res.id}`}>
                <img src={res.foto} alt={res.name} />
                <span className="font-bold text-md">{res.name.toUpperCase()}</span>
                <div className="flex gap-2 italic bg-emerald-200 px-6 py-1 rounded-md">
                  {res.types.map((type, i)=> {
                    return (
                      <span key={i}>{type}</span>
                    )
                  })}
                </div>
              </Link>
            </article>
          )
        })
      }</div>
    </div>
  )
}

export default Pokemon