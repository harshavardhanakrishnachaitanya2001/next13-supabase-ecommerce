import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div>
        <ul className='flex justify-evenly my-5'>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/products">Products</Link></li>
            <li><Link href="/checkout">Billing</Link></li>
        </ul>
    </div>
  )
}

export default Navbar