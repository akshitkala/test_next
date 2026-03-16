import content from "../../../content.json";
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
              <h2 className="mb-4 text-sm font-bold uppercase tracking-widest text-accent">{content.company.company_our_mission_heading}</h2>
              <h1 className="mb-8 text-5xl font-extrabold tracking-tight md:text-7xl">
                Defining the <br />
                <span className="text-gradient">{content.company.company_main_heading_part_2}</span>
              </h1>
              <p className="mb-8 text-xl leading-relaxed text-muted-foreground">{content.company.company_introduction_paragraph_1}</p>
              <p className="mb-10 text-lg leading-relaxed text-muted-foreground">{content.company.company_introduction_paragraph_2}</p>
              
              <div className="flex flex-wrap gap-8">
                <div>
                  <div className="text-4xl font-bold">{content.company.company_requests_per_second_value}</div>
                  <div className="text-sm text-muted-foreground uppercase tracking-widest mt-1">{content.company.company_requests_per_second_label}</div>
                </div>
                <div>
                  <div className="text-4xl font-bold">{content.company.company_uptime_sla_value}</div>
                  <div className="text-sm text-muted-foreground uppercase tracking-widest mt-1">{content.company.company_uptime_sla_label}</div>
                </div>
                <div>
                  <div className="text-4xl font-bold">{content.company.company_countries_value}</div>
                  <div className="text-sm text-muted-foreground uppercase tracking-widest mt-1">{content.company.company_countries_label}</div>
                </div>
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div className="rounded-3xl bg-white/5 border border-white/10 p-2 aspect-square group overflow-hidden">
                <div className="w-full h-full rounded-[1.25rem] bg-gradient-to-br from-accent/20 to-purple-500/10 flex items-center justify-center transition-transform group-hover:scale-[1.02]">
                  <span className="text-accent font-bold">{content.company.company_culture_card_title}</span>
                </div>
              </div>
              <div className="rounded-3xl bg-white/5 border border-white/10 p-2 aspect-square group overflow-hidden mt-12 sm:mt-24">
                <div className="w-full h-full rounded-[1.25rem] bg-gradient-to-br from-pink-500/20 to-accent/10 flex items-center justify-center transition-transform group-hover:scale-[1.02]">
                  <span className="text-pink-500 font-bold">{content.company.company_sustainable_tech_card_title}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Core Values */}
          <div className="mt-48">
            <h2 className="mb-16 text-3xl font-bold text-center">{content.company.company_core_values_heading}</h2>
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