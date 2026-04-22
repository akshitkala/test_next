import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Company() {
  const stats = [
    { label: "Founded", value: "2005" },
    { label: "Alumni", value: "1,00,000+" },
    { label: "Global Reach", value: "50+ Countries" },
    { label: "Placements", value: "1000+ Brands" },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden selection:bg-accent/30 selection:text-white">
      <Navbar />
      <div className="hero-mesh" />
      
      <main className="relative pt-32 pb-20 md:pt-48 md:pb-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="mb-4 text-sm font-bold uppercase tracking-widest text-accent">Our Legacy</h2>
              <h1 className="mb-8 text-5xl font-extrabold tracking-tight md:text-7xl">
                Defining the <br />
                <span className="text-gradient">Future of Education.</span>
              </h1>
              <p className="mb-8 text-xl leading-relaxed text-muted-foreground">
                Established in 2005, Lovely Professional University has rapidly grown into 
                one of India's most prestigious private universities.
              </p>
              <p className="mb-10 text-lg leading-relaxed text-muted-foreground">
                Our mission is to provide world-class education that is accessible, 
                innovative, and deeply connected to the needs of the global industry.
              </p>
              
              <div className="flex flex-wrap gap-8">
                {stats.map((stat, i) => (
                  <div key={i}>
                    <div className="text-4xl font-bold">{stat.value}</div>
                    <div className="text-sm text-muted-foreground uppercase tracking-widest mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div className="rounded-3xl border border-white/10 overflow-hidden aspect-square group">
                <Image 
                  src="https://images.unsplash.com/photo-1541339907198-e08756ebafe3?w=800&q=80" 
                  alt="LPU Campus" 
                  width={500} 
                  height={500} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]" 
                />
              </div>
              <div className="rounded-3xl border border-white/10 overflow-hidden aspect-square group mt-12 sm:mt-24">
                <Image 
                  src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80" 
                  alt="Students" 
                  width={500} 
                  height={500} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]" 
                />
              </div>
            </div>
          </div>

          <div className="mt-32 relative rounded-[2.5rem] overflow-hidden border border-white/10 h-80">
            <Image 
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1400&q=80" 
              alt="The LPU family" 
              fill 
              className="object-cover" 
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
            <div className="absolute inset-0 flex flex-col justify-center px-12">
              <span className="text-accent text-sm font-bold uppercase tracking-widest mb-3">Our People</span>
              <h2 className="text-4xl font-extrabold text-white max-w-md">A community of dreamers and achievers.</h2>
            </div>
          </div>

          <div className="mt-32">
            <h2 className="mb-16 text-3xl font-bold text-center">Guided by Our Values</h2>
            <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Excellence in Teaching",
                  desc: "We strive to deliver the highest quality of education through innovative pedagogy and expert faculty."
                },
                {
                  title: "Student Success",
                  desc: "Every decision we make is centered around the growth and career success of our students."
                },
                {
                  title: "Global Citizenship",
                  desc: "We prepare our students to lead and succeed in a diverse, globalized world."
                }
              ].map((value, i) => (
                <div key={i} className="border-l border-white/10 pl-8">
                  <h3 className="mb-4 text-xl font-bold">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}