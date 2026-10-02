import React from "react";

export function ProblemSection() {
  return (
    <>
      <section id="problem" className="section section-light">
        <div className="container split-intro">
          <div className="section-heading">
            <span className="eyebrow">
              <span></span>The capability gap
            </span>
            <h2>
              Your degree tells the world
              <br />
              what you studied.
              <br />
              <span>Your capabilities show what you can do.</span>
            </h2>
          </div>
          <div className="intro-aside">
            <p>
              Knowledge is a powerful foundation. Yet many students and
              professionals still need the patterns, confidence and practical
              capability to use it effectively.
            </p>
            <div className="gap-tags">
              <span>Knowing strengths</span>
              <span>Learning effectively</span>
              <span>Staying consistent</span>
              <span>Managing distractions</span>
              <span>Handling pressure</span>
              <span>Communicating confidently</span>
              <span>Solving unfamiliar problems</span>
              <span>Turning ideas into action</span>
              <span>Finding career direction</span>
              <span>Discovering opportunities</span>
            </div>
          </div>
        </div>
        <div
          className="container capability-flow"
          aria-label="Knowledge to outcome capability flow"
        >
          <div className="flow-item">
            <small>01</small>
            <strong>Knowledge</strong>
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
              className="lucide lucide-arrow-right flow-arrow"
              aria-hidden="true"
            >
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </div>
          <div className="flow-item">
            <small>02</small>
            <strong>Capability</strong>
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
              className="lucide lucide-arrow-right flow-arrow"
              aria-hidden="true"
            >
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </div>
          <div className="flow-item">
            <small>03</small>
            <strong>Application</strong>
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
              className="lucide lucide-arrow-right flow-arrow"
              aria-hidden="true"
            >
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </div>
          <div className="flow-item">
            <small>04</small>
            <strong>Outcome</strong>
          </div>
        </div>
      </section>
      <section id="methodology" className="section section-navy method-section">
        <div className="container method-grid">
          <div className="section-heading is-light">
            <span className="eyebrow">
              <span></span>Our approach
            </span>
            <h2>
              We don&#x27;t just train people.
              <br />
              <span>We develop capability.</span>
            </h2>
            <p>
              A neuroscience-informed framework designed to help people
              understand themselves, identify capability gaps, develop practical
              patterns and apply them to meaningful goals.
            </p>
          </div>
          <div
            className="method-orbit"
            aria-label="NeuroCapability Development System"
          >
            <div className="orbit-rings"></div>
            <div className="orbit-core">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-brain-circuit"
                aria-hidden="true"
              >
                <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path>
                <path d="M9 13a4.5 4.5 0 0 0 3-4"></path>
                <path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"></path>
                <path d="M3.477 10.896a4 4 0 0 1 .585-.396"></path>
                <path d="M6 18a4 4 0 0 1-1.967-.516"></path>
                <path d="M12 13h4"></path>
                <path d="M12 18h6a2 2 0 0 1 2 2v1"></path>
                <path d="M12 8h8"></path>
                <path d="M16 8V5a2 2 0 0 1 2-2"></path>
                <circle cx="16" cy="13" r=".5"></circle>
                <circle cx="18" cy="3" r=".5"></circle>
                <circle cx="20" cy="21" r=".5"></circle>
                <circle cx="20" cy="8" r=".5"></circle>
              </svg>
              <strong>NeuroCapability</strong>
              <span>Development System</span>
            </div>
            <div className="orbit-node orbit-1">
              <span>01</span>Discover
            </div>
            <div className="orbit-node orbit-2">
              <span>02</span>Understand
            </div>
            <div className="orbit-node orbit-3">
              <span>03</span>Develop
            </div>
            <div className="orbit-node orbit-4">
              <span>04</span>Apply
            </div>
            <div className="orbit-node orbit-5">
              <span>05</span>Create
            </div>
            <div className="orbit-node orbit-6">
              <span>06</span>Evolve
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
