import Image from "next/image";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden selection:bg-accent/30 selection:text-white">
      {/* Background Mesh */}
      <div className="hero-mesh" />

      {/* Navbar */}
      <nav className="fixed top-0 z-50 w-full border-b border-white/5 glass-morphism">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-primary" />
            <span className="text-xl font-bold tracking-tighter">NEXUS</span>
          </div>
          <div className="hidden items-center gap-8 text-sm font-medium text-muted-foreground transition-colors md:flex">
            <a href="#" className="hover:text-foreground">Features</a>
            <a href="#" className="hover:text-foreground">Solution</a>
            <a href="#" className="hover:text-foreground">Company</a>
          </div>
          <button className="rounded-full bg-foreground px-5 py-2 text-sm font-semibold text-background transition-transform hover:scale-105 active:scale-95">
            Get Started
          </button>
        </div>
      </nav>

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

            {/* Feature Grid */}
            <div className="mt-32 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Lightning Fast",
                  desc: "Built on top of the latest technologies for unmatched performance.",
                  icon: (
                    <svg className="h-6 w-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  )
                },
                {
                  title: "Secure by Default",
                  desc: "Enterprise-grade security features right out of the box.",
                  icon: (
                    <svg className="h-6 w-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002-2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  )
                },
                {
                  title: "Cloud Scale",
                  desc: "Automatically scale your applications as your user base grows.",
                  icon: (
                    <svg className="h-6 w-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                    </svg>
                  )
                }
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
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 bg-black py-12">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div className="flex items-center gap-2">
              <div className="h-6 w-6 rounded bg-gradient-primary" />
              <span className="text-lg font-bold tracking-tighter">NEXUS</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2026 Nexus Technologies Inc. All rights reserved.
            </p>
            <div className="flex gap-6 text-muted-foreground">
              <a href="#" className="hover:text-foreground">Twitter</a>
              <a href="#" className="hover:text-foreground">GitHub</a>
              <a href="#" className="hover:text-foreground">Discord</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}