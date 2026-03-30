import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden selection:bg-accent/30 selection:text-white">
      <Navbar />
      
      {/* Background Mesh */}
      <div className="hero-mesh" />

      {/* Hero Section */}
      <main className="relative pt-32 pb-20 md:pt-48 md:pb-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-center text-center">
            <div className="mb-8 inline-flex animate-float items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm font-medium text-accent">
              <span className="mr-2 rounded-full bg-accent/20 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider">New</span>
              Nexus V2.0 is now live
            </div>
            
            <h1 className="mb-8 max-w-4xl text-5xl font-extrabold tracking-tight md:text-7xl lg:text-8xl">
              Elevate your <br />
              <span className="text-gradient">digital presence.</span>
            </h1>
            
            <p className="mb-12 max-w-2xl text-lg text-muted-foreground md:text-xl">
              Experience the future of innovation with Nexus. Our cutting-edge platform 
              empowers individuals and teams to build, scale, and thrive in the modern web.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <button className="group relative flex h-14 items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-primary px-8 font-semibold text-white transition-all hover:shadow-[0_0_40px_rgba(139,92,246,0.3)]">
                Start Building Now
                <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
              <button className="flex h-14 items-center justify-center rounded-full border border-white/10 bg-white/5 px-8 font-semibold transition-colors hover:bg-white/10">
                View Documentation
              </button>
            </div>

            {/* Hero Dashboard Image — Unsplash (external link) */}
            <div className="relative mt-20 w-full max-w-5xl">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-transparent via-transparent to-background z-10 pointer-events-none" />
              <div className="rounded-3xl border border-white/10 overflow-hidden shadow-[0_40px_120px_rgba(139,92,246,0.2)]">
                <Image
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80"
                  alt="Nexus analytics dashboard with real-time data visualization"
                  width={1200}
                  height={675}
                  className="w-full object-cover"
                  priority
                />
              </div>
            </div>

            {/* Feature Grid */}
            <div className="mt-32 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 text-left">
              {[
                {
                  title: "Lightning Fast",
                  desc: "Built on top of the latest technologies for unmatched performance.",
                  icon: (
                    <svg className="h-6 w-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  ),
                },
                {
                  title: "Secure by Default",
                  desc: "Enterprise-grade security features right out of the box.",
                  icon: (
                    <svg className="h-6 w-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002-2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  ),
                },
                {
                  title: "Cloud Scale",
                  desc: "Automatically scale your applications as your user base grows.",
                  icon: (
                    <svg className="h-6 w-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                    </svg>
                  ),
                },
              ].map((feature, i) => (
                <div key={i} className="group relative rounded-2xl border border-white/5 bg-white/5 p-8 transition-colors hover:bg-white/[0.08]">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 transition-transform group-hover:scale-110">
                    {feature.icon}
                  </div>
                  <h3 className="mb-2 text-xl font-bold">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.desc}</p>
                </div>
              ))}
            </div>

            {/* Image Showcase — public folder + Unsplash link */}
            <div className="mt-32 w-full">
              <h2 className="mb-12 text-3xl font-bold text-center">Crafted for modern teams</h2>
              <div className="grid gap-6 sm:grid-cols-2">
                {/* Public folder image */}
                <div className="group relative rounded-3xl overflow-hidden border border-white/10 aspect-video">
                  <Image
                    src="/CateringHome.jpg"
                    alt="Modern team workspace powered by Nexus"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 text-left">
                    <span className="text-white font-bold text-xl">Team Workspace</span>
                    <p className="text-white/70 text-sm mt-1">Built for collaboration</p>
                  </div>
                </div>
                {/* External Unsplash image */}
                <div className="group relative rounded-3xl overflow-hidden border border-white/10 aspect-video">
                  <Image
                    src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80"
                    alt="Developers collaborating and building with the Nexus platform"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 text-left">
                    <span className="text-white font-bold text-xl">Developer First</span>
                    <p className="text-white/70 text-sm mt-1">Loved by engineers worldwide</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}