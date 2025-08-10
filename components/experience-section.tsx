"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import TypewriterText from "./typewriter-text"
import { MapPin, Calendar } from "lucide-react"

interface ExperienceSectionProps {
  handleBack: () => void
  isTransitioning: boolean
}

const experienceData = [
  {
    title: "Software Engineer & Project coordinator",
    company: "Oxylife",
    period: "2025 - Now",
    location: "Bucharest, Romania",
    type: "Internship",
    description: "In charge of creating a full stack application and multiple websites.",
    achievements: [
        "Supervision of a full stack application creation and implementing new features on top of it",
      "Creation of multiples websites using React",
      "Automated transcription and subtitling of videos using different tools",
    ],
    technologies: ["React", "Typescript", "Python", "OVH", "Git", "Docker"],
  },
  {
    title: "Customer Care and Logistic",
    company: "'private'",
    period: "2021 - 2025",
    location: "Amsterdam, Netherlands",
    type: "Long term contract",
    description: "Served as the direct point of contact between customer agents and logistics hubs.",
    achievements: [
      "Creation of an app using API calls to improve my work efficiency",
      "Tkinter app that was creating messages based on copied datas",
      "Automation of email"
    ],
    technologies: ["Python", "API", "Tkinter", "Google Sheet", "Filezilla"],
  }
]

export default function ExperienceSection({ handleBack, isTransitioning }: ExperienceSectionProps) {
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
          <TypewriterText text="EXPERIENCE" delay={100} />
        </h1>
        <div className="w-48 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mt-4 animate-expand-width" />
      </div>

      <div className="space-y-8">
        {experienceData.map((exp, index) => (
          <Card
            key={index}
            className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-cyan-500/30 backdrop-blur-sm p-6 hover:border-cyan-400/50 transition-all duration-300"
          >
            <CardContent>
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-cyan-300 mb-1">{exp.title}</h3>
                  <div className="flex items-center space-x-4 text-gray-400 mb-2">
                    <span className="font-medium">{exp.company}</span>
                    <Badge variant="outline" className="border-cyan-500/30 text-cyan-300">
                      {exp.type}
                    </Badge>
                  </div>
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MapPin className="w-4 h-4" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-gray-300 mb-4">{exp.description}</p>

              <div className="mb-4">
                <h4 className="font-semibold text-cyan-200 mb-2">Key Achievements :</h4>
                <ul className="space-y-1">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="text-sm text-gray-300 flex items-start">
                      <span className="text-cyan-400 mr-2">•</span>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-cyan-200 mb-2">Technologies Used :</h4>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="bg-cyan-500/20 text-cyan-300">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
