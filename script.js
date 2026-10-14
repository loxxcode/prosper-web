// Translations object
const translations = {
  en: {
    // Navbar
    'nav-home': 'Home',
    'nav-services': 'Services',
    'nav-all-services': 'All Services',
    'nav-web-development': 'Web Development',
    'nav-mobile-apps': 'Mobile Apps',
    'nav-graphics-design': 'Graphics Design',
    'nav-branding': 'Branding',
    'nav-computer-training': 'Computer Training',
    'nav-computer-maintenance': 'Computer Maintenance',
    'nav-digital-marketing': 'Digital Marketing',
    'nav-camera-installation': 'Camera Installation',
    'nav-printing': 'Printing',
    'nav-about-us': 'About Us',
    'nav-vision-mission': 'Vision and Mission',
    'nav-team': 'Team',
    'nav-blog': 'Blog',
    'nav-tech-news': 'Tech News',
    'nav-tutorials': 'Tutorials',
    'nav-contact': 'Contact',
    'nav-support': 'Support',
    'nav-sales': 'Sales',
    'lang-eng': 'Eng',
    'lang-kinya': 'Kinya',

  
    // Main Content
    'welcome': 'Prosper Technology Ltd',
    'slide-1': 'Your number One I.T solution',
    'slide-2': 'Great Customer Service',
    'slide-3': 'Technical Excellence',
    'slide-4': 'Giving life to your Imagination',
    'who-we-are': 'Who We Are',
    'who-we-are-1': 'We are a trusted technology company located along KN 85 Street opposite ADEPR Nyarugenge in Kigali-Rwanda, Specializing in IT services, graphic design, web design, and digital marketing, we are dedicated to helping businesses thrive in the digital age. With a team of skilled professionals, we deliver innovative and reliable solutions tailored to meet the unique needs of our clients.',
    'who-we-are-2': 'Our mission is to empower businesses with cutting-edge technology and creative designs that drive growth and enhance online presence. Whether you need robust IT support, stunning graphics, a user-friendly website, or effective digital marketing strategies, we are here to make it happen.',
    'who-we-are-3': 'At our core, we value Honesty, trust, quality, Innovation and customer satisfaction. We take pride in building long-lasting relationships with our clients by delivering exceptional services that exceed expectations. Let us be your partner in achieving your digital goals.',
    'vision-title': 'Our Vision',
    'vision-text': 'Our Vision is to Empower a connected world through innovative Technology Solutions that drive Efficiency, inspire Creativity and transform visibility of our Clients in today’s growing digital world.',
    'mission-title': 'Our Mission',
    'mission-text': 'Our mission is to empower businesses with cutting-edge technology and creative designs that drive growth and enhance online presence. Whether you need robust IT support, stunning graphics, a user-friendly website, or effective digital marketing strategies, we are here to make it happen.',
    'product-it-title': 'IT Consultancy Services',
    'product-it-desc': 'We are your trusted partner for comprehensive IT Consultancy Services. In today’s fast-paced digital world, having the right technology strategy is crucial for business success. Our expert team is here to help you navigate the complexities of IT, offering tailored solutions that drive efficiency, innovation, and growth.',
    'product-web-title': 'Web Design',
    'product-web-desc': 'Prosper Technology Ltd is where creativity meets functionality in the world of Web Design and development. Your website is often the first impression customers have of your business, and we’re here to make it unforgettable.',
    'product-graphics-title': 'Graphics Design',
    'product-graphics-desc': 'We are your go-to destination for exceptional Graphic Design services. In a world where visuals speak louder than words, we specialize in creating eye-catching designs that tell your brand’s story and leave a lasting impression.',
    'product-marketing-title': 'Digital Marketing',
    'product-marketing-desc': 'Unlock the power of targeted visibility with Advertising your Business or Event on our Website. Reach a highly engaged audience and elevate your brand’s presence by partnering with us.',
    'articles-title': 'Featured Articles',
    'article-safety-title': 'Understanding Online Safety',
    'article-safety-date': 'Published on: February 18, 2025',
    'article-safety-desc': 'Learn the best practices to keep yourself and your data safe online. From recognizing phishing attempts to using strong passwords, this article covers it all.',
    'article-customer-title': 'Growing your Customer Base',
    'article-customer-date': 'Published on: February 18, 2025',
    'article-customer-desc': 'Discover effective strategies to attract and retain customers. This article provides insights into customer engagement, loyalty programs, and more.',
    'article-maintenance-title': 'Proper Computer Maintenance',
    'article-maintenance-date': 'Published on: February 18, 2025',
    'article-maintenance-desc': 'Ensure your computer runs smoothly with these maintenance tips. Learn how to clean your hardware, update software, and prevent common issues.',
    'read-more': 'Read More',

    // Footer
    'footer-services-title': 'Our Services',
    'footer-contact-title': 'Contact Us',
    'footer-copyright': '© 2025 Prosper Technology Ltd. All rights reserved.',
    'form-name': 'Your Name',
    'form-email': 'Your Email',
    'form-message': 'Your Message',
    'form-submit': 'Send Message',

    // Chat
    'chat-title': 'Chat with us',
    'chat-start': 'Start Chat',
    'chat-message': 'Type your message...',
    'chat-welcome': 'Welcome, {name}! How can we assist you today?',
    'chat-error': 'Please enter a valid name and email.',
    'chat-bot-response': 'Thank you for your message! Our team will get back to you via your phone or email soon.'
  },
  rw: {
    // Navbar
    'nav-home': 'Ahabanza',
    'nav-all-services': 'Serivisi Zose',
    'nav-services': 'Serivisi',
    'nav-web-development': 'Ihanga ry’Urubuga',
    'nav-mobile-apps': 'Porogaramu za Mudasobwa',
    'nav-graphics-design': 'Ubugeni bw’Ibihushanyo',
    'nav-branding': 'Ishusho ry’Ikigo',
    'nav-computer-training': 'Amahugurwa ya Mudasobwa',
    'nav-computer-maintenance': 'Iboneza rya Mudasobwa',
    'nav-digital-marketing': 'Ubukangurambaga bwa Digitale',
    'nav-camera-installation': 'Iyandikwa rya Kamera',
    'nav-printing': 'Ibicanwa',
    'nav-about-us': 'Ibyacu',
    'nav-vision-mission': 'Icyerekezo n’Intego',
    'nav-team': 'Itsinda',
    'nav-blog': 'Blog',
    'nav-tech-news': 'Amakuru y’Ikoranabuhanga',
    'nav-tutorials': 'Amabwiriza',
    'nav-contact': 'Twandikire',
    'nav-support': 'Ubufasha',
    'nav-sales': 'Ubucuruzi',
    'lang-eng': 'Kinya',
    'lang-kinya': 'Kinya',

    // Main Content
    'welcome': 'Prosper Technology Ltd',
    'slide-1': 'Serivisi y’ikoranabuhanga ya mbere',
    'slide-2': 'Umukiriya w’ibanze',
    'slide-3': 'Ubuhanga bwo hejuru',
    'slide-4': 'Gutanga ubuzima ku bushusho bwawe',
    'who-we-are': 'Abo turi bo',
    'who-we-are-1': 'Turi ikigo cy’ikoranabuhanga cyizewe kiri kumuhanda wa KN 85 ahateganye na ADEPR Nyarugenge muri Kigali-Rwanda. Twihariye mu guha serivisi z’ikoranabuhanga, ububikoshyi bw’ibishushanyo, ububikoshyi bw’urubuga, n’ubukangurambaga bwa digitale, twiyemeje gufasha amashyirahamwe kugera ku ntsinzi mu z’ikoranabuhanga. Hamwe n’itsinda ry’abahanga, duha ibisubizo by’ubuvugizi kandi byizewe bifatanya n’ibyo abakiriya bacu bakeneye.',
    'who-we-are-2': 'Intego yacu ni ugufasha amashyirahamwe gukoresha ikoranabuhanga rigezweho no gushushanya byihariye bigamije iterambere no kongera ubwitabire kuri murandasi. Urashaka ubufasha bwa ikoranabuhanga bwisumbuye, ibishushanyo by’umwihariko, urubuga rwumukiriya rufite uburyo bworoshye, cyangwa ingamba z’ubukangurambaga bwa digitale zikora, turi hano kugirango tubyerekeze.',
    'who-we-are-3': 'Mu by’ingenzi byacu, twemera kuba abanyakuri, abizerwa, ubuziranenge, ubuvugizi n’isoni y’abakiriya. Twishimira kuba twubaka umubano w’igihe kirekire n’abakiriya bacu dutanika serivisi zihamye zihagije ibyifuzo byabo. Reka tube abafatanyabikorwa bawe mu kugera ku ntego zawe za digitale.',
    'vision-title': 'Icyerekezo cyacu',
    'vision-text': 'Icyerekezo cyacu ni uguteza imbere isi ihujwe n’ikoranabuhanga rihanga udushya, rikongera imikorere neza, rihumeka ubuhanzi kandi rigatanga ishusho nziza y’abakiriya bacu mu isi y’ikoranabuhanga ikura. ✌',
    'mission-title': 'Intego yacu',
    'mission-text': 'Intego yacu ni ugufasha amashyirahamwe gukoresha ikoranabuhanga rigezweho no gushushanya byihariye bigamije iterambere no kongera ubwitabire kuri murandasi. Urashaka ubufasha bwa ikoranabuhanga bwisumbuye, ibishushanyo by’umwihariko, urubuga rwumukiriya rufite uburyo bworoshye, cyangwa ingamba z’ubukangurambaga bwa digitale zikora, turi hano kugirango tubyerekeze.',
    'product-it-title': 'Serivisi z’Ubushakashatsi bw’Ikoranabuhanga',
    'product-it-desc': 'Turi abafatanyabikorwa bawe b’ukuri mu guha serivisi z’ubushakashatsi bw’ikoranabuhanga. Mu isi ya none ikora vuba, kugira uburyo bw’ikoranabuhanga bwa hafi ni ingenzi cyane ku ntsinzi y’ubucuruzi. Itsinda ryacu ry’abahanga riri hano kugirango rigufashe guhangana n’ibituganya by’ikoranabuhanga, rikuha ibisubizo byihariye bigamije imikorere neza, ubuvugizi, n’iterambere.',
    'product-web-title': 'Ihanga ry’Urubuga',
    'product-web-desc': 'Prosper Technology Ltd ni aho ubuhanzi buhura n’imikorere mu rwego rw’ihanga ry’urubuga n’iterambere ryarwo. Urubuga rwawe akenshi ni ishusho ya mbere abakiriya baba bafite ku bucuruzi bwawe, kandi turi hano kugirango rube itangariza.',
    'product-graphics-title': 'Ubugeni bw’Ibihushanyo',
    'product-graphics-desc': 'Turi aho ugomba kugana kugirango uhabwe serivisi z’ubugeni bw’ibihushanyo zihamye. Mu isi aho ibishushanyo bivuga cyane kuruta amagambo, twihariye mu guhanga ibishushanyo bifata amaso bituma amateka y’ikigo cyawe aboneka kandi bigatanga impine ikomeye.',
    'product-marketing-title': 'Ubukangurambaga bwa Digitale',
    'product-marketing-desc': 'Fungura ubushobozi bw’uburyo bwihariye bwo kugaragara ukoresheje ubukangurambaga bwawe cyangwa ibirori kuri urubuga rwacu. Kugera ku bantu bahuriye nawe no kongerera ikigo cyawe kugaragara ufatanya natwe.',
    'articles-title': 'Inyandiko Zihariye',
    'article-safety-title': 'Gusobanukirwa Umutekano w’Ikinyabuzima',
    'article-safety-date': 'Yatangajwe ku wa: 18 Gashyantare 2025',
    'article-safety-desc': 'Wige uburyo bwo kwita ku mutekano wawe n’amakuru yawe kuri murandasi. Uhereye ku kumenya ibyo kwitirirwa no gukoresha amagambo y’ibanga akomeye, iyi nyandiko irimo byose.',
    'article-customer-title': 'Kongera Abakiriya bawe',
    'article-customer-date': 'Yatangajwe ku wa: 18 Gashyantare 2025',
    'article-customer-desc': 'Menya ingamba zikora zo gukundisha no kugumana abakiriya. Iyi nyandiko itanga ibitekerezo ku kwifatanya n’abakiriya, porogaramu z’ubudahemuka, n’ibindi.',
    'article-maintenance-title': 'Iboneza rya Mudasobwa neza',
    'article-maintenance-date': 'Yatangajwe ku wa: 18 Gashyantare 2025',
    'article-maintenance-desc': 'Reba ko mudasobwa yawe ikora neza hamwe n’izi nama z’iboneza. Wige uko wakura mudasobwa yawe, gukemura porogaramu, no gukumira ibibazo bisanzwe.',
    'read-more': 'Soma Byinshi',

    // Footer
    'footer-services-title': 'Serivisi Zacu',
    'footer-contact-title': 'Twandikire',
    'footer-copyright': '© 2025 Prosper Technology Ltd. Uburenganzira bwose burabitswe.',
    'form-name': 'Izina ryawe',
    'form-email': 'Imeyili yawe',
    'form-message': 'Ubutumwa bwawe',
    'form-submit': 'Ohereza Ubutumwa',

    // Chat
    'chat-title': 'Vugana natwe',
    'chat-start': 'Tangira Kuvugana',
    'chat-message': 'Andika ubutumwa bwawe...',
    'chat-welcome': 'Murakaza neza, {name}! Turashobora kukufasha dute?',
    'chat-error': 'Nyamuneka andika izina n’imeyili zemewe.',
    'chat-bot-response': 'Urakoze ku butumwa bwawe! Itsinda ryacu rizakugaruka vuba.'
  }
};


// Navbar Toggle
function toggleMenu(button) {
  const menu = document.getElementById('nav-menu');
  const backdrop = document.getElementById('nav-backdrop');
  menu.classList.toggle('show');
  button.classList.toggle('active');
  if (backdrop) {
    backdrop.classList.toggle('active', menu.classList.contains('show'));
  }
}

// Updated toggleDropdown function in script.js
function toggleDropdown(event) {
  // For mobile only
  if (window.innerWidth <= 768) {
    event.preventDefault();
    event.stopPropagation(); // Prevent event bubbling

    const dropdown = event.currentTarget.parentElement;
    const wasActive = dropdown.classList.contains('active');

    // Close all dropdowns first
    document.querySelectorAll('nav .dropdown.active').forEach(item => {
      if (item !== dropdown) item.classList.remove('active');
    });

    // Toggle this dropdown
    if (wasActive) {
      dropdown.classList.remove('active');
    } else {
      dropdown.classList.add('active');
    }
  }
  // For desktop, let the hover handle it
}

// Update the initialization code
document.addEventListener('DOMContentLoaded', () => {
  // ... other initialization code ...

  // Update dropdown click handlers
  document.querySelectorAll('nav .dropdown > a').forEach(dropdown => {
    dropdown.addEventListener('click', toggleDropdown);
    
    // Prevent hover behavior on mobile
    if (window.innerWidth <= 768) {
      dropdown.parentElement.classList.add('mobile-dropdown');
    }
  });

  // Close dropdowns when clicking outside
  document.addEventListener('click', (e) => {
    if (window.innerWidth <= 768) {
      if (!e.target.closest('nav .dropdown')) {
        document.querySelectorAll('nav .dropdown.active').forEach(item => {
          item.classList.remove('active');
        });
      }
    }
  });
});

// Slideshow
let slideIndex = 0;
let slides, indicators;
let slideshowInterval;

function showSlides() {
  slides.forEach(slide => slide.classList.remove('active'));
  indicators.forEach(indicator => indicator.classList.remove('active'));
  slides[slideIndex].classList.add('active');
  indicators[slideIndex].classList.add('active');
  slideIndex = (slideIndex + 1) % slides.length;
}

function plusSlides(n) {
  slideIndex = (slideIndex + n + slides.length) % slides.length;
  updateSlides();
  resetInterval();
}

function goToSlide(n) {
  slideIndex = n;
  updateSlides();
  resetInterval();
}

function updateSlides() {
  slides.forEach(slide => slide.classList.remove('active'));
  indicators.forEach(indicator => indicator.classList.remove('active'));
  slides[slideIndex].classList.add('active');
  indicators[slideIndex].classList.add('active');
}

function resetInterval() {
  clearInterval(slideshowInterval);
  slideshowInterval = setInterval(showSlides, 5000);
}


// Chat Functionality
function openChat() {
  const chatWindow = document.getElementById('chat-window');
  chatWindow.style.display = 'flex';
  chatWindow.focus();
}

function closeChat() {
  document.getElementById('chat-window').style.display = 'none';
}

function startChat(e) {
  e.preventDefault(); // Prevent form submission
  const name = document.getElementById('chat-name').value.trim();
  const email = document.getElementById('chat-email').value.trim();

  if (name && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    document.getElementById('chat-form').style.display = 'none';
    document.getElementById('chat-content').style.display = 'flex';
    const chatMessages = document.getElementById('chat-messages');
    chatMessages.innerHTML = `<div>${translations[localStorage.getItem('language') || 'en']['chat-welcome'].replace('{name}', name)}</div>`;
    
    // Keep the chat window open
    document.getElementById('chat-window').style.display = 'flex';
  } else {
    alert(translations[localStorage.getItem('language') || 'en']['chat-error']);
  }
}

function sendMessage(event) {
  if (event.key === 'Enter' && !event.shiftKey) {
    event.preventDefault(); // Prevent default Enter behavior
    submitMessage();
  }
}

function sendMessageFromButton() {
  submitMessage();
}

function submitMessage() {
  const input = document.getElementById('chat-input');
  const message = input.value.trim();
  
  if (message) {
    const chatMessages = document.getElementById('chat-messages');
    const messageElement = document.createElement('div');
    messageElement.className = 'message user-message';
    messageElement.textContent = message;
    chatMessages.appendChild(messageElement);
    
    // Clear input and reset height
    input.value = '';
    input.style.height = 'auto';
    
    // Scroll to bottom
    chatMessages.scrollTop = chatMessages.scrollHeight;

    // Simulate bot response
    setTimeout(() => {
      const botMessage = document.createElement('div');
      botMessage.className = 'message bot-message';
      botMessage.textContent = translations[localStorage.getItem('language') || 'en']['chat-bot-response'];
      chatMessages.appendChild(botMessage);
      chatMessages.scrollTop = chatMessages.scrollHeight;
      
      // Send to email
      sendEmailToAdmin(
        document.getElementById('chat-name').value.trim(),
        document.getElementById('chat-email').value.trim(),
        message
      );
    }, 1000);
  }
}




function handleChatInputKey(event) {
  if (event.key === 'Enter' && !event.shiftKey) {
    event.preventDefault();
    sendMessage();
  }
  // Auto-resize textarea
  event.target.style.height = 'auto';
  event.target.style.height = (event.target.scrollHeight) + 'px';
}

function sendMessage() {
  const input = document.getElementById('chat-input');
  const message = input.value.trim();
  
  if (message) {
    addMessage(message, 'user');
    input.value = '';
    input.style.height = 'auto';
    
    // Simulate bot response after a short delay
    setTimeout(() => {
      addMessage(translations[localStorage.getItem('language') || 'en']['chat-bot-response'], 'bot');
      // Send to email
      sendEmailToAdmin(
        document.getElementById('chat-name').value.trim(),
        document.getElementById('chat-email').value.trim(),
        message
      );
    }, 1000);
  }
}

function addMessage(text, sender) {
  const chatMessages = document.getElementById('chat-messages');
  const messageElement = document.createElement('div');
  messageElement.className = `message ${sender}-message`;
  messageElement.textContent = text;
  chatMessages.appendChild(messageElement);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}











// Function to send messages via email
function sendEmailToAdmin(name, email, message) {
  fetch('send-chat.php', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: name,
      email: email,
      message: message,
      timestamp: new Date().toISOString()
    })
  })
  .then(response => response.json())
  .then(data => {
    console.log('Email sent successfully:', data);
  })
  .catch(error => {
    console.error('Error sending email:', error);
  });
}


// Typing Animation
let visionIndex = 0;
let missionIndex = 0;
let typingInterval;

function typeText(elementId, text, index, callback) {
  const element = document.getElementById(elementId);
  if (element && index < text.length) {
    element.textContent += text.charAt(index);
    index++;
    typingInterval = setTimeout(() => typeText(elementId, text, index, callback), 20);
  } else if (element) {
    element.parentElement.querySelector('.cursor').style.animation = 'none';
    if (callback) callback();
  }
}

function resetTyping() {
  const visionTextElement = document.getElementById('typing-text');
  const missionTextElement = document.getElementById('typing-text-mission');
  if (visionTextElement) visionTextElement.textContent = '';
  if (missionTextElement) missionTextElement.textContent = '';
  visionIndex = 0;
  missionIndex = 0;
  clearTimeout(typingInterval);
  document.querySelectorAll('.cursor').forEach(cursor => cursor.style.animation = 'blink 0.7s infinite');
}

// Language Switcher
function switchLanguage(lang) {
  // Update text content
  document.querySelectorAll('[data-translate]').forEach(element => {
    const key = element.getAttribute('data-translate');
    if (translations[lang][key]) {
      element.textContent = translations[lang][key];
    }
  });

  // Update placeholders
  document.querySelectorAll('[data-translate-placeholder]').forEach(element => {
    const key = element.getAttribute('data-translate-placeholder');
    if (translations[lang][key]) {
      element.placeholder = translations[lang][key];
    }
  });

  // Update language button
  const langBtn = document.getElementById('lang-btn');
  const flagImg = langBtn.querySelector('.flag-icon');
  flagImg.src = lang === 'en' ? 'uk-flag.png' : 'rwanda-flag.png';
  flagImg.alt = lang === 'en' ? 'UK Flag' : 'Rwanda Flag';

  // Reset and restart typing animation
  resetTyping();
  const visionText = translations[lang]['vision-text'];
  const missionText = translations[lang]['mission-text'];
  typeText('typing-text', visionText, 0, () => {
    typeText('typing-text-mission', missionText, 0);
  });

  // Save language preference
  localStorage.setItem('language', lang);
}

// Scroll Handler for Navbar
function handleScroll() {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 0 && window.innerWidth > 768) {
    navbar.classList.add('scrolled');
  } else if (window.innerWidth > 768) {
    navbar.classList.remove('scrolled');
  }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  // Slideshow
  slides = document.querySelectorAll('.slide');
  indicators = document.querySelectorAll('.indicator');
  if (slides.length > 0) {
    slideshowInterval = setInterval(showSlides, 5000);
  }

  // Language
  const savedLang = localStorage.getItem('language') || 'en';
  switchLanguage(savedLang);

  // Contact Form
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();

      if (name && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && message) {
        alert(translations[savedLang]['form-success'] || 'Message sent successfully!');
        contactForm.reset();
      } else {
        alert(translations[savedLang]['form-error'] || 'Please fill in all fields correctly.');
      }
    });
  }

  // Scroll Event
  window.addEventListener('scroll', handleScroll);

  // Dropdown Click Handlers
  document.querySelectorAll('nav .dropdown > a').forEach(dropdown => {
    dropdown.addEventListener('click', toggleDropdown);
  });
});

// Expose functions for HTML onclick
window.plusSlides = plusSlides;
window.goToSlide = goToSlide;
window.toggleMenu = toggleMenu;
window.openChat = openChat;
window.closeChat = closeChat;
window.startChat = startChat;
window.sendMessage = sendMessage;
window.switchLanguage = switchLanguage;