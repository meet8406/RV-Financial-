import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="section-surface fine-grid relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-secondary/30 via-background to-background pt-20">
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="pulse-soft absolute top-20 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="pulse-soft delay-300 absolute bottom-40 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="reveal-up inline-flex items-center gap-2 px-4 py-2 bg-secondary/60 rounded-full border border-border shadow-sm backdrop-blur">
              <div className="pulse-soft w-2 h-2 rounded-full bg-primary"></div>
              <span className="text-sm font-medium text-foreground">Your Trusted Financial Partner Since 2010</span>
            </div>

            <div className="reveal-up delay-100 space-y-4">
              <h1 className="text-5xl md:text-6xl font-bold text-primary leading-tight text-balance">
                Create Wealth With Wisdom
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
                From home loans to wealth management, we provide comprehensive financial services designed to help you achieve your dreams and secure your future.
              </p>
            </div>

            <div className="reveal-up delay-200 flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                href="/contact"
                className="shine inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold shadow-xl shadow-primary/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/25"
              >
                Get Started
                <ArrowRight size={20} />
              </Link>
              <Link
                href="/products"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full border-2 border-primary text-primary font-semibold transition-all duration-300 hover:-translate-y-1 hover:bg-primary/5 hover:shadow-lg hover:shadow-primary/10"
              >
                Explore Products
              </Link>
            </div>

            {/* Stats */}
            <div className="reveal-up delay-300 grid grid-cols-3 gap-6 pt-8">
              <div className="rounded-xl border border-border/70 bg-card/60 p-4 shadow-sm backdrop-blur transition-transform duration-300 hover:-translate-y-1">
                <p className="text-3xl font-bold text-primary">50K+</p>
                <p className="text-sm text-muted-foreground">Happy Clients</p>
              </div>
              <div className="rounded-xl border border-border/70 bg-card/60 p-4 shadow-sm backdrop-blur transition-transform duration-300 hover:-translate-y-1">
                <p className="text-3xl font-bold text-primary">₹2000Cr+</p>
                <p className="text-sm text-muted-foreground">Assets Managed</p>
              </div>
              <div className="rounded-xl border border-border/70 bg-card/60 p-4 shadow-sm backdrop-blur transition-transform duration-300 hover:-translate-y-1">
                <p className="text-3xl font-bold text-primary">15+</p>
                <p className="text-sm text-muted-foreground">Years Experience</p>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="reveal-scale delay-300 relative hidden md:block">
            <div className="float-soft relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 via-card/80 to-accent/20 border border-border p-8 shadow-2xl shadow-primary/15">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-accent/10"></div>
              
              {/* Placeholder Cards */}
              <div className="absolute top-8 right-8 w-32 h-20 bg-card rounded-lg shadow-lg p-3 border border-border transform hover:scale-105 transition-transform">
                <p className="text-xs font-semibold text-primary mb-2">Investment Returns</p>
                <p className="text-2xl font-bold text-foreground">12.5%</p>
              </div>
              
              <div className="absolute bottom-12 left-8 w-32 h-20 bg-card rounded-lg shadow-lg p-3 border border-border transform hover:scale-105 transition-transform">
                <p className="text-xs font-semibold text-primary mb-2">Loan Approved</p>
                <p className="text-xl font-bold text-foreground">₹50 Lakhs</p>
              </div>

              <div className="pulse-soft absolute top-1/3 left-1/2 transform -translate-x-1/2 w-24 h-24 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white text-3xl font-bold shadow-2xl shadow-primary/20">
                ₹
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
