import content from "../../../content.json";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
export default function Academics() {
  const schools = [{
    name: "School of Computer Science",
    icon: "💻"
  }, {
    name: "School of Management",
    icon: "📈"
  }, {
    name: "School of Engineering",
    icon: "⚙️"
  }, {
    name: "School of Fashion Design",
    icon: "🎨"
  }, {
    name: "School of Architecture",
    icon: "🏛️"
  }, {
    name: "School of Law",
    icon: "⚖️"
  }, {
    name: "School of Agriculture",
    icon: "🌱"
  }, {
    name: "School of Bio-Engineering",
    icon: "🧬"
  }];
  return <div className="relative min-h-screen overflow-hidden selection:bg-accent/30 selection:text-white">
      <Navbar />
      <div className="hero-mesh" />

      <main className="relative pt-32 pb-20 md:pt-48 md:pb-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-20 text-center">
            <h1 className="text-5xl font-extrabold tracking-tight md:text-7xl lg:text-8xl mb-8">
              Academic <span className="text-gradient">Excellence</span>
            </h1>
            <p className="mx-auto max-w-3xl text-lg text-muted-foreground md:text-xl">{content.academics.academic_excellence_description}</p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {schools.map((school, i) => <div key={i} className="group p-8 rounded-3xl border border-white/5 bg-white/5 hover:bg-white/10 transition-all hover:-translate-y-2 cursor-pointer">
                <div className="text-4xl mb-6 group-hover:scale-125 transition-transform">{school.icon}</div>
                <h3 className="text-xl font-bold">{school.name}</h3>
                <p className="mt-4 text-sm text-muted-foreground">{content.academics.school_programs_description}</p>
              </div>)}
          </div>

          <div className="mt-32 p-12 rounded-[3rem] border border-accent/20 bg-accent/5">
             <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                   <h2 className="text-3xl font-bold mb-6">{content.academics.industry_collaborations_heading}</h2>
                   <p className="text-muted-foreground mb-8">{content.academics.industry_collaborations_description}</p>
                   <button className="text-accent font-bold flex items-center gap-2 hover:gap-4 transition-all">{content.academics.learn_about_partnerships_button}<span>→</span>
                   </button>
                </div>
                <div className="grid grid-cols-3 gap-4 opacity-50 grayscale contrast-125">
                   {/* Dummy Logos */}
                   {[1, 2, 3, 4, 5, 6].map(i => <div key={i} className="h-16 rounded-xl bg-white/10 flex items-center justify-center font-black text-xs">LOGO {i}</div>)}
                </div>
             </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>;
}