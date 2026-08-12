/**
 * Save daat to Local Storage
 * @param {string} key key want to save
 * @param {Object[]} data data want to save in looragecal st
 * @returns 
 */
function save (key, data) {
    window.localStorage.setItem(key, JSON.stringify(data))
    return 
}

/**
 * Get data from local storage
 * @param {string} key  key want to get
 * @returns 
 */
function load (key) {
    let results = window.localStorage.getItem(key)
    results = JSON.parse(results)
    return results
}

/**
 * Remove data from local storage
 * @param {string} key key want to remove
 * @returns 
 */
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