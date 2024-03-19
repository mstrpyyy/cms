/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { getBlog, getBlogSlug } from '@/lib/blog'
import React from 'react'
import { Options, documentToReactComponents } from '@contentful/rich-text-react-renderer'
import {BLOCKS} from '@contentful/rich-text-types'
import ShareButton from '@/components'



export const generateStaticParams = async () => {
  const blog = await getBlog()

  return blog.map((item: any) => ({
      params: {
          slug: item.fields.slug
      }           
      
  }))
}

export async function generateMetadata({params}: {params: {slug: string}}) {
  const blog =  await getBlogSlug(params.slug)

  return {
    title: blog.fields.title,
    description: blog.fields.title,
    authors: blog.fields.author.fields.name,
    openGraph: {
      images: [`https:${blog.fields.image.fields.file.url}`],
  },

  }
}

export default async function BlogContent({params}: {params: {slug: string}}) {
  const blog =  await getBlogSlug(params.slug)

  const options: Options = {
    renderNode: {
        [BLOCKS.HEADING_1]: (node, children) => <h1 className="my-[2.5px] md:text-3xl sm:text-2xl text-xl">{children}</h1>,
        [BLOCKS.HEADING_2]: (node, children) => <h2 className="my-5 md:text-2xl sm:text-xl text-lg text-white">{children}</h2>,
        [BLOCKS.HEADING_3]: (node, children) => <h3 className="my-5 md:text-xl sm:text-lg text-base">{children}</h3>,
        [BLOCKS.HEADING_4]: (node, children) => <h4 className="my-5 md:text-lg sm:text-base text-sm">{children}</h4>,
        [BLOCKS.HEADING_5]: (node, children) => <h5 className="my-10 md:text-base sm:text-sm text-xs">{children}</h5>,
        [BLOCKS.HEADING_6]: (node, children) => <h6 className="my-10 mb-20 md:text-base sm:text-sm text-xs">{children}</h6>,
        [BLOCKS.PARAGRAPH]: (node, children) => <p className="mb-10 md:text-base sm:text-sm text-xs text-white">{children}</p>
      },
};
  // console.log(params);
  return (
    <div className='flex justify-center md:m-16'>
    <div className='flex h-full'>
      <div className='flex-1 max-w-9 md:max-w-40 justify-center mx-2 sticky top-3 h-full'>
        <ShareButton slug={blog.fields.slug}/>
      </div>
      <div className='flex-[2] max-w-[1000px]'>
         <h1 className='text-white font-bold text-3xl mb-10'>{blog.fields.title}</h1>
         <img src={`https:${blog.fields.image.fields.file.url}`} />
         {documentToReactComponents(blog.fields.body, options)}
      </div>
    </div>

    </div>
  )
}
