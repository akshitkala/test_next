import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Features() {
  const features = [
    {
      title: "Smart Classrooms",
      description: "Hi-tech classrooms equipped with advanced audio-visual aids for an immersive learning experience.",
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: "Research Labs",
      description: "State-of-the-art laboratories for engineering, sciences, and multi-disciplinary research.",
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
    },
    {
      title: "Digital Library",
      description: "Access to millions of e-books, journals, and international databases 24/7.",
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
    },
    {
      title: "Sports Stadiums",
      description: "International standard sports facilities for athletics, cricket, football, and more.",
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: "Safe Campus",
      description: "CCTV surveillance and 24/7 security patrol ensuring a safe environment for all.",
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      title: "On-campus Hospital",
      description: "Dedicated medical facility with resident doctors and emergency services.",
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
    },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden selection:bg-accent/30 selection:text-white">
      <Navbar />
      <div className="hero-mesh" />
      
      <main className="relative pt-32 pb-20 md:pt-48 md:pb-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-sm font-bold uppercase tracking-widest text-accent">Our Facilities</h2>
            <h1 className="mb-6 text-4xl font-extrabold tracking-tight md:text-6xl text-gradient">
              A World-Class Infrastructure <br /> for a World-Class Education.
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Explore the cutting-edge facilities that make LPU a hub of innovation and excellence.
            </p>
          </div>

          <div className="relative mb-16 rounded-[2.5rem] overflow-hidden border border-white/10 h-72">
            <Image 
              src="https://images.unsplash.com/photo-1541339907198-e08756ebafe3?w=1400&q=80" 
              alt="LPU Infrastructure" 
              fill 
              className="object-cover" 
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
            <div className="absolute inset-0 flex flex-col justify-center px-12">
              <span className="text-accent text-sm font-bold uppercase tracking-widest mb-3">Campus Infrastructure</span>
              <h2 className="text-3xl font-extrabold text-white max-w-lg">One of the largest and most advanced campuses in India.</h2>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, i) => (
              <div key={i} className="group relative rounded-3xl border border-white/5 bg-white/5 p-8 transition-all hover:bg-white/[0.08] hover:translate-y-[-4px]">
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/10 text-accent transition-transform group-hover:scale-110">
                  {feature.icon}
                </div>
                <h3 className="mb-3 text-2xl font-bold">{feature.title}</h3>
                <p className="leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>
                <div className="mt-6 flex items-center text-sm font-semibold text-accent opacity-0 transition-opacity group-hover:opacity-100">
                  Learn More
                  <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-32">
            <h2 className="mb-12 text-3xl font-bold text-center">See It in Action</h2>
            <div className="grid gap-6 lg:grid-cols-3">
              <div className="lg:col-span-2 group relative rounded-3xl overflow-hidden border border-white/10 aspect-video">
                <Image 
                  src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200&q=80" 
                  alt="LPU Campus View" 
                  fill 
                  className="object-cover transition-transform duration-500 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <span className="absolute bottom-5 left-5 text-white font-bold text-lg">Main Academic Block</span>
              </div>
              <div className="group relative rounded-3xl overflow-hidden border border-white/10 aspect-video lg:aspect-auto">
                <Image 
                  src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&q=80" 
                  alt="Student Center" 
                  fill 
                  className="object-cover transition-transform duration-500 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <span className="absolute bottom-5 left-5 text-white font-bold text-lg">Student Center</span>
              </div>
            </div>
          </div>

          <div className="mt-32 rounded-[2.5rem] bg-gradient-to-b from-white/[0.05] to-transparent p-12 text-center border border-white/5">
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">Interested in a campus visit?</h2>
            <p className="mb-10 text-muted-foreground">Book a virtual or physical campus tour today.</p>
            <button className="rounded-full bg-accent px-8 py-4 font-bold text-white transition-transform hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(245,130,32,0.3)]">Book Tour</button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}