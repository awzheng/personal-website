"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { X } from "lucide-react"

// ✏️ EDIT YOUR SOCIAL LINKS HERE
const SOCIAL_LINKS = {
  github: "https://github.com/awzheng",
  linkedin: "https://linkedin.com/in/andrewzheng2007",
  email: "andrewhaozheng@gmail.com",
  twitter: "https://twitter.com/awzhenga", // optional - leave empty to hide
  instagram: "https://instagram.com/awzheng", // optional - leave empty to hide
}

function ContactModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="absolute inset-0 bg-black/50" />
      <div 
        className="relative w-full max-w-md bg-white dark:bg-slate-900 rounded-lg shadow-xl p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-500 hover:text-slate-700 dark:hover:text-slate-300"
        >
          <X className="h-5 w-5" />
        </button>

        <h2 className="text-2xl font-bold mb-2">Get in Touch</h2>
        <p className="text-slate-600 dark:text-slate-400 mb-6">
          Connect with me!
        </p>

        <div className="space-y-3">
          <a
            href={`mailto:${SOCIAL_LINKS.email}`}
            className="flex items-center gap-3 p-3 rounded-lg border hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
          >
            <span className="text-2xl">📧</span>
            <div>
              <div className="font-medium">Email</div>
              <div className="text-sm text-slate-600 dark:text-slate-400">{SOCIAL_LINKS.email}</div>
            </div>
          </a>

          <a
            href={SOCIAL_LINKS.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-3 rounded-lg border hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
          >
            <span className="text-2xl">💻</span>
            <div>
              <div className="font-medium">GitHub</div>
              <div className="text-sm text-slate-600 dark:text-slate-400">@awzheng</div>
            </div>
          </a>

          <a
            href={SOCIAL_LINKS.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-3 rounded-lg border hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
          >
            <span className="text-2xl">💼</span>
            <div>
              <div className="font-medium">LinkedIn</div>
              <div className="text-sm text-slate-600 dark:text-slate-400">Andrew Zheng</div>
            </div>
          </a>

          {SOCIAL_LINKS.twitter && (
            <a
              href={SOCIAL_LINKS.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-3 rounded-lg border hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
            >
              <span className="text-2xl">🐦</span>
              <div>
                <div className="font-medium">Twitter</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">@awzhenga</div>
              </div>
            </a>
          )}

          {SOCIAL_LINKS.instagram && (
            <a
              href={SOCIAL_LINKS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-3 rounded-lg border hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
            >
              <span className="text-2xl">📷</span>
              <div>
                <div className="font-medium">Instagram</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">@awzheng</div>
              </div>
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default function Home() {
  const [isContactOpen, setContactOpen] = useState(false)

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-3xl">
          <Badge className="mb-4">1A ECE @ Waterloo</Badge>
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Andrew Zheng
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 mb-8">
            Building hardware projects and exploring embedded systems. <br></br>
            Passionate about circuit design and microcontroller programming. <br></br>
            DECA World Champion 2024 + Project Management Lover!
          </p>
          <div className="flex gap-4">
            <Button size="lg">View Projects</Button>
            <Button size="lg" variant="outline" onClick={() => setContactOpen(true)}>
              Contact Me
            </Button>
          </div>
        </div>
      </section>

      {/* Hardware Projects Section */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold mb-8">Hardware Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Polaris Rocket DAQ Panel PCB</CardTitle>
              <CardDescription>Waterloo Rocketry</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                A configurable patch panel in PCB form across diverse sensor inputs.<br></br>
                Embedded C/C++ firmware on a custom RTOS, Kalman filter–based altitude/velocity estimation, safety interlocks, and telemetry logging<br></br>
                Autonomous flight control and post‑flight data analysis
              </p>
              <div className="flex gap-2">
                <Badge variant="secondary">PCB Design</Badge>
                <Badge variant="secondary">KiCAD</Badge>
                <Badge variant="secondary">Soldering</Badge>
                <Badge variant="secondary">IoT</Badge>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Multi LiPo Battery Charger</CardTitle>
              <CardDescription>Waterloo Rocketry</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                A custom (embedded hardware) USB-C charger with cell‑balancing algorithms, over‑voltage/over‑current protection, and real‑time monitoring.<br></br>
                Features an IC, microcontroller, custom display, and mosfet semiconductor.
              </p>
              <div className="flex gap-2">
                <Badge variant="secondary">PCB Design</Badge>
                <Badge variant="secondary">Soldering</Badge>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>EMG Fabric Project: Bionic Arm PCB</CardTitle>
              <CardDescription>Waterloo Biomechatronics</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                EMG signal acquisition and processing PCB for a bionic arm project.<br></br>
                Designed to amplify and filter muscle signals for accurate prosthetic control.<br></br>
                Integrated with microcontroller for real-time data processing and wireless transmission.
              </p>
              <div className="flex gap-2">
                <Badge variant="secondary">PCB Design</Badge>
                <Badge variant="secondary">KiCAD</Badge>
                <Badge variant="secondary">Altium</Badge>
                <Badge variant="secondary">Soldering</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Software/Other Projects Section */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold mb-8">Software & Other Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Arduino Weather Station</CardTitle>
              <CardDescription>IoT device with temperature & humidity sensors</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                Built a complete weather monitoring system using Arduino Uno, DHT22 sensor, 
                and LCD display. Implemented data logging to SD card.
              </p>
              <div className="flex gap-2">
                <Badge variant="secondary">Arduino</Badge>
                <Badge variant="secondary">C++</Badge>
                <Badge variant="secondary">IoT</Badge>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Featherweight Finance</CardTitle>
              <CardDescription>Financial Literacy Video Game</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                A charming exploration game where Prodigy meets Animal Crossing, designed using learning science.<br></br>
                2nd Place @ McMaster University High School Business Heroes Season 18
              </p>
              <div className="flex gap-2">
                <Badge variant="secondary">Unity</Badge>
                <Badge variant="secondary">Product Management</Badge>
              </div>
            </CardContent>
          </Card>

          {/* <Card>
            <CardHeader>
              <CardTitle>Your Next Project</CardTitle>
              <CardDescription>Add your real projects here</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                Replace these example cards with your actual hardware projects. 
                Include photos, descriptions, and links to GitHub repos.
              </p>
              <div className="flex gap-2">
                <Badge variant="secondary">Your Tech</Badge>
                <Badge variant="secondary">Stack Here</Badge>
              </div>
            </CardContent>
          </Card> */}
        </div>
      </section>

      {/* Skills Section */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold mb-8">Skills & Tools</h2>
        <div className="flex flex-wrap gap-3">
          <Badge variant="outline">Arduino</Badge>
          <Badge variant="outline">Raspberry Pi</Badge>
          <Badge variant="outline">C/C++</Badge>
          <Badge variant="outline">Java</Badge>
          <Badge variant="outline">Python</Badge>
          <Badge variant="outline">KiCad</Badge>
          <Badge variant="outline">Oscilloscope</Badge>
          <Badge variant="outline">Multimeter</Badge>
          <Badge variant="outline">Soldering</Badge>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 border-t">
        <div className="flex justify-between items-center">
          <p className="text-slate-600 dark:text-slate-400">© 2025 Andrew Zheng</p>
          <div className="flex gap-4">
            <a href={SOCIAL_LINKS.github} className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100">
              GitHub
            </a>
            <a href={SOCIAL_LINKS.linkedin} className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100">
              LinkedIn
            </a>
          </div>
        </div>
      </footer>

      <ContactModal isOpen={isContactOpen} onClose={() => setContactOpen(false)} />
    </main>
  )
}
