"use client";

import React, { useState } from "react";

const capabilities = [
  {
    id: "01",
    title: "Self-Awareness",
    description:
      "Understand your strengths, patterns, challenges and possibilities.",
  },
  {
    id: "02",
    title: "Learning",
    description:
      "Develop the ability to learn effectively, retain knowledge and apply it in real situations.",
  },
  {
    id: "03",
    title: "Focus",
    description:
      "Build the capacity to direct attention, sustain concentration and manage distractions.",
  },
  {
    id: "04",
    title: "Habits",
    description:
      "Understand habit formation and develop consistent patterns that support your goals.",
  },
  {
    id: "05",
    title: "Productivity",
    description:
      "Design systems and routines that help you use your time and energy effectively.",
  },
  {
    id: "06",
    title: "Creativity",
    description:
      "Develop creative thinking, explore new possibilities and approach challenges with fresh perspectives.",
  },
  {
    id: "07",
    title: "Problem Solving",
    description:
      "Build structured approaches to analyze, break down and solve unfamiliar problems.",
  },
  {
    id: "08",
    title: "Communication & Confidence",
    description:
      "Express ideas clearly, build presence and develop the confidence to communicate effectively.",
  },
  {
    id: "09",
    title: "Career Clarity",
    description:
      "Explore career possibilities, understand industry expectations and find meaningful professional direction.",
  },
  {
    id: "10",
    title: "Innovation & Execution",
    description:
      "Turn ideas into real projects, prototypes and outcomes through structured innovation and execution.",
  },
];

export function CapabilitiesSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = capabilities[activeIndex];
  const progressPercent = ((activeIndex + 1) / capabilities.length) * 100;

  return (
    <>
      <section id="capabilities" className="section section-soft">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">
              <span></span>The capability model
            </span>
            <h2>
              Develop the person.
              <br />
              <span>Expand the possibility.</span>
            </h2>
            <p>
              Capability is an ecosystem. Select an area to explore how each
              dimension supports the next.
            </p>
          </div>
          <div className="capability-explorer">
            <div
              className="capability-list"
              role="tablist"
              aria-label="Capability areas"
            >
              {capabilities.map((cap, index) => (
                <button
                  key={cap.id}
                  role="tab"
                  aria-selected={index === activeIndex}
                  className={index === activeIndex ? "active" : ""}
                  onClick={() => setActiveIndex(index)}
                >
                  <span>{cap.id}</span>
                  {cap.title}
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
                    className="lucide lucide-chevron-right"
                    aria-hidden="true"
                  >
                    <path d="m9 18 6-6-6-6"></path>
                  </svg>
                </button>
              ))}
            </div>
            <div className="capability-stage" aria-live="polite">
              <div className="stage-grid"></div>
              <div className="stage-visual">
                <div className="stage-ring">
                  <span>{active.id}</span>
                </div>
              </div>
              <small>Capability area</small>
              <h3>{active.title}</h3>
              <p>{active.description}</p>
              <div className="stage-meter">
                <span style={{ width: `${progressPercent}%` }}></span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
