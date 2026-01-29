import React from "react";

export default async function ImagePage({ params }) {
  const { slug } = await params;

  return <div>ImagePage</div>;
}
