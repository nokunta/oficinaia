// Type definitions for the application

export interface Option {
  id: string
  title: string
  description: string
  image: string
  videoUrl: string
  icon: string
  mediaType?: 'image' | 'video'
}

export interface OptionsData {
  options: Option[]
}

export interface AnalyticsEvent {
  event: string
  data?: Record<string, any>
  timestamp: string
}

export type OfferType = 'free' | 'paid'

export interface ConversionStats {
  free: number
  paid: number
  total: number
}

export interface Recurso {
  id: number
  icon: string
  title: string
  description: string
  buttonText: string
  buttonLink: string
  color: string
  image?: string
}

export interface RecursosData {
  recursos: Recurso[]
}

