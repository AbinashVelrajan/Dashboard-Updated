import React from "react";

function Header() {
  return (
    <div className="container w-100 d-flex justify-content-between mt-4">
      <p className="fw-bold">Hello Abinash 👋,</p>
      <div className="bd-search" id="docsearch" data-bd-docs-version="5.3">
        <button
          type="button"
          className="DocSearch DocSearch-Button border border-0 rounded"
          aria-label="Search"
        >
          <span className="DocSearch-Button-Container">
            <svg
              width="20"
              height="20"
              className="DocSearch-Search-Icon me-2"
              viewBox="0 0 20 20"
              aria-hidden="true"
            >
              <path
                d="M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z"
                stroke="currentColor"
                fill="none"
                fill-rule="evenodd"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
            <span className="DocSearch-Button-Placeholder">Search</span>
          </span>
        </button>
      </div>
    </div>
  );
}

export default Header;
