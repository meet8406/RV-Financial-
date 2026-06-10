import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { UserPlus, Shield, TrendingUp, Briefcase, Repeat } from 'lucide-react'
import Link from 'next/link'

export default function Services() {
  const services = [
    {
      icon: UserPlus,
      title: 'Recruitment of Financial Advisor',
      description: 'Advisor recruitment support for candidates who want to grow in financial services.',
      features: ['Advisor Onboarding', 'Product Training', 'Client Handling Support', 'Career Growth'],
    },
    {
      icon: Shield,
      title: 'Insurance',
      description: 'Protection planning across life and general insurance needs.',
      features: ['Life Cover', 'General Insurance', 'Plan Guidance', 'Claim Support'],
    },
    {
      icon: TrendingUp,
      title: 'AIF',
      description: 'Alternative Investment Fund guidance for suitable eligible investors.',
      features: ['Fund Selection', 'Risk Profiling', 'Diversification', 'Professional Review'],
    },
    {
      icon: Briefcase,
      title: 'PMS',
      description: 'Portfolio Management Services aligned with goals, risk profile, and review discipline.',
      features: ['Managed Portfolio', 'Asset Allocation', 'Regular Monitoring', 'Expert Advice'],
    },
    {
      icon: Repeat,
      title: 'SIP',
      description: 'Systematic investment planning for disciplined and long-term wealth creation.',
      features: ['Monthly Investing', 'Goal Planning', 'Flexible Amounts', 'Long-Term Compounding'],
    },
  ]

  return (
    <main className="page-fade">
      <Navigation />
      
      {/* Services Header */}
      <section className="section-surface fine-grid bg-gradient-to-b from-secondary to-background pt-20 pb-12">
        <div className="reveal-up relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4 text-balance">
            Our Comprehensive Services
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We offer a complete range of financial services designed to meet all your financial needs and aspirations.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-surface py-16">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <div
                  key={service.title}
                  className="reveal-scale interactive-card shine group bg-card rounded-xl p-8 border border-border hover:border-primary/50 transition-all"
                  style={{ animationDelay: `${index * 90}ms` }}
                >
                  <div className="mb-4">
                    <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  <div className="space-y-2">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-sm text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Link
                    href="/contact"
                    className="shine inline-block mt-6 px-6 py-2 bg-primary text-primary-foreground rounded-lg shadow-lg shadow-primary/15 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary/20"
                  >
                    Enquire Now
                  </Link>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground py-16 relative overflow-hidden">
        <div className="pulse-soft absolute -left-12 top-0 h-72 w-72 rounded-full bg-white/10 blur-3xl"></div>
        <div className="reveal-up relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4 text-balance">Ready to Explore Our Services?</h2>
          <p className="text-lg mb-8 opacity-90">
            Get in touch with our financial experts today for personalized consultation.
          </p>
          <Link
            href="/contact"
            className="shine inline-flex items-center justify-center px-8 py-3 bg-primary-foreground text-primary font-medium rounded-lg shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
          >
            Contact Us Today
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
