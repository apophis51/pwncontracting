import Image from "next/image";
import ReactMarkdown from 'react-markdown';
import fs from "fs";
import path from "path";

export default async function Home() {

   // Fetch the Markdown file from a URL or local server
  //  const baseURL = `https://${process.env.VERCEL_URL}` || 'http://localhost:3000';
  //   const filePath = `${baseURL}/VettingSubContractors.md`;
  //  const res = await fetch(filePath);
  //  console.log(res)
  //  const markdownContent = await res.text();

  const filePath = path.join(process.cwd(), "public", "VettingSubContractors.md");
    const markdownContent = fs.readFileSync(filePath, "utf8");
  return (
    <div className="pt-2">
      <main className="bg-white p-10 px-80 prose prose-md max-w-none">
      <ReactMarkdown>{markdownContent}</ReactMarkdown>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
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
