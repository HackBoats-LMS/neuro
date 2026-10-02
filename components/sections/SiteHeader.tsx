import React from "react";

export function SiteHeader() {
  return (
    <>
      <header className="site-header">
        <div className="nav-shell">
          <a
            href="#home"
            className="brand-mark"
            aria-label="HackBoats Neuroscience home"
          >
            <span className="brand-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-circle-dot"
                aria-hidden="true"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <circle cx="12" cy="12" r="1"></circle>
              </svg>
            </span>
            <span>
              <strong>HACKBOATS</strong>
              <small>NEUROSCIENCE</small>
            </span>
          </a>
          <nav aria-label="Primary navigation" className="nav-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#methodology">Methodology</a>
            <a href="#programs">Programs</a>
            <a href="#institutions">Institutions</a>
            <a href="#audiences">Students</a>
            <a href="#audiences">Faculty</a>
            <a href="#contact">Contact</a>
          </nav>
          <a
            href="#methodology"
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-sm text-xs font-bold uppercase tracking-[0.12em] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-accent text-accent-foreground shadow-accent hover:-translate-y-0.5 hover:bg-accent-strong h-10 px-4 nav-cta"
          >
            Explore the journey{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-arrow-right"
              aria-hidden="true"
            >
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </a>
          <button
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-sm text-xs font-bold uppercase tracking-[0.12em] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-transparent text-foreground hover:bg-muted size-11 px-0 menu-button"
            aria-label="Open menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-menu"
              aria-hidden="true"
            >
              <path d="M4 5h16"></path>
              <path d="M4 12h16"></path>
              <path d="M4 19h16"></path>
            </svg>
          </button>
        </div>
      </header>
    </>
  );
}
