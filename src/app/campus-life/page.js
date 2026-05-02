import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
export default function CampusLife() {
  const activities = [{
    title: "One World",
    desc: "Our annual international mega fest showcasing cultural diversity.",
    image: "/cultural_festival.png"
  }, {
    title: "Youth Vibe",
    desc: "Asia's largest youth festival with competitions and star nights.",
    image: "/youth_festival.png"
  }, {
    title: "Sports Complex",
    desc: "Olympic-sized swimming pools, indoor stadiums, and high-end gyms.",
    image: "/sports_complex.png"
  }, {
    title: "Food Courts",
    desc: "A variety of cuisines from across the world in our campus food courts.",
    image: "/food_court.png"
  }];
  return <div className="relative min-h-screen overflow-hidden selection:bg-accent/30 selection:text-white">
      <Navbar />
      <div className="hero-mesh" />

      <main className="relative pt-32 pb-20 md:pt-48 md:pb-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-20 text-center">
            <h1 className="text-5xl font-extrabold tracking-tight md:text-7xl lg:text-8xl mb-8">
              Campus <span className="text-gradient">Vibe</span>
            </h1>
            <p className="mx-auto max-w-3xl text-lg text-muted-foreground md:text-xl">
              Life at LPU is more than just classrooms. It&apos;s about discovering yourself, 
              making lifelong friends, and creating memories that last forever.
            </p>
          </div>

          <div className="grid gap-12 sm:grid-cols-2">
            {activities.map((act, i) => <div key={i} className="group relative rounded-[2.5rem] overflow-hidden aspect-[16/10] border border-white/10">
                <Image src={act.image} alt={act.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                <div className="absolute bottom-10 left-10 right-10">
                   <h3 className="text-3xl font-bold text-white mb-3">{act.title}</h3>
                   <p className="text-white/70 max-w-sm">{act.desc}</p>
                </div>
              </div>)}
          </div>

          <div className="mt-32 grid lg:grid-cols-3 gap-8">
             <div className="p-10 rounded-3xl border border-white/5 bg-white/5 flex flex-col items-center text-center">
                <div className="text-4xl mb-6">🏢</div>
                <h4 className="text-xl font-bold mb-4">Residential Facilities</h4>
                <p className="text-muted-foreground text-sm">State-of-the-art hostels with all modern amenities for a comfortable stay.</p>
             </div>
             <div className="p-10 rounded-3xl border border-white/5 bg-white/5 flex flex-col items-center text-center">
                <div className="text-4xl mb-6">🏥</div>
                <h4 className="text-xl font-bold mb-4">Health & Safety</h4>
                <p className="text-muted-foreground text-sm">24/7 medical services and high-level security for student safety.</p>
             </div>
             <div className="p-10 rounded-3xl border border-white/5 bg-white/5 flex flex-col items-center text-center">
                <div className="text-4xl mb-6">🤝</div>
                <h4 className="text-xl font-bold mb-4">300+ Clubs</h4>
                <p className="text-muted-foreground text-sm">Follow your passion, from robotics to music, in our various student clubs.</p>
             </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>;
}