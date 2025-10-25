# 📧 Configuração da Newsletter com Beehiiv

## 🔑 Passo 1: Obter as Credenciais do Beehiiv

### 1.1 Criar API Key

1. Acede à tua conta [Beehiiv](https://app.beehiiv.com)
2. Vai para **Settings** → **API** no teu workspace
3. Clica em **"Create New API Key"**
4. Dá um nome (ex: "Oficina IA Website")
5. **Copia a chave** (começa com algo como `bhv_...`)

### 1.2 Obter Publication ID

1. Na mesma página de **API Settings**
2. Encontra o **Publication ID** (começa com `pub_...`)
3. **Copia o ID**

---

## ⚙️ Passo 2: Configurar no Projeto

### 2.1 Criar ficheiro .env.local

Na raiz do projeto `/Users/joaoferreira/Projects/oficinaia/`, cria um ficheiro chamado `.env.local`:

```bash
BEEHIIV_API_KEY=bhv_sua_api_key_aqui
BEEHIIV_PUBLICATION_ID=pub_seu_publication_id_aqui
```

### 2.2 Exemplo Real:

```bash
BEEHIIV_API_KEY=bhv_abc123def456ghi789
BEEHIIV_PUBLICATION_ID=pub_xyz987wvu654tsr321
```

**⚠️ IMPORTANTE:** 
- Nunca commits o ficheiro `.env.local` para o Git!
- Já está no `.gitignore` por segurança

---

## 🧪 Passo 3: Testar a Integração

### 3.1 Reiniciar o Servidor

```bash
# Para o servidor (Ctrl+C)
# Inicia novamente
npm run dev
```

### 3.2 Testar o Popup

1. Abre **http://localhost:3001/offer**
2. Clica no botão **"Subscrever Newsletter"** (opção gratuita)
3. Preenche o formulário
4. Verifica se aparece mensagem de sucesso ✅

### 3.3 Verificar no Beehiiv

1. Vai para [Beehiiv Dashboard](https://app.beehiiv.com)
2. Clica em **Audience** → **Subscribers**
3. Deves ver o novo subscritor na lista! 🎉

---

## 📋 Passo 4: Configurar Custom Fields (Opcional)

Para guardar o nome do subscritor:

1. No Beehiiv, vai para **Settings** → **Custom Fields**
2. Cria um campo chamado `first_name` (tipo: Text)
3. O código já está configurado para enviar este campo automaticamente!

---

## 🎨 Funcionalidades Implementadas

✅ **Modal Popup bonito** com campos Nome + Email  
✅ **Validação de formulário** (email válido, campos obrigatórios)  
✅ **Integração com Beehiiv API** server-side (seguro)  
✅ **Feedback visual** (loading, sucesso, erro)  
✅ **Analytics tracking** dos eventos  
✅ **Email de boas-vindas automático**  
✅ **Proteção contra duplicados**  

---

## 🔧 Estrutura de Ficheiros

```
oficinaia/
├── .env.local                          ← Cria este ficheiro
├── .env.example                        ← Template
├── components/
│   └── NewsletterModal.tsx             ← Modal do popup
├── app/
│   ├── api/
│   │   └── newsletter/
│   │       └── route.ts                ← API endpoint
│   └── offer/
│       └── page.tsx                    ← Botão de subscrição
```

---

## 🐛 Troubleshooting

### Erro: "Serviço temporariamente indisponível"
- Verifica se o ficheiro `.env.local` existe
- Verifica se as variáveis estão corretas
- Reinicia o servidor (`Ctrl+C` e `npm run dev`)

### Erro: "Este email já está subscrito"
- Normal! O email já existe na lista
- Testa com outro email

### Erro: "Email inválido"
- Verifica o formato do email
- Deve ser `exemplo@dominio.com`

### Modal não abre
- Verifica a consola do browser (F12)
- Procura por erros JavaScript

---

## 📊 Endpoints da API do Beehiiv

### Subscribe Endpoint
```
POST https://api.beehiiv.com/v2/publications/{PUBLICATION_ID}/subscriptions
```

### Headers Necessários
```
Authorization: Bearer {API_KEY}
Content-Type: application/json
```

### Payload
```json
{
  "email": "user@example.com",
  "reactivate_existing": false,
  "send_welcome_email": true,
  "utm_source": "oficina-website",
  "utm_medium": "popup",
  "custom_fields": [
    {
      "name": "first_name",
      "value": "Nome"
    }
  ]
}
```

---

## 🔐 Segurança

✅ **API Key protegida** - Nunca exposta ao frontend  
✅ **Server-side only** - Chamadas feitas no servidor Next.js  
✅ **Validação de input** - Email e nome validados  
✅ **Rate limiting** - Considera adicionar em produção  
✅ **HTTPS only** - Em produção, usa sempre HTTPS  

---

## 🚀 Deploy para Produção

### Vercel

1. Faz push para GitHub
2. Importa no Vercel
3. Adiciona as Environment Variables:
   - `BEEHIIV_API_KEY`
   - `BEEHIIV_PUBLICATION_ID`
4. Deploy! ✅

### Outras Plataformas

Adiciona as variáveis de ambiente nas configurações do serviço (Netlify, Railway, etc.)

---

## 📚 Links Úteis

- [Beehiiv API Docs](https://developers.beehiiv.com)
- [Create API Key](https://developers.beehiiv.com/welcome/create-an-api-key)
- [Beehiiv Dashboard](https://app.beehiiv.com)

---

## ✅ Checklist Final

- [ ] API Key criada no Beehiiv
- [ ] Publication ID copiado
- [ ] Ficheiro `.env.local` criado com as credenciais
- [ ] Servidor reiniciado
- [ ] Popup testado e funcionando
- [ ] Subscritor aparece no Beehiiv
- [ ] Custom field `first_name` configurado
- [ ] Pronto para produção! 🎉

---

**Qualquer dúvida, verifica os logs no terminal ou consola do browser!** 🔍


