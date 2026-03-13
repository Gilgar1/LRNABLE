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
  PieChart,
  Pie,
  Cell,
} from 'recharts'
import { Users, TrendingUp, DollarSign, AlertCircle, Settings, LogOut, Eye, Trash2, Shield, MessageCircle } from 'lucide-react'

const revenueData = [
  { month: 'Jan', revenue: 1000000, expenses: 300000 },
  { month: 'Feb', revenue: 1500000, expenses: 350000 },
  { month: 'Mar', revenue: 2000000, expenses: 400000 },
  { month: 'Apr', revenue: 2800000, expenses: 450000 },
]

const userGrowthData = [
  { month: 'Jan', learners: 50, mentors: 3 },
  { month: 'Feb', learners: 120, mentors: 5 },
  { month: 'Mar', learners: 280, mentors: 8 },
  { month: 'Apr', learners: 450, mentors: 12 },
]

const courseDistribution = [
  { name: 'Forex Trading', value: 320, color: '#3b82f6' },
  { name: 'Digital Marketing', value: 130, color: '#8b5cf6' },
]

const recentUsers = [
  { id: 1, name: 'Alice Johnson', email: 'alice@example.com', role: 'Learner', joinDate: '2 hours ago', status: 'active' },
  { id: 2, name: 'Bob Smith', email: 'bob@example.com', role: 'Learner', joinDate: '5 hours ago', status: 'active' },
  { id: 3, name: 'Carol White', email: 'carol@example.com', role: 'Mentor', joinDate: '1 day ago', status: 'active' },
  { id: 4, name: 'David Brown', email: 'david@example.com', role: 'Learner', joinDate: '2 days ago', status: 'inactive' },
  { id: 5, name: 'Eve Davis', email: 'eve@example.com', role: 'Learner', joinDate: '3 days ago', status: 'active' },
]

const flaggedContent = [
  { id: 1, type: 'Message', reporter: 'John Doe', reason: 'Inappropriate language', date: '2 hours ago', status: 'pending' },
  { id: 2, type: 'Assignment', reporter: 'Jane Smith', reason: 'Plagiarism suspected', date: '1 day ago', status: 'reviewing' },
  { id: 3, type: 'Profile', reporter: 'Admin', reason: 'Fake information', date: '2 days ago', status: 'resolved' },
]

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      {/* Header */}
      <div className="bg-white dark:bg-slate-800 border-b border-border sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold">Admin Dashboard</h1>
              <p className="text-sm text-muted-foreground">Platform management and analytics</p>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" asChild>
                <Link href="/admin/forum" className="gap-2">
                  <MessageCircle className="h-4 w-4" />
                  <span className="hidden sm:inline">Forums</span>
                </Link>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <Link href="/admin/settings" className="gap-2">
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
              <CardTitle className="text-sm font-medium">Total Users</CardTitle>
              <Users className="h-4 w-4 text-blue-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">462</div>
              <p className="text-xs text-muted-foreground">450 learners, 12 mentors</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
              <DollarSign className="h-4 w-4 text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">7.3M</div>
              <p className="text-xs text-muted-foreground">XAF this month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Courses</CardTitle>
              <TrendingUp className="h-4 w-4 text-purple-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">5</div>
              <p className="text-xs text-muted-foreground">2 categories</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Flagged Items</CardTitle>
              <AlertCircle className="h-4 w-4 text-orange-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3</div>
              <p className="text-xs text-muted-foreground">1 pending review</p>
            </CardContent>
          </Card>
        </div>

        {/* Charts */}
        <div className="grid lg:grid-cols-3 gap-6">
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Revenue & Expenses</CardTitle>
              <CardDescription>Monthly financial overview</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={revenueData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="revenue" fill="#3b82f6" name="Revenue" />
                  <Bar dataKey="expenses" fill="#ef4444" name="Expenses" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Enrollment by Course</CardTitle>
              <CardDescription>Student distribution</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie data={courseDistribution} cx="50%" cy="50%" labelLine={false} label={({ name, value }) => `${name}: ${value}`} outerRadius={80} fill="#8884d8" dataKey="value">
                    {courseDistribution.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* User Growth Chart */}
        <Card>
          <CardHeader>
            <CardTitle>User Growth</CardTitle>
            <CardDescription>Learners and mentors over time</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={userGrowthData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis yAxisId="left" />
                <YAxis yAxisId="right" orientation="right" />
                <Tooltip />
                <Legend />
                <Line yAxisId="left" type="monotone" dataKey="learners" stroke="#3b82f6" name="Learners" />
                <Line yAxisId="right" type="monotone" dataKey="mentors" stroke="#10b981" name="Mentors" />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Tabs */}
        <Tabs defaultValue="users" className="space-y-6">
          <TabsList>
            <TabsTrigger value="users">Recent Users</TabsTrigger>
            <TabsTrigger value="flagged">Flagged Content</TabsTrigger>
            <TabsTrigger value="transactions">Transactions</TabsTrigger>
          </TabsList>

          {/* Users Tab */}
          <TabsContent value="users" className="space-y-4">
            <div className="border border-border rounded-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border bg-slate-50 dark:bg-slate-800">
                      <th className="px-6 py-3 text-left text-sm font-semibold">Name</th>
                      <th className="px-6 py-3 text-left text-sm font-semibold">Email</th>
                      <th className="px-6 py-3 text-left text-sm font-semibold">Role</th>
                      <th className="px-6 py-3 text-left text-sm font-semibold">Join Date</th>
                      <th className="px-6 py-3 text-left text-sm font-semibold">Status</th>
                      <th className="px-6 py-3 text-left text-sm font-semibold">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentUsers.map((user) => (
                      <tr key={user.id} className="border-b border-border hover:bg-slate-50 dark:hover:bg-slate-800">
                        <td className="px-6 py-3 font-medium">{user.name}</td>
                        <td className="px-6 py-3 text-muted-foreground text-sm">{user.email}</td>
                        <td className="px-6 py-3 text-sm">
                          <span className={`px-2 py-1 rounded text-xs font-medium ${user.role === 'Mentor' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900' : 'bg-slate-100 text-slate-800 dark:bg-slate-700'}`}>
                            {user.role}
                          </span>
                        </td>
                        <td className="px-6 py-3 text-muted-foreground text-sm">{user.joinDate}</td>
                        <td className="px-6 py-3 text-sm">
                          <span
                            className={`px-2 py-1 rounded text-xs ${
                              user.status === 'active'
                                ? 'bg-green-100 text-green-800 dark:bg-green-900'
                                : 'bg-slate-100 text-slate-800 dark:bg-slate-700'
                            }`}
                          >
                            {user.status}
                          </span>
                        </td>
                        <td className="px-6 py-3 text-sm">
                          <div className="flex gap-2">
                            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                              <Eye className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="sm" className="h-8 w-8 p-0 text-red-600 hover:text-red-700">
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </TabsContent>

          {/* Flagged Content Tab */}
          <TabsContent value="flagged" className="space-y-4">
            <div className="space-y-4">
              {flaggedContent.map((item) => (
                <Card key={item.id} className={item.status === 'pending' ? 'border-orange-200 bg-orange-50 dark:border-orange-900 dark:bg-orange-900/20' : ''}>
                  <CardContent className="pt-6">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h4 className="font-semibold">{item.type}</h4>
                          <span
                            className={`text-xs px-2 py-1 rounded-full ${
                              item.status === 'pending'
                                ? 'bg-orange-200 text-orange-900 dark:bg-orange-700'
                                : item.status === 'reviewing'
                                  ? 'bg-blue-200 text-blue-900 dark:bg-blue-700'
                                  : 'bg-green-200 text-green-900 dark:bg-green-700'
                            }`}
                          >
                            {item.status}
                          </span>
                        </div>
                        <p className="text-muted-foreground text-sm mb-1">Reported by: {item.reporter}</p>
                        <p className="text-sm font-medium">Reason: {item.reason}</p>
                        <p className="text-xs text-muted-foreground mt-2">{item.date}</p>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          Review
                        </Button>
                        <Button variant="ghost" size="sm" className="text-red-600 hover:text-red-700">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Transactions Tab */}
          <TabsContent value="transactions" className="space-y-4">
            <div className="border border-border rounded-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border bg-slate-50 dark:bg-slate-800">
                      <th className="px-6 py-3 text-left text-sm font-semibold">Date</th>
                      <th className="px-6 py-3 text-left text-sm font-semibold">Type</th>
                      <th className="px-6 py-3 text-left text-sm font-semibold">User</th>
                      <th className="px-6 py-3 text-left text-sm font-semibold">Amount</th>
                      <th className="px-6 py-3 text-left text-sm font-semibold">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { date: '2024-04-10', type: 'Enrollment', user: 'Alice Johnson', amount: '150,000 XAF', status: 'completed' },
                      { date: '2024-04-09', type: 'Payout', user: 'John Mensah (Mentor)', amount: '-2,000,000 XAF', status: 'completed' },
                      { date: '2024-04-08', type: 'Enrollment', user: 'Bob Smith', amount: '120,000 XAF', status: 'completed' },
                      { date: '2024-04-07', type: 'Enrollment', user: 'Carol White', amount: '150,000 XAF', status: 'pending' },
                    ].map((transaction, index) => (
                      <tr key={index} className="border-b border-border hover:bg-slate-50 dark:hover:bg-slate-800">
                        <td className="px-6 py-3 text-sm">{transaction.date}</td>
                        <td className="px-6 py-3 text-sm font-medium">{transaction.type}</td>
                        <td className="px-6 py-3 text-sm text-muted-foreground">{transaction.user}</td>
                        <td className="px-6 py-3 text-sm font-medium">{transaction.amount}</td>
                        <td className="px-6 py-3 text-sm">
                          <span
                            className={`px-2 py-1 rounded text-xs ${
                              transaction.status === 'completed'
                                ? 'bg-green-100 text-green-800 dark:bg-green-900'
                                : 'bg-orange-100 text-orange-800 dark:bg-orange-900'
                            }`}
                          >
                            {transaction.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
