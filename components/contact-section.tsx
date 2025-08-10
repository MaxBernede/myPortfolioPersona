"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import TypewriterText from "./typewriter-text"
import { Mail, Linkedin, Github, MapPin, Phone } from "lucide-react"

interface ContactSectionProps {
  handleBack: () => void
  isTransitioning: boolean
}

export default function ContactSection({ handleBack, isTransitioning }: ContactSectionProps) {
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
          <TypewriterText text="CONTACT" delay={100} />
        </h1>
        <div className="w-48 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mt-4 animate-expand-width" />
      </div>

      <div className="max-w-4xl mx-auto">
        <Card className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-cyan-500/30 backdrop-blur-sm p-8">
          <CardContent className="text-center">
            <h2 className="text-3xl font-bold mb-6 text-cyan-300">Contact me</h2>
            <p className="text-gray-300 mb-8 text-lg">
              Interested about my work ? Feel free to contact me !
            </p>

            <div className="flex flex-col items-center space-y-4 md:grid md:grid-cols-2 md:gap-6 md:space-y-0 mb-8">
              <div className="flex flex-col items-center space-y-4 w-full">
                <Button
                className="w-full max-w-xs mx-auto bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 h-12 text-xs sm:text-sm"
                onClick={() => window.location.href = "mailto:bernede.maximilien@gmail.com"}
                >
                <Mail className="w-4 h-4 mr-2 flex-shrink-0" />
                <span className="truncate">bernede.maximilien@gmail.com</span>
                </Button>
                <Button
                variant="outline"
                className="w-full max-w-xs border-cyan-500/30 text-cyan-300 hover:bg-cyan-500/10 bg-transparent h-12"
                onClick={() => window.location.href = "tel:+33681718389"}
                >
                <Phone className="w-5 h-5 mr-3" />
                +33 6 81 71 83 89
                </Button>
              </div>

              <div className="flex flex-col items-center space-y-4 w-full">
                <Button
                variant="outline"
                className="w-full max-w-xs border-cyan-500/30 text-cyan-300 hover:bg-cyan-500/10 bg-transparent h-12"
                onClick={() => window.open("https://www.linkedin.com/in/maxbernede", "_blank")}
                >
                <Linkedin className="w-5 h-5 mr-3" />
                LinkedIn
                </Button>
                <Button
                variant="outline"
                className="w-full max-w-xs border-cyan-500/30 text-cyan-300 hover:bg-cyan-500/10 bg-transparent h-12"
                onClick={() => window.open("https://github.com/maxbernede", "_blank")}
                >
                <Github className="w-5 h-5 mr-3" />
                GitHub
                </Button>
              </div>
            </div>

            <div className="flex items-center justify-center space-x-2 text-gray-400">
              <MapPin className="w-4 h-4" />
              <span>Located in Amsterdam, Netherlands - Available for remote missions</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}