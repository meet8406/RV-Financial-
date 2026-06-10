import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function Products() {
  const products = [
    {
      id: 'recruitment-financial-advisor',
      title: 'Recruitment of Financial Advisor',
      description: 'Join our advisor network and build a financial services career',
      rate: 'Career Opportunity',
      amount: 'Open roles',
      features: ['Advisor onboarding', 'Product training', 'Growth support'],
    },
    {
      id: 'insurance',
      title: 'Insurance',
      description: 'Protection solutions for life, health, vehicle, and assets',
      rate: 'Customized',
      amount: 'As per plan',
      features: ['Life insurance', 'General insurance', 'Claim guidance'],
    },
    {
      id: 'aif',
      title: 'AIF',
      description: 'Alternative Investment Funds for portfolio diversification',
      rate: 'Customized',
      amount: 'High-value tickets',
      features: ['Curated funds', 'Risk profiling', 'Expert selection'],
    },
    {
      id: 'pms',
      title: 'PMS',
      description: 'Portfolio Management Services for focused wealth creation',
      rate: 'Market-linked',
      amount: 'Managed portfolio',
      features: ['Personalized strategy', 'Professional management', 'Regular reviews'],
    },
    {
      id: 'sip',
      title: 'SIP',
      description: 'Systematic investment plans for disciplined long-term wealth',
      rate: 'Market-linked',
      amount: 'Min ₹1,000',
      features: ['Goal planning', 'Monthly investing', 'Long-term compounding'],
    },
  ]

  return (
    <section id="products" className="section-surface py-20 bg-secondary/5">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="reveal-up text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Our Products
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our complete range of financial products tailored to your needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="reveal-scale interactive-card group h-full rounded-xl border border-border bg-card hover:border-primary/50 transition-all duration-300 overflow-hidden"
              style={{ animationDelay: `${Math.min(index, 5) * 70}ms` }}
            >
              {/* Header */}
              <div className="p-6 border-b border-border bg-gradient-to-r from-primary/10 via-card to-accent/10">
                <h3 className="text-lg font-bold text-foreground mb-1">
                  {product.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {product.description}
                </p>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div>
                  <p className="text-xs font-semibold text-muted-foreground mb-1">RATES/RETURNS</p>
                  <p className="text-2xl font-bold text-primary">
                    {product.rate}
                  </p>
                </div>

                <div>
                  <p className="text-xs font-semibold text-muted-foreground mb-1">AMOUNT</p>
                  <p className="text-sm font-semibold text-foreground">
                    {product.amount}
                  </p>
                </div>

                <div>
                  <p className="text-xs font-semibold text-muted-foreground mb-2">KEY FEATURES</p>
                  <ul className="space-y-1">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-foreground flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href={`/contact?product=${product.id}`}
                  className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all"
                >
                  Learn More
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
