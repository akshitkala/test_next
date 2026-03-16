import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
export default function Company() {
  return <div className="relative min-h-screen overflow-hidden selection:bg-accent/30 selection:text-white">
      <Navbar />
      <div className="hero-mesh" />
      
      <main className="relative pt-32 pb-20 md:pt-48 md:pb-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="mb-4 text-sm font-bold uppercase tracking-widest text-accent">Our Mission</h2>
              <h1 className="mb-8 text-5xl font-extrabold tracking-tight md:text-7xl">
                Defining the <br />
                <span className="text-gradient">next frontier.</span>
              </h1>
              <p className="mb-8 text-xl leading-relaxed text-muted-foreground">Founded in 2024, Nexus was born from a simple observation: the tools we use to build the web haven't kept pace with the complexity of what we're building.</p>
              <p className="mb-10 text-lg leading-relaxed text-muted-foreground">Our mission is to bridge this gap by providing an integrated ecosystem that handles the infrastructure, security, and scaling, so you can focus on what matters: delivering incredible experiences to your users.</p>
              
              <div className="flex flex-wrap gap-8">
                <div>
                  <div className="text-4xl font-bold">50M+</div>
                  <div className="text-sm text-muted-foreground uppercase tracking-widest mt-1">Requests/sec</div>
                </div>
                <div>
                  <div className="text-4xl font-bold">99.99%</div>
                  <div className="text-sm text-muted-foreground uppercase tracking-widest mt-1">Uptime SLA</div>
                </div>
                <div>
                  <div className="text-4xl font-bold">120+</div>
                  <div className="text-sm text-muted-foreground uppercase tracking-widest mt-1">Countries</div>
                </div>
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div className="rounded-3xl bg-white/5 border border-white/10 p-2 aspect-square group overflow-hidden">
                <div className="w-full h-full rounded-[1.25rem] bg-gradient-to-br from-accent/20 to-purple-500/10 flex items-center justify-center transition-transform group-hover:scale-[1.02]">
                  <span className="text-accent font-bold">Our Culture</span>
                </div>
              </div>
              <div className="rounded-3xl bg-white/5 border border-white/10 p-2 aspect-square group overflow-hidden mt-12 sm:mt-24">
                <div className="w-full h-full rounded-[1.25rem] bg-gradient-to-br from-pink-500/20 to-accent/10 flex items-center justify-center transition-transform group-hover:scale-[1.02]">
                  <span className="text-pink-500 font-bold">Sustainable Tech</span>
                </div>
              </div>
            </div>
          </div>

          {/* Core Values */}
          <div className="mt-48">
            <h2 className="mb-16 text-3xl font-bold text-center">Guided by our values</h2>
            <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
              {[{
              title: "Radical Transparency",
              desc: "We believe in being open about our processes, successes, and even our failures."
            }, {
              title: "Customer Obsession",
              desc: "Every choice we make starts with how it will improve our users' workflows."
            }, {
              title: "Relentless Innovation",
              desc: "We never settle for \"good enough.\" We are constantly pushing the boundaries."
            }].map((value, i) => <div key={i} className="border-l border-white/10 pl-8">
                  <h3 className="mb-4 text-xl font-bold">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.desc}</p>
                </div>)}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>;
}