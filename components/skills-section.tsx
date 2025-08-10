"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import TypewriterText from "./typewriter-text"

interface SkillsSectionProps {
  handleBack: () => void
  isTransitioning: boolean
}

const skillsData = {
  frontend: [
    { name: "TypeScript", level: 85, years: "1 year" },
    { name: "Tailwind CSS", level: 80, years: "2 years" },
    { name: "React / Next.js", level: 80, years: "1 year" },
    { name: "Three.js", level: 70, years: "1 year" },
  ],
  backend: [
    { name: "Django", level: 85, years: "2 years" },
    { name: "Node.js", level: 80, years: "1 year" },
    { name: "PostgreSQL", level: 85, years: "2 years" },
    { name: "Redis", level: 75, years: "1 year" },
],
tools: [
  { name: "Git", level: 90, years: "4 years" },
  { name: "Docker", level: 80, years: "2 years" },
  { name: "Reverse Engineering", level: 70, years: "2 years" },
  { name: "Homelabbing / Self-hosting", level: 60, years: "1 year" },
],
}

export default function SkillsSection({ handleBack, isTransitioning }: SkillsSectionProps) {
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
          <TypewriterText text="SKILLS" delay={100} />
        </h1>
        <div className="w-48 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mt-4 animate-expand-width" />
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Tools & DevOps */}
        <Card className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-cyan-500/30 backdrop-blur-sm p-6">
          <CardContent>
            <h3 className="text-xl font-bold mb-6 text-cyan-300 flex items-center">
              <div className="w-3 h-3 bg-purple-400 rounded-full mr-3 animate-pulse" />
              Main interests
            </h3>
            <div className="space-y-4">
              {skillsData.tools.map((skill) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-gray-300">{skill.name}</span>
                    <div className="flex items-center space-x-2">
                      <span className="text-xs text-gray-400">{skill.years}</span>
                      <span className="text-xs text-cyan-300">{skill.level}%</span>
                    </div>
                  </div>
                  <Progress value={skill.level} className="h-2 bg-slate-700" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Backend */}
        <Card className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-cyan-500/30 backdrop-blur-sm p-6">
          <CardContent>
            <h3 className="text-xl font-bold mb-6 text-cyan-300 flex items-center">
              <div className="w-3 h-3 bg-blue-400 rounded-full mr-3 animate-pulse" />
              Backend
            </h3>
            <div className="space-y-4">
              {skillsData.backend.map((skill) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-gray-300">{skill.name}</span>
                    <div className="flex items-center space-x-2">
                      <span className="text-xs text-gray-400">{skill.years}</span>
                      <span className="text-xs text-cyan-300">{skill.level}%</span>
                    </div>
                  </div>
                  <Progress value={skill.level} className="h-2 bg-slate-700" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Frontend */}
        <Card className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-cyan-500/30 backdrop-blur-sm p-6">
          <CardContent>
            <h3 className="text-xl font-bold mb-6 text-cyan-300 flex items-center">
              <div className="w-3 h-3 bg-cyan-400 rounded-full mr-3 animate-pulse" />
              Frontend
            </h3>
            <div className="space-y-4">
              {skillsData.frontend.map((skill) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-gray-300">{skill.name}</span>
                    <div className="flex items-center space-x-2">
                      <span className="text-xs text-gray-400">{skill.years}</span>
                      <span className="text-xs text-cyan-300">{skill.level}%</span>
                    </div>
                  </div>
                  <Progress value={skill.level} className="h-2 bg-slate-700" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

      </div>
    </div>
  )
}
