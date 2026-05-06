import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { CheckCircle, Award, Users, Target } from 'lucide-react'
import Link from 'next/link'

export default function About() {
  const values = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To empower individuals and businesses with innovative financial solutions that create lasting wealth and financial security.',
    },
    {
      icon: Award,
      title: 'Our Vision',
      description: 'To be the most trusted and preferred financial services partner for millions of customers across the nation.',
    },
    {
      icon: Users,
      title: 'Our Values',
      description: 'Integrity, transparency, and customer-centricity guide every decision we make and every solution we provide.',
    },
  ]

  const achievements = [
    { number: '50,000+', label: 'Happy Customers' },
    { number: '₹2,000 Cr', label: 'Assets Under Management' },
    { number: '15+', label: 'Years of Experience' },
    { number: '10+', label: 'Financial Products' },
  ]

  const team = [
    {
      name: 'Rajesh Kumar',
      role: 'Founder & CEO',
      expertise: 'Financial Strategy & Leadership',
    },
    {
      name: 'Priya Sharma',
      role: 'Chief Investment Officer',
      expertise: 'Investment Management & Portfolio Planning',
    },
    {
      name: 'Amit Patel',
      role: 'Head of Retail Banking',
      expertise: 'Loans & Customer Relations',
    },
    {
      name: 'Deepika Singh',
      role: 'Chief Compliance Officer',
      expertise: 'Regulatory Compliance & Risk Management',
    },
  ]

  return (
    <main className="page-fade">
      <Navigation />
      
      {/* About Header */}
      <section className="section-surface fine-grid bg-gradient-to-b from-secondary to-background pt-20 pb-12">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4 text-balance">
            About RV Financial Services
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Creating wealth with wisdom for over 15 years, trusted by thousands of customers across the nation.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-surface py-16">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="reveal-up">
              <h2 className="text-3xl font-bold text-primary mb-6">Our Story</h2>
              <p className="text-foreground mb-4 leading-relaxed">
                RV Financial Services was founded on the principle that every individual deserves access to world-class financial guidance and products. Over the past 15 years, we have grown from a small advisory firm to a comprehensive financial services company.
              </p>
              <p className="text-foreground mb-4 leading-relaxed">
                Our journey has been defined by our commitment to integrity, transparency, and customer satisfaction. We have helped thousands of customers achieve their financial goals through personalized solutions and expert guidance.
              </p>
              <p className="text-foreground leading-relaxed">
                Today, with over ₹2,000 crores in assets under management and a team of experienced professionals, we continue to innovate and expand our services to meet the evolving needs of our customers.
              </p>
            </div>
            <div className="reveal-scale delay-200 relative">
              <div className="float-soft bg-gradient-to-br from-primary via-primary to-secondary rounded-xl p-12 h-80 flex items-center justify-center shadow-2xl shadow-primary/20">
                <div className="text-center text-primary-foreground">
                  <div className="text-5xl font-bold mb-2">15+</div>
                  <div className="text-lg">Years of Excellence</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="section-surface bg-secondary py-16">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="reveal-up text-3xl font-bold text-primary text-center mb-12">Our Foundation</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value) => {
              const Icon = value.icon
              return (
                <div key={value.title} className="reveal-scale interactive-card bg-card rounded-xl p-8 border border-border">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 transition-transform duration-300 hover:scale-110">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="reveal-up text-3xl font-bold text-primary text-center mb-12">Our Achievements</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement) => (
              <div key={achievement.label} className="reveal-scale rounded-xl border border-border/70 bg-card/70 p-6 text-center shadow-sm transition-transform duration-300 hover:-translate-y-1">
                <div className="text-4xl font-bold text-primary mb-2">{achievement.number}</div>
                <div className="text-muted-foreground">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="section-surface bg-secondary py-16">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="reveal-up text-3xl font-bold text-primary text-center mb-12">Our Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member) => (
              <div key={member.name} className="reveal-scale interactive-card bg-card rounded-xl overflow-hidden border border-border text-center">
                <div className="bg-gradient-to-br from-primary via-primary to-secondary h-40 flex items-center justify-center">
                  <div className="text-4xl font-bold text-primary-foreground opacity-30">
                    {member.name.charAt(0)}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-primary">{member.name}</h3>
                  <p className="text-sm font-medium text-primary my-2">{member.role}</p>
                  <p className="text-xs text-muted-foreground">{member.expertise}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-surface py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="reveal-up text-3xl font-bold text-primary text-center mb-12">Why Choose RV Financial Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              'Expert Financial Advisors with decades of combined experience',
              'Comprehensive range of financial products and services',
              'Transparent pricing and zero hidden charges',
              'Customer-centric approach with 24/7 support',
              'Proven track record with 15+ years of excellence',
              'Advanced technology for seamless digital experience',
              'Regulatory compliance and certified operations',
              'Personalized solutions tailored to your needs',
            ].map((reason) => (
              <div key={reason} className="reveal-up group flex gap-4 rounded-xl p-4 transition-all duration-300 hover:bg-card/70 hover:shadow-sm">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-foreground">{reason}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment to Excellence */}
      <section className="bg-gradient-to-br from-primary via-primary to-secondary text-primary-foreground py-16 relative overflow-hidden">
        <div className="pulse-soft absolute -right-16 top-0 h-72 w-72 rounded-full bg-white/10 blur-3xl"></div>
        <div className="reveal-up relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4 text-balance">Our Commitment to Excellence</h2>
          <p className="text-lg mb-8 opacity-90 leading-relaxed">
            We are committed to delivering exceptional financial services that exceed expectations. Through continuous innovation, rigorous compliance, and unwavering focus on customer satisfaction, we create lasting value for all stakeholders.
          </p>
          <Link
            href="/contact"
            className="shine inline-flex items-center justify-center px-8 py-3 bg-primary-foreground text-primary font-medium rounded-lg shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
          >
            Get In Touch With Us
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
