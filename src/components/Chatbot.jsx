import { useState, useEffect, useRef } from 'react';
import { FaRobot, FaTimes, FaPaperPlane } from 'react-icons/fa';

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [hasAutoOpened, setHasAutoOpened] = useState(false);
  const messagesEndRef = useRef(null);

  // Enhanced bot knowledge base
  const botResponses = {
    greeting: "✨ Hi! I'm Hama's AI Assistant. I can tell you about his skills, projects, experience, and hiring process! What would you like to know?",
    about: "🎯 Hama Yousuf is a passionate Full Stack Developer specializing in React, Laravel, and MySQL. With 2+ years of experience, he creates modern, responsive web applications with stunning UI/UX designs and glassmorphism effects.",
    skills: "💻 **Technical Stack:**\n• Frontend: React, Next.js, Tailwind CSS, Framer Motion\n• Backend: Laravel, Node.js, PHP\n• Database: MySQL, PostgreSQL, MongoDB\n• Tools: Git, Docker, Figma, VS Code\n• Cloud: AWS, Vercel, Netlify",
    projects: "🚀 **Featured Projects:**\n1. **Portfolio Website** - Glassmorphism + React\n2. **E-commerce Platform** - Laravel + React\n3. **Admin Dashboard** - Real-time analytics\n4. **Task Manager** - MERN Stack\n5. **AI Chatbot** - OpenAI Integration\n6. **Weather App** - Real-time API\n7. **Gym Management System** - Full-stack solution",
    experience: "💼 **Experience:**\n• **Senior Full Stack Developer** - 3+ years\n• **Freelance Web Developer** - 80+ projects delivered\n• **Open Source Contributor** - 20+ repositories\n• **Tech Mentor** - 50+ students trained\n• Currently available for exciting opportunities!",
    hire: "🎯 **Why Hire Hama?**\n✅ Clean, maintainable code\n✅ Responsive designs with animations\n✅ Fast performance optimization\n✅ 24/7 communication\n✅ On-time delivery guarantee\n✅ Post-launch support\n\n**Pricing:**\n• Landing Page: $800-2000\n• E-commerce: $2000-5000\n• Full App: $5000-15000\n• Hourly Rate: $50-100/hr",
    contact: "📱 **Contact Information:**\n• Email: hama.yousuf@example.com\n• GitHub: github.com/hamayousuf\n• LinkedIn: linkedin.com/in/hamayousuf\n• WhatsApp: +92 316 0442304\n• Discord: hama.dev",
    education: "🎓 **Education & Certifications:**\n• Bachelor's in Computer Science (CGPA: 3.8/4.0)\n• Full Stack Development Certification - Meta\n• AWS Cloud Practitioner\n• Advanced React Patterns - Frontend Masters",
    pricing: "💰 **Service Pricing:**\n• **Frontend Development:** $1000-3000\n• **Backend Development:** $1500-4000\n• **Full Stack Projects:** $3000-10000\n• **API Development:** $800-2000\n• **Maintenance:** $300-800/month\n• **Mentorship:** $50-100/hour\n\n*Custom quotes available for complex projects*",
    availability: "⏰ **Availability:**\n• **Full-time:** Available immediately\n• **Part-time:** 30-40 hours/week\n• **Freelance:** Flexible schedule\n• **Timezone:** UTC+5 (Remote worldwide)\n• **Response time:** Under 2 hours",
    process: "🔄 **My Development Process:**\n1. **Discovery** - Understanding your vision\n2. **Planning** - Architecture & timeline\n3. **Design** - UI/UX mockups\n4. **Development** - Agile sprints\n5. **Testing** - Quality assurance\n6. **Deployment** - Launch & monitor\n7. **Support** - Ongoing maintenance"
  };

  const getBotResponse = (userMessage) => {
    const msg = userMessage.toLowerCase();
    
    // Enhanced keyword matching
    if (msg.match(/hi|hello|hey|greetings/)) return botResponses.greeting;
    if (msg.match(/about|who is|tell me about|background/)) return botResponses.about;
    if (msg.match(/skill|technolog|stack|tools|know/)) return botResponses.skills;
    if (msg.match(/project|work|portfolio|built/)) return botResponses.projects;
    if (msg.match(/experience|work history|career/)) return botResponses.experience;
    if (msg.match(/hire|service|work with|employ/)) return botResponses.hire;
    if (msg.match(/contact|reach|email|phone|whatsapp/)) return botResponses.contact;
    if (msg.match(/education|degree|study|learn|certif/)) return botResponses.education;
    if (msg.match(/price|cost|rate|pricing|budget|fee/)) return botResponses.pricing;
    if (msg.match(/available|availability|time|schedule/)) return botResponses.availability;
    if (msg.match(/process|how work|methodology/)) return botResponses.process;
    
    return "🤔 I'm not sure about that. Here's what I can help you with:\n\n• Skills & Technologies\n• Projects & Portfolio\n• Experience & Background\n• Hiring & Pricing\n• Contact Information\n• Availability\n• Development Process\n\nOr you can email Hama directly at hama.yousuf@example.com!";
  };

  const sendMessage = (message) => {
    if (!message.trim()) return;
    
    // Add user message
    setMessages(prev => [...prev, { 
      text: message, 
      sender: 'user', 
      timestamp: new Date(),
      id: Date.now()
    }]);
    
    // Show typing indicator
    setMessages(prev => [...prev, { 
      text: '...', 
      sender: 'typing', 
      timestamp: new Date(),
      id: Date.now() + 1
    }]);
    
    // Get bot response after delay
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

  // Auto-open chat after 4 seconds (reduced for better UX)
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!hasAutoOpened && !isOpen && !localStorage.getItem('chatClosed')) {
        setIsOpen(true);
        setHasAutoOpened(true);
        setMessages([
          { 
            text: "👋 Hey there! I notice you're checking out Hama's portfolio. I'm here 24/7 to answer any questions about his work, pricing, or how to collaborate. What would you like to know? 💫", 
            sender: 'bot', 
            timestamp: new Date(),
            id: Date.now()
          }
        ]);
      }
    }, 4000);
    
    return () => clearTimeout(timer);
  }, [hasAutoOpened, isOpen]);

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Close handler with persistence
  const handleClose = () => {
    setIsOpen(false);
    localStorage.setItem('chatClosed', 'true');
  };

  return (
    <div className="chatbot-container">
      {isOpen && (
        <div className="chatbot-window">
          <div className="chatbot-header">
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <FaRobot className="text-white" />
              <strong>Hama's AI Assistant</strong>
              <span style={{ fontSize: '10px', opacity: 0.8 }}>● Online</span>
            </div>
            <button
              onClick={handleClose}
              style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'white' }}
            >
              <FaTimes />
            </button>
          </div>
          
          <div className="chatbot-messages">
            {messages.map((msg) => (
              <div key={msg.id} className={`message ${msg.sender === 'typing' ? 'bot' : msg.sender}`}>
                {msg.sender === 'typing' ? (
                  <div style={{ display: 'flex', gap: '4px', padding: '5px' }}>
                    <span className="typing-dot">•</span>
                    <span className="typing-dot">•</span>
                    <span className="typing-dot">•</span>
                  </div>
                ) : (
                  <>
                    <div style={{ whiteSpace: 'pre-line', fontSize: '14px' }}>{msg.text}</div>
                    <div style={{ fontSize: '9px', opacity: 0.5, marginTop: '8px' }}>
                      {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </div>
                  </>
                )}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          
          <div className="chatbot-input">
            <input
              type="text"
              placeholder="Ask about skills, pricing, projects..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
            />
            <button onClick={handleSend}>
              <FaPaperPlane />
            </button>
          </div>
        </div>
      )}
      
      <div className="chatbot-toggle" onClick={() => {
        setIsOpen(!isOpen);
        if (!isOpen) localStorage.removeItem('chatClosed');
      }}>
        <FaRobot style={{ fontSize: '28px', color: 'white' }} />
      </div>
      
      <style jsx>{`
        .typing-dot {
          animation: typing 1.4s infinite;
          font-size: 20px;
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