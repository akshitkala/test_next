import content from "../../content.json";
import Link from "next/link";
export default function Footer() {
  return <footer className="border-t border-white/5 bg-black py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 md:grid-cols-4 mb-12">
           <div className="md:col-span-2">
              <Link href="/" className="flex items-center gap-2 group mb-6">
                <div className="h-6 w-6 rounded bg-gradient-primary transition-transform group-hover:scale-110 flex items-center justify-center text-[8px] text-white font-bold">LPU</div>
                <span className="text-xl font-bold tracking-tighter uppercase">{content.navbar.navbar_university_name}</span>
              </Link>
              <p className="text-muted-foreground max-w-sm">{content.footer.footer_description}</p>
           </div>
           <div>
              <h4 className="font-bold mb-6">{content.footer.footer_quick_links}</h4>
              <ul className="space-y-4 text-sm text-muted-foreground">
                 <li><Link href="/about" className="hover:text-accent">{content.footer.footer_about_us}</Link></li>
                 <li><Link href="/academics" className="hover:text-accent">{content.navbar.navbar_academics}</Link></li>
                 <li><Link href="/admissions" className="hover:text-accent">{content.navbar.navbar_admissions}</Link></li>
                 <li><Link href="/campus-life" className="hover:text-accent">{content.navbar.navbar_campus_life}</Link></li>
              </ul>
           </div>
           <div>
              <h4 className="font-bold mb-6">{content.footer.footer_contact}</h4>
              <ul className="space-y-4 text-sm text-muted-foreground">
                 <li>{content.footer.footer_address}</li>
                 <li>Email: admissions@lpu.co.in</li>
                 <li>Phone: +91-1824-404404</li>
              </ul>
           </div>
        </div>
        <div className="flex flex-col items-center justify-between gap-6 border-t border-white/5 pt-12 md:flex-row">
          <p className="text-sm text-muted-foreground">
            © 2026 Lovely Professional University. All rights reserved.
          </p>
          <div className="flex gap-6 text-muted-foreground text-sm font-medium">
            <a href="#" className="hover:text-accent transition-colors">{content.footer.footer_facebook}</a>
            <a href="#" className="hover:text-accent transition-colors">{content.footer.footer_instagram}</a>
            <a href="#" className="hover:text-accent transition-colors">{content.footer.footer_linkedin}</a>
            <a href="#" className="hover:text-accent transition-colors">{content.footer.footer_youtube}</a>
          </div>
        </div>
      </div>
    </footer>;
}