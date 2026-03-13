'use client'

import React from "react"

import Link from 'next/link'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { toast } from 'sonner'
import { ArrowLeft, Save, Eye, EyeOff } from 'lucide-react'

export default function MentorSettings() {
  const [activeTab, setActiveTab] = useState('profile')
  const [loading, setLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)

  const [profileData, setProfileData] = useState({
    firstName: 'John',
    lastName: 'Mensah',
    email: 'john@lrnable.com',
    bio: 'Forex trading expert with 10+ years of experience',
    specialization: 'Forex Trading',
    experience: '10+ years',
    location: 'Cameroon',
  })

  const [bankData, setBankData] = useState({
    bankName: 'First National Bank',
    accountName: 'John Mensah',
    accountNumber: '****-****-****-1234',
    phoneNumber: '+237 6XX XXX XXX',
    preferredPaymentMethod: 'mtn',
  })

  const handleProfileChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setProfileData((prev) => ({ ...prev, [name]: value }))
  }

  const handleBankChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setBankData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSave = async () => {
    setLoading(true)
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000))
      toast.success('Settings updated successfully')
    } catch (error) {
      toast.error('Failed to update settings')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      {/* Header */}
      <div className="bg-white dark:bg-slate-800 border-b border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center gap-4 mb-4">
            <Button variant="ghost" size="icon" asChild>
              <Link href="/mentor/dashboard">
                <ArrowLeft className="h-5 w-5" />
              </Link>
            </Button>
            <h1 className="text-3xl font-bold">Mentor Settings</h1>
          </div>
          <p className="text-muted-foreground">Manage your mentor profile and payment settings</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full max-w-md grid-cols-3">
            <TabsTrigger value="profile">Profile</TabsTrigger>
            <TabsTrigger value="payment">Payment</TabsTrigger>
            <TabsTrigger value="availability">Availability</TabsTrigger>
          </TabsList>

          {/* Profile Tab */}
          <TabsContent value="profile" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Profile Information</CardTitle>
                <CardDescription>Update your mentor profile details</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center gap-6 pb-6 border-b border-border">
                  <div className="h-24 w-24 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-3xl font-bold text-blue-600">
                    {profileData.firstName.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold">
                      {profileData.firstName} {profileData.lastName}
                    </p>
                    <p className="text-sm text-muted-foreground">{profileData.email}</p>
                    <Button variant="outline" size="sm" className="mt-2 bg-transparent">
                      Change Avatar
                    </Button>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      value={profileData.firstName}
                      onChange={handleProfileChange}
                      placeholder="Enter first name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      value={profileData.lastName}
                      onChange={handleProfileChange}
                      placeholder="Enter last name"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={profileData.email}
                    onChange={handleProfileChange}
                    placeholder="your@email.com"
                    disabled
                  />
                  <p className="text-xs text-muted-foreground">Email cannot be changed</p>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="specialization">Specialization</Label>
                    <Input
                      id="specialization"
                      name="specialization"
                      value={profileData.specialization}
                      onChange={handleProfileChange}
                      placeholder="e.g., Forex Trading"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="experience">Years of Experience</Label>
                    <Input
                      id="experience"
                      name="experience"
                      value={profileData.experience}
                      onChange={handleProfileChange}
                      placeholder="e.g., 10+ years"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="location">Location</Label>
                  <Input
                    id="location"
                    name="location"
                    value={profileData.location}
                    onChange={handleProfileChange}
                    placeholder="Your country/region"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="bio">Professional Bio</Label>
                  <textarea
                    id="bio"
                    name="bio"
                    value={profileData.bio}
                    onChange={handleProfileChange}
                    placeholder="Tell students about your experience and approach..."
                    className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-24"
                  />
                  <p className="text-xs text-muted-foreground">This will be displayed on your mentor profile</p>
                </div>

                <Button onClick={handleSave} disabled={loading} className="w-full gap-2 bg-blue-600 hover:bg-blue-700">
                  <Save className="h-4 w-4" />
                  {loading ? 'Saving...' : 'Save Changes'}
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Payment Tab */}
          <TabsContent value="payment" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Payment Information</CardTitle>
                <CardDescription>Manage your payment methods and payout settings</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                  <p className="text-sm text-muted-foreground mb-2">Current Account Balance</p>
                  <p className="text-3xl font-bold text-blue-600">2,450,000 XAF</p>
                  <p className="text-xs text-muted-foreground mt-1">Pending payout: 1,200,000 XAF</p>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="bankName">Bank Name</Label>
                    <Input
                      id="bankName"
                      name="bankName"
                      value={bankData.bankName}
                      onChange={handleBankChange}
                      placeholder="Your bank name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="accountName">Account Holder Name</Label>
                    <Input
                      id="accountName"
                      name="accountName"
                      value={bankData.accountName}
                      onChange={handleBankChange}
                      placeholder="Full name on account"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="accountNumber">Account Number</Label>
                  <div className="relative">
                    <Input
                      id="accountNumber"
                      name="accountNumber"
                      type={showPassword ? 'text' : 'password'}
                      value={bankData.accountNumber}
                      onChange={handleBankChange}
                      placeholder="Your account number"
                    />
                    <Button
                      variant="ghost"
                      size="sm"
                      className="absolute right-2 top-1/2 -translate-y-1/2"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </Button>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phoneNumber">Phone Number for Mobile Money</Label>
                  <Input
                    id="phoneNumber"
                    name="phoneNumber"
                    value={bankData.phoneNumber}
                    onChange={handleBankChange}
                    placeholder="+237 6XX XXX XXX"
                  />
                </div>

                <div className="space-y-2">
                  <Label>Preferred Payment Method</Label>
                  <div className="space-y-2">
                    {[
                      { value: 'mtn', label: 'MTN Mobile Money' },
                      { value: 'orange', label: 'Orange Money' },
                      { value: 'bank', label: 'Bank Transfer' },
                    ].map((method) => (
                      <label key={method.value} className="flex items-center gap-3 p-3 border border-input rounded-lg cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-800">
                        <input
                          type="radio"
                          name="paymentMethod"
                          value={method.value}
                          checked={bankData.preferredPaymentMethod === method.value}
                          onChange={(e) => setBankData((prev) => ({ ...prev, preferredPaymentMethod: e.target.value }))}
                          className="w-4 h-4"
                        />
                        <span className="font-medium">{method.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <Button onClick={handleSave} disabled={loading} className="w-full gap-2 bg-blue-600 hover:bg-blue-700">
                  <Save className="h-4 w-4" />
                  {loading ? 'Saving...' : 'Save Payment Details'}
                </Button>

                <div className="pt-6 border-t border-border">
                  <h3 className="font-semibold mb-4">Request Payout</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    You can request a payout of your earnings. Minimum payout amount is 500,000 XAF.
                  </p>
                  <Button variant="outline" className="w-full bg-transparent">
                    Request Payout
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Availability Tab */}
          <TabsContent value="availability" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Class Schedule & Availability</CardTitle>
                <CardDescription>Set your teaching schedule and when you're available for Q&A</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'].map((day) => (
                    <div key={day} className="flex items-center justify-between p-4 border border-input rounded-lg">
                      <div>
                        <p className="font-medium">{day}</p>
                        <p className="text-sm text-muted-foreground">7:00 PM - 9:00 PM WAT</p>
                      </div>
                      <Button variant="outline" size="sm">
                        Edit
                      </Button>
                    </div>
                  ))}
                </div>

                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                  <p className="text-sm font-medium text-blue-900 dark:text-blue-100 mb-2">Time Zone</p>
                  <p className="text-sm text-blue-800 dark:text-blue-200">West Africa Time (WAT) - UTC+1</p>
                </div>

                <Button onClick={handleSave} disabled={loading} className="w-full gap-2 bg-blue-600 hover:bg-blue-700">
                  <Save className="h-4 w-4" />
                  {loading ? 'Saving...' : 'Save Schedule'}
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
