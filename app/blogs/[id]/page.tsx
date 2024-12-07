
import ReactMarkdown from 'react-markdown';
import { serverGetBlogsByID } from '@/services/queries';


//https://nextjs.org/docs/app/api-reference/functions/generate-metadata
export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {  //only suported in server components
    const myParamsID = await params
    const data = await serverGetBlogsByID(myParamsID.id)
    console.log(data)

    return {
      title: data.Title,
      // description: data.description
    }
  }

export default async function Page({ params }: { params: Promise<{ id: string }> }) {

    const myParamsID = await params
    const data = await serverGetBlogsByID(myParamsID.id)
    // const data = await (serverGetBlogsByID(myParamsID.id))
    // console.log(data.replace(/\s+/g, '-').toLowerCase())

    return (
        <div className="bg-white p-10 px-5 xl:px-80 prose prose-md max-w-none">
            <ReactMarkdown>{data.MarkdownContent}</ReactMarkdown>
        </div>
    );
}