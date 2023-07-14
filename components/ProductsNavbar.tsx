import Link from 'next/link'
import React from 'react'
import logo from '../public/logo.jpeg'
import Image from 'next/image'
import {BsCart} from 'react-icons/bs'

const ProductsNavbar = () => {

    const products = ['Cloths', 'Stationary', 'Kitchen', 'Food']

  return (
    <div className='flex justify-between my-5 items-center'>
        <Link href="/products" title="back to products"><Image src={logo} alt="my pic" className="rounded-full ml-5" width={50} height={50} /></Link>
        <ul className='flex mx-auto gap-10'>
            {products.map((product, index) => (
                <li key={index}><Link href={`/products/${product}`}>{product}</Link></li>
            ))
            }
        </ul>
        <Link href="/cart"><BsCart  className='mr-2 w-6 h-7' title="view cart"/></Link>
        <Link href="/" className='px-5 py-3 rounded-md mr-5 bg-blue-300'>Back to home page</Link>
    </div>
  )
}

export default ProductsNavbar