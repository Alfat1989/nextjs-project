import { Metadata } from "next"

type Props = {
    params: {
        id: string
    }
}

async function getData(id: string) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        next: {
            revalidate: 60
        }
    })

    return res.json()
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    return {
        title: params.id
    }
}

export default async function Post({ params }: Props) {

    const post = await getData(params.id)

    return (
        <div>
            <h1>Post page {params.id}</h1>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
        </div>
    )
}