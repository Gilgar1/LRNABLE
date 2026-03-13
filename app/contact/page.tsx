'use client'

import React from "react"

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Mail, MessageSquare, Phone, MapPin } from 'lucide-react'
import { useState } from 'react'
import { toast } from 'sonner'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    // Simulate submission
    setTimeout(() => {
      toast.success('Message sent! We\'ll get back to you soon.')
      setFormData({ name: '', email: '', subject: '', message: '' })
      setLoading(false)
    }, 1000)
  }

  return (
    <main className="min-h-screen bg-background">
      {/* Hero */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-slate-900 dark:to-slate-800">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h1 className="text-4xl sm:text-5xl font-bold">Get in Touch</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have questions? We'd love to hear from you. Reach out anytime.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16 sm:py-24">
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  required
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="subject">Subject</Label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="How can we help?"
                  required
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us what you're thinking..."
                  rows={6}
                  required
                  className="mt-2"
                />
              </div>

              <Button type="submit" size="lg" disabled={loading}>
                {loading ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              <div className="space-y-4">
                <Card>
                  <CardContent className="pt-6 flex gap-4">
                    <Mail className="h-6 w-6 text-blue-600 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Email</p>
                      <a href="mailto:support@lrnable.com" className="text-muted-foreground hover:text-foreground">
                        support@lrnable.com
                      </a>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6 flex gap-4">
                    <Phone className="h-6 w-6 text-blue-600 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">WhatsApp</p>
                      <a href="https://wa.me/" className="text-muted-foreground hover:text-foreground">
                        Message us on WhatsApp
                      </a>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6 flex gap-4">
                    <MessageSquare className="h-6 w-6 text-blue-600 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Live Chat</p>
                      <p className="text-muted-foreground text-sm">Available 9 AM - 6 PM GMT+1</p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6 flex gap-4">
                    <MapPin className="h-6 w-6 text-blue-600 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Office</p>
                      <p className="text-muted-foreground text-sm">
                        Yaoundé, Cameroon
                        <br />
                        Central Africa
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Response Time */}
            <Card className="bg-blue-50 dark:bg-blue-950 border-blue-200 dark:border-blue-800">
              <CardHeader>
                <CardTitle className="text-lg">Response Time</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground text-sm">
                <p className="mb-2">
                  <strong>General inquiries:</strong> 24 hours
                </p>
                <p className="mb-2">
                  <strong>Mentor applications:</strong> 2-3 business days
                </p>
                <p>
                  <strong>Technical support:</strong> 4-12 hours
                </p>
              </CardContent>
            </Card>

            {/* Help Center */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Help Center</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <p className="font-semibold text-sm mb-1">Common Questions</p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>
                      <a href="#" className="hover:text-foreground">
                        How do I enroll in a course?
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-foreground">
                        Payment methods and process
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-foreground">
                        How to apply as a mentor
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-foreground">
                        Account and profile settings
                      </a>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>

          <div className="space-y-4">
            {[
              {
                q: 'What is Lrnable?',
                a: 'Lrnable is a mentorship platform for Cameroonians to learn high-income skills like Forex Trading and Digital Marketing directly from verified mentors.',
              },
              {
                q: 'Is Lrnable available in other countries?',
                a: 'Currently, we operate in Cameroon. We\'re exploring expansion to other African countries soon.',
              },
              {
                q: 'How secure is payment on Lrnable?',
                a: 'You pay mentors directly via MTN Money or Orange Money. We handle no payments directly, reducing risk. Always verify mentor details before paying.',
              },
              {
                q: 'Can I refund a course?',
                a: 'Each mentorship has its own refund policy, clearly stated before enrollment. Many offer money-back guarantees if you\'re unsatisfied.',
              },
            ].map((item, idx) => (
              <Card key={idx}>
                <CardHeader>
                  <CardTitle className="text-lg">{item.q}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{item.a}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
