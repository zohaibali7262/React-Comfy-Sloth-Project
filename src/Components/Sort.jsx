import React from 'react'
import { BsFillGridFill, BsList } from 'react-icons/bs'
import { useFilterContext } from '../Context/filter_context'

const Sort = () => {
  const {
    filtered_products: products,
    grid_view,
    setGridView,
    setListView,
    sort,
    updateSort,
  } = useFilterContext()
  return (
    <div id='sort' className='mb-8'>
      <div className='btn-container'>
        <button
          onClick={setGridView}
          className={`${grid_view ? 'active' : null}`}
        >
          <BsFillGridFill />
        </button>
        <button
          onClick={setListView}
          className={`${!grid_view ? 'active' : null}`}
        >
          <BsList />
        </button>
      </div>

      <p>{products.length} products found</p>
      <hr />
      <form className='flex items-center'>
        <label htmlFor='sort'>sort by</label>
        <select
          name='sort'
          id='sort'
          value={sort}
          onChange={updateSort}
          className='sort-input mb-0'
        >
          <option value='price-lowest'>price (lowest)</option>
          <option value='price-highest'>price (highest)</option>
          <option value='name-a'>name (a - z)</option>
          <option value='name-z'>name (z - a)</option>
        </select>
      </form>
    </div>
  )
}

export default Sort