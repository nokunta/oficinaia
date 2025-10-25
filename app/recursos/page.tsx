'use client'

import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import recursosData from '@/data/recursos.json'
import type { RecursosData } from '@/types'

export default function RecursosPage() {
  const router = useRouter()
  const recursos = (recursosData as RecursosData).recursos

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
          className="text-center mb-16"
        >
          {/* Success Icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-24 h-24 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6 border-2 border-green-500"
          >
            <svg className="w-12 h-12 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </motion.div>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            🎉 Bem-vindo à Newsletter CouceloIA!
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-6">
            Como prometido, aqui estão os <span className="text-green-400 font-semibold">3 recursos exclusivos</span> para começares já a usar IA no teu dia a dia!
          </p>
          <p className="text-gray-400">
            Verifica também o teu email para confirmares a subscrição 📧
          </p>
        </motion.div>

        {/* Resources Grid */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 mb-12">
          {recursos.map((recurso, index) => (
            <motion.div
              key={recurso.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.15 }}
              className="group"
            >
              <div className="h-full bg-gradient-to-br from-white/5 to-white/5 backdrop-blur-sm border border-green-500/20 rounded-3xl overflow-hidden hover:border-green-500 hover:shadow-2xl hover:shadow-green-500/30 transition-all duration-500">
                {/* Image */}
                {recurso.image && (
                  <div className="relative h-64 md:h-72 overflow-hidden">
                    <img
                      src={recurso.image}
                      alt={recurso.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                    {/* Icon overlay */}
                    <div className="absolute top-4 right-4 w-16 h-16 bg-black/80 backdrop-blur-sm border-2 border-green-500 rounded-full flex items-center justify-center text-3xl">
                      {recurso.icon}
                    </div>
                  </div>
                )}

                <div className="p-8">
                  {/* Title */}
                  <h2 className="text-2xl font-bold text-white mb-4 text-center group-hover:text-green-400 transition-colors">
                    {recurso.title}
                  </h2>

                  {/* Description */}
                  <p className="text-gray-400 mb-6 leading-relaxed text-center">
                    {recurso.description}
                  </p>

                  {/* Button */}
                  <a
                    href={recurso.buttonLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block w-full py-3 bg-gradient-to-r ${recurso.color} text-white font-semibold rounded-xl text-center hover:scale-105 transition-all duration-300 hover:shadow-lg`}
                  >
                    {recurso.buttonText}
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="max-w-4xl mx-auto bg-gradient-to-br from-green-500/10 to-cyan-500/10 border border-green-500/30 rounded-2xl p-8 text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-4">
            📬 Próximos Passos
          </h3>
          <div className="space-y-3 text-gray-300 mb-6">
            <p>
              ✅ <span className="font-semibold">Confirma o teu email</span> - Verifica a tua caixa de entrada
            </p>
            <p>
              ✅ <span className="font-semibold">Explora os recursos</span> - Usa os 3 recursos acima
            </p>
            <p>
              ✅ <span className="font-semibold">Recebe a newsletter</span> - Todas as semanas no teu email
            </p>
          </div>

          {/* Social Media */}
          <div className="pt-6 border-t border-green-500/20">
            <p className="text-white font-semibold mb-4">🌟 Segue-me nas redes sociais</p>
            <div className="flex justify-center gap-4">
              <a
                href="https://www.instagram.com/joaocouceloia"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/5 hover:bg-gradient-to-br hover:from-purple-500/20 hover:to-pink-500/20 border border-green-500/20 hover:border-pink-500 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5 text-gray-400 group-hover:text-pink-500 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="https://www.tiktok.com/@joaocouceloia"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/5 hover:bg-gradient-to-br hover:from-cyan-500/20 hover:to-pink-500/20 border border-green-500/20 hover:border-cyan-500 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                aria-label="TikTok"
              >
                <svg className="w-5 h-5 text-gray-400 group-hover:text-cyan-500 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
              <a
                href="https://www.youtube.com/@joaopedrocff"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/5 hover:bg-gradient-to-br hover:from-red-500/20 hover:to-red-600/20 border border-green-500/20 hover:border-red-500 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                aria-label="YouTube"
              >
                <svg className="w-5 h-5 text-gray-400 group-hover:text-red-500 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>
        </motion.div>

        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="text-center mt-12"
        >
          <button
            onClick={() => router.push('/')}
            className="inline-flex items-center gap-2 text-gray-400 hover:text-green-400 transition-colors px-6 py-3 rounded-lg hover:bg-white/5"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Voltar à Página Principal
          </button>
        </motion.div>
      </div>
    </div>
  )
}

