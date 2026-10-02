"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="max-w-2xl mx-auto bg-white border-2 border-[#2d2d2d] p-8 rounded-[var(--radius-wobbly-md)] shadow-[4px_4px_0px_0px_#2d2d2d]"
    >
      {submitted ? (
        <div className="text-center py-12">
          <div className="w-16 h-16 bg-slate-100 text-slate-900 rounded-full flex items-center justify-center mx-auto mb-6">
            <Send className="w-8 h-8" />
          </div>
          <h3 className="text-2xl font-semibold mb-2">Message Received</h3>
          <p className="text-slate-600">
            We'll reach out to you shortly to start your journey.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700">Name</label>
              <input
                required
                type="text"
                className="w-full px-4 py-3 rounded-[var(--radius-wobbly-md)] border-2 border-[#2d2d2d] focus:ring-2 focus:ring-[#2d5da1]/20 outline-none transition-all bg-white"
                placeholder="Your name"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700">
                Email
              </label>
              <input
                required
                type="email"
                className="w-full px-4 py-3 rounded-[var(--radius-wobbly-md)] border-2 border-[#2d2d2d] focus:ring-2 focus:ring-[#2d5da1]/20 outline-none transition-all bg-white"
                placeholder="email@example.com"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700">
                Phone
              </label>
              <input
                required
                type="tel"
                className="w-full px-4 py-3 rounded-[var(--radius-wobbly-md)] border-2 border-[#2d2d2d] focus:ring-2 focus:ring-[#2d5da1]/20 outline-none transition-all bg-white"
                placeholder="+1 (555) 000-0000"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700">
                Organization/College
              </label>
              <input
                required
                type="text"
                className="w-full px-4 py-3 rounded-[var(--radius-wobbly-md)] border-2 border-[#2d2d2d] focus:ring-2 focus:ring-[#2d5da1]/20 outline-none transition-all bg-white"
                placeholder="University or Company"
              />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-700">I am a</label>
            <select className="w-full px-4 py-3 rounded-[var(--radius-wobbly-md)] border-2 border-[#2d2d2d] focus:ring-2 focus:ring-[#2d5da1]/20 outline-none transition-all bg-white">
              <option>Student</option>
              <option>Faculty</option>
              <option>Institution</option>
              <option>Professional</option>
              <option>Other</option>
            </select>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-700">
              Interested in
            </label>
            <select className="w-full px-4 py-3 rounded-[var(--radius-wobbly-md)] border-2 border-[#2d2d2d] focus:ring-2 focus:ring-[#2d5da1]/20 outline-none transition-all bg-white">
              <option>Student Evolution Journey</option>
              <option>Faculty Evolution Journey</option>
              <option>Scope Discovery</option>
              <option>Institutional Partnership</option>
              <option>Other</option>
            </select>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-700">
              Message
            </label>
            <textarea
              required
              rows={4}
              className="w-full px-4 py-3 rounded-[var(--radius-wobbly-md)] border-2 border-[#2d2d2d] focus:ring-2 focus:ring-[#2d5da1]/20 outline-none transition-all bg-white"
              placeholder="How can we help you?"
            />
          </div>
          <button
            type="submit"
            className="w-full py-4 bg-white border-2 border-[#2d2d2d] text-[#2d2d2d] font-semibold rounded-[var(--radius-wobbly)] transition-all transform hover:bg-[#ff4d4d] hover:text-white hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_#2d2d2d] active:shadow-none active:translate-x-[4px] active:translate-y-[4px] shadow-[4px_4px_0px_0px_#2d2d2d]"
          >
            Start Your Journey
          </button>
        </form>
      )}
    </motion.div>
  );
}
