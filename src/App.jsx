import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Users, MessageCircle, Brain, Smartphone, Heart, Star, ArrowRight, Clock, Shield, Award } from 'lucide-react'

function App() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    
    // FIX DEFINITIVO DO BOTÃO - Implementa após React carregar
    const timer = setTimeout(() => {
      const button = Array.from(document.querySelectorAll('button')).find(btn => 
        btn.textContent.includes('Quero Começar Agora')
      );
      
      if (button) {
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
      }
    }, 2000);

    return () => clearTimeout(timer);
  }, [])

  if (!mounted) return null

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-800">Descomplicando IA</span>
          </div>
          <Badge variant="secondary" className="bg-orange-100 text-orange-800 border-orange-200">
            🔥 Oferta Especial
          </Badge>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 sm:py-20 px-4">
        <div className="container mx-auto text-center">
          <Badge className="mb-6 bg-green-100 text-green-800 border-green-200 text-sm sm:text-base px-3 py-1">
            ✨ Primeiro curso de IA do Brasil 100% no WhatsApp
          </Badge>
          
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-gray-800 mb-6 sm:mb-8 leading-tight">
            Descubra que Você{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Já é Tech!
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
                console.log('🚀 Redirecionando para Kiwify via onClick...');
                window.open('https://pay.kiwify.com.br/BPJAAN2', '_blank');
              }}
            >
              🚀 Quero Começar Agora
            </Button>
            <div className="flex items-center text-gray-600 text-base sm:text-lg">
              <Users className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3" />
              <span>Mais de 1.000 pessoas já se inscreveram</span>
            </div>
          </div>

          {/* Video Preview */}
          <div className="max-w-4xl mx-auto mb-16 sm:mb-20">
            <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-1">
              <div className="bg-white rounded-xl p-8 text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Veja como funciona!</h3>
                <p className="text-gray-600">Aulas direto no seu WhatsApp, quando você quiser</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Por que escolher nosso curso?
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Desenvolvido especialmente para pessoas 60+ que querem descobrir o mundo da tecnologia
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <Card className="border-2 hover:border-blue-200 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Smartphone className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle className="text-xl">100% no WhatsApp</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Aprenda usando o app que você já conhece. Sem precisar baixar nada novo!
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-purple-200 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Heart className="w-6 h-6 text-purple-600" />
                </div>
                <CardTitle className="text-xl">Linguagem Simples</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Sem termos técnicos complicados. Explicamos tudo de forma clara e divertida.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-green-200 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6 text-green-600" />
                </div>
                <CardTitle className="text-xl">No Seu Ritmo</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Estude quando quiser, no horário que for melhor para você. Sem pressa!
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-orange-200 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-orange-600" />
                </div>
                <CardTitle className="text-xl">Suporte Completo</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Tire suas dúvidas diretamente com nossa equipe. Estamos aqui para ajudar!
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-pink-200 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-4">
                  <Award className="w-6 h-6 text-pink-600" />
                </div>
                <CardTitle className="text-xl">Certificado</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Receba seu certificado de conclusão e mostre para família e amigos!
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-indigo-200 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                  <Star className="w-6 h-6 text-indigo-600" />
                </div>
                <CardTitle className="text-xl">Conteúdo Exclusivo</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Material desenvolvido especialmente para pessoas 60+ por especialistas.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              O que nossos alunos dizem
            </h2>
            <p className="text-lg sm:text-xl text-gray-600">
              Histórias reais de pessoas que descobriram a tecnologia
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <Card className="bg-white shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                    M
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold">Maria, 67 anos</h4>
                    <div className="flex text-yellow-400">
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current" />
                    </div>
                  </div>
                </div>
                <p className="text-gray-600">
                  "Nunca pensei que conseguiria entender IA! Agora uso o ChatGPT para receitas e até para conversar. Meus netos ficaram impressionados!"
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                    J
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold">João, 72 anos</h4>
                    <div className="flex text-yellow-400">
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current" />
                    </div>
                  </div>
                </div>
                <p className="text-gray-600">
                  "O curso é muito fácil de seguir. Aprendi no meu tempo e agora ajudo minha esposa com as compras online usando IA!"
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white font-bold">
                    A
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold">Ana, 65 anos</h4>
                    <div className="flex text-yellow-400">
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current" />
                    </div>
                  </div>
                </div>
                <p className="text-gray-600">
                  "Fantástico! Agora uso IA para planejar viagens e até para escrever mensagens bonitas para a família. Recomendo!"
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Pronto para descobrir que você já é tech?
          </h2>
          <p className="text-lg sm:text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Junte-se a mais de 1.000 pessoas que já descobriram como a IA pode facilitar o dia a dia
          </p>
          <Button 
            size="lg" 
            className="text-lg sm:text-xl px-8 py-6 sm:px-12 sm:py-8 bg-white text-blue-600 hover:bg-gray-100 w-full sm:w-auto"
            onClick={() => {
              console.log('🚀 Redirecionando para Kiwify via CTA...');
              window.open('https://pay.kiwify.com.br/BPJAAN2', '_blank');
            }}
          >
            🚀 Começar Agora - R$ 196,00
          </Button>
          <p className="text-blue-100 mt-4">
            Ou em até 10x de R$ 23,56
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
              <Brain className="w-4 h-4 text-white" />
            </div>
            <span className="text-lg font-bold">Descomplicando IA</span>
          </div>
          <p className="text-gray-400 mb-4">
            Transformando vidas através da tecnologia
          </p>
          <p className="text-sm text-gray-500">
            © 2024 Descomplicando IA. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App

