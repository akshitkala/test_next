import content from "../../content.json";
import Link from "next/link";
export default function Footer() {
  return <footer className="border-t border-white/5 bg-black py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="h-6 w-6 rounded bg-gradient-primary transition-transform group-hover:scale-110" />
            <span className="text-lg font-bold tracking-tighter">{content.navbar.navbar_nexus_text}</span>
          </Link>
          <p className="text-sm text-muted-foreground">{content.footer.footer_copyright_text}</p>
          <div className="flex gap-6 text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">{content.footer.footer_social_link_twitter}</a>
            <a href="#" className="hover:text-foreground transition-colors">{content.footer.footer_social_link_github}</a>
            <a href="#" className="hover:text-foreground transition-colors">{content.footer.footer_social_link_discord}</a>
          </div>
        </div>
      </div>
    </footer>;
}