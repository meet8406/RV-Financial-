import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { BarChart3, Home, Award, Shield, TrendingUp, Wallet } from 'lucide-react'
import Link from 'next/link'

export default function Services() {
  const services = [
    {
      icon: Home,
      title: 'Home Loan',
      description: 'Affordable home loans with flexible repayment terms and competitive interest rates for your dream home.',
      features: ['Low Interest Rates', 'Fast Approval', 'Flexible Tenure', 'Easy Documentation'],
    },
    {
      icon: Wallet,
      title: 'Personal Loan',
      description: 'Quick personal loans without collateral for all your financial needs with minimal documentation.',
      features: ['Instant Approval', 'No Collateral', 'Quick Disbursal', 'Easy EMI Options'],
    },
    {
      icon: Shield,
      title: 'Life Insurance',
      description: 'Comprehensive life insurance plans to protect your family\'s financial future.',
      features: ['Family Protection', 'Cashless Claims', 'Multiple Plans', 'Tax Benefits'],
    },
    {
      icon: Award,
      title: 'General Insurance',
      description: 'Complete insurance solutions for your health, vehicle, and property needs.',
      features: ['24/7 Support', 'Quick Settlement', 'Comprehensive Coverage', 'Online Claims'],
    },
    {
      icon: TrendingUp,
      title: 'Investment Advisory',
      description: 'Expert investment guidance to grow your wealth through smart investment decisions.',
      features: ['Portfolio Planning', 'Risk Assessment', 'Regular Monitoring', 'Expert Advice'],
    },
    {
      icon: BarChart3,
      title: 'Wealth Management',
      description: 'Holistic wealth management solutions for long-term financial goals and prosperity.',
      features: ['Asset Allocation', 'Tax Planning', 'Retirement Planning', 'Estate Planning'],
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
