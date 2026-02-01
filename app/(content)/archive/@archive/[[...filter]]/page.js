import React from "react";
import Link from "next/link";
import {
  getAvailableNewsYears,
  getNewsForYear,
  getAvailableNewsMonths,
  getNewsForYearAndMonth,
} from "@/lib/news";
import NewsLink from "@/components/news-link";

export default async function FilteredNewsPage({ params }) {
  const { filter } = await params;
  const selectedYear = filter?.[0];
  const selectedMonth = filter?.[1];
  let links = await getAvailableNewsYears();

  let news;
  if (selectedYear && !selectedMonth) {
    links = getAvailableNewsMonths(selectedYear);
    news = await getNewsForYear(filter);
  }

  if (selectedYear && selectedMonth) {
    links = [];
    news = await getNewsForYearAndMonth(selectedYear, selectedMonth);
  }

  return (
    <>
      <header id="archive-header">
        <nav>
          <ul>
            {links.map((link) => {
              const href = selectedYear
                ? `/archive/${selectedYear}/${link}`
                : `/archive/${link}`;
              return (
                <li key={link}>
                  <Link href={href}>{link}</Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </header>
      {news && news.length > 0 ? (
        <NewsLink news={news} />
      ) : (
        <p>No news found.</p>
      )}
    </>
  );
}
