import Link from 'next/link'
import React from 'react'
interface IBlogcard {
    title: string
    image: string
    slug: string
    author: string
}

export const Blogcard: React.FC<IBlogcard> = ({title, image, slug, author}) => {
  return (
    <div data-cy="blog-item">
        <div className="card w-96 h-[25rem] bg-black shadow-xl">
        <figure><img data-cy="blog-img" src={`${image}`} alt="Shoes" /></figure>
            <div className="card-body">
            <h2 data-cy='blog-title' className="card-title">{title}</h2>
                <div className="card-actions justify-end">
                    <Link href={`/blog/${slug}`}>
                        <button data-cy="blog-redirect" className="btn btn-primary">Read</button>
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}
