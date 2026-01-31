import { DUMMY_NEWS } from "@/dummy-news";
import NewsLink from "@/components/news-link";

export default async function NewsPage() {
  const response = await fetch("http://localhost:8080/news");

  if (!response.ok) {
    throw new Error("Fetching News Failed...");
  }

  const news = await response.json();

  return (
    <>
      <h1>News Page</h1>
      <NewsLink news={news} />
    </>
  );
}
