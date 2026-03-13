'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
} from 'recharts'
import { Users, TrendingUp, Calendar, MessageSquare, Plus, Settings, LogOut, MessageCircle } from 'lucide-react'

// Mock data
const chartData = [
  { week: 'Week 1', students: 12, active: 12, completed: 0 },
  { week: 'Week 2', students: 15, active: 15, completed: 0 },
  { week: 'Week 3', students: 18, active: 17, completed: 1 },
  { week: 'Week 4', students: 20, active: 19, completed: 2 },
]

const enrollmentData = [
  { month: 'Jan', enrollment: 2, revenue: 300000 },
  { month: 'Feb', enrollment: 5, revenue: 750000 },
  { month: 'Mar', enrollment: 8, revenue: 1200000 },
  { month: 'Apr', enrollment: 12, revenue: 1800000 },
]

const courses = [
  {
    id: 'forex-1',
    title: 'Forex Trading Mastery - Batch 1',
    students: 20,
    startDate: '2024-03-15',
    status: 'active',
    revenue: 3000000,
  },
  {
    id: 'forex-2',
    title: 'Forex Trading Mastery - Batch 2',
    students: 0,
    startDate: '2024-05-01',
    status: 'scheduled',
    revenue: 0,
  },
]

const students = [
  { id: 1, name: 'Alice Johnson', batch: 'Batch 1', joinDate: '2024-03-15', progress: 65, status: 'active' },
  { id: 2, name: 'Bob Smith', batch: 'Batch 1', joinDate: '2024-03-15', progress: 80, status: 'active' },
  { id: 3, name: 'Carol White', batch: 'Batch 1', joinDate: '2024-03-15', progress: 45, status: 'at-risk' },
  { id: 4, name: 'David Brown', batch: 'Batch 1', joinDate: '2024-03-15', progress: 100, status: 'completed' },
]

const messages = [
  { id: 1, student: 'Alice Johnson', message: 'Can you explain support and resistance again?', timestamp: '2 hours ago' },
  { id: 2, student: 'Bob Smith', message: 'When is the next live trading session?', timestamp: '1 day ago' },
  { id: 3, student: 'Carol White', message: 'I have some questions about risk management', timestamp: '2 days ago' },
]

export default function MentorDashboard() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      {/* Header */}
      <div className="bg-white dark:bg-slate-800 border-b border-border sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold">Mentor Dashboard</h1>
              <p className="text-sm text-muted-foreground">Manage your mentorships and students</p>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" asChild>
                <Link href="/mentor/forum" className="gap-2">
                  <MessageCircle className="h-4 w-4" />
                  <span className="hidden sm:inline">Forums</span>
                </Link>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <Link href="/mentor/settings" className="gap-2">
                  <Settings className="h-4 w-4" />
                  <span className="hidden sm:inline">Settings</span>
                </Link>
              </Button>
              <Button variant="outline" size="sm" className="gap-2 bg-transparent">
                <LogOut className="h-4 w-4" />
                <span className="hidden sm:inline">Logout</span>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Students</CardTitle>
              <Users className="h-4 w-4 text-blue-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">20</div>
              <p className="text-xs text-muted-foreground">Across all batches</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Mentorships</CardTitle>
              <Calendar className="h-4 w-4 text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1</div>
              <p className="text-xs text-muted-foreground">Currently running</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
              <TrendingUp className="h-4 w-4 text-purple-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3M XAF</div>
              <p className="text-xs text-muted-foreground">From all courses</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Messages</CardTitle>
              <MessageSquare className="h-4 w-4 text-orange-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3</div>
              <p className="text-xs text-muted-foreground">Pending responses</p>
            </CardContent>
          </Card>
        </div>

        {/* Charts */}
        <div className="grid lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Student Progress This Month</CardTitle>
              <CardDescription>Weekly enrollment and completion metrics</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="week" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="active" fill="#3b82f6" name="Active Students" />
                  <Bar dataKey="completed" fill="#10b981" name="Completed" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Revenue Trend</CardTitle>
              <CardDescription>Monthly enrollment and revenue</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={enrollmentData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis yAxisId="left" />
                  <YAxis yAxisId="right" orientation="right" />
                  <Tooltip />
                  <Legend />
                  <Line yAxisId="left" type="monotone" dataKey="enrollment" stroke="#3b82f6" name="New Enrollments" />
                  <Line yAxisId="right" type="monotone" dataKey="revenue" stroke="#10b981" name="Revenue (XAF)" />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="courses" className="space-y-6">
          <TabsList>
            <TabsTrigger value="courses">My Courses</TabsTrigger>
            <TabsTrigger value="students">Students</TabsTrigger>
            <TabsTrigger value="messages">Messages</TabsTrigger>
          </TabsList>

          {/* Courses Tab */}
          <TabsContent value="courses" className="space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">My Mentorships</h3>
              <Button className="gap-2 bg-blue-600 hover:bg-blue-700">
                <Plus className="h-4 w-4" />
                <span className="hidden sm:inline">Create New Batch</span>
              </Button>
            </div>

            <div className="space-y-4">
              {courses.map((course) => (
                <Card key={course.id} className="hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h4 className="font-semibold">{course.title}</h4>
                          <span
                            className={`text-xs px-2 py-1 rounded-full ${
                              course.status === 'active'
                                ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100'
                                : 'bg-slate-100 text-slate-800 dark:bg-slate-700 dark:text-slate-100'
                            }`}
                          >
                            {course.status}
                          </span>
                        </div>
                        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Users className="h-4 w-4" />
                            {course.students} students
                          </span>
                          <span className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {course.startDate}
                          </span>
                          <span className="font-medium text-foreground">
                            Revenue: {course.revenue.toLocaleString()} XAF
                          </span>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" asChild>
                          <Link href={`/mentor/course/${course.id}`}>Manage</Link>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Students Tab */}
          <TabsContent value="students" className="space-y-4">
            <h3 className="text-lg font-semibold">All Students</h3>

            <div className="border border-border rounded-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border bg-slate-50 dark:bg-slate-800">
                      <th className="px-6 py-3 text-left text-sm font-semibold">Name</th>
                      <th className="px-6 py-3 text-left text-sm font-semibold">Batch</th>
                      <th className="px-6 py-3 text-left text-sm font-semibold">Join Date</th>
                      <th className="px-6 py-3 text-left text-sm font-semibold">Progress</th>
                      <th className="px-6 py-3 text-left text-sm font-semibold">Status</th>
                      <th className="px-6 py-3 text-left text-sm font-semibold">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {students.map((student) => (
                      <tr key={student.id} className="border-b border-border hover:bg-slate-50 dark:hover:bg-slate-800">
                        <td className="px-6 py-3">{student.name}</td>
                        <td className="px-6 py-3 text-muted-foreground">{student.batch}</td>
                        <td className="px-6 py-3 text-muted-foreground">{student.joinDate}</td>
                        <td className="px-6 py-3">
                          <div className="flex items-center gap-2">
                            <div className="flex-1 h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                              <div
                                className="h-full bg-blue-600 transition-all"
                                style={{ width: `${student.progress}%` }}
                              />
                            </div>
                            <span className="text-sm font-medium w-10 text-right">{student.progress}%</span>
                          </div>
                        </td>
                        <td className="px-6 py-3">
                          <span
                            className={`text-xs px-2 py-1 rounded-full ${
                              student.status === 'active'
                                ? 'bg-green-100 text-green-800 dark:bg-green-900'
                                : student.status === 'at-risk'
                                  ? 'bg-orange-100 text-orange-800 dark:bg-orange-900'
                                  : 'bg-blue-100 text-blue-800 dark:bg-blue-900'
                            }`}
                          >
                            {student.status}
                          </span>
                        </td>
                        <td className="px-6 py-3">
                          <Button variant="outline" size="sm">
                            View
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </TabsContent>

          {/* Messages Tab */}
          <TabsContent value="messages" className="space-y-4">
            <h3 className="text-lg font-semibold">Student Messages</h3>

            <div className="space-y-4">
              {messages.map((msg) => (
                <Card key={msg.id} className="hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <p className="font-semibold">{msg.student}</p>
                        <p className="text-muted-foreground text-sm mt-1">{msg.message}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-xs text-muted-foreground">{msg.timestamp}</p>
                        <Button variant="outline" size="sm" className="mt-2 bg-transparent">
                          Reply
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
