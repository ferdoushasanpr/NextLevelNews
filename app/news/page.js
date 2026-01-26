import { DUMMY_NEWS } from "@/dummy-news";
import NewsLink from "@/components/news-link";

export default function NewsPage() {
  return (
    <>
      <h1>News Page</h1>
      <NewsLink news={DUMMY_NEWS} />
    </>
  );
}
