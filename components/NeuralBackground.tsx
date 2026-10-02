"use client";
import React, { useEffect, useRef } from "react";

export default function NeuralBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

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
          const angle =
            (j / numBranches) * Math.PI * 2 + (Math.random() * 0.4 - 0.2);
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
        color: Math.random() > 0.4 ? "#4F46E5" : "#F43F5E",
        size: Math.random() * 2 + 2.5,
      });
    };

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      for (let i = 0; i < neurons.length; i++) {
        for (let j = i + 1; j < neurons.length; j++) {
          const dx = neurons[i].x - neurons[j].x;
          const dy = neurons[i].y - neurons[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 320) {
            ctx.beginPath();
            ctx.moveTo(neurons[i].x, neurons[i].y);
            const midX = (neurons[i].x + neurons[j].x) / 2 + dy * 0.12;
            const midY = (neurons[i].y + neurons[j].y) / 2 - dx * 0.12;
            ctx.quadraticCurveTo(midX, midY, neurons[j].x, neurons[j].y);
            ctx.strokeStyle = `rgba(79, 70, 229, ${0.25 * (1 - dist / 320)})`;
            ctx.lineWidth = 1.3;
            ctx.stroke();
          }
        }
      }
      neurons.forEach((n) => {
        n.dendrites.forEach((d) => {
          ctx.beginPath();
          ctx.moveTo(n.x, n.y);
          ctx.lineTo(d.x, d.y);
          ctx.strokeStyle = "rgba(79, 70, 229, 0.45)";
          ctx.lineWidth = 1.2;
          ctx.stroke();
          d.subSpines.forEach((sub) => {
            ctx.beginPath();
            ctx.moveTo(d.x, d.y);
            ctx.lineTo(sub.x, sub.y);
            ctx.strokeStyle = "rgba(79, 70, 229, 0.3)";
            ctx.lineWidth = 0.8;
            ctx.stroke();
            ctx.beginPath();
            ctx.arc(sub.x, sub.y, 2, 0, Math.PI * 2);
            ctx.fillStyle = "#F43F5E";
            ctx.fill();
          });
        });
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.radius + 3, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(79, 70, 229, 0.12)";
        ctx.fill();
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.radius, 0, Math.PI * 2);
        ctx.fillStyle = "#FFFFFF";
        ctx.strokeStyle = "#4F46E5";
        ctx.lineWidth = 2;
        ctx.fill();
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.radius * 0.45, 0, Math.PI * 2);
        ctx.fillStyle = "#F43F5E";
        ctx.fill();
      });
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
        const midX = (from.x + to.x) / 2 + dy * 0.12;
        const midY = (from.y + to.y) / 2 - dx * 0.12;
        const t = s.progress;
        const currX =
          (1 - t) * (1 - t) * from.x + 2 * (1 - t) * t * midX + t * t * to.x;
        const currY =
          (1 - t) * (1 - t) * from.y + 2 * (1 - t) * t * midY + t * t * to.y;
        ctx.beginPath();
        ctx.arc(currX, currY, s.size, 0, Math.PI * 2);
        ctx.fillStyle = s.color;
        ctx.shadowBlur = 10;
        ctx.shadowColor = s.color;
        ctx.fill();
        ctx.shadowBlur = 0;
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

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      createNeurons();
    };

    createNeurons();
    for (let i = 0; i < 24; i++) {
      spawnSignal();
    }
    window.addEventListener("resize", handleResize);
    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 opacity-60"
    />
  );
}
