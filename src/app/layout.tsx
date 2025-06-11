import { Inter } from 'next/font/google'
import { APP_CONFIG, META_DEFAULTS } from '@/lib/constants'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: META_DEFAULTS.title,
  description: META_DEFAULTS.description,
  keywords: META_DEFAULTS.keywords,
  openGraph: {
    title: META_DEFAULTS.title,
    description: META_DEFAULTS.description,
    url: APP_CONFIG.url,
    siteName: APP_CONFIG.name,
    images: [
      {
        url: META_DEFAULTS.ogImage,
        width: 1200,
        height: 630,
        alt: APP_CONFIG.name,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: META_DEFAULTS.title,
    description: META_DEFAULTS.description,
    images: [META_DEFAULTS.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#3b82f6" />
      </head>
      <body className={inter.className}>
        <div className="min-h-screen bg-background">
          {children}
        </div>
      </body>
    </html>
  )
}

// src/app/globals.css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 222.2 84% 4.9%;
    --card: 0 0% 100%;
    --card-foreground: 222.2 84% 4.9%;
    --popover: 0 0% 100%;
    --popover-foreground: 222.2 84% 4.9%;
    --primary: 221.2 83.2% 53.3%;
    --primary-foreground: 210 40% 98%;
    --secondary: 210 40% 96%;
    --secondary-foreground: 222.2 47.4% 11.2%;
    --muted: 210 40% 96%;
    --muted-foreground: 215.4 16.3% 46.9%;
    --accent: 210 40% 96%;
    --accent-foreground: 222.2 47.4% 11.2%;
    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 210 40% 98%;
    --border: 214.3 31.8% 91.4%;
    --input: 214.3 31.8% 91.4%;
    --ring: 221.2 83.2% 53.3%;
    --radius: 0.5rem;
  }

  .dark {
    --background: 222.2 84% 4.9%;
    --foreground: 210 40% 98%;
    --card: 222.2 84% 4.9%;
    --card-foreground: 210 40% 98%;
    --popover: 222.2 84% 4.9%;
    --popover-foreground: 210 40% 98%;
    --primary: 217.2 91.2% 59.8%;
    --primary-foreground: 222.2 47.4% 11.2%;
    --secondary: 217.2 32.6% 17.5%;
    --secondary-foreground: 210 40% 98%;
    --muted: 217.2 32.6% 17.5%;
    --muted-foreground: 215 20.2% 65.1%;
    --accent: 217.2 32.6% 17.5%;
    --accent-foreground: 210 40% 98%;
    --destructive: 0 62.8% 30.6%;
    --destructive-foreground: 210 40% 98%;
    --border: 217.2 32.6% 17.5%;
    --input: 217.2 32.6% 17.5%;
    --ring: 224.3 76.3% 94.1%;
  }
}

@layer base {
  * {
    @apply border-border;
  }
  
  body {
    @apply bg-background text-foreground;
    font-feature-settings: "rlig" 1, "calt" 1;
  }

  /* Custom scrollbar */
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    @apply bg-muted;
  }

  ::-webkit-scrollbar-thumb {
    @apply bg-border rounded-full;
  }

  ::-webkit-scrollbar-thumb:hover {
    @apply bg-accent-foreground;
  }
}

@layer components {
  /* Amindhar specific styles */
  .amindhar-gradient {
    background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
  }
  
  .amindhar-gradient-text {
    background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .property-card {
    @apply bg-card border border-border rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200;
  }

  .property-card:hover {
    @apply border-primary/20 shadow-lg;
  }

  .feature-badge {
    @apply inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary;
  }

  .status-badge {
    @apply inline-flex items-center px-2 py-1 rounded-full text-xs font-medium;
  }

  .moroccan-pattern {
    background-image: url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23f1f5f9' fill-opacity='0.1'%3E%3Cpath d='M20 20c0 11.046-8.954 20-20 20v-40c11.046 0 20 8.954 20 20zM40 20c0-11.046-8.954-20-20-20v40c11.046 0 20-8.954 20-20z'/%3E%3C/g%3E%3C/svg%3E");
  }
}

@layer utilities {
  .text-balance {
    text-wrap: balance;
  }
}

// src/app/page.tsx
import { APP_CONFIG } from '@/lib/constants'
import { Button } from '@/components/ui/button'
import { Search, MapPin, Shield, Users, TrendingUp, Star } from 'lucide-react'
import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 amindhar-gradient rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">A</span>
            </div>
            <span className="text-xl font-bold amindhar-gradient-text">
              {APP_CONFIG.name}
            </span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/properties" className="text-foreground/80 hover:text-foreground transition-colors">
              Properties
            </Link>
            <Link href="/agencies" className="text-foreground/80 hover:text-foreground transition-colors">
              Agencies
            </Link>
            <Link href="/developers" className="text-foreground/80 hover:text-foreground transition-colors">
              Developers
            </Link>
            <Link href="/help" className="text-foreground/80 hover:text-foreground transition-colors">
              Help
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" asChild>
              <Link href="/auth/login">Sign In</Link>
            </Button>
            <Button asChild>
              <Link href="/auth/signup">Get Started</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 amindhar-gradient text-white overflow-hidden">
        <div className="absolute inset-0 moroccan-pattern opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
              Find Your Perfect Property in Morocco
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 text-balance">
              {APP_CONFIG.description}
            </p>
            
            {/* Search Bar */}
            <div className="bg-white rounded-lg p-4 shadow-xl max-w-2xl mx-auto">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                    <input
                      type="text"
                      placeholder="Enter city or area"
                      className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
                    />
                  </div>
                </div>
                <Button size="lg" className="px-8">
                  <Search className="h-5 w-5 mr-2" />
                  Search
                </Button>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
              <div className="text-center">
                <div className="text-3xl font-bold">10K+</div>
                <div className="text-blue-100">Properties</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">500+</div>
                <div className="text-blue-100">Verified Agents</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">50+</div>
                <div className="text-blue-100">Cities</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">98%</div>
                <div className="text-blue-100">Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose {APP_CONFIG.name}?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We make finding and listing properties in Morocco simple, secure, and efficient
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 amindhar-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert Support</h3>
              <p className="text-muted-foreground">
                Get help from local real estate experts who know Morocco
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 amindhar-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Market Insights</h3>
              <p className="text-muted-foreground">
                Access real-time market data and property value trends
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 amindhar-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Local Expertise</h3>
              <p className="text-muted-foreground">
                Deep knowledge of Moroccan real estate markets and regulations
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 amindhar-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Smart Search</h3>
              <p className="text-muted-foreground">
                Advanced filters and AI-powered recommendations
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 amindhar-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Premium Service</h3>
              <p className="text-muted-foreground">
                Exceptional service from inquiry to key handover
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Cities Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Explore Properties by City
            </h2>
            <p className="text-xl text-muted-foreground">
              Discover amazing properties in Morocco's most popular destinations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {['Casablanca', 'Rabat', 'Marrakech', 'Tangier'].map((city) => (
              <Link 
                key={city}
                href={`/properties?city=${city}`}
                className="group relative overflow-hidden rounded-lg bg-gray-100 aspect-[4/3] hover:shadow-lg transition-all duration-200"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                <div className="absolute bottom-4 left-4 z-20 text-white">
                  <h3 className="text-xl font-semibold">{city}</h3>
                  <p className="text-sm text-gray-200">View properties</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 amindhar-gradient text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Find Your Dream Property?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who found their perfect home through {APP_CONFIG.name}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/properties">Browse Properties</Link>
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-blue-600" asChild>
              <Link href="/auth/signup">List Your Property</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 amindhar-gradient rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">A</span>
                </div>
                <span className="text-xl font-bold">{APP_CONFIG.name}</span>
              </div>
              <p className="text-gray-400 mb-4">
                Your trusted partner for real estate in Morocco
              </p>
              <div className="flex space-x-4">
                <a href={APP_CONFIG.social.facebook} className="text-gray-400 hover:text-white">
                  Facebook
                </a>
                <a href={APP_CONFIG.social.instagram} className="text-gray-400 hover:text-white">
                  Instagram
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Properties</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/properties?type=apartment" className="hover:text-white">Apartments</Link></li>
                <li><Link href="/properties?type=villa" className="hover:text-white">Villas</Link></li>
                <li><Link href="/properties?type=commercial" className="hover:text-white">Commercial</Link></li>
                <li><Link href="/properties?listing_type=new" className="hover:text-white">New Developments</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/agencies" className="hover:text-white">Find an Agent</Link></li>
                <li><Link href="/developers" className="hover:text-white">Developers</Link></li>
                <li><Link href="/help/valuation" className="hover:text-white">Property Valuation</Link></li>
                <li><Link href="/help/mortgage" className="hover:text-white">Mortgage Help</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/help/contact" className="hover:text-white">Contact Us</Link></li>
                <li><Link href="/help/faq" className="hover:text-white">FAQ</Link></li>
                <li><Link href="/terms" className="hover:text-white">Terms of Service</Link></li>
                <li><Link href="/privacy" className="hover:text-white">Privacy Policy</Link></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">
              © 2024 {APP_CONFIG.name}. All rights reserved.
            </p>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <span className="text-gray-400">Contact: {APP_CONFIG.contact.email}</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Verified Properties</h3>
              <p className="text-muted-foreground">
                All properties and agents are verified for your peace of mind
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 amindhar-gradi
