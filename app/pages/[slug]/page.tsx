import React from 'react'
import { allPages } from "contentlayer/generated"
import { Mdx } from '@/components/mdx-component'
import { notFound } from 'next/navigation'

interface pageProps {
    params: {
        slug: string
    }
}

async function getPagesFromParams(slug: string) {
    const page = allPages.find((page) => page.slugAsParams === slug)

    if (!page) notFound()
    
    return page
}

export default async function page({ params } : pageProps) {
    const page = await getPagesFromParams(params.slug)

  return (
      <div>
          <h1>{page?.title}</h1>
          <p>{page?.description}</p>
          <Mdx code={page?.body.code}/>
      </div>
  )
}