function save (key, data) {
    window.localStorage.setItem(key, JSON.stringify(data))
    return 
}

function load (key) {
    let results = window.localStorage.getItem(key)
    results = JSON.parse(results)
    return results
}

function remove (key) {
    window.localStorage.removeItem(key)
    return {
        success: true,
        data: []
    }
}

export {
    save,
    load,
    remove
}