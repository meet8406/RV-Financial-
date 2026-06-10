import Link from 'next/link'
import { UserPlus, Shield, TrendingUp, Briefcase, Repeat, ArrowRight } from 'lucide-react'

export default function Services() {
  const services = [
    {
      icon: UserPlus,
      title: 'Recruitment of Financial Advisor',
      description: 'Career-focused onboarding, product knowledge, and support for aspiring financial advisors.',
    },
    {
      icon: Shield,
      title: 'Insurance',
      description: 'Life and general insurance guidance to protect families, health, vehicles, and assets.',
    },
    {
      icon: TrendingUp,
      title: 'AIF',
      description: 'Alternative Investment Fund access for eligible investors seeking diversified opportunities.',
    },
    {
      icon: Briefcase,
      title: 'PMS',
      description: 'Portfolio Management Services built around risk profile, goals, and disciplined reviews.',
    },
    {
      icon: Repeat,
      title: 'SIP',
      description: 'Systematic investment planning that helps clients invest regularly toward long-term goals.',
    },
  ]

  return (
    <section id="services" className="section-surface py-20 bg-background">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="reveal-up text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4 text-balance">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive financial services designed to meet every stage of your financial journey
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="reveal-scale interactive-card shine group relative p-8 rounded-xl border border-border bg-card hover:border-primary/50 transition-all duration-300"
                style={{ animationDelay: `${index * 90}ms` }}
              >
                {/* Icon Container */}
                <div className="mb-6 w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110">
                  <Icon size={28} className="text-primary" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-primary mb-2">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>

                {/* Hover Effect Line */}
                <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-primary to-accent rounded-full w-0 group-hover:w-full transition-all duration-300"></div>
              </div>
            )
          })}
        </div>

        {/* View All Services CTA */}
        <div className="reveal-up delay-200 text-center mt-16">
          <Link
            href="/services"
            className="shine inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium shadow-lg shadow-primary/15 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/20"
          >
            View All Services
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  )
}
