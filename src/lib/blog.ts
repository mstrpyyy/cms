import resolveResponse from "contentful-resolve-response"

const base_url=process.env.BASE_URL_CONTENTFUL
const spaces_id=process.env.SPACES_ID_CONTENTFUL
const token=process.env.TOKEN_CONTENTFUL


export const getBlog = async () => {
    const res= await fetch(`${base_url}/spaces/${spaces_id}/environments/master/entries?access_token=${token}&content_type=blog&include=10`)
    const data = await res.json()

    const response = {
            items: data.items,
            includes: data.includes
    }

    const items = resolveResponse(response)

    return items
    
}