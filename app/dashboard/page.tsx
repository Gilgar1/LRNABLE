'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import {
  Calendar,
  Clock,
  BookOpen,
  FileText,
  MessageSquare,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  Video,
  Users,
  MessageCircle,
} from 'lucide-react'

export default function LearnerDashboard() {
  // Mock data
  const dashboardLinks = [
    { label: 'Dashboard', href: '/dashboard' },
    { label: 'Forums', href: '/dashboard/forum', icon: MessageCircle },
    { label: 'Profile', href: '/dashboard/profile' },
  ]

  const enrolledMentorships = [
    {
      id: 1,
      title: 'Forex Trading Fundamentals',
      mentor: 'John Nkomo',
      batch: 'Batch 1',
      startDate: '2024-03-01',
      endDate: '2024-04-15',
      progress: 60,
      status: 'active',
      totalLessons: 20,
      completedLessons: 12,
      daysRemaining: 28,
    },
    {
      id: 2,
      title: 'Social Media Marketing Mastery',
      mentor: 'Charles Tagne',
      batch: 'Batch 2',
      startDate: '2024-02-15',
      endDate: '2024-03-30',
      progress: 85,
      status: 'active',
      totalLessons: 15,
      completedLessons: 13,
      daysRemaining: 15,
    },
  ]

  const upcomingClasses = [
    {
      id: 1,
      title: 'Technical Analysis Basics',
      mentor: 'John Nkomo',
      mentorshipTitle: 'Forex Trading Fundamentals',
      date: '2024-02-15',
      time: '20:00',
      timezone: 'GMT+1',
      meetingLink: 'https://meet.google.com/example',
      type: 'live',
    },
    {
      id: 2,
      title: 'Content Strategy Workshop',
      mentor: 'Charles Tagne',
      mentorshipTitle: 'Social Media Marketing Mastery',
      date: '2024-02-16',
      time: '19:30',
      timezone: 'GMT+1',
      meetingLink: 'https://zoom.us/example',
      type: 'live',
    },
  ]

  const pendingApprovals = [
    {
      id: 1,
      course: 'Advanced Scalping Strategies',
      mentor: 'Marie Douala',
      price: 85000,
      currency: 'XAF',
      appliedDate: '2024-02-10',
      status: 'pending',
    },
  ]

  return (
    <main className="min-h-screen bg-background px-4 sm:px-6 lg:px-8 py-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground">Welcome back, Student</h1>
          <p className="text-muted-foreground mt-2">Track your progress, access your classes, and complete assignments</p>
        </div>

        {/* Quick Access Links */}
        <div className="flex gap-2 mb-8 flex-wrap">
          <Link href="/dashboard" className="px-4 py-2 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-colors text-sm font-medium">
            Dashboard
          </Link>
          <Link href="/dashboard/forum" className="px-4 py-2 rounded-lg bg-secondary/10 text-secondary hover:bg-secondary/20 transition-colors text-sm font-medium flex items-center gap-2">
            <MessageCircle className="h-4 w-4" />
            Class Forums
          </Link>
          <Link href="/dashboard/profile" className="px-4 py-2 rounded-lg bg-muted/10 text-foreground hover:bg-muted/20 transition-colors text-sm font-medium">
            Profile
          </Link>
        </div>

        {/* Stats */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <p className="text-3xl font-bold text-blue-600">2</p>
                <p className="text-sm text-muted-foreground">Active Mentorships</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <p className="text-3xl font-bold text-green-600">25</p>
                <p className="text-sm text-muted-foreground">Lessons Completed</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <p className="text-3xl font-bold text-purple-600">5</p>
                <p className="text-sm text-muted-foreground">Assignments Submitted</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <p className="text-3xl font-bold text-orange-600">1</p>
                <p className="text-sm text-muted-foreground">Pending Approval</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="upcoming" className="w-full space-y-6">
          <TabsList className="grid w-full grid-cols-4 lg:grid-cols-4">
            <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
            <TabsTrigger value="active">Active</TabsTrigger>
            <TabsTrigger value="approvals">Approvals</TabsTrigger>
            <TabsTrigger value="progress">Progress</TabsTrigger>
          </TabsList>

          {/* Upcoming Classes */}
          <TabsContent value="upcoming" className="space-y-4">
            <h2 className="text-2xl font-bold">Upcoming Classes</h2>
            {upcomingClasses.length === 0 ? (
              <Card>
                <CardContent className="pt-12 text-center pb-12">
                  <Calendar className="h-12 w-12 text-muted-foreground mx-auto mb-4 opacity-50" />
                  <p className="text-muted-foreground">No upcoming classes scheduled</p>
                </CardContent>
              </Card>
            ) : (
              <div className="space-y-4">
                {upcomingClasses.map((cls) => (
                  <Card key={cls.id} className="overflow-hidden">
                    <CardContent className="pt-6">
                      <div className="space-y-4">
                        <div>
                          <p className="text-sm text-muted-foreground mb-1">{cls.mentorshipTitle}</p>
                          <h3 className="text-lg font-semibold">{cls.title}</h3>
                          <p className="text-sm text-muted-foreground">with {cls.mentor}</p>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-4">
                          <div className="flex items-center gap-2 text-sm">
                            <Calendar className="h-4 w-4 text-muted-foreground" />
                            <span suppressHydrationWarning>
                              {new Date(cls.date).toLocaleDateString('en-US', {
                                weekday: 'short',
                                month: 'short',
                                day: 'numeric',
                              })}
                            </span>
                          </div>
                          <div className="flex items-center gap-2 text-sm">
                            <Clock className="h-4 w-4 text-muted-foreground" />
                            <span>
                              {cls.time} {cls.timezone}
                            </span>
                          </div>
                        </div>

                        <div className="flex gap-2 pt-2">
                          <Button size="sm" asChild className="flex-1">
                            <a href={cls.meetingLink} target="_blank" rel="noopener noreferrer">
                              Join Class
                              <ArrowRight className="ml-2 h-4 w-4" />
                            </a>
                          </Button>
                          <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                            Add to Calendar
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </TabsContent>

          {/* Active Mentorships */}
          <TabsContent value="active" className="space-y-4">
            <h2 className="text-2xl font-bold">Active Mentorships</h2>
            <div className="space-y-4">
              {enrolledMentorships.map((mentorship) => (
                <Card key={mentorship.id}>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle>{mentorship.title}</CardTitle>
                        <CardDescription>
                          {mentorship.mentor} • {mentorship.batch}
                        </CardDescription>
                      </div>
                      <Badge>{mentorship.status}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {/* Progress */}
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <p className="text-sm font-medium">Progress</p>
                        <p className="text-sm text-muted-foreground">
                          {mentorship.completedLessons} / {mentorship.totalLessons} lessons
                        </p>
                      </div>
                      <Progress value={mentorship.progress} className="h-2" />
                    </div>

                    {/* Timeline */}
                    <div className="grid sm:grid-cols-2 gap-4 text-sm">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        <div>
                          <p className="text-muted-foreground text-xs">Dates</p>
                          <p className="font-medium" suppressHydrationWarning>
                            {new Date(mentorship.startDate).toLocaleDateString('en-US', {
                              month: 'short',
                              day: 'numeric',
                            })}{' '}
                            -{' '}
                            {new Date(mentorship.endDate).toLocaleDateString('en-US', {
                              month: 'short',
                              day: 'numeric',
                            })}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <div>
                          <p className="text-muted-foreground text-xs">Days Remaining</p>
                          <p className="font-medium">{mentorship.daysRemaining} days</p>
                        </div>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex gap-2 pt-2">
                      <Button size="sm" variant="outline" asChild className="flex-1 bg-transparent">
                        <Link href={`/mentorship/${mentorship.id}`}>
                          View Details
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Pending Approvals */}
          <TabsContent value="approvals" className="space-y-4">
            <h2 className="text-2xl font-bold">Enrollment Approvals</h2>
            {pendingApprovals.length === 0 ? (
              <Card>
                <CardContent className="pt-12 text-center pb-12">
                  <CheckCircle2 className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <p className="text-muted-foreground">All your enrollments are approved!</p>
                </CardContent>
              </Card>
            ) : (
              <div className="space-y-4">
                {pendingApprovals.map((approval) => (
                  <Card key={approval.id} className="border-yellow-200 dark:border-yellow-800">
                    <CardContent className="pt-6">
                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <AlertCircle className="h-5 w-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                          <div className="flex-1">
                            <h3 className="font-semibold">{approval.course}</h3>
                            <p className="text-sm text-muted-foreground">
                              Mentored by {approval.mentor}
                            </p>
                            <p className="text-sm font-medium mt-1">
                              {approval.price.toLocaleString()} {approval.currency}
                            </p>
                          </div>
                        </div>

                        <div className="bg-yellow-50 dark:bg-yellow-950 border border-yellow-200 dark:border-yellow-800 rounded p-3 text-sm">
                          <p className="font-medium text-yellow-900 dark:text-yellow-100 mb-1">
                            Awaiting Mentor Approval
                          </p>
                          <p className="text-yellow-800 dark:text-yellow-200 text-xs" suppressHydrationWarning>
                            You uploaded your payment proof on{' '}
                            {new Date(approval.appliedDate).toLocaleDateString()}. Your mentor will
                            review and approve within 24-48 hours.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </TabsContent>

          {/* Progress */}
          <TabsContent value="progress" className="space-y-4">
            <h2 className="text-2xl font-bold">Your Progress</h2>
            <div className="space-y-4">
              {enrolledMentorships.map((mentorship) => (
                <Card key={mentorship.id}>
                  <CardHeader>
                    <CardTitle className="text-lg">{mentorship.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Lessons */}
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <Video className="h-5 w-5 text-blue-600" />
                        <p className="font-semibold">Lessons</p>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-sm">
                            {mentorship.completedLessons} / {mentorship.totalLessons} completed
                          </span>
                          <span className="text-sm font-medium">
                            {Math.round((mentorship.completedLessons / mentorship.totalLessons) * 100)}%
                          </span>
                        </div>
                        <Progress
                          value={(mentorship.completedLessons / mentorship.totalLessons) * 100}
                          className="h-2"
                        />
                      </div>
                    </div>

                    {/* Assignments */}
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <FileText className="h-5 w-5 text-purple-600" />
                        <p className="font-semibold">Assignments</p>
                      </div>
                      <p className="text-sm text-muted-foreground">4 out of 8 submitted</p>
                    </div>

                    {/* Actions */}
                    <Button size="sm" asChild className="w-full">
                      <Link href={`/mentorship/${mentorship.id}`}>
                        Continue Learning
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </main>
  )
}
