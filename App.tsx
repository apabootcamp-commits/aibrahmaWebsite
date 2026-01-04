
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, 
  X, 
  ChevronRight, 
  ExternalLink, 
  Youtube, 
  Globe, 
  Sparkles,
  Linkedin,
  Send as SendIcon,
  MessageCircle,
  Mail,
  ArrowUpRight,
  Bot,
  User,
  Loader2,
  AlertCircle
} from 'lucide-react';
import { PROJECTS, SKILLS, SOCIAL_LINKS } from './constants';
import { GoogleGenAI } from "@google/genai";

// Satisfy TypeScript regarding process.env which is injected by Vite define
declare const process: {
  env: {
    API_KEY: string;
    [key: string]: string | undefined;
  };
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'AI Brahma', href: '#community' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'glass py-4 shadow-lg' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 gold-bg rounded-lg flex items-center justify-center font-bold text-black text-xl">GB</div>
          <span className="font-playfair text-xl font-bold tracking-wider hidden sm:block">GANESH BHAT</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 items-center">
          {navItems.map((item) => (
            <a 
              key={item.name} 
              href={item.href} 
              className="text-sm font-medium hover:text-[#aa771c] transition-colors"
            >
              {item.name}
            </a>
          ))}
          <a href="#contact" className="gold-bg text-black px-6 py-2 rounded-full font-semibold hover:opacity-90 transition-opacity">
            Let's Talk
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full glass shadow-2xl md:hidden"
          >
            <div className="flex flex-col p-6 space-y-4">
              {navItems.map((item) => (
                <a 
                  key={item.name} 
                  href={item.href} 
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium border-b border-white/10 pb-2"
                >
                  {item.name}
                </a>
              ))}
              <a 
                href="#contact" 
                onClick={() => setIsOpen(false)}
                className="gold-bg text-black px-6 py-3 rounded-xl text-center font-bold"
              >
                Let's Talk
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 px-6 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#aa771c]/10 blur-[150px] rounded-full"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#aa771c]/5 blur-[120px] rounded-full"></div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full glass border border-amber-500/20 mb-6">
            <Sparkles size={16} className="text-[#aa771c]" />
            <span className="text-xs font-semibold tracking-widest uppercase text-amber-200">AI & Automation Solution Architect</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-playfair font-black mb-6 leading-tight">
            Building <span className="gold-text">Intelligent</span> Automation
          </h1>
          <p className="text-lg text-gray-400 mb-10 max-w-lg leading-relaxed">
            Architecting the future of enterprise productivity through advanced AI Agents, 
            RPA excellence, and seamless GenAI integrations.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#contact" className="gold-bg text-black px-8 py-4 rounded-full font-bold flex items-center group transition-all">
              Contact Me
              <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#projects" className="px-8 py-4 rounded-full border border-white/20 hover:bg-white/5 transition-all font-semibold">
              View Projects
            </a>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative hidden md:block"
        >
          <div className="relative z-10 w-full max-w-md mx-auto aspect-square overflow-hidden rounded-[2.5rem] border-2 gold-border/30 gold-shadow shadow-2xl">
             <img 
              src="https://media.licdn.com/dms/image/v2/D5603AQGbEw3FtwAs-g/profile-displayphoto-shrink_800_800/B56ZRglIXMGQAc-/0/1736787137788?e=1769040000&v=beta&t=_CC_wXVfjMcRpO9Q7FlM9p0RBtjAcS83DKjLl1F9JKc" 
              alt="Ganesh Bhat" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
            <div className="absolute bottom-6 left-6">
              <p className="font-playfair text-2xl font-bold">Ganesh Bhat</p>
              <p className="text-[#aa771c] text-sm uppercase tracking-widest">Founder, AI Brahma</p>
            </div>
          </div>
          {/* Decorative floating elements */}
          <div className="absolute -top-10 -right-10 glass p-4 rounded-2xl animate-float shadow-xl">
            <div className="text-[#aa771c] font-bold text-xl">10+</div>
            <div className="text-xs text-gray-400 uppercase tracking-tighter">Years Exp</div>
          </div>
          <div className="absolute -bottom-6 -left-10 glass p-4 rounded-2xl animate-float delay-700 shadow-xl">
            <div className="text-[#aa771c] font-bold text-xl">500+</div>
            <div className="text-xs text-gray-400 uppercase tracking-tighter">Automations</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 px-6 bg-[#080808]">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-sm font-bold tracking-[0.2em] uppercase text-[#aa771c]">Expertise & Passion</h2>
            <h3 className="text-4xl md:text-5xl font-playfair font-bold">Leading the AI Transformation</h3>
            <p className="text-gray-400 leading-relaxed text-lg">
              As an experienced AI & Automation professional, I specialize in bridging the gap between 
              complex business challenges and intelligent technological solutions. From Document Automation 
              to cutting-edge GenAI Agents, my mission is to build systems that think, act, and learn.
            </p>
            <p className="text-gray-400 leading-relaxed text-lg">
              Passionate about creating real-world value, I focus on building scalable architectures 
              that leverage RPA (Automation Anywhere) and modern LLM frameworks like Gemini and OpenAI.
            </p>
            <div className="pt-6 grid grid-cols-2 gap-6">
              <div className="p-4 rounded-2xl glass border-l-4 gold-border">
                <h4 className="font-bold text-white mb-1">Agent Builder</h4>
                <p className="text-xs text-gray-500">Autonomous Workflows</p>
              </div>
              <div className="p-4 rounded-2xl glass border-l-4 gold-border">
                <h4 className="font-bold text-white mb-1">RPA Expert</h4>
                <p className="text-xs text-gray-500">Enterprise Scale</p>
              </div>
            </div>
          </motion.div>
          <motion.div 
             initial={{ opacity: 0, x: 50 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="relative"
          >
             <div className="aspect-[4/5] rounded-3xl overflow-hidden glass p-1">
                <img 
                  src="https://picsum.photos/seed/tech/800/1000" 
                  alt="Tech Visualization" 
                  className="w-full h-full object-cover rounded-2xl opacity-60 grayscale hover:grayscale-0 transition-all duration-700"
                />
             </div>
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 gold-bg rounded-full blur-[80px] opacity-20"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-[0.2em] uppercase text-[#aa771c] mb-4">Core Competencies</h2>
          <h3 className="text-4xl font-playfair font-bold">Technological Arsenal</h3>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {SKILLS.map((skill, index) => (
            <motion.div 
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-8 rounded-3xl glass hover:bg-white/5 border border-white/5 transition-all duration-500 flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 gold-bg rounded-2xl flex items-center justify-center text-black mb-6 group-hover:scale-110 transition-transform shadow-lg">
                {skill.icon}
              </div>
              <h4 className="text-xl font-bold mb-2">{skill.name}</h4>
              <p className="text-sm text-gray-500">Strategic implementation of {skill.name.toLowerCase()} for enterprise efficiency.</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6 bg-[#080808]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-sm font-bold tracking-[0.2em] uppercase text-[#aa771c] mb-4">Case Studies</h2>
            <h3 className="text-4xl font-playfair font-bold">Featured Innovations</h3>
          </div>
          <a href="#contact" className="text-[#aa771c] hover:underline flex items-center gap-2">
            Discuss a project <ArrowUpRight size={18} />
          </a>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {PROJECTS.map((project, index) => (
            <motion.div 
              key={project.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative h-[400px] overflow-hidden rounded-3xl"
            >
              <img 
                src={`https://picsum.photos/seed/${project.title.length}/800/600`} 
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-40 group-hover:opacity-60"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent p-10 flex flex-col justify-end">
                <span className="text-[#aa771c] text-xs font-bold tracking-widest uppercase mb-3">{project.category}</span>
                <h4 className="text-3xl font-playfair font-bold mb-4">{project.title}</h4>
                <p className="text-gray-300 line-clamp-2 mb-6 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  {project.description}
                </p>
                <div className="w-12 h-12 gold-bg rounded-full flex items-center justify-center text-black group-hover:scale-110 transition-transform">
                  <ArrowUpRight />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Community = () => {
  return (
    <section id="community" className="py-24 px-6 relative overflow-hidden">
       {/* Background light glow */}
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[40%] bg-[#aa771c]/10 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto text-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="w-24 h-24 mx-auto mb-8 p-1 rounded-2xl gold-bg">
            <div className="w-full h-full bg-black rounded-xl flex items-center justify-center font-playfair text-3xl font-bold gold-text">AB</div>
          </div>
          <h2 className="text-sm font-bold tracking-[0.2em] uppercase text-[#aa771c] mb-4">Founder of AI Brahma</h2>
          <h3 className="text-4xl md:text-5xl font-playfair font-bold mb-8">Empowering the AI Generation</h3>
          <p className="max-w-2xl mx-auto text-gray-400 text-lg mb-12">
            AI Brahma is more than a brand; it's a movement focused on knowledge sharing, 
            YouTube community building, and demystifying complex AI & Automation topics 
            for professionals worldwide.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <a href="https://www.youtube.com/@AIBrahma" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-8 py-4 glass rounded-2xl hover:bg-white/10 transition-all border border-red-600/20">
              <Youtube className="text-red-600" />
              <span className="font-bold">Subscribe to YouTube</span>
            </a>
            <a href="https://www.linkedin.com/company/ai-brahmaai/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-8 py-4 glass rounded-2xl hover:bg-white/10 transition-all border border-blue-600/20">
              <Linkedin className="text-blue-500" />
              <span className="font-bold">Follow on LinkedIn</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Contact = () => {
  const getIcon = (icon: string) => {
    switch(icon) {
      case 'linkedin': return <Linkedin size={20} />;
      case 'linkedin-company': return <Globe size={20} />;
      case 'send': return <SendIcon size={20} />;
      case 'message-circle': return <MessageCircle size={20} />;
      case 'mail': return <Mail size={20} />;
      default: return <ExternalLink size={20} />;
    }
  };

  return (
    <section id="contact" className="py-24 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-[0.2em] uppercase text-[#aa771c] mb-4">Get In Touch</h2>
          <h3 className="text-4xl font-playfair font-bold">Start a Conversation</h3>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SOCIAL_LINKS.map((link, index) => (
            <motion.a 
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-6 rounded-3xl glass border border-white/5 flex items-center space-x-6 hover:gold-shadow hover:scale-[1.02] transition-all"
            >
              <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center group-hover:gold-bg group-hover:text-black transition-all">
                {getIcon(link.icon)}
              </div>
              <div>
                <h4 className="font-bold text-white group-hover:text-[#aa771c] transition-colors">{link.name}</h4>
                <p className="text-xs text-gray-500 truncate max-w-[150px]">{link.label}</p>
              </div>
              <div className="ml-auto text-white/20 group-hover:text-[#aa771c] transition-colors">
                <ArrowUpRight size={20} />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 px-6 bg-black border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-center md:text-left">
          <div className="font-playfair text-2xl font-bold mb-2">AI BRAHMA</div>
          <p className="text-gray-500 text-sm">Empowering Intelligent Automation</p>
        </div>
        
        <div className="flex space-x-6">
          <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:gold-bg hover:text-black transition-all"><Linkedin size={18} /></a>
          <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:gold-bg hover:text-black transition-all"><Youtube size={18} /></a>
          <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:gold-bg hover:text-black transition-all"><SendIcon size={18} /></a>
        </div>

        <div className="text-sm text-gray-500">
          &copy; {new Date().getFullYear()} AI Brahma | Built with <span className="text-[#aa771c]">♥</span> by Ganesh Bhat
        </div>
      </div>
    </footer>
  );
};

// --- CHATBOT COMPONENT ---
interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: 'Hi! I am Ganesh\'s AI assistant. How can I help you today?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setIsLoading(true);

    let aiText = '';
    const webhookUrl = 'https://aibrahma2026.app.n8n.cloud/webhook/df40a69a-ecb8-49f9-9579-8590a6b127c2';

    try {
      // 1. TRY WEBHOOK (Using GET Method as requested)
      const urlWithParams = `${webhookUrl}?message=${encodeURIComponent(userMsg)}`;
      const response = await fetch(urlWithParams, {
        method: 'GET',
        headers: {
          'Accept': 'application/json'
        },
      });

      if (response.ok) {
        const data = await response.json();
        // Parsing logic based on common n8n structures
        aiText = data.output || data.text || data.response || (Array.isArray(data) && data[0]?.output) || (typeof data === 'string' ? data : data.message);
      } else {
        throw new Error(`Webhook responded with status ${response.status}`);
      }
    } catch (error: any) {
      console.warn("Webhook connection failed (GET), falling back to Gemini API...", error);
      
      // 2. FALLBACK TO GEMINI (Ensures the user always gets an answer)
      try {
        const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
        const systemPrompt = `
          You are a professional AI Assistant for Ganesh Bhat, an AI & Automation Solution Architect and Founder of AI Brahma.
          Ganesh's expertise: Automation Anywhere, GenAI, AI Agents, RPA, Document Automation.
          Professional tone: Friendly, expert, and concise.
        `;

        const geminiResponse = await ai.models.generateContent({
          model: 'gemini-3-flash-preview',
          contents: [{ role: 'user', parts: [{ text: `${systemPrompt}\n\nVisitor: ${userMsg}` }] }],
        });

        aiText = geminiResponse.text || "I'm having a bit of trouble connecting to my brain right now. Please try again or reach out to Ganesh on LinkedIn!";
      } catch (geminiError) {
        console.error("Critical: Both webhook and Gemini failed.", geminiError);
        aiText = "System busy. Please try again in a few moments or contact Ganesh directly via the links below.";
      }
    } finally {
      setMessages(prev => [...prev, { role: 'assistant', content: aiText || "I couldn't generate a response. Please try again." }]);
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="absolute bottom-20 right-0 w-[350px] sm:w-[400px] h-[500px] glass rounded-3xl flex flex-col shadow-2xl overflow-hidden border border-white/10"
          >
            <div className="gold-bg p-4 flex justify-between items-center">
              <div className="flex items-center space-x-3 text-black">
                <Bot size={20} className="text-black" />
                <div className="font-bold text-sm tracking-tight">AI Brahma Assistant</div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-black hover:opacity-70 p-1">
                <X size={20} />
              </button>
            </div>

            <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 scroll-smooth">
              {messages.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`flex max-w-[85%] items-end space-x-2 ${msg.role === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${msg.role === 'user' ? 'bg-amber-500/20' : 'bg-white/5 border border-white/10'}`}>
                      {msg.role === 'user' ? <User size={14} className="text-amber-500" /> : <Bot size={14} className="text-[#aa771c]" />}
                    </div>
                    <div className={`p-3 rounded-2xl text-sm leading-relaxed ${
                      msg.role === 'user' 
                      ? 'gold-bg text-black font-medium' 
                      : 'bg-white/5 text-gray-200 border border-white/10'
                    }`}>
                      {msg.content}
                    </div>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="flex max-w-[85%] items-center space-x-2">
                    <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                      <Bot size={14} className="text-[#aa771c]" />
                    </div>
                    <div className="p-3 rounded-2xl bg-white/5 border border-white/10 flex items-center space-x-1">
                      <Loader2 size={16} className="text-[#aa771c] animate-spin" />
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="p-4 border-t border-white/5 bg-black/20">
              <div className="relative">
                <input 
                  type="text" 
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Ask about AI Brahma..."
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-3 text-sm focus:outline-none focus:border-[#aa771c] transition-colors pr-12 text-white placeholder:text-gray-600"
                />
                <button 
                  onClick={handleSend}
                  disabled={isLoading || !input.trim()}
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 gold-bg rounded-xl flex items-center justify-center text-black hover:opacity-80 transition-opacity disabled:opacity-30"
                >
                  <SendIcon size={16} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 ${isOpen ? 'bg-white text-black rotate-90' : 'gold-bg text-black'}`}
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </motion.button>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <div className="bg-[#050505] text-gray-100 min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Community />
      <Contact />
      <Footer />
      <ChatBot />
    </div>
  );
};

export default App;
