import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Home() {
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
            DECA Product Management World Champion 2024 + Project Management Lover!
          </p>
          <div className="flex gap-4">
            <Button size="lg">View Projects</Button>
            <Button size="lg" variant="outline">Contact Me</Button>
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
              <CardTitle>LED Matrix Display</CardTitle>
              <CardDescription>32x32 RGB LED matrix with animations</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                Designed custom PCB and programmed ESP32 to control RGB LED matrix. 
                Features scrolling text and animations via web interface.
              </p>
              <div className="flex gap-2">
                <Badge variant="secondary">ESP32</Badge>
                <Badge variant="secondary">PCB Design</Badge>
                <Badge variant="secondary">WiFi</Badge>
              </div>
            </CardContent>
          </Card>

          <Card>
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
          </Card>
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
            <a href="https://github.com/awzheng" className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100">
              GitHub
            </a>
            <a href="https://linkedin.com/in/andrewzheng2007" className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100">
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </main>
  )
}
