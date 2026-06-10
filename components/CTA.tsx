import Link from 'next/link'
import { ArrowRight, Phone, Mail } from 'lucide-react'

export default function CTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-primary/95 via-primary to-accent/95 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="pulse-soft absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="pulse-soft delay-300 absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="reveal-up relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4 text-balance">
          Ready to Achieve Your Financial Goals?
        </h2>
        <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto mb-8 leading-relaxed">
          Join thousands of satisfied clients who've trusted RV Financial Services with their financial journey. Let's build your wealth together.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="shine inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-primary-foreground text-primary font-semibold shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
          >
            Get Started Today
            <ArrowRight size={20} />
          </Link>
          <Link
            href="tel:+919175367610"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border-2 border-primary-foreground text-primary-foreground font-semibold transition-all duration-300 hover:-translate-y-1 hover:bg-primary-foreground/10"
          >
            <Phone size={20} />
            Call Us Now
          </Link>
        </div>

        {/* Contact Info */}
        <div className="mt-12 grid md:grid-cols-2 gap-6">
          <div className="flex items-center justify-center gap-3 text-primary-foreground rounded-xl bg-white/10 p-4 backdrop-blur">
            <Phone size={20} />
            <span>+91 91753 67610</span>
          </div>
          <div className="flex items-center justify-center gap-3 text-primary-foreground rounded-xl bg-white/10 p-4 backdrop-blur">
            <Mail size={20} />
            <span>RVfinancialservices111@gmail.com</span>
          </div>
        </div>
      </div>
    </section>
  )
}
