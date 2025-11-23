# 🛍️ TechStore - Loja Online Premium

Uma loja online moderna e completa desenvolvida com HTML, CSS e JavaScript puro, apresentando design premium, sistema de autenticação e checkout integrado.

![Nível: Intermediário](https://img.shields.io/badge/N%C3%ADvel-Intermedi%C3%A1rio-yellow)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

## ✨ Características

### 🎨 Design Premium
- **Dark Mode Elegante** com gradientes vibrantes em roxo e rosa
- **Animações Suaves** e micro-interações em todos os elementos
- **Tipografia Moderna** usando Google Fonts (Inter e Outfit)
- **Sistema de Design Completo** com tokens de cores, espaçamento e componentes reutilizáveis
- **Totalmente Responsivo** para desktop, tablet e mobile

### 🛒 Funcionalidades da Loja

#### Navegação e Produtos
- ✅ Página inicial com hero section e informações da loja
- ✅ Grid de produtos com 6 itens premium
- ✅ Cartões de produto com imagem, nome, preço e descrição
- ✅ Página de detalhes do produto com informações completas
- ✅ Sistema de notificações para feedback ao usuário

#### Carrinho de Compras
- ✅ Adicionar/remover produtos do carrinho
- ✅ Ajustar quantidades com validação de estoque
- ✅ Cálculo automático de:
  - Subtotal
  - Frete (grátis acima de R$ 500)
  - Impostos (8%)
  - Total final
- ✅ Badge de quantidade no ícone do carrinho
- ✅ Persistência do carrinho durante a sessão

#### Sistema de Autenticação
- ✅ Modal de login/cadastro com tabs
- ✅ Cadastro de novos usuários
- ✅ Login com validação de credenciais
- ✅ Armazenamento seguro no LocalStorage
- ✅ Display do nome do usuário no header
- ✅ Logout com confirmação

#### Checkout e Pagamento
- ✅ Formulário completo de endereço de entrega
- ✅ Opção de endereço de cobrança separado
- ✅ Múltiplos métodos de pagamento:
  - 💳 Cartão de Crédito
  - 💰 Cartão de Débito
  - 📱 PIX
- ✅ Formatação automática de campos (CEP, cartão, validade)
- ✅ Validação de formulários
- ✅ Geração de número de pedido
- ✅ Modal de confirmação com QR Code PIX

### 📦 Produtos Incluídos

1. **Fone de Ouvido Premium** - R$ 899,99
   - Cancelamento de ruído ativo
   - Bateria de 30 horas
   - Bluetooth 5.0

2. **Smartwatch Elite** - R$ 1.299,99
   - Display AMOLED
   - Monitoramento 24/7
   - Resistente à água

3. **Teclado Mecânico RGB** - R$ 649,99
   - Switches premium
   - Iluminação RGB customizável
   - Estrutura em alumínio

4. **Mouse Wireless Pro** - R$ 349,99
   - Sensor 16.000 DPI
   - 8 botões programáveis
   - Bateria de 70 horas

5. **Speaker Bluetooth** - R$ 499,99
   - Som 360°
   - Resistência IPX7
   - Bateria de 12 horas

6. **Mochila Tech Premium** - R$ 399,99
   - Compartimento para laptop 17"
   - Porta USB
   - Material resistente à água

## 🚀 Como Usar

### Instalação

1. Clone ou baixe este repositório
2. Abra o arquivo `index.html` em seu navegador
3. Pronto! A aplicação está funcionando

```bash
# Ou use um servidor local
npx serve .
# ou
python -m http.server 8000
```

### Fluxo de Uso

1. **Explorar Produtos**
   - Clique em "Explorar Produtos" na página inicial
   - Navegue pelos produtos disponíveis
   - Clique em "Ver Detalhes" para mais informações

2. **Adicionar ao Carrinho**
   - Na página de detalhes, clique em "Adicionar ao Carrinho"
   - Veja a notificação de confirmação
   - O badge do carrinho será atualizado

3. **Gerenciar Carrinho**
   - Clique no botão "Carrinho" no header
   - Ajuste quantidades usando os botões +/-
   - Remova itens se necessário
   - Veja o resumo com frete e impostos

4. **Fazer Login**
   - Clique em "Entrar" no header
   - Crie uma conta ou faça login
   - Suas informações serão salvas

5. **Finalizar Compra**
   - No carrinho, clique em "Finalizar Pedido"
   - Preencha o endereço de entrega
   - Escolha o método de pagamento
   - Confirme o pedido
   - Receba o número de confirmação

## 📁 Estrutura do Projeto

```
loja-online/
├── index.html          # Estrutura HTML da aplicação
├── index.css           # Estilos e design system
├── script.js           # Lógica da aplicação
└── README.md          # Documentação
```

## 🎯 Funcionalidades Implementadas

### Requisitos Básicos ✅
- [x] Botão "View Products" na página inicial
- [x] Página de produtos com cards
- [x] Página de detalhes do produto
- [x] Mensagem de confirmação ao adicionar ao carrinho
- [x] Botão "See More Products"
- [x] Botão "Shopping Cart" visível em todas as páginas
- [x] Página do carrinho de compras
- [x] Cálculo do valor total
- [x] Ajuste de quantidades
- [x] Botão "Place Order"
- [x] Botão "Cancel Order"
- [x] Número de confirmação do pedido

### Recursos Adicionais ✅
- [x] Validação de estoque
- [x] Endereços de cobrança e entrega
- [x] Cálculo de frete
- [x] Cálculo de impostos
- [x] Sistema de autenticação
- [x] Múltiplos métodos de pagamento
- [x] Persistência de dados (LocalStorage)
- [x] Design responsivo
- [x] Animações e transições
- [x] Notificações em tempo real

## 💾 Armazenamento de Dados

A aplicação utiliza **LocalStorage** para persistir:
- Dados de usuários cadastrados
- Sessão do usuário atual
- (O carrinho é mantido apenas durante a sessão)

## 🎨 Design System

### Cores
- **Primary**: Roxo vibrante (HSL 260, 85%)
- **Accent**: Rosa/Magenta (HSL 340, 90%)
- **Background**: Dark mode com tons de cinza escuro
- **Success**: Verde para confirmações
- **Error**: Vermelho para alertas

### Tipografia
- **Display**: Outfit (títulos)
- **Body**: Inter (texto)
- Escala tipográfica de 0.75rem a 3rem

### Espaçamento
- Sistema baseado em múltiplos de 0.25rem
- De 0.25rem (space-1) até 5rem (space-20)

## 🔒 Segurança

⚠️ **Nota de Segurança**: Este é um projeto de demonstração. Em produção:
- Use HTTPS
- Implemente autenticação real (JWT, OAuth)
- Nunca armazene senhas em texto puro
- Use backend para processar pagamentos
- Integre com gateway de pagamento real
- Valide dados no servidor

## 🌐 Compatibilidade

- ✅ Chrome/Edge (últimas versões)
- ✅ Firefox (últimas versões)
- ✅ Safari (últimas versões)
- ✅ Dispositivos móveis (iOS/Android)

## 📱 Responsividade

- **Desktop**: Layout completo com grid de 3 colunas
- **Tablet** (< 1024px): Grid de 2 colunas, layout adaptado
- **Mobile** (< 768px): Layout de coluna única, menu compacto

## 🎓 Aprendizados

Este projeto demonstra:
- Manipulação avançada do DOM
- Gerenciamento de estado em JavaScript
- LocalStorage API
- Design responsivo com CSS Grid e Flexbox
- Animações e transições CSS
- Validação de formulários
- Formatação de dados (CEP, cartão, etc.)
- Arquitetura de SPA (Single Page Application)
- Boas práticas de UX/UI

## 🚀 Melhorias Futuras

- [ ] Integração com API de produtos real
- [ ] Backend para autenticação
- [ ] Gateway de pagamento real
- [ ] Histórico de pedidos
- [ ] Busca e filtros de produtos
- [ ] Avaliações e comentários
- [ ] Lista de desejos
- [ ] Comparação de produtos
- [ ] Cupons de desconto
- [ ] Rastreamento de pedidos

## 📄 Licença

Este projeto é livre para uso educacional e pessoal.

## 👨‍💻 Autor

Desenvolvido como projeto de estudo de desenvolvimento web intermediário.

---

**TechStore** - Tecnologia Premium ao Seu Alcance 🚀
