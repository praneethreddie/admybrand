"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import {
  Check,
  ChevronRight,
  Menu,
  X,
  Moon,
  Sun,
  ArrowRight,
  Star,
  Zap,
  Shield,
  Users,
  BarChart,
  Layers,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useTheme } from "next-themes"

export default function LandingPage() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null)
  const [calculatorUsers, setCalculatorUsers] = useState(5)
  const [calculatorWords, setCalculatorWords] = useState(10000)
  const [showDemo, setShowDemo] = useState(false)

  // Add this helper function at the top of the component, after the existing state declarations
  const getRecommendedPlan = (users: number, words: number) => {
    if (users <= 5 && words <= 15000) {
      return { name: "Starter", price: "49", plan: "Starter Plan" }
    } else if (users <= 25 && words <= 75000) {
      return { name: "Professional", price: "149", plan: "Professional Plan" }
    } else {
      return { name: "Enterprise", price: "399", plan: "Enterprise Plan" }
    }
  }

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  const features = [
    {
      title: "AI Content Generation",
      description: "Create compelling copy, social posts, and ad campaigns with our advanced AI writing assistant.",
      icon: <Zap className="size-5" />,
    },
    {
      title: "Smart Campaign Analytics",
      description: "Get actionable insights with AI-powered performance tracking and optimization recommendations.",
      icon: <BarChart className="size-5" />,
    },
    {
      title: "Brand Voice Training",
      description: "Train AI to match your unique brand voice and maintain consistency across all content.",
      icon: <Users className="size-5" />,
    },
    {
      title: "Multi-Channel Automation",
      description: "Deploy campaigns across social media, email, and ads with intelligent scheduling and targeting.",
      icon: <Shield className="size-5" />,
    },
    {
      title: "Creative Asset Library",
      description: "Generate and manage unlimited marketing assets with AI-powered design and copywriting tools.",
      icon: <Layers className="size-5" />,
    },
    {
      title: "Performance Optimization",
      description:
        "Continuously improve campaign performance with machine learning-driven A/B testing and optimization.",
      icon: <Star className="size-5" />,
    },
  ]

  return (
    <div className="flex min-h-[100dvh] flex-col">
      <header
        className={`sticky top-0 z-50 w-full backdrop-blur-lg transition-all duration-300 ${isScrolled ? "bg-background/80 shadow-sm" : "bg-transparent"}`}
      >
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 font-bold">
            <div className="size-8 rounded-lg bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center text-primary-foreground">
              A
            </div>
            <span>ADmyBRAND</span>
          </div>
          <nav className="hidden md:flex gap-8">
            <Link
              href="#features"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Features
            </Link>
            <Link
              href="#demo"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Demo
            </Link>
            <Link
              href="#pricing"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Pricing
            </Link>
            <Link
              href="#resources"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Resources
            </Link>
            <Link
              href="#testimonials"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Testimonials
            </Link>
            <Link
              href="#faq"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              FAQ
            </Link>
          </nav>
          <div className="hidden md:flex gap-4 items-center">
            <Button variant="ghost" size="icon" onClick={toggleTheme} className="rounded-full">
              {mounted && theme === "dark" ? <Sun className="size-[18px]" /> : <Moon className="size-[18px]" />}
              <span className="sr-only">Toggle theme</span>
            </Button>
            <Link
              href="#"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Log in
            </Link>
            <Button className="rounded-full">
              Get Started
              <ChevronRight className="ml-1 size-4" />
            </Button>
          </div>
          <div className="flex items-center gap-4 md:hidden">
            <Button variant="ghost" size="icon" onClick={toggleTheme} className="rounded-full">
              {mounted && theme === "dark" ? <Sun className="size-[18px]" /> : <Moon className="size-[18px]" />}
            </Button>
            <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>
        {/* Mobile menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-16 inset-x-0 bg-background/95 backdrop-blur-lg border-b"
          >
            <div className="container py-4 flex flex-col gap-4">
              <Link href="#features" className="py-2 text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>
                Features
              </Link>
              <Link href="#demo" className="py-2 text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>
                Demo
              </Link>
              <Link href="#pricing" className="py-2 text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>
                Pricing
              </Link>
              <Link href="#resources" className="py-2 text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>
                Resources
              </Link>
              <Link href="#testimonials" className="py-2 text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>
                Testimonials
              </Link>
              <Link href="#faq" className="py-2 text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>
                FAQ
              </Link>
              <div className="flex flex-col gap-2 pt-2 border-t">
                <Link href="#" className="py-2 text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>
                  Log in
                </Link>
                <Button className="rounded-full">
                  Get Started
                  <ChevronRight className="ml-1 size-4" />
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </header>
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-20 md:py-32 lg:py-40 overflow-hidden">
          <div className="container px-4 md:px-6 relative">
            <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-black bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-3xl mx-auto mb-12"
            >
              <Badge className="mb-4 rounded-full px-4 py-1.5 text-sm font-medium" variant="secondary">
                Launching Soon
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
                Revolutionize Your Marketing with ADmyBRAND AI Suite
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                The AI-powered marketing platform that creates compelling campaigns, optimizes performance, and scales
                your brand across all channels. Transform your marketing strategy with intelligent automation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="rounded-full h-12 px-8 text-base">
                  Start Free Trial
                  <ArrowRight className="ml-2 size-4" />
                </Button>
                <Button size="lg" variant="outline" className="rounded-full h-12 px-8 text-base bg-transparent">
                  Book a Demo
                </Button>
              </div>
              <div className="flex items-center justify-center gap-4 mt-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Check className="size-4 text-primary" />
                  <span>No credit card</span>
                </div>
                <div className="flex items-center gap-1">
                  <Check className="size-4 text-primary" />
                  <span>14-day trial</span>
                </div>
                <div className="flex items-center gap-1">
                  <Check className="size-4 text-primary" />
                  <span>Cancel anytime</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative mx-auto max-w-5xl"
            >
              <div className="rounded-xl overflow-hidden shadow-2xl border border-border/40 bg-gradient-to-b from-background to-muted/20">
                <Image
                  src="https://cdn.dribbble.com/userupload/12302729/file/original-fa372845e394ee85bebe0389b9d86871.png?resize=1504x1128&vertical=center"
                  width={1280}
                  height={720}
                  alt="my dashboard"
                  className="w-full h-auto"
                  priority
                />
                <div className="absolute inset-0 rounded-xl ring-1 ring-inset ring-black/10 dark:ring-white/10"></div>
              </div>
              <div className="absolute -bottom-6 -right-6 -z-10 h-[300px] w-[300px] rounded-full bg-gradient-to-br from-primary/30 to-secondary/30 blur-3xl opacity-70"></div>
              <div className="absolute -top-6 -left-6 -z-10 h-[300px] w-[300px] rounded-full bg-gradient-to-br from-secondary/30 to-primary/30 blur-3xl opacity-70"></div>
            </motion.div>
          </div>
        </section>

        {/* Logos Section */}
        <section className="w-full py-12 border-y bg-muted/30">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <p className="text-sm font-medium text-muted-foreground">Trusted by innovative companies worldwide</p>
              <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-16">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Image
                    key={i}
                    src={`/placeholder-logo.svg`}
                    alt={`Company logo ${i}`}
                    width={120}
                    height={60}
                    className="h-8 w-auto opacity-70 grayscale transition-all hover:opacity-100 hover:grayscale-0"
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="w-full py-20 md:py-32">
          <div className="container px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
            >
              <Badge className="rounded-full px-4 py-1.5 text-sm font-medium" variant="secondary">
                Features
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Everything You Need to Succeed</h2>
              <p className="max-w-[800px] text-muted-foreground md:text-lg">
                Our comprehensive platform provides all the tools you need to streamline your workflow, boost
                productivity, and achieve your goals.
              </p>
            </motion.div>

            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            >
              {features.map((feature, i) => (
                <motion.div key={i} variants={item}>
                  <Card className="h-full overflow-hidden border-border/40 bg-gradient-to-b from-background to-muted/10 backdrop-blur transition-all hover:shadow-md">
                    <CardContent className="p-6 flex flex-col h-full">
                      <div className="size-10 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center text-primary mb-4">
                        {feature.icon}
                      </div>
                      <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="w-full py-20 md:py-32 bg-muted/30 relative overflow-hidden">
          <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-black bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_40%,transparent_100%)]"></div>

          <div className="container px-4 md:px-6 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center space-y-4 text-center mb-16"
            >
              <Badge className="rounded-full px-4 py-1.5 text-sm font-medium" variant="secondary">
                How It Works
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Simple Process, Powerful Results</h2>
              <p className="max-w-[800px] text-muted-foreground md:text-lg">
                Get started in minutes and see the difference our platform can make for your business.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 md:gap-12 relative">
              <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-border to-transparent -translate-y-1/2 z-0"></div>

              {[
                {
                  step: "01",
                  title: "Create Account",
                  description: "Sign up in seconds with just your email. No credit card required to get started.",
                },
                {
                  step: "02",
                  title: "Configure Workspace",
                  description: "Customize your workspace to match your team's unique workflow and requirements.",
                },
                {
                  step: "03",
                  title: "Boost Productivity",
                  description: "Start using our powerful features to streamline processes and achieve your goals.",
                },
              ].map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="relative z-10 flex flex-col items-center text-center space-y-4"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary/70 text-primary-foreground text-xl font-bold shadow-lg">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Demo Video Section */}
        <section id="demo" className="w-full py-20 md:py-32 bg-muted/30 relative overflow-hidden">
          <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-black bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_40%,transparent_100%)]"></div>

          <div className="container px-4 md:px-6 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
            >
              <Badge className="rounded-full px-4 py-1.5 text-sm font-medium" variant="secondary">
                See It In Action
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Watch ADmyBRAND AI in Action</h2>
              <p className="max-w-[800px] text-muted-foreground md:text-lg">
                See how our AI transforms your marketing workflow in just minutes. From content creation to campaign
                optimization.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative mx-auto max-w-4xl"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border/40 bg-gradient-to-b from-background to-muted/20">
                <div className="aspect-video relative">
                  <iframe
                    className="w-full h-full rounded-2xl"
                    src="https://www.youtube.com/embed/ZK-rNEhJIDs?autoplay=1&mute=1&loop=1&playlist=ZK-rNEhJIDs&controls=1&modestbranding=1&rel=0"
                    title="ADmyBRAND AI Suite Demo - AI Content Generation"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    loading="lazy"
                  />
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-black/10 dark:ring-white/10 pointer-events-none"></div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 -z-10 h-[200px] w-[200px] rounded-full bg-gradient-to-br from-primary/30 to-secondary/30 blur-3xl opacity-70"></div>
              <div className="absolute -top-6 -left-6 -z-10 h-[200px] w-[200px] rounded-full bg-gradient-to-br from-secondary/30 to-primary/30 blur-3xl opacity-70"></div>
            </motion.div>

            {/* Optional: Add a fallback click-to-play version */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-center mt-8"
            >
              <Button
                variant="outline"
                size="lg"
                className="rounded-full bg-transparent"
                onClick={() => setShowDemo(true)}
              >
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
                Watch in Full Screen
              </Button>
            </motion.div>

            {/* Enhanced Demo Modal with better video integration */}
            {showDemo && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
                onClick={() => setShowDemo(false)}
              >
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  className="relative w-full max-w-6xl mx-4 bg-black rounded-2xl overflow-hidden shadow-2xl"
                  onClick={(e) => e.stopPropagation()}
                >
                  <button
                    onClick={() => setShowDemo(false)}
                    className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/70 hover:bg-black/90 rounded-full flex items-center justify-center text-white transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                  <div className="aspect-video bg-black w-full">
                    <iframe
                      className="w-full h-full"
                      src="https://www.youtube.com/embed/ZK-rNEhJIDs?autoplay=1&controls=1&modestbranding=1&rel=0&fs=1"
                      title="ADmyBRAND AI Suite Demo - Full Screen"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    />
                  </div>
                </motion.div>
              </motion.div>
            )}
          </div>
        </section>

        {/* Interactive Pricing Calculator */}
        <section id="pricing" className="w-full py-20 md:py-32">
          <div className="container px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
            >
              <Badge className="rounded-full px-4 py-1.5 text-sm font-medium" variant="secondary">
                Pricing Calculator
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Calculate Your Perfect Plan</h2>
              <p className="max-w-[800px] text-muted-foreground md:text-lg">
                Customize your plan based on your team size and content needs. See real-time pricing updates.
              </p>
            </motion.div>

            <div className="mx-auto max-w-4xl">
              <Card className="overflow-hidden border-border/40 bg-gradient-to-b from-background to-muted/10 backdrop-blur">
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    {/* Calculator Controls */}
                    <div className="space-y-6">
                      <div>
                        <label className="block text-sm font-medium mb-3">Team Size</label>
                        <div className="space-y-2">
                          <input
                            type="range"
                            min="1"
                            max="100"
                            value={calculatorUsers}
                            onChange={(e) => setCalculatorUsers(Number(e.target.value))}
                            className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer slider transition-all duration-200 ease-out"
                            style={{
                              background: `linear-gradient(to right, hsl(var(--primary)) 0%, hsl(var(--primary)) ${calculatorUsers}%, hsl(var(--muted)) ${calculatorUsers}%, hsl(var(--muted)) 100%)`,
                            }}
                          />
                          <div className="flex justify-between text-sm text-muted-foreground">
                            <span>1 user</span>
                            <span className="font-medium text-foreground">{calculatorUsers} users</span>
                            <span>100+ users</span>
                          </div>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-3">Monthly AI Words</label>
                        <div className="space-y-2">
                          <input
                            type="range"
                            min="5000"
                            max="200000"
                            step="5000"
                            value={calculatorWords}
                            onChange={(e) => setCalculatorWords(Number(e.target.value))}
                            className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer slider transition-all duration-200 ease-out"
                            style={{
                              background: `linear-gradient(to right, hsl(var(--primary)) 0%, hsl(var(--primary)) ${((calculatorWords - 5000) / (200000 - 5000)) * 100}%, hsl(var(--muted)) ${((calculatorWords - 5000) / (200000 - 5000)) * 100}%, hsl(var(--muted)) 100%)`,
                            }}
                          />
                          <div className="flex justify-between text-sm text-muted-foreground">
                            <span>5K words</span>
                            <span className="font-medium text-foreground">
                              {(calculatorWords / 1000).toFixed(0)}K words
                            </span>
                            <span>200K+ words</span>
                          </div>
                        </div>
                      </div>

                      <div className="pt-4 border-t border-border/40">
                        <h3 className="font-medium mb-3">Recommended Features</h3>
                        <div className="space-y-2">
                          {calculatorUsers <= 5 && calculatorWords <= 15000 && (
                            <div className="flex items-center gap-2 text-sm">
                              <Check className="w-4 h-4 text-green-500" />
                              <span>Basic analytics & reporting</span>
                            </div>
                          )}
                          {(calculatorUsers > 5 || calculatorWords > 15000) && calculatorUsers <= 25 && (
                            <>
                              <div className="flex items-center gap-2 text-sm">
                                <Check className="w-4 h-4 text-green-500" />
                                <span>Advanced analytics & insights</span>
                              </div>
                              <div className="flex items-center gap-2 text-sm">
                                <Check className="w-4 h-4 text-green-500" />
                                <span>Multi-channel automation</span>
                              </div>
                            </>
                          )}
                          {calculatorUsers > 25 && (
                            <>
                              <div className="flex items-center gap-2 text-sm">
                                <Check className="w-4 h-4 text-green-500" />
                                <span>Custom AI model training</span>
                              </div>
                              <div className="flex items-center gap-2 text-sm">
                                <Check className="w-4 h-4 text-green-500" />
                                <span>Dedicated account manager</span>
                              </div>
                            </>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Replace the entire pricing result div with this smooth animated version: */}
                    <div className="flex flex-col justify-center">
                      <div className="text-center p-6 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl border border-primary/20 relative overflow-hidden">
                        <h3 className="text-lg font-medium mb-2">Recommended Plan</h3>

                        {/* Smooth price transition */}
                        <div className="relative h-16 flex items-center justify-center mb-2">
                          <motion.div
                            key={`${calculatorUsers}-${calculatorWords}`}
                            initial={{ opacity: 0, y: 20, scale: 0.8 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -20, scale: 0.8 }}
                            transition={{
                              duration: 0.4,
                              ease: [0.4, 0, 0.2, 1],
                              type: "spring",
                              stiffness: 300,
                              damping: 30,
                            }}
                            className="absolute inset-0 flex items-center justify-center"
                          >
                            <span className="text-4xl font-bold text-primary">
                              ${getRecommendedPlan(calculatorUsers, calculatorWords).price}
                              <span className="text-lg text-muted-foreground">/month</span>
                            </span>
                          </motion.div>
                        </div>

                        {/* Smooth plan name transition */}
                        <div className="relative h-6 flex items-center justify-center mb-4">
                          <motion.p
                            key={`plan-${calculatorUsers}-${calculatorWords}`}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{
                              duration: 0.3,
                              ease: "easeOut",
                              delay: 0.1,
                            }}
                            className="absolute text-sm text-muted-foreground"
                          >
                            {getRecommendedPlan(calculatorUsers, calculatorWords).plan}
                          </motion.p>
                        </div>

                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: 0.2 }}
                        >
                          <Button className="w-full rounded-full transition-all duration-300 hover:scale-105">
                            Get Started with This Plan
                            <ArrowRight className="ml-2 w-4 h-4" />
                          </Button>
                        </motion.div>
                      </div>

                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.4, delay: 0.3 }}
                        className="mt-6 text-center text-sm text-muted-foreground"
                      >
                        <p>💡 Save 20% with annual billing</p>
                        <p>🎯 All plans include 14-day free trial</p>
                      </motion.div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Blog/Resources Section */}
        <section id="resources" className="w-full py-20 md:py-32 bg-muted/30 relative overflow-hidden">
          <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-black bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_40%,transparent_100%)]"></div>

          <div className="container px-4 md:px-6 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
            >
              <Badge className="rounded-full px-4 py-1.5 text-sm font-medium" variant="secondary">
                Resources
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Learn & Grow with ADmyBRAND</h2>
              <p className="max-w-[800px] text-muted-foreground md:text-lg">
                Discover best practices, case studies, and expert insights to maximize your AI marketing success.
              </p>
            </motion.div>

            <Tabs defaultValue="blog" className="w-full">
              <div className="flex justify-center mb-8">
                <TabsList className="rounded-full p-1">
                  <TabsTrigger value="blog" className="rounded-full px-6">
                    Blog
                  </TabsTrigger>
                  <TabsTrigger value="guides" className="rounded-full px-6">
                    Guides
                  </TabsTrigger>
                  <TabsTrigger value="case-studies" className="rounded-full px-6">
                    Case Studies
                  </TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="blog">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {[
                    {
                      title: "10 AI Marketing Trends That Will Dominate 2025",
                      excerpt:
                        "Discover the latest AI marketing trends and how to implement them in your strategy for maximum impact.",
                      category: "Trends",
                      readTime: "5 min read",
                      date: "Dec 15, 2024",
                    },
                    {
                      title: "How to Train AI for Your Brand Voice",
                      excerpt:
                        "Step-by-step guide to training AI models that perfectly capture your unique brand personality and tone.",
                      category: "Tutorial",
                      readTime: "8 min read",
                      date: "Dec 12, 2024",
                    },
                    {
                      title: "ROI Metrics That Matter in AI Marketing",
                      excerpt:
                        "Learn which KPIs to track when measuring the success of your AI-powered marketing campaigns.",
                      category: "Analytics",
                      readTime: "6 min read",
                      date: "Dec 10, 2024",
                    },
                  ].map((post, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                    >
                      <Card className="h-full overflow-hidden border-border/40 bg-gradient-to-b from-background to-muted/10 backdrop-blur transition-all hover:shadow-lg hover:scale-102 cursor-pointer group">
                        <CardContent className="p-0">
                          <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                            <Badge className="absolute top-3 left-3 bg-primary text-primary-foreground">
                              {post.category}
                            </Badge>
                          </div>
                          <div className="p-6">
                            <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                              {post.title}
                            </h3>
                            <p className="text-muted-foreground mb-4 line-clamp-2">{post.excerpt}</p>
                            <div className="flex items-center justify-between text-sm text-muted-foreground">
                              <span>{post.date}</span>
                              <span>{post.readTime}</span>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="guides">
                <div className="grid gap-6 md:grid-cols-2">
                  {[
                    {
                      title: "Complete Guide to AI Content Marketing",
                      description:
                        "Everything you need to know about leveraging AI for content creation, optimization, and distribution.",
                      chapters: 12,
                      duration: "45 min",
                    },
                    {
                      title: "Advanced Campaign Automation Strategies",
                      description:
                        "Master the art of multi-channel campaign automation with AI-powered insights and optimization.",
                      chapters: 8,
                      duration: "30 min",
                    },
                  ].map((guide, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.2 }}
                    >
                      <Card className="h-full overflow-hidden border-border/40 bg-gradient-to-b from-background to-muted/10 backdrop-blur transition-all hover:shadow-lg cursor-pointer group">
                        <CardContent className="p-6">
                          <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                              <svg
                                className="w-6 h-6 text-primary"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                                />
                              </svg>
                            </div>
                            <div className="flex-1">
                              <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                                {guide.title}
                              </h3>
                              <p className="text-muted-foreground mb-4">{guide.description}</p>
                              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                <span>{guide.chapters} chapters</span>
                                <span>•</span>
                                <span>{guide.duration}</span>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="case-studies">
                <div className="grid gap-8">
                  {[
                    {
                      company: "TechStartup Inc",
                      industry: "SaaS",
                      challenge: "Struggling with content creation and lead generation",
                      solution: "Implemented AI content generation and automated nurture campaigns",
                      results: [
                        "300% increase in content output",
                        "150% boost in qualified leads",
                        "60% reduction in content costs",
                      ],
                      logo: "T",
                    },
                    {
                      company: "GrowthLabs",
                      industry: "E-commerce",
                      challenge: "Manual campaign management across multiple channels",
                      solution: "Deployed multi-channel AI automation and performance optimization",
                      results: [
                        "250% improvement in ROAS",
                        "80% time savings on campaign management",
                        "40% increase in customer retention",
                      ],
                      logo: "G",
                    },
                  ].map((study, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: i * 0.2 }}
                    >
                      <Card className="overflow-hidden border-border/40 bg-gradient-to-b from-background to-muted/10 backdrop-blur">
                        <CardContent className="p-8">
                          <div className="grid md:grid-cols-3 gap-8">
                            <div className="space-y-4">
                              <div className="flex items-center gap-3">
                                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary font-bold">
                                  {study.logo}
                                </div>
                                <div>
                                  <h3 className="font-bold">{study.company}</h3>
                                  <p className="text-sm text-muted-foreground">{study.industry}</p>
                                </div>
                              </div>
                              <div>
                                <h4 className="font-medium mb-2">Challenge</h4>
                                <p className="text-sm text-muted-foreground">{study.challenge}</p>
                              </div>
                            </div>
                            <div>
                              <h4 className="font-medium mb-2">Solution</h4>
                              <p className="text-sm text-muted-foreground">{study.solution}</p>
                            </div>
                            <div>
                              <h4 className="font-medium mb-2">Results</h4>
                              <ul className="space-y-1">
                                {study.results.map((result, j) => (
                                  <li key={j} className="flex items-center gap-2 text-sm">
                                    <Check className="w-4 h-4 text-green-500" />
                                    <span>{result}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="w-full py-20 md:py-32">
          <div className="container px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
            >
              <Badge className="rounded-full px-4 py-1.5 text-sm font-medium" variant="secondary">
                Testimonials
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Loved by Teams Worldwide</h2>
              <p className="max-w-[800px] text-muted-foreground md:text-lg">
                Don't just take our word for it. See what our customers have to say about their experience.
              </p>
            </motion.div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  quote:
                    "ADmyBRAND AI Suite has transformed our content creation process. We're producing 10x more engaging content in half the time.",
                  author: "Sarah Martinez",
                  role: "Marketing Director, TechStartup Inc",
                  rating: 5,
                },
                {
                  quote:
                    "The AI-powered analytics have given us insights we never had before. Our campaign ROI has increased by 300% since implementing ADmyBRAND.",
                  author: "Michael Chen",
                  role: "Growth Marketing Manager, ScaleUp Co",
                  rating: 5,
                },
                {
                  quote:
                    "The brand voice training feature is incredible. Our AI-generated content is indistinguishable from our human-written copy.",
                  author: "Emily Rodriguez",
                  role: "Content Marketing Lead, BrandCorp",
                  rating: 5,
                },
                {
                  quote:
                    "We've automated our entire social media strategy with ADmyBRAND. Engagement is up 250% and we're saving 20 hours per week.",
                  author: "David Kim",
                  role: "Digital Marketing Director, GrowthLabs",
                  rating: 5,
                },
                {
                  quote:
                    "The multi-channel campaign automation has streamlined our marketing operations. We can now run complex campaigns with minimal manual work.",
                  author: "Lisa Patel",
                  role: "Marketing Operations Manager, MarketPro",
                  rating: 5,
                },
                {
                  quote:
                    "ADmyBRAND's creative asset generation has revolutionized our design workflow. We're creating professional marketing materials in minutes, not hours.",
                  author: "James Wilson",
                  role: "Creative Director, DesignForward",
                  rating: 5,
                },
              ].map((testimonial, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                >
                  <Card className="h-full overflow-hidden border-border/40 bg-gradient-to-b from-background to-muted/10 backdrop-blur transition-all hover:shadow-md">
                    <CardContent className="p-6 flex flex-col h-full">
                      <div className="flex mb-4">
                        {Array(testimonial.rating)
                          .fill(0)
                          .map((_, j) => (
                            <Star key={j} className="size-4 text-yellow-500 fill-yellow-500" />
                          ))}
                      </div>
                      <p className="text-lg mb-6 flex-grow">{testimonial.quote}</p>
                      <div className="flex items-center gap-4 mt-auto pt-4 border-t border-border/40">
                        <div className="size-10 rounded-full bg-muted flex items-center justify-center text-foreground font-medium">
                          {testimonial.author.charAt(0)}
                        </div>
                        <div>
                          <p className="font-medium">{testimonial.author}</p>
                          <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="w-full py-20 md:py-32">
          <div className="container px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
            >
              <Badge className="rounded-full px-4 py-1.5 text-sm font-medium" variant="secondary">
                FAQ
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Frequently Asked Questions</h2>
              <p className="max-w-[800px] text-muted-foreground md:text-lg">
                Find answers to common questions about our platform.
              </p>
            </motion.div>

            <div className="mx-auto max-w-3xl">
              <Accordion type="single" collapsible className="w-full">
                {[
                  {
                    question: "How does the AI content generation work?",
                    answer:
                      "Our AI uses advanced natural language processing trained on millions of high-performing marketing campaigns. Simply input your brief, select your brand voice, and our AI generates compelling copy tailored to your audience and goals.",
                  },
                  {
                    question: "Can I train the AI to match my brand voice?",
                    answer:
                      "Absolutely! Our brand voice training feature analyzes your existing content and learns your unique tone, style, and messaging preferences. The more content you provide, the better the AI becomes at matching your brand voice.",
                  },
                  {
                    question: "What marketing channels does ADmyBRAND support?",
                    answer:
                      "ADmyBRAND integrates with all major marketing platforms including Facebook Ads, Google Ads, LinkedIn, Twitter, Instagram, email marketing platforms, and more. You can create and deploy campaigns across multiple channels from one dashboard.",
                  },
                  {
                    question: "Is there a limit to how much content I can generate?",
                    answer:
                      "Content limits depend on your plan. The Starter plan includes 10,000 AI-generated words per month, Professional includes 50,000 words, and Enterprise offers unlimited content generation.",
                  },
                  {
                    question: "How accurate is the campaign performance analytics?",
                    answer:
                      "Our AI analytics engine processes data from all connected platforms in real-time, providing 99.9% accurate performance metrics. The system also uses machine learning to predict campaign performance and suggest optimizations.",
                  },
                  {
                    question: "Do you offer custom AI model training for Enterprise clients?",
                    answer:
                      "Yes! Enterprise clients can work with our team to train custom AI models on their specific industry data, competitor analysis, and historical campaign performance for even more targeted and effective marketing content.",
                  },
                ].map((faq, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.05 }}
                  >
                    <AccordionItem value={`item-${i}`} className="border-b border-border/40 py-2">
                      <AccordionTrigger className="text-left font-medium hover:no-underline">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
                    </AccordionItem>
                  </motion.div>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-20 md:py-32 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground relative overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>

          <div className="container px-4 md:px-6 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center space-y-6 text-center"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
                Ready to Transform Your Marketing with AI?
              </h2>
              <p className="mx-auto max-w-[700px] text-primary-foreground/80 md:text-xl">
                Join thousands of marketers who have revolutionized their campaigns and boosted ROI with our AI-powered
                marketing suite.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-4">
                <Button size="lg" variant="secondary" className="rounded-full h-12 px-8 text-base">
                  Start Free Trial
                  <ArrowRight className="ml-2 size-4" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full h-12 px-8 text-base bg-transparent border-white text-white hover:bg-white/10"
                >
                  Schedule a Demo
                </Button>
              </div>
              <p className="text-sm text-primary-foreground/80 mt-4">
                No credit card required. 14-day free trial. Cancel anytime.
              </p>
            </motion.div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t bg-background/95 backdrop-blur-sm">
        <div className="container flex flex-col gap-8 px-4 py-10 md:px-6 lg:py-16">
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
            <div className="space-y-4">
              <div className="flex items-center gap-2 font-bold">
                <div className="size-8 rounded-lg bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center text-primary-foreground">
                  A
                </div>
                <span>ADmyBRAND</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Transform your marketing strategy with our AI-powered suite. Create compelling campaigns, optimize
                performance, and scale your brand effortlessly.
              </p>
              <div className="flex gap-4">
                <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="size-5"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                  <span className="sr-only">Facebook</span>
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="size-5"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                  <span className="sr-only">Twitter</span>
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="size-5"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect width="4" height="12" x="2" y="9"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="text-sm font-bold">Product</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    Integrations
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    API
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-sm font-bold">Resources</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    Guides
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    Support
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-sm font-bold">Company</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row justify-between items-center border-t border-border/40 pt-8">
            <p className="text-xs text-muted-foreground">
              &copy; {new Date().getFullYear()} ADmyBRAND. All rights reserved.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
