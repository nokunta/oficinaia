import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const { email, firstName } = await request.json()

    // Validação básica
    if (!email || !firstName) {
      return NextResponse.json(
        { error: 'Email e nome são obrigatórios' },
        { status: 400 }
      )
    }

    // Validação de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Email inválido' },
        { status: 400 }
      )
    }

    // Configuração da API do Beehiiv
    const BEEHIIV_API_KEY = process.env.BEEHIIV_API_KEY
    const BEEHIIV_PUBLICATION_ID = process.env.BEEHIIV_PUBLICATION_ID

    if (!BEEHIIV_API_KEY || !BEEHIIV_PUBLICATION_ID) {
      console.error('Beehiiv API credentials not configured')
      return NextResponse.json(
        { error: 'Serviço temporariamente indisponível' },
        { status: 500 }
      )
    }

    // Chamada à API do Beehiiv
    const response = await fetch('https://api.beehiiv.com/v2/publications/' + BEEHIIV_PUBLICATION_ID + '/subscriptions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${BEEHIIV_API_KEY}`,
      },
      body: JSON.stringify({
        email: email.toLowerCase().trim(),
        reactivate_existing: false,
        send_welcome_email: true,
        utm_source: 'oficina-website',
        utm_medium: 'popup',
        referring_site: 'oficinaia.com',
        custom_fields: [
          {
            name: 'first_name',
            value: firstName.trim()
          }
        ]
      }),
    })

    const data = await response.json()

    if (!response.ok) {
      console.error('Beehiiv API error:', data)
      
      // Tratamento de erros específicos
      if (response.status === 400 && data.errors) {
        return NextResponse.json(
          { error: 'Este email já está subscrito!' },
          { status: 400 }
        )
      }
      
      return NextResponse.json(
        { error: 'Erro ao subscrever. Tenta novamente.' },
        { status: response.status }
      )
    }

    return NextResponse.json({
      success: true,
      message: 'Subscrição realizada com sucesso!',
    })

  } catch (error) {
    console.error('Newsletter subscription error:', error)
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    )
  }
}


