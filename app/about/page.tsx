import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { CheckCircle2, Users, Zap, Globe, Target, TrendingUp, Heart } from 'lucide-react'

export const metadata = {
  title: 'About Lrnable - Learn High-Income Skills',
  description: 'Discover how Lrnable is empowering Cameroonians to master forex trading and digital marketing.',
}

export default function AboutPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-secondary text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-balance">
            Empowering Cameroonians Through Quality Education
          </h1>
          <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
            Lrnable is revolutionizing access to world-class mentorship in high-income skills for young professionals across Cameroon.
          </p>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="border-primary/20 hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-2xl">Our Mission</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              To provide accessible, structured mentorship that empowers Cameroonians to build sustainable income streams through practical skill development in emerging markets.
            </CardContent>
          </Card>

          <Card className="border-secondary/20 hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="h-12 w-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
                <Globe className="h-6 w-6 text-secondary" />
              </div>
              <CardTitle className="text-2xl">Our Vision</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              A world where geographic location doesn't limit opportunity. Every Cameroonian has access to world-class education and mentorship to achieve financial independence.
            </CardContent>
          </Card>

          <Card className="border-primary/20 hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-2xl">Our Values</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              Excellence, integrity, accessibility, and community. We believe in practical learning, real results, and lifting each other up.
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Why Choose Lrnable */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold">Why Choose Lrnable?</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              We're not just another e-learning platform. We're committed to real transformation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: Users,
                title: 'Verified Mentors',
                description: 'Learn from professionals who have already succeeded in their fields and are committed to your growth.',
              },
              {
                icon: TrendingUp,
                title: 'Real Results',
                description: 'Our learners report earning back their investment within weeks of applying their skills.',
              },
              {
                icon: CheckCircle2,
                title: 'Structured Learning',
                description: 'Batch-based cohorts provide community, accountability, and peer learning opportunities.',
              },
              {
                icon: Zap,
                title: 'Practical Skills',
                description: 'Every lesson focuses on actionable skills you can immediately apply to earn money.',
              },
              {
                icon: Globe,
                title: 'Local Payment Methods',
                description: 'Pay with MTN Money, Orange Money, or PayPal. Accessible to all Cameroonians.',
              },
              {
                icon: Target,
                title: 'Money-Back Guarantee',
                description: "If you're not satisfied within 30 days, we'll refund your investment, no questions asked.",
              },
            ].map((item, idx) => {
              const Icon = item.icon
              return (
                <div key={idx} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { number: '500+', label: 'Active Learners' },
              { number: '50+', label: 'Verified Mentors' },
              { number: '2', label: 'Skill Categories' },
              { number: '95%', label: 'Success Rate' },
            ].map((stat, idx) => (
              <div key={idx}>
                <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold">Our Story</h2>
          </div>
          <div className="bg-card rounded-xl p-8 border border-border space-y-4">
            <p className="text-foreground leading-relaxed">
              Lrnable was born from a simple observation: talented Cameroonians were eager to learn high-income skills, but access to quality mentorship was limited, expensive, or low-quality.
            </p>
            <p className="text-foreground leading-relaxed">
              In 2023, our founders—themselves forex traders and digital marketers—decided to create a platform that would bridge this gap. We started with a small group of learners and verified mentors, proving that with the right guidance, anyone could master these skills.
            </p>
            <p className="text-foreground leading-relaxed">
              Today, Lrnable has grown to serve hundreds of learners across Cameroon, with dozens of mentors sharing their knowledge and earning alongside their students. But we're just getting started.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold">Frequently Asked Questions</h2>
            <p className="text-muted-foreground text-lg">Everything you need to know about Lrnable</p>
          </div>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1" className="border-border">
              <AccordionTrigger className="text-foreground hover:text-primary transition-colors">
                How does Lrnable ensure mentor quality?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Every mentor goes through a rigorous verification process. We require proof of actual results (trading records, portfolio, etc.) and conduct interviews to ensure they're committed to teaching effectively.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border-border">
              <AccordionTrigger className="text-foreground hover:text-primary transition-colors">
                How much does a course cost?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Pricing varies by mentor and course intensity, typically ranging from 25,000 to 150,000 XAF. We offer flexible payment options including MTN Money, Orange Money, and PayPal. All courses come with our 30-day money-back guarantee.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border-border">
              <AccordionTrigger className="text-foreground hover:text-primary transition-colors">
                How long does a mentorship program last?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Programs typically range from 4-12 weeks depending on the skill and intensity level. Each program is structured into modules with live classes, assignments, and one-on-one mentoring sessions.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border-border">
              <AccordionTrigger className="text-foreground hover:text-primary transition-colors">
                Can I really earn back my investment quickly?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Many learners report earning back their investment within 2-4 weeks of applying what they've learned. However, results depend on your effort, consistency, and market conditions. We provide the tools and knowledge; success requires your dedication.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="border-border">
              <AccordionTrigger className="text-foreground hover:text-primary transition-colors">
                What if I don't like the course after starting?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                If you're not satisfied within 30 days of enrollment, we'll refund your entire investment. No questions asked. We're confident you'll love it, but we want you to be sure.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="border-border">
              <AccordionTrigger className="text-foreground hover:text-primary transition-colors">
                Do I need prior experience to join?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                No prior experience needed. Our courses are designed for beginners. All you need is willingness to learn and commitment to practice. Mentors will guide you from zero to proficiency.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold">Ready to Transform Your Skills?</h2>
          <p className="text-lg text-primary-foreground/90">
            Join hundreds of Cameroonians who are already earning from their newly acquired skills.
          </p>
          <Button size="lg" variant="secondary" asChild className="bg-white text-primary hover:bg-primary-foreground">
            <Link href="/courses">Browse Mentorships Now</Link>
          </Button>
        </div>
      </section>
    </main>
  )
}
