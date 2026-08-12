/**
 * Fetching data
 * @param {string} url 
 * @returns 
 */
async function fetchApi(url) {
    const response = await fetch(url)
    if (!response.ok) {
        throw new Error(response.status)
    }
    return response.json()
}

/**
 * Fetching data Pokemon
 * @param {string} url URL api get character pokemon
 * @returns 
 */
async function fetchUrl (url) {
    try {
        const {results} = await fetchApi(url)
        const linkFetch = []
        results.forEach(p => {
            linkFetch.push(fetchApi(p.url))
        });
        const data = await Promise.all(linkFetch)
        const rests = []
        for (let rest of data) {
            let pokemon = {
                name: "",
                foto: "",
                types : []
            }
            pokemon.name = rest.name
            pokemon.foto = rest.sprites.front_default
            const types = rest.types
            for (let p in types) {
                pokemon.types.push(rest.types[p].type.name)
            }
            rests.push(pokemon)
        }
        return rests
        return
    } catch (err) {
        console.error(err)
    }

}

export default fetchUrl