import React from 'react'


const Category = ({params}:any) => {
  return (
    <div>
        <h1 className='text-3xl py-3 text-center font-bold'>{params.category} products</h1>
    </div>
  )
}

export default Category