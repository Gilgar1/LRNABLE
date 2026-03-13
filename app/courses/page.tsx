'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import { Star, Users, Calendar, DollarSign, ArrowRight } from 'lucide-react'

// Mock course data
const MOCK_COURSES = [
  {
    id: 1,
    title: 'Forex Trading Fundamentals',
    mentor: 'John Nkomo',
    category: 'forex',
    type: 'mentorship',
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
    image: 'https://images.unsplash.com/photo-1611974212247-6bf2f80b2eb6?w=500&h=300&fit=crop',
  },
  {
    id: 2,
    title: 'Advanced Scalping Strategies',
    mentor: 'Marie Douala',
    category: 'forex',
    type: 'mentorship',
    price: 85000,
    currency: 'XAF',
    rating: 4.9,
    reviews: 18,
    totalSpots: 15,
    spotsRemaining: 0,
    startDate: '2024-03-15',
    endDate: '2024-05-15',
    badge: 'Intensive Mentorship',
    intro: 'Advanced techniques for professional forex traders looking to increase profits.',
    image: 'https://images.unsplash.com/photo-1608187698762-034576422e80?w=500&h=300&fit=crop',
  },
  {
    id: 3,
    title: 'Social Media Marketing Mastery',
    mentor: 'Charles Tagne',
    category: 'marketing',
    type: 'mentorship',
    price: 45000,
    currency: 'XAF',
    rating: 4.7,
    reviews: 32,
    totalSpots: 25,
    spotsRemaining: 8,
    startDate: '2024-03-05',
    endDate: '2024-04-20',
    badge: 'Beginner Friendly',
    intro: 'Build a profitable digital marketing business from scratch using proven strategies.',
    image: 'https://images.unsplash.com/photo-1460925895917-aeb19be489c7?w=500&h=300&fit=crop',
  },
  {
    id: 4,
    title: 'TikTok Content Creator Academy',
    mentor: 'Asha Mohamed',
    category: 'marketing',
    type: 'mentorship',
    price: 35000,
    currency: 'XAF',
    rating: 4.6,
    reviews: 41,
    totalSpots: 30,
    spotsRemaining: 12,
    startDate: '2024-03-10',
    endDate: '2024-04-25',
    badge: 'Beginner Friendly',
    intro: 'Turn your TikTok presence into a sustainable income stream.',
    image: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=500&h=300&fit=crop',
  },
  {
    id: 5,
    title: 'Swing Trading Masterclass',
    mentor: 'David Kamdem',
    category: 'forex',
    type: 'mentorship',
    price: 65000,
    currency: 'XAF',
    rating: 4.8,
    reviews: 22,
    totalSpots: 18,
    spotsRemaining: 5,
    startDate: '2024-03-20',
    endDate: '2024-05-01',
    badge: 'Intermediate',
    intro: 'Learn swing trading techniques for consistent monthly profits.',
    image: 'https://images.unsplash.com/photo-1607734564536-76e0822b8ff5?w=500&h=300&fit=crop',
  },
  {
    id: 6,
    title: 'Influencer Marketing Strategy',
    mentor: 'Lisa Etindele',
    category: 'marketing',
    type: 'mentorship',
    price: 55000,
    currency: 'XAF',
    rating: 4.9,
    reviews: 28,
    totalSpots: 20,
    spotsRemaining: 7,
    startDate: '2024-03-08',
    endDate: '2024-04-30',
    badge: 'Intensive Mentorship',
    intro: 'Become a successful influencer and monetize your audience.',
    image: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=500&h=300&fit=crop',
  },
]

export default function CoursesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [selectedType, setSelectedType] = useState<string | null>(null)
  const [selectedPrice, setSelectedPrice] = useState<string | null>(null)
  const [selectedStatus, setSelectedStatus] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState('')

  const filteredCourses = useMemo(() => {
    return MOCK_COURSES.filter((course) => {
      if (selectedCategory && course.category !== selectedCategory) return false
      if (selectedType && course.type !== selectedType) return false
      if (selectedPrice === 'free' && course.price !== 0) return false
      if (selectedPrice === 'paid' && course.price === 0) return false
      if (selectedStatus === 'open' && course.spotsRemaining === 0) return false
      if (selectedStatus === 'full' && course.spotsRemaining > 0) return false
      if (
        searchQuery &&
        !course.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
        !course.mentor.toLowerCase().includes(searchQuery.toLowerCase())
      ) {
        return false
      }
      return true
    })
  }, [selectedCategory, selectedType, selectedPrice, selectedStatus, searchQuery])

  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Browse Mentorships</h1>
          <p className="text-muted-foreground text-lg">
            Discover structured mentorships from verified mentors in Cameroon
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar Filters */}
          <div className="lg:col-span-1">
            <div className="space-y-8 sticky top-24">
              {/* Search */}
              <div>
                <h3 className="font-semibold mb-4">Search</h3>
                <Input
                  placeholder="Course or mentor name..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              {/* Category Filter */}
              <div>
                <h3 className="font-semibold mb-4">Category</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="forex"
                      checked={selectedCategory === 'forex'}
                      onCheckedChange={(checked) => setSelectedCategory(checked ? 'forex' : null)}
                    />
                    <Label htmlFor="forex" className="font-normal cursor-pointer">
                      Forex Trading
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="marketing"
                      checked={selectedCategory === 'marketing'}
                      onCheckedChange={(checked) => setSelectedCategory(checked ? 'marketing' : null)}
                    />
                    <Label htmlFor="marketing" className="font-normal cursor-pointer">
                      Digital Marketing
                    </Label>
                  </div>
                </div>
              </div>

              {/* Type Filter */}
              <div>
                <h3 className="font-semibold mb-4">Learning Type</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="mentorship"
                      checked={selectedType === 'mentorship'}
                      onCheckedChange={(checked) => setSelectedType(checked ? 'mentorship' : null)}
                    />
                    <Label htmlFor="mentorship" className="font-normal cursor-pointer">
                      Live Mentorship
                    </Label>
                  </div>
                </div>
              </div>

              {/* Price Filter */}
              <div>
                <h3 className="font-semibold mb-4">Price</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="paid"
                      checked={selectedPrice === 'paid'}
                      onCheckedChange={(checked) => setSelectedPrice(checked ? 'paid' : null)}
                    />
                    <Label htmlFor="paid" className="font-normal cursor-pointer">
                      Paid Mentorships
                    </Label>
                  </div>
                </div>
              </div>

              {/* Status Filter */}
              <div>
                <h3 className="font-semibold mb-4">Batch Status</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="open"
                      checked={selectedStatus === 'open'}
                      onCheckedChange={(checked) => setSelectedStatus(checked ? 'open' : null)}
                    />
                    <Label htmlFor="open" className="font-normal cursor-pointer">
                      Open (Spots Available)
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="full"
                      checked={selectedStatus === 'full'}
                      onCheckedChange={(checked) => setSelectedStatus(checked ? 'full' : null)}
                    />
                    <Label htmlFor="full" className="font-normal cursor-pointer">
                      Full (Waitlist)
                    </Label>
                  </div>
                </div>
              </div>

              {/* Clear Filters */}
              {(selectedCategory || selectedType || selectedPrice || selectedStatus || searchQuery) && (
                <Button
                  variant="outline"
                  className="w-full bg-transparent"
                  onClick={() => {
                    setSelectedCategory(null)
                    setSelectedType(null)
                    setSelectedPrice(null)
                    setSelectedStatus(null)
                    setSearchQuery('')
                  }}
                >
                  Clear All Filters
                </Button>
              )}
            </div>
          </div>

          {/* Course Grid */}
          <div className="lg:col-span-3">
            {filteredCourses.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-muted-foreground text-lg">
                  No mentorships match your filters. Try adjusting your search.
                </p>
                <Button
                  variant="outline"
                  className="mt-4 bg-transparent"
                  onClick={() => {
                    setSelectedCategory(null)
                    setSelectedType(null)
                    setSelectedPrice(null)
                    setSelectedStatus(null)
                    setSearchQuery('')
                  }}
                >
                  Clear Filters
                </Button>
              </div>
            ) : (
              <div className="grid sm:grid-cols-2 gap-6">
                {filteredCourses.map((course) => (
                  <Card
                    key={course.id}
                    className="overflow-hidden hover:shadow-lg transition-shadow flex flex-col"
                  >
                    {/* Thumbnail */}
                    <div className="relative h-48 bg-muted overflow-hidden">
                      <img
                        src={course.image || "/placeholder.svg"}
                        alt={course.title}
                        className="w-full h-full object-cover"
                      />
                      {course.spotsRemaining === 0 && (
                        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                          <p className="text-white font-semibold">Batch Full</p>
                        </div>
                      )}
                    </div>

                    <CardHeader className="pb-3">
                      <div className="flex items-start justify-between mb-2">
                        <Badge variant="secondary">{course.badge}</Badge>
                        <Badge
                          variant="outline"
                          className={
                            course.spotsRemaining > 0
                              ? 'border-green-500 text-green-600'
                              : 'border-red-500 text-red-600'
                          }
                        >
                          {course.spotsRemaining > 0
                            ? `${course.spotsRemaining} spots left`
                            : 'Waitlist'}
                        </Badge>
                      </div>
                      <CardTitle className="line-clamp-2">{course.title}</CardTitle>
                      <CardDescription className="flex items-center gap-2">
                        <span>By {course.mentor}</span>
                      </CardDescription>
                    </CardHeader>

                    <CardContent className="flex-1 flex flex-col pb-4 space-y-4">
                      <p className="text-sm text-muted-foreground line-clamp-2">{course.intro}</p>

                      {/* Rating */}
                      <div className="flex items-center gap-2">
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${i < Math.floor(course.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-muted'}`}
                            />
                          ))}
                        </div>
                        <span className="text-sm font-medium">{course.rating}</span>
                        <span className="text-xs text-muted-foreground">({course.reviews})</span>
                      </div>

                      {/* Details */}
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Calendar className="h-4 w-4" />
                          <span suppressHydrationWarning>
                            {new Date(course.startDate).toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' })} -{' '}
                            {new Date(course.endDate).toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' })}
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Users className="h-4 w-4" />
                          <span>
                            {course.totalSpots - course.spotsRemaining}/{course.totalSpots} enrolled
                          </span>
                        </div>
                      </div>

                      {/* Price and CTA */}
                      <div className="border-t border-border pt-4 space-y-3">
                        <div className="flex items-baseline gap-1">
                          <span className="text-2xl font-bold">{course.price.toLocaleString()}</span>
                          <span className="text-muted-foreground">{course.currency}</span>
                        </div>
                        <div className="text-sm text-muted-foreground flex items-center gap-1">
                          <DollarSign className="h-4 w-4" />
                          <span>Payment via MTN or Orange Money</span>
                        </div>
                        <Button
                          className="w-full"
                          asChild
                          disabled={course.spotsRemaining === 0}
                        >
                          <Link href={`/courses/${course.id}`}>
                            View Details
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}

            <div className="mt-8 text-center text-sm text-muted-foreground">
              Showing {filteredCourses.length} of {MOCK_COURSES.length} mentorships
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
