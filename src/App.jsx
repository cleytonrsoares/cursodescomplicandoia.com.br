import { useState, useEffect } from 'react'
import { CheckCircle, Star, Users, Clock, Smartphone, Heart, Trophy, MessageCircle, Bot, Zap, BookOpen } from 'lucide-react'
import './App.css'

// Importar imagens
import idososNetaComputador from './assets/idosos-neta-computador.jpg'
import idososFelizesComputador from './assets/idosos-felizes-computador.jpg'
import casalIdosoLaptop from './assets/casal-idoso-laptop.jpg'

function App() {
  const [selectedPlan, setSelectedPlan] = useState('completo')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    
    // FIX DEFINITIVO DO BOTÃO - Implementa após React carregar
    const timer = setTimeout(() => {
      const buttons = Array.from(document.querySelectorAll('button')).filter(btn => 
        btn.textContent.includes('Quero Começar Agora') || btn.textContent.includes('Começar Agora')
      );
      
      buttons.forEach(button => {
        console.log('✅ Botão encontrado! Aplicando fix definitivo...');
        
        // Remove event listeners existentes e adiciona novo
        const newButton = button.cloneNode(true);
        button.parentNode.replaceChild(newButton, button);
        
        newButton.addEventListener('click', function(e) {
          e.preventDefault();
          e.stopPropagation();
          console.log('🚀 Redirecionando para Kiwify...');
          window.open('https://pay.kiwify.com.br/BPJAAN2', '_blank');
        });
        
        newButton.style.cursor = 'pointer';
        console.log('✅ Fix aplicado com sucesso!');
      });
    }, 2000);

    return () => clearTimeout(timer);
  }, [])

  if (!mounted) return null;
  
  const testimonials = [
    {
      name: "Maria Silva, São Paulo",
      text: "Nunca imaginei que já usava IA! Agora converso com o ChatGPT todos os dias e impressiono meus netos!",
      rating: 5
    },
    {
      name: "João Santos, Rio de Janeiro", 
      text: "A IAsmim me ensinou de um jeito tão simples que até eu entendi! Agora sou o 'vovô tech' da família.",
      rating: 5
    }
  ]

  const plans = [
    {
      id: 'basico',
      name: 'Básico',
      price: 196,
      installments: '10x R$ 23,56',
      description: 'Ideal para começar',
      features: [
        'Acesso ao curso completo (7 módulos)',
        'Aulas via WhatsApp com a IAsmim',
        'Suporte humano por email',
        'Acesso ao curso por 12 semanas'
      ]
    },
    {
      id: 'completo',
      name: 'Completo',
      price: 294,
      installments: '10x R$ 35,33',
      originalPrice: 497,
      description: 'Mais escolhido',
      popular: true,
      features: [
        'Tudo do Plano Básico',
        'Laboratório prático com IAs',
        'ChatGPT integrado ao WhatsApp durante o curso',
        'Suporte humano por email e whatsapp',
        'Certificado digital de conclusão do curso',
        'Acesso ao curso por 52 semanas'
      ]
    },
    {
      id: 'premium',
      name: 'Premium',
      price: 490,
      installments: '10x R$ 58,89',
      originalPrice: 797,
      description: 'Experiência completa',
      features: [
        'Tudo do Plano Completo',
        'Acesso antecipado a novidades',
        'Acesso a 1 aula de monetização com IA (com mentor)',
        'Certificador digital e físico de conclusão do curso',
        'Acesso vitalício ao curso'
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 sm:space-x-3">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                <Bot className="w-5 h-5 sm:w-7 sm:h-7 text-white" />
              </div>
              <span className="text-lg sm:text-2xl font-bold text-gray-900">Descomplicando IA</span>
            </div>
            <span className="text-xs sm:text-base px-2 py-1 sm:px-4 sm:py-2 whitespace-nowrap bg-gray-100 text-gray-800 border border-gray-200 rounded-full">
              🔥 Oferta Especial
            </span>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-8 sm:py-16 px-3 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <span className="mb-6 sm:mb-8 bg-green-100 text-green-800 border border-green-200 text-sm sm:text-lg px-3 py-2 sm:px-6 sm:py-3 mx-auto block w-fit rounded-full">
            ✨ Primeiro curso de IA do Brasil 100% no WhatsApp
          </span>
          
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold text-gray-900 mb-6 sm:mb-8 leading-tight px-2">
            Chegou a hora de você{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              dominar IA!
            </span>
          </h1>
          
          <p className="text-lg sm:text-2xl md:text-3xl text-gray-600 mb-8 sm:mb-10 max-w-4xl mx-auto leading-relaxed px-2">
            O único curso que ensina Inteligência Artificial de forma simples, divertida e direto no seu WhatsApp. 
            Sem complicação, sem termos técnicos, só descobertas incríveis!
          </p>

          <div className="flex flex-col gap-4 sm:gap-6 justify-center items-center mb-12 sm:mb-16 px-2">
            <button 
              className="text-lg sm:text-xl px-8 py-6 sm:px-12 sm:py-8 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 w-full sm:w-auto text-white rounded-lg font-semibold transition-all duration-200 cursor-pointer"
              onClick={() => {
                console.log('🎯 Scrolling para seção de planos...');
                document.getElementById('planos')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              🚀 Quero Começar Agora
            </button>
            <div className="flex items-center text-gray-600 text-base sm:text-lg">
              <Users className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3" />
              <span>Não perca tempo - faça como dezenas de pessoas: inscreva-se!</span>
            </div>
          </div>

          {/* Video Placeholder */}
          <div className="bg-gray-900 rounded-2xl sm:rounded-3xl aspect-video max-w-4xl mx-auto flex items-center justify-center mb-8 sm:mb-12">
            <div className="text-center text-white px-4">
              <div className="w-16 h-16 sm:w-24 sm:h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <div className="w-0 h-0 border-l-8 sm:border-l-10 border-l-white border-y-6 sm:border-y-8 border-y-transparent ml-1"></div>
              </div>
              <p className="text-lg sm:text-xl">Vídeo: Conheça a IAsmim e o Método Revolucionário</p>
              <p className="text-sm sm:text-base text-gray-300 mt-2 sm:mt-3">3 minutos que vão mudar sua visão sobre tecnologia</p>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-8 sm:py-12 bg-white">
        <div className="max-w-6xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-8 px-2">
              Você já se sentiu assim?
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            {/* Medo da Tecnologia */}
            <div className="border border-red-200 bg-red-50 p-4 sm:p-6 rounded-lg">
              <div className="pt-4 sm:pt-6">
                <div className="flex flex-col items-center gap-4 sm:gap-6">
                  <h3 className="text-xl sm:text-2xl font-semibold text-red-800 text-center">
                    Medo da Tecnologia
                  </h3>
                  <div className="w-full">
                    <img 
                      src="/images/idoso-medo-tecnologia.jpg" 
                      alt="Pessoa idosa confusa olhando para computador"
                      className="w-full h-40 sm:h-48 object-cover rounded-xl"
                    />
                  </div>
                  <p className="text-gray-600 text-base sm:text-lg text-center">
                    "IA é muito complicado para mim. Isso é coisa de jovem."
                  </p>
                </div>
              </div>
            </div>
            
            {/* Sentimento de Exclusão */}
            <div className="border border-orange-200 bg-orange-50 p-4 sm:p-6 rounded-lg">
              <div className="pt-4 sm:pt-6">
                <div className="flex flex-col items-center gap-4 sm:gap-6">
                  <h3 className="text-xl sm:text-2xl font-semibold text-orange-800 text-center">
                    Sentimento de Exclusão
                  </h3>
                  <div className="w-full">
                    <img 
                      src="/images/idoso-sozinho-banco.jpg" 
                      alt="Pessoa idosa sozinha em banco de praça"
                      className="w-full h-40 sm:h-48 object-cover rounded-xl"
                    />
                  </div>
                  <p className="text-gray-600 text-base sm:text-lg text-center">
                    "Todo mundo fala de ChatGPT, mas eu não entendo nada."
                  </p>
                </div>
              </div>
            </div>
            
            {/* Não Sabe Por Onde Começar */}
            <div className="border border-yellow-200 bg-yellow-50 p-4 sm:p-6 rounded-lg">
              <div className="pt-4 sm:pt-6">
                <div className="flex flex-col items-center gap-4 sm:gap-6">
                  <h3 className="text-xl sm:text-2xl font-semibold text-yellow-800 text-center">
                    Não Sabe Por Onde Começar
                  </h3>
                  <div className="w-full">
                    <img 
                      src="/images/idosa-confusa.jpg" 
                      alt="Pessoa idosa confusa e em dúvida"
                      className="w-full h-40 sm:h-48 object-cover rounded-xl"
                    />
                  </div>
                  <p className="text-gray-600 text-base sm:text-lg text-center">
                    "Quero aprender, mas os cursos são muito técnicos."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-8 sm:py-12 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-6xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-8 px-2">
              A Solução que Você Estava Esperando!
            </h2>
            <p className="text-lg sm:text-2xl opacity-90 max-w-4xl mx-auto px-2">
              Conheça a IAsmim, sua assistente virtual que vai te ensinar IA de forma simples e divertida!
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div>
              <div className="bg-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 backdrop-blur-sm">
                <div className="flex justify-center mb-4 sm:mb-6">
                  <img 
                    src="/images/iasmim.png" 
                    alt="IAsmim - Sua assistente virtual especializada em IA"
                    className="w-full sm:w-32 sm:h-32 md:w-40 md:h-40 object-contain max-w-[85%] mx-auto sm:max-w-none"
                  />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-center mb-4 sm:mb-6">Conheça a IAsmim</h3>
                <p className="text-lg sm:text-xl opacity-90 text-center">
                  "Oi! Eu sou a IAsmim, sua assistente virtual especializada em ensinar IA de forma simples! 
                  Vou te mostrar que você já usa inteligência artificial há anos sem saber, e te ensinar muito mais!"
                </p>
              </div>
            </div>
            
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-start space-x-4 sm:space-x-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1 sm:mt-2">
                  <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <h4 className="text-lg sm:text-2xl font-semibold mb-2 sm:mb-3">100% no WhatsApp</h4>
                  <p className="opacity-90 text-base sm:text-lg">Aprenda onde você já se sente confortável. Sem apps complicados!</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 sm:space-x-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1 sm:mt-2">
                  <Heart className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <h4 className="text-lg sm:text-2xl font-semibold mb-2 sm:mb-3">Linguagem Simples</h4>
                  <p className="opacity-90 text-base sm:text-lg">Sem termos técnicos. Como uma conversa com uma amiga querida.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 sm:space-x-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1 sm:mt-2">
                  <Zap className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <h4 className="text-lg sm:text-2xl font-semibold mb-2 sm:mb-3">Método "Descoberta"</h4>
                  <p className="opacity-90 text-lg">Não é estudo chato. São descobertas incríveis sobre o que você já faz!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Section - Pessoas felizes com tecnologia */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src={idososNetaComputador} 
                alt="Avós aprendendo tecnologia com neta" 
                className="rounded-2xl shadow-lg w-full"
              />
            </div>
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Aprender Nunca Foi Tão Divertido!
              </h3>
              <p className="text-xl text-gray-600 mb-6">
                Junte-se a milhares de pessoas que descobriram que tecnologia pode ser simples, 
                divertida e uma ótima forma de se conectar com a família!
              </p>
              <p className="text-xl text-gray-600 mb-6">
                Nossos alunos não apenas aprendem IA - eles se tornam os "experts" da família 
                e ensinam os próprios netos!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Course Modules */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              O que Você Vai Descobrir
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto">
              7 módulos repletos de descobertas que vão transformar sua relação com a tecnologia
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Módulo 1 */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 border border-blue-200">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-6">
                <Bot className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Módulo 1: Descobrindo a IA que Conversa</h3>
              <p className="text-gray-600 mb-6">
                Descubra que você já usa IA há anos! Aprenda a conversar com ChatGPT como se fosse um amigo.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  Descomplicando IA Generativa
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  A Revolução dos Últimos 2 Anos
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  Minha Primeira Conversa com IA
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  IA que Cria Textos para Mim
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  Minha Primeira Conversa por Voz
                </li>
              </ul>
            </div>

            {/* Módulo 2 */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 border border-purple-200">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mb-6">
                <Smartphone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Módulo 2: IA Generativa no Meu Dia a Dia</h3>
              <p className="text-gray-600 mb-6">
                Transforme sua rotina! Use IA para organizar sua vida e se comunicar melhor com a família.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  IA para Organizar Minha Vida
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  IA para Comunicação Familiar
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  IA como Minha Assistente Pessoal
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  IA para Aprender Coisas Novas
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  IA para Resolver Problemas
                </li>
              </ul>
            </div>

            {/* Módulo 3 */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 border border-green-200">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mb-6">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Módulo 3: IA que "Vê" e Cria Imagens</h3>
              <p className="text-gray-600 mb-6">
                Descubra como a IA pode "ver" suas fotos e até criar imagens incríveis para você!
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  IA que "Vê" Minhas Fotos
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  IA para Melhorar Fotos de Família
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  IA que Cria Imagens Incríveis
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  IA para Identificar Objetos
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  Meus Primeiros Projetos Visuais
                </li>
              </ul>
            </div>

            {/* Módulo 4 */}
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-8 border border-orange-200">
              <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mb-6">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Módulo 4: Laboratório ChatGPT Avançado</h3>
              <p className="text-gray-600 mb-6">
                Torne-se um expert! Domine técnicas avançadas e impressione toda a família.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  Comandos Especiais (Prompts)
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  ChatGPT como Suporte Técnico
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  Tempestade de Ideias com IA
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  IA para Projetos Pessoais
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  Tornando-se um Expert
                </li>
              </ul>
            </div>

            {/* Módulos Extras */}
            <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-2xl p-8 border border-indigo-200 md:col-span-2 lg:col-span-1">
              <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center mb-6">
                <Trophy className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Módulos 5-7: Planos Completo e Premium</h3>
              <p className="text-gray-600 mb-6">
                Acesso exclusivo a outras IAs, segurança digital e o futuro da tecnologia.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-indigo-500 mr-3" />
                  Laboratório com Outras IAs
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-indigo-500 mr-3" />
                  Segurança e Privacidade
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-indigo-500 mr-3" />
                  O Futuro da IA
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              O que Nossos Alunos Estão Dizendo
            </h2>
            <p className="text-2xl text-gray-600">
              Histórias reais de pessoas que transformaram sua relação com a tecnologia
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <div className="flex items-center mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-xl text-gray-600 mb-6 italic">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-lg">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-gray-600">Aluno do Curso</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="planos" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              Escolha Seu Plano
            </h2>
            <p className="text-2xl text-gray-600 mb-8">
              Comece sua jornada na IA hoje mesmo!
            </p>
            <div className="bg-green-100 border border-green-200 rounded-2xl p-6 max-w-2xl mx-auto">
              <p className="text-green-800 text-xl font-semibold">
                🎉 Oferta de Lançamento: Até 40% de desconto!
              </p>
              <p className="text-green-700 mt-2">
                Preços promocionais válidos apenas durante o período de lançamento
              </p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan) => (
              <div 
                key={plan.id} 
                className={`rounded-2xl p-8 border-2 transition-all duration-300 ${
                  plan.popular 
                    ? 'border-blue-500 bg-blue-50 transform scale-105' 
                    : 'border-gray-200 bg-white hover:border-blue-300'
                }`}
              >
                {plan.popular && (
                  <div className="bg-blue-500 text-white px-4 py-2 rounded-full text-center font-semibold mb-6">
                    🏆 Mais Escolhido
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-4">{plan.description}</p>
                  
                  {plan.originalPrice && (
                    <p className="text-lg text-gray-500 line-through mb-2">
                      De R$ {plan.originalPrice}
                    </p>
                  )}
                  
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-gray-900">R$ {plan.price}</span>
                    <span className="text-gray-600"> à vista</span>
                  </div>
                  
                  <p className="text-xl text-blue-600 font-semibold">
                    ou {plan.installments}
                  </p>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button 
                  className={`w-full py-4 px-6 rounded-xl font-semibold text-lg transition-all duration-200 ${
                    plan.popular
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
                      : 'bg-gray-900 text-white hover:bg-gray-800'
                  }`}
                  onClick={() => {
                    console.log(`🚀 Redirecionando para Kiwify - Plano ${plan.name}...`);
                    window.open('https://pay.kiwify.com.br/BPJAAN2', '_blank');
                  }}
                >
                  Começar Agora
                </button>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <div className="bg-gray-100 rounded-2xl p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                💳 Garantia de 7 Dias
              </h3>
              <p className="text-gray-600 text-lg">
                Experimente sem risco! Se não gostar, devolvemos 100% do seu dinheiro em até 7 dias. 
                Sem perguntas, sem complicação.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              Perguntas Frequentes
            </h2>
            <p className="text-2xl text-gray-600">
              Tire suas dúvidas sobre o curso
            </p>
          </div>
          
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Preciso ter conhecimento técnico?
              </h3>
              <p className="text-xl text-gray-600">
                Não! O curso foi criado especialmente para pessoas sem conhecimento técnico. 
                A IAsmim ensina tudo de forma simples e divertida, como uma conversa com uma amiga.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Como funciona o curso no WhatsApp?
              </h3>
              <p className="text-xl text-gray-600">
                Você receberá as aulas diretamente no seu WhatsApp, como mensagens da IAsmim. 
                É como conversar com uma assistente que te ensina coisas incríveis!
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                E se eu não conseguir acompanhar?
              </h3>
              <p className="text-xl text-gray-600">
                Você aprende no seu ritmo! As aulas ficam salvas no WhatsApp e você pode rever quantas vezes quiser. 
                Além disso, tem suporte humano sempre disponível.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Posso usar o ChatGPT direto no WhatsApp?
              </h3>
              <p className="text-xl text-gray-600">
                Sim! No plano Completo e Premium, você terá acesso ao ChatGPT integrado diretamente no WhatsApp, 
                sem precisar sair do app.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Tem garantia?
              </h3>
              <p className="text-xl text-gray-600">
                Sim! 7 dias de garantia total. Se não gostar, devolvemos 100% do seu dinheiro, sem perguntas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-8">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                <Bot className="w-7 h-7 text-white" />
              </div>
              <span className="text-2xl font-bold">Descomplicando IA</span>
            </div>
            
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Transformando a relação das pessoas com a tecnologia, uma conversa de cada vez.
            </p>
            
            <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400 text-lg">
              <p>&copy; 2024 Descomplicando IA. Todos os direitos reservados.</p>
              <p className="text-sm mt-2">CLEYTON RIBEIRO SOARES SERVIÇOS ADMINISTRATIVOS - CNPJ: 09.640.600/0001-99</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

