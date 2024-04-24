const base_url = process.env.REST_API_URL

export const getBlogREST = async () => {
    const res = await fetch ("http://localhost:8000/api/blogs")
    const data = await res.json()
    return data
}

export const getBlogSlugREST = async (slug:string) => {
    const res = await fetch (`http://localhost:8000/api/blogs/${slug}`)
    const data= await res.json()
    return data
}