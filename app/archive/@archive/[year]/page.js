import React from "react";
import { getNewsForYear } from "@/lib/news";
import NewsLink from "@/components/news-link";

export default async function FilteredNewsPage({ params }) {
  const { year } = await params;
  const news = getNewsForYear(year);

  return <NewsLink news={news} />;
}
