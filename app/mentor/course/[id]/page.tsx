'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { toast } from 'sonner'
import { ArrowLeft, Plus, Upload, Send, Edit2, Trash2 } from 'lucide-react'

// Mock data
const courseData = {
  title: 'Forex Trading Mastery - Batch 1',
  description: 'Learn professional forex trading strategies and risk management',
  schedule: 'Tuesdays & Thursdays, 7PM WAT',
  students: 20,
  startDate: '2024-03-15',
  status: 'active',
}

const modules = [
  { id: 1, title: 'Module 1: Forex Basics', lessons: 5, completed: 5 },
  { id: 2, title: 'Module 2: Technical Analysis', lessons: 6, completed: 4 },
  { id: 3, title: 'Module 3: Risk Management', lessons: 4, completed: 0 },
]

const assignments = [
  { id: 1, title: 'Analyze a currency pair', dueDate: '2024-04-01', submissions: 15, totalStudents: 20 },
  { id: 2, title: 'Create a trading plan', dueDate: '2024-04-08', submissions: 12, totalStudents: 20 },
  { id: 3, title: 'Live trading session notes', dueDate: '2024-04-15', submissions: 8, totalStudents: 20 },
]

const announcements = [
  {
    id: 1,
    title: 'Class Rescheduled - April 3rd',
    content: 'Due to a technical issue, the class on April 3rd has been rescheduled to April 4th at the same time.',
    date: '2 days ago',
  },
  {
    id: 2,
    title: 'New Resources Available',
    content: 'I have uploaded the latest market analysis and trading templates to the course materials.',
    date: '1 week ago',
  },
]

export default function MentorCourseManagement({ params }: { params: { id: string } }) {
  const courseId = params.id
  const [newAnnouncement, setNewAnnouncement] = useState({ title: '', content: '' })

  const handleAnnouncement = async () => {
    if (!newAnnouncement.title || !newAnnouncement.content) {
      toast.error('Please fill in all fields')
      return
    }
    toast.success('Announcement sent to all students')
    setNewAnnouncement({ title: '', content: '' })
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      {/* Header */}
      <div className="bg-white dark:bg-slate-800 border-b border-border sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center gap-4 mb-4">
            <Button variant="ghost" size="icon" asChild>
              <Link href="/mentor/dashboard">
                <ArrowLeft className="h-5 w-5" />
              </Link>
            </Button>
            <div>
              <h1 className="text-3xl font-bold">{courseData.title}</h1>
              <p className="text-muted-foreground">{courseData.schedule}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="flex-wrap">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="modules">Content</TabsTrigger>
            <TabsTrigger value="assignments">Assignments</TabsTrigger>
            <TabsTrigger value="announcements">Announcements</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            <div className="grid md:grid-cols-4 gap-6">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Total Students</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold">{courseData.students}</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Start Date</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-sm">{courseData.startDate}</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Status</CardTitle>
                </CardHeader>
                <CardContent>
                  <span className="text-xs px-3 py-1 rounded-full bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100">
                    {courseData.status}
                  </span>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Course Code</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-sm font-mono">FOREX-2024-1</p>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Course Description</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{courseData.description}</p>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Modules Tab */}
          <TabsContent value="modules" className="space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">Course Modules</h3>
              <Button className="gap-2 bg-blue-600 hover:bg-blue-700">
                <Plus className="h-4 w-4" />
                Add Module
              </Button>
            </div>

            <div className="space-y-4">
              {modules.map((module) => (
                <Card key={module.id} className="hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <h4 className="font-semibold mb-2">{module.title}</h4>
                        <div className="space-y-3">
                          <div className="flex items-center gap-3">
                            <span className="text-sm text-muted-foreground">
                              {module.completed} of {module.lessons} lessons completed
                            </span>
                          </div>
                          <div className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                            <div
                              className="h-full bg-blue-600 transition-all"
                              style={{ width: `${(module.completed / module.lessons) * 100}%` }}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" className="gap-2 bg-transparent">
                          <Edit2 className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="sm" className="gap-2 bg-transparent">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Assignments Tab */}
          <TabsContent value="assignments" className="space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">Assignments</h3>
              <Button className="gap-2 bg-blue-600 hover:bg-blue-700">
                <Plus className="h-4 w-4" />
                Create Assignment
              </Button>
            </div>

            <div className="space-y-4">
              {assignments.map((assignment) => (
                <Card key={assignment.id} className="hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <h4 className="font-semibold mb-2">{assignment.title}</h4>
                        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                          <span>Due: {assignment.dueDate}</span>
                          <span>
                            Submissions: {assignment.submissions}/{assignment.totalStudents}
                          </span>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        View Submissions
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Announcements Tab */}
          <TabsContent value="announcements" className="space-y-6">
            {/* Create Announcement */}
            <Card>
              <CardHeader>
                <CardTitle>Send Announcement</CardTitle>
                <CardDescription>Send a message to all students in this course</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="announce-title">Title</Label>
                  <Input
                    id="announce-title"
                    placeholder="e.g., Class Schedule Update"
                    value={newAnnouncement.title}
                    onChange={(e) => setNewAnnouncement((prev) => ({ ...prev, title: e.target.value }))}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="announce-content">Message</Label>
                  <textarea
                    id="announce-content"
                    placeholder="Type your announcement here..."
                    className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-24"
                    value={newAnnouncement.content}
                    onChange={(e) => setNewAnnouncement((prev) => ({ ...prev, content: e.target.value }))}
                  />
                </div>
                <Button onClick={handleAnnouncement} className="w-full gap-2 bg-blue-600 hover:bg-blue-700">
                  <Send className="h-4 w-4" />
                  Send to All Students
                </Button>
              </CardContent>
            </Card>

            {/* Previous Announcements */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Previous Announcements</h3>
              <div className="space-y-4">
                {announcements.map((announcement) => (
                  <Card key={announcement.id}>
                    <CardContent className="pt-6">
                      <h4 className="font-semibold mb-2">{announcement.title}</h4>
                      <p className="text-muted-foreground text-sm mb-2">{announcement.content}</p>
                      <p className="text-xs text-muted-foreground">{announcement.date}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          {/* Settings Tab */}
          <TabsContent value="settings" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Course Settings</CardTitle>
                <CardDescription>Manage course configuration</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="course-title">Course Title</Label>
                  <Input id="course-title" value={courseData.title} readOnly />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="course-description">Description</Label>
                  <textarea
                    id="course-description"
                    className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-24"
                    defaultValue={courseData.description}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="course-schedule">Schedule</Label>
                  <Input id="course-schedule" value={courseData.schedule} />
                </div>

                <div className="flex gap-2">
                  <Button className="bg-blue-600 hover:bg-blue-700">Save Changes</Button>
                  <Button variant="outline">Cancel</Button>
                </div>
              </CardContent>
            </Card>

            <Card className="border-red-200 dark:border-red-900 bg-red-50 dark:bg-red-900/20">
              <CardHeader>
                <CardTitle className="text-red-900 dark:text-red-100">Danger Zone</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-red-900 dark:text-red-200 mb-4">
                  These actions cannot be undone. Please be careful.
                </p>
                <Button variant="destructive">Archive Course</Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
