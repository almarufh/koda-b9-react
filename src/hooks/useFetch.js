import { useState, useEffect } from "react"

function useFetch (url) {
    const [data, setData] = useState({})
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)

    useEffect(()=>{        
        (async function() {
            try{
                setLoading(true)
                const res = await fetch(url)
                if(!res.ok) {
                    throw new Error(`response HTTP error ${res.status}`)
                }

                const results = await res.json()
                
                if (results !== undefined) {
                    setData(results)
                    setLoading(false)
                }
                throw new Error ("Data not found")
            } catch (err) {
                setError(err)
            }
        })()

    }, [url])

    return {
        data,
        error,
        loading
    }
}

export default useFetch