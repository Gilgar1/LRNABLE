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
import { ArrowLeft, Save, Shield, Bell, Lock } from 'lucide-react'

export default function AdminSettings() {
  const [activeTab, setActiveTab] = useState('general')
  const [loading, setLoading] = useState(false)

  const [settings, setSettings] = useState({
    platformName: 'Lrnable',
    platformEmail: 'admin@lrnable.com',
    supportEmail: 'support@lrnable.com',
    minEnrollment: '150000',
    maxEnrollment: '300000',
    mentorCommission: '30',
    platformFee: '10',
    currency: 'XAF',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setSettings((prev) => ({ ...prev, [name]: value }))
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
              <Link href="/admin/dashboard">
                <ArrowLeft className="h-5 w-5" />
              </Link>
            </Button>
            <h1 className="text-3xl font-bold">Platform Settings</h1>
          </div>
          <p className="text-muted-foreground">Configure platform-wide settings</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full max-w-md grid-cols-3">
            <TabsTrigger value="general" className="gap-2">
              General
            </TabsTrigger>
            <TabsTrigger value="payments" className="gap-2">
              Payments
            </TabsTrigger>
            <TabsTrigger value="security" className="gap-2">
              Security
            </TabsTrigger>
          </TabsList>

          {/* General Tab */}
          <TabsContent value="general" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Platform Information</CardTitle>
                <CardDescription>Basic platform settings</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="platformName">Platform Name</Label>
                  <Input
                    id="platformName"
                    name="platformName"
                    value={settings.platformName}
                    onChange={handleChange}
                    placeholder="Platform name"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="platformEmail">Platform Email</Label>
                    <Input
                      id="platformEmail"
                      name="platformEmail"
                      type="email"
                      value={settings.platformEmail}
                      onChange={handleChange}
                      placeholder="admin@platform.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="supportEmail">Support Email</Label>
                    <Input
                      id="supportEmail"
                      name="supportEmail"
                      type="email"
                      value={settings.supportEmail}
                      onChange={handleChange}
                      placeholder="support@platform.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="currency">Default Currency</Label>
                  <Input
                    id="currency"
                    name="currency"
                    value={settings.currency}
                    onChange={handleChange}
                    placeholder="Currency code"
                  />
                </div>

                <Button onClick={handleSave} disabled={loading} className="w-full gap-2 bg-blue-600 hover:bg-blue-700">
                  <Save className="h-4 w-4" />
                  {loading ? 'Saving...' : 'Save Changes'}
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Payments Tab */}
          <TabsContent value="payments" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Payment Settings</CardTitle>
                <CardDescription>Configure payment methods and fees</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="minEnrollment">Minimum Enrollment Price</Label>
                    <div className="flex gap-2">
                      <Input
                        id="minEnrollment"
                        name="minEnrollment"
                        type="number"
                        value={settings.minEnrollment}
                        onChange={handleChange}
                        placeholder="Minimum price"
                      />
                      <span className="flex items-center text-muted-foreground">{settings.currency}</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="maxEnrollment">Maximum Enrollment Price</Label>
                    <div className="flex gap-2">
                      <Input
                        id="maxEnrollment"
                        name="maxEnrollment"
                        type="number"
                        value={settings.maxEnrollment}
                        onChange={handleChange}
                        placeholder="Maximum price"
                      />
                      <span className="flex items-center text-muted-foreground">{settings.currency}</span>
                    </div>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="mentorCommission">Mentor Commission (%)</Label>
                    <Input
                      id="mentorCommission"
                      name="mentorCommission"
                      type="number"
                      value={settings.mentorCommission}
                      onChange={handleChange}
                      placeholder="Commission percentage"
                    />
                    <p className="text-xs text-muted-foreground">Percentage mentors receive from each enrollment</p>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="platformFee">Platform Fee (%)</Label>
                    <Input
                      id="platformFee"
                      name="platformFee"
                      type="number"
                      value={settings.platformFee}
                      onChange={handleChange}
                      placeholder="Platform fee percentage"
                    />
                    <p className="text-xs text-muted-foreground">Percentage retained by platform</p>
                  </div>
                </div>

                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                  <p className="text-sm font-medium mb-2">Fee Breakdown (per 100,000 XAF enrollment)</p>
                  <div className="space-y-1 text-sm text-muted-foreground">
                    <p>Mentor receives: {(parseInt(settings.mentorCommission) * 100000) / 100}.00 XAF</p>
                    <p>Platform receives: {(parseInt(settings.platformFee) * 100000) / 100}.00 XAF</p>
                  </div>
                </div>

                <Button onClick={handleSave} disabled={loading} className="w-full gap-2 bg-blue-600 hover:bg-blue-700">
                  <Save className="h-4 w-4" />
                  {loading ? 'Saving...' : 'Save Payment Settings'}
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Payment Methods</CardTitle>
                <CardDescription>Enabled payment methods</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  { name: 'MTN Mobile Money', enabled: true },
                  { name: 'Orange Money', enabled: true },
                  { name: 'PayPal', enabled: true },
                  { name: 'Bank Transfer', enabled: false },
                ].map((method) => (
                  <div key={method.name} className="flex items-center justify-between p-4 border border-input rounded-lg">
                    <p className="font-medium">{method.name}</p>
                    <div className="relative inline-block w-12 h-6 bg-slate-300 dark:bg-slate-600 rounded-full cursor-pointer">
                      <div
                        className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform ${
                          method.enabled ? 'translate-x-6 bg-blue-600' : ''
                        }`}
                      />
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Security Tab */}
          <TabsContent value="security" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Security Settings</CardTitle>
                <CardDescription>Platform security and moderation</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 border border-input rounded-lg">
                    <div>
                      <p className="font-medium">Two-Factor Authentication</p>
                      <p className="text-sm text-muted-foreground">Require 2FA for all admin accounts</p>
                    </div>
                    <div className="relative inline-block w-12 h-6 bg-blue-600 rounded-full cursor-pointer">
                      <div className="absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform translate-x-6" />
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-4 border border-input rounded-lg">
                    <div>
                      <p className="font-medium">Auto-Suspend on Reports</p>
                      <p className="text-sm text-muted-foreground">Automatically suspend accounts with 3+ reports</p>
                    </div>
                    <div className="relative inline-block w-12 h-6 bg-slate-300 dark:bg-slate-600 rounded-full cursor-pointer">
                      <div className="absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform" />
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-4 border border-input rounded-lg">
                    <div>
                      <p className="font-medium">Email Verification Required</p>
                      <p className="text-sm text-muted-foreground">Require email verification for new accounts</p>
                    </div>
                    <div className="relative inline-block w-12 h-6 bg-blue-600 rounded-full cursor-pointer">
                      <div className="absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform translate-x-6" />
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-4 border border-input rounded-lg">
                    <div>
                      <p className="font-medium">Content Moderation</p>
                      <p className="text-sm text-muted-foreground">Enable automatic content filtering</p>
                    </div>
                    <div className="relative inline-block w-12 h-6 bg-blue-600 rounded-full cursor-pointer">
                      <div className="absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform translate-x-6" />
                    </div>
                  </div>
                </div>

                <Button onClick={handleSave} disabled={loading} className="w-full gap-2 bg-blue-600 hover:bg-blue-700">
                  <Save className="h-4 w-4" />
                  {loading ? 'Saving...' : 'Save Security Settings'}
                </Button>
              </CardContent>
            </Card>

            <Card className="border-red-200 dark:border-red-900 bg-red-50 dark:bg-red-900/20">
              <CardHeader>
                <CardTitle className="text-red-900 dark:text-red-100">Danger Zone</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-red-900 dark:text-red-200">These actions cannot be undone. Be careful.</p>
                <div className="space-y-2">
                  <Button variant="destructive" className="w-full">
                    Clear All Cache
                  </Button>
                  <Button variant="destructive" className="w-full">
                    Reset Platform Data
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
