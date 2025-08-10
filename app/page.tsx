"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import TypewriterText from "@/components/typewriter-text"
import ProfileSection from "@/components/profile-section"
import SkillsSection from "@/components/skills-section"
import ExperienceSection from "@/components/experience-section"
import ProjectsSection from "@/components/projects-section"
import ContactSection from "@/components/contact-section"
import AboutSection from "@/components/about-section"
import ParticleField from "@/components/anim/ParticleField"
import HexagonalGrid from "@/components/anim/HexagonalGrid"
import CircularTransition from "@/components/anim/CircularTransition"
import GeometricWipe from "@/components/anim/GeometricWipe"
import { mainMenuOptions } from "@/components/ui/MenuOptions"

export default function Persona3MenuPortfolio() {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [currentMenu, setCurrentMenu] = useState("main")
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [showDetails, setShowDetails] = useState(false)
  const [transitionType, setTransitionType] = useState<"circular" | "wipe">("circular")
  const [showGeometricWipe, setShowGeometricWipe] = useState(false)

  const selectedOption = mainMenuOptions[selectedIndex]

  const handleSelect = () => {
    if (isTransitioning || !selectedOption.available) return

    const type = Math.random() > 0.5 ? "circular" : "wipe"
    setTransitionType(type)
    setIsTransitioning(true)

    if (type === "wipe") {
      setShowGeometricWipe(true)
      setTimeout(() => {
        setCurrentMenu(selectedOption.id)
        setShowGeometricWipe(false)
        setIsTransitioning(false)
      }, 600)
    }
  }

  const handleBack = () => {
    if (isTransitioning) return

    setTransitionType("wipe")
    setShowGeometricWipe(true)
    setIsTransitioning(true)

    setTimeout(() => {
      setCurrentMenu("main")
      setShowGeometricWipe(false)
      setIsTransitioning(false)
    }, 600)
  }

  const handleCircularTransitionComplete = () => {
    setCurrentMenu(selectedOption.id)
    setIsTransitioning(false)
  }

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (currentMenu === "main" && !isTransitioning) {
        if (e.key === "ArrowUp") {
          setSelectedIndex((prev) => (prev > 0 ? prev - 1 : mainMenuOptions.length - 1))
        } else if (e.key === "ArrowDown") {
          setSelectedIndex((prev) => (prev < mainMenuOptions.length - 1 ? prev + 1 : 0))
        } else if (e.key === "Enter") {
          handleSelect()
        }
      } else if (currentMenu !== "main" && !isTransitioning) {
        if (e.key === "Escape") {
          handleBack()
        }
      }
    }

    window.addEventListener("keydown", handleKeyPress)
    return () => window.removeEventListener("keydown", handleKeyPress)
  }, [currentMenu, selectedIndex, isTransitioning, handleBack, handleSelect])

  useEffect(() => {
    const timer = setTimeout(() => setShowDetails(true), 1000)
    return () => clearTimeout(timer)
  }, [selectedIndex])


  return (
    <div className="min-h-screen bg-black text-white relative">
      {/* Animated Background Layers */}
      <div className="fixed inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-slate-900 to-black" />
        <HexagonalGrid />
        <ParticleField />

        {/* Rotating Rings */}
        <div className="absolute inset-0 flex items-center justify-center opacity-10">
          <div className="w-96 h-96 border border-cyan-400 rounded-full animate-spin-slow" />
          <div className="absolute w-80 h-80 border border-blue-400 rounded-full animate-spin-reverse" />
          <div className="absolute w-64 h-64 border border-cyan-300 rounded-full animate-spin-slow" />
        </div>

        {/* Dynamic Light Rays */}
        <div className="absolute inset-0 opacity-20">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 bg-gradient-to-t from-transparent via-cyan-400 to-transparent transform-gpu animate-light-ray"
              style={{
                height: "200%",
                left: `${15 + i * 15}%`,
                top: "-50%",
                transformOrigin: "bottom center",
                animationDelay: `${i * 0.8}s`,
                animationDuration: "4s",
              }}
            />
          ))}
        </div>
      </div>

      {/* Transition Effects */}
      <CircularTransition
        isActive={isTransitioning && transitionType === "circular"}
        onComplete={handleCircularTransitionComplete}
      />
      <GeometricWipe isActive={showGeometricWipe} direction={currentMenu === "main" ? "left" : "right"} />

      {/* Main Content */}
      <div className="relative z-10 flex min-h-screen overflow-y-auto">
        {currentMenu === "main" && (
          <div
            className={`flex w-full transition-all duration-700 ease-out ${
              isTransitioning ? "opacity-0 scale-95 blur-sm" : "opacity-100 scale-100 blur-0"
            }`}
          >
            {/* Left Panel - Menu */}
            <div className="w-1/2 p-1 sm:p-8 flex flex-col justify-center">
              <div className="mb-8 transform transition-all duration-1000 ease-out">
                <h1 className="text-5xl font-bold mb-2 text-cyan-300 persona-text-glow">
                  <TypewriterText text="MaxB Portfolio" delay={100} />
                </h1>
                <div className="text-lg text-gray-400">
                  <TypewriterText text="Maximilien Bernede - Software Engineer" delay={50} />
                </div>
                <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mt-4 animate-expand-width" />
              </div>

              <div className="space-y-3">
                {mainMenuOptions.map((option, index) => (
                  <div
                    key={option.id}
                    className={`group cursor-pointer transition-all duration-500 ease-out transform ${
                      selectedIndex === index ? "translate-x-6 scale-105" : "hover:translate-x-2"
                    }`}
                    onClick={() => {
                      if (selectedIndex === index) {
                        handleSelect() // Si c'est l'option déjà sélectionnée, on "entre"
                      } else {
                        setSelectedIndex(index) // Sinon, on la sélectionne
                      }
                    }}
                  >
                    <div
                      className={`flex items-center space-x-4 p-4 rounded-xl transition-all duration-500 relative overflow-hidden ${
                        selectedIndex === index
                          ? "bg-gradient-to-r from-cyan-500/30 to-blue-500/30 border-l-4 border-cyan-400 persona-glow"
                          : "hover:bg-cyan-500/10 hover:border-l-2 hover:border-cyan-500/50"
                      } ${!option.available ? "opacity-50" : ""}`}
                    >
                      {/* Animated Background */}
                      {selectedIndex === index && (
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 to-blue-500/10 animate-pulse" />
                      )}

                      {/* Arcana Symbol with Rotation */}
                      <div
                        className={`"w-10 h-10 aspect-square rounded-full border-2 sm:w-14 sm:h-14 border-2 flex items-center justify-center text-sm font-bold transition-all duration-500 relative z-10 ${
                          selectedIndex === index
                            ? "border-cyan-400 bg-gradient-to-br from-cyan-400/30 to-blue-500/30 text-cyan-300 animate-spin-slow"
                            : "border-gray-600 text-gray-400 group-hover:border-cyan-500/50"
                        }`}
                      >
                        {option.arcanaNumber}
                        {selectedIndex === index && (
                          <div className="absolute inset-0 rounded-full border-2 border-cyan-400 animate-ping opacity-30" />
                        )}
                      </div>

                      {/* Menu Text with Glitch Effect */}
                      <div className="flex-1 relative z-10">
                        <div
                          className={`text-xl font-bold transition-all duration-500 ${
                            selectedIndex === index ? "text-cyan-300 persona-text-glow" : "text-white"
                          } ${!option.available ? "line-through" : ""}`}
                        >
                          {option.label}
                          {selectedIndex === index && (
                            <span className="absolute inset-0 text-cyan-200 animate-glitch opacity-30">
                              {option.label}
                            </span>
                          )}
                        </div>
                        <div className="text-sm text-gray-400 italic">{option.arcana}</div>
                      </div>

                      {/* Selection Indicator with Pulse */}
                      {selectedIndex === index && (
                        <div className="relative z-10">
                          <div className="w-3 h-10 bg-gradient-to-b from-cyan-400 to-blue-500 rounded-full animate-pulse-glow" />
                          <div className="absolute inset-0 w-3 h-10 bg-gradient-to-b from-cyan-300 to-blue-400 rounded-full animate-ping opacity-50" />
                        </div>
                      )}

                      {/* Floating Particles */}
                      {selectedIndex === index && (
                        <div className="absolute inset-0 pointer-events-none">
                          {[...Array(5)].map((_, i) => (
                            <div
                              key={i}
                              className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-float-up opacity-60"
                              style={{
                                left: `${20 + i * 15}%`,
                                animationDelay: `${i * 0.2}s`,
                              }}
                            />
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 text-sm text-gray-500 animate-fade-in hidden sm:block">
                <div className="flex items-center space-x-4">
                  <span>↑↓ Navigate</span>
                  <span>•</span>
                  <span>ENTER Select</span>
                </div>
              </div>
            </div>

            {/* Right Panel - Details with 3D Effect */}
            <div className="w-1/2 p-8 flex flex-col justify-center border-l border-cyan-500/30 relative">
              <div className="space-y-6 transform transition-all duration-700 ease-out perspective-1000">
                {/* Arcana Card with 3D Rotation */}
                <Card className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-cyan-500/30 backdrop-blur-sm p-6 transform transition-all duration-700 hover:rotate-y-12 preserve-3d">
                  <div className="text-center relative">
                    <div className="w-20 h-20 sm:w-28 sm:h-28 mx-auto mb-4 rounded-full border-4 border-cyan-400 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 flex items-center justify-center relative animate-float">
                      <span className="text-3xl font-bold text-cyan-300 z-10">{selectedOption.arcanaNumber}</span>
                      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-400/10 to-blue-500/10 animate-spin-slow" />
                      <div className="absolute inset-0 rounded-full border-2 border-cyan-400/30 animate-ping" />
                    </div>
                    <h3 className="text-2xl font-bold text-cyan-300 mb-2 persona-text-glow text-center">{selectedOption.arcana}</h3>
                    <div className="text-gray-400 text-center">{selectedOption.description}</div>
                  </div>
                </Card>

                {/* Status with Animated Border */}
                <div className="space-y-4">
                  {/* <div className="flex items-center justify-between p-4 rounded-lg border border-cyan-500/20 bg-slate-800/30 backdrop-blur-sm">
                    <span className="text-gray-400">Status:</span>
                    <Badge
                      variant={selectedOption.available ? "default" : "secondary"}
                      className={`transition-all duration-500 ${
                        selectedOption.available
                          ? "bg-green-500/20 text-green-300 border-green-500/30 animate-pulse-glow"
                          : "bg-red-500/20 text-red-300 border-red-500/30"
                      }`}
                    >
                      {selectedOption.available ? "Available" : "Locked"}
                    </Badge>
                  </div> */}

                  {showDetails && selectedOption.available && (
                    <div className="text-cyan-300 animate-pulse p-4 rounded-lg bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 hidden sm:block">
                      <TypewriterText text="► Press ENTER to continue..." delay={80} />
                    </div>
                  )}
                </div>

                {/* Preview Content with Slide Animation */}
                <div className="transform transition-all duration-700 ease-out">
                  {selectedOption.id === "profile" && (
                    <div className="space-y-3 text-base text-gray-300 animate-slide-up">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
                        <span>Junior Fullstack Developer</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
                        <span>4+ years of experience</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-cyan-300 rounded-full animate-pulse" />
                        <span>Specialized in automation</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
                        <span>Homelabbing beginner</span>
                      </div>
                    </div>
                  )}

                  {selectedOption.id === "projects" && (
                    <div className="space-y-3 text-base text-gray-300 animate-slide-up">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                        <span>Many projects realized</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" />
                        <span>Modern web apps</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
                        <span>Open source enjoyer</span>
                      </div>
                    </div>
                  )}

                  {selectedOption.id === "skills" && (
                    <div className="space-y-3 text-base text-gray-300 animate-slide-up">
                      <div className="flex items-center space-x-2">
                        <div className="hidden sm:block w-2 h-2 bg-indigo-400 rounded-full animate-pulse" />
                        <span>Automation, Docker, Python, Homelabbing, Botting</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="hidden sm:block w-2 h-2 bg-red-400 rounded-full animate-pulse" />
                        <span>Backend: Node.js, PostgreSQL, Django</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="hidden sm:block w-2 h-2 bg-orange-400 rounded-full animate-pulse" />
                        <span>Frontend: React, Vite</span>
                      </div>
                    </div>
                  )}

                  {selectedOption.id === "experience" && (
                    <div className="space-y-3 text-base text-gray-300 animate-slide-up">
                      <div className="flex items-center space-x-2">
                        <div className="hidden sm:block w-2 h-2 bg-teal-400 rounded-full animate-pulse" />
                        <span>Software Engineer @ Oxylife</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="hidden sm:block w-2 h-2 bg-sky-400 rounded-full animate-pulse" />
                        <span>Customer Care and Logistic @ &apos;private&apos;</span>
                      </div>
                    </div>
                  )}

                  {selectedOption.id === "contact" && (
                    <div className="space-y-3 text-base text-gray-300 animate-slide-up">
                      <div className="flex items-center space-x-2">
                        <div className="hidden sm:block w-2 h-2 bg-pink-400 rounded-full animate-pulse" />
                        <span className="text-sm sm:text-base">bernede.maximilien@gmail.com</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="hidden sm:block w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
                        <span>+33 6 81 71 83 89</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="hidden sm:block w-2 h-2 bg-violet-400 rounded-full animate-pulse" />
                        <span>LinkedIn, GitHub, Portfolio</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="hidden sm:block w-2 h-2 bg-rose-400 rounded-full animate-pulse" />
                        <span>Amsterdam, Netherlands</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Render Section Components based on currentMenu */}
        {currentMenu === "profile" && <ProfileSection handleBack={handleBack} isTransitioning={isTransitioning} />}
        {currentMenu === "skills" && <SkillsSection handleBack={handleBack} isTransitioning={isTransitioning} />}
        {currentMenu === "experience" && <ExperienceSection handleBack={handleBack} isTransitioning={isTransitioning} />}
        {currentMenu === "projects" && <ProjectsSection handleBack={handleBack} isTransitioning={isTransitioning} />}
        {currentMenu === "contact" && <ContactSection handleBack={handleBack} isTransitioning={isTransitioning} />}
        {currentMenu === "about" && <AboutSection handleBack={handleBack} isTransitioning={isTransitioning} />}
      </div>

      {/* UI Elements with Glow */}
      <div className="fixed bottom-4 right-4 text-xs text-gray-500 animate-fade-in">
        <div className="persona-text-glow">Maxb Portfolio</div>
      </div>
    </div>
  )
}
