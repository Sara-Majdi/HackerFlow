"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Zap, Users, Target, Trophy, Calendar, Search, Sparkles, Github, UserPlus, LayoutDashboard, Code2 } from "lucide-react"
import { useRouter } from 'next/navigation'
import { useState } from "react"
import Image from "next/image"
import DiscoverHackathonsImage from '@/assets/landingPage/DiscoverHackathons.png'
import AIMatchingImage from '@/assets/landingPage/AIMatching.png'
import HackathonDetailsImage from '@/assets/landingPage/HackathonDetails.png'
import AnalyticsPageImage from '@/assets/landingPage/AnalyticsPage.png'
import AIIdeaGeneratorImage from '@/assets/landingPage/AIIdeaGenerator.png'
import ProfilePrivacyImage from '@/assets/Profile Privacy.png'
import DashboardImage from '@/assets/Dashboard.png'

const categoryTabs = [
  {
    id: 'hackers',
    label: 'For Hackers',
    icon: Code2,
    color: 'from-purple-500 to-pink-500'
  },
  {
    id: 'organizers',
    label: 'For Organizers',
    icon: Calendar,
    color: 'from-blue-400 to-cyan-500'
  }
]

const featureTabs: Record<string, Array<{
  id: string;
  label: string;
  icon: any;
  description: string;
  color: string;
}>> = {
  hackers: [
    {
      id: 'discover',
      label: 'Discover Events',
      icon: Search,
      description: 'Find hackathons across Malaysia',
      color: 'from-cyan-400 to-teal-500'
    },
    {
      id: 'match',
      label: 'AI Matching',
      icon: Users,
      description: 'Find perfect teammates with AI',
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 'ideaGenerator',
      label: 'AI Idea Generator',
      icon: Sparkles,
      description: 'Generate innovative project ideas',
      color: 'from-yellow-400 to-orange-500'
    },
    {
      id: 'profiles',
      label: 'GitHub Profiles',
      icon: Github,
      description: 'Showcase skills & contributions',
      color: 'from-indigo-400 to-purple-500'
    },
    {
      id: 'connect',
      label: 'Discover People',
      icon: UserPlus,
      description: 'Find and connect with hackers',
      color: 'from-pink-400 to-rose-500'
    },
    {
      id: 'dashboard',
      label: 'Track Progress',
      icon: LayoutDashboard,
      description: 'Monitor achievements & earnings',
      color: 'from-green-400 to-emerald-500'
    }
  ],
  organizers: [
    {
      id: 'organize',
      label: 'Host Events',
      icon: Calendar,
      description: 'Manage hackathons effortlessly',
      color: 'from-blue-400 to-cyan-500'
    },
    {
      id: 'analytics',
      label: 'Analytics Dashboard',
      icon: LayoutDashboard,
      description: 'Track revenue & performance',
      color: 'from-green-400 to-emerald-500'
    },
    {
      id: 'compete',
      label: 'Manage Competitions',
      icon: Trophy,
      description: 'Organize challenges & prizes',
      color: 'from-amber-400 to-yellow-500'
    },
    {
      id: 'participants',
      label: 'Participant Management',
      icon: Users,
      description: 'Handle registrations & teams',
      color: 'from-purple-400 to-pink-500'
    }
  ]
}

export function HeroSection() {
  const router = useRouter()
  const [activeCategory, setActiveCategory] = useState('hackers')
  const [activeTab, setActiveTab] = useState(featureTabs.hackers[0].id)

  const currentFeatures = featureTabs[activeCategory]
  const activeFeature = currentFeatures.find(tab => tab.id === activeTab) || currentFeatures[0]

  const handleCategoryChange = (categoryId: string) => {
    setActiveCategory(categoryId)
    setActiveTab(featureTabs[categoryId][0].id)
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-transparent">
      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 pt-14">
        <div className="max-w-7xl mx-auto space-y-12">

          {/* Badge */}
          <div className="text-center">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-purple-500/20 to-teal-500/20 backdrop-blur-md border-2 border-purple-500/30 text-sm font-mono font-bold text-white">
              <Zap className="w-4 h-4 mr-2 text-cyan-400" />
              Malaysia&apos;s #1 AI-Powered Hackathon Platform
            </div>
          </div>

          {/* Main Headline */}
          <div className="text-center space-y-6">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-blackops leading-tight">
              <span className="block text-white">One Platform For All</span>
              <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent py-2">
                HACK SMARTER, HOST BETTER!
              </span>
              <span className="block text-white">Build, Connect & Host Events</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-geist">
              HackerFlow is Malaysia&apos;s smartest hackathon platform to discover events, match with teammates using AI, and build impactful projects. Organizers can host, manage, and scale hackathons with powerful tools.
            </p>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-6">
            <div className="flex items-center gap-3 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border-2 border-cyan-500/30 rounded-xl px-6 py-3 backdrop-blur-sm">
              <Users className="w-5 h-5 text-cyan-400" />
              <span className="font-mono text-white">
                <strong className="text-cyan-400">10,000+</strong> Developers
              </span>
            </div>
            <div className="flex items-center gap-3 bg-gradient-to-r from-pink-500/10 to-purple-500/10 border-2 border-pink-500/30 rounded-xl px-6 py-3 backdrop-blur-sm">
              <Target className="w-5 h-5 text-pink-400" />
              <span className="font-mono text-white">
                <strong className="text-pink-400">500+</strong> Hackathons
              </span>
            </div>
            <div className="flex items-center gap-3 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border-2 border-purple-500/30 rounded-xl px-6 py-3 backdrop-blur-sm">
              <Zap className="w-5 h-5 text-purple-400" />
              <span className="font-mono text-white">
                <strong className="text-purple-400">95%</strong> Success Rate
              </span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              onClick={() => router.push("/onboarding/user-type")}
              className="group min-w-[200px] bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 hover:opacity-90 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 font-blackops text-lg"
            >
              JOIN HACKERFLOW
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              onClick={() => router.push("/organize/step1")}
              className="min-w-[200px] bg-gray-800/50 backdrop-blur-md border-2 border-gray-700 text-white hover:bg-gray-700/50 hover:border-gray-600 transition-all duration-300 font-blackops text-lg"
            >
              HOST HACKATHON
            </Button>
          </div>

          {/* Feature Tabs Section */}
          <div className="pt-2">
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl border-2 border-gray-700 shadow-2xl overflow-hidden">

              {/* Category Navigation - Premium Design */}
              <div className="relative">
                {/* Background decorative elements */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-pink-500/5 to-blue-500/5"></div>

                <div className="relative flex border-b-2 border-gray-700/50">
                  {categoryTabs.map((category, index) => {
                    const Icon = category.icon
                    const isActive = activeCategory === category.id
                    return (
                      <button
                        key={category.id}
                        onClick={() => handleCategoryChange(category.id)}
                        className={`group relative flex-1 px-8 py-6 font-blackops text-lg transition-all duration-300 ${
                          isActive
                            ? 'text-white'
                            : 'text-gray-400 hover:text-gray-200'
                        }`}
                      >
                        {/* Active indicator bar */}
                        {isActive && (
                          <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${category.color}`}></div>
                        )}

                        {/* Active background glow */}
                        {isActive && (
                          <div className={`absolute inset-0 bg-gradient-to-r ${category.color} opacity-10`}></div>
                        )}

                        {/* Border separator */}
                        {index > 0 && (
                          <div className="absolute left-0 top-1/4 bottom-1/4 w-px bg-gray-700"></div>
                        )}

                        {/* Content */}
                        <div className="relative flex items-center justify-center gap-3">
                          <div className={`p-2 rounded-lg transition-all ${
                            isActive
                              ? `bg-gradient-to-r ${category.color}`
                              : 'bg-gray-800 group-hover:bg-gray-700'
                          }`}>
                            <Icon className="w-5 h-5" />
                          </div>
                          <span className="tracking-wide">{category.label}</span>
                        </div>

                        {/* Hover effect */}
                        {!isActive && (
                          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-r from-gray-800/50 to-gray-700/50"></div>
                        )}
                      </button>
                    )
                  })}
                </div>
              </div>

              {/* Feature Tab Navigation - Refined Pills */}
              <div className="px-8 pt-8 pb-6">
                <div className="flex flex-wrap justify-center gap-2">
                  {currentFeatures.map((tab) => {
                    const Icon = tab.icon
                    const isActive = activeTab === tab.id
                    return (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`group relative px-4 py-2.5 rounded-full font-mono text-xs font-bold transition-all duration-300 ${
                          isActive
                            ? `bg-gradient-to-r ${tab.color} text-white shadow-lg hover:shadow-xl`
                            : 'bg-gray-800/80 text-gray-400 hover:text-white hover:bg-gray-700/80 border border-gray-700/50 hover:border-gray-600'
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <Icon className="w-3.5 h-3.5" />
                          <span className="tracking-wide">{tab.label}</span>
                        </div>
                      </button>
                    )
                  })}
                </div>
              </div>

              {/* Tab Content */}
              <div className="relative mx-8 mb-8 rounded-xl overflow-hidden bg-gray-800/30 border-2 border-gray-700 min-h-[400px]">
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${activeFeature.color} opacity-10`}></div>

                <div className="relative z-10 p-8">
                  <div className="flex flex-col lg:flex-row items-center gap-8">
                    {/* Feature Info */}
                    <div className="flex-1 text-center lg:text-left">
                      <div className="inline-flex items-center gap-3 mb-4">
                        <div className={`p-3 rounded-xl bg-gradient-to-r ${activeFeature.color}`}>
                          <activeFeature.icon className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-3xl font-blackops text-white">{activeFeature.label}</h3>
                      </div>
                      <p className="text-xl text-gray-300 font-geist mb-6">{activeFeature.description}</p>

                      {/* Feature-specific details */}
                      <div className="space-y-3 text-left">
                        {/* Hackers Category Features */}
                        {activeFeature.id === 'discover' && (
                          <>
                            <div className="flex items-start gap-3">
                              <div className="w-2 h-2 rounded-full bg-cyan-400 mt-2"></div>
                              <p className="text-gray-300 font-geist">Browse all hackathons in Malaysia in one place</p>
                            </div>
                            <div className="flex items-start gap-3">
                              <div className="w-2 h-2 rounded-full bg-cyan-400 mt-2"></div>
                              <p className="text-gray-300 font-geist">Filter by location, date, and prize pool</p>
                            </div>
                            <div className="flex items-start gap-3">
                              <div className="w-2 h-2 rounded-full bg-cyan-400 mt-2"></div>
                              <p className="text-gray-300 font-geist">Get notifications for new events</p>
                            </div>
                          </>
                        )}
                        {activeFeature.id === 'match' && (
                          <>
                            <div className="flex items-start gap-3">
                              <div className="w-2 h-2 rounded-full bg-purple-400 mt-2"></div>
                              <p className="text-gray-300 font-geist">AI analyzes GitHub profiles and skills</p>
                            </div>
                            <div className="flex items-start gap-3">
                              <div className="w-2 h-2 rounded-full bg-purple-400 mt-2"></div>
                              <p className="text-gray-300 font-geist">Swipe-based teammate matching system</p>
                            </div>
                            <div className="flex items-start gap-3">
                              <div className="w-2 h-2 rounded-full bg-purple-400 mt-2"></div>
                              <p className="text-gray-300 font-geist">Chat with potential teammates before events</p>
                            </div>
                          </>
                        )}
                        {activeFeature.id === 'ideaGenerator' && (
                          <>
                            <div className="flex items-start gap-3">
                              <div className="w-2 h-2 rounded-full bg-yellow-400 mt-2"></div>
                              <p className="text-gray-300 font-geist">Upload resume for personalized idea generation</p>
                            </div>
                            <div className="flex items-start gap-3">
                              <div className="w-2 h-2 rounded-full bg-yellow-400 mt-2"></div>
                              <p className="text-gray-300 font-geist">Share inspiration and interests for better ideas</p>
                            </div>
                            <div className="flex items-start gap-3">
                              <div className="w-2 h-2 rounded-full bg-yellow-400 mt-2"></div>
                              <p className="text-gray-300 font-geist">Chat with AI about your generated project idea</p>
                            </div>
                          </>
                        )}
                        {activeFeature.id === 'profiles' && (
                          <>
                            <div className="flex items-start gap-3">
                              <div className="w-2 h-2 rounded-full bg-indigo-400 mt-2"></div>
                              <p className="text-gray-300 font-geist">GitHub integration shows contributions & projects</p>
                            </div>
                            <div className="flex items-start gap-3">
                              <div className="w-2 h-2 rounded-full bg-indigo-400 mt-2"></div>
                              <p className="text-gray-300 font-geist">Showcase skills to organizers and recruiters</p>
                            </div>
                            <div className="flex items-start gap-3">
                              <div className="w-2 h-2 rounded-full bg-indigo-400 mt-2"></div>
                              <p className="text-gray-300 font-geist">Connect with potential future teammates</p>
                            </div>
                          </>
                        )}
                        {activeFeature.id === 'connect' && (
                          <>
                            <div className="flex items-start gap-3">
                              <div className="w-2 h-2 rounded-full bg-pink-400 mt-2"></div>
                              <p className="text-gray-300 font-geist">Search for hackers and organizers by name or email</p>
                            </div>
                            <div className="flex items-start gap-3">
                              <div className="w-2 h-2 rounded-full bg-pink-400 mt-2"></div>
                              <p className="text-gray-300 font-geist">Send friend requests and build your network</p>
                            </div>
                            <div className="flex items-start gap-3">
                              <div className="w-2 h-2 rounded-full bg-pink-400 mt-2"></div>
                              <p className="text-gray-300 font-geist">Discover people with similar interests</p>
                            </div>
                          </>
                        )}
                        {activeFeature.id === 'dashboard' && activeCategory === 'hackers' && (
                          <>
                            <div className="flex items-start gap-3">
                              <div className="w-2 h-2 rounded-full bg-green-400 mt-2"></div>
                              <p className="text-gray-300 font-geist">Track achievements, badges, and milestones</p>
                            </div>
                            <div className="flex items-start gap-3">
                              <div className="w-2 h-2 rounded-full bg-green-400 mt-2"></div>
                              <p className="text-gray-300 font-geist">Monitor hackathon participation and progress</p>
                            </div>
                            <div className="flex items-start gap-3">
                              <div className="w-2 h-2 rounded-full bg-green-400 mt-2"></div>
                              <p className="text-gray-300 font-geist">View your project portfolio and contributions</p>
                            </div>
                          </>
                        )}

                        {/* Organizers Category Features */}
                        {activeFeature.id === 'organize' && (
                          <>
                            <div className="flex items-start gap-3">
                              <div className="w-2 h-2 rounded-full bg-blue-400 mt-2"></div>
                              <p className="text-gray-300 font-geist">Create and publish hackathon events</p>
                            </div>
                            <div className="flex items-start gap-3">
                              <div className="w-2 h-2 rounded-full bg-blue-400 mt-2"></div>
                              <p className="text-gray-300 font-geist">Manage event details, schedules, and sponsors</p>
                            </div>
                            <div className="flex items-start gap-3">
                              <div className="w-2 h-2 rounded-full bg-blue-400 mt-2"></div>
                              <p className="text-gray-300 font-geist">Promote events to thousands of developers</p>
                            </div>
                          </>
                        )}
                        {activeFeature.id === 'analytics' && (
                          <>
                            <div className="flex items-start gap-3">
                              <div className="w-2 h-2 rounded-full bg-green-400 mt-2"></div>
                              <p className="text-gray-300 font-geist">Track revenue and payment processing</p>
                            </div>
                            <div className="flex items-start gap-3">
                              <div className="w-2 h-2 rounded-full bg-green-400 mt-2"></div>
                              <p className="text-gray-300 font-geist">Monitor registration trends and demographics</p>
                            </div>
                            <div className="flex items-start gap-3">
                              <div className="w-2 h-2 rounded-full bg-green-400 mt-2"></div>
                              <p className="text-gray-300 font-geist">Generate insights and performance reports</p>
                            </div>
                          </>
                        )}
                        {activeFeature.id === 'compete' && (
                          <>
                            <div className="flex items-start gap-3">
                              <div className="w-2 h-2 rounded-full bg-amber-400 mt-2"></div>
                              <p className="text-gray-300 font-geist">Set up competition tracks and categories</p>
                            </div>
                            <div className="flex items-start gap-3">
                              <div className="w-2 h-2 rounded-full bg-amber-400 mt-2"></div>
                              <p className="text-gray-300 font-geist">Manage prize pools and sponsor rewards</p>
                            </div>
                            <div className="flex items-start gap-3">
                              <div className="w-2 h-2 rounded-full bg-amber-400 mt-2"></div>
                              <p className="text-gray-300 font-geist">Track submissions and judge evaluations</p>
                            </div>
                          </>
                        )}
                        {activeFeature.id === 'participants' && (
                          <>
                            <div className="flex items-start gap-3">
                              <div className="w-2 h-2 rounded-full bg-purple-400 mt-2"></div>
                              <p className="text-gray-300 font-geist">Manage registrations and participant data</p>
                            </div>
                            <div className="flex items-start gap-3">
                              <div className="w-2 h-2 rounded-full bg-purple-400 mt-2"></div>
                              <p className="text-gray-300 font-geist">Organize teams and assign mentors</p>
                            </div>
                            <div className="flex items-start gap-3">
                              <div className="w-2 h-2 rounded-full bg-purple-400 mt-2"></div>
                              <p className="text-gray-300 font-geist">Send announcements and updates to participants</p>
                            </div>
                          </>
                        )}
                      </div>
                    </div>

                    {/* Feature Image */}
                    <div className="flex-1 w-full lg:w-auto">
                      <div className={`relative rounded-xl overflow-hidden border-2 ${activeTab === activeFeature.id ? 'border-white/20' : 'border-gray-700'} bg-gradient-to-br ${activeFeature.color} p-1`}>
                        <div className="bg-gray-900 rounded-lg min-h-[300px] flex items-center justify-center px-1">
                          <div className="text-center">
                            {activeFeature.id === 'discover' && (
                              <Image
                                src={DiscoverHackathonsImage}
                                alt="Discover Events"
                                className="rounded-md"
                              />
                            )}

                            {activeFeature.id === 'match' && (
                              <Image
                                src={AIMatchingImage}
                                alt="AI Team Matching"
                                className="rounded-md"
                              />
                            )}

                            {activeFeature.id === 'ideaGenerator' && (
                              <Image
                                src={AIIdeaGeneratorImage}
                                alt="AI Idea Generator"
                                className="rounded-md"
                              />
                            )}

                            {activeFeature.id === 'profiles' && (
                              <Image
                                src={ProfilePrivacyImage}
                                alt="GitHub Profile Integration"
                                className="rounded-md"
                              />
                            )}

                            {activeFeature.id === 'connect' && (
                              <Image
                                src={AIMatchingImage}
                                alt="Discover People"
                                className="rounded-md"
                              />
                            )}

                            {activeFeature.id === 'dashboard' && (
                              <Image
                                src={DashboardImage}
                                alt="Dashboard Analytics"
                                className="rounded-md"
                              />
                            )}

                            {activeFeature.id === 'organize' && (
                              <Image
                                src={AnalyticsPageImage}
                                alt="Host Events"
                                className="rounded-md"
                              />
                            )}

                            {activeFeature.id === 'analytics' && (
                              <Image
                                src={AnalyticsPageImage}
                                alt="Analytics Dashboard"
                                className="rounded-md"
                              />
                            )}

                            {activeFeature.id === 'compete' && (
                              <Image
                                src={HackathonDetailsImage}
                                alt="Manage Competitions"
                                className="rounded-md"
                              />
                            )}

                            {activeFeature.id === 'participants' && (
                              <Image
                                src={DashboardImage}
                                alt="Participant Management"
                                className="rounded-md"
                              />
                            )}

                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="pt-2">
            <div className="flex flex-col items-center gap-2 text-gray-400">
              <span className="text-xs font-mono">Scroll to explore</span>
              <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center">
                <div className="w-1 h-3 bg-gray-500 rounded-full mt-2 animate-bounce"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
