// VerdeIA - JavaScript Puro
// Autor: Ka1ux
// Projeto acadêmico - WCAG 2.1 Nível AA

'use strict';

// Elementos DOM
const menuToggle = document.getElementById('menuToggle');
const navMobile = document.getElementById('navMobile');
const navLinks = document.querySelectorAll('.nav-link, .nav-link-mobile');
const pages = document.querySelectorAll('.page');
const contactForm = document.getElementById('contactForm');
const registrationForm = document.getElementById('registrationForm');
const currentYear = document.getElementById('currentYear');

// Define o ano atual no rodapé
if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}

// Toggle do menu mobile
if (menuToggle && navMobile) {
    menuToggle.addEventListener('click', function() {
        const isOpen = navMobile.classList.toggle('active');
        menuToggle.setAttribute('aria-expanded', isOpen);
    });
}

// Navegação entre páginas (SPA)
navLinks.forEach(function(link) {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetPage = this.dataset.page;
        
        // Remove active de todas as páginas
        pages.forEach(function(page) {
            page.classList.remove('active');
        });
        
        // Remove active de todos os links desktop
        document.querySelectorAll('.nav-link').forEach(function(navLink) {
            navLink.classList.remove('active');
        });
        
        // Adiciona active na página alvo
        const pageElement = document.getElementById(targetPage);
        if (pageElement) {
            pageElement.classList.add('active');
        }
        
        // Adiciona active no link desktop correspondente
        const desktopLink = document.querySelector('.nav-link[data-page="' + targetPage + '"]');
        if (desktopLink) {
            desktopLink.classList.add('active');
        }
        
        // Fecha menu mobile
        if (navMobile) {
            navMobile.classList.remove('active');
            menuToggle.setAttribute('aria-expanded', 'false');
        }
        
        // Scroll suave para o topo
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        
        // Foco na área principal para acessibilidade
        const mainElement = document.querySelector('main');
        if (mainElement) {
            mainElement.focus();
        }
    });
});

// Formulário de contato
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('contactName').value.trim();
        const email = document.getElementById('contactEmail').value.trim();
        const message = document.getElementById('contactMessage').value.trim();
        
        if (name && email && message) {
            showToast('Mensagem enviada com sucesso! 🌱');
            contactForm.reset();
            
            // Foca no primeiro campo após limpar
            document.getElementById('contactName').focus();
        } else {
            showToast('Por favor, preencha todos os campos obrigatórios.');
        }
    });
}

// Formulário de cadastro
if (registrationForm) {
    registrationForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        showToast('Cadastro realizado com sucesso! 🌱');
        registrationForm.reset();
        
        // Foca no primeiro campo após limpar
        document.getElementById('regName').focus();
    });
}

// Máscaras de input
const regPhone = document.getElementById('regPhone');
const regCPF = document.getElementById('regCPF');
const regCEP = document.getElementById('regCEP');

// Máscara de telefone (00) 00000-0000
if (regPhone) {
    regPhone.addEventListener('input', function(e) {
        let value = e.target.value.replace(/\D/g, '');
        
        if (value.length <= 11) {
            value = value.replace(/^(\d{2})(\d)/g, '($1) $2');
            value = value.replace(/(\d)(\d{4})$/, '$1-$2');
            e.target.value = value;
        } else {
            e.target.value = e.target.value.slice(0, -1);
        }
    });
}

// Máscara de CPF 000.000.000-00
if (regCPF) {
    regCPF.addEventListener('input', function(e) {
        let value = e.target.value.replace(/\D/g, '');
        
        if (value.length <= 11) {
            value = value.replace(/(\d{3})(\d)/, '$1.$2');
            value = value.replace(/(\d{3})(\d)/, '$1.$2');
            value = value.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
            e.target.value = value;
        } else {
            e.target.value = e.target.value.slice(0, 14);
        }
    });
}

// Máscara de CEP 00000-000
if (regCEP) {
    regCEP.addEventListener('input', function(e) {
        let value = e.target.value.replace(/\D/g, '');
        
        if (value.length <= 8) {
            value = value.replace(/(\d{5})(\d)/, '$1-$2');
            e.target.value = value;
        } else {
            e.target.value = e.target.value.slice(0, 9);
        }
    });
}

// Função para exibir toast notification
function showToast(message) {
    const toast = document.getElementById('toast');
    
    if (toast) {
        toast.textContent = message;
        toast.classList.add('show');
        
        // Remove o toast após 3 segundos
        setTimeout(function() {
            toast.classList.remove('show');
        }, 3000);
    }
}

// Fecha menu mobile ao clicar fora
document.addEventListener('click', function(e) {
    if (navMobile && navMobile.classList.contains('active')) {
        if (!navMobile.contains(e.target) && !menuToggle.contains(e.target)) {
            navMobile.classList.remove('active');
            menuToggle.setAttribute('aria-expanded', 'false');
        }
    }
});

// Suporte a tecla ESC para fechar menu mobile
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && navMobile && navMobile.classList.contains('active')) {
        navMobile.classList.remove('active');
        menuToggle.setAttribute('aria-expanded', 'false');
        menuToggle.focus();
    }
});

// Previne zoom duplo tap no iOS
let lastTouchEnd = 0;
document.addEventListener('touchend', function(e) {
    const now = Date.now();
    if (now - lastTouchEnd <= 300) {
        e.preventDefault();
    }
    lastTouchEnd = now;
}, false);

// Log de inicialização (pode ser removido em produção)
console.log('🌱 VerdeIA inicializado com sucesso!');
console.log('📅 Ano:', new Date().getFullYear());
console.log('👨‍💻 Desenvolvido por: Ka1ux');
