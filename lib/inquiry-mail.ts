export const RV_CONTACT_EMAIL = 'RVfinancialservices111@gmail.com'

export type InquiryMail = {
  source: string
  name: string
  email: string
  phone: string
  interest: string
  message: string
}

export function buildInquiryMailto(inquiry: InquiryMail) {
  const subject = `New ${inquiry.source} inquiry - ${inquiry.interest}`
  const body = [
    `Source: ${inquiry.source}`,
    `Name: ${inquiry.name}`,
    `Email: ${inquiry.email}`,
    `Phone: ${inquiry.phone}`,
    `Interest: ${inquiry.interest}`,
    '',
    'Message:',
    inquiry.message,
  ].join('\n')

  return `mailto:${RV_CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}
