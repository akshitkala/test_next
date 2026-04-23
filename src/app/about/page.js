import content from "../../../content.json";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
export default function About() {
  return <div className="relative min-h-screen overflow-hidden selection:bg-accent/30 selection:text-white">
      <Navbar />
      <div className="hero-mesh" />

      <main className="relative pt-32 pb-20 md:pt-48 md:pb-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-20 text-center">
            <h1 className="text-5xl font-extrabold tracking-tight md:text-7xl lg:text-8xl mb-8">{content.navbar.navbar_about_link}<span className="text-gradient">LPU</span>
            </h1>
            <p className="mx-auto max-w-3xl text-lg text-muted-foreground md:text-xl">{content.about.about_lpu_description}</p>
          </div>

          <div className="grid gap-16 lg:grid-cols-2">
            <div className="space-y-8">
              <h2 className="text-3xl font-bold">{content.about.our_vision_header}</h2>
              <p className="text-muted-foreground leading-relaxed">{content.about.our_vision_description}</p>
              
              <h2 className="text-3xl font-bold pt-8">{content.about.our_mission_header}</h2>
              <ul className="space-y-4 text-muted-foreground">
                <li className="flex gap-4">
                  <div className="h-6 w-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 text-accent font-bold">✓</div>{content.about.our_mission_item1}</li>
                <li className="flex gap-4">
                  <div className="h-6 w-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 text-accent font-bold">✓</div>{content.about.our_mission_item2}</li>
                <li className="flex gap-4">
                  <div className="h-6 w-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 text-accent font-bold">✓</div>{content.about.our_mission_item3}</li>
              </ul>
            </div>

            <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[500px]">
              <Image src="https://images.unsplash.com/photo-1498243639359-2818a74e2027?w=800&q=80" alt="LPU Main Building" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>;
}