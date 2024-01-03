import { Metadata } from "next"

export const metadata: Metadata = {
    title: 'About',
    description: 'something about  '
}

export default function About() {
    return (
        <h1>About Page</h1>
    )
}