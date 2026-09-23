'use client';

import React, { useEffect, useRef, useState } from 'react';

export default function Home() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [email, setEmail] = useState('');
  const [submitted, setSubscribed] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      createNeurons();
    };
    window.addEventListener('resize', handleResize);

    interface Spine {
      x: number;
      y: number;
      subSpines: { x: number; y: number }[];
    }

    interface BioNeuron {
      id: number;
      x: number;
      y: number;
      radius: number;
      dendrites: Spine[];
    }

    interface SignalPulse {
      fromIndex: number;
      toIndex: number;
      progress: number;
      speed: number;
      color: string;
      size: number;
    }

    const neurons: BioNeuron[] = [];
    const numNeurons = 40;

    const createNeurons = () => {
      neurons.length = 0;
      for (let i = 0; i < numNeurons; i++) {
        const x = Math.random() * (width - 60) + 30;
        const y = Math.random() * (height - 60) + 30;

        const radius = Math.random() * 4 + 6;
        const dendrites: Spine[] = [];
        const numBranches = Math.floor(Math.random() * 3) + 5;

        for (let j = 0; j < numBranches; j++) {
          const angle = (j / numBranches) * Math.PI * 2 + (Math.random() * 0.4 - 0.2);
          const len = Math.random() * 26 + 16;
          const endX = x + Math.cos(angle) * len;
          const endY = y + Math.sin(angle) * len;

          const subSpines = [];
          const numSub = Math.floor(Math.random() * 2) + 1;
          for (let k = 0; k < numSub; k++) {
            const subAngle = angle + (Math.random() * 0.7 - 0.35);
            const subLen = Math.random() * 10 + 6;
            subSpines.push({
              x: endX + Math.cos(subAngle) * subLen,
              y: endY + Math.sin(subAngle) * subLen,
            });
          }

          dendrites.push({ x: endX, y: endY, subSpines });
        }

        neurons.push({ id: i, x, y, radius, dendrites });
      }
    };
    createNeurons();

    const signals: SignalPulse[] = [];
    const spawnSignal = () => {
      if (neurons.length < 2) return;
      const fromIndex = Math.floor(Math.random() * neurons.length);
      
      let toIndex = (fromIndex + 1) % neurons.length;
      let minDistance = Infinity;
      for (let i = 0; i < neurons.length; i++) {
        if (i === fromIndex) continue;
        const dx = neurons[i].x - neurons[fromIndex].x;
        const dy = neurons[i].y - neurons[fromIndex].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < minDistance && dist < 320) {
          minDistance = dist;
          toIndex = i;
        }
      }

      signals.push({
        fromIndex,
        toIndex,
        progress: 0,
        speed: Math.random() * 0.007 + 0.003,
        color: Math.random() > 0.4 ? '#4F46E5' : '#F43F5E',
        size: Math.random() * 2 + 2.5,
      });
    };

    for (let i = 0; i < 24; i++) {
      spawnSignal();
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // 1. Axon Pathways
      for (let i = 0; i < neurons.length; i++) {
        for (let j = i + 1; j < neurons.length; j++) {
          const dx = neurons[i].x - neurons[j].x;
          const dy = neurons[i].y - neurons[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 320) {
            ctx.beginPath();
            ctx.moveTo(neurons[i].x, neurons[i].y);
            const midX = (neurons[i].x + neurons[j].x) / 2 + (dy * 0.12);
            const midY = (neurons[i].y + neurons[j].y) / 2 - (dx * 0.12);
            ctx.quadraticCurveTo(midX, midY, neurons[j].x, neurons[j].y);
            ctx.strokeStyle = `rgba(79, 70, 229, ${0.25 * (1 - dist / 320)})`;
            ctx.lineWidth = 1.3;
            ctx.stroke();
          }
        }
      }

      // 2. Neurons
      neurons.forEach((n) => {
        n.dendrites.forEach((d) => {
          ctx.beginPath();
          ctx.moveTo(n.x, n.y);
          ctx.lineTo(d.x, d.y);
          ctx.strokeStyle = 'rgba(79, 70, 229, 0.45)';
          ctx.lineWidth = 1.2;
          ctx.stroke();

          d.subSpines.forEach((sub) => {
            ctx.beginPath();
            ctx.moveTo(d.x, d.y);
            ctx.lineTo(sub.x, sub.y);
            ctx.strokeStyle = 'rgba(79, 70, 229, 0.3)';
            ctx.lineWidth = 0.8;
            ctx.stroke();

            ctx.beginPath();
            ctx.arc(sub.x, sub.y, 2, 0, Math.PI * 2);
            ctx.fillStyle = '#F43F5E';
            ctx.fill();
          });
        });

        // Plasma Membrane Glow
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.radius + 3, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(79, 70, 229, 0.12)';
        ctx.fill();

        // Soma Body
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.radius, 0, Math.PI * 2);
        ctx.fillStyle = '#FFFFFF';
        ctx.strokeStyle = '#4F46E5';
        ctx.lineWidth = 2;
        ctx.fill();
        ctx.stroke();

        // Nucleus
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.radius * 0.45, 0, Math.PI * 2);
        ctx.fillStyle = '#F43F5E';
        ctx.fill();
      });

      // 3. Firing Action Potential Signals
      for (let i = signals.length - 1; i >= 0; i--) {
        const s = signals[i];
        s.progress += s.speed;

        const from = neurons[s.fromIndex];
        const to = neurons[s.toIndex];

        if (!from || !to) {
          signals.splice(i, 1);
          spawnSignal();
          continue;
        }

        const dx = from.x - to.x;
        const dy = from.y - to.y;
        const midX = (from.x + to.x) / 2 + (dy * 0.12);
        const midY = (from.y + to.y) / 2 - (dx * 0.12);

        const t = s.progress;
        const currX = (1 - t) * (1 - t) * from.x + 2 * (1 - t) * t * midX + t * t * to.x;
        const currY = (1 - t) * (1 - t) * from.y + 2 * (1 - t) * t * midY + t * t * to.y;

        ctx.beginPath();
        ctx.arc(currX, currY, s.size, 0, Math.PI * 2);
        ctx.fillStyle = s.color;
        ctx.shadowBlur = 10;
        ctx.shadowColor = s.color;
        ctx.fill();
        ctx.shadowBlur = 0;

        const prevT = Math.max(0, t - 0.05);
        const prevX = (1 - prevT) * (1 - prevT) * from.x + 2 * (1 - prevT) * prevT * midX + prevT * prevT * to.x;
        const prevY = (1 - prevT) * (1 - prevT) * from.y + 2 * (1 - prevT) * prevT * midY + prevT * prevT * to.y;

        ctx.beginPath();
        ctx.moveTo(currX, currY);
        ctx.lineTo(prevX, prevY);
        ctx.strokeStyle = s.color;
        ctx.lineWidth = s.size * 0.8;
        ctx.stroke();

        if (s.progress >= 1) {
          ctx.beginPath();
          ctx.arc(to.x, to.y, to.radius * 2.2, 0, Math.PI * 2);
          ctx.strokeStyle = s.color;
          ctx.lineWidth = 1.2;
          ctx.stroke();

          signals.splice(i, 1);
          spawnSignal();
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
    }
  };

  return (
    <main className="relative min-h-screen bg-[#F8FAFC] text-[#0F172A] font-sans flex flex-col justify-between items-center overflow-hidden select-none">
      
      {/* 1. Background Neural Canvas Layer */}
      <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full pointer-events-none z-[1]" />

      {/* 2. Full-Screen Semi-Opaque Frosted Glass Veil */}
      <div className="fixed inset-0 w-full h-full bg-slate-50/65 backdrop-blur-[2px] pointer-events-none z-[5]" />

      {/* 3. Foreground Elevated Content */}
      <div className="relative z-10 max-w-4xl w-11/12 mx-auto py-16 px-6 flex flex-col items-center text-center my-auto">

        {/* Main Title & Subtitle */}
        <header className="mb-10">
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-serif font-normal tracking-tight text-slate-900 mb-4 drop-shadow-sm">
            Hackboats <span className="italic font-light text-[#4F46E5] text-4xl sm:text-6xl">(neuro)</span>
          </h1>
          <div className="w-16 h-0.5 bg-[#4F46E5] mx-auto my-6 rounded-full" />
          <p className="text-lg sm:text-xl text-slate-600 max-w-xl mx-auto font-light leading-relaxed">
            Crafting autonomous marine intelligence at the intersection of computational neuroscience and cyber-hydrodynamics.
          </p>
        </header>

        {/* Tactile Card */}
        <div className="bg-white/95 border border-slate-200/90 shadow-[0_20px_60px_-15px_rgba(15,23,42,0.09)] rounded-3xl p-8 sm:p-10 w-full max-w-lg">
          
          {/* Solid Color Progress Bar (No Gradients, No Percentages) */}
          {/* <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden mb-8">
            <div className="h-full w-[74%] bg-[#4F46E5] rounded-full transition-all duration-500" />
          </div> */}

          {/* Subscription Form */}
          {submitted ? (
            <div className="p-4 bg-indigo-50 border border-indigo-200 rounded-2xl text-indigo-700 font-mono text-sm">
              ✓ Access logged. We will reach out when the initial launch sequence begins.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 w-full">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email address..."
                required
                className="flex-1 bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#4F46E5] focus:bg-white focus:ring-2 focus:ring-indigo-100 font-mono text-sm transition-all"
              />
              <button
                type="submit"
                className="bg-[#0F172A] hover:bg-[#4F46E5] text-white font-medium px-7 py-3 rounded-xl transition-all duration-300 cursor-pointer font-mono text-sm whitespace-nowrap shadow-lg shadow-slate-900/15 hover:shadow-indigo-500/30 hover:scale-[1.02] active:scale-[0.98]"
              >
                Join Waitlist
              </button>
            </form>
          )}

        </div>

      </div>

      {/* Footer */}
      <footer className="relative z-10 py-8 text-center text-xs font-mono text-slate-400 tracking-wider">
        &copy; 2026 HACKBOATS NEURO DIVISION • ALL RIGHTS RESERVED
      </footer>

    </main>
  );
}