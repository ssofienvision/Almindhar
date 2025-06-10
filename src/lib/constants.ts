// src/lib/constants.ts

export const APP_CONFIG = {
  name: 'Amindhar',
  description: 'Your premier destination for real estate in Morocco',
  tagline: 'Find Your Perfect Property in Morocco',
  url: process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000',
  contact: {
    email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'contact@amindhar.com',
    support: process.env.NEXT_PUBLIC_SUPPORT_EMAIL || 'support@amindhar.com',
    phone: '+212 5XX-XXXXXX', // Update with actual Morocco phone number
  },
  social: {
    facebook: 'https://facebook.com/amindhar',
    instagram: 'https://instagram.com/amindhar',
    twitter: 'https://twitter.com/amindhar',
    linkedin: 'https://linkedin.com/company/amindhar',
  },
  defaultCurrency: 'MAD', // Moroccan Dirham
  defaultLanguage: 'en',
  supportedLanguages: ['en', 'fr', 'ar'], // English, French, Arabic for Morocco
}

export const ROUTES = {
  home: '/',
  auth: {
    login: '/auth/login',
    signup: '/auth/signup',
    roleSelection: '/auth/role-selection',
    onboarding: '/auth/onboarding',
    resetPassword: '/auth/reset-password',
  },
  dashboard: '/dashboard',
  properties: {
    search: '/properties',
    detail: '/properties/[id]',
    create: '/properties/create',
    edit: '/properties/edit/[id]',
    manage: '/dashboard/properties',
  },
  agencies: {
    directory: '/agencies',
    profile: '/agencies/[id]',
    register: '/agencies/register',
  },
  developers: {
    directory: '/developers',
    profile: '/developers/[id]',
    projects: '/developers/[id]/projects',
  },
  admin: {
    dashboard: '/admin/dashboard',
    users: '/admin/users',
    verification: '/admin/verification',
    content: '/admin/content',
    analytics: '/admin/analytics',
  },
  legal: {
    privacy: '/privacy',
    terms: '/terms',
    cookies: '/cookies',
  },
  help: {
    faq: '/help/faq',
    contact: '/help/contact',
    guides: '/help/guides',
  },
}

export const PROPERTY_TYPES = [
  { value: 'apartment', label: 'Apartment', icon: 'Building' },
  { value: 'villa', label: 'Villa', icon: 'Home' },
  { value: 'commercial', label: 'Commercial', icon: 'Store' },
  { value: 'office', label: 'Office', icon: 'Building2' },
  { value: 'warehouse', label: 'Warehouse', icon: 'Warehouse' },
  { value: 'land', label: 'Land', icon: 'MapPin' },
] as const

export const LISTING_TYPES = [
  { value: 'sale', label: 'For Sale', icon: 'DollarSign' },
  { value: 'rent', label: 'For Rent', icon: 'Calendar' },
  { value: 'new', label: 'New Development', icon: 'Hammer' },
] as const

export const USER_ROLES = [
  { value: 'individual', label: 'Individual', description: 'Looking to buy, rent, or sell property' },
  { value: 'agent', label: 'Real Estate Agent', description: 'Licensed real estate professional' },
  { value: 'agency', label: 'Real Estate Agency', description: 'Real estate company or brokerage' },
  { value: 'developer', label: 'Property Developer', description: 'Property development company' },
] as const

export const PROPERTY_FEATURES = [
  'Furniture', 'Garage', 'Garden', 'Gym', 'Heating system', 'Jacuzzi',
  'Laundry', 'Lawn', 'Microwave', 'Outdoor Shower', 'Parking',
  'Photovoltaic installation', 'Refrigerator', 'Sauna', 'Sea view',
  'Swimming Pool', 'Terrace', 'TV', 'Video surveillance', 'Washer',
  'Water heating', 'WiFi'
] as const

export const MOROCCAN_CITIES = [
  'Casablanca', 'Rabat', 'Marrakech', 'Fez', 'Tangier', 'Agadir',
  'Meknes', 'Oujda', 'Kenitra', 'Tetouan', 'Safi', 'Mohammedia',
  'Khouribga', 'Beni Mellal', 'El Jadida', 'Taza', 'Nador', 'Settat',
  'Larache', 'Ksar el-Kebir', 'Sale', 'Berrechid', 'Khemisset', 'Inezgane'
] as const

export const PRICE_RANGES = {
  sale: [
    { min: 0, max: 500000, label: 'Under 500K MAD' },
    { min: 500000, max: 1000000, label: '500K - 1M MAD' },
    { min: 1000000, max: 2000000, label: '1M - 2M MAD' },
    { min: 2000000, max: 5000000, label: '2M - 5M MAD' },
    { min: 5000000, max: 10000000, label: '5M - 10M MAD' },
    { min: 10000000, max: null, label: '10M+ MAD' },
  ],
  rent: [
    { min: 0, max: 3000, label: 'Under 3K MAD/month' },
    { min: 3000, max: 5000, label: '3K - 5K MAD/month' },
    { min: 5000, max: 8000, label: '5K - 8K MAD/month' },
    { min: 8000, max: 12000, label: '8K - 12K MAD/month' },
    { min: 12000, max: 20000, label: '12K - 20K MAD/month' },
    { min: 20000, max: null, label: '20K+ MAD/month' },
  ],
}

export const BEDROOM_OPTIONS = [
  { value: 'studio', label: 'Studio' },
  { value: '1', label: '1 Bedroom' },
  { value: '2', label: '2 Bedrooms' },
  { value: '3', label: '3 Bedrooms' },
  { value: '4', label: '4 Bedrooms' },
  { value: '5+', label: '5+ Bedrooms' },
] as const

export const VERIFICATION_DOCUMENT_TYPES = [
  { value: 'license', label: 'Real Estate License', required: true },
  { value: 'business_registration', label: 'Business Registration', required: true },
  { value: 'tax_id', label: 'Tax ID Document', required: false },
  { value: 'insurance', label: 'Professional Insurance', required: false },
  { value: 'id_document', label: 'Government ID', required: true },
] as const

export const INQUIRY_STATUSES = [
  { value: 'new', label: 'New', color: 'bg-blue-100 text-blue-800' },
  { value: 'contacted', label: 'Contacted', color: 'bg-yellow-100 text-yellow-800' },
  { value: 'qualified', label: 'Qualified', color: 'bg-purple-100 text-purple-800' },
  { value: 'viewing_scheduled', label: 'Viewing Scheduled', color: 'bg-orange-100 text-orange-800' },
  { value: 'offer_made', label: 'Offer Made', color: 'bg-indigo-100 text-indigo-800' },
  { value: 'closed', label: 'Closed', color: 'bg-green-100 text-green-800' },
  { value: 'lost', label: 'Lost', color: 'bg-red-100 text-red-800' },
] as const

export const SUBSCRIPTION_PLANS = {
  basic: {
    name: 'Basic',
    price: 199, // MAD per month
    features: ['Up to 5 listings', 'Basic support', 'Standard visibility'],
    featuredListings: 1,
  },
  premium: {
    name: 'Premium',
    price: 499, // MAD per month
    features: ['Up to 25 listings', 'Priority support', 'Featured placement', 'Analytics'],
    featuredListings: 5,
  },
  enterprise: {
    name: 'Enterprise',
    price: 999, // MAD per month
    features: ['Unlimited listings', '24/7 support', 'Custom branding', 'Advanced analytics'],
    featuredListings: 15,
  },
}

export const STORAGE_BUCKETS = {
  propertyImages: 'property-images',
  userAvatars: 'user-avatars',
  agencyLogos: 'agency-logos',
  verificationDocs: 'verification-docs',
  propertyDocuments: 'property-documents',
} as const

export const FILE_UPLOAD_LIMITS = {
  maxFileSize: 10 * 1024 * 1024, // 10MB
  maxFilesPerProperty: 20,
  allowedImageTypes: ['image/jpeg', 'image/png', 'image/webp'],
  allowedDocumentTypes: ['application/pdf', 'image/jpeg', 'image/png'],
}

export const MAP_CONFIG = {
  defaultCenter: {
    lat: 33.9716, // Rabat, Morocco
    lng: -6.8498,
  },
  defaultZoom: 6,
  maxZoom: 18,
  minZoom: 5,
}

export const PAGINATION = {
  defaultLimit: 20,
  maxLimit: 100,
  limitOptions: [10, 20, 50, 100],
}

export const SEARCH_FILTERS = {
  debounceMs: 300,
  minQueryLength: 2,
  maxSuggestions: 5,
}

export const NOTIFICATION_TYPES = {
  inquiry: 'New property inquiry',
  message: 'New message received',
  verification: 'Verification status update',
  listing: 'Listing status change',
  system: 'System notification',
} as const

export const DATE_FORMATS = {
  display: 'MMM dd, yyyy',
  input: 'yyyy-MM-dd',
  datetime: 'MMM dd, yyyy HH:mm',
  relative: true, // Show "2 hours ago" style
}

export const CURRENCY_SYMBOLS = {
  MAD: 'DH',
  EUR: '€',
  USD: '$',
} as const

// Theme colors for Amindhar
export const BRAND_COLORS = {
  primary: {
    50: '#eff6ff',
    100: '#dbeafe',
    200: '#bfdbfe',
    300: '#93c5fd',
    400: '#60a5fa',
    500: '#3b82f6', // Main brand blue
    600: '#2563eb',
    700: '#1d4ed8',
    800: '#1e40af',
    900: '#1e3a8a',
  },
  accent: {
    50: '#f0fdf4',
    100: '#dcfce7',
    200: '#bbf7d0',
    300: '#86efac',
    400: '#4ade80',
    500: '#22c55e', // Accent green
    600: '#16a34a',
    700: '#15803d',
    800: '#166534',
    900: '#14532d',
  },
}

export const META_DEFAULTS = {
  title: 'Amindhar - Find Your Perfect Property in Morocco',
  description: 'Discover the best real estate opportunities in Morocco. Browse apartments, villas, commercial properties and new developments from verified agents and developers.',
  keywords: 'real estate Morocco, property Morocco, apartments Casablanca, villas Marrakech, commercial property Rabat',
  ogImage: '/images/og-image.jpg',
}
