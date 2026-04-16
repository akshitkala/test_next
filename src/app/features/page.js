import content from "../../../content.json";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
export default function Features() {
  const features = [{
    title: "Real-time Analytics in real time",
    description: "Monitor your platform's performance with granular, real-time data visualization and insights.",
    icon: <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
  }, {
    title: "Edge Computing",
    description: "Deploy your logic closer to your users for ultra-low latency and superior performance.",
    icon: <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
  }, {
    title: "Global CDN",
    description: "Leverage our lightning-fast content delivery network to serve assets from over 300 locations worldwide.",
    icon: <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
  }, {
    title: "Automated Scaling",
    description: "Our infrastructure dynamically adapts to your traffic patterns, ensuring 100% uptime during spikes.",
    icon: <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
  }, {
    title: "Advanced Security",
    description: "DDoS protection, automated SSL, and advanced threat detection built into every request.",
    icon: <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
  }, {
    title: "Developer API",
    description: "Extensive, well-documented GraphQL and REST APIs to integrate Nexus into your existing workflow.",
    icon: <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
  }];
  return <div className="relative min-h-screen overflow-hidden selection:bg-accent/30 selection:text-white">
      <Navbar />
      <div className="hero-mesh" />
      
      <main className="relative pt-32 pb-20 md:pt-48 md:pb-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-sm font-bold uppercase tracking-widest text-accent">{content.features.features_heading_small}</h2>
            <h1 className="mb-6 text-4xl font-extrabold tracking-tight md:text-6xl text-gradient">
              Everything you need <br /> to build the future.
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">{content.features.features_description}</p>
          </div>

          {/* Feature highlight banner — Unsplash external link */}
          <div className="relative mb-16 rounded-[2.5rem] overflow-hidden border border-white/10 h-72">
            <Image src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1400&q=80" alt={content.features.feature_highlight_banner_alt} fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
            <div className="absolute inset-0 flex flex-col justify-center px-12">
              <span className="text-accent text-sm font-bold uppercase tracking-widest mb-3">{content.features.feature_highlight_banner_category}</span>
              <h2 className="text-3xl font-extrabold text-white max-w-lg">{content.features.feature_highlight_banner_title}</h2>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, i) => <div key={i} className="group relative rounded-3xl border border-white/5 bg-white/5 p-8 transition-all hover:bg-white/[0.08] hover:translate-y-[-4px]">
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/10 text-accent transition-transform group-hover:scale-110">
                  {feature.icon}
                </div>
                <h3 className="mb-3 text-2xl font-bold">{feature.title}</h3>
                <p className="leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>
                <div className="mt-6 flex items-center text-sm font-semibold text-accent opacity-0 transition-opacity group-hover:opacity-100">{content.features.feature_learn_more_link}<svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>)}
          </div>

          {/* Screenshot showcase — public folder + Unsplash */}
          <div className="mt-32">
            <h2 className="mb-12 text-3xl font-bold text-center">{content.features.screenshot_showcase_heading}</h2>
            <div className="grid gap-6 lg:grid-cols-3">
              {/* Public folder image */}
              <div className="lg:col-span-2 group relative rounded-3xl overflow-hidden border border-white/10 aspect-video">
                <Image src="/ChatGPT Image Mar 29, 2026, 02_13_14 AM.png" alt={content.features.platform_overview_image_alt} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <span className="absolute bottom-5 left-5 text-white font-bold text-lg">{content.features.platform_overview_label}</span>
              </div>
              {/* Unsplash external image */}
              <div className="group relative rounded-3xl overflow-hidden border border-white/10 aspect-video lg:aspect-auto">
                <Image src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=600&q=80" alt={content.features.real_time_data_image_alt} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <span className="absolute bottom-5 left-5 text-white font-bold text-lg">{content.features.real_time_data_label}</span>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-32 rounded-[2.5rem] bg-gradient-to-b from-white/[0.05] to-transparent p-12 text-center border border-white/5">
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">{content.features.cta_heading}</h2>
            <p className="mb-10 text-muted-foreground">{content.features.cta_description}</p>
            <button className="rounded-full bg-foreground px-8 py-4 font-bold text-background transition-transform hover:scale-105 active:scale-95">{content.features.cta_button_text}</button>
          </div>
        </div>
      </main>

      <Footer />
    </div>;
}