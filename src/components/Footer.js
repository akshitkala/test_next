import Link from "next/link";
export default function Footer() {
  return <footer className="border-t border-white/5 bg-black py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="h-6 w-6 rounded bg-gradient-primary transition-transform group-hover:scale-110" />
            <span className="text-lg font-bold tracking-tighter">NEXUS is now available</span>
          </Link>
          <p className="text-sm text-muted-foreground">© 2026 Nexus Technologies Inc. All rights reserved.</p>
          <div className="flex gap-6 text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">Twitter</a>
            <a href="#" className="hover:text-foreground transition-colors">GitHub</a>
            <a href="#" className="hover:text-foreground transition-colors">Discord</a>
          </div>
        </div>
      </div>
    </footer>;
}