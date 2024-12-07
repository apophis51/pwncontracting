import { NextResponse } from 'next/server'
import { revalidatePath, revalidateTag} from "next/cache"



export async function GET(request : Request) {
    // revalidatePath("/blog") to revalidate the path
    revalidateTag("blogs")
    return new Response(JSON.stringify({ message: "Blog Cached Cleared" }), {
      headers: { 'Content-Type': 'application/json' },
    });
  }