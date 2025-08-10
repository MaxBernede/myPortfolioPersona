"use client"

import { Card, CardContent } from "@/components/ui/card"
import TypewriterText from "./typewriter-text"
import { MapPin, Calendar } from "lucide-react"
import Image from 'next/image'

interface ProfileSectionProps {
  handleBack: () => void
  isTransitioning: boolean
}

export default function ProfileSection({ handleBack, isTransitioning }: ProfileSectionProps) {
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
          <TypewriterText text="PROFILE" delay={100} />
        </h1>
        <div className="w-48 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mt-4 animate-expand-width" />
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Photo et infos principales */}
        <Card className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-cyan-500/30 backdrop-blur-sm p-6">
          <CardContent className="text-center">
            <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-full flex items-center justify-center overflow-hidden">
                <Image 
                src="/images/moi.jpg" 
                alt="MyPicture" 
                layout="fill" 
                objectFit="cover" 
                className="w-full h-full" 
                />
            </div>
            <h2 className="text-2xl font-bold mb-2 text-cyan-300">Maximilien Bernede</h2>
            <p className="text-gray-400 mb-4">Software Engineer</p>
            <div className="space-y-2 text-sm text-gray-300">
              <div className="flex items-center justify-center space-x-2">
                <MapPin className="w-4 h-4 text-cyan-400" />
                <span>Amsterdam, Netherlands</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Calendar className="w-4 h-4 text-cyan-400" />
                <span>4+ years of experience</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* À propos */}
        <div className="lg:col-span-2 space-y-6">
          <Card className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-cyan-500/30 backdrop-blur-sm p-6">
            <CardContent>
              <h3 className="text-xl font-bold mb-4 text-cyan-300">About</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                I am driven by the possibility to improve existing systems. I love to automate things and process, or to develop Bots that works for me.
                I am quite new to IT but my curiosity is insatiable. Lately I discovered about homelabbing, which became a new passion for me
              </p>
              <p className="text-gray-300 leading-relaxed">
                I was a student at 42 School, and that was a real chance for me.
                This school pushes us to go far beyond the surface, to dig deep for solutions to our problems.
                It teaches us to think differently, to explore every path, and to never stop until we truly understand what we are doing.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-cyan-500/30 backdrop-blur-sm p-6">
            <CardContent>
            <h3 className="text-xl font-bold mb-4 text-cyan-300">Interests</h3>
            <div className="grid grid-cols-2 gap-4">
                <div>
                <h4 className="font-semibold mb-2 text-cyan-200">Technology</h4>
                <div className="space-y-1 text-base text-gray-300">
                    <div>• Automations and Botting</div>
                    <div>• Webscraping</div>
                    <div>• Homelabbing / self-hosting</div>
                </div>
                </div>
                <div>
                <h4 className="font-semibold mb-2 text-cyan-200">Personal</h4>
                <div className="space-y-1 text-base text-gray-300">
                    <div>• Sports / Muay Thai</div>
                    <div>• Video Games</div>
                    <div>• Traveling</div>
                </div>
                </div>
            </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
