import { Metadata } from "next"
import Link from "next/link"

type Props = {
    id: number
    title: string
    body: string
}

async function getData() {
    const responce = await fetch('https://jsonplaceholder.typicode.com/posts', {
        next: {
            revalidate: 60
        }
    })

    return responce.json()
}

export const metadata: Metadata = {
    title: 'Blog',
    description: ''
}

export default async function Blog() {
    const posts = await getData()
    return (
        <>
            <h1>Blog Page</h1>
            <ul>
                {posts.map((post: Props) => (
                    <li key={post.id}>
                        <Link href={`/blog/${post.id}`}>{post.title}</Link>
                    </li>
                ))}
            </ul>
        </>
    )
}