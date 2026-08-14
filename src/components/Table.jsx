import React from 'react'

/**
 * Create table
 * @param {Object[]} props Data products
 * @param {string} props[].sku sku product
 * @param {string} props[].product name product
 * @param {number} props[].stok stok product
 * @returns 
 */
function Table({ props }) {
  return (
    <div className="overflow-x-auto shadow-md rounded-lg border border-gray-200">
      <table className="w-full text-left border-collapse text-sm text-gray-700">
        <thead className="bg-gray-100 text-gray-700 uppercase text-xs tracking-wider border-b border-gray-200">
          <tr>
            <th className="py-3 px-4 font-semibold">Nomor</th>
            <th className="py-3 px-4 font-semibold">SKU</th>
            <th className="py-3 px-4 font-semibold">Nama Product</th>
            <th className="py-3 px-4 font-semibold">Stock</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 bg-white">
          {props.length < 1 ? <span className='flex w-full '>Products Empty!</span> : props.map((r, i) => {
            return (
              <tr key={r.sku} className="hover:bg-gray-50 transition-colors">
                <td className="py-3 px-4 font-medium text-gray-900">{i + 1}</td>
                <td className="py-3 px-4">{r.sku}</td>
                <td className="py-3 px-4">{r.product}</td>
                <td className="py-3 px-4">
                  <span className={`px-2 py-1 rounded text-xs font-semibold ${r.stok > 0 ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                    {r.stok}
                  </span>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default Table