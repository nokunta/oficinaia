'use client'

import { motion } from 'framer-motion'
import { useRouter, useSearchParams } from 'next/navigation'
import { Suspense, useEffect, useState } from 'react'
import optionsData from '@/data/options.json'

function VideoPageContent() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const optionId = searchParams.get('option')
  const [selectedOption, setSelectedOption] = useState<any>(null)

  useEffect(() => {
    if (optionId) {
      const option = optionsData.options.find(opt => opt.id === optionId)
      setSelectedOption(option)
    }
  }, [optionId])

  const handleBack = () => {
    router.push('/recursos')
  }

  if (!selectedOption) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-white text-xl">A carregar...</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black">
      {/* Animated background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 via-black to-cyan-500/10" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-green-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8 md:py-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="flex justify-center mb-6">
            <button
              onClick={handleBack}
              className="inline-flex items-center gap-2 text-gray-400 hover:text-green-400 transition-colors group px-4 py-2 rounded-lg hover:bg-white/5"
            >
              <svg
                className="w-5 h-5 group-hover:-translate-x-1 transition-transform flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              <span className="text-sm md:text-base">Voltar</span>
            </button>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500/20 to-cyan-500/20 border-2 border-green-500 rounded-2xl flex items-center justify-center">
              <svg className="w-9 h-9 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center">
              {selectedOption.title}
            </h1>
          </div>
          
          <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto text-center px-4">
            Descobre como transformar as tuas ideias com o poder da IA
          </p>
        </motion.div>

        {/* Video Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-green-500/30 bg-black border border-green-500/30">
            <div className="relative pb-[56.25%]">
              <iframe
                className="absolute inset-0 w-full h-full"
                src={selectedOption.videoUrl.replace('youtube.com', 'youtube-nocookie.com')}
                title={selectedOption.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                referrerPolicy="strict-origin-when-cross-origin"
              />
            </div>
          </div>

          {/* Info Box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 p-6 bg-gradient-to-br from-green-500/10 to-cyan-500/10 border border-green-500/30 rounded-2xl"
          >
            <p className="text-gray-300 text-center leading-relaxed">
              {selectedOption.description}
            </p>
          </motion.div>

          {/* Continue Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-8 text-center"
          >
            <button
              onClick={() => window.open('https://www.skool.com/couceloia-3033/about?ref=6b5518d997064e459336d02c601ad74c', '_blank')}
              className="px-8 sm:px-12 py-3 sm:py-4 bg-gradient-to-r from-green-500 to-cyan-500 hover:from-green-600 hover:to-cyan-600 text-black text-base sm:text-lg font-bold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/50"
            >
              Juntar-me à Comunidade
            </button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default function VideoPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-white text-xl">A carregar...</div>
      </div>
    }>
      <VideoPageContent />
    </Suspense>
  )
}
