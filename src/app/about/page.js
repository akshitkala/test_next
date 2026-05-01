import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function About() {
  return (
    <div className="relative min-h-screen overflow-hidden selection:bg-accent/30 selection:text-white">
      <Navbar />
      <div className="hero-mesh" />

      <main className="relative pt-32 pb-20 md:pt-48 md:pb-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-20 text-center">
            <h1 className="text-5xl font-extrabold tracking-tight md:text-7xl lg:text-8xl mb-8">
              About <span className="text-gradient">LPU</span>
            </h1>
            <p className="mx-auto max-w-3xl text-lg text-muted-foreground md:text-xl">
              Lovely Professional University is a world-class institution dedicated to excellence in teaching, 
              learning, and research. Founded with the vision of creating global leaders, LPU is today a 
              symbol of innovation and academic brilliance to secure your future
            .
            </p>
          </div>

          <div className="grid gap-16 lg:grid-cols-2">
            <div className="space-y-8">
              <h2 className="text-3xl font-bold">Our Vision</h2>
              <p className="text-muted-foreground leading-relaxed">
                To be a premier academic institution, recognized internationally for its contribution 
                to industry and society through excellence in teaching, learning, research, 
                internationalization, entrepreneurship, and leadership.
              </p>
              
              <h2 className="text-3xl font-bold pt-8">Our Mission</h2>
              <ul className="space-y-4 text-muted-foreground">
                <li className="flex gap-4">
                  <div className="h-6 w-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 text-accent font-bold">✓</div>
                  To provide affordable quality education while maintaining high standards.
                </li>
                <li className="flex gap-4">
                  <div className="h-6 w-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 text-accent font-bold">✓</div>
                  To nurture innovation and research-driven learning environment.
                </li>
                <li className="flex gap-4">
                  <div className="h-6 w-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 text-accent font-bold">✓</div>
                  To develop holistic individuals capable of leading in a globalized world.
                </li>
              </ul>
            </div>

            <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[500px]">
              <Image 
                src="/lpu_main_building.png" 
                alt="LPU Main Building"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
