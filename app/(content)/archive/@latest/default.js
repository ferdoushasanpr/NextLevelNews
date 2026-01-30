import React from "react";
import { getLatestNews } from "@/lib/news";
import NewsLink from "@/components/news-link";

export default function LatestPage() {
  const latestNews = getLatestNews();

  return (
    <div>
      <h2>LatestPage</h2>
      <NewsLink news={latestNews} />
    </div>
  );
}
