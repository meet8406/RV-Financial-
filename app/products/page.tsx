import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { UserPlus, Shield, TrendingUp, Briefcase, Repeat } from 'lucide-react'
import Link from 'next/link'

export default function Products() {
  const products = [
    {
      icon: UserPlus,
      title: 'Recruitment of Financial Advisor',
      category: 'Recruitment',
      description: 'Advisor recruitment and onboarding for people looking to build a financial services career.',
      benefits: ['Advisor onboarding', 'Product training', 'Client engagement support', 'Growth-focused guidance'],
    },
    {
      icon: Shield,
      title: 'Insurance',
      category: 'Insurance',
      description: 'Insurance guidance for life, health, vehicle, property, and other protection needs.',
      benefits: ['Life insurance', 'General insurance', 'Plan comparison', 'Claim support guidance'],
    },
    {
      icon: TrendingUp,
      title: 'AIF',
      category: 'Alternative Investments',
      description: 'Alternative Investment Funds for eligible investors seeking diversified strategies.',
      benefits: ['Curated fund access', 'Portfolio diversification', 'Professional selection', 'Risk profiling'],
    },
    {
      icon: Briefcase,
      title: 'PMS',
      category: 'Portfolio Management',
      description: 'Portfolio Management Services for clients who need professionally managed portfolios.',
      benefits: ['Personalized strategy', 'Professional management', 'Regular reviews', 'Goal-based allocation'],
    },
    {
      icon: Repeat,
      title: 'SIP',
      category: 'Systematic Investments',
      description: 'Systematic investment plans to help clients invest consistently toward financial goals.',
      benefits: ['Monthly investing', 'Goal planning', 'Long-term compounding', 'Flexible contribution'],
    },
  ]

  const categories = ['All', 'Recruitment', 'Insurance', 'Alternative Investments', 'Portfolio Management', 'Systematic Investments']

  return (
    <main className="page-fade">
      <Navigation />
      
      {/* Products Header */}
      <section className="section-surface fine-grid bg-gradient-to-b from-secondary to-background pt-20 pb-12">
        <div className="reveal-up relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4 text-balance">
            Our Financial Products
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our comprehensive range of financial products designed to help you achieve your financial goals.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="section-surface py-16">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, index) => {
              const Icon = product.icon
              return (
                <div
                  key={product.title}
                  className="reveal-scale interactive-card shine group bg-card rounded-xl p-6 border border-border hover:border-primary/50 transition-all h-full flex flex-col"
                  style={{ animationDelay: `${Math.min(index, 5) * 80}ms` }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <span className="text-xs font-medium px-3 py-1 bg-secondary text-primary rounded-full">
                      {product.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-2">{product.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4 flex-grow">{product.description}</p>
                  <div className="space-y-2 mb-6">
                    {product.benefits.map((benefit) => (
                      <div key={benefit} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 flex-shrink-0"></div>
                        <span className="text-xs text-foreground">{benefit}</span>
                      </div>
                    ))}
                  </div>
                  <Link
                    href="/contact"
                    className="shine inline-block px-6 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium shadow-lg shadow-primary/15 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary/20"
                  >
                    Learn More
                  </Link>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Product Categories Info */}
      <section className="section-surface bg-secondary py-16">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="reveal-up text-3xl font-bold text-primary mb-12 text-center">Product Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {categories.slice(1).map((category) => (
              <div key={category} className="reveal-scale interactive-card bg-card rounded-lg p-6 border border-border text-center">
                <h3 className="text-lg font-bold text-primary">{category}</h3>
                <p className="text-sm text-muted-foreground mt-2">
                  Tailored solutions for your {category.toLowerCase()} needs
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground py-16 relative overflow-hidden">
        <div className="pulse-soft absolute -right-12 top-0 h-72 w-72 rounded-full bg-white/10 blur-3xl"></div>
        <div className="reveal-up relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4 text-balance">Find the Perfect Product for You</h2>
          <p className="text-lg mb-8 opacity-90">
            Speak with our expert advisors to discover which products align with your financial goals.
          </p>
          <Link
            href="/contact"
            className="shine inline-flex items-center justify-center px-8 py-3 bg-primary-foreground text-primary font-medium rounded-lg shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
          >
            Schedule Consultation
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
