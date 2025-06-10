// Script para adicionar link da Kiwify ao botão da landing page
// Este script será executado após o carregamento da página

(function() {
    'use strict';
    
    // Função para adicionar o link ao botão
    function addKiwifyLink() {
        // Procura pelo botão com o texto "Quero Começar Agora"
        const buttons = document.querySelectorAll('button');
        
        for (let button of buttons) {
            if (button.textContent.includes('🚀 Quero Começar Agora')) {
                // Verifica se o botão já não está dentro de um link
                if (!button.closest('a')) {
                    // Cria um elemento link
                    const link = document.createElement('a');
                    link.href = 'https://pay.kiwify.com.br/BPJAAN2';
                    link.target = '_blank';
                    link.rel = 'noopener noreferrer';
                    link.style.textDecoration = 'none';
                    
                    // Move o botão para dentro do link
                    const parent = button.parentNode;
                    parent.insertBefore(link, button );
                    link.appendChild(button);
                    
                    console.log('✅ Link da Kiwify adicionado ao botão com sucesso!');
                    return true;
                }
            }
        }
        return false;
    }
    
    // Tenta adicionar o link quando a página carregar
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function() {
            setTimeout(addKiwifyLink, 1000); // Aguarda 1 segundo para garantir que o React renderizou
        });
    } else {
        setTimeout(addKiwifyLink, 1000);
    }
    
    // Também tenta novamente após 3 segundos, caso o React demore para renderizar
    setTimeout(addKiwifyLink, 3000);
    
})();
