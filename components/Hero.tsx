import Link from 'next/link'
import { ArrowRight, BriefcaseBusiness, ShieldCheck, TrendingUp, Repeat, Users } from 'lucide-react'

export default function Hero() {
  const highlights = [
    { label: 'Recruitment', value: 'Advisor Network', icon: Users },
    { label: 'Insurance', value: 'Protection Planning', icon: ShieldCheck },
    { label: 'AIF', value: 'Alternative Strategies', icon: TrendingUp },
    { label: 'PMS', value: 'Managed Portfolios', icon: BriefcaseBusiness },
    { label: 'SIP', value: 'Monthly Discipline', icon: Repeat },
  ]

  return (
    <section className="section-surface hero-grid relative min-h-screen overflow-hidden bg-background pt-20">
      <div className="absolute inset-0 pointer-events-none">
        <div className="hero-sweep absolute inset-0"></div>
      </div>

      <div className="relative flex min-h-[calc(100vh-5rem)] w-full items-center">
        <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_0.92fr] lg:px-8">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="reveal-up inline-flex items-center gap-2 rounded-full border border-border bg-card/85 px-4 py-2 shadow-sm backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-[color:var(--chart-4)]"></span>
              <span className="text-sm font-medium text-foreground">Your Trusted Financial Partner Since 2010</span>
            </div>

            <div className="reveal-up delay-100 space-y-4">
              <h1 className="max-w-3xl text-5xl font-bold leading-tight text-primary text-balance md:text-6xl">
                Create Wealth With Wisdom
              </h1>
              <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">
                From recruitment of financial advisors to Insurance, AIF, PMS, and SIP solutions, we provide focused financial services designed to help you grow with confidence.
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
            <div className="reveal-up delay-300 grid grid-cols-3 gap-3 pt-4 sm:gap-6">
              <div className="rounded-lg border border-border/70 bg-card/80 p-4 shadow-sm backdrop-blur transition-transform duration-300 hover:-translate-y-1">
                <p className="text-3xl font-bold text-primary">50K+</p>
                <p className="text-sm text-muted-foreground">Happy Clients</p>
              </div>
              <div className="rounded-lg border border-border/70 bg-card/80 p-4 shadow-sm backdrop-blur transition-transform duration-300 hover:-translate-y-1">
                <p className="text-3xl font-bold text-primary">₹2000Cr+</p>
                <p className="text-sm text-muted-foreground">Assets Managed</p>
              </div>
              <div className="rounded-lg border border-border/70 bg-card/80 p-4 shadow-sm backdrop-blur transition-transform duration-300 hover:-translate-y-1">
                <p className="text-3xl font-bold text-primary">15+</p>
                <p className="text-sm text-muted-foreground">Years Experience</p>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="reveal-scale delay-300 relative hidden lg:block">
            <div className="hero-console rounded-xl border border-border bg-card/90 p-6 shadow-2xl shadow-primary/15 backdrop-blur">
              <div className="mb-6 flex items-start justify-between gap-6 border-b border-border pb-5">
                <div>
                  <p className="text-sm font-semibold text-muted-foreground">Service Desk</p>
                  <h2 className="mt-1 text-2xl font-bold text-primary">Financial Growth Console</h2>
                </div>
                <div className="rounded-lg border border-border bg-secondary/70 px-4 py-3 text-right">
                  <p className="text-xs font-semibold text-muted-foreground">Advisor Call</p>
                  <p className="text-lg font-bold text-foreground">Ready</p>
                </div>
              </div>

              <div className="space-y-3">
                {highlights.map((item, index) => {
                  const Icon = item.icon
                  return (
                    <div
                      key={item.label}
                      className="hero-service-row flex items-center gap-4 rounded-lg border border-border bg-background/70 p-4"
                      style={{ animationDelay: `${index * 130}ms` }}
                    >
                      <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <Icon size={22} />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center justify-between gap-4">
                          <p className="font-semibold text-foreground">{item.label}</p>
                          <p className="text-xs font-medium text-muted-foreground">{item.value}</p>
                        </div>
                        <div className="mt-3 h-2 overflow-hidden rounded-full bg-secondary">
                          <div
                            className="hero-progress h-full rounded-full"
                            style={{
                              width: `${68 + index * 6}%`,
                              animationDelay: `${200 + index * 150}ms`,
                            }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>

              <div className="mt-6 grid grid-cols-3 gap-3">
                {['AIF', 'PMS', 'SIP'].map((label, index) => (
                  <div key={label} className="rounded-lg border border-border bg-secondary/50 p-4">
                    <p className="text-xs font-semibold text-muted-foreground">{label}</p>
                    <p className="mt-2 text-xl font-bold text-primary">{index === 0 ? 'Curated' : index === 1 ? 'Managed' : 'Monthly'}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
