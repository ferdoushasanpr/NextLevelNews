import React from "react";
import { getLatestNews } from "@/lib/news";
import NewsLink from "@/components/news-link";

export default async function LatestPage() {
  const latestNews = await getLatestNews();

  return (
    <div>
      <h2>LatestPage</h2>
      <NewsLink news={latestNews} />
    </div>
  );
}
