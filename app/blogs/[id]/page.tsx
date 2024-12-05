import ReactMarkdown from 'react-markdown';

import { projectURLS } from '@/pwncontracting.config'


async function serverGetBlogs() {

    console.log('about to fetch serverBlogs')
    const res = await fetch(projectURLS().pythonMongoDBServer)
    console.log('we just got a res response')
    const data = await res.json()
    return data
}


export default async function Page({ params }) {

    const myParamsID = (await params).id
    console.log("params", myParamsID)
    const data = await serverGetBlogs()
    console.log("data", data)
    console.log(data.find((blog) => blog.id == myParamsID ))

    // const data = serverGetBlogs({ params })
    // const { id } = await params

    return (
        <div className="bg-white p-10 px-80 prose prose-md max-w-none">
            <ReactMarkdown>{data.find((blog) => blog.id == myParamsID ).MarkdownContent}</ReactMarkdown>
        </div>
    );
}