import React from 'react'

/**
 * @typedef {Object} Product
 * @property {string} sku
 * @property {string} product
 * @property {number} stok
 */

/**
 * @param {Object} props
 * @param {import('react').Dispatch<import('react').SetStateAction<Product[]>>} props
 */
function FormInput({props}) {
    function addProducts(e) {
        e.preventDefault()
        console.log("submit")
        const data = new FormData(e.target)
        const product = {
            sku: `SKU-${Date.now()}`,
            product: data.get("product"),
            stok: data.get("stok")
        }

        props((prevState)=> {
            const data = [
                ...prevState,
                product
            ]
            return data
        })
        e.target.reset()
    }
  return (
    <form onSubmit={addProducts} className="w-[50%] flex flex-col gap-5 justify-center items-center bg-white p-6 shadow-md rounded-lg border border-gray-200">
        <div className="flex flex-col gap-2 w-full">
            <label htmlFor="product" className="text-sm font-medium text-gray-700">Nama Product</label>
            <input 
                id="product"
                name="product" 
                type="text" 
                placeholder="Indomie"
                className="outline-none border border-gray-300 p-2 rounded-md text-sm focus:ring-2 focus:ring-gray-400 focus:border-transparent"
            />
        </div>
        <div className="flex flex-col gap-2 w-full">
            <label htmlFor="stok" className="text-sm font-medium text-gray-700">Jumlah Stocks</label>
            <input 
                id="stok" 
                name="stok" 
                type="number" 
                placeholder="5"
                className="outline-none border border-gray-300 p-2 rounded-md text-sm focus:ring-2 focus:ring-gray-400 focus:border-transparent"
            />
        </div>
        <button 
            type="submit"
            className="w-full bg-slate-800 hover:bg-slate-900 text-white font-medium py-2 px-4 rounded-md transition-colors cursor-pointer shadow-sm text-sm"
        >
            SUBMIT
        </button>
    </form>
  )
}

export default FormInput