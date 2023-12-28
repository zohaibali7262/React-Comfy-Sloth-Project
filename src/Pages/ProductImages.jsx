import React, { useState } from 'react'
const ProductImages = ({ images = [[]] }) => {
  const [main, setMain] = useState(images[0])
  return (
    <div id='product_img'>
      <img src={main.url} alt='' className='main ' />
      <div className='gallery'>
        {images.map((image, index) => {
          return (
            <img
              src={image.url}
              alt=''
              key={index}
              className={`${image.url === main.url ? 'active' : null}`}
              onClick={() => setMain(images[index])}
            />
          )
        })}
      </div>
    </div>
  )
}


export default ProductImages