import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
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
            <Badge variant="secondary" className="text-xs sm:text-base px-2 py-1 sm:px-4 sm:py-2 whitespace-nowrap">
              🔥 Oferta Especial
            </Badge>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-8 sm:py-16 px-3 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <Badge className="mb-6 sm:mb-8 bg-green-100 text-green-800 border-green-200 text-sm sm:text-lg px-3 py-2 sm:px-6 sm:py-3 mx-auto block w-fit">
            ✨ Primeiro curso de IA do Brasil 100% no WhatsApp
          </Badge>
          
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
            <Button 
              size="lg" 
              className="text-lg sm:text-xl px-8 py-6 sm:px-12 sm:py-8 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 w-full sm:w-auto"
              onClick={() => {
                console.log('🎯 Scrolling para seção de planos...');
                document.getElementById('planos')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              🚀 Quero Começar Agora
            </Button>
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
            <Card className="border-red-200 bg-red-50 p-4 sm:p-6">
              <CardContent className="pt-4 sm:pt-6">
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
              </CardContent>
            </Card>
            
            {/* Sentimento de Exclusão */}
            <Card className="border-orange-200 bg-orange-50 p-4 sm:p-6">
              <CardContent className="pt-4 sm:pt-6">
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
              </CardContent>
            </Card>
            
            {/* Não Sabe Por Onde Começar */}
            <Card className="border-yellow-200 bg-yellow-50 p-4 sm:p-6">
              <CardContent className="pt-4 sm:pt-6">
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
              </CardContent>
            </Card>
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
              7 módulos incríveis que vão transformar sua relação com a tecnologia
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                module: "Módulo 1",
                title: "Descobrindo que Já Sou Tech!",
                description: "Revelação: você já usa IA no Google, WhatsApp, GPS...",
                icon: "🎯"
              },
              {
                module: "Módulo 2", 
                title: "Laboratório de IA",
                description: "Experimente ChatGPT, Claude e Manus na prática",
                icon: "🧪"
              },
              {
                module: "Módulo 3",
                title: "A Linguagem Secreta",
                description: "Domine prompts para conversar com qualquer IA",
                icon: "🗣️"
              },
              {
                module: "Módulo 4",
                title: "IA para a Família",
                description: "Impressione os netos e ajude com lições de casa",
                icon: "👨‍👩‍👧‍👦"
              },
              {
                module: "Módulo 5",
                title: "Segurança Digital",
                description: "Use IA com segurança e evite golpes online",
                icon: "🛡️"
              },
              {
                module: "Módulo 6",
                title: "IA no Dia a Dia",
                description: "Integre IA na sua rotina: saúde, finanças, hobbies",
                icon: "📱"
              },
              {
                module: "Módulo 7",
                title: "Futuro e Atualizações",
                description: "Mantenha-se sempre atualizado com as novidades",
                icon: "🚀"
              }
            ].map((item, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow p-2">
                <CardHeader className="text-center">
                  <div className="text-5xl mb-4">{item.icon}</div>
                  <Badge variant="outline" className="w-fit mb-3 text-base px-3 py-1">{item.module}</Badge>
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-lg text-center">{item.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              O que Nossos Alunos Dizem
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-10">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-8">
                <CardContent className="pt-8">
                  <div className="flex mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6 italic text-lg">"{testimonial.text}"</p>
                  <p className="font-semibold text-gray-900 text-lg">{testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <img 
              src={idososFelizesComputador} 
              alt="Pessoas felizes aprendendo tecnologia" 
              className="rounded-2xl shadow-lg mx-auto max-w-2xl w-full"
            />
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="planos" className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              Escolha Seu Plano
            </h2>
            <p className="text-2xl text-gray-600">
              Oferta especial de lançamento - Por tempo limitado!
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-10">
            {plans.map((plan) => (
              <Card 
                key={plan.id} 
                className={`relative p-8 ${plan.popular ? 'border-2 border-purple-600 shadow-2xl scale-105' : ''}`}
              >
                {plan.popular && (
                  <Badge className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-purple-600 text-lg px-4 py-2">
                    Mais Escolhido
                  </Badge>
                )}
                
                <CardHeader className="text-center">
                  <CardTitle className="text-3xl">{plan.name}</CardTitle>
                  <CardDescription className="text-xl">{plan.description}</CardDescription>
                  <div className="mt-6">
                    {plan.originalPrice && (
                      <span className="text-xl text-gray-400 line-through">R$ {plan.originalPrice}</span>
                    )}
                    <div className="text-5xl font-bold text-gray-900">
                      R$ {plan.price}
                    </div>
                    <p className="text-lg text-gray-600">{plan.installments}</p>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="w-6 h-6 text-green-600 mr-4 mt-1 flex-shrink-0" />
                        <span className="text-gray-700 text-lg">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    className={`w-full text-lg py-6 ${plan.popular ? 'bg-purple-600 hover:bg-purple-700' : ''}`}
                    size="lg"
                    onClick={() => {
                      const kiwifyLinks = {
                        'basico': 'https://pay.kiwify.com.br/BPJAAN2',
                        'completo': 'https://pay.kiwify.com.br/VefhRUM', 
                        'premium': 'https://pay.kiwify.com.br/88iRBHZ'
                      };
                      console.log(`🚀 Redirecionando para checkout ${plan.name}...`);
                      window.open(kiwifyLinks[plan.id], '_blank');
                    }}
                  >
                    Escolher {plan.name}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              Perguntas Frequentes
            </h2>
          </div>
          
          <div className="space-y-8">
            {[
              {
                question: "Preciso ter conhecimento prévio em tecnologia?",
                answer: "Não! O curso foi criado especialmente para pessoas que acham tecnologia complicada. Se você usa WhatsApp, já tem tudo que precisa para começar."
              },
              {
                question: "Como funciona o curso no WhatsApp?",
                answer: "Você receberá as aulas diretamente no seu WhatsApp, como mensagens da IAsmim. É como conversar com uma assistente que te ensina coisas incríveis!"
              },
              {
                question: "E se eu não conseguir acompanhar?",
                answer: "Você aprende no seu ritmo! As aulas ficam salvas no WhatsApp e você pode rever quantas vezes quiser. Além disso, tem suporte humano sempre disponível."
              },
              {
                question: "Posso usar o ChatGPT direto no WhatsApp?",
                answer: "Sim! No plano Completo e Premium, você terá acesso ao ChatGPT integrado diretamente no WhatsApp, sem precisar sair do app."
              },
              {
                question: "Tem garantia?",
                answer: "Sim! 7 dias de garantia total. Se não gostar, devolvemos 100% do seu dinheiro, sem perguntas."
              }
            ].map((faq, index) => (
              <Card key={index} className="p-8">
                <CardContent className="pt-8">
                  <h3 className="text-2xl font-semibold mb-4">{faq.question}</h3>
                  <p className="text-gray-600 text-lg">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 sm:py-24 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-3 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8 px-2">
            Pronto para Descobrir que Você Já é Tech?
          </h2>
          <p className="text-lg sm:text-2xl mb-8 sm:mb-12 opacity-90 px-2">
            Não perca tempo - faça como dezenas de pessoas: inscreva-se!
          </p>
          
          <div className="bg-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-10 backdrop-blur-sm mb-8 sm:mb-12 mx-2">
            <div className="grid grid-cols-3 gap-4 sm:gap-8 text-center">
              <div>
                <div className="text-3xl sm:text-4xl font-bold">7</div>
                <div className="text-sm sm:text-lg opacity-90">Módulos Completos</div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-bold">30+</div>
                <div className="text-sm sm:text-lg opacity-90">Aulas Práticas</div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-bold">100%</div>
                <div className="text-sm sm:text-lg opacity-90">No WhatsApp</div>
              </div>
            </div>
          </div>
          
          <Button 
            size="lg" 
            className="text-lg sm:text-2xl px-8 py-6 sm:px-16 sm:py-8 bg-white text-purple-600 hover:bg-gray-100 mb-4 sm:mb-6 w-full sm:w-auto"
            onClick={() => {
              console.log('🎯 Scrolling para seção de planos...');
              document.getElementById('planos')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            🚀 Começar Minha Jornada Agora
          </Button>
          
          <p className="text-sm sm:text-lg opacity-75 px-2">
            Oferta especial de lançamento • Garantia de 7 dias • Certificado incluso
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-10">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                  <Bot className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold">Descomplicando IA</span>
              </div>
              <p className="text-gray-400 text-lg">
                O primeiro curso de IA do Brasil que funciona 100% no WhatsApp.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-6 text-xl">Curso</h4>
              <ul className="space-y-3 text-gray-400 text-lg">
                <li>Como Funciona</li>
                <li>Módulos</li>
                <li>Sistema IA Masters</li>
                <li>Certificado</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-6 text-xl">Suporte</h4>
              <ul className="space-y-3 text-gray-400 text-lg">
                <li>FAQ</li>
                <li>Contato</li>
                <li>Garantia</li>
                <li>Política de Privacidade</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-6 text-xl">Contato</h4>
              <ul className="space-y-3 text-gray-400 text-lg">
                <li>WhatsApp: (11) 99999-9999</li>
                <li>Email: contato@descomplicandoia.com.br</li>
                <li>Horário: 8h às 18h</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400 text-lg">
            <p>&copy; 2024 Descomplicando IA. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
