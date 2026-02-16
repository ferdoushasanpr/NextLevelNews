"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import classes from "./dashboard.module.css";
import AddNewsModal from "@/components/add-news-modal";

export default function AdminDashboard() {
  const [newsList, setNewsList] = useState([]);
  const [isAdding, setIsAdding] = useState(false);

  const handleDelete = (id) => {
    setNewsList((prev) => prev.filter((item) => item.id !== id));
  };

  useEffect(() => {
    async function fetchNews() {
      try {
        const response = await fetch("/api/news");
        const data = await response.json();
        setNewsList(data);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    }

    fetchNews();
  }, []);

  return (
    <div className={classes.page}>
      <header id="main-header">
        <div id="logo">
          <Link href="/">ADMIN PANEL</Link>
        </div>
        <nav>
          <ul>
            <li>
              <button
                onClick={() => setIsAdding(true)}
                className={classes.addBtn}
              >
                + New Article
              </button>
            </li>
          </ul>
        </nav>
      </header>

      {/* Analytics Section */}
      <section className={classes.statsGrid}>
        <div className={classes.statCard}>
          <span className={classes.statLabel}>Total Articles</span>
          <div className={classes.statValue}>{newsList.length}</div>
        </div>
        <div className={classes.statCard}>
          <span className={classes.statLabel}>Total Views</span>
          <div className={classes.statValue}>2.1k</div>
        </div>
        <div className={classes.statCard}>
          <span className={classes.statLabel}>Avg Read Time</span>
          <div className={classes.statValue}>4m</div>
        </div>
      </section>

      {/* News Management */}
      <section className={classes.tableContainer}>
        <table className={classes.adminTable}>
          <thead>
            <tr>
              <th>Article Title</th>
              <th>Publish Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {newsList.map((item) => (
              <tr key={item.id}>
                <td>
                  <Link
                    href={`/news/${item.slug}`}
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    {item.title}
                  </Link>
                </td>
                <td>{item.date}</td>
                <td>
                  <button
                    className={classes.deleteBtn}
                    onClick={() => handleDelete(item.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* Reuse your Global Modal Styles with Module-specific form content */}
      {isAdding && <AddNewsModal setIsAdding={setIsAdding} />}
    </div>
  );
}
