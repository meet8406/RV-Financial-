import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function Products() {
  const products = [
    {
      id: 'home-loan',
      title: 'Home Loan',
      description: 'Make your dream home affordable',
      rate: '6.5% - 9.5%',
      amount: 'Up to ₹1 Crore',
      features: ['Competitive rates', 'Quick approval', 'Low documentation'],
    },
    {
      id: 'personal-loan',
      title: 'Personal Loan',
      description: 'Funds for any need, instantly',
      rate: '8% - 12%',
      amount: 'Up to ₹25 Lakhs',
      features: ['Instant approval', 'No collateral', 'Flexible tenure'],
    },
    {
      id: 'life-insurance',
      title: 'Life Insurance',
      description: 'Secure your family\'s future',
      rate: 'Customized',
      amount: 'Up to ₹1 Crore',
      features: ['Term plans', 'Endowment plans', 'ULIP plans'],
    },
    {
      id: 'general-insurance',
      title: 'General Insurance',
      description: 'Protection for all your assets',
      rate: 'Competitive',
      amount: 'Full coverage',
      features: ['Car insurance', 'Home insurance', 'Travel insurance'],
    },
    {
      id: 'mutual-fund',
      title: 'Mutual Funds',
      description: 'Diversified investment options',
      rate: 'Variable',
      amount: 'Min ₹1,000',
      features: ['ELSS', 'Balanced funds', 'Equity funds'],
    },
    {
      id: 'ncd',
      title: 'NCD (Non-Convertible Debenture)',
      description: 'Fixed income with regular returns',
      rate: '7.5% - 9%',
      amount: 'Min ₹10,000',
      features: ['Regular interest', 'Credit rating A+', 'Tax benefits'],
    },
    {
      id: 'private-equity',
      title: 'Private Equity',
      description: 'Exclusive investment opportunities',
      rate: '12% - 18%',
      amount: 'High-value tickets',
      features: ['Portfolio diversity', 'Expert management', 'Long-term growth'],
    },
    {
      id: 'equity',
      title: 'Equity Trading',
      description: 'Trade stocks with confidence',
      rate: 'Market-linked',
      amount: 'Flexible',
      features: ['Real-time trading', 'Research tools', 'Expert advisory'],
    },
    {
      id: 'demat',
      title: 'Demat Account',
      description: 'Digital securities custody',
      rate: 'Zero brokerage',
      amount: 'Unlimited',
      features: ['Easy opening', 'Safe holding', 'Quick trading'],
    },
    {
      id: 'alt-investment',
      title: 'Alternative Investments',
      description: 'Beyond traditional securities',
      rate: 'Customized',
      amount: 'Flexible',
      features: ['Real estate funds', 'Gold ETFs', 'Peer-to-peer lending'],
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
