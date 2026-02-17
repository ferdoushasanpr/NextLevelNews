import React from "react";

import classes from "./add-news-modal.module.css";

export default function AddNewsModal({ setIsAdding }) {
  async function handleSubmit(formData) {
    const title = formData.get("title");
    const content = formData.get("content");
    const date = formData.get("date");

    await fetch("/api/news", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, content, date }),
    });
  }

  return (
    <div className="modal-backdrop">
      <div className="modal">
        <h2 className={classes.formTitle}>Add New News Article</h2>
        <form className={classes.adminForm} action={handleSubmit}>
          <input
            type="text"
            name="title"
            placeholder="Article Title"
            required
          />
          <textarea name="content" placeholder="Article Content" required />
          <input type="date" name="date" required />
          <div className={classes.actions}>
            <button type="submit" className={classes.addBtn}>
              Save Article
            </button>
            <button
              type="button"
              onClick={() => setIsAdding(false)}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
              }}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
