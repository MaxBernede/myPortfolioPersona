import { useState, useEffect } from "react";

export default function ParticleField() {
  const [particles, setParticles] = useState(
    [] as {
      id: number;
      left: string;
      top: string;
      animationDelay: string;
      animationDuration: string;
      color: string;
    }[]
  );

  useEffect(() => {
    const newParticles = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      animationDelay: `${Math.random() * 5}s`,
      animationDuration: `${3 + Math.random() * 4}s`,
      color: Math.random() > 0.5 ? "bg-cyan-400" : "bg-blue-400",
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute animate-float-particle"
          style={{
            left: particle.left,
            top: particle.top,
            animationDelay: particle.animationDelay,
            animationDuration: particle.animationDuration,
          }}
        >
          <div
            className={`w-1 h-1 rounded-full ${particle.color} animate-pulse opacity-60`}
          />
        </div>
      ))}
    </div>
  );
}
