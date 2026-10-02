import React from "react";

export function HomeHero() {
  return (
    <>
      <section id="home" className="hero">
        <img
          src="/assets/image.png"
          alt="Abstract human profile formed from connected neural pathways"
          width="1920"
          height="1080"
          className="hero-image w-fit"
        />
        <div className="hero-shade"></div>
        <div className="hero-grid"></div>
        <div className="hero-content">
          <span className="hero-label">
            <span className="pulse-dot"></span>Neuroscience-informed capability
            development
          </span>
          <h1>
            What if your potential
            <br />
            <em>is bigger than you think?</em>
          </h1>
          <p>
            Understand cognitive and behavioural patterns. Discover
            capabilities. Develop them into meaningful real-world outcomes.
          </p>
          <div className="hero-actions">
            <a
              href="#capabilities"
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-sm text-xs font-bold uppercase tracking-[0.12em] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-accent text-accent-foreground shadow-accent hover:-translate-y-0.5 hover:bg-accent-strong h-14 px-7"
            >
              Discover your scope{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
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
            <a
              href="#programs"
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-sm text-xs font-bold uppercase tracking-[0.12em] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-hero-foreground/35 bg-hero-surface text-hero-foreground backdrop-blur-md hover:border-primary hover:bg-hero-surface-strong h-14 px-7"
            >
              Explore our programs
            </a>
          </div>
        </div>
        <a href="#problem" className="scroll-cue">
          <span>Explore</span>
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
            className="lucide lucide-arrow-down"
            aria-hidden="true"
          >
            <path d="M12 5v14"></path>
            <path d="m19 12-7 7-7-7"></path>
          </svg>
        </a>
        <div className="hero-proof">
          <span>Understand.</span>
          <span>Develop.</span>
          <span>Apply.</span>
          <span>Evolve.</span>
        </div>
      </section>
    </>
  );
}
