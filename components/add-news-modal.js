import React from "react";

import classes from "./add-news-modal.module.css";

export default function AddNewsModal({ setIsAdding }) {
  return (
    <div className="modal-backdrop">
      <div className="modal">
        <h2 className={classes.formTitle}>Add New News Article</h2>
        <form className={classes.adminForm}>
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
