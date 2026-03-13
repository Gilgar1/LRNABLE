import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { CheckCircle2, TrendingUp, Users, DollarSign, BookOpen, ArrowRight } from 'lucide-react'

export default function BecomeMentorPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-slate-900 dark:to-slate-800">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h1 className="text-4xl sm:text-5xl font-bold">Turn Your Expertise into Income</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Share your skills with hundreds of eager learners in Cameroon. Build multiple income streams through mentorship
            and course sales.
          </p>
          <Button size="lg" asChild className="bg-blue-600 hover:bg-blue-700">
            <Link href="/signup?role=mentor">
              Apply as Mentor
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold">Why Become a Lrnable Mentor?</h2>
          <p className="text-muted-foreground text-lg">
            Multiple ways to earn, built-in audience, and full support from day one
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: DollarSign,
              title: 'Multiple Income Streams',
              description: 'Earn from live mentorship batches, sell courses on Selar, create digital products, and build a personal brand.',
            },
            {
              icon: Users,
              title: 'Ready-Made Audience',
              description:
                'Access thousands of learners on Lrnable who are actively looking for mentors in your field. No cold outreach needed.',
            },
            {
              icon: BookOpen,
              title: 'Complete Tools',
              description:
                'We provide the platform. You handle the teaching. Manage batches, schedule classes, upload content, and track student progress.',
            },
            {
              icon: TrendingUp,
              title: 'Scale Without Limits',
              description: 'Start with small batches, grow to 100+ students. Build your legacy as a trusted mentor.',
            },
            {
              icon: CheckCircle2,
              title: 'Flexible Schedule',
              description: 'Set your own batch dates, class times, and course content. Work around your other commitments.',
            },
            {
              icon: Users,
              title: 'Community Support',
              description: 'Join a network of mentors sharing strategies, supporting each other, and growing together.',
            },
          ].map((item) => {
            const Icon = item.icon
            return (
              <Card key={item.title}>
                <CardHeader>
                  <Icon className="h-8 w-8 text-blue-600 mb-3" />
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </section>

      {/* Dual Model */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold">How You Earn</h2>
            <p className="text-muted-foreground text-lg">Two complementary ways to build income as a mentor</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Model 1 */}
            <Card className="border-2 border-blue-200 dark:border-blue-800">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="h-8 w-8 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-blue-600 font-bold">
                    1
                  </span>
                  Live Mentorship Batches
                </CardTitle>
                <CardDescription>Most predictable income</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-3">How it works:</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Set your batch dates (e.g., March 1 - April 15)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Define total spots (e.g., 20 students)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Set your price (we suggest 40,000 - 100,000 XAF)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Students pay you directly via MTN/Orange Money</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>You approve enrollments after payment</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                  <p className="text-sm font-semibold">Example:</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    20 students × 50,000 XAF = 1,000,000 XAF (€1,500 USD) per batch
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Model 2 */}
            <Card className="border-2 border-purple-200 dark:border-purple-800">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="h-8 w-8 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center text-purple-600 font-bold">
                    2
                  </span>
                  Digital Products on Selar
                </CardTitle>
                <CardDescription>Passive income potential</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-3">How it works:</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Create digital products (courses, PDFs, templates, audios)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Upload to Selar.com for distribution</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Lrnable drives traffic to your Selar products</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Earn commissions on every sale</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Automate and scale without extra work</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-purple-50 dark:bg-purple-950 border border-purple-200 dark:border-purple-800 rounded-lg p-4">
                  <p className="text-sm font-semibold">Example:</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Sell a 5,000 XAF course to 50 people/month = 250,000 XAF passive income
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>

        <div className="space-y-6">
          {[
            {
              q: 'How do I get paid?',
              a: 'Students pay you directly via MTN Money or Orange Money. Lrnable doesn\'t take a cut—100% goes to you. For Selar products, Selar handles payments and you earn commissions.',
            },
            {
              q: 'What if I don\'t have a batch fill?',
              a: 'You set the minimum and date. If it doesn\'t fill by your start date, you can reschedule or open another batch. No commitment unless students enroll.',
            },
            {
              q: 'How much should I charge?',
              a: 'We recommend 35,000 - 100,000 XAF depending on your experience and the course length. Research similar courses and price accordingly.',
            },
            {
              q: 'Do I have to use Selar?',
              a: 'No. Selar is optional for digital products. Your core income comes from live mentorship batches on Lrnable.',
            },
            {
              q: 'How much support do I get?',
              a: 'Full support. We help you with batch setup, pricing, marketing, student management, and troubleshooting. Email us anytime.',
            },
            {
              q: 'Can I teach multiple batches at once?',
              a: 'Yes! Many of our mentors run 2-3 batches simultaneously. Manage your schedule and scale your income.',
            },
          ].map((item, idx) => (
            <Card key={idx}>
              <CardHeader>
                <CardTitle className="text-lg">{item.q}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{item.a}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Requirements */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Mentor Requirements</h2>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle2 className="h-6 w-6 text-green-600" />
                  Proven Expertise
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  You must have actual, documented success in your field. We verify all mentors before approval.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle2 className="h-6 w-6 text-green-600" />
                  Teaching Ability
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  You can communicate clearly, create structured lessons, and support students. We're not looking for celebrities,
                  but reliable teachers.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle2 className="h-6 w-6 text-green-600" />
                  Commitment
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  You show up for every class, respond to students, and deliver results. This is not a get-rich-quick scheme.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-blue-600 dark:bg-blue-900 rounded-lg p-8 sm:p-12 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Ready to Share Your Expertise?</h2>
          <p className="text-blue-100 text-lg">
            Start your mentorship journey. Apply now and join our growing community of successful mentors.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/signup?role=mentor">
                Apply as Mentor
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-blue-300 text-blue-900 hover:bg-blue-50 dark:text-blue-100 dark:hover:bg-blue-800 bg-transparent" asChild>
              <Link href="/contact">Ask Questions</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
