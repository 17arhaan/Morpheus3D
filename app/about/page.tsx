import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Github, Linkedin, Globe, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <div className="h-[100dvh] w-full bg-black bg-radial-gradient text-white flex flex-col">
      {/* Header with back button */}
      <header className="p-4 flex items-center">
        <Link href="/">
          <Button variant="ghost" className="text-white hover:bg-white/10">
            <ArrowLeft className="h-5 w-5 mr-2" />
            <span>Back to Morpheus 3D</span>
          </Button>
        </Link>
      </header>

      {/* Main content */}
      <main className="flex-1 container max-w-5xl mx-auto px-4 py-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left column - Profile and Links */}
          <div className="md:col-span-1 space-y-8">
            <div className="relative w-56 h-56 mx-auto overflow-hidden rounded-xl border-2 border-white/20">
              <Image src="/images/profile-photo.png" alt="Arhaan Girdhar" fill className="object-cover" priority />
            </div>
            
            <div className="text-center">
              <h1 className="text-4xl font-normal tracking-normal mb-2">Arhaan Girdhar</h1>
              <p className="text-gray-400 text-xl">CSE Junior @ Manipal Institute of Technology</p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <a
                href="https://linkedin.com/in/arhaan17"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 transition-colors px-4 py-3 rounded-lg"
              >
                <Linkedin className="h-5 w-5" />
                <span>LinkedIn</span>
              </a>
              <a
                href="https://github.com/17arhaan"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 transition-colors px-4 py-3 rounded-lg"
              >
                <Github className="h-5 w-5" />
                <span>GitHub</span>
              </a>
              <a
                href="https://www.arhaanportfolio.in"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 transition-colors px-4 py-3 rounded-lg"
              >
                <Globe className="h-5 w-5" />
                <span>Portfolio</span>
              </a>
              <a
                href="mailto:17arhaan.connect@gmail.com"
                className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 transition-colors px-4 py-3 rounded-lg"
              >
                <Mail className="h-5 w-5" />
                <span>Email</span>
              </a>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-normal tracking-normal">Skills & Technologies</h2>
              <div className="grid grid-cols-2 gap-3">
                {[
                  "React",
                  "Next.js",
                  "Three.js",
                  "C++",
                  "AI/ML",
                  "Deep Learning",
                  "3D Graphics",
                  "Tailwind CSS",
                ].map((skill) => (
                  <div key={skill} className="bg-white/5 rounded-lg p-3 text-center">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right column - Content */}
          <div className="md:col-span-2 space-y-8">
            <section>
              <h2 className="text-2xl font-normal tracking-normal mb-4">About Me</h2>
              <p className="text-gray-300 text-base leading-relaxed mb-3">
                I'm an AI enthusiast and developer passionate about creating tools that make advanced technologies
                accessible to everyone. Currently pursuing Computer Science Engineering at Manipal Institute of
                Technology, I focus on AI, machine learning, and 3D graphics applications.
              </p>
              <p className="text-gray-300 text-base leading-relaxed">
                I'm currently working on Humanoid - Disability Assistance and learning how to build AI Agents and Deep
                Learning systems. My goal is to bridge the gap between complex AI capabilities and user-friendly
                interfaces.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-normal tracking-normal mb-4">About This Project</h2>
              <p className="text-gray-300 text-base leading-relaxed">
                Morpheus 3D is a web application that leverages the power of Hyper3D Rodin API to transform text
                descriptions and images into detailed 3D models. This tool makes 3D content creation accessible to
                everyone, regardless of their technical expertise or artistic background.
              </p>
            </section>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-4 text-center text-gray-400 bg-black/50 backdrop-blur-sm">
        <p className="text-sm">© {new Date().getFullYear()} Arhaan Girdhar. All rights reserved.</p>
      </footer>
    </div>
  )
}
