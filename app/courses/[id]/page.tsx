'use client'

import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
  CheckCircle2,
  Star,
  Users,
  Calendar,
  Clock,
  ArrowRight,
  DollarSign,
  AlertCircle,
} from 'lucide-react'

export default function CourseDetailPage({ params }: { params: Promise<{ id: string }> | { id: string } }) {
  const resolvedParams = React.use(params as Promise<{ id: string }>)
  // Mock data - would be fetched based on resolvedParams.id
  const course = {
    id: 1,
    title: 'Forex Trading Fundamentals',
    mentor: 'John Nkomo',
    mentorBio: 'Professional trader with 8+ years experience trading forex. Started with $500, now manages $50k+.',
    mentorImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop',
    category: 'forex',
    price: 50000,
    currency: 'XAF',
    rating: 4.8,
    reviews: 24,
    totalSpots: 20,
    spotsRemaining: 3,
    startDate: '2024-03-01',
    endDate: '2024-04-15',
    badge: 'Beginner Friendly',
    intro: 'Master the basics of forex trading and start your journey to financial independence.',
    image: 'https://images.unsplash.com/photo-1611974212247-6bf2f80b2eb6?w=800&h=400&fit=crop',
    description: `
      This comprehensive mentorship program will guide you through everything you need to know to start trading forex profitably.
      
      From understanding currency pairs and technical analysis to developing your own trading strategy, you'll learn directly from a mentor who's successfully navigated these markets.
      
      This is a structured, batch-based program with live classes, recorded sessions, assignments, and a supportive community to keep you accountable.
    `,
    whatYouLearn: [
      'Forex market fundamentals and how to get started',
      'Technical analysis: charts, patterns, and indicators',
      'Risk management and position sizing',
      'Developing a consistent trading strategy',
      'Psychological aspects of trading',
      'Live trading demonstrations',
      'How to analyze market news and economic events',
    ],
    requirements: [
      'Basic English proficiency',
      'A computer with internet connection',
      'Willingness to practice consistently',
      'No previous trading experience required',
    ],
    schedule: [
      {
        day: 'Monday & Wednesday',
        time: '8 PM - 9 PM GMT+1',
        type: 'Live Class',
      },
      {
        day: 'Thursday',
        time: '7 PM - 8 PM GMT+1',
        type: 'Q&A / Office Hours',
      },
      {
        day: 'Self-paced',
        time: 'Anytime',
        type: 'Recorded Sessions & Materials',
      },
    ],
    paymentMethods: {
      mtn: '+237 6XX XXX XXX',
      orange: '+237 6XX XXX XXX',
      bank: 'Details available after enrollment',
    },
    moneyBackGuarantee:
      'If you complete all lessons and assignments but don\'t see improvement in your trading, we\'ll refund 100% within 30 days of course end.',
  }

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-96 md:h-[500px] overflow-hidden">
        <img
          src={course.image || "/placeholder.svg"}
          alt={course.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6 text-white">
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-4 bg-blue-600">{course.badge}</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-2">{course.title}</h1>
            <p className="text-lg text-blue-100">Mentored by {course.mentor}</p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Quick Stats */}
            <div className="grid sm:grid-cols-4 gap-4">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center gap-2">
                    <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    <div>
                      <p className="font-semibold">{course.rating}</p>
                      <p className="text-xs text-muted-foreground">{course.reviews} reviews</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-blue-600" />
                    <div>
                      <p className="font-semibold">{course.totalSpots - course.spotsRemaining}</p>
                      <p className="text-xs text-muted-foreground">Enrolled</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-blue-600" />
                    <div>
                      <p className="font-semibold">{Math.ceil((new Date(course.endDate).getTime() - new Date(course.startDate).getTime()) / (1000 * 60 * 60 * 24))} days</p>
                      <p className="text-xs text-muted-foreground">Duration</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center gap-2">
                    <AlertCircle className="h-5 w-5 text-green-600" />
                    <div>
                      <p className="font-semibold text-green-600">{course.spotsRemaining}</p>
                      <p className="text-xs text-muted-foreground">Spots left</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Tabs */}
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
                <TabsTrigger value="schedule">Schedule</TabsTrigger>
                <TabsTrigger value="mentor">Mentor</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold mb-4">About This Mentorship</h2>
                  <p className="text-muted-foreground whitespace-pre-line">{course.description}</p>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-4">What You'll Achieve</h3>
                  <ul className="space-y-3">
                    {course.whatYouLearn.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-4">Requirements</h3>
                  <ul className="space-y-2">
                    {course.requirements.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-blue-600" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Card className="border-green-200 bg-green-50 dark:bg-green-950 dark:border-green-800">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600" />
                      Money-Back Guarantee
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm">{course.moneyBackGuarantee}</p>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="curriculum" className="space-y-4">
                <h2 className="text-2xl font-bold mb-4">Course Curriculum</h2>
                <div className="space-y-4">
                  {[
                    {
                      module: 'Module 1',
                      title: 'Forex Fundamentals',
                      lessons: 5,
                      duration: '2 hours',
                    },
                    {
                      module: 'Module 2',
                      title: 'Technical Analysis Basics',
                      lessons: 6,
                      duration: '3 hours',
                    },
                    {
                      module: 'Module 3',
                      title: 'Risk Management & Position Sizing',
                      lessons: 4,
                      duration: '2.5 hours',
                    },
                    {
                      module: 'Module 4',
                      title: 'Trading Strategy Development',
                      lessons: 5,
                      duration: '3 hours',
                    },
                    {
                      module: 'Module 5',
                      title: 'Live Trading Practice',
                      lessons: 8,
                      duration: '6 hours',
                    },
                  ].map((item) => (
                    <Card key={item.module}>
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <div>
                            <CardTitle className="text-lg">{item.module}: {item.title}</CardTitle>
                          </div>
                          <Badge variant="secondary">
                            {item.lessons} lessons
                          </Badge>
                        </div>
                        <CardDescription>{item.duration}</CardDescription>
                      </CardHeader>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="schedule" className="space-y-6">
                <h2 className="text-2xl font-bold mb-4">Class Schedule</h2>
                <div className="space-y-4">
                  {course.schedule.map((item, idx) => (
                    <Card key={idx}>
                      <CardContent className="pt-6">
                        <div className="grid sm:grid-cols-3 gap-4">
                          <div>
                            <p className="text-sm text-muted-foreground">Day</p>
                            <p className="font-semibold">{item.day}</p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">Time (GMT+1)</p>
                            <p className="font-semibold flex items-center gap-2">
                              <Clock className="h-4 w-4" />
                              {item.time}
                            </p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">Type</p>
                            <Badge variant="outline">{item.type}</Badge>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <div className="bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                  <p className="text-sm">
                    <strong>Note:</strong> All times are in GMT+1 (West Africa Time - Cameroon). Join links will be provided 24 hours before each class.
                  </p>
                </div>
              </TabsContent>

              <TabsContent value="mentor" className="space-y-6">
                <h2 className="text-2xl font-bold mb-4">About Your Mentor</h2>
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex gap-6">
                      <img
                        src={course.mentorImage || "/placeholder.svg"}
                        alt={course.mentor}
                        className="h-32 w-32 rounded-lg object-cover flex-shrink-0"
                      />
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold mb-2">{course.mentor}</h3>
                        <p className="text-muted-foreground mb-4">{course.mentorBio}</p>
                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            <span className="text-sm">
                              {course.reviews} reviews, {course.rating} rating
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Users className="h-4 w-4 text-blue-600" />
                            <span className="text-sm">
                              {course.totalSpots - course.spotsRemaining} students enrolled
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar - Enrollment Card */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardHeader>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Price</p>
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl font-bold">{course.price.toLocaleString()}</span>
                      <span className="text-muted-foreground">{course.currency}</span>
                    </div>
                  </div>

                  {course.spotsRemaining > 0 ? (
                    <div className="flex items-center gap-2 bg-green-50 dark:bg-green-950 text-green-700 dark:text-green-300 px-3 py-2 rounded-lg text-sm font-medium">
                      <CheckCircle2 className="h-4 w-4" />
                      {course.spotsRemaining} spots remaining
                    </div>
                  ) : (
                    <div className="flex items-center gap-2 bg-red-50 dark:bg-red-950 text-red-700 dark:text-red-300 px-3 py-2 rounded-lg text-sm font-medium">
                      <AlertCircle className="h-4 w-4" />
                      Batch is full
                    </div>
                  )}
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <p className="text-sm font-semibold">Batch Dates</p>
                  <p className="text-sm text-muted-foreground">
                    {new Date(course.startDate).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                    })}{' '}
                    -{' '}
                    {new Date(course.endDate).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric',
                    })}
                  </p>
                </div>

                <Button
                  size="lg"
                  className="w-full"
                  asChild
                  disabled={course.spotsRemaining === 0}
                >
                  <Link href={`/enroll/${course.id}`}>
                    {course.spotsRemaining > 0 ? 'Enroll Now' : 'Join Waitlist'}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>

                <div className="space-y-3 pt-4 border-t border-border">
                  <p className="text-sm font-semibold">Payment Methods</p>

                  <div className="space-y-2 text-sm">
                    <div>
                      <p className="text-xs text-muted-foreground">MTN Money</p>
                      <p className="font-mono font-semibold">{course.paymentMethods.mtn}</p>
                      <p className="text-xs text-muted-foreground mt-1">Name: Lrnable Mentorship</p>
                    </div>

                    <div>
                      <p className="text-xs text-muted-foreground">Orange Money</p>
                      <p className="font-mono font-semibold">{course.paymentMethods.orange}</p>
                      <p className="text-xs text-muted-foreground mt-1">Name: Lrnable Mentorship</p>
                    </div>
                  </div>

                  <div className="bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 rounded p-2 text-xs">
                    <p>
                      <strong>No hidden fees.</strong> What you see is what you pay. 100% of your payment goes to the mentor.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </main>
  )
}
