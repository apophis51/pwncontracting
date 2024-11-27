import Image from "next/image";
import ReactMarkdown from 'react-markdown';
import fs from "fs";
import path from "path";
import BlogRenderHorizontal from "@/public/components/BlongRenderHorizontal";
import { projectURLS } from "@/pwncontracting.config";


interface Blog {
  id: string;
  Title: string;
  BlogType: string;
  MarkdownContent: string;
}

async function serverGetBlogs() {
  console.log('about to fetch serverBlogs')
  const res = await fetch(projectURLS().pythonMongoDBServer)
  console.log('we just got a res response')
  const data = await res.json()
  const filteredData = data.filter((blog: Blog) => blog.BlogType === "Construction")
  return filteredData
}

export default async function Home() {
  console.log('hit promo')
  const constructionBlogs = await serverGetBlogs()
  const mainBlog = constructionBlogs[0]

  const filePath = path.join(process.cwd(), "public", "VettingSubContractors.md");
  const markdownContent = fs.readFileSync(filePath, "utf8");
  return (
    <div className="pt-2 ">
      <main className="bg-white p-10 px-80 prose prose-md max-w-none ">
        {/* <main className="bg-white p-10 w-full prose prose-md max-w-none"> */}

        <ReactMarkdown>{mainBlog.MarkdownContent}</ReactMarkdown>
        {/* <BlogRenderHorizontal data={constructionBlogs} /> */}

      </main>
      <section>
        <BlogRenderHorizontal data={constructionBlogs} />
      </section>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://malcmind.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Created by MalcMind.com →
        </a>
      </footer>
    </div>
  );
}
