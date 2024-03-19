

import React from 'react'
interface IBlogcard {
    title: string
    image: string
}

export default function Blogcard({title, image}) {
  return (
    <div>
        <div className="card w-96 h-[25rem] bg-base-100 shadow-xl">
        <figure><img src={`https:${image}`} alt="Shoes" /></figure>
            <div className="card-body">
            <h2 className="card-title">{title}</h2>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    </div>
  )
}
