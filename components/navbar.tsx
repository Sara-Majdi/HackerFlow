"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
// import { ModeToggle } from "@/components/ui/mode-toggle"
import { Menu, LogOut, Settings, User, ChevronDown, LayoutDashboard} from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { createClient } from "@/lib/supabase/client"
import { signOut } from "@/app/utils/actions"
import HackerFlowLogo from '@/assets/hackerflow-logo.png';
import Image, { StaticImageData } from "next/image"
import { forwardRef } from "react"
import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import BrowseHackathonImage from '@/assets/browseHackathonImage2.png';
import DashboardImage from '@/assets/dashboardImage2.png';
import DiscoverHackathonsImage from '@/assets/landingPage/DiscoverHackathons.png'
import AIMatchingImage from '@/assets/landingPage/AIMatching.png'
import AIIdeaGeneratorImage from '@/assets/landingPage/AIIdeaGenerator.png'
import HackathonDetailsImage from '@/assets/landingPage/HackathonDetails.png'
import AnalyticsPageImage from '@/assets/landingPage/AnalyticsPage.png'

// Updated ListItem component with image support
const ListItem = forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & {
    title: string
    image?: StaticImageData
    imageAlt?: string
  }
>(({ className, title, children, href, image, imageAlt, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          ref={ref}
          href={href || "#"}
          className={cn(
            "block select-none space-y-2 rounded-lg p-3 leading-none no-underline outline-none transition-all border-2 border-transparent",
            className
          )}
          {...props}
        >
          {image && (
            <div className="relative w-full h-36 mb-2 rounded-lg overflow-hidden flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900 border-2 border-gray-700">
              <Image
                src={image}
                alt={imageAlt || title}
                width={300}
                height={80}
                className="object-contain max-w-full max-h-full"
              />
            </div>
          )}
          <div className="text-md font-mono font-bold leading-none text-white">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-gray-300 font-geist">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"

// Mobile ListItem component (without image for mobile)
const MobileListItem = forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & {
    title: string
    onClose?: () => void
  }
>(({ className, title, children, href, onClose, ...props }, ref) => {
  return (
    <Link
      ref={ref}
      href={href || "#"}
      onClick={onClose}
      className={cn(
        "block select-none space-y-1.5 rounded-lg p-3 leading-none no-underline outline-none transition-all border-2 border-transparent",
        className
      )}
      {...props}
    >
      <div className="text-sm font-mono font-bold leading-none text-white">{title}</div>
      <p className="line-clamp-2 text-xs leading-snug text-gray-300 font-geist">
        {children}
      </p>
    </Link>
  )
})
MobileListItem.displayName = "MobileListItem"

export function Navbar() {
  const [userEmail, setUserEmail] = useState<string | null>(null)
  const [isOpen, setIsOpen] = useState(false)
  const [hackathonsOpen, setHackathonsOpen] = useState(false)
  const [toolsOpen, setToolsOpen] = useState(false)

  useEffect(() => {
    const supabase = createClient()
    let mounted = true
    supabase.auth.getUser().then(({ data }) => {
      if (!mounted) return
      setUserEmail(data.user?.email ?? null)
    })
    const { data: sub } = supabase.auth.onAuthStateChange((_event, session) => {
      setUserEmail(session?.user?.email ?? null)
    })
    return () => {
      mounted = false
      sub.subscription.unsubscribe()
    }
  }, [])

  const initials = (email: string | null) => {
    if (!email) return "U"
    const namePart = email.split("@")[0]
    return namePart.slice(0, 2).toUpperCase()
  }

  const closeMobileMenu = () => {
    setIsOpen(false)
    setHackathonsOpen(false)
    setToolsOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 mt-3 mb-8 md:mb-0 px-4">
      <div className="mx-auto max-w-7xl w-full">
        <div className="flex items-center justify-between px-6 py-3 bg-black/80 backdrop-blur-xl border-2 border-teal-400/30 rounded-full shadow-2xl shadow-teal-400/10 hover:shadow-teal-400/20 transition-all">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-teal-400 to-cyan-500 flex items-center justify-center shadow-lg shadow-teal-400/50 group-hover:shadow-teal-400/80 transition-all group-hover:scale-110">
              <Image
                src={HackerFlowLogo}
                alt="HackerFlow Logo"
                className="rounded-lg"/>
            </div>
            <span className="font-blackops text-2xl bg-gradient-to-r from-teal-400 via-cyan-400 to-yellow-400 bg-clip-text text-transparent">HackerFlow</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-8 text-md md:flex lg:-ml-36">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent data-[state=open]:bg-transparent hover:bg-teal-500/10 text-gray-300 hover:text-teal-400 font-mono transition-colors">
                    Hackathons
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="min-w-[400px] p-4 bg-gradient-to-b from-gray-900 to-black border-2 border-teal-400/20 shadow-2xl shadow-teal-400/10">
                    <ul className="grid w-[400px] gap-3 md:w-[500px] grid-cols-2 lg:w-[550px]">
                      <ListItem
                        title="Browse Hackathons"
                        href="/hackathons"
                        className="hover:bg-teal-500/10 hover:border-2 hover:border-teal-400/30 transition-all"
                        image={BrowseHackathonImage}
                        imageAlt="Browse Hackathons"
                      >
                        Discover upcoming hackathons and join the community.
                      </ListItem>
                      <ListItem
                        title="Organize Hackathons"
                        href="/organize/step1"
                        className="hover:bg-cyan-500/10 hover:border-2 hover:border-cyan-400/30 transition-all"
                        image={AnalyticsPageImage}
                        imageAlt="Organize Hackathons"
                      >
                        Create and manage your own hackathon events.
                      </ListItem>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent data-[state=open]:bg-transparent hover:bg-cyan-500/10 text-gray-300 hover:text-cyan-400 font-mono transition-colors">
                    Tools
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="min-w-[400px] p-4 bg-gradient-to-b from-gray-900 to-black border-2 border-cyan-400/20 shadow-2xl shadow-cyan-400/10">
                    <ul className="grid w-[400px] gap-3 md:w-[500px] grid-cols-2 lg:w-[550px]">
                      <ListItem
                        title="AI Hackathon Idea Generator"
                        href="/ai-idea-generator"
                        className="hover:bg-yellow-500/10 hover:border-2 hover:border-yellow-400/30 transition-all"
                        image={AIIdeaGeneratorImage}
                        imageAlt="AI Idea Generation"
                      >
                        Use AI to brainstorm and generate inovative project ideas for hackathons.
                      </ListItem>
                      <ListItem
                        title="AI Team Matchmaking"
                        href="/find-teammates"
                        className="hover:bg-pink-500/10 hover:border-2 hover:border-pink-400/30 transition-all"
                        image={AIMatchingImage}
                        imageAlt="Team Matchmaking"
                      >
                        Find the perfect teammates with AI-powered matching.
                      </ListItem>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                    <Link href="/search-friends" className="bg-transparent hover:bg-yellow-500/10 text-gray-300 hover:text-yellow-400 font-mono transition-colors">
                      Discover
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </nav>

          <div className="flex items-center gap-3">
            {/* Desktop User Menu */}
            <div className="hidden md:flex">
              {userEmail ? (
                <DropdownMenu>
                  <DropdownMenuTrigger className="focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 focus:ring-offset-black rounded-full transition-all">
                    <div className="relative">
                      <Avatar className="h-10 w-10 bg-gradient-to-br from-teal-400 to-cyan-500 ring-2 ring-teal-400/20 hover:ring-teal-400/50 transition-all">
                        <AvatarFallback className="font-blackops bg-gradient-to-br from-teal-400 to-cyan-500 text-black">
                          {initials(userEmail)}
                        </AvatarFallback>
                      </Avatar>
                      <div className="absolute -bottom-0.5 -right-0.5 h-3 w-3 bg-green-500 rounded-full ring-2 ring-black"></div>
                    </div>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent 
                    className="w-64 bg-gradient-to-b from-gray-900 to-black border border-gray-800 shadow-2xl rounded-xl p-2"
                    align="end"
                    sideOffset={8}
                  >
                    {/* User Info Header */}
                    <div className="px-3 py-3 mb-2 rounded-lg bg-gradient-to-r from-teal-500/10 to-cyan-500/10 border border-teal-500/20">
                      <p className="text-xs font-geist text-gray-300 mb-1">Signed in as</p>
                      <p className="text-sm font-semibold font-geist text-white truncate">{userEmail}</p>
                    </div>
                    
                    <DropdownMenuSeparator className="bg-gray-800 my-2" />
                    
                    <DropdownMenuItem className="rounded-md px-3 py-2.5 hover:bg-gray-800 focus:bg-gray-800 cursor-pointer transition-colors group">
                      <Link href={"/profile"} className="flex items-center gap-2">
                        <User className="h-4 w-4 mr-3 text-gray-400 group-hover:text-teal-400 transition-colors" />
                        <span className="text-sm">Profile</span>
                      </Link>
                    </DropdownMenuItem>
                    
                    <DropdownMenuItem className="rounded-md px-3 py-2.5 hover:bg-gray-800 focus:bg-gray-800 cursor-pointer transition-colors group">
                      <Link href={"/dashboard"} className="flex items-center gap-2">
                        <LayoutDashboard className="h-4 w-4 mr-3 text-gray-400 group-hover:text-cyan-400 transition-colors" />
                        <span className="text-sm">Dashboard</span>  
                      </Link>
                    </DropdownMenuItem>
                    
                    {/* <DropdownMenuItem className="rounded-md px-3 py-2.5 hover:bg-gray-800 focus:bg-gray-800 cursor-pointer transition-colors group">
                      <Settings className="h-4 w-4 mr-3 text-gray-400 group-hover:text-blue-400 transition-colors" />
                      <span className="text-sm">Settings</span>
                    </DropdownMenuItem> */}
                    
                    <DropdownMenuSeparator className="bg-gray-800 my-2" />
                    
                    <DropdownMenuItem asChild>
                      <form action={signOut} className="w-full">
                        <button 
                          type="submit" 
                          className="flex items-center w-full rounded-md px-3 py-2.5 hover:bg-red-500/90 focus:bg-red-500/10 transition-colors group cursor-pointer"
                        >
                          <LogOut className="h-4 w-4 mr-3 text-red-400 group-hover:text-white transition-colors" />
                          <span className="text-sm text-red-400 group-hover:text-white font-medium transition-colors">
                            Sign Out
                          </span>
                        </button>
                      </form>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <div className="flex gap-3 font-mono">
                  <Button
                    asChild
                    className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white font-blackops rounded-lg hover:opacity-90 border-0 shadow-lg hover:shadow-xl transition-all"
                  >
                    <Link href="/onboarding/user-type">Join HackerFlow</Link>
                  </Button>
                  <Button
                    asChild
                    className="bg-gray-800/50 backdrop-blur-md border-2 border-gray-700 text-white font-blackops rounded-lg hover:bg-gray-700/50 hover:border-teal-400/50 shadow-lg hover:shadow-teal-400/20 transition-all"
                  >
                    <Link href="/auth/login">Login</Link>
                  </Button>
                </div>
              )}
            </div>

            {/* Mobile Menu Button */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden text-teal-400 border-2 border-teal-400/30 hover:bg-teal-500/10 hover:border-teal-400 transition-all rounded-lg">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-gradient-to-b from-gray-900 to-black border-l-2 border-teal-400/30">
                <div className="flex flex-col h-full">
                  {/* Header */}
                  <div className="flex items-center justify-between pb-6 border-b-2 border-teal-400/20">
                    <Link href="/" className="flex items-center gap-2 group" onClick={closeMobileMenu}>
                      <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-teal-400 to-cyan-500 flex items-center justify-center shadow-lg shadow-teal-400/50 group-hover:scale-110 transition-transform">
                        <Image
                          src={HackerFlowLogo}
                          alt="HackerFlow Logo"
                          className="rounded-lg"/>
                      </div>
                      <span className="font-blackops text-xl bg-gradient-to-r from-teal-400 via-cyan-400 to-yellow-400 bg-clip-text text-transparent">HackerFlow</span>
                    </Link>
                  </div>

                  {/* Navigation */}
                  <nav className="flex-1 space-y-2 pt-4">
                    {/* Hackathons Section */}
                    <Collapsible open={hackathonsOpen} onOpenChange={setHackathonsOpen}>
                      <CollapsibleTrigger className="flex w-full items-center justify-between rounded-lg px-4 py-3 text-sm font-mono font-bold text-gray-300 hover:text-teal-400 hover:bg-teal-500/10 border-2 border-transparent hover:border-teal-400/30 transition-all">
                        Hackathons
                        <ChevronDown className={cn("h-4 w-4 transition-transform", hackathonsOpen && "rotate-180")} />
                      </CollapsibleTrigger>
                      <CollapsibleContent className="space-y-1 px-3 pt-2">
                        <MobileListItem
                          title="Browse Hackathons"
                          href="/hackathons"
                          onClose={closeMobileMenu}
                          className="hover:bg-teal-500/10 hover:border-2 hover:border-teal-400/30 transition-all rounded-lg"
                        >
                          Discover upcoming hackathons and join the community.
                        </MobileListItem>
                        <MobileListItem
                          title="Organize Hackathons"
                          href="/organize/step1"
                          onClose={closeMobileMenu}
                          className="hover:bg-cyan-500/10 hover:border-2 hover:border-cyan-400/30 transition-all rounded-lg"
                        >
                          Create and manage your own hackathon events.
                        </MobileListItem>
                      </CollapsibleContent>
                    </Collapsible>

                    {/* Tools Section */}
                    <Collapsible open={toolsOpen} onOpenChange={setToolsOpen}>
                      <CollapsibleTrigger className="flex w-full items-center justify-between rounded-lg px-4 py-3 text-sm font-mono font-bold text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 border-2 border-transparent hover:border-cyan-400/30 transition-all">
                        Tools
                        <ChevronDown className={cn("h-4 w-4 transition-transform", toolsOpen && "rotate-180")} />
                      </CollapsibleTrigger>
                      <CollapsibleContent className="space-y-1 px-3 pt-2">
                        <MobileListItem
                          title="AI Hackathon Idea Generator"
                          href="/ai-idea-generator"
                          onClose={closeMobileMenu}
                          className="hover:bg-yellow-500/10 hover:border-2 hover:border-yellow-400/30 transition-all rounded-lg"
                        >
                          Use AI to brainstorm and generate inovative project ideas for hackathons.
                        </MobileListItem>
                        <MobileListItem
                          title="AI Team Matchmaking"
                          href="/find-teammates"
                          onClose={closeMobileMenu}
                          className="hover:bg-pink-500/10 hover:border-2 hover:border-pink-400/30 transition-all rounded-lg"
                        >
                          Find the perfect teammates with AI-powered matching.
                        </MobileListItem>
                      </CollapsibleContent>
                    </Collapsible>

                    {/* Search Friends */}
                    <Link
                      href="/search-friends"
                      onClick={closeMobileMenu}
                      className="block rounded-lg px-4 py-3 text-sm font-mono font-bold text-gray-300 hover:text-yellow-400 hover:bg-yellow-500/10 border-2 border-transparent hover:border-yellow-400/30 transition-all"
                    >
                      Discover
                    </Link>
                  </nav>

                  {/* Mobile User Section */}
                  <div className="border-t-2 border-teal-400/20 pt-6 mt-auto">
                    {userEmail ? (
                      <div className="space-y-3">
                        <div className="flex items-center gap-3 px-3 py-3 rounded-lg bg-gradient-to-r from-teal-500/10 to-cyan-500/10 border-2 border-teal-400/20">
                          <Avatar className="h-10 w-10 bg-gradient-to-br from-teal-400 to-cyan-500 ring-2 ring-teal-400/30">
                            <AvatarFallback className="font-blackops text-black text-sm">{initials(userEmail)}</AvatarFallback>
                          </Avatar>
                          <div className="flex-1 min-w-0">
                            <p className="text-xs font-mono text-gray-400">Signed in as</p>
                            <p className="text-sm font-mono font-bold text-white truncate">{userEmail}</p>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Link
                            href="/profile"
                            onClick={closeMobileMenu}
                            className="flex items-center gap-3 rounded-lg px-4 py-2.5 text-sm font-mono text-gray-300 hover:text-teal-400 hover:bg-teal-500/10 border-2 border-transparent hover:border-teal-400/30 transition-all"
                          >
                            <User className="h-4 w-4" />
                            Profile
                          </Link>
                          <Link
                            href="/dashboard"
                            onClick={closeMobileMenu}
                            className="flex items-center gap-3 rounded-lg px-4 py-2.5 text-sm font-mono text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 border-2 border-transparent hover:border-cyan-400/30 transition-all"
                          >
                            <LayoutDashboard className="h-4 w-4" />
                            Dashboard
                          </Link>

                          <form action={signOut} className="w-full">
                            <button
                              type="submit"
                              className="flex items-center gap-3 w-full rounded-lg px-4 py-2.5 text-sm font-mono text-red-400 hover:text-white hover:bg-red-500/10 border-2 border-transparent hover:border-red-400/30 transition-all"
                              onClick={closeMobileMenu}
                            >
                              <LogOut className="h-4 w-4" />
                              Sign Out
                            </button>
                          </form>
                        </div>
                      </div>
                    ) : (
                      <div className="space-y-2">
                        <Button
                          asChild
                          className="w-full bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white font-blackops rounded-lg hover:opacity-90 border-0 shadow-lg hover:shadow-xl transition-all"
                          onClick={closeMobileMenu}
                        >
                          <Link href="/onboarding/user-type">Join HackerFlow</Link>
                        </Button>
                        <Button
                          asChild
                          className="w-full bg-gray-800/50 backdrop-blur-md border-2 border-gray-700 text-white font-blackops rounded-lg hover:bg-gray-700/50 hover:border-teal-400/50 shadow-lg hover:shadow-teal-400/20 transition-all"
                          onClick={closeMobileMenu}
                        >
                          <Link href="/auth/login">Login</Link>
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}