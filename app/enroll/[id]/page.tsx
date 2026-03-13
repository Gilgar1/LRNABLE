'use client'

import React from "react"

import Link from 'next/link'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Checkbox } from '@/components/ui/checkbox'
import { toast } from 'sonner'
import { ArrowLeft, CheckCircle2, Lock } from 'lucide-react'

// Mock course data
const courseData = {
  forex: {
    title: 'Forex Trading Mastery',
    price: 150000,
    currency: 'XAF',
    mentor: 'John Mensah',
    startDate: '2024-03-15',
    duration: '8 weeks',
    maxStudents: 20,
  },
  marketing: {
    title: 'Digital Marketing Pro',
    price: 120000,
    currency: 'XAF',
    mentor: 'Sarah Njie',
    startDate: '2024-03-20',
    duration: '12 weeks',
    maxStudents: 25,
  },
}

export default function EnrollmentPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = React.use(params)
  const courseId = id as keyof typeof courseData
  const course = courseData[courseId] || courseData.forex

  const [step, setStep] = useState<'details' | 'payment' | 'confirm'>('details')
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    whatsapp: '',
    experience: 'beginner',
    goals: '',
    paymentMethod: 'mtn',
    agreeToTerms: false,
  })
  const [loading, setLoading] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleCheckboxChange = (checked: boolean) => {
    setFormData((prev) => ({ ...prev, agreeToTerms: checked }))
  }

  const validateStep = () => {
    if (step === 'details') {
      if (!formData.fullName || !formData.email || !formData.phone) {
        toast.error('Please fill in all required fields')
        return false
      }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        toast.error('Please enter a valid email address')
        return false
      }
    }
    if (step === 'payment' && !formData.agreeToTerms) {
      toast.error('Please agree to the terms and conditions')
      return false
    }
    return true
  }

  const handleNextStep = () => {
    if (!validateStep()) return
    if (step === 'details') setStep('payment')
    else if (step === 'payment') setStep('confirm')
  }

  const handleEnroll = async () => {
    if (!validateStep()) return
    setLoading(true)
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000))
      setStep('confirm')
      toast.success('Enrollment successful! Check your email for next steps.')
    } catch (error) {
      toast.error('Enrollment failed. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" asChild>
            <Link href="/courses">
              <ArrowLeft className="h-5 w-5" />
            </Link>
          </Button>
          <h1 className="text-3xl font-bold">Enroll in {course.title}</h1>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>
                  {step === 'details' && 'Your Details'}
                  {step === 'payment' && 'Payment Information'}
                  {step === 'confirm' && 'Enrollment Confirmed'}
                </CardTitle>
                <CardDescription>
                  {step === 'details' && 'Tell us about yourself'}
                  {step === 'payment' && 'Choose your payment method'}
                  {step === 'confirm' && 'Welcome to your mentorship!'}
                </CardDescription>
              </CardHeader>
              <CardContent>
                {step === 'details' && (
                  <form className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="fullName">Full Name *</Label>
                        <Input
                          id="fullName"
                          name="fullName"
                          placeholder="Enter your full name"
                          value={formData.fullName}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="your@email.com"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          name="phone"
                          placeholder="+237 6XX XXX XXX"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="whatsapp">WhatsApp Number</Label>
                        <Input
                          id="whatsapp"
                          name="whatsapp"
                          placeholder="+237 6XX XXX XXX (optional)"
                          value={formData.whatsapp}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label>Experience Level</Label>
                      <RadioGroup value={formData.experience} onValueChange={(value) => setFormData((prev) => ({ ...prev, experience: value }))}>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="beginner" id="beginner" />
                          <Label htmlFor="beginner" className="font-normal cursor-pointer">
                            Beginner - No prior experience
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="intermediate" id="intermediate" />
                          <Label htmlFor="intermediate" className="font-normal cursor-pointer">
                            Intermediate - Some experience
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="advanced" id="advanced" />
                          <Label htmlFor="advanced" className="font-normal cursor-pointer">
                            Advanced - Significant experience
                          </Label>
                        </div>
                      </RadioGroup>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="goals">What are your learning goals?</Label>
                      <textarea
                        id="goals"
                        name="goals"
                        placeholder="Tell us what you want to achieve..."
                        className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-24"
                        value={formData.goals}
                        onChange={handleInputChange}
                      />
                    </div>

                    <Button onClick={handleNextStep} className="w-full bg-blue-600 hover:bg-blue-700">
                      Continue to Payment
                    </Button>
                  </form>
                )}

                {step === 'payment' && (
                  <form className="space-y-6">
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg space-y-2">
                      <p className="text-sm text-muted-foreground">Student Name</p>
                      <p className="font-semibold">{formData.fullName}</p>
                      <p className="text-sm text-muted-foreground pt-2">Email</p>
                      <p className="font-semibold">{formData.email}</p>
                    </div>

                    <div className="space-y-2">
                      <Label>Payment Method *</Label>
                      <RadioGroup value={formData.paymentMethod} onValueChange={(value) => setFormData((prev) => ({ ...prev, paymentMethod: value }))}>
                        <div className="flex items-center space-x-2 p-4 border border-input rounded-lg cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-800">
                          <RadioGroupItem value="mtn" id="mtn" />
                          <Label htmlFor="mtn" className="flex-1 font-normal cursor-pointer">
                            <div>
                              <p className="font-semibold">MTN Mobile Money</p>
                              <p className="text-sm text-muted-foreground">Fast and secure</p>
                            </div>
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2 p-4 border border-input rounded-lg cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-800">
                          <RadioGroupItem value="orange" id="orange" />
                          <Label htmlFor="orange" className="flex-1 font-normal cursor-pointer">
                            <div>
                              <p className="font-semibold">Orange Money</p>
                              <p className="text-sm text-muted-foreground">Quick and easy</p>
                            </div>
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2 p-4 border border-input rounded-lg cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-800">
                          <RadioGroupItem value="paypal" id="paypal" />
                          <Label htmlFor="paypal" className="flex-1 font-normal cursor-pointer">
                            <div>
                              <p className="font-semibold">PayPal / Bank Transfer</p>
                              <p className="text-sm text-muted-foreground">International payments</p>
                            </div>
                          </Label>
                        </div>
                      </RadioGroup>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-start space-x-2">
                        <Checkbox id="terms" checked={formData.agreeToTerms} onCheckedChange={handleCheckboxChange} />
                        <Label htmlFor="terms" className="font-normal cursor-pointer">
                          I agree to the terms and conditions and understand that this is a structured mentorship program with attendance requirements.
                        </Label>
                      </div>
                      <div className="flex items-start space-x-2">
                        <Checkbox id="refund" disabled defaultChecked />
                        <Label htmlFor="refund" className="font-normal cursor-pointer opacity-70">
                          I understand the 7-day money-back guarantee policy
                        </Label>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <Button variant="outline" className="flex-1 bg-transparent" onClick={() => setStep('details')}>
                        Back
                      </Button>
                      <Button onClick={handleEnroll} disabled={loading} className="flex-1 bg-blue-600 hover:bg-blue-700">
                        {loading ? 'Processing...' : 'Complete Enrollment'}
                      </Button>
                    </div>
                  </form>
                )}

                {step === 'confirm' && (
                  <div className="space-y-6 text-center py-8">
                    <div className="flex justify-center">
                      <div className="rounded-full bg-green-100 dark:bg-green-900/30 p-6">
                        <CheckCircle2 className="h-12 w-12 text-green-600" />
                      </div>
                    </div>

                    <div>
                      <h2 className="text-2xl font-bold mb-2">Welcome, {formData.fullName}!</h2>
                      <p className="text-muted-foreground">You're now enrolled in {course.title}</p>
                    </div>

                    <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg space-y-3 text-left">
                      <div>
                        <p className="text-sm text-muted-foreground">Next Steps</p>
                        <ul className="mt-2 space-y-2">
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                            <span>Check your email for confirmation and login details</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                            <span>Complete your profile in the dashboard</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                            <span>Join the WhatsApp group on your first class day</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                            <span>First class starts on {course.startDate}</span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <Button variant="outline" className="flex-1 bg-transparent" asChild>
                        <Link href="/">Home</Link>
                      </Button>
                      <Button className="flex-1 bg-blue-600 hover:bg-blue-700" asChild>
                        <Link href="/dashboard">Go to Dashboard</Link>
                      </Button>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Summary */}
          <div className="lg:col-span-1">
            <Card className="sticky top-20">
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-3 pb-6 border-b border-border">
                  <h3 className="font-semibold">{course.title}</h3>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p className="flex justify-between">
                      <span>Mentor</span>
                      <span className="text-foreground font-medium">{course.mentor}</span>
                    </p>
                    <p className="flex justify-between">
                      <span>Duration</span>
                      <span className="text-foreground font-medium">{course.duration}</span>
                    </p>
                    <p className="flex justify-between">
                      <span>Start Date</span>
                      <span className="text-foreground font-medium">{course.startDate}</span>
                    </p>
                    <p className="flex justify-between">
                      <span>Max Students</span>
                      <span className="text-foreground font-medium">{course.maxStudents}</span>
                    </p>
                  </div>
                </div>

                <div className="space-y-2 pb-6 border-b border-border">
                  <h4 className="font-semibold text-sm">What's Included</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-600" />
                      Live weekly classes
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-600" />
                      Recorded videos
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-600" />
                      Trading/Campaign templates
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-600" />
                      Q&A sessions
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-600" />
                      Community support
                    </li>
                  </ul>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Tuition</span>
                    <span className="font-semibold">
                      {course.price.toLocaleString()} {course.currency}
                    </span>
                  </div>
                  <div className="pt-3 border-t border-border">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold">Total</span>
                      <span className="text-2xl font-bold text-blue-600">
                        {course.price.toLocaleString()} {course.currency}
                      </span>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    <Lock className="inline h-3 w-3 mr-1" />
                    Secure payment processing
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </main>
  )
}
