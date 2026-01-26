import React from "react";

export default async function FilteredNewsPage({ params }) {
  const { year } = await params;
  console.log("News Year:", year);
  return <div>FilteredNewsPage</div>;
}
