'use client'
//t
import React from 'react'
import { useEffect, useRef } from 'react'
import ReactMarkdown from 'react-markdown';
import Link from 'next/link'



interface Blog {
    id: string;
    Title: string;
    BlogType: string;
    MarkdownContent: string;
}

export default function BlogRenderConstructionBlogs({data, linkPath}) {

    console.log('attempting to render Horizontal Blogs')
    const scrollContainerRef = useRef<HTMLDivElement>(null);


    // Function to scroll left
    const scrollLeft = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({
                left: -300, // Adjust the scroll distance as needed
                behavior: 'smooth'
            });
        }
    };
    // Function to scroll right
    const scrollRight = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({
                left: 300, // Adjust the scroll distance as needed
                behavior: 'smooth'
            });
        }
    };

    useEffect(() => {
        console.log('triggered')
        if (scrollContainerRef.current) {
            const scrollContainer = scrollContainerRef.current;
            const middlePosition = (scrollContainer.scrollWidth - scrollContainer.clientWidth) / 2;
            scrollContainer.scrollLeft = middlePosition;
        }
    }, [])


    return (
        // <MainContentTemplate title={"My Construction Blogs"}>

            <div className="">
                {/* Scrollable Container */}
                <div className="flex justify-center items-center gap-5 md:gap-12 bg-green-400 px-10">
                    <button
                        onClick={scrollLeft}
                        className="z-10 p-2 bg-gray-800 text-white rounded-full focus:outline-none h-[60px]"
                    >
                        &#8249; {/* Left arrow symbol */}
                    </button>
                    <div
                        ref={scrollContainerRef}
                        className='flex flex-row justify-between items-center gap-2 min-h-[70vh] min-w-[65vw] overflow-x-auto px-4 ' >
                        {/* <p className='bg-white text-black  '>We Could Not Render Anything </p> */}
                        {data.map((blog: Blog) => (
                            <div key={blog.id} className="  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                <div className="p-5 min-w-[300px] min-h-[50vh] max-w-[50px] max-h-[50px] overflow-y-auto">
                                    {/* we need to pass the /adminDassh schema in as aprop to make this component even more reusable */}
                                    <Link href={`${linkPath}/${blog.id}`}> 
                                    <div className="mb-3 font-normal text-gray-700 dark:text-gray-400 prose prose-sm">
                                        <ReactMarkdown>{blog.MarkdownContent}</ReactMarkdown>
                                    </div>
                                       </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                    {/* Right Arrow */}
                    <button
                        onClick={scrollRight}
                        className="z-10 p-2 bg-gray-800 text-white rounded-full focus:outline-none h-[60px]"
                    >
                        &#8250; {/* Right arrow symbol */}
                    </button>
                </div>

            </div>
        // </MainContentTemplate>
    )
} 