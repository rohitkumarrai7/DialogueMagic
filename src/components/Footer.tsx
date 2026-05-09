import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-inverse-surface dark:bg-on-surface text-white py-20 border-t border-white/10 w-full mt-auto">
      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-12 gap-gutter max-w-[1280px] mx-auto px-6">
        {/* Brand Column */}
        <div className="lg:col-span-4 mb-10 lg:mb-0">
          <Link href="/" className="text-headline-lg font-headline-lg font-bold text-white mb-4 block">
            DialogueMagic
          </Link>
          <p className="font-body-md text-body-md text-surface-variant/70 max-w-sm mb-6">
            Building the next generation of AI agents that talk, sell, and support for forward-thinking brands.
          </p>
          <div className="flex space-x-4 text-surface-variant/70">
            <a href="#" className="hover:text-white transition-all duration-200">
              <span className="material-symbols-outlined">link</span>
            </a>
            <a href="#" className="hover:text-white transition-all duration-200">
              <span className="material-symbols-outlined">share</span>
            </a>
          </div>
        </div>

        {/* Links Column 1 */}
        <div className="lg:col-span-2 lg:col-start-7 mb-8 lg:mb-0">
          <h4 className="font-body-md text-body-md font-bold text-primary-fixed dark:text-primary-fixed-dim mb-4">Services</h4>
          <ul className="space-y-3 font-body-md text-body-md">
            <li><Link href="/services" className="text-surface-variant/70 hover:text-white transition-all duration-200">Real-Time Sales Chat</Link></li>
            <li><Link href="/services" className="text-surface-variant/70 hover:text-white transition-all duration-200">Voice AI</Link></li>
            <li><Link href="/services" className="text-surface-variant/70 hover:text-white transition-all duration-200">WhatsApp Automation</Link></li>
            <li><Link href="/services" className="text-surface-variant/70 hover:text-white transition-all duration-200">SaaS &amp; Web Dev</Link></li>
          </ul>
        </div>

        {/* Links Column 2 */}
        <div className="lg:col-span-2 mb-8 lg:mb-0">
          <h4 className="font-body-md text-body-md font-bold text-primary-fixed dark:text-primary-fixed-dim mb-4">Company</h4>
          <ul className="space-y-3 font-body-md text-body-md">
            <li><Link href="/about" className="text-surface-variant/70 hover:text-white transition-all duration-200">About Us</Link></li>
            <li><Link href="/work" className="text-surface-variant/70 hover:text-white transition-all duration-200">Our Work</Link></li>
            <li><Link href="/pricing" className="text-surface-variant/70 hover:text-white transition-all duration-200">Pricing</Link></li>
            <li><Link href="/contact" className="text-surface-variant/70 hover:text-white transition-all duration-200">Careers</Link></li>
          </ul>
        </div>

        {/* Links Column 3 */}
        <div className="lg:col-span-2">
          <h4 className="font-body-md text-body-md font-bold text-primary-fixed dark:text-primary-fixed-dim mb-4">Contact</h4>
          <ul className="space-y-3 font-body-md text-body-md">
            <li><Link href="/contact" className="text-surface-variant/70 hover:text-white transition-all duration-200">Book an Audit</Link></li>
            <li><Link href="/contact" className="text-surface-variant/70 hover:text-white transition-all duration-200">Support</Link></li>
            <li><a href="mailto:hello@dialoguemagic.com" className="text-surface-variant/70 hover:text-white transition-all duration-200">hello@dialoguemagic.com</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-[1280px] mx-auto px-6 mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center font-body-md text-body-md text-surface-variant/70 text-sm">
        <p>© 2026 DialogueMagic. All rights reserved. AI-Native Precision.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-white transition-all duration-200">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-all duration-200">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
