import { useState, useEffect, useRef } from 'react';
import { FaRobot, FaTimes, FaPaperPlane, FaCommentDots, FaHeadset, FaMicrophone, FaUserAstronaut } from 'react-icons/fa';
import { IoChatbubbleEllipses } from 'react-icons/io5';
import { MdSupportAgent } from 'react-icons/md';
import { TbMessageChatbot } from 'react-icons/tb';

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [hasAutoOpened, setHasAutoOpened] = useState(false);
  const messagesEndRef = useRef(null);

  // Complete portfolio knowledge base
  const botResponses = {
    greeting: "✨ Hi! I'm Hamza Malik's AI Assistant. I'm here 24/7 to help you learn about my skills, projects, services, pricing, and more! What would you like to know? 🚀",
    
    about: "🎯 **About Hamza Malik**\n\nI'm a passionate Full Stack Developer with 3+ years of experience creating stunning, high-performance web applications. I specialize in:\n\n• Modern React applications with beautiful animations\n• Scalable backend systems with Laravel & Node.js\n• Responsive designs with glassmorphism effects\n• End-to-end project delivery\n\n🌟 **Mission:** To build innovative digital solutions that solve real-world problems while delivering exceptional user experiences.",
    
    skills: "💻 **Technical Skills**\n\n**Frontend:**\n• React.js, Next.js, Vue.js\n• Tailwind CSS, Framer Motion\n• Redux, Zustand, Context API\n• TypeScript, JavaScript (ES6+)\n\n**Backend:**\n• Laravel, Node.js, Express\n• PHP, Python, Ruby on Rails\n• RESTful APIs, GraphQL\n• WebSocket, Socket.io\n\n**Database:**\n• MySQL, PostgreSQL, MongoDB\n• Firebase, Supabase\n• Redis, Elasticsearch\n\n**DevOps & Tools:**\n• Docker, Kubernetes\n• AWS (EC2, S3, Lambda)\n• Git, GitHub Actions, CI/CD\n• Figma, Adobe XD",
    
    projects: "🚀 **Featured Projects**\n\n**1. AI-Powered Portfolio** ⭐\n• React + Framer Motion + Glassmorphism\n• AI chatbot with 95% engagement rate\n• Live: hamzamalik.dev\n\n**2. E-Commerce Platform** 🛍️\n• Laravel + React + MySQL\n• 10,000+ monthly active users\n• Integrated payment gateways\n\n**3. Admin Dashboard** 📊\n• Next.js + Tailwind + Recharts\n• Real-time analytics & reporting\n• 40% faster data processing\n\n**4. Task Management System** ✅\n• MERN Stack + Socket.io\n• Real-time collaboration\n• Used by 500+ teams\n\n**5. Social Media Analytics** 📈\n• Python + Django + React\n• AI sentiment analysis\n• 98% accuracy rate\n\n**6. Healthcare Portal** 🏥\n• HIPAA compliant\n• Telemedicine features\n• 24/7 support system",
    
    experience: "💼 **Professional Experience**\n\n**Senior Full Stack Developer** (2023-Present)\n• Leading 5+ development projects\n• Mentoring junior developers\n• Implementing microservices architecture\n\n**Freelance Web Developer** (2021-Present)\n• 120+ successful projects delivered\n• 99% client satisfaction rate\n• 4.9/5 star rating on Upwork\n\n**Tech Mentor** (2022-Present)\n• 100+ students trained\n• Placement assistance provided\n• Specialized in React & Laravel\n\n**Open Source Contributor**\n• 30+ GitHub repositories\n• 500+ stars accumulated\n• Active in developer communities",
    
    services: "🎨 **Services I Offer**\n\n**1. Web Development**\n• Custom websites & web apps\n• E-commerce solutions\n• CMS development (WordPress, Strapi)\n• PWA development\n\n**2. Mobile Development**\n• React Native apps\n• Cross-platform solutions\n• App store deployment\n\n**3. UI/UX Design**\n• Figma to code conversion\n• Responsive designs\n• Interactive prototypes\n• Design systems\n\n**4. API Development**\n• RESTful & GraphQL APIs\n• Third-party integrations\n• API documentation\n\n**5. Performance Optimization**\n• Speed optimization (Lighthouse 90+)\n• SEO implementation\n• Security hardening\n\n**6. Consulting & Mentorship**\n• Code reviews\n• Technical consulting\n• 1-on-1 mentorship\n• Team training",
    
    pricing: "💰 **Pricing Strategy**\n\n**Fixed Price Projects:**\n• Landing Page: $500 - $1,500\n• Business Website: $2,000 - $5,000\n• E-commerce Store: $3,000 - $8,000\n• Custom Web App: $5,000 - $15,000\n• Mobile App: $8,000 - $20,000\n\n**Hourly Rates:**\n• Basic Development: $50/hr\n• Advanced Development: $75/hr\n• Expert Consulting: $100/hr\n• Urgent Projects: $120/hr\n\n**Monthly Retainer:**\n• Basic Maintenance: $500/month\n• Standard Support: $1,000/month\n• Premium Service: $2,000/month\n\n**Packages:**\n• **Startup Package:** $3,000\n  - Landing page + Admin panel\n  - 3 months support\n  \n• **Business Package:** $7,000\n  - Full website + CMS\n  - 6 months support\n  \n• **Enterprise Package:** $15,000+\n  - Custom solution\n  - 12 months support\n\n✨ **20% discount for non-profits & startups!**",
    
    process: "🔄 **Development Process**\n\n**1. Discovery Phase (1-2 weeks)**\n• Requirements gathering\n• Market research\n• Technical feasibility\n• Timeline planning\n\n**2. Design Phase (2-3 weeks)**\n• Wireframing\n• UI/UX design\n• Interactive prototypes\n• Client feedback loop\n\n**3. Development Phase (4-12 weeks)**\n• Agile sprints\n• Weekly progress updates\n• Code reviews\n• Testing (unit, integration)\n\n**4. Launch Phase (1-2 weeks)**\n• Deployment setup\n• Data migration\n• Performance testing\n• Go-live support\n\n**5. Post-Launch**\n• 30-day free support\n• Bug fixes guarantee\n• Performance monitoring\n• Documentation\n\n**6. Maintenance**\n• Regular updates\n• Security patches\n• Feature additions\n• 24/7 monitoring",
    
    availability: "⏰ **Availability**\n\n**Current Status:** Available for new projects! 🟢\n\n**Working Hours:**\n• Monday-Friday: 9 AM - 9 PM (UTC+5)\n• Saturday: 10 AM - 4 PM\n• Sunday: Emergency support only\n\n**Communication Channels:**\n• Response within 2 hours\n• Daily progress updates\n• Weekly video calls\n• 24/7 emergency contact\n\n**Time Zone:** Remote worldwide, flexible scheduling\n\n**Notice Period:** Can start within 1 week",
    
    testimonials: "⭐ **Client Testimonials**\n\n**\"Hamza delivered our project 2 weeks early! His React skills are exceptional.\"**\n— Sarah Johnson, CEO of TechStart\n\n**\"The best developer I've worked with. Clean code, timely delivery, great communication.\"**\n— Michael Chen, Product Manager\n\n**\"Our website traffic increased 200% after the redesign. Highly recommend!\"**\n— Emily Rodriguez, Marketing Director\n\n**\"Professional, skilled, and a pleasure to work with. 10/10!\"**\n— David Kim, Founder",
    
    contact: "📱 **Contact Information**\n\n**Direct Contact:**\n• Email: hamza.malik@example.com\n• Phone/WhatsApp: +92 316 0442304\n\n**Social/Professional:**\n• GitHub: github.com/hamzamalik\n• LinkedIn: linkedin.com/in/hamzamalik\n• Twitter: @hamza_dev\n• Discord: hamza.malik\n\n**Preferred Contact Methods:**\n1. Email (response within 2 hours)\n2. WhatsApp (fastest response)\n3. LinkedIn (for professional inquiries)\n\n**Schedule a Call:**\nCalendly: calendly.com/hamzamalik\n\n*Let's discuss your project!* 🚀",
    
    faq: "❓ **Frequently Asked Questions**\n\n**Q: What's your typical project timeline?**\nA: 2-8 weeks depending on complexity\n\n**Q: Do you offer post-launch support?**\nA: Yes, 30 days free then maintenance plans\n\n**Q: Can you work with existing code?**\nA: Absolutely! Code audits and improvements\n\n**Q: What payment methods do you accept?**\nA: PayPal, Bank Transfer, Crypto, Upwork\n\n**Q: Do you sign NDAs?**\nA: Yes, confidentiality guaranteed\n\n**Q: Can you start immediately?**\nA: Yes, available for new projects\n\n**Q: What's your refund policy?**\nA: 100% satisfaction guarantee",
    
    education: "🎓 **Education & Certifications**\n\n**Formal Education:**\n• Bachelor's in Computer Science (CGPA: 3.9/4.0)\n• Master's in Software Engineering (In progress)\n\n**Certifications:**\n• Meta Full Stack Developer Certificate\n• AWS Solutions Architect\n• Google Professional Cloud Developer\n• MongoDB Certified Developer\n• React Advanced Patterns - Frontend Masters\n• Laravel Certification\n\n**Courses & Workshops:**\n• Advanced JavaScript (Wes Bos)\n• GraphQL with Apollo\n• Docker & Kubernetes Masterclass\n• System Design Interview Prep"
  };

  const getBotResponse = (userMessage) => {
    const msg = userMessage.toLowerCase();
    
    // Enhanced keyword matching with synonyms
    const keywords = {
      greeting: ['hi', 'hello', 'hey', 'greetings', 'good morning', 'good evening'],
      about: ['about', 'who', 'background', 'tell me about yourself', 'introduce'],
      skills: ['skill', 'tech', 'technologies', 'stack', 'tools', 'know', 'capable'],
      projects: ['project', 'work', 'portfolio', 'built', 'create', 'develop', 'showcase'],
      experience: ['experience', 'work history', 'career', 'job', 'previous', 'past work'],
      services: ['service', 'offer', 'provide', 'do you do', 'help with'],
      pricing: ['price', 'cost', 'rate', 'pricing', 'budget', 'fee', 'charge', 'how much'],
      process: ['process', 'how work', 'methodology', 'workflow', 'steps'],
      availability: ['available', 'availability', 'free', 'time', 'schedule', 'when'],
      testimonials: ['testimonial', 'review', 'client say', 'feedback', 'rating'],
      contact: ['contact', 'reach', 'email', 'phone', 'whatsapp', 'call', 'message'],
      faq: ['faq', 'question', 'common', 'frequently', 'answer'],
      education: ['education', 'degree', 'certification', 'study', 'learn', 'course']
    };
    
    // Check for matches
    for (const [key, words] of Object.entries(keywords)) {
      if (words.some(word => msg.includes(word))) {
        return botResponses[key] || botResponses.greeting;
      }
    }
    
    // Default response with suggestions
    return "🤔 I'm not sure about that. Here's what I can help you with:\n\n" +
           "• 📝 About Me\n" +
           "• 💻 Skills & Technologies\n" +
           "• 🚀 Projects & Portfolio\n" +
           "• 💼 Experience\n" +
           "• 🎨 Services Offered\n" +
           "• 💰 Pricing & Packages\n" +
           "• 🔄 Development Process\n" +
           "• 📱 Contact Information\n\n" +
           "Or you can email me directly at hamza.malik@example.com! ✨";
  };

  const sendMessage = (message) => {
    if (!message.trim()) return;
    
    setMessages(prev => [...prev, { 
      text: message, 
      sender: 'user', 
      timestamp: new Date(),
      id: Date.now()
    }]);
    
    setMessages(prev => [...prev, { 
      text: '...', 
      sender: 'typing', 
      timestamp: new Date(),
      id: Date.now() + 1
    }]);
    
    setTimeout(() => {
      setMessages(prev => prev.filter(msg => msg.sender !== 'typing'));
      const response = getBotResponse(message);
      setMessages(prev => [...prev, { 
        text: response, 
        sender: 'bot', 
        timestamp: new Date(),
        id: Date.now()
      }]);
    }, 800);
  };

  const handleSend = () => {
    if (input.trim()) {
      sendMessage(input);
      setInput('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!hasAutoOpened && !isOpen && !localStorage.getItem('chatClosed')) {
        setIsOpen(true);
        setHasAutoOpened(true);
        setMessages([
          { 
            text: "👋 Hey there! I'm Hamza's AI Assistant. I'm here 24/7 to help you learn about my skills, services, pricing, or how we can work together! What would you like to explore today? 💫", 
            sender: 'bot', 
            timestamp: new Date(),
            id: Date.now()
          }
        ]);
      }
    }, 4000);
    
    return () => clearTimeout(timer);
  }, [hasAutoOpened, isOpen]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleClose = () => {
    setIsOpen(false);
    localStorage.setItem('chatClosed', 'true');
  };

  return (
    <div className="chatbot-container fixed bottom-6 right-6 z-50">
      {isOpen && (
        <div className="chatbot-window fixed bottom-24 right-6 w-[380px] h-[600px] bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-white/20">
          <div className="chatbot-header bg-gradient-to-r from-cyan-500 to-blue-500 text-white p-4 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <TbMessageChatbot className="text-white text-2xl" />
              <div>
                <strong className="text-lg">Hamza's AI Assistant</strong>
                <span className="text-xs ml-2 opacity-80">● Online</span>
              </div>
            </div>
            <button
              onClick={handleClose}
              className="hover:bg-white/20 rounded-full p-2 transition-all"
            >
              <FaTimes />
            </button>
          </div>
          
          <div className="chatbot-messages flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-3 rounded-2xl ${
                  msg.sender === 'user' 
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white' 
                    : msg.sender === 'typing'
                    ? 'bg-gray-700 text-white'
                    : 'bg-gray-700 text-white'
                }`}>
                  {msg.sender === 'typing' ? (
                    <div className="flex gap-1 px-2">
                      <span className="typing-dot">•</span>
                      <span className="typing-dot">•</span>
                      <span className="typing-dot">•</span>
                    </div>
                  ) : (
                    <>
                      <div className="whitespace-pre-wrap text-sm leading-relaxed">{msg.text}</div>
                      <div className="text-xs opacity-60 mt-2">
                        {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </div>
                    </>
                  )}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          
          <div className="chatbot-input p-4 bg-gray-800/50 border-t border-white/10 flex gap-2">
            <input
              type="text"
              placeholder="Ask about skills, pricing, projects..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              className="flex-1 bg-gray-700 text-white rounded-full px-4 py-2 outline-none focus:ring-2 focus:ring-cyan-500"
            />
            <button onClick={handleSend} className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center hover:scale-105 transition-all">
              <FaPaperPlane />
            </button>
          </div>
        </div>
      )}
      
      {/* Larger Chatbot Button - Increased size */}
      <div 
        className="chatbot-toggle w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center cursor-pointer shadow-lg hover:scale-110 transition-all duration-300" 
        onClick={() => {
          setIsOpen(!isOpen);
          if (!isOpen) localStorage.removeItem('chatClosed');
        }}
      >
        <FaHeadset className="text-white text-5xl" />
      </div>
      
      <style jsx>{`
        .typing-dot {
          animation: typing 1.4s infinite;
          font-size: 24px;
        }
        .typing-dot:nth-child(2) { animation-delay: 0.2s; }
        .typing-dot:nth-child(3) { animation-delay: 0.4s; }
        @keyframes typing {
          0%, 60%, 100% { opacity: 0.3; }
          30% { opacity: 1; }
        }
      `}</style>
    </div>
  );
}