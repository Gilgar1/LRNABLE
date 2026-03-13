import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Calendar, ArrowRight } from 'lucide-react'

const BLOG_POSTS = [
  {
    id: 1,
    title: 'How I Turned $500 into $5000 Trading Forex in 6 Months',
    excerpt:
      'John shares his exact trading strategy, the mistakes he made, and how consistent risk management changed his trading journey.',
    category: 'Forex Insights',
    author: 'John Nkomo',
    date: '2024-02-15',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1607734564536-76e0822b8ff5?w=600&h=300&fit=crop',
  },
  {
    id: 2,
    title: 'The 30-Day Social Media Challenge: From 0 to 10K Followers',
    excerpt:
      'Learn the exact content strategy and posting schedule that generated 10,000 Instagram followers in just 30 days.',
    category: 'Digital Marketing Tips',
    author: 'Lisa Etindele',
    date: '2024-02-12',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1460925895917-aeb19be489c7?w=600&h=300&fit=crop',
  },
  {
    id: 3,
    title: 'Why Most Traders Fail (And How You Can Avoid It)',
    excerpt:
      'Psychology matters more than technical analysis. Discover the common mindset traps that destroy trading accounts.',
    category: 'Forex Insights',
    author: 'David Kamdem',
    date: '2024-02-10',
    readTime: '10 min read',
    image: 'https://images.unsplash.com/photo-1611974212247-6bf2f80b2eb6?w=600&h=300&fit=crop',
  },
  {
    id: 4,
    title: 'TikTok Monetization: Your Path to $1000/Month',
    excerpt:
      'Complete guide to monetizing TikTok through creator fund, brand deals, and product sales. Real numbers included.',
    category: 'Digital Marketing Tips',
    author: 'Asha Mohamed',
    date: '2024-02-08',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=600&h=300&fit=crop',
  },
  {
    id: 5,
    title: 'Mentor Spotlight: Marie Douala - From Zero to Pro Trader',
    excerpt:
      "Meet Marie, one of our top mentors. We discuss her trading journey, biggest wins, and advice for beginners.",
    category: 'Mentor Spotlights',
    author: 'Lrnable Team',
    date: '2024-02-05',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=300&fit=crop',
  },
  {
    id: 6,
    title: 'The Ultimate Guide to Email Marketing in 2024',
    excerpt:
      'Email marketing is dead? Wrong. Learn why building an email list is still the most valuable marketing asset.',
    category: 'Digital Marketing Tips',
    author: 'Charles Tagne',
    date: '2024-02-03',
    readTime: '9 min read',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=300&fit=crop',
  },
]

export default function BlogPage() {
  const categories = ['All', 'Forex Insights', 'Digital Marketing Tips', 'Mentor Spotlights']

  return (
    <main className="min-h-screen bg-background">
      {/* Hero */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-slate-900 dark:to-slate-800">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h1 className="text-4xl sm:text-5xl font-bold">Lrnable Blog</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Insights, strategies, and stories from successful traders and marketers in Cameroon.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        {/* Category Tabs - Desktop */}
        <div className="mb-12 flex gap-2 overflow-x-auto pb-2">
          {categories.map((cat) => (
            <Button key={cat} variant="outline" className="whitespace-nowrap bg-transparent">
              {cat}
            </Button>
          ))}
        </div>

        {/* Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {BLOG_POSTS.map((post) => (
            <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow flex flex-col">
              {/* Image */}
              <div className="h-40 bg-muted overflow-hidden">
                <img
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Content */}
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary" className="text-xs">
                    {post.category}
                  </Badge>
                  <span className="text-xs text-muted-foreground">{post.readTime}</span>
                </div>
                <CardTitle className="line-clamp-2 text-lg">{post.title}</CardTitle>
              </CardHeader>

              <CardContent className="flex-1 flex flex-col pb-4 space-y-4">
                <p className="text-sm text-muted-foreground line-clamp-2">{post.excerpt}</p>

                <div className="space-y-3 border-t border-border pt-4">
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>{post.author}</span>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {new Date(post.date).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                      })}
                    </div>
                  </div>

                  <Button variant="outline" className="w-full text-sm bg-transparent" asChild>
                    <Link href={`/blog/${post.id}`}>
                      Read Article
                      <ArrowRight className="ml-2 h-3 w-3" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="mt-12 text-center">
          <Button variant="outline" size="lg">
            Load More Articles
          </Button>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <h2 className="text-3xl font-bold">Get Trading & Marketing Tips in Your Inbox</h2>
          <p className="text-muted-foreground">
            Weekly insights from successful mentors, straight to your email. No spam, ever.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-md border border-border bg-background"
            />
            <Button size="lg">Subscribe</Button>
          </div>
        </div>
      </section>
    </main>
  )
}
