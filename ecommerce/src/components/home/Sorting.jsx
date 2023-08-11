import React from 'react'

function Sorting({setSort}) {
  return (
    <div className='bg-gray-100 my-5 p-5 flex items-center justify-end border rounded-lg shadow-md  '>
          <select onChange={e=>setSort(e.target.value)} className='bg-white py-3 px-5' name="" id="">
              <option disabled value=""  >Select</option>
              <option value="inc">Increment</option>
              <option value="dec">Decrement</option>
           </select>
    </div>
  )
}

export default Sorting