# Oficina de IA - Landing Page

Landing page moderna e interativa para a Oficina de IA de João Coucelo, construída com Next.js, React e Framer Motion.

## 🎯 Funcionalidades

- **Hero Section**: Fundo futurista com gradientes neon verde e azul
- **Sobre Mim**: Apresentação do João Coucelo e da Oficina de IA
- **3 Caminhos**: Imagens Perfeitas, Vídeos Incríveis, Agentes Excepcionais
- **Página de Vídeo**: Player integrado com informações detalhadas
- **Página de Oferta**: Planos Gratuito e Premium
- **Comunidade**: Secção dedicada à comunidade portuguesa de IA
- **Animações suaves** com Framer Motion
- **Design responsivo** (desktop + mobile)
- **Analytics integrado** para tracking de conversões
- **Type-safe** com TypeScript

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📁 Project Structure

```
├── app/
│   ├── page.tsx           # Step 1: Selection Page
│   ├── video/
│   │   └── page.tsx       # Step 2: Video Page
│   ├── offer/
│   │   └── page.tsx       # Step 3: Offer Page
│   ├── layout.tsx         # Root layout
│   └── globals.css        # Global styles
├── data/
│   └── options.json       # Configuration for options
├── lib/
│   └── analytics.ts       # Analytics tracking utility
├── public/                # Static assets
└── package.json
```

## 🎨 Customization

### Updating Options

Edit `data/options.json` to customize the three options on the selection page:

```json
{
  "options": [
    {
      "id": "option-1",
      "title": "Your Title",
      "description": "Your description",
      "image": "your-image-url",
      "videoUrl": "your-video-embed-url"
    }
  ]
}
```

### Styling

The project uses Tailwind CSS. Customize colors, fonts, and animations in:
- `tailwind.config.js` - Tailwind configuration
- `app/globals.css` - Global styles

### Analytics

The built-in analytics system tracks:
- Option selections
- Video page views
- Video completions
- Offer selections (free vs paid)

Events are logged to console in development and can be integrated with:
- Google Analytics
- Mixpanel
- Segment
- Custom analytics platforms

See `lib/analytics.ts` to integrate your analytics service.

## 📊 Analytics Events

| Event | Description | Data |
|-------|-------------|------|
| `option_selected` | User selects an option | optionId, title, step |
| `video_page_viewed` | User reaches video page | optionId, title, step |
| `video_completed` | User completes video | optionId, title, step |
| `offer_selected` | User chooses free/paid | type, step |

## 🛠 Built With

- **Next.js 14** - React framework
- **React 18** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS
- **Framer Motion** - Animation library

## 📱 Responsive Design

The flow is fully responsive and optimized for:
- Desktop (1920px+)
- Laptop (1024px - 1919px)
- Tablet (768px - 1023px)
- Mobile (320px - 767px)

## 🚢 Deployment

### Deploy to Vercel (Recommended)

```bash
npm run build
```

Then deploy to [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Import project in Vercel
3. Deploy automatically

### Other Platforms

The project can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## 📈 Performance

- Fast page loads with Next.js optimization
- Lazy loading images
- Smooth 60fps animations
- Minimal bundle size

## 🔒 Best Practices

- Type-safe code with TypeScript
- Component-based architecture
- Clean, maintainable code
- Responsive design patterns
- Accessibility features (WCAG 2.1)

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions are welcome! Feel free to:
1. Fork the project
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📞 Support

For questions or support, please open an issue in the repository.

---

Built with ❤️ using Next.js

