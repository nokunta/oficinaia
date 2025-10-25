'use client'

import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { analytics } from '@/lib/analytics'
import NewsletterModal from '@/components/NewsletterModal'

export default function OfferPage() {
  const router = useRouter()
  const [showNewsletterModal, setShowNewsletterModal] = useState(false)

  const handleOfferClick = (type: 'free' | 'paid') => {
    analytics.track('offer_selected', {
      type,
      step: 3,
    })

    if (type === 'free') {
      setShowNewsletterModal(true)
    } else {
      window.open('https://www.skool.com/couceloia-3033/about?ref=6b5518d997064e459336d02c601ad74c', '_blank')
    }
  }

  const handleBack = () => {
    router.back()
  }

  return (
    <>
      <NewsletterModal 
        isOpen={showNewsletterModal} 
        onClose={() => setShowNewsletterModal(false)} 
      />
      
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
          className="text-center mb-16"
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

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
            Escolhe o Teu <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-400">Recurso</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
            Mantém-te informado com a newsletter ou junta-te à comunidade premium
          </p>
        </motion.div>

        {/* Resource Cards */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Newsletter (Free) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="h-full bg-gradient-to-br from-white/5 to-white/5 backdrop-blur-sm border border-green-500/20 rounded-3xl p-8 hover:border-green-500/50 transition-all duration-300 hover:scale-[1.02]">
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border-2 border-blue-500/50 rounded-2xl flex items-center justify-center mb-4">
                  <svg className="w-9 h-9 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-white mb-2">Newsletter CouceloIA</h2>
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-bold text-white">Grátis</span>
                </div>
                <p className="text-gray-400 text-sm mt-2">Sempre gratuita</p>
              </div>

              <p className="text-gray-300 mb-6 leading-relaxed">
                Mantém-te informado sobre as <span className="text-blue-400 font-semibold">novidades da IA</span>. Todas as semanas recebes novidades e coisas práticas diretamente no teu email.
              </p>

              <div className="mb-6 p-4 bg-green-500/10 border border-green-500/30 rounded-xl">
                <p className="text-green-400 font-semibold mb-2">🎁 Bónus ao Subscrever:</p>
                <ul className="text-sm text-gray-300 space-y-1">
                  <li>• 50+ Prompts IA organizados</li>
                  <li>• Ferramenta &quot;Qual IA?&quot;</li>
                  <li>• GPT &quot;Escreve à Tuga&quot;</li>
                </ul>
              </div>

              <ul className="space-y-4 mb-8">
                {[
                  'Newsletter semanal com novidades de IA',
                  'Dicas e truques práticos',
                  'E-mails sobre tópicos interessantes',
                  'Atualizações sobre ferramentas',
                  'Recursos gratuitos',
                ].map((feature, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    className="flex items-center gap-3 text-gray-300"
                  >
                    <svg
                      className="w-5 h-5 text-blue-500 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>{feature}</span>
                  </motion.li>
                ))}
              </ul>

              <button
                onClick={() => handleOfferClick('free')}
                className="w-full py-4 bg-white/10 hover:bg-blue-500/20 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 border border-blue-500/30 hover:border-blue-500"
              >
                Subscrever Newsletter
              </button>
            </div>
          </motion.div>

          {/* Community (Premium) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative"
          >
            {/* Popular Badge */}
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
              <span className="px-6 py-2 bg-gradient-to-r from-green-500 to-cyan-500 text-black text-xs font-bold rounded-full shadow-lg">
                ⭐ RECOMENDADO
              </span>
            </div>

            <div className="h-full bg-gradient-to-br from-green-500/20 to-cyan-500/20 backdrop-blur-sm border-2 border-green-500 rounded-3xl p-8 hover:shadow-2xl hover:shadow-green-500/40 transition-all duration-300 hover:scale-[1.02]">
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500/40 to-cyan-500/40 border-2 border-green-500 rounded-2xl flex items-center justify-center mb-4">
                  <svg className="w-9 h-9 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-white mb-2">Comunidade Premium</h2>
                <div className="mb-3">
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-5xl font-bold text-green-400">Grátis</span>
                  </div>
                  <p className="text-green-400 text-sm font-semibold">🎉 Até ao fim de outubro</p>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold text-white">18€</span>
                  <span className="text-gray-300">/mês depois</span>
                </div>
                <p className="text-gray-400 text-sm mt-2">Cancela quando quiseres</p>
              </div>

              <p className="text-gray-300 mb-6 leading-relaxed">
                Acesso completo à <span className="text-green-400 font-semibold">Oficina de IA</span> com sessões de mentoria todas as semanas e muito mais.
              </p>

              <ul className="space-y-4 mb-8">
                {[
                  'Acesso completo à Oficina de IA',
                  'Comunidade privada exclusiva',
                  'Suporte prioritário',
                  'Biblioteca completa de guias',
                  'Recursos e templates exclusivos',
                  'Acesso antecipado a novos conteúdos',
                  'Tudo da newsletter incluído',
                ].map((feature, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.08 }}
                    className="flex items-center gap-3 text-gray-200"
                  >
                    <svg
                      className="w-5 h-5 text-green-400 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="font-medium">{feature}</span>
                  </motion.li>
                ))}
              </ul>

              <button
                onClick={() => {
                  analytics.track('community_link_clicked', { from: 'offer_page' })
                  window.open('https://www.skool.com/couceloia-3033/about?ref=6b5518d997064e459336d02c601ad74c', '_blank')
                }}
                className="w-full py-4 bg-gradient-to-r from-green-500 to-cyan-500 hover:from-green-600 hover:to-cyan-600 text-black font-bold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-500/50 text-lg"
              >
                Juntar-me à Comunidade
              </button>
            </div>
          </motion.div>
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="flex flex-wrap justify-center items-center gap-8 text-gray-400">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Sem cartão de crédito para newsletter</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Cancela a qualquer momento</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Garantia 30 dias</span>
            </div>
          </div>
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-16 max-w-3xl mx-auto"
        >
          <h3 className="text-2xl font-bold text-white text-center mb-8">Perguntas Frequentes</h3>
          <div className="space-y-4">
            {[
              { q: 'Posso subscrever a newsletter e depois juntar-me à comunidade?', a: 'Sim! Podes começar com a newsletter gratuita e fazer upgrade quando quiseres.' },
              { q: 'O que incluem as sessões de mentoria?', a: 'Sessões semanais ao vivo onde podes tirar dúvidas e aprender diretamente sobre projetos de IA.' },
              { q: 'Posso cancelar a comunidade a qualquer momento?', a: 'Sim, podes cancelar quando quiseres sem compromissos.' },
            ].map((faq, index) => (
              <div key={index} className="bg-white/5 border border-green-500/20 rounded-xl p-6">
                <h4 className="text-white font-semibold mb-2">{faq.q}</h4>
                <p className="text-gray-400">{faq.a}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Progress Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mt-16 text-center"
        >
          <div className="flex items-center justify-center gap-2 mb-3">
            <div className="w-8 h-1 bg-green-500 rounded-full" />
            <div className="w-8 h-1 bg-green-500 rounded-full" />
            <div className="w-8 h-1 bg-green-500 rounded-full" />
          </div>
          <p className="text-gray-400">Passo 3 de 3 • Escolhe o Teu Recurso</p>
        </motion.div>
        </div>
      </div>
    </>
  )
}
