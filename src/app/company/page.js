import content from "../../../content.json";
import Image from "next/image";
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
              <h2 className="mb-4 text-sm font-bold uppercase tracking-widest text-accent">{content.company.our_mission_label}</h2>
              <h1 className="mb-8 text-5xl font-extrabold tracking-tight md:text-7xl">
                Defining the <br />
                <span className="text-gradient">next frontier.</span>
              </h1>
              <p className="mb-8 text-xl leading-relaxed text-muted-foreground">{content.company.founded_in_2024}</p>
              <p className="mb-10 text-lg leading-relaxed text-muted-foreground">{content.company.our_mission_description}</p>
              
              <div className="flex flex-wrap gap-8">
                <div>
                  <div className="text-4xl font-bold">{content.company.requests_per_second}</div>
                  <div className="text-sm text-muted-foreground uppercase tracking-widest mt-1">{content.company.requests_per_second_description}</div>
                </div>
                <div>
                  <div className="text-4xl font-bold">{content.company.uptime_sla}</div>
                  <div className="text-sm text-muted-foreground uppercase tracking-widest mt-1">{content.company.uptime_sla_description}</div>
                </div>
                <div>
                  <div className="text-4xl font-bold">{content.company.countries}</div>
                  <div className="text-sm text-muted-foreground uppercase tracking-widest mt-1">{content.company.countries_description}</div>
                </div>
              </div>
            </div>

            {/* Image grid — one from public folder, one from Unsplash */}
            <div className="grid gap-6 sm:grid-cols-2">
              {/* Public folder image */}
              <div className="rounded-3xl border border-white/10 overflow-hidden aspect-square group">
                <Image src="/catering.webp" alt="Nexus team culture — collaborative and innovative workplace" width={500} height={500} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]" />
              </div>
              {/* Unsplash external image */}
              <div className="rounded-3xl border border-white/10 overflow-hidden aspect-square group mt-12 sm:mt-24">
                <Image src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&q=80" alt="Sustainable tech team working together on green digital solutions" width={500} height={500} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]" />
              </div>
            </div>
          </div>

          {/* Team Photo Banner — Unsplash external link */}
          <div className="mt-32 relative rounded-[2.5rem] overflow-hidden border border-white/10 h-80">
            <Image src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1400&q=80" alt="The Nexus team gathered together in a modern office environment" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
            <div className="absolute inset-0 flex flex-col justify-center px-12">
              <span className="text-accent text-sm font-bold uppercase tracking-widest mb-3">{content.company.our_people_label}</span>
              <h2 className="text-4xl font-extrabold text-white max-w-md">{content.company.a_team_of_builders_dreamers}</h2>
            </div>
          </div>

          {/* Core Values */}
          <div className="mt-32">
            <h2 className="mb-16 text-3xl font-bold text-center">{content.company.guided_by_our_values}</h2>
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