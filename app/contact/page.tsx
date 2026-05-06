'use client'

import { useState } from 'react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { Mail, Phone, MapPin, Send } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    product: '',
    message: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 1000))
      setSubmitStatus('success')
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        product: '',
        message: '',
      })
      setTimeout(() => setSubmitStatus('idle'), 3000)
    } catch (error) {
      setSubmitStatus('error')
      setTimeout(() => setSubmitStatus('idle'), 3000)
    } finally {
      setIsSubmitting(false)
    }
  }

  const products = [
    'Home Loan',
    'Personal Loan',
    'Life Insurance',
    'General Insurance',
    'Mutual Funds',
    'NCD',
    'Private Equity',
    'Equity Trading',
    'Demat Account',
    'Alternative Investments',
  ]

  return (
    <>
      <Navigation />
      <main className="page-fade min-h-screen bg-background">
        {/* Hero Section */}
        <section className="section-surface fine-grid py-20 bg-gradient-to-b from-secondary/30 to-background">
          <div className="reveal-up relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4 text-balance">
              Get in Touch
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Have questions? We're here to help. Reach out to our team for personalized financial guidance.
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="section-surface py-20">
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {/* Contact Info Cards */}
              <div className="reveal-scale interactive-card p-8 rounded-xl border border-border bg-card hover:border-primary/50 transition-all">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Phone size={24} className="text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-primary mb-2">Phone</h3>
                <p className="text-muted-foreground mb-1">Toll Free: 1800-123-4567</p>
                <p className="text-muted-foreground">Mon - Sun: 9 AM - 6 PM</p>
              </div>

              <div className="reveal-scale delay-100 interactive-card p-8 rounded-xl border border-border bg-card hover:border-primary/50 transition-all">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Mail size={24} className="text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-primary mb-2">Email</h3>
                <p className="text-muted-foreground mb-1">hello@rvfinancial.com</p>
                <p className="text-muted-foreground">Response within 2 hours</p>
              </div>

              <div className="reveal-scale delay-200 interactive-card p-8 rounded-xl border border-border bg-card hover:border-primary/50 transition-all">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <MapPin size={24} className="text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-primary mb-2">Office</h3>
                <p className="text-muted-foreground mb-1">New Delhi, India</p>
                <p className="text-muted-foreground">Regional offices nationwide</p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="max-w-2xl mx-auto">
              <div className="reveal-up glass-card p-8 sm:p-12 rounded-2xl border border-border bg-card shadow-lg">
                <h2 className="text-3xl font-bold text-primary mb-2">Send Us a Message</h2>
                <p className="text-muted-foreground mb-8">
                  Fill out the form below and our team will get back to you shortly.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Fields */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        First Name
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        placeholder="John"
                        className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:-translate-y-0.5"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Last Name
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        placeholder="Doe"
                        className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:-translate-y-0.5"
                      />
                    </div>
                  </div>

                  {/* Email and Phone */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="john@example.com"
                        className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:-translate-y-0.5"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:-translate-y-0.5"
                      />
                    </div>
                  </div>

                  {/* Product Selection */}
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Interested Product
                    </label>
                    <select
                      name="product"
                      value={formData.product}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:-translate-y-0.5"
                    >
                      <option value="">Select a product</option>
                      {products.map((product) => (
                        <option key={product} value={product}>
                          {product}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Tell us about your financial goals..."
                      rows={6}
                      className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:-translate-y-0.5 resize-none"
                    />
                  </div>

                  {/* Status Messages */}
                  {submitStatus === 'success' && (
                    <div className="p-4 rounded-lg bg-green-50 border border-green-200 text-green-800">
                      Thank you! We've received your message and will get back to you shortly.
                    </div>
                  )}
                  {submitStatus === 'error' && (
                    <div className="p-4 rounded-lg bg-red-50 border border-red-200 text-red-800">
                      An error occurred. Please try again or call us directly.
                    </div>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="shine w-full inline-flex items-center justify-center gap-2 px-8 py-3 rounded-lg bg-primary text-primary-foreground font-semibold shadow-lg shadow-primary/15 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/20 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 rounded-full border-2 border-primary-foreground/30 border-t-primary-foreground animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send size={18} />
                      </>
                    )}
                  </button>
                </form>
              </div>

              {/* Additional Info */}
              <div className="reveal-up delay-200 mt-12 p-8 rounded-xl bg-secondary/10 border border-border shadow-sm">
                <h3 className="text-lg font-semibold text-foreground mb-4">Expected Response Times</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• General Inquiries: 2-4 hours</li>
                  <li>• Loan Applications: 24 hours</li>
                  <li>• Insurance Queries: 6-12 hours</li>
                  <li>• Investment Advice: 24-48 hours</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
