import NewsLink from "@/components/news-link";

import { getAllNews } from "@/lib/news";

export default async function NewsPage() {
  const news = getAllNews();

  return (
    <>
      <h1>News Page</h1>
      <NewsLink news={news} />
    </>
  );
}
