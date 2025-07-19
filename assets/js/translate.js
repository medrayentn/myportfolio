// Translation objects
const translations = {
    en: {
        "nav-home": "Home",
        "nav-about": "About",
        "nav-services": "Services",
        "nav-skills": "Skills",
        "nav-projects": "Projects",
        "nav-contact": "Contact",
        "home-title": "Hi,<br>I'am <span class='home__title-color'>Rayen</span><br> Web Developer",
        "home-contact-btn": "Contact",
        "home-cv-btn": "My CV",
        "about-title": "About",
        "about-name": "I'am Mohamed Rayen Elmi",
        "about-text": "I am passionate about learning new approaches and am always on the lookout for efficient workflows. I'm an expert in creating responsive sites, landing pages, personal portfolios, and complex websites. Ever eager to grow and take on new challenges, I collaborate with real clients to turn ideas into functional, well-crafted websites. I'm continually striving to improve my skills and stay up to date with the latest in web development.",
        "services-title": "Services",
        "service-landing-title": "Landing Page",
        "service-landing-desc": "Craft high-converting landing pages with stunning visuals and optimized user flows to boost engagement and leads.",
        "service-showcase-title": "Showcase Website",
        "service-showcase-desc": "Showcase your brand with a sleek, responsive website designed to highlight your products or services.",
        "service-ecommerce-title": "E-commerce",
        "service-ecommerce-desc": "Build seamless e-commerce websites with secure payments and intuitive product management for an exceptional shopping experience.",
        "service-webapp-title": "Web App",
        "service-webapp-desc": "Develop dynamic, scalable web apps with custom features tailored to your business goals and user needs.",
        "skills-title": "Skills",
        "skills-subtitle": "Professional Skills",
        "skills-text": "These levels reflect my current experience and comfort with each technology, based on personal projects, hands-on learning, and ongoing development.",
        "projects-title": "Projects",
        "contact-title": "Contact",
        "contact-button": "Send",
        "footer-title": "Rayen",
        "footer-copy": "© Rayen. All rights reserved",
        "lang-en": "English",
        "lang-fr": "Français",
        "input-name": "Your Name",
        "input-email": "Your Email",
        "input-message": "Your Message"
    },
    fr: {
        "nav-home": "Accueil",
        "nav-about": "À propos",
        "nav-services": "Services",
        "nav-skills": "Compétences",
        "nav-projects": "Projets",
        "nav-contact": "Contact",
        "home-title": "Salut,<br>Je suis <span class='home__title-color'>Rayen</span><br> Développeur Web",
        "home-contact-btn": "Contact",
        "home-cv-btn": "Mon CV",
        "about-title": "À propos",
        "about-name": "Je suis Mohamed Rayen Elmi",
        "about-text": "Je suis passionné par l'apprentissage de nouvelles approches et toujours à la recherche de flux de travail efficaces. Je suis expert dans la création de sites réactifs, de pages d'atterrissage, de portefeuilles personnels et de sites web complexes. Toujours désireux de progresser et de relever de nouveaux défis, je collabore avec de vrais clients pour transformer des idées en sites web fonctionnels et bien conçus. Je m'efforce continuellement d'améliorer mes compétences et de rester à jour avec les dernières tendances en développement web.",
        "services-title": "Services",
        "service-landing-title": "Page de destination",
        "service-landing-desc": "Créez des pages de destination à fort taux de conversion avec des visuels époustouflants et des flux utilisateur optimisés pour augmenter l'engagement et les prospects.",
        "service-showcase-title": "Site vitrine",
        "service-showcase-desc": "Présentez votre marque avec un site web réactif et élégant conçu pour mettre en valeur vos produits ou services.",
        "service-ecommerce-title": "E-commerce",
        "service-ecommerce-desc": "Construisez des sites e-commerce fluides avec des paiements sécurisés et une gestion intuitive des produits pour une expérience d'achat exceptionnelle.",
        "service-webapp-title": "Application Web",
        "service-webapp-desc": "Développez des applications web dynamiques et évolutives avec des fonctionnalités personnalisées adaptées à vos objectifs commerciaux et aux besoins des utilisateurs.",
        "skills-title": "Compétences",
        "skills-subtitle": "Compétences professionnelles",
        "skills-text": "Ces niveaux reflètent mon expérience et mon aisance actuelles avec chaque technologie, basées sur des projets personnels, un apprentissage pratique et un développement continu.",
        "projects-title": "Projets",
        "contact-title": "Contact",
        "contact-button": "Envoyer",
        "footer-title": "Rayen",
        "footer-copy": "© Rayen. Tous droits réservés",
        "lang-en": "English",
        "lang-fr": "Français",
        "input-name": "Votre Nom",
        "input-email": "Votre Email",
        "input-message": "Votre Message"
    }
};

// Function to update text based on selected language
function updateLanguage(lang) {
    console.log('Updating language to:', lang);
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        
        // Special handling for home title
        if (key === 'home-title') {
            const spanContent = element.querySelector('.home__title-color').textContent;
            const translatedText = translations[lang][key];
            element.innerHTML = translatedText.replace('Rayen', `<span class="home__title-color">${spanContent}</span>`);
        } 
        // Handle input placeholders
        else if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
            if (element.type === 'button' || element.type === 'submit') {
                element.value = translations[lang][key] || element.value; // Update VALUE for buttons
            } else {
                element.placeholder = translations[lang][key] || element.placeholder;
            }
        } 
        // Normal text content
        else {
            element.textContent = translations[lang][key] || element.textContent;
        }
    });
    
    // Update toggle flag only (no text)
    const toggle = document.querySelector('.language-toggle');
    if (toggle) {
        const toggleFlag = toggle.querySelector('img.flag-icon');
        if (toggleFlag) {
            toggleFlag.src = `https://cdn.jsdelivr.net/gh/lipis/flag-icons@7.2.3/flags/4x3/${lang === 'en' ? 'gb' : 'fr'}.svg`;
            toggleFlag.alt = lang === 'en' ? 'UK Flag' : 'French Flag';
        }
    }
}

// Initialize language and dropdown functionality
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded, initializing language selector');
    const languageSelector = document.getElementById('language-selector');
    const languageToggle = document.querySelector('.language-toggle');
    const languageOptions = document.querySelector('.language-options');
    const savedLang = localStorage.getItem('language') || 'en';

    if (!languageSelector || !languageToggle || !languageOptions) {
        console.error('Language selector elements not found');
        return;
    }

    // Set initial language
    updateLanguage(savedLang);

    // Toggle dropdown visibility
    languageToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        console.log('Toggle clicked, current display:', languageOptions.style.display);
        languageOptions.classList.toggle('show');
    });

    // Handle language selection
    document.querySelectorAll('.language-option').forEach(option => {
        option.addEventListener('click', (e) => {
            e.stopPropagation();
            const selectedLang = option.getAttribute('data-lang');
            console.log('Language option clicked:', selectedLang);
            localStorage.setItem('language', selectedLang);
            updateLanguage(selectedLang);
            languageOptions.classList.remove('show');
        });
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
        if (!languageSelector.contains(e.target)) {
            console.log('Clicked outside, closing dropdown');
            languageOptions.classList.remove('show');
        }
    });
});