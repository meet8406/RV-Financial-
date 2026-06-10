'use client'

import { useState } from 'react'
import { Bot, MessageCircle, Send, X } from 'lucide-react'
import { buildInquiryMailto } from '@/lib/inquiry-mail'

const interests = [
  'Recruitment of Financial Advisor',
  'Insurance',
  'AIF',
  'PMS',
  'SIP',
  'General Inquiry',
]

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: 'General Inquiry',
    message: '',
  })
  const [sent, setSent] = useState(false)

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target
    setFormData((current) => ({ ...current, [name]: value }))
  }

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    const mailto = buildInquiryMailto({
      source: 'Chatbot',
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      interest: formData.interest,
      message: formData.message,
    })

    window.location.href = mailto
    setSent(true)
  }

  return (
    <div className="fixed bottom-5 right-5 z-[60] flex flex-col items-end gap-3">
      {isOpen && (
        <div className="chatbot-panel w-[calc(100vw-2.5rem)] max-w-sm overflow-hidden rounded-xl border border-border bg-card shadow-2xl">
          <div className="flex items-center justify-between bg-primary px-5 py-4 text-primary-foreground">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-foreground/15">
                <Bot size={22} />
              </div>
              <div>
                <p className="font-semibold leading-tight">RV Assistant</p>
                <p className="text-xs opacity-80">Send your inquiry to our team</p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="rounded-md p-2 transition-colors hover:bg-primary-foreground/10"
              aria-label="Close chatbot"
            >
              <X size={18} />
            </button>
          </div>

          <div className="space-y-4 p-5">
            <div className="rounded-lg bg-secondary/70 p-3 text-sm text-foreground">
              Hi, please share your details. Your inquiry will be prepared for RV Financial Services email.
            </div>

            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your name"
                className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none transition focus:ring-2 focus:ring-primary"
              />
              <div className="grid grid-cols-2 gap-3">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Email"
                  className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none transition focus:ring-2 focus:ring-primary"
                />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="Phone"
                  className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none transition focus:ring-2 focus:ring-primary"
                />
              </div>
              <select
                name="interest"
                value={formData.interest}
                onChange={handleChange}
                className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none transition focus:ring-2 focus:ring-primary"
              >
                {interests.map((interest) => (
                  <option key={interest} value={interest}>
                    {interest}
                  </option>
                ))}
              </select>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                placeholder="How can we help?"
                className="w-full resize-none rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none transition focus:ring-2 focus:ring-primary"
              />
              {sent && (
                <p className="rounded-lg border border-green-200 bg-green-50 p-3 text-xs text-green-800">
                  Your email app has opened with the inquiry ready to send.
                </p>
              )}
              <button
                type="submit"
                className="shine inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/15 transition hover:-translate-y-0.5"
              >
                Send Inquiry
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      )}

      <button
        type="button"
        onClick={() => setIsOpen((current) => !current)}
        className="chatbot-button shine flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-2xl shadow-primary/25 transition hover:-translate-y-1"
        aria-label="Open chatbot"
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </button>
    </div>
  )
}
