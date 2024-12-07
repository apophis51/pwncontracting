
import ReactMarkdown from 'react-markdown';
import { serverGetBlogsByID } from '@/services/queries';



export default async function Page({ params }: { params: Promise<{ id: string }> }) {

    const myParamsID = await params
    const data = await serverGetBlogsByID(myParamsID.id)

    //


    return (
        <div className="bg-white p-10 px-5 xl:px-80 prose prose-md max-w-none">
            <ReactMarkdown>{data.MarkdownContent}</ReactMarkdown>
        </div>
    );
}