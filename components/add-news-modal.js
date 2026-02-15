import React from "react";

import classes from "./add-news-modal.module.css";

export default function AddNewsModal({ setIsAdding }) {
  return (
    <div className="modal-backdrop">
      <div className="modal">
        <h2>Add New News Article</h2>
        <form
          className={classes.adminForm}
          onSubmit={(e) => {
            e.preventDefault();
            setIsAdding(false);
          }}
        >
          <input type="text" placeholder="Article Title" required />
          <input type="date" required />
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
