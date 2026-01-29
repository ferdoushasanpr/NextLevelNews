import React from "react";

export default async function InterceptedImagePath({ params }) {
  const { slug } = await params;
  return <div>InterceptedImagePath</div>;
}
