
import React from 'react';
import { 
  Bot, 
  Cpu, 
  Layers, 
  Workflow, 
  Code, 
  BrainCircuit, 
  Linkedin, 
  Send, 
  MessageCircle, 
  Mail, 
  ExternalLink,
  Youtube
} from 'lucide-react';
import { Project, SocialLink } from './types';

export const PROJECTS: Project[] = [
  {
    title: "AI Agent for Customer Support",
    description: "Multi-layered agentic workflow for autonomous customer inquiry resolution with sentiment analysis.",
    category: "AI Agents"
  },
  {
    title: "Onboarding Assistant Automation",
    description: "End-to-end employee onboarding automation using RPA & Document Intelligence.",
    category: "RPA / Workflow"
  },
  {
    title: "AI-Driven Incident Management",
    description: "Predictive maintenance and automated ticket resolution agent for enterprise IT environments.",
    category: "Solution Architecture"
  },
  {
    title: "AI Adjudication System",
    description: "Complex review handling and decision-making system powered by GenAI and custom knowledge bases.",
    category: "Intelligent Automation"
  }
];

export const SKILLS = [
  { name: "Automation Anywhere", icon: <Workflow className="w-6 h-6" /> },
  { name: "AI Agents & GenAI", icon: <BrainCircuit className="w-6 h-6" /> },
  { name: "RPA & Intelligent Automation", icon: <Bot className="w-6 h-6" /> },
  { name: "Document Automation", icon: <Layers className="w-6 h-6" /> },
  { name: "Azure AI / Google Gemini", icon: <Cpu className="w-6 h-6" /> },
  { name: "API Integrations", icon: <Code className="w-6 h-6" /> }
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: "LinkedIn (Personal)",
    url: "https://www.linkedin.com/in/ganeshdhogale/",
    icon: "linkedin",
    label: "Professional Profile"
  },
  {
    name: "LinkedIn (AI Brahma)",
    url: "https://www.linkedin.com/company/ai-brahmaai/",
    icon: "linkedin-company",
    label: "Company Page"
  },
  {
    name: "Telegram",
    url: "https://t.me/+04iV7x2panI2Njc1",
    icon: "send",
    label: "@ganesh_bhat"
  },
  {
    name: "WhatsApp",
    url: "https://wa.me/message/5B3COVB4TXWHO1",
    icon: "message-circle",
    label: "Quick Chat"
  },
  {
    name: "Email",
    url: "mailto:ai.brahmabusiness@gmail.com",
    icon: "mail",
    label: "ai.brahmabusiness@gmail.com"
  }
];
