import SingleBlog from '@/components/Blog/SingleBlog';
import axios from 'axios'
import { Metadata } from 'next';
import React from 'react'

//get category name as title

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const query = await params;
  const rsvpId = query.id;

  const data = await axios.get(`https://mystore.alaqmar.dev/api/stellar-industries/categories/${rsvpId}`);

  if (!data) {
    return {
      title: "Category not found",
      description: "Category not found",
    };
  }

  return {
    title: data.data.name,
    description: data.data.description || `Category ${data.data.name}`,
  };
}

const Products = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const api = await axios.get("https://mystore.alaqmar.dev/api/stellar-industries/products?categoryId=" + id)
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
