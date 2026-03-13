'use client'

import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import {
  MessageSquare,
  Video,
  FileText,
  CheckCircle2,
  Calendar,
  Send,
  Download,
  Upload,
  Share2,
} from 'lucide-react'

export default function MentorshipDetailPage({ params }: { params: Promise<{ id: string }> | { id: string } }) {
  const resolvedParams = React.use(params as Promise<{ id: string }>)
  // Mock data
  const mentorship = {
    id: 1,
    title: 'Forex Trading Fundamentals',
    mentor: 'John Nkomo',
    progress: 60,
    completedLessons: 12,
    totalLessons: 20,
    startDate: '2024-03-01',
    endDate: '2024-04-15',
    status: 'active',
  }

  const lessons = [
    {
      id: 1,
      module: 'Module 1: Forex Fundamentals',
      title: 'Introduction to Forex Markets',
      duration: '45 min',
      completed: true,
      videoLink: 'https://youtube.com/embed/example',
    },
    {
      id: 2,
      module: 'Module 1: Forex Fundamentals',
      title: 'Currency Pairs Explained',
      duration: '52 min',
      completed: true,
      videoLink: 'https://youtube.com/embed/example',
    },
    {
      id: 3,
      module: 'Module 2: Technical Analysis',
      title: 'Reading Candlestick Charts',
      duration: '38 min',
      completed: true,
      videoLink: 'https://youtube.com/embed/example',
    },
    {
      id: 4,
      module: 'Module 2: Technical Analysis',
      title: 'Support & Resistance Levels',
      duration: '41 min',
      completed: false,
      videoLink: 'https://youtube.com/embed/example',
    },
  ]

  const assignments = [
    {
      id: 1,
      title: 'Identify Currency Pairs',
      description: 'Submit a screenshot showing 5 different currency pairs and their current exchange rates',
      dueDate: '2024-02-20',
      status: 'submitted',
      submittedDate: '2024-02-18',
      feedback: 'Great work! You correctly identified all pairs. Well done.',
    },
    {
      id: 2,
      title: 'Chart Analysis Task',
      description: 'Analyze a provided EUR/USD chart and identify support/resistance levels',
      dueDate: '2024-02-25',
      status: 'pending',
      submittedDate: null,
      feedback: null,
    },
  ]

  const messages = [
    {
      id: 1,
      author: 'John Nkomo',
      role: 'Mentor',
      message: 'Welcome to the cohort! Excited to have you here. Make sure to introduce yourself in the channel.',
      timestamp: '2024-02-10 10:00 AM',
    },
    {
      id: 2,
      author: 'You',
      role: 'You',
      message: 'Thank you John! Looking forward to learning from you. I have some questions about risk management.',
      timestamp: '2024-02-10 10:30 AM',
    },
    {
      id: 3,
      author: 'John Nkomo',
      role: 'Mentor',
      message: 'Great! Risk management is crucial. We\'ll cover that in Module 3. For now, focus on understanding the basics.',
      timestamp: '2024-02-10 10:45 AM',
    },
  ]

  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h1 className="text-3xl font-bold mb-2">{mentorship.title}</h1>
              <p className="text-muted-foreground">
                Mentored by {mentorship.mentor} • {mentorship.startDate} to {mentorship.endDate}
              </p>
            </div>
            <Badge>{mentorship.status}</Badge>
          </div>

          {/* Progress */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium">
                {mentorship.completedLessons} / {mentorship.totalLessons} lessons completed
              </p>
              <p className="text-sm font-medium">{mentorship.progress}%</p>
            </div>
            <Progress value={mentorship.progress} className="h-2" />
          </div>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="lessons" className="w-full space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="lessons" className="flex items-center gap-2">
              <Video className="h-4 w-4" />
              <span className="hidden sm:inline">Lessons</span>
            </TabsTrigger>
            <TabsTrigger value="assignments" className="flex items-center gap-2">
              <FileText className="h-4 w-4" />
              <span className="hidden sm:inline">Assignments</span>
            </TabsTrigger>
            <TabsTrigger value="messaging" className="flex items-center gap-2">
              <MessageSquare className="h-4 w-4" />
              <span className="hidden sm:inline">Messages</span>
            </TabsTrigger>
            <TabsTrigger value="resources" className="flex items-center gap-2">
              <Download className="h-4 w-4" />
              <span className="hidden sm:inline">Resources</span>
            </TabsTrigger>
          </TabsList>

          {/* Lessons */}
          <TabsContent value="lessons" className="space-y-4">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold">Course Content</h2>
              <Button variant="outline" size="sm">
                <Download className="mr-2 h-4 w-4" />
                Download All
              </Button>
            </div>

            <div className="space-y-3">
              {lessons.map((lesson) => (
                <Card
                  key={lesson.id}
                  className={lesson.completed ? 'opacity-75' : ''}
                >
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-1">
                        <p className="text-xs text-muted-foreground mb-1">{lesson.module}</p>
                        <h3 className="font-semibold">{lesson.title}</h3>
                        <p className="text-xs text-muted-foreground mt-1">{lesson.duration}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        {lesson.completed && (
                          <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0" />
                        )}
                        <Button size="sm" asChild>
                          <a href={lesson.videoLink} target="_blank" rel="noopener noreferrer">
                            {lesson.completed ? 'Rewatch' : 'Watch'}
                          </a>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Assignments */}
          <TabsContent value="assignments" className="space-y-4">
            <h2 className="text-2xl font-bold">Your Assignments</h2>

            <div className="space-y-4">
              {assignments.map((assignment) => (
                <Card key={assignment.id}>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-lg">{assignment.title}</CardTitle>
                        <CardDescription className="mt-2">{assignment.description}</CardDescription>
                      </div>
                      <Badge variant={assignment.status === 'submitted' ? 'default' : 'secondary'}>
                        {assignment.status}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground" suppressHydrationWarning>
                        Due: {new Date(assignment.dueDate).toLocaleDateString()}
                      </span>
                    </div>

                    {assignment.status === 'submitted' ? (
                      <div className="space-y-3">
                        {assignment.feedback && (
                          <div className="bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800 rounded-lg p-4">
                            <p className="text-sm font-semibold text-green-900 dark:text-green-100 mb-1">
                              Mentor Feedback
                            </p>
                            <p className="text-sm text-green-800 dark:text-green-200">
                              {assignment.feedback}
                            </p>
                          </div>
                        )}
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <CheckCircle2 className="h-4 w-4 text-green-600" />
                          <span>Submitted on {assignment.submittedDate}</span>
                        </div>
                      </div>
                    ) : (
                      <Button size="sm" asChild>
                        <Link href={`/mentorship/${mentorship.id}/submit/${assignment.id}`}>
                          <Upload className="mr-2 h-4 w-4" />
                          Submit Assignment
                        </Link>
                      </Button>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Messaging */}
          <TabsContent value="messaging" className="space-y-4">
            <h2 className="text-2xl font-bold">Group Messaging</h2>

            <div className="space-y-4">
              {/* Messages */}
              <Card>
                <CardContent className="pt-6 space-y-4 max-h-96 overflow-y-auto">
                  {messages.map((msg) => (
                    <div key={msg.id} className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-sm">{msg.author}</span>
                        {msg.role === 'Mentor' && <Badge className="bg-blue-600" variant="default">Mentor</Badge>}
                        <span className="text-xs text-muted-foreground">{msg.timestamp}</span>
                      </div>
                      <p className="text-sm text-muted-foreground">{msg.message}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Message Input */}
              <Card>
                <CardContent className="pt-6">
                  <div className="space-y-3">
                    <Textarea placeholder="Type a message..." rows={3} />
                    <div className="flex gap-2">
                      <Button size="sm" className="flex-1">
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </Button>
                      <Button size="sm" variant="outline">
                        <Share2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* WhatsApp CTA */}
              <div className="bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800 rounded-lg p-4">
                <p className="text-sm mb-2">
                  <strong>Active discussions on WhatsApp:</strong>
                </p>
                <Button size="sm" variant="outline" asChild>
                  <a href="https://wa.me/" target="_blank" rel="noopener noreferrer">
                    Join WhatsApp Group
                  </a>
                </Button>
              </div>
            </div>
          </TabsContent>

          {/* Resources */}
          <TabsContent value="resources" className="space-y-4">
            <h2 className="text-2xl font-bold">Study Materials</h2>

            <div className="space-y-3">
              {[
                { name: 'Forex Trading Glossary.pdf', size: '2.3 MB' },
                { name: 'Currency Pair Reference Guide.pdf', size: '1.8 MB' },
                { name: 'Technical Analysis Cheat Sheet.pdf', size: '945 KB' },
                { name: 'Trading Journal Template.xlsx', size: '156 KB' },
              ].map((resource, idx) => (
                <Card key={idx}>
                  <CardContent className="pt-6 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <FileText className="h-5 w-5 text-blue-600" />
                      <div>
                        <p className="font-medium text-sm">{resource.name}</p>
                        <p className="text-xs text-muted-foreground">{resource.size}</p>
                      </div>
                    </div>
                    <Button size="sm" variant="outline">
                      Download
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
