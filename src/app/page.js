import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background selection:bg-accent selection:text-white">
      {/* Background Atmosphere */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-accent/20 rounded-full blur-[120px] animate-pulse-slow" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-600/10 rounded-full blur-[120px] animate-pulse-slow" />
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full border-b border-white/5 bg-background/50 backdrop-blur-md">
        <div className="container mx-auto flex h-16 items-center justify-between px-6">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-accent flex items-center justify-center font-bold text-white italic">N</div>
            <span className="text-xl font-bold tracking-tighter">NEXUS</span>
          </div>
          <div className="hidden md:flex gap-8 text-sm font-medium text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">Features</a>
            <a href="#" className="hover:text-foreground transition-colors">Solutions</a>
            <a href="#" className="hover:text-foreground transition-colors">Enterprise</a>
            <a href="#" className="hover:text-foreground transition-colors">Pricing</a>
          </div>
          <button className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-black hover:bg-zinc-200 transition-all hover:scale-105">
            Get Started
          </button>
        </div>
      </nav>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative flex flex-col items-center justify-center px-6 pt-32 pb-24 text-center md:pt-48 md:pb-32 overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(139,92,246,0.15),transparent_70%)]" />
          <div className="inline-flex items-center rounded-full border border-accent/20 bg-accent/5 px-3 py-1 text-sm font-medium text-accent mb-8 animate-float">
            <span className="mr-2">✨</span> Nexus v2.0 is now live
          </div>
          <h1 className="max-w-4xl text-5xl font-extrabold tracking-tight sm:text-7xl mb-8 bg-gradient-to-b from-foreground to-foreground/40 bg-clip-text text-transparent italic">
            Elevating the Future of Digital Innovation.
          </h1>
          <p className="max-w-2xl text-lg text-muted-foreground mb-12 sm:text-xl leading-relaxed">
            Experience the next generation of performance, security, and scalability. Built for visionaries who demand excellence in every pixel.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="h-12 rounded-full bg-accent px-8 font-semibold text-white hover:bg-accent/90 transition-all shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:scale-105">
              Start Building Now
            </button>
            <button className="h-12 rounded-full border border-white/10 bg-white/5 px-8 font-semibold backdrop-blur-sm hover:bg-white/10 transition-all">
              View Demo
            </button>
          </div>
          
          {/* Hero Image / Mockup */}
          <div className="mt-20 w-full max-w-5xl px-4 animate-float" style={{ animationDelay: '1s' }}>
            <div className="glass-morphism rounded-2xl p-2 sm:p-4 aspect-video overflow-hidden group">
              <div className="w-full h-full rounded-xl bg-zinc-900 border border-white/5 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-blue-500/10 opacity-50" />
                <div className="absolute top-4 left-4 flex gap-1.5">
                   <div className="w-3 h-3 rounded-full bg-red-500/50" />
                   <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                   <div className="w-3 h-3 rounded-full bg-green-500/50" />
                </div>
                <div className="flex items-center justify-center w-full h-full text-zinc-700 font-mono text-sm">
                  // NEXUS MONITORING DASHBOARD
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="container mx-auto px-6 py-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 italic">Engineered for Excellence</h2>
            <p className="text-muted-foreground text-lg">Unmatched capabilities to power your most ambitious projects.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Ultra Performance", desc: "Built on a backbone of optimized edge computing for sub-millisecond responses.", icon: "⚡" },
              { title: "Military Security", desc: "Encryption that exceeds industry standards, keeping your data safe 24/7.", icon: "🛡️" },
              { title: "Seamless Scale", desc: "Go from prototype to global scale without touching a single server config.", icon: "🚀" }
            ].map((f, i) => (
              <div key={i} className="glass-morphism p-8 rounded-2xl hover:border-accent/40 transition-all group hover:-translate-y-2">
                <div className="text-4xl mb-6">{f.icon}</div>
                <h3 className="text-xl font-bold mb-3">{f.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-6 py-24">
          <div className="glass-morphism rounded-3xl p-8 md:p-16 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[30%] h-[30%] bg-accent/10 blur-[100px]" />
            <h2 className="text-3xl md:text-5xl font-bold mb-6 italic">Ready to Redefine What's Possible?</h2>
            <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
              Join thousands of innovators building the future on Nexus. Get started for free today.
            </p>
            <button className="h-14 rounded-full bg-white px-10 font-bold text-black hover:bg-zinc-200 transition-all hover:scale-105">
              Launch Your Workspace
            </button>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/5 py-12 px-6 bg-zinc-950">
        <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-12">
          <div className="col-span-2 md:col-span-1">
             <div className="flex items-center gap-2 mb-6">
              <div className="h-6 w-6 rounded-md bg-accent flex items-center justify-center font-bold text-white text-xs italic">N</div>
              <span className="text-lg font-bold tracking-tighter">NEXUS</span>
            </div>
            <p className="text-sm text-muted-foreground">The foundation for the next generation of web experience.</p>
          </div>
          {['Product', 'Company', 'Legal'].map((cat, i) => (
            <div key={i}>
              <h4 className="font-semibold mb-4">{cat}</h4>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li><a href="#" className="hover:text-foreground transition-colors">Link One</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Link Two</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Link Three</a></li>
              </ul>
            </div>
          ))}
        </div>
        <div className="container mx-auto mt-12 pt-8 border-t border-white/5 text-center text-xs text-muted-foreground">
          © 2026 Nexus Platform Inc. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
