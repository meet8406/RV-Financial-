import Link from 'next/link'
import { Facebook, Twitter, Linkedin, Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-accent text-accent-foreground relative overflow-hidden">
      <div className="pulse-soft absolute -right-16 -top-20 h-72 w-72 rounded-full bg-primary/20 blur-3xl"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center shadow-lg shadow-primary/20">
                <span className="text-primary-foreground font-bold text-lg">RV</span>
              </div>
              <div>
                <h3 className="font-bold">RV Financial</h3>
                <p className="text-xs opacity-75">Your Financial Partner</p>
              </div>
            </div>
            <p className="text-sm opacity-75 leading-relaxed">
              Committed to providing comprehensive financial solutions for 15+ years.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-primary transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-primary transition-colors">Services</Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-primary transition-colors">Products</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-primary transition-colors">About Us</Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold mb-4">Products</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/contact?product=home-loan" className="hover:text-primary transition-colors">Home Loan</Link></li>
              <li><Link href="/contact?product=personal-loan" className="hover:text-primary transition-colors">Personal Loan</Link></li>
              <li><Link href="/contact?product=life-insurance" className="hover:text-primary transition-colors">Life Insurance</Link></li>
              <li><Link href="/contact?product=mutual-fund" className="hover:text-primary transition-colors">Mutual Funds</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex gap-2">
                <Phone size={16} className="flex-shrink-0 mt-0.5" />
                <span>1800-123-4567</span>
              </li>
              <li className="flex gap-2">
                <Mail size={16} className="flex-shrink-0 mt-0.5" />
                <span>hello@rvfinancial.com</span>
              </li>
              <li className="flex gap-2">
                <MapPin size={16} className="flex-shrink-0 mt-0.5" />
                <span>New Delhi, India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-accent-foreground/20 py-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Social Links */}
            <div>
              <p className="text-sm font-semibold mb-4">Follow Us</p>
              <div className="flex gap-4">
                <Link href="#" className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary/20 transition-all duration-300 hover:-translate-y-1 hover:bg-primary/40">
                  <Facebook size={18} />
                </Link>
                <Link href="#" className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary/20 transition-all duration-300 hover:-translate-y-1 hover:bg-primary/40">
                  <Twitter size={18} />
                </Link>
                <Link href="#" className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary/20 transition-all duration-300 hover:-translate-y-1 hover:bg-primary/40">
                  <Linkedin size={18} />
                </Link>
              </div>
            </div>

            {/* Copyright */}
            <div className="text-right text-sm opacity-75">
              <p>© 2010-2024 RV Financial Services. All rights reserved.</p>
            </div>
          </div>
        </div>

        {/* Compliance */}
        <div className="mt-8 pt-8 border-t border-accent-foreground/20 text-xs opacity-75 text-center space-y-2">
          <p>Registered with Securities and Exchange Board of India (SEBI)</p>
          <p>Risk Disclosure: Investments in financial products carry inherent risks. Please consult our advisors before investing.</p>
        </div>
      </div>
    </footer>
  )
}
