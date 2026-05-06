import { CheckCircle2 } from 'lucide-react'

export default function WhyChooseUs() {
  const reasons = [
    {
      title: 'Expert Team',
      description: 'Our experienced financial advisors have over 15 years of industry expertise.',
    },
    {
      title: 'Transparent Pricing',
      description: 'No hidden charges. We believe in complete transparency in all transactions.',
    },
    {
      title: 'Fast Processing',
      description: 'Get approvals within 24-48 hours for most applications.',
    },
    {
      title: 'Customer Support',
      description: '24/7 dedicated support team ready to assist with your queries.',
    },
    {
      title: 'Secure Platform',
      description: 'Bank-level security with encryption to protect your personal data.',
    },
    {
      title: 'Customized Solutions',
      description: 'Tailored financial solutions designed specifically for your needs.',
    },
  ]

  return (
    <section id="about" className="section-surface py-20 bg-background">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="reveal-up space-y-8">
            <div>
              <p className="text-primary font-semibold mb-2">Why Choose Us</p>
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4 text-balance">
                Your Trusted Financial Partner
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                With over 15 years of experience, we've helped thousands of clients achieve their financial goals with integrity, expertise, and personalized service.
              </p>
            </div>

            <div className="space-y-4">
              {reasons.map((reason, index) => (
                <div key={index} className="group flex gap-4 rounded-xl p-3 -mx-3 transition-all duration-300 hover:bg-card/70 hover:shadow-sm">
                  <CheckCircle2 size={24} className="text-primary flex-shrink-0 mt-1 transition-transform duration-300 group-hover:scale-110" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      {reason.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {reason.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Stats */}
          <div className="space-y-6">
            <div className="reveal-scale delay-100 interactive-card group p-8 rounded-xl bg-gradient-to-br from-primary/10 via-card/80 to-accent/10 border border-border hover:border-primary/50 transition-colors">
              <div className="text-5xl font-bold text-primary mb-2">15+</div>
              <p className="text-lg font-semibold text-foreground mb-1">Years of Excellence</p>
              <p className="text-muted-foreground">
                Serving customers with dedication since 2010
              </p>
            </div>

            <div className="reveal-scale delay-200 interactive-card group p-8 rounded-xl bg-gradient-to-br from-primary/10 via-card/80 to-accent/10 border border-border hover:border-primary/50 transition-colors">
              <div className="text-5xl font-bold text-primary mb-2">50K+</div>
              <p className="text-lg font-semibold text-foreground mb-1">Satisfied Clients</p>
              <p className="text-muted-foreground">
                Trust us to manage their financial goals
              </p>
            </div>

            <div className="reveal-scale delay-300 interactive-card group p-8 rounded-xl bg-gradient-to-br from-primary/10 via-card/80 to-accent/10 border border-border hover:border-primary/50 transition-colors">
              <div className="text-5xl font-bold text-primary mb-2">₹2000Cr+</div>
              <p className="text-lg font-semibold text-foreground mb-1">Assets Under Management</p>
              <p className="text-muted-foreground">
                Growing wealth for our clients daily
              </p>
            </div>

            <div className="reveal-scale delay-400 interactive-card group p-8 rounded-xl bg-gradient-to-br from-primary/10 via-card/80 to-accent/10 border border-border hover:border-primary/50 transition-colors">
              <div className="text-5xl font-bold text-primary mb-2">99.8%</div>
              <p className="text-lg font-semibold text-foreground mb-1">Customer Satisfaction</p>
              <p className="text-muted-foreground">
                Committed to exceeding expectations
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
