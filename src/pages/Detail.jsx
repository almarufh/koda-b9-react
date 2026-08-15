import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import {fetchApi} from '../utils/fetchUrl.js'

function Detail() {
    const [data, setData] = useState(null)
    const {id} = useParams()
    const url = `https://pokeapi.co/api/v2/pokemon/${id}/`

    useEffect(()=> {
        (async()=> {
            let res = await fetchApi(url)

            let pokemon = {
                id: res.id,
                name: res.name,
                foto: res.sprites.front_default,
                stats: null,
                types : []
            }

            const types = res.types
            for (let p in types) {
                pokemon.types.push(res.types[p].type.name)
            }

            const stats = res.stats.map((r)=> {
                return {
                    name: r.stat.name,
                    value: r.base_stat
                }
            })

            pokemon.stats = stats

            setData(pokemon)

        })()
    },[])


    
  return (
    <div className="flex w-full h-screen items-start pt-20 px-5 justify-center">
        <article className='grid grid-cols-2 rounded-xl items-center justify-between bg-blue-100 border-l-2 border-b-5 border-b-emerald-200 w-8/10 gap-2 px-1'>
            { !data
                ? (<span>Loading</span>)
                : (<>
                    <div className="flex items-center flex-col py-4">
                        <img src={data.foto} alt={data?.name} />
                        <span className="font-bold text-md">{data?.name.toUpperCase()}</span>
                        <div className="flex gap-2 italic bg-emerald-200 px-6 py-1 rounded-md">
                          {data.types.map((type, i)=> {
                            return (
                              <span key={i}>{type}</span>
                            )
                          })}
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-2 py-2">
                        {data.stats.map((r, i) => {
                            return (
                                <div className="flex flex-col items-center justify-center border rounded-xl text-xs">
                                    <span className='text-lg'>{r.value}</span>
                                    <span>{r.name.toUpperCase()}</span>
                                </div>
                            )
                        })}
                    </div>
                </>
            )}
        </article>
    </div>   
  )
}

export default Detail