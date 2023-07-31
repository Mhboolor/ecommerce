import React from 'react'
import { MdShoppingCart } from 'react-icons/md'

function Cart() {
  return (
    <div className='flex items-center justify-center text-2xl'>
        <button><MdShoppingCart/></button>
    </div>
  )
}

export default Cart