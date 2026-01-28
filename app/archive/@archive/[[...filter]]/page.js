import React from "react";
import Link from "next/link";
import { getAvailableNewsYears, getNewsForYear } from "@/lib/news";
import NewsLink from "@/components/news-link";

export default async function FilteredNewsPage({ params }) {
  const { filter } = await params;
  console.log(filter);
  const availableYears = getAvailableNewsYears();
  //const news = getNewsForYear(filter);

  return (
    <header id="archive-header">
      <nav>
        <ul>
          {availableYears.map((link) => (
            <li key={link}>
              <Link href={`/archive/${link}`}>{link}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
