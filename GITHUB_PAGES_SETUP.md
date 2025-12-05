# GitHub Pages Setup

Este projeto está configurado para fazer deploy no GitHub Pages usando GitHub Actions.

## Configuração Inicial

1. **Ativa GitHub Pages no repositório:**
   - Vai para Settings → Pages no teu repositório GitHub
   - Em "Source", seleciona "GitHub Actions" (não "Deploy from a branch")
   - Salva as alterações

2. **O workflow irá fazer deploy automaticamente:**
   - Sempre que fizeres push para a branch `main`, o site será construído e publicado automaticamente
   - O workflow está em `.github/workflows/deploy.yml`

## Build Local (para testar)

```bash
npm run build
```

Os arquivos estáticos serão gerados na pasta `out/`. Podes testar localmente com:

```bash
npx serve out
```

## Notas Importantes

- O Next.js está configurado para exportação estática (`output: 'export'`)
- As imagens estão configuradas como `unoptimized: true` para compatibilidade com GitHub Pages
- O site será publicado em: `https://[seu-username].github.io/[nome-do-repo]/`

## Troubleshooting

Se o site não aparecer:
1. Verifica se o GitHub Actions workflow foi executado com sucesso
2. Verifica se o GitHub Pages está configurado para usar "GitHub Actions" como source
3. Aguarda alguns minutos após o push - o deploy pode demorar 1-2 minutos

