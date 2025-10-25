import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    console.log('[Newsletter API] Request received')
    const { email, firstName } = await request.json()
    console.log('[Newsletter API] Data:', { email, firstName })

    // Validação básica
    if (!email || !firstName) {
      console.log('[Newsletter API] Validation failed: missing email or firstName')
      return NextResponse.json(
        { error: 'Email e nome são obrigatórios' },
        { status: 400 }
      )
    }

    // Validação de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      console.log('[Newsletter API] Validation failed: invalid email format')
      return NextResponse.json(
        { error: 'Email inválido' },
        { status: 400 }
      )
    }

    // Configuração da API do Beehiiv
    const BEEHIIV_API_KEY = process.env.BEEHIIV_API_KEY
    const BEEHIIV_PUBLICATION_ID = process.env.BEEHIIV_PUBLICATION_ID

    console.log('[Newsletter API] Env check:', {
      hasApiKey: !!BEEHIIV_API_KEY,
      hasPublicationId: !!BEEHIIV_PUBLICATION_ID,
      publicationId: BEEHIIV_PUBLICATION_ID,
    })

    if (!BEEHIIV_API_KEY || !BEEHIIV_PUBLICATION_ID) {
      console.error('[Newsletter API] ERROR: Beehiiv API credentials not configured')
      return NextResponse.json(
        { error: 'Serviço temporariamente indisponível' },
        { status: 500 }
      )
    }

    // Chamada à API do Beehiiv
    const beehiivUrl = `https://api.beehiiv.com/v2/publications/${BEEHIIV_PUBLICATION_ID}/subscriptions`
    const requestBody = {
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
    }

    console.log('[Newsletter API] Calling Beehiiv API:', beehiivUrl)
    console.log('[Newsletter API] Request body:', JSON.stringify(requestBody, null, 2))

    const response = await fetch(beehiivUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${BEEHIIV_API_KEY}`,
      },
      body: JSON.stringify(requestBody),
    })

    console.log('[Newsletter API] Beehiiv response status:', response.status)
    
    const data = await response.json()
    console.log('[Newsletter API] Beehiiv response data:', JSON.stringify(data, null, 2))

    if (!response.ok) {
      console.error('[Newsletter API] ERROR: Beehiiv API error:', data)
      
      // Tratamento de erros específicos
      if (response.status === 400 && data.errors) {
        console.log('[Newsletter API] Error 400: Email already subscribed')
        return NextResponse.json(
          { error: 'Este email já está subscrito!' },
          { status: 400 }
        )
      }
      
      console.log('[Newsletter API] Error response sent to client')
      return NextResponse.json(
        { error: 'Erro ao subscrever. Tenta novamente.' },
        { status: response.status }
      )
    }

    console.log('[Newsletter API] SUCCESS: Subscription completed')
    return NextResponse.json({
      success: true,
      message: 'Subscrição realizada com sucesso!',
    })

  } catch (error) {
    console.error('[Newsletter API] EXCEPTION:', error)
    console.error('[Newsletter API] Error stack:', error instanceof Error ? error.stack : 'No stack trace')
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    )
  }
}


