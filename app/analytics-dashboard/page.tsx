'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import { analytics, AnalyticsEvent } from '@/lib/analytics'

export default function AnalyticsDashboard() {
  const router = useRouter()
  const [events, setEvents] = useState<AnalyticsEvent[]>([])
  const [stats, setStats] = useState({
    totalViews: 0,
    optionClicks: 0,
    videoViews: 0,
    videoCompletions: 0,
    offerViews: 0,
    freeConversions: 0,
    paidConversions: 0,
  })

  useEffect(() => {
    // Load events from localStorage
    const storedEvents = localStorage.getItem('analytics_events')
    if (storedEvents) {
      const parsedEvents = JSON.parse(storedEvents)
      setEvents(parsedEvents)

      // Calculate stats
      const optionClicks = parsedEvents.filter((e: AnalyticsEvent) => e.event === 'option_selected').length
      const videoViews = parsedEvents.filter((e: AnalyticsEvent) => e.event === 'video_page_viewed').length
      const videoCompletions = parsedEvents.filter((e: AnalyticsEvent) => e.event === 'video_completed').length
      const offerSelections = parsedEvents.filter((e: AnalyticsEvent) => e.event === 'offer_selected')
      const freeConversions = offerSelections.filter((e: AnalyticsEvent) => e.data?.type === 'free').length
      const paidConversions = offerSelections.filter((e: AnalyticsEvent) => e.data?.type === 'paid').length

      setStats({
        totalViews: parsedEvents.length,
        optionClicks,
        videoViews,
        videoCompletions,
        offerViews: offerSelections.length,
        freeConversions,
        paidConversions,
      })
    }
  }, [])

  const conversionRate = stats.optionClicks > 0 
    ? ((stats.freeConversions + stats.paidConversions) / stats.optionClicks * 100).toFixed(1)
    : '0'

  const paidRate = stats.offerViews > 0
    ? (stats.paidConversions / stats.offerViews * 100).toFixed(1)
    : '0'

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <button
            onClick={() => router.push('/')}
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-6"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Home
          </button>
          <h1 className="text-5xl font-bold text-white mb-4">Analytics Dashboard</h1>
          <p className="text-xl text-gray-300">Track user engagement and conversion rates</p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {[
            { label: 'Total Events', value: stats.totalViews, icon: '📊', color: 'from-blue-500 to-cyan-500' },
            { label: 'Option Clicks', value: stats.optionClicks, icon: '👆', color: 'from-purple-500 to-pink-500' },
            { label: 'Video Views', value: stats.videoViews, icon: '🎥', color: 'from-green-500 to-emerald-500' },
            { label: 'Conversions', value: stats.freeConversions + stats.paidConversions, icon: '✨', color: 'from-orange-500 to-red-500' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-purple-500/50 transition-all"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-4xl">{stat.icon}</span>
                <div className={`px-3 py-1 bg-gradient-to-r ${stat.color} rounded-full text-white text-sm font-semibold`}>
                  Live
                </div>
              </div>
              <div className="text-4xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Conversion Metrics */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8"
          >
            <h2 className="text-2xl font-bold text-white mb-6">Conversion Funnel</h2>
            <div className="space-y-4">
              {[
                { step: 'Options Viewed', count: stats.optionClicks, percent: 100 },
                { step: 'Videos Watched', count: stats.videoViews, percent: stats.optionClicks > 0 ? (stats.videoViews / stats.optionClicks * 100) : 0 },
                { step: 'Videos Completed', count: stats.videoCompletions, percent: stats.optionClicks > 0 ? (stats.videoCompletions / stats.optionClicks * 100) : 0 },
                { step: 'Offers Viewed', count: stats.offerViews, percent: stats.optionClicks > 0 ? (stats.offerViews / stats.optionClicks * 100) : 0 },
                { step: 'Conversions', count: stats.freeConversions + stats.paidConversions, percent: stats.optionClicks > 0 ? ((stats.freeConversions + stats.paidConversions) / stats.optionClicks * 100) : 0 },
              ].map((item, index) => (
                <div key={index}>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-300">{item.step}</span>
                    <span className="text-white font-semibold">{item.count} ({item.percent.toFixed(0)}%)</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-500"
                      style={{ width: `${item.percent}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8"
          >
            <h2 className="text-2xl font-bold text-white mb-6">Offer Conversions</h2>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between items-center mb-3">
                  <span className="text-gray-300">Free Plan</span>
                  <span className="text-2xl font-bold text-green-400">{stats.freeConversions}</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-3">
                  <div
                    className="bg-gradient-to-r from-green-500 to-emerald-500 h-3 rounded-full"
                    style={{ width: `${stats.offerViews > 0 ? (stats.freeConversions / stats.offerViews * 100) : 0}%` }}
                  />
                </div>
                <div className="text-right text-sm text-gray-400 mt-1">
                  {stats.offerViews > 0 ? (stats.freeConversions / stats.offerViews * 100).toFixed(1) : 0}% conversion
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-3">
                  <span className="text-gray-300">Premium Plan</span>
                  <span className="text-2xl font-bold text-purple-400">{stats.paidConversions}</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-3">
                  <div
                    className="bg-gradient-to-r from-purple-500 to-pink-500 h-3 rounded-full"
                    style={{ width: `${paidRate}%` }}
                  />
                </div>
                <div className="text-right text-sm text-gray-400 mt-1">
                  {paidRate}% conversion
                </div>
              </div>

              <div className="pt-6 border-t border-white/10">
                <div className="text-center">
                  <div className="text-4xl font-bold text-white mb-2">{conversionRate}%</div>
                  <div className="text-gray-400">Overall Conversion Rate</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Recent Events */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8"
        >
          <h2 className="text-2xl font-bold text-white mb-6">Recent Events</h2>
          <div className="overflow-x-auto">
            {events.length === 0 ? (
              <div className="text-center py-12 text-gray-400">
                <p className="text-xl mb-2">No events tracked yet</p>
                <p className="text-sm">Start using the landing flow to see analytics here</p>
              </div>
            ) : (
              <table className="w-full">
                <thead>
                  <tr className="text-left text-gray-400 border-b border-white/10">
                    <th className="pb-3 pr-4">Event</th>
                    <th className="pb-3 pr-4">Details</th>
                    <th className="pb-3">Time</th>
                  </tr>
                </thead>
                <tbody>
                  {events.slice(-10).reverse().map((event, index) => (
                    <tr key={index} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                      <td className="py-3 pr-4 text-white font-semibold">{event.event}</td>
                      <td className="py-3 pr-4 text-gray-300">
                        {event.data ? JSON.stringify(event.data, null, 0) : '-'}
                      </td>
                      <td className="py-3 text-gray-400 text-sm">
                        {new Date(event.timestamp).toLocaleString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  )
}


