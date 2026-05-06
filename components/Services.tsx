import Link from 'next/link'
import { Home, DollarSign, Heart, Shield, TrendingUp, Briefcase, ArrowRight } from 'lucide-react'

export default function Services() {
  const services = [
    {
      icon: Home,
      title: 'Home Loans',
      description: 'Competitive rates and flexible terms to make your dream home a reality with minimal documentation.',
    },
    {
      icon: DollarSign,
      title: 'Personal Loans',
      description: 'Quick approval personal loans with transparent processes and customer-friendly disbursement.',
    },
    {
      icon: Heart,
      title: 'Life Insurance',
      description: 'Comprehensive life insurance plans designed to protect your family\'s financial future.',
    },
    {
      icon: Shield,
      title: 'General Insurance',
      description: 'Protect your valuable assets with our comprehensive general insurance coverage options.',
    },
    {
      icon: TrendingUp,
      title: 'Investments',
      description: 'Expert investment guidance and portfolio management for long-term wealth creation.',
    },
    {
      icon: Briefcase,
      title: 'Wealth Management',
      description: 'Personalized wealth management services tailored to your financial goals and risk profile.',
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
