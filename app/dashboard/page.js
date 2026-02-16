"use client";

import { useState } from "react";
import Link from "next/link";
import classes from "./dashboard.module.css";
import AddNewsModal from "@/components/add-news-modal";

const INITIAL_NEWS = [
  {
    id: 1,
    title: "The Rise of Minimalist UI",
    date: "2024-03-15",
    views: 1240,
  },
  { id: 2, title: "Modern CSS Techniques", date: "2024-03-12", views: 890 },
];

export default function AdminDashboard() {
  const [newsList, setNewsList] = useState(INITIAL_NEWS);
  const [isAdding, setIsAdding] = useState(false);

  const handleDelete = (id) => {
    setNewsList((prev) => prev.filter((item) => item.id !== id));
  };

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
                <td>{item.title}</td>
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
