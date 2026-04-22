import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Admissions() {
  const steps = [
    { title: "Select Program", desc: "Choose your desired program from our list of 200+ courses." },
    { title: "Register Online", desc: "Create your account on the LPU AdMIT portal and fill the application." },
    { title: "LPUNEST", desc: "Take our national entrance and scholarship test for admission and benefits." },
    { title: "Submit Documents", desc: "Upload necessary academic documents for verification." },
    { title: "Pay Fee", desc: "Pay the initial registration fee to secure your seat." },
    { title: "Welcome to LPU", desc: "Join the induction program and start your university life." },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden selection:bg-accent/30 selection:text-white">
      <Navbar />
      <div className="hero-mesh" />

      <main className="relative pt-32 pb-20 md:pt-48 md:pb-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-20 text-center">
            <h1 className="text-5xl font-extrabold tracking-tight md:text-7xl lg:text-8xl mb-8">
              Admissions <span className="text-gradient">2024</span>
            </h1>
            <p className="mx-auto max-w-3xl text-lg text-muted-foreground md:text-xl">
              Join the cohort of ambitious students from across 50+ countries. 
              Secure your future at one of India's top-ranked universities.
            </p>
          </div>

          <div className="grid gap-12 lg:grid-cols-3">
            <div className="lg:col-span-2 space-y-8">
              <div className="p-10 rounded-3xl border border-white/5 bg-white/5">
                <h2 className="text-3xl font-bold mb-10">Application Process</h2>
                <div className="grid gap-8 sm:grid-cols-2">
                   {steps.map((step, i) => (
                      <div key={i} className="relative pl-12 group">
                         <div className="absolute left-0 top-0 h-8 w-8 rounded-full bg-accent flex items-center justify-center text-white font-bold text-sm shadow-[0_0_15px_rgba(245,130,32,0.5)]">
                            {i+1}
                         </div>
                         <h4 className="text-lg font-bold mb-2 group-hover:text-accent transition-colors">{step.title}</h4>
                         <p className="text-muted-foreground text-sm">{step.desc}</p>
                      </div>
                   ))}
                </div>
              </div>

              <div className="p-10 rounded-3xl bg-gradient-primary text-white">
                 <h2 className="text-3xl font-bold mb-4">Scholarships worth ₹100+ Cr</h2>
                 <p className="opacity-90 mb-8 text-lg">LPU offers one of the largest scholarship schemes in India to reward merit and talent.</p>
                 <button className="bg-white text-accent font-bold py-3 px-8 rounded-full hover:bg-opacity-90 transition-all">Check Eligibility</button>
              </div>
            </div>

            <div className="space-y-8">
               <div className="p-8 rounded-3xl border border-white/5 bg-white/5">
                  <h3 className="text-xl font-bold mb-6">Important Dates</h3>
                  <div className="space-y-6">
                     <div className="flex justify-between border-b border-white/10 pb-4">
                        <span className="text-muted-foreground">Application Start</span>
                        <span className="font-bold text-accent">Open</span>
                     </div>
                     <div className="flex justify-between border-b border-white/10 pb-4">
                        <span className="text-muted-foreground">LPUNEST Phase 1</span>
                        <span className="font-bold">20 Jan - 05 Feb</span>
                     </div>
                     <div className="flex justify-between border-b border-white/10 pb-4">
                        <span className="text-muted-foreground">Scholarship Deadline</span>
                        <span className="font-bold">15 March</span>
                     </div>
                  </div>
               </div>

               <div className="p-8 rounded-3xl border border-white/5 bg-white/5 flex flex-col items-center text-center">
                  <div className="h-16 w-16 rounded-full bg-accent/20 flex items-center justify-center mb-6">
                     <svg className="h-8 w-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                     </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Need Help?</h3>
                  <p className="text-muted-foreground text-sm mb-6">Talk to our expert counselors for guidance on admissions.</p>
                  <button className="w-full py-3 rounded-xl border border-white/10 hover:bg-white/5 transition-all font-semibold">Request Call Back</button>
               </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
