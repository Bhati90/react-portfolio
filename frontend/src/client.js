import sanityClient, { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
    projectId:'iptv3dkx',
    dataset:'production',
    apiVersion:'2023-06-10',
    useCdn:'true',
    token:'sker1QA9l8UjjeyHw6LQ0OdhAu7tL0JZTMcHMPCc0iFB5XdpMc8B25b7w3A5YMvANOHg3cxPiDvL1ULSlE4pJBtwPW0zGkPIPewS7PVPZNKiZW1V5ON0shx5iZyDPG0JLGZKKL1qOb1m8qKetng3cRFL25cIasLqjnmZkgz5znFeztPjz16t',
})

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source)
// export const data = await client.fetch(`count(*)`)

// export async function getPosts() {
//     const posts = await client.fetch('*[_type == "post"]')
//     return posts
//   }
  
//   export async function createPost(post: Post) {
//     const result = client.create(post)
//     return result
//   }
  
//   export async function updateDocumentTitle(_id, title) {
//     const result = client.patch(_id).set({title})
//     return result
//   }