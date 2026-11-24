# CLIMA PRO — site institucional

Landing page responsiva construída com React, TypeScript, Vite e Tailwind CSS. As imagens enviadas foram incluídas em `public/images` e convertidas para WebP.

## Requisitos
- Node.js 18 ou superior
- npm

## Instalação
1. Extraia o ZIP.
2. Abra a pasta `clima-pro-site` no VS Code.
3. No terminal, execute:

```bash
npm install
npm run dev
```

4. Abra o endereço local exibido pelo Vite (normalmente `http://localhost:5173`).

## Personalização obrigatória antes de publicar
Abra `src/config.ts` e configure:

```ts
export const siteConfig = {
  brand: "CLIMA PRO",
  city: "Sua cidade e região",
  whatsapp: "5511999999999",
  instagram: "",
  email: ""
};
```

- `whatsapp`: número completo com código do país + DDD + número, somente dígitos. Exemplo ilustrativo: `5511999999999`. Substitua pelo número comercial correto.
- `city`: região real atendida.
- `instagram` e `email`: opcionais.

Enquanto o WhatsApp estiver vazio, os botões direcionam para a seção de contato, sem inventar um telefone.

## Gerar versão de produção

```bash
npm run build
npm run preview
```

A pasta `dist/` será criada. Ela pode ser publicada em Vercel, Netlify ou outro serviço compatível com sites estáticos.

## Conteúdo e credibilidade
- Não foram inseridos depoimentos, avaliações, garantias, certificações ou números de atendimento fictícios.
- A faixa de fabricantes é apenas uma referência visual; confirme compatibilidade e serviços prestados antes de publicar.
- O comparativo mostra a serpentina suja e explica o estado anterior à higienização. Ainda não foi fornecida uma foto real do mesmo equipamento após a limpeza; por isso não foi fabricado um “depois”.
- Revise textos, região atendida, marcas e informações comerciais antes de colocar o site no ar.
