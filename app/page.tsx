import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { CheckCircle2, TrendingUp, Users, BookOpen, ArrowRight } from 'lucide-react'

export default function HomePage() {
  return (
    <main>
      {/* Hero Section with Image Carousel */}
      <section className="min-h-screen flex items-center justify-center px-4 py-16 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/10 to-secondary/10 relative overflow-hidden">
        {/* Background carousel */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-secondary/5 to-primary/5 animate-pulse"></div>
          <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-secondary/10 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
          <div className="space-y-4">
            <div className="inline-block">
              <Image
                src="/images/lrnable-logo-white.jpg"
                alt="Lrnable Logo"
                width={200}
                height={200}
                className="w-auto h-24 object-contain mx-auto mb-4"
                priority
              />
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground text-balance">
              Master High-Income Skills.
              <span className="block text-primary">Learn and Earn with Lrnable.</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground text-balance max-w-2xl mx-auto">
              Structured mentorship in Forex Trading and Digital Marketing, tailored for Cameroonians. Learn directly from verified mentors.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="bg-primary hover:bg-secondary text-primary-foreground">
              <Link href="/courses">
                Browse Mentorships
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/about">Learn More</Link>
            </Button>
          </div>

          {/* Trust Bar */}
          <div className="pt-8 flex flex-col sm:flex-row gap-4 sm:gap-8 justify-center items-center text-sm text-muted-foreground flex-wrap">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-primary" />
              <span>Secure MTN & Orange Money</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-primary" />
              <span>Verified Mentors</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-primary" />
              <span>Money-Back Guarantee</span>
            </div>
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold">Skill Categories</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Learn in-demand skills with mentors who've already achieved success
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="hover:shadow-lg transition-shadow border-primary/20">
            <CardHeader>
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <TrendingUp className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-2xl">Forex Trading</CardTitle>
              <CardDescription>From Pips to Profit</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-foreground">
                Master forex trading fundamentals with structured, batch-based mentorship. Learn risk management, trading strategies, and how successful mentors navigate the markets.
              </p>
              <Button variant="outline" asChild className="w-full bg-transparent hover:bg-primary/5">
                <Link href="/courses?category=forex">Explore Forex Courses</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow border-secondary/20">
            <CardHeader>
              <div className="h-12 w-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-secondary" />
              </div>
              <CardTitle className="text-2xl">Digital Marketing</CardTitle>
              <CardDescription>Social Media for Businesses</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-foreground">
                Build a profitable digital marketing career. Learn content creation, audience growth, client acquisition, and how to turn followers into revenue.
              </p>
              <Button variant="outline" asChild className="w-full bg-transparent hover:bg-secondary/5">
                <Link href="/courses?category=marketing">Explore Marketing Courses</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold">How It Works</h2>
            <p className="text-muted-foreground text-lg">Three simple steps to start your learning journey</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: 1,
                title: 'Choose',
                description: 'Browse mentorships and select the batch that fits your schedule and goals.',
                icon: BookOpen,
              },
              {
                step: 2,
                title: 'Learn',
                description: 'Access live classes, recorded videos, assignments, and connect with your mentor and cohort.',
                icon: Users,
              },
              {
                step: 3,
                title: 'Earn',
                description: 'Apply your skills to generate income locally or globally. Many students earn back their investment within weeks.',
                icon: TrendingUp,
              },
            ].map((item) => {
              const Icon = item.icon
              return (
                <div key={item.step} className="flex flex-col items-center space-y-4 text-center">
                  <div className="h-16 w-16 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-2xl font-bold text-blue-600 dark:text-blue-300">
                    {item.step}
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-blue-600 dark:bg-blue-900 rounded-lg p-8 sm:p-12 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Ready to Transform Your Skills?</h2>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto">
            Join hundreds of Cameroonians already earning from their newly acquired skills. Start your mentorship journey today.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/courses">
              Start Learning Now
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/courses" className="text-muted-foreground hover:text-foreground transition-colors">
                    Browse Courses
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                    How It Works
                  </Link>
                </li>
                <li>
                  <Link href="/become-a-mentor" className="text-muted-foreground hover:text-foreground transition-colors">
                    Become a Mentor
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-muted-foreground hover:text-foreground transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Skills</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/courses?category=forex" className="text-muted-foreground hover:text-foreground transition-colors">
                    Forex Trading
                  </Link>
                </li>
                <li>
                  <Link href="/courses?category=marketing" className="text-muted-foreground hover:text-foreground transition-colors">
                    Digital Marketing
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                    Help Center
                  </Link>
                </li>
                <li>
                  <a href="https://wa.me/" className="text-muted-foreground hover:text-foreground transition-colors">
                    WhatsApp Support
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm">© 2024 Lrnable. All rights reserved. Based in Cameroon.</p>
            <div className="flex gap-4 text-sm">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Privacy
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Terms
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
