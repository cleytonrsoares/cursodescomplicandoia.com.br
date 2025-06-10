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

          {/* Rest of the component remains the same... */}
          {/* Testimonials, Features, FAQ, etc. */}
        </div>
      </section>
    </div>
  )
}

export default App

