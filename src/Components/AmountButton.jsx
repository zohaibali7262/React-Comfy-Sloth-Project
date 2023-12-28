import React from 'react'
import { FaPlus, FaMinus } from 'react-icons/fa'
const AmountButton = ({ increase, decrease, amount }) => {
  return (

    <div id='cart_item' className='amount-btns'>
      <button type='button' className='amount-btn' onClick={decrease}>
        <FaMinus />
      </button>
      <h2 className='amount'>{amount}</h2>
      <button type='button' className='amount-btn' onClick={increase}>
        <FaPlus />
      </button>
    </div>
  )
}

export default AmountButton