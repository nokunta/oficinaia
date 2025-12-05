# 📸 Como Adicionar a Imagem do Banner

## Passo 1: Guardar a Imagem

Guarda a imagem que enviaste com o nome: **`hero-banner.jpg`**

## Passo 2: Colocar na Pasta Public

Coloca a imagem na pasta `public` do projeto:

```
oficinaia/
└── public/
    └── hero-banner.jpg  ← Coloca aqui
```

## Passo 3: Verificar

1. Abre o browser em: http://localhost:3001
2. A imagem deve aparecer automaticamente na hero section!

---

## Alternativa: Usar URL Externa

Se preferires usar um URL externo, edita o ficheiro `app/page.tsx`:

Linha 96, troca:
```tsx
src="/hero-banner.jpg"
```

Por:
```tsx
src="https://seu-url-aqui.com/imagem.jpg"
```

---

## 🎨 O Que Foi Alterado

- ✅ Banner com aspect ratio automático
- ✅ Bordas arredondadas com glow verde/cyan
- ✅ Elementos flutuantes animados (raio e lâmpada)
- ✅ Efeito de sombra e blur de fundo
- ✅ Gradient overlay subtil
- ✅ Totalmente responsivo

---

## 📐 Formato Recomendado da Imagem

- **Formato:** JPG, PNG ou WEBP
- **Proporção:** 16:9 ou similar (landscape)
- **Resolução:** Mínimo 1200px de largura
- **Tamanho:** Menos de 500KB (otimizado)

---

## 🔧 Se a Imagem Não Aparecer

1. Verifica se o nome do ficheiro está correto: `hero-banner.jpg`
2. Verifica se está na pasta `public/`
3. Recarrega a página (Ctrl+R ou Cmd+R)
4. Verifica a consola do browser (F12) para erros











