import SingleBlog from '@/components/Blog/SingleBlog';
import axios from 'axios'
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
  title: "Products",
  description: "Products",
}

const Products = async () => {
  const api = await axios.get("https://mystore.alaqmar.dev/api/stellar-industries/products")
  const products = api.data;
  return (
    <section
      className='container py-16 mt-16 md:py-20 lg:py-28'
    >
      <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3">
        {
          products.map((product, index) => (
            <SingleBlog
              key={index}
              blog={product}
            />
          ))
        }
      </div>
    </section>
  )
}

export default Products
