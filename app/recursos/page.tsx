'use client'

import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import optionsData from '@/data/options.json'

export default function RecursosPage() {
  const router = useRouter()
  const SKOOL_URL = 'https://www.skool.com/couceloia-3033/about?ref=6b5518d997064e459336d02c601ad74c'

  return (
    <div className="min-h-screen bg-black">
      {/* Animated background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 via-black to-cyan-500/10" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-green-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <button
            onClick={() => router.push('/')}
            className="inline-flex items-center gap-2 text-gray-400 hover:text-green-400 transition-colors px-4 py-2 rounded-lg hover:bg-white/5 mb-8"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Voltar
          </button>

          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Ferramentas de IA
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Aprende a usar as melhores ferramentas de IA com estes vídeos práticos
            </p>
          </div>
        </motion.div>

        {/* Tools Grid */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {optionsData.options.map((option, index) => (
            <motion.div
              key={option.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="group"
            >
              <div className="h-full bg-gradient-to-br from-green-500/5 to-cyan-500/5 backdrop-blur-sm border border-green-500/20 rounded-3xl overflow-hidden hover:border-green-500 hover:shadow-2xl hover:shadow-green-500/30 transition-all duration-500">
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={option.image}
                    alt={option.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                  
                  {/* Icon overlay */}
                  <div className="absolute top-4 right-4 w-14 h-14 bg-black/80 backdrop-blur-sm border border-green-500 rounded-full flex items-center justify-center text-2xl">
                    {option.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-green-400 transition-colors">
                    {option.title}
                  </h3>
                  <p className="text-gray-400 mb-6 leading-relaxed text-sm">
                    {option.description}
                  </p>
                  <a
                    href={option.videoUrl.replace('youtube.com', 'youtube-nocookie.com')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full py-3 bg-gradient-to-r from-green-500/20 to-cyan-500/20 border border-green-500/50 text-green-400 font-semibold rounded-xl text-center hover:from-green-500 hover:to-cyan-500 hover:text-black transition-all duration-300"
                  >
                    Ver Vídeo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Community CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="max-w-4xl mx-auto bg-gradient-to-br from-green-500/10 to-cyan-500/10 border-2 border-green-500/30 rounded-3xl p-12 text-center"
        >
          <div className="w-20 h-20 bg-gradient-to-br from-green-500/20 to-cyan-500/20 border-2 border-green-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Junta-te à Comunidade Oficina de IA
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Aprende, partilha e cresce com outros entusiastas de IA. <br />
            A primeira comunidade portuguesa focada em <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-400 font-semibold">Inteligência Artificial prática</span>.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.open(SKOOL_URL, '_blank')}
            className="px-12 py-5 bg-gradient-to-r from-green-500 to-cyan-500 text-black font-bold text-xl rounded-xl hover:shadow-2xl hover:shadow-green-500/50 transition-all duration-300"
          >
            Fazer Parte da Comunidade
          </motion.button>
        </motion.div>
      </div>
    </div>
  )
}

