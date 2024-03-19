import Link from 'next/link'
import React from 'react'
interface IBlogcard {
    title: string
    image: string
    slug: string
}

export const Blogcard: React.FC<IBlogcard> = ({title, image, slug}) => {
  return (
    <div>
        <div className="card w-96 h-[25rem] bg-base-100 shadow-xl">
        <figure><img src={`https:${image}`} alt="Shoes" /></figure>
            <div className="card-body">
            <h2 className="card-title">{title}</h2>
                <div className="card-actions justify-end">
                    <Link href={`/blog/${slug}`}>
                        <button className="btn btn-primary">Read</button>
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}
