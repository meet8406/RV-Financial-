import { Star } from 'lucide-react'

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Rajesh Sharma',
      role: 'Home Loan Customer',
      content: 'RV Financial Services made the entire home loan process seamless. Fast approval, transparent process, and excellent customer support. Highly recommended!',
      rating: 5,
    },
    {
      name: 'Priya Gupta',
      role: 'Investment Client',
      description: 'Got my portfolio diversified',
      content: 'The investment advisory team helped me create a diversified portfolio matching my risk profile. Returns have exceeded my expectations consistently.',
      rating: 5,
    },
    {
      name: 'Arjun Patel',
      role: 'Personal Loan Customer',
      content: 'Needed funds urgently for my business expansion. RV Financial approved my loan within 24 hours. Professional team, zero hassle!',
      rating: 5,
    },
    {
      name: 'Meera Singh',
      role: 'Insurance Customer',
      content: 'Comprehensive insurance coverage at competitive rates. The team explained all options clearly and helped me choose the right plan.',
      rating: 5,
    },
  ]

  return (
    <section className="section-surface py-20 bg-secondary/5">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="reveal-up text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4 text-balance">
            What Our Clients Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real stories from satisfied customers who trusted us with their financial goals
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="reveal-scale interactive-card p-8 rounded-xl border border-border bg-card hover:border-primary/50 transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} size={16} className="fill-primary text-primary" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-foreground leading-relaxed mb-6 italic">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="border-t border-border pt-4">
                <p className="font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="mt-16 grid md:grid-cols-4 gap-8">
          <div className="reveal-up text-center rounded-xl border border-border/60 bg-card/60 p-5 shadow-sm transition-transform duration-300 hover:-translate-y-1">
            <div className="text-4xl font-bold text-primary mb-2">₹2000Cr+</div>
            <p className="text-muted-foreground">AUM</p>
          </div>
          <div className="reveal-up delay-100 text-center rounded-xl border border-border/60 bg-card/60 p-5 shadow-sm transition-transform duration-300 hover:-translate-y-1">
            <div className="text-4xl font-bold text-primary mb-2">50K+</div>
            <p className="text-muted-foreground">Active Clients</p>
          </div>
          <div className="reveal-up delay-200 text-center rounded-xl border border-border/60 bg-card/60 p-5 shadow-sm transition-transform duration-300 hover:-translate-y-1">
            <div className="text-4xl font-bold text-primary mb-2">99.8%</div>
            <p className="text-muted-foreground">Satisfaction Rate</p>
          </div>
          <div className="reveal-up delay-300 text-center rounded-xl border border-border/60 bg-card/60 p-5 shadow-sm transition-transform duration-300 hover:-translate-y-1">
            <div className="text-4xl font-bold text-primary mb-2">15+</div>
            <p className="text-muted-foreground">Years Trust</p>
          </div>
        </div>
      </div>
    </section>
  )
}
