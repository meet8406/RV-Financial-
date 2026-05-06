import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { Home, Users, Heart, Shield, Zap, PieChart, Lock, TrendingUp, Database, Briefcase } from 'lucide-react'
import Link from 'next/link'

export default function Products() {
  const products = [
    {
      icon: Home,
      title: 'Home Loan',
      category: 'Loans',
      description: 'Purchase or construct your dream home with our flexible home loan options.',
      benefits: ['Up to 30 years tenure', 'Up to 90% LTV', 'Pre-approval facility', 'Free home loan insurance'],
    },
    {
      icon: Users,
      title: 'Personal Loan',
      category: 'Loans',
      description: 'Instant personal loans for any purpose without collateral requirements.',
      benefits: ['Instant approval', 'No collateral needed', 'Flexible repayment', 'Transparent pricing'],
    },
    {
      icon: Heart,
      title: 'Life Insurance',
      category: 'Insurance',
      description: 'Secure your family\'s financial future with comprehensive life insurance coverage.',
      benefits: ['Online enrollment', 'Cashless claims', 'Multiple plan options', 'Tax benefits (Section 80C)'],
    },
    {
      icon: Shield,
      title: 'General Insurance',
      category: 'Insurance',
      description: 'Complete protection for your health, vehicle, and property with general insurance.',
      benefits: ['24/7 claim support', 'Network hospitals', 'Quick settlement', 'Customizable coverage'],
    },
    {
      icon: PieChart,
      title: 'Mutual Funds',
      category: 'Investments',
      description: 'Diversified mutual fund investments to build long-term wealth.',
      benefits: ['Low minimum investment', 'SIP options', 'Expert management', 'Transparent NAVs'],
    },
    {
      icon: Zap,
      title: 'NCD (Non-Convertible Debentures)',
      category: 'Investments',
      description: 'Fixed income securities with attractive interest rates and defined maturity.',
      benefits: ['Fixed returns', 'Higher yields', 'Secured investment', 'Tax-efficient'],
    },
    {
      icon: Briefcase,
      title: 'Private Equity',
      category: 'Alternative Investments',
      description: 'Direct equity investment opportunities in high-growth companies.',
      benefits: ['High growth potential', 'Professional management', 'Portfolio diversification', 'Exit opportunities'],
    },
    {
      icon: TrendingUp,
      title: 'Equity Trading',
      category: 'Investments',
      description: 'Direct access to stock market with competitive trading and brokerage rates.',
      benefits: ['Low brokerage fees', 'Advanced trading tools', 'Real-time research', 'Expert advisory'],
    },
    {
      icon: Database,
      title: 'Demat Account',
      category: 'Investments',
      description: 'Secure dematerialization of securities for seamless stock trading.',
      benefits: ['Instant opening', 'Zero maintenance fee', 'Online management', 'Multiple exchange access'],
    },
    {
      icon: Lock,
      title: 'Alternative Investment Fund',
      category: 'Alternative Investments',
      description: 'Curated alternative investment opportunities for wealth diversification.',
      benefits: ['Portfolio diversification', 'Professional selection', 'Risk management', 'Inflation hedge'],
    },
  ]

  const categories = ['All', 'Loans', 'Insurance', 'Investments', 'Alternative Investments']

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
