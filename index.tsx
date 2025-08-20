/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

const translations = {
    en: {
        logo: "AI Co.",
        pageTitle: "AI Co. | AI for your business",
        productsLink: "Products",
        productsPageTitle: "AI Co. | Our Products",
        productsPageHeading: "Our Products & Solutions",
        productsPageSubtitle: "Explore the AI-powered tools we've built to drive efficiency and innovation.",
        productsCat1: "AI CHATBOTS & RAG",
        product1_1: "Tulum: Instagram Chatbot",
        product1_2: "WhatsApp Conversational Agent",
        product1_3: "RAG Knowledge Base Engine (Pinecone)",
        productsCat2: "DATA PROCESSING & EXTRACTION",
        product2_1: "Automated PDF Invoice Extractor",
        product2_2: "Website & API Scraper (Apify, Firecrawl)",
        product2_3: "AI Web Researcher",
        productsCat3: "LEAD GENERATION & SALES AUTOMATION",
        product3_1: "Lead Generation, Scoring & Communication",
        product3_2: "Cold Email Icebreaker Generator",
        product3_3: "Google Maps Lead Scraper",
        productsCat4: "CORE TOOLS & INTEGRATIONS",
        product4_1: "Google Calendar Event Agent",
        product4_2: "Supabase Chat Memory Manager",
        product4_3: "BigQuery Data Agent",
        heroTitle: "Intelligence. Automated.",
        heroSubtitle: "We build the AI-powered workflows, chatbots, and data systems that will define the future of your business.",
        scheduleCall: "Schedule a call",
        accessDemo: "Try our Chatbot",
        impact1Title: "Intelligent Automation",
        impact1Text: "We optimize your workflows for unprecedented efficiency.",
        impact2Title: "Predictive Analysis",
        impact2Text: "Anticipate the future with insights based on accurate and reliable data.",
        impact3Title: "Custom Solutions",
        impact3Text: "We develop AI tools that adapt to your unique needs.",
        contactTitle: "Let's build something brilliant together.",
        contactSubtitle: "Tell us about your project, and we'll get back to you shortly.",
        contactNamePlaceholder: "Your Name",
        contactEmailPlaceholder: "Your Email",
        contactMessagePlaceholder: "Your idea, project, or question...",
        contactSubmitButton: "Send Message",
        contactFormSending: "Sending...",
        contactFormSuccess: "Message sent successfully! We'll get back to you soon.",
        contactFormError: "Something went wrong. Please try again.",
        teamTitle: "Meet Our Team",
        teamSubtitle: "We are a dedicated team of AI enthusiasts committed to delivering excellence.",
        teamMember1Name: "Joaquín",
        teamMember1Title: "Data Scientist",
        teamMember1Desc: "Passionate about uncovering insights from data and building intelligent systems. Expertise in machine learning and statistical modeling.",
        teamMember2Name: "Pablo",
        teamMember2Title: "AI Developer",
        teamMember2Desc: "Focused on developing and deploying scalable AI applications. Skilled in software engineering and MLOps.",
        ctaTitle: "Ready to start?",
        ctaSubtitle: "Let's talk about how AI can boost your business.",
        footerText: "2025 AI Co. All rights reserved."
    },
    es: {
        logo: "AI Co.",
        pageTitle: "AI Co. | IA para tu empresa",
        productsLink: "Productos",
        productsPageTitle: "AI Co. | Nuestros Productos",
        productsPageHeading: "Nuestros Productos y Soluciones",
        productsPageSubtitle: "Explora las herramientas impulsadas por IA que hemos construido para impulsar la eficiencia y la innovación.",
        productsCat1: "AI CHATBOTS & RAG",
        product1_1: "Tulum: Chatbot de Instagram",
        product1_2: "Agente Conversacional de WhatsApp",
        product1_3: "Motor de Base de Conocimiento RAG (Pinecone)",
        productsCat2: "PROCESAMIENTO Y EXTRACCIÓN DE DATOS",
        product2_1: "Extractor Automatizado de Facturas PDF",
        product2_2: "Scraper de Sitios Web y API (Apify, Firecrawl)",
        product2_3: "Investigador Web con IA",
        productsCat3: "GENERACIÓN DE LEADS Y AUTOMATIZACIÓN DE VENTAS",
        product3_1: "Generación, Puntuación y Comunicación de Leads",
        product3_2: "Generador de Rompehielos para Correos en Frío",
        product3_3: "Scraper de Leads de Google Maps",
        productsCat4: "HERRAMIENTAS E INTEGRACIONES PRINCIPALES",
        product4_1: "Agente de Eventos de Google Calendar",
        product4_2: "Gestor de Memoria de Chat de Supabase",
        product4_3: "Agente de Datos de BigQuery",
        heroTitle: "Inteligencia. Automatizada.",
        heroSubtitle: "Construimos los flujos de trabajo, chatbots y sistemas de datos impulsados por IA que definirán el futuro de su negocio.",
        scheduleCall: "Agendar una llamada",
        accessDemo: "Prueba nuestro Chatbot",
        impact1Title: "Automatización Inteligente",
        impact1Text: "Optimizamos tus flujos de trabajo para una eficiencia sin precedentes.",
        impact2Title: "Análisis Predictivo",
        impact2Text: "Anticípate al futuro con insights basados en datos precisos y fiables.",
        impact3Title: "Soluciones a Medida",
        impact3Text: "Desarrollamos herramientas de IA que se adaptan a tus necesidades únicas.",
        contactTitle: "Construyamos algo brillante juntos.",
        contactSubtitle: "Cuéntanos sobre tu proyecto y te responderemos a la brevedad.",
        contactNamePlaceholder: "Tu Nombre",
        contactEmailPlaceholder: "Tu Email",
        contactMessagePlaceholder: "Tu idea, proyecto o pregunta...",
        contactSubmitButton: "Enviar Mensaje",
        contactFormSending: "Enviando...",
        contactFormSuccess: "¡Mensaje enviado! Nos pondremos en contacto contigo pronto.",
        contactFormError: "Ocurrió un error. Por favor, inténtalo de nuevo.",
        teamTitle: "Conoce a Nuestro Equipo",
        teamSubtitle: "Somos un equipo dedicado de entusiastas de la IA comprometidos con la excelencia.",
        teamMember1Name: "Joaquín",
        teamMember1Title: "Científico de Datos",
        teamMember1Desc: "Apasionado por descubrir insights en los datos y construir sistemas inteligentes. Experto en machine learning y modelado estadístico.",
        teamMember2Name: "Pablo",
        teamMember2Title: "Desarrollador de IA",
        teamMember2Desc: "Enfocado en desarrollar y desplegar aplicaciones de IA escalables. Hábil en ingeniería de software y MLOps.",
        ctaTitle: "¿Listo para empezar?",
        ctaSubtitle: "Hablemos de cómo la IA puede impulsar tu negocio.",
        footerText: "2025 AI Co. Todos los derechos reservados."
    }
};

document.addEventListener('DOMContentLoaded', () => {
    // Internationalization
    const setLanguage = () => {
        const userLang = (navigator.language || 'en').split('-')[0];
        const lang = translations[userLang] ? userLang : 'en';
        
        document.documentElement.lang = lang;
        
        document.querySelectorAll('[data-i18n-key]').forEach(el => {
            const key = el.getAttribute('data-i18n-key');
            if (key && translations[lang][key]) {
                const target = el.querySelector('span[data-i18n-key]') || el;
                 if (target.tagName === 'TITLE') {
                    target.textContent = translations[lang][key];
                } else {
                    const firstChild = el.firstChild;
                    if (firstChild && firstChild.nodeType === Node.TEXT_NODE && firstChild.textContent?.trim() !== '') {
                        el.childNodes[0].nodeValue = translations[lang][key];
                    } else if (el.querySelector('span')) {
                        const span = el.querySelector('span');
                        if(span) span.innerHTML = translations[lang][key];
                    }
                    else {
                        el.innerHTML = translations[lang][key];
                    }
                }
            }
        });

        document.querySelectorAll('[data-i18n-placeholder-key]').forEach(el => {
            const key = el.getAttribute('data-i18n-placeholder-key');
            if (key && translations[lang][key] && (el instanceof HTMLInputElement || el instanceof HTMLTextAreaElement)) {
                el.placeholder = translations[lang][key];
            }
        });
    };
    
    setLanguage();

    // Theme switcher logic
    const themeToggle = document.getElementById('theme-toggle') as HTMLInputElement;
    const body = document.body;

    const setTheme = (isDarkMode: boolean) => {
        if (isDarkMode) {
            body.classList.add('dark-mode');
            themeToggle.checked = true;
        } else {
            body.classList.remove('dark-mode');
            themeToggle.checked = false;
        }
    };

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        setTheme(savedTheme === 'dark');
    } else {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        setTheme(prefersDark);
    }

    themeToggle.addEventListener('change', () => {
        const isDarkMode = themeToggle.checked;
        setTheme(isDarkMode);
        localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    });

    // Mobile menu logic
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const header = document.querySelector('.main-header');
    if (hamburgerMenu && header) {
        hamburgerMenu.addEventListener('click', () => {
            header.classList.toggle('nav-open');
        });
    }

    // SPA-like navigation
    const mainContent = document.getElementById('main-content');
    const productsPage = document.getElementById('products-page');
    const productLinks = document.querySelectorAll('a[href="products.html"]');
    const homeLink = document.querySelector('a.logo');

    const showProductsPage = (e: Event) => {
        e.preventDefault();
        if (mainContent && productsPage) {
            mainContent.style.display = 'none';
            productsPage.style.display = 'block';
            window.scrollTo(0, 0);
        }
        if (header) {
            header.classList.remove('nav-open');
        }
    };

    const showHomePage = (e: Event) => {
        e.preventDefault();
        if (mainContent && productsPage) {
            mainContent.style.display = 'block';
            productsPage.style.display = 'none';
            window.scrollTo(0, 0);
        }
    };

    productLinks.forEach(link => {
        link.addEventListener('click', showProductsPage);
    });

    if (homeLink) {
        homeLink.addEventListener('click', showHomePage);
    }
    
    // Contact form submission
    const contactForm = document.getElementById('contact-form') as HTMLFormElement;
    if (contactForm) {
        const submitButton = contactForm.querySelector('button[type="submit"]') as HTMLButtonElement;
        const formStatus = document.getElementById('form-status');
        const userLang = (navigator.language || 'en').split('-')[0];
        const lang = translations[userLang] ? userLang : 'en';

        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            if (!submitButton || !formStatus) return;

            const originalButtonText = submitButton.textContent;
            submitButton.disabled = true;
            submitButton.textContent = translations[lang]['contactFormSending'];
            formStatus.textContent = '';
            formStatus.className = '';

            const formData = new FormData(contactForm);
            const data = {
                name: formData.get('name'),
                email: formData.get('email'),
                message: formData.get('message'),
            };

            try {
                const response = await fetch('https://n8n-app.agreeableriver-225df3a2.westus.azurecontainerapps.io/webhook/9bfaf4bf-38ae-4d83-b90b-8b87da297e6d', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data),
                });

                if (response.ok) {
                    formStatus.textContent = translations[lang]['contactFormSuccess'];
                    formStatus.classList.add('form-status-success');
                    contactForm.reset();
                     setTimeout(() => {
                         formStatus.textContent = '';
                         formStatus.className = '';
                    }, 5000);
                } else {
                    throw new Error('Network response was not ok.');
                }
            } catch (error) {
                formStatus.textContent = translations[lang]['contactFormError'];
                formStatus.classList.add('form-status-error');
                console.error('There was a problem with the fetch operation:', error);
            } finally {
                submitButton.disabled = false;
                submitButton.textContent = originalButtonText;
            }
        });
    }

    // Modal logic for scheduling a call
    const scheduleModal = document.getElementById('schedule-modal') as HTMLElement;
    const scheduleButtons = document.querySelectorAll('.schedule-call-btn');
    const closeModalButton = document.querySelector('.modal-close') as HTMLElement;

    if (scheduleModal && scheduleButtons.length > 0 && closeModalButton) {
        const openModal = () => {
            scheduleModal.style.display = 'block';
            document.body.classList.add('modal-open');
        };

        const closeModal = () => {
            scheduleModal.style.display = 'none';
            document.body.classList.remove('modal-open');
        };

        scheduleButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                openModal();
            });
        });

        closeModalButton.addEventListener('click', closeModal);

        scheduleModal.addEventListener('click', (e) => {
            if (e.target === scheduleModal) {
                closeModal();
            }
        });
        
        window.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && scheduleModal.style.display === 'block') {
                closeModal();
            }
        });
    }

    // Prevent clicks on product links
    document.querySelectorAll('.products-column li a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
        });
    });
});