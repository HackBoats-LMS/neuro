import React from "react";

export function ContactSection() {
  return (
    <>
      <section id="contact" className="section contact-section">
        <div className="container contact-grid">
          <div>
            <div className="section-heading">
              <span className="eyebrow">
                <span></span>Start a conversation
              </span>
              <h2>
                Let&#x27;s build the next generation
                <br />
                <span>of capable people.</span>
              </h2>
              <p>
                Tell us where you are starting from. We’ll explore what a
                meaningful development journey could look like.
              </p>
            </div>
            <div className="contact-principles">
              <span>
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
                Understand the person.
              </span>
              <span>
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
                  className="lucide lucide-target"
                  aria-hidden="true"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <circle cx="12" cy="12" r="6"></circle>
                  <circle cx="12" cy="12" r="2"></circle>
                </svg>
                Discover the capability.
              </span>
              <span>
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
                  className="lucide lucide-sparkles"
                  aria-hidden="true"
                >
                  <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path>
                  <path d="M20 2v4"></path>
                  <path d="M22 4h-4"></path>
                  <circle cx="4" cy="20" r="2"></circle>
                </svg>
                Create meaningful outcomes.
              </span>
            </div>
          </div>
          <form className="contact-form">
            <div className="field-row">
              <label>
                Name
                <input
                  autoComplete="name"
                  required=""
                  placeholder="Your name"
                  name="name"
                />
              </label>
              <label>
                Email
                <input
                  type="email"
                  autoComplete="email"
                  required=""
                  placeholder="you@example.com"
                  name="email"
                />
              </label>
            </div>
            <div className="field-row">
              <label>
                Phone
                <input
                  type="tel"
                  autoComplete="tel"
                  placeholder="Phone number"
                  name="phone"
                />
              </label>
              <label>
                Organization / College
                <input placeholder="Organization name" name="organization" />
              </label>
            </div>
            <div className="field-row">
              <label>
                I am a
                <select name="role" defaultValue="">
                  <option value="" disabled="">
                    Select one
                  </option>
                  <option>Student</option>
                  <option>Faculty</option>
                  <option>Institution</option>
                  <option>Professional</option>
                  <option>Other</option>
                </select>
              </label>
              <label>
                Interested in
                <select name="interest" defaultValue="">
                  <option value="" disabled="">
                    Select one
                  </option>
                  <option>Student Evolution Journey</option>
                  <option>Faculty Evolution Journey</option>
                  <option>Scope Discovery</option>
                  <option>Institutional Partnership</option>
                  <option>Other</option>
                </select>
              </label>
            </div>
            <label>
              Message
              <textarea
                name="message"
                rows="4"
                placeholder="Tell us what you would like to explore"
              ></textarea>
            </label>
            <button
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-sm text-xs font-bold uppercase tracking-[0.12em] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-accent text-accent-foreground shadow-accent hover:-translate-y-0.5 hover:bg-accent-strong h-14 px-7"
              type="submit"
            >
              Start a conversation{" "}
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
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
