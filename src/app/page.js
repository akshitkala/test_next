import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
export default function Home() {
  const stats = [{
    label: "Students",
    value: "30,000+"
  }, {
    label: "Faculty",
    value: "2,000+"
  }, {
    label: "Acre Campus",
    value: "600+"
  }, {
    label: "Top Rankings",
    value: "NIRF #1"
  }];
  const categories = [{
    title: "Engineering",
    image: "/engineering_students.png"
  }, {
    title: "Management",
    image: "/management_business.png"
  }, {
    title: "Design",
    image: "/design_studio.png"
  }, {
    title: "Computer Science",
    image: "/computer_science_lab.png"
  }];
  return <div className="relative min-h-screen overflow-hidden selection:bg-accent/30 selection:text-white">
      <Navbar />
      
      {/* Background Mesh */}
      <div className="hero-mesh" />

      {/* Hero Section */}
      <main className="relative pt-32 pb-20 md:pt-48 md:pb-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-center text-center">
            <div className="mb-8 inline-flex animate-float items-center rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm font-medium text-accent">
              <span className="mr-2 rounded-full bg-accent/20 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider">Admissions Open 2026 come anytime anywhere</span>Shape Your Future at LPU</div>
            
            <h1 className="mb-8 max-w-5xl text-5xl font-extrabold tracking-tight md:text-7xl lg:text-8xl leading-tight">Transforming Education<br />
              <span className="text-gradient">Empowering Global Leaders</span>
            </h1>
            
            <p className="mb-12 max-w-3xl text-lg text-muted-foreground md:text-xl leading-relaxed">Experience a world-class education at Lovely Professional University. With a 600-acre hi-tech campus, industry-aligned curriculum, and unmatched placement records, we prepare you for the global stage.</p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <button className="group relative flex h-14 items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-primary px-10 font-semibold text-white transition-all hover:shadow-[0_0_40px_rgba(245,130,32,0.4)] hover:scale-105 active:scale-95">Explore Programs<svg className="h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
              <button className="flex h-14 items-center justify-center rounded-full border border-white/10 bg-white/5 px-10 font-semibold transition-all hover:bg-white/10 hover:border-white/20">Virtual Tour</button>
            </div>

            {/* Stats Section */}
            <div className="mt-24 grid w-full max-w-5xl grid-cols-2 gap-8 md:grid-cols-4">
              {stats.map((stat, i) => <div key={i} className="flex flex-col items-center p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-accent/30 transition-colors group">
                  <span className="text-4xl font-bold text-accent group-hover:scale-110 transition-transform">{stat.value}</span>
                  <span className="mt-2 text-sm font-medium text-muted-foreground uppercase tracking-widest">{stat.label}</span>
                </div>)}
            </div>

            {/* Hero Campus Image */}
            <div className="relative mt-32 w-full max-w-6xl group">
              <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-r from-accent/20 to-yellow-500/20 blur-3xl opacity-50 group-hover:opacity-75 transition-opacity" />
              <div className="relative rounded-[2rem] border border-white/10 overflow-hidden shadow-[0_40px_120px_rgba(245,130,32,0.15)]">
                <Image src="/panelify-images/chatgpt-image-apr-28-2026-11_27_04-am.webp" alt="LPU Hi-tech Campus Architecture" width={1200} height={675} className="w-full object-cover transition-transform duration-700 group-hover:scale-105" priority />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-12">
                   <div className="text-left">
                      <h3 className="text-3xl font-bold text-white mb-2">A Campus Like No Other</h3>
                      <p className="text-white/70 max-w-xl">Sprawled across 600 acres, our campus is a vibrant ecosystem of learning, innovation, and cultural diversity.</p>
                   </div>
                </div>
              </div>
            </div>

            {/* Academic Categories */}
            <div className="mt-40 w-full">
              <div className="flex flex-col items-center mb-16">
                <h2 className="text-4xl font-bold mb-4">Discover Your Passion</h2>
                <p className="text-muted-foreground text-center max-w-2xl">Choose from 200+ programs across various disciplines, designed to meet the demands of the modern industry.</p>
              </div>
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                {categories.map((cat, i) => <div key={i} className="group relative h-[400px] rounded-3xl overflow-hidden border border-white/10">
                    <Image src={cat.image} alt={cat.title} fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent transition-opacity group-hover:opacity-90" />
                    <div className="absolute bottom-8 left-8 right-8 text-left">
                      <h4 className="text-2xl font-bold text-white mb-4">{cat.title}</h4>
                    </div>
                  </div>)}
              </div>
            </div>

            {/* Why LPU Section */}
            <div className="mt-40 grid gap-12 lg:grid-cols-2 items-center text-left">
               <div>
                  <h2 className="text-4xl font-bold mb-8 leading-tight">Why Choose <br /><span className="text-accent">Lovely Professional University?</span></h2>
                  <div className="space-y-6">
                     {[{
                  title: "Global Exposure",
                  desc: "Partnerships with 200+ foreign universities for exchange programs."
                }, {
                  title: "Placement Excellence",
                  desc: "Top MNCs visit every year with record-breaking packages."
                }, {
                  title: "Research Driven",
                  desc: "Dedicated research wings and innovation labs for students."
                }, {
                  title: "Holistic Development",
                  desc: "300+ clubs and societies for extracurricular excellence."
                }].map((item, i) => <div key={i} className="flex gap-6 p-4 rounded-2xl hover:bg-white/5 transition-colors group">
                           <div className="flex-shrink-0 h-12 w-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent font-bold text-xl group-hover:scale-110 transition-transform">
                              {i + 1}
                           </div>
                           <div>
                              <h5 className="text-lg font-bold mb-1">{item.title}</h5>
                              <p className="text-muted-foreground">{item.desc}</p>
                           </div>
                        </div>)}
                  </div>
               </div>
               <div className="relative rounded-3xl overflow-hidden aspect-square">
                   <Image src="/students_collaborating.png" alt="Students collaborating at LPU" fill className="object-cover" />
                  <div className="absolute inset-0 bg-accent/20 mix-blend-overlay" />
                  <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-3xl" />
               </div>
            </div>

            {/* CTA Section */}
            <div className="mt-40 w-full relative">
               <div className="absolute inset-0 rounded-[3rem] bg-gradient-primary opacity-10 blur-3xl" />
               <div className="relative p-12 md:p-20 rounded-[3rem] border border-white/10 bg-white/5 overflow-hidden">
                  <div className="max-w-2xl">
                     <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to start your journey?</h2>
                     <p className="text-xl text-muted-foreground mb-10">Join thousands of students from around the world and build a career you're proud of. Admissions are currently open for 2024-25.</p>
                     <div className="flex flex-col sm:flex-row gap-4">
                        <button className="h-14 px-10 rounded-full bg-accent text-white font-bold hover:shadow-[0_0_30px_rgba(245,130,32,0.5)] transition-all">Apply Now</button>
                        <button className="h-14 px-10 rounded-full border border-white/20 bg-transparent font-bold hover:bg-white/5 transition-all">Download Brochure</button>
                     </div>
                  </div>
                  <div className="hidden lg:block absolute top-0 right-0 w-1/3 h-full grayscale opacity-20 pointer-events-none">
                      <Image src="/cta_students.png" alt="Students" fill className="object-cover" />
                  </div>
               </div>
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </div>;
}