import React from "react";

export function SiteFooter() {
  return (
    <>
      <footer>
        <div className="container footer-top">
          <div>
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
            <p>Understand. Develop. Apply. Evolve.</p>
          </div>
          <nav aria-label="Footer navigation">
            <a href="#about">About</a>
            <a href="#methodology">Methodology</a>
            <a href="#programs">Programs</a>
            <a href="#institutions">Institutions</a>
            <a href="#audiences">Students</a>
            <a href="#audiences">Faculty</a>
            <a href="#contact">Contact</a>
          </nav>
          <div className="socials">
            <a href="#contact" aria-label="LinkedIn">
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
                className="lucide lucide-linkedin"
                aria-hidden="true"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect width="4" height="12" x="2" y="9"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
            <a href="#contact" aria-label="Instagram">
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
                className="lucide lucide-instagram"
                aria-hidden="true"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
              </svg>
            </a>
          </div>
        </div>
        <div className="container footer-bottom">
          <span>© 2026 HackBoats Neuroscience. All rights reserved.</span>
          <span>Neuroscience-informed human capability development.</span>
        </div>
      </footer>
    </>
  );
}
