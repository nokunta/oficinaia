# 🎁 Configuração dos Recursos da Newsletter

## 📝 O Que Foi Criado

Quando alguém se inscreve na newsletter CouceloIA, é automaticamente redirecionado para uma página com **3 recursos exclusivos**:

1. ✨ **50+ Prompts IA**
2. 🤔 **Qual IA?**
3. 🇵🇹 **Escreve à Tuga**

---

## 🔧 Como Configurar os Links

### Edita o ficheiro: `data/recursos.json`

```json
{
  "recursos": [
    {
      "id": 1,
      "icon": "✨",
      "title": "50+ Prompts IA",
      "description": "...",
      "buttonText": "Obter Recurso",
      "buttonLink": "SEU_LINK_AQUI",  ← Troca isto
      "color": "from-purple-500 to-pink-500"
    },
    ...
  ]
}
```

### Links a Adicionar:

1. **50+ Prompts IA**
   - Link: URL do Google Docs, Notion, ou PDF
   - Exemplo: `https://notion.so/...` ou `https://drive.google.com/...`

2. **Qual IA?**
   - Link: URL do website "Qual IA?"
   - Exemplo: `https://qual-ia.com` ou o teu domínio

3. **Escreve à Tuga**
   - Link: URL do ChatGPT GPT personalizado
   - Exemplo: `https://chat.openai.com/g/g-...`

---

## 🎯 Fluxo Completo

```
┌─────────────────────────────────────┐
│  Usuário clica "Subscrever"         │
└──────────────┬──────────────────────┘
               │
               ▼
┌─────────────────────────────────────┐
│  Preenche Nome + Email              │
└──────────────┬──────────────────────┘
               │
               ▼
┌─────────────────────────────────────┐
│  Submit → /api/newsletter           │
│  (Adiciona ao Beehiiv)              │
└──────────────┬──────────────────────┘
               │
               ▼
┌─────────────────────────────────────┐
│  ✅ Sucesso (2 segundos)             │
└──────────────┬──────────────────────┘
               │
               ▼
┌─────────────────────────────────────┐
│  Redireciona para /recursos         │
│  Mostra os 3 recursos exclusivos    │
└─────────────────────────────────────┘
```

---

## 🎨 Página de Recursos

### Localização:
`/recursos` ou `http://localhost:3001/recursos`

### Conteúdo:
- ✅ Mensagem de boas-vindas
- ✅ 3 cartões com os recursos
- ✅ Botões para cada recurso
- ✅ Instruções de próximos passos
- ✅ Botão para voltar à home

---

## 💡 Melhorias na Página de Oferta

Agora a opção **Newsletter CouceloIA** mostra um **bónus visual**:

```
🎁 Bónus ao Subscrever:
• 50+ Prompts IA organizados
• Ferramenta "Qual IA?"
• GPT "Escreve à Tuga"
```

Isto aumenta a **taxa de conversão** ao mostrar o valor imediato!

---

## 🔐 Opcional: Proteger a Página de Recursos

Se quiseres que apenas subscritores tenham acesso:

### Opção 1: Cookie/Token
```typescript
// Ao subscrever, guarda um token
localStorage.setItem('subscriber_token', 'xxx')

// Na página /recursos, verifica
if (!localStorage.getItem('subscriber_token')) {
  router.push('/')
}
```

### Opção 2: Link Único
- Gera um link único por subscritor no Beehiiv
- Envia por email
- `/recursos?token=abc123`

---

## 📊 Analytics

Eventos trackados:
- `newsletter_subscribed` - Quando subscreve
- `resources_page_viewed` - Quando vê a página
- `resource_clicked` - Quando clica num recurso

---

## 🌐 Testar

1. Vai para: **http://localhost:3001/offer**
2. Clica em **"Subscrever Newsletter"**
3. Preenche o formulário
4. Aguarda 2 segundos
5. Serás redirecionado para **/recursos** 🎉

---

## 📝 Checklist

- [ ] Adicionar link real do "50+ Prompts IA"
- [ ] Adicionar link real do "Qual IA?"
- [ ] Adicionar link real do "Escreve à Tuga"
- [ ] Testar todos os links
- [ ] Verificar se os recursos abrem em nova aba
- [ ] Confirmar que o Beehiiv está configurado
- [ ] Testar o fluxo completo

---

## 🚀 Próximos Passos Sugeridos

1. **Email de Boas-vindas**
   - Configura no Beehiiv
   - Inclui os mesmos 3 recursos
   - Link para `/recursos`

2. **Página de Confirmação**
   - "Confirma o teu email"
   - Re-envia os recursos

3. **Analytics**
   - Google Analytics
   - Track clicks nos recursos
   - Taxa de conversão

---

**Tudo pronto! Só falta adicionares os links reais!** 🎯











