import { projectURLS } from "@/pwncontracting.config"

interface Blog {
    id: string;
    Title: string;
    BlogType: string;
    MarkdownContent: string;
  }
  
  export async function serverGetBlogsByID(ID) {
    const data = await serverGetBlogs()
    const filteredData = data.find((blog: Blog) => blog.id === ID)
    return filteredData
  } 

  export async function serverGetBlogs() {
    const res = await fetch(projectURLS().pythonMongoDBServer, { cache: 'force-cache' })
    const data = await res.json()
    const filteredData = data.filter((blog: Blog) => blog.BlogType === "Construction")
    return filteredData
  } 