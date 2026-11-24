import type { FaqItem, NavItem, ServiceItem } from "../types";

export const NAV_LINKS: NavItem[] = [
  { label: "Serviços", href: "#servicos" },
  { label: "Antes e durante", href: "#higienizacao" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Dúvidas", href: "#faq" }
];

export const BRANDS: string[] = [
  "DAIKIN",
  "FUJITSU",
  "LG",
  "SAMSUNG",
  "GREE",
  "HITACHI",
  "ELGIN"
];

export const SERVICE_OPTIONS: string[] = [
  "Instalação",
  "Higienização",
  "Manutenção preventiva",
  "Manutenção corretiva"
];

export const SERVICES: ServiceItem[] = [
  {
    id: "instalacao",
    title: "Instalação de ar-condicionado",
    text: "Instalação de aparelhos split com atenção ao posicionamento, acabamento e funcionamento.",
    image: "instalacao-condensadora.webp",
    icon: "snow"
  },
  {
    id: "higienizacao",
    title: "Higienização completa",
    text: "Limpeza técnica dos componentes do aparelho para remover poeira e resíduos acumulados.",
    image: "higienizacao.webp",
    icon: "shield"
  },
  {
    id: "preventiva",
    title: "Manutenção preventiva",
    text: "Verificações periódicas para acompanhar o desempenho e identificar necessidades de manutenção.",
    image: "manutencao-tecnica.webp",
    icon: "clock"
  },
  {
    id: "corretiva",
    title: "Manutenção corretiva",
    text: "Avaliação técnica para identificar falhas e orientar a solução adequada para o equipamento.",
    image: "instalacao-detalhe.webp",
    icon: "wrench"
  }
];

export const CLEANING_POINTS: string[] = [
  "Inspeção dos componentes",
  "Limpeza adequada ao equipamento",
  "Cuidado com o ambiente durante o serviço"
];

export const HIRING_TIPS: string[] = [
  "Explicação clara sobre o serviço",
  "Ferramentas adequadas para o trabalho",
  "Cuidado com o ambiente e o equipamento",
  "Orçamento alinhado ao serviço solicitado"
];

export const OUR_COMMITMENTS: string[] = [
  "Atendimento cordial e transparente",
  "Avaliação conforme as condições do aparelho",
  "Orientação sobre os cuidados necessários",
  "Atenção aos detalhes durante a execução"
];

export const FAQS: FaqItem[] = [
  {
    question: "Quando devo higienizar meu ar-condicionado?",
    answer: "A frequência depende do uso, do ambiente e das orientações do fabricante. Uma avaliação técnica ajuda a definir a periodicidade adequada."
  },
  {
    question: "A instalação pode ser feita em qualquer ambiente?",
    answer: "Cada instalação precisa considerar o local, a capacidade do aparelho, a infraestrutura elétrica e as recomendações do fabricante."
  },
  {
    question: "Quanto tempo demora a manutenção?",
    answer: "O tempo varia conforme o tipo de serviço, o modelo do equipamento e as condições encontradas na avaliação."
  },
  {
    question: "Como solicito um orçamento?",
    answer: "Entre em contato pelo WhatsApp e informe o serviço desejado, a cidade e, se possível, o modelo do aparelho. A equipe poderá orientar os próximos passos."
  }
];
