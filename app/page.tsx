'use client'

import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import optionsData from '@/data/options.json'
import { analytics } from '@/lib/analytics'

export default function HomePage() {
  const router = useRouter()

  const handlePathClick = (optionId: string, title: string, disabled?: boolean) => {
    if (disabled) {
      return
    }
    analytics.track('path_selected', {
      optionId,
      title,
      step: 1,
    })
    router.push(`/video?option=${optionId}`)
  }

  return (
    <div className="min-h-screen bg-black">
      {/* Animated background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 via-black to-cyan-500/10" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-green-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex flex-col items-center justify-center px-4 py-12">
          <div className="container mx-auto max-w-[1600px] w-full">
            {/* Top: Text Content */}
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-8 max-w-5xl mx-auto"
            >
              {/* Logo and Brand */}
              <div className="inline-flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500/20 to-cyan-500/20 border-2 border-green-500 rounded-xl flex items-center justify-center">
                  <svg className="w-7 h-7 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-400">
                  Oficina de IA
                </h2>
              </div>

              {/* Main title */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight px-4">
                Obtém as ferramentas para{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-400">
                  dominar a Inteligência Artificial
                </span>
              </h1>
            </motion.div>

            {/* Center: Full Width Hero Banner Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-full mb-8"
            >
              <div className="relative w-full">
                {/* Glowing background effect */}
                <div className="absolute -inset-6 bg-gradient-to-r from-green-500 to-cyan-500 rounded-3xl blur-3xl opacity-20 animate-pulse" />
                
                {/* Main banner image - FULL WIDTH */}
                <div className="relative rounded-3xl overflow-hidden border-2 border-green-500/50 shadow-2xl shadow-green-500/50">
                  <img
                    src="/hero-banner.jpg"
                    alt="João Coucelo - Oficina de IA"
                    className="w-full h-auto object-cover"
                    style={{ minHeight: '500px', maxHeight: '70vh' }}
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Floating accent elements */}
                <motion.div
                  animate={{ 
                    y: [0, -10, 0],
                    rotate: [0, 5, 0]
                  }}
                  transition={{ 
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute -bottom-6 -right-6 w-16 h-16 bg-black/90 backdrop-blur-sm border-2 border-green-500 rounded-2xl flex items-center justify-center shadow-xl shadow-green-500/50 hidden md:flex"
                >
                  <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </motion.div>

                <motion.div
                  animate={{ 
                    y: [0, -12, 0],
                    rotate: [0, -5, 0]
                  }}
                  transition={{ 
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5
                  }}
                  className="absolute -top-6 -left-6 w-14 h-14 bg-black/90 backdrop-blur-sm border-2 border-cyan-500 rounded-2xl flex items-center justify-center shadow-xl shadow-cyan-500/50 hidden md:flex"
                >
                  <svg className="w-7 h-7 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </motion.div>
              </div>
            </motion.div>

            {/* Bottom: CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-center"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  const element = document.getElementById('caminhos')
                  element?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="px-10 py-4 bg-gradient-to-r from-green-500 to-cyan-500 text-black font-bold text-lg rounded-xl hover:shadow-2xl hover:shadow-green-500/50 transition-all duration-300"
              >
                Explorar Agora
              </motion.button>
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-20 px-4 bg-black/50 backdrop-blur-sm border-y border-green-500/20">
          <div className="container mx-auto max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Sobre Mim
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed mb-12 max-w-4xl mx-auto">
                Sou o <span className="text-green-400 font-semibold">João Coucelo</span>, programador há <span className="text-cyan-400 font-semibold">6 anos</span> e criador da Oficina de IA.
                <br /><br />
                Nos últimos anos mergulhei no mundo da IA e agora ensino profissionais e curiosos a transformar ideias em projetos reais.
                <br /><br />
                A <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-400 font-semibold">Oficina de IA</span> é um espaço para te guiar passo a passo neste novo mundo.
              </p>

              {/* Tool Icons */}
              <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
                {[
                  { 
                    icon: (
                      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    ),
                    label: 'Programador'
                  },
                  { 
                    icon: (
                      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    ),
                    label: 'Criador'
                  },
                  { 
                    icon: (
                      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    ),
                    label: 'Mentor'
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center gap-3"
                  >
                    <div className="w-24 h-24 bg-gradient-to-br from-green-500/20 to-cyan-500/20 border-2 border-green-500/30 rounded-2xl flex items-center justify-center text-green-400">
                      {item.icon}
                    </div>
                    <span className="text-gray-300 font-medium">{item.label}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Choose Your Path Section */}
        <section id="caminhos" className="py-20 px-4">
          <div className="container mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Escolhe o Teu Caminho
              </h2>
              <p className="text-xl text-gray-400">
                Três oficinas especializadas para dominar a IA
              </p>
            </motion.div>

            {/* Three Cards */}
            <div className="grid md:grid-cols-3 gap-8">
              {optionsData.options.map((option, index) => {
                const isDisabled = (option as any).disabled
                return (
                  <motion.div
                    key={option.id}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.15 }}
                    viewport={{ once: true }}
                    className={`group ${isDisabled ? 'cursor-not-allowed opacity-60' : 'cursor-pointer'}`}
                    onClick={() => handlePathClick(option.id, option.title, isDisabled)}
                  >
                    <div className={`relative h-full bg-gradient-to-br from-green-500/5 to-cyan-500/5 backdrop-blur-sm border border-green-500/20 rounded-3xl overflow-hidden transition-all duration-500 ${isDisabled ? '' : 'hover:border-green-500 hover:shadow-2xl hover:shadow-green-500/30'}`}>
                    {/* Image or Video */}
                    <div className="relative h-80 overflow-hidden">
                      {(option as any).mediaType === 'video' ? (
                        <video
                          src={option.image}
                          autoPlay
                          loop
                          muted
                          playsInline
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <img
                          src={option.image}
                          alt={option.title}
                          className={`w-full h-full object-cover transition-transform duration-700 ${isDisabled ? '' : 'group-hover:scale-110'}`}
                        />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                      
                      {/* "Em breve" badge for disabled options */}
                      {isDisabled && (
                        <div className="absolute top-4 left-4 px-4 py-2 bg-gradient-to-r from-yellow-500 to-orange-500 text-black font-bold text-sm rounded-full">
                          Em breve
                        </div>
                      )}
                      
                      {/* Icon overlay */}
                      <div className="absolute top-4 right-4 w-16 h-16 bg-black/80 backdrop-blur-sm border border-green-500 rounded-full flex items-center justify-center text-3xl">
                        {option.icon}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className={`text-2xl font-bold text-white mb-3 transition-colors ${isDisabled ? '' : 'group-hover:text-green-400'}`}>
                        {option.title}
                      </h3>
                      <p className="text-gray-400 mb-6 leading-relaxed">
                        {option.description}
                      </p>
                      <button 
                        disabled={isDisabled}
                        className={`w-full py-3 border rounded-xl font-semibold transition-all duration-300 ${
                          isDisabled 
                            ? 'bg-gray-500/20 border-gray-500/50 text-gray-500 cursor-not-allowed' 
                            : 'bg-gradient-to-r from-green-500/20 to-cyan-500/20 border-green-500/50 text-green-400 group-hover:from-green-500 group-hover:to-cyan-500 group-hover:text-black'
                        }`}
                      >
                        {isDisabled ? 'Disponível em breve' : 'Ver vídeo detalhado'}
                      </button>
                    </div>
                  </div>
                </motion.div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Community Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-green-500/5 to-cyan-500/5 border-y border-green-500/20">
          <div className="container mx-auto max-w-5xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {/* Logo */}
              <div className="inline-flex items-center gap-4 mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500/20 to-cyan-500/20 border-2 border-green-500 rounded-2xl flex items-center justify-center">
                  <svg className="w-12 h-12 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-white">
                  Oficina de IA
                </h2>
              </div>

              <p className="text-2xl md:text-3xl text-gray-300 font-medium mb-8 leading-relaxed">
                A Oficina de IA: a primeira comunidade portuguesa focada em{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-400">
                  Inteligência Artificial prática
                </span>
              </p>

              <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed">
                Guias práticos sobre ferramentas, workflows e novidades, a Oficina de IA é um espaço vivo de partilha e crescimento onde vais aprender, discutir e aplicar IA no dia a dia.
              </p>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.open('https://www.skool.com/couceloia-3033/about?ref=6b5518d997064e459336d02c601ad74c', '_blank')}
                className="px-10 py-4 bg-gradient-to-r from-green-500 to-cyan-500 text-black font-bold text-lg rounded-xl hover:shadow-2xl hover:shadow-green-500/50 transition-all duration-300"
              >
                Juntar-me à Oficina
              </motion.button>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 px-4 bg-black border-t border-green-500/20">
          <div className="container mx-auto max-w-6xl text-center">
            {/* Logo */}
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500/20 to-cyan-500/20 border-2 border-green-500 rounded-xl flex items-center justify-center">
                <svg className="w-7 h-7 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <span className="text-xl font-bold text-white">Oficina de IA</span>
            </div>

            {/* Social Media Links */}
            <div className="flex justify-center gap-6 mb-6">
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
            
            {/* Copyright */}
            <p className="text-gray-500 text-sm">
              © Oficina de IA — 2025
            </p>
          </div>
        </footer>
      </div>
    </div>
  )
}
