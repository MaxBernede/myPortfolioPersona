"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import TypewriterText from "./typewriter-text"
import Image from "next/image"

interface ProjectsSectionProps {
  handleBack: () => void
  isTransitioning: boolean
}

const projectsData = [
    {
    title: "Home server",
    category: "Homelabbing",
    description: "Creation of my own home server with multiple applications.",
    longDescription:
      "Creation of my own home server with multiple applications.",
    image: "/images/projects/home_server.jpg",
    technologies: ["Docker", "Django", "Python", "API", "VPN", "Torrents"],
    features: [
      "Hosting my Plex server for tv medias",
      "Many of the *ARR apps running (Sonarr, Prowlarr, Radarr, ...)",
      "Creation of my own cloud for storage, for me and my family",
      "Auto Discord notifications using a webhook",
    ],
    github: "https://github.com/username/analytics-dashboard",
    demo: "https://analytics-demo.vercel.app",
    status: "In progress",
    year: "2025",
  },
    {
    title: "Oxylife",
    category: "Website",
    description: "Website for the company Oxylife offering solutions for sleep apneas patients and other breathing issues.",
    longDescription:
      "Website for the company Oxylife offering solutions for sleep apneas patients and other breathing issues.",
    image: "/images/projects/oxylife.PNG",
    technologies: ["React", "TypeScript", "Vite", "Formspree", "OVH", "Shadcn"],
    features: [
      "Contact form and email handling",
      "Following the machines and link with the database",
      "Handling the hosting with OVH"
    ],
    github: "https://github.com/username/ecommerce-platform",
    demo: "https://ecommerce-demo.vercel.app",
    status: "In Progress",
    year: "2025",
    },
    {
    title: "Transcendence",
    category: "School Project",
    description: "Multiplayer Pong game developed during 42 School curriculum.",
    longDescription:
        "A networked multiplayer game demonstrating real-time interactions and advanced gameplay mechanics, developed as part of the 42 School program.",
    image: "/images/projects/transcendence.png",
    technologies: ["React", "Typescript", "Nodejs", "Sockets"],
    features: [
        "Real-time multiplayer gameplay using sockets",
        "Single Page Application, using React",
        "Account management, storage and 2FA",
        "Cross-platform support",
    ],
    github: "https://github.com/username/transcendence",
    demo: null,
    status: "Completed",
    year: "2024",
    },
    {
    title: "42 Webserver",
    category: "School Project",
    description: "HTTP web server created from scratch implemented as part of 42 School curriculum.",
    longDescription:
        "Custom-built HTTP/HTTPS web server showcasing understanding of networking protocols, request handling, and server management, developed during the 42 School program.",
    image: "/images/projects/webserver.jpg",
    technologies: ["C++", "Socket Programming", "HTTP", "Parsing"],
    features: [
        "HTTP/HTTPS protocol support",
        "Concurrent request handling",
        "Static file serving",
        "Configurable server settings",
    ],
    github: "https://github.com/username/webserver",
    demo: null,
    status: "Completed",
    year: "2024",
    }
]

export default function ProjectsSection({ handleBack, isTransitioning }: ProjectsSectionProps) {
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
          <TypewriterText text="PROJECTS" delay={100} />
        </h1>
        <div className="w-48 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mt-4 animate-expand-width" />
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {projectsData.map((project, index) => (
          <Card
            key={index}
            className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-cyan-500/30 backdrop-blur-sm hover:border-cyan-400/50 transition-all duration-300 group overflow-hidden"
          >
            <CardContent className="p-0">
              <div className="relative overflow-hidden">
                <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                width={400} // mets tes dimensions réelles
                height={300}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                unoptimized
                placeholder="blur"
                blurDataURL="/placeholder.svg"
                />

                <div className="absolute top-4 right-4 flex space-x-2">
                  <Badge
                    variant={project.status === "Completed" ? "default" : "secondary"}
                    className={
                      project.status === "Completed"
                        ? "bg-green-500/20 text-green-300"
                        : "bg-yellow-500/20 text-yellow-300"
                    }
                  >
                    {project.status}
                  </Badge>
                  <Badge variant="outline" className="border-cyan-500/30 text-cyan-300">
                    {project.year}
                  </Badge>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-cyan-300">{project.title}</h3>
                  <Badge variant="secondary" className="bg-blue-500/20 text-blue-300">
                    {project.category}
                  </Badge>
                </div>

                <p className="text-gray-300 mb-4">{project.description}</p>

                <div className="mb-4">
                  <h4 className="font-semibold text-cyan-200 mb-2">Features :</h4>
                  <ul className="space-y-1">
                    {project.features.slice(0, 3).map((feature, i) => (
                      <li key={i} className="text-sm text-gray-300 flex items-start">
                        <span className="text-cyan-400 mr-2">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="outline" className="border-cyan-500/30 text-cyan-300 text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* <div className="flex space-x-3"> */}
                  {/* <Button
                    size="sm"
                    variant="outline"
                    className="border-cyan-500/30 text-cyan-300 hover:bg-cyan-500/10 bg-transparent"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button> */}
                  {/* <Button
                    size="sm"
                    className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600"
                    asChild
                  >
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </a>
                  </Button> */}
                {/* </div> */}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
