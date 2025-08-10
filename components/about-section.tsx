"use client"

import { Card, CardContent } from "@/components/ui/card"
import TypewriterText from "./typewriter-text"

interface AboutSectionProps {
  handleBack: () => void
  isTransitioning: boolean
}

export default function AboutSection({ handleBack, isTransitioning }: AboutSectionProps) {
  return (
    <div
      className={`w-full p-8 transition-all duration-700 ease-out ${
        isTransitioning ? "opacity-0 scale-95 blur-sm" : "opacity-100 scale-100 blur-0"
      }`}
    >
      <div className="mb-8">
        <button
          onClick={handleBack}
          className="text-cyan-300 hover:text-cyan-200 transition-all duration-300 mb-4 flex items-center space-x-2 group"
        >
          <span className="transform transition-transform group-hover:-translate-x-1">←</span>
          <span>Return to main menu</span>
        </button>
        <h1 className="text-5xl font-bold text-cyan-300 persona-text-glow">
          <TypewriterText text="ABOUT" delay={100} />
        </h1>
        <div className="w-48 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mt-4 animate-expand-width" />
      </div>

      <div className="max-w-4xl mx-auto">
        <Card className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-cyan-500/30 backdrop-blur-sm p-8">
          <CardContent>
            <h2 className="text-3xl font-bold mb-6 text-cyan-300">About this portfolio</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                This portfolio was designed with inspiration from the user interface of{" "}
                <span className="text-cyan-300 font-semibold">Persona 3 Reload</span>, a video game developed by Atlus.
                The goal was to create an immersive and unique experience that reflects my passion for web development
                and interface design.
              </p>
              <p>
                I really like the <span className="text-cyan-300 font-semibold">Major Arcana</span> of the tarot, a central theme of
                the Persona series and I thoughts it would be a nice idea to implement this in my portfolio to add a unique style.
              </p>
              <p>
                This website have been developed with <span className="text-cyan-300 font-semibold">Next.js</span>,{" "}
                <span className="text-cyan-300 font-semibold">TypeScript</span>, and{" "}
                <span className="text-cyan-300 font-semibold">Tailwind CSS</span>. Not being a huge fan of frontend, I prefer the backend 
                or automation.
              </p>
            </div>

            <div className="mt-8 p-4 bg-cyan-500/10 border border-cyan-500/20 rounded-lg">
              <p className="text-sm text-cyan-300 text-center">
                “The Arcana is the means by which all is revealed. One of life’s greatest blessings is the freedom to pursue one’s goals.” – Chariot (VII)
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
