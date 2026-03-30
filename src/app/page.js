import content from "../../content.json";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
export default function Home() {
  return <div className="relative min-h-screen overflow-hidden selection:bg-accent/30 selection:text-white">
      <Navbar />
      
      {/* Background Mesh */}
      <div className="hero-mesh" />

      {/* Hero Section */}
      <main className="relative pt-32 pb-20 md:pt-48 md:pb-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-center text-center">
            <div className="mb-8 inline-flex animate-float items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm font-medium text-accent">
              <span className="mr-2 rounded-full bg-accent/20 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider">{content.home.home_new_badge_text}</span>{content.home.home_nexus_v2_0_live_message}</div>
            
            <h1 className="mb-8 max-w-4xl text-5xl font-extrabold tracking-tight md:text-7xl lg:text-8xl">{content.home.home_hero_heading_part_1}<br />
              <span className="text-gradient">{content.home.home_hero_heading_part_2}</span>
            </h1>
            
            <p className="mb-12 max-w-2xl text-lg text-muted-foreground md:text-xl">{content.home.home_hero_description}</p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <button className="group relative flex h-14 items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-primary px-8 font-semibold text-white transition-all hover:shadow-[0_0_40px_rgba(139,92,246,0.3)]">{content.home.home_start_building_now_button}<svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
              <button className="flex h-14 items-center justify-center rounded-full border border-white/10 bg-white/5 px-8 font-semibold transition-colors hover:bg-white/10">{content.home.home_view_documentation_button}</button>
            </div>

            {/* Feature Grid */}
            <div className="mt-32 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 text-left">
              {[{
              title: "Lightning Fast",
              desc: "Built on top of the latest technologies for unmatched performance.",
              icon: <svg className="h-6 w-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
            }, {
              title: "Secure by Default",
              desc: "Enterprise-grade security features right out of the box.",
              icon: <svg className="h-6 w-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002-2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
            }, {
              title: "Cloud Scale",
              desc: "Automatically scale your applications as your user base grows.",
              icon: <svg className="h-6 w-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                    </svg>
            }].map((feature, i) => <div key={i} className="group relative rounded-2xl border border-white/5 bg-white/5 p-8 transition-colors hover:bg-white/[0.08]">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 transition-transform group-hover:scale-110">
                    {feature.icon}
                  </div>
                  <h3 className="mb-2 text-xl font-bold">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.desc}</p>
                </div>)}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>;
}