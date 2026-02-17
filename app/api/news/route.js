import { getAllNews } from "@/lib/news";

export async function GET() {
  const result = getAllNews();
  return Response.json(result);
}

export async function POST(request) {
  const { title, content, date } = await request.json();

  console.log("Received new article data:", { title, content, date });

  return new Response("Article added successfully", { status: 201 });
}
