import { getAllNews } from "@/lib/news";

export async function GET() {
  const result = getAllNews();
  return Response.json(result);
}
