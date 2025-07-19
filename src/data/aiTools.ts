import { Brain, MessageSquare, Image, Code, Music, FileText, Video, BarChart, Zap, Bot, Palette, Search } from "lucide-react"

export interface Tool {
  id: string
  name: string
  description: string
  category: string
  tags: string[]
  website: string
  pricing: 'free' | 'freemium' | 'paid'
  rating: number
  users: string
  featured?: boolean
  fullDescription?: string
  features?: string[]
  useCases?: string[]
  github?: string
  documentation?: string
  createdAt?: string
}

export interface Category {
  id: string
  name: string
  description: string
  icon: any
  toolCount: number
  gradient: string
}

export const categories: Category[] = [
  {
    id: 'chatbots',
    name: 'AI Chatbots',
    description: 'Conversational AI assistants and chat interfaces',
    icon: MessageSquare,
    toolCount: 12,
    gradient: 'bg-gradient-to-br from-blue-500/20 to-purple-500/20'
  },
  {
    id: 'image-generation',
    name: 'Image Generation',
    description: 'AI-powered image creation and editing tools',
    icon: Image,
    toolCount: 8,
    gradient: 'bg-gradient-to-br from-pink-500/20 to-orange-500/20'
  },
  {
    id: 'code-assistants',
    name: 'Code Assistants',
    description: 'AI tools for coding, debugging, and development',
    icon: Code,
    toolCount: 15,
    gradient: 'bg-gradient-to-br from-green-500/20 to-teal-500/20'
  },
  {
    id: 'content-writing',
    name: 'Content Writing',
    description: 'AI writing assistants and content generators',
    icon: FileText,
    toolCount: 10,
    gradient: 'bg-gradient-to-br from-yellow-500/20 to-red-500/20'
  },
  {
    id: 'music-audio',
    name: 'Music & Audio',
    description: 'AI tools for music generation and audio processing',
    icon: Music,
    toolCount: 6,
    gradient: 'bg-gradient-to-br from-purple-500/20 to-indigo-500/20'
  },
  {
    id: 'video-editing',
    name: 'Video Editing',
    description: 'AI-powered video creation and editing platforms',
    icon: Video,
    toolCount: 7,
    gradient: 'bg-gradient-to-br from-red-500/20 to-pink-500/20'
  },
  {
    id: 'analytics',
    name: 'Analytics & Data',
    description: 'AI tools for data analysis and business intelligence',
    icon: BarChart,
    toolCount: 9,
    gradient: 'bg-gradient-to-br from-cyan-500/20 to-blue-500/20'
  },
  {
    id: 'automation',
    name: 'Automation',
    description: 'AI-powered workflow and process automation',
    icon: Zap,
    toolCount: 11,
    gradient: 'bg-gradient-to-br from-orange-500/20 to-yellow-500/20'
  }
]

export const tools: Tool[] = [
  // AI Chatbots
  {
    id: '1',
    name: 'ChatGPT',
    description: 'Advanced conversational AI assistant by OpenAI',
    category: 'chatbots',
    tags: ['conversation', 'writing', 'coding', 'general-purpose'],
    website: 'https://chat.openai.com',
    pricing: 'freemium',
    rating: 4.8,
    users: '100M+',
    featured: true,
    fullDescription: 'ChatGPT is a cutting-edge conversational AI developed by OpenAI. It can assist with a wide range of tasks including writing, coding, analysis, creative projects, and general conversation.',
    features: [
      'Natural language conversation',
      'Code generation and debugging',
      'Creative writing assistance',
      'Data analysis and interpretation',
      'Multiple language support',
      'Context-aware responses'
    ],
    useCases: [
      'Customer support automation',
      'Content creation',
      'Programming assistance',
      'Research and analysis',
      'Educational tutoring',
      'Creative brainstorming'
    ],
    createdAt: '2022'
  },
  {
    id: '2',
    name: 'Claude',
    description: 'AI assistant by Anthropic focused on helpful, harmless, and honest interactions',
    category: 'chatbots',
    tags: ['conversation', 'writing', 'analysis', 'safety'],
    website: 'https://claude.ai',
    pricing: 'freemium',
    rating: 4.7,
    users: '10M+',
    fullDescription: 'Claude is an AI assistant created by Anthropic to be helpful, harmless, and honest. It excels at complex reasoning, analysis, and creative tasks while maintaining strong safety measures.',
    features: [
      'Long-form document analysis',
      'Creative writing and editing',
      'Complex reasoning tasks',
      'Code review and programming help',
      'Research assistance',
      'Safe and responsible AI interactions'
    ],
    createdAt: '2022'
  },

  // Image Generation
  {
    id: '3',
    name: 'Midjourney',
    description: 'AI art generator creating stunning images from text prompts',
    category: 'image-generation',
    tags: ['art', 'design', 'creative', 'illustration'],
    website: 'https://midjourney.com',
    pricing: 'paid',
    rating: 4.9,
    users: '15M+',
    featured: true,
    fullDescription: 'Midjourney is an independent research lab that produces a proprietary artificial intelligence program that creates images from textual descriptions.',
    features: [
      'High-quality image generation',
      'Artistic style variations',
      'Discord-based interface',
      'Community sharing',
      'Style customization',
      'Upscaling capabilities'
    ],
    useCases: [
      'Digital art creation',
      'Concept art for games/films',
      'Marketing materials',
      'Book illustrations',
      'Social media content',
      'Graphic design inspiration'
    ],
    createdAt: '2022'
  },
  {
    id: '4',
    name: 'DALL-E 3',
    description: 'OpenAI\'s advanced image generation model',
    category: 'image-generation',
    tags: ['art', 'design', 'creative', 'openai'],
    website: 'https://openai.com/dall-e-3',
    pricing: 'paid',
    rating: 4.6,
    users: '5M+',
    fullDescription: 'DALL-E 3 is the latest iteration of OpenAI\'s image generation model, offering improved prompt adherence and image quality.',
    features: [
      'Text-to-image generation',
      'High resolution outputs',
      'Prompt adherence',
      'Style diversity',
      'Safety filtering',
      'Integration with ChatGPT'
    ],
    createdAt: '2023'
  },

  // Code Assistants
  {
    id: '5',
    name: 'GitHub Copilot',
    description: 'AI pair programmer that helps you write code faster',
    category: 'code-assistants',
    tags: ['coding', 'programming', 'autocomplete', 'github'],
    website: 'https://github.com/features/copilot',
    pricing: 'paid',
    rating: 4.5,
    users: '1M+',
    featured: true,
    fullDescription: 'GitHub Copilot is an AI pair programmer that offers autocomplete-style suggestions as you code.',
    features: [
      'Code completion',
      'Function generation',
      'Multiple language support',
      'IDE integration',
      'Context-aware suggestions',
      'Documentation generation'
    ],
    useCases: [
      'Faster code development',
      'Learning new programming languages',
      'Boilerplate code generation',
      'Bug fixing assistance',
      'Code documentation',
      'Algorithm implementation'
    ],
    github: 'https://github.com/github/copilot',
    createdAt: '2021'
  },
  {
    id: '6',
    name: 'Cursor',
    description: 'AI-first code editor built for pair programming with AI',
    category: 'code-assistants',
    tags: ['coding', 'editor', 'ai-native', 'productivity'],
    website: 'https://cursor.sh',
    pricing: 'freemium',
    rating: 4.7,
    users: '500K+',
    fullDescription: 'Cursor is the AI-first code editor designed for pair programming with AI. Built to make you extraordinarily productive.',
    features: [
      'AI-powered code editing',
      'Natural language commands',
      'Codebase understanding',
      'Real-time collaboration',
      'Multi-file editing',
      'Advanced code intelligence'
    ],
    createdAt: '2023'
  },

  // Content Writing
  {
    id: '7',
    name: 'Jasper',
    description: 'AI writing assistant for marketing teams and content creators',
    category: 'content-writing',
    tags: ['writing', 'marketing', 'content', 'copywriting'],
    website: 'https://jasper.ai',
    pricing: 'paid',
    rating: 4.4,
    users: '100K+',
    fullDescription: 'Jasper is an AI content platform that helps your team create high-quality content faster.',
    features: [
      'Long-form content creation',
      'Marketing copy generation',
      'Brand voice customization',
      'Template library',
      'Team collaboration',
      'SEO optimization'
    ],
    useCases: [
      'Blog post writing',
      'Social media content',
      'Email marketing',
      'Product descriptions',
      'Ad copy creation',
      'Content strategy'
    ],
    createdAt: '2021'
  },

  // Music & Audio
  {
    id: '8',
    name: 'Suno',
    description: 'AI music generator that creates songs from text prompts',
    category: 'music-audio',
    tags: ['music', 'generation', 'creative', 'audio'],
    website: 'https://suno.ai',
    pricing: 'freemium',
    rating: 4.3,
    users: '2M+',
    fullDescription: 'Suno is building a future where anyone can make great music. No instruments needed, just imagination.',
    features: [
      'Text-to-music generation',
      'Multiple genres support',
      'Lyric generation',
      'High-quality audio output',
      'Custom style creation',
      'Collaborative features'
    ],
    useCases: [
      'Music production',
      'Podcast intros',
      'Background music',
      'Jingles and ads',
      'Educational content',
      'Personal entertainment'
    ],
    createdAt: '2023'
  },

  // Video Editing
  {
    id: '9',
    name: 'Runway ML',
    description: 'AI-powered creative suite for video editing and generation',
    category: 'video-editing',
    tags: ['video', 'editing', 'generation', 'creative'],
    website: 'https://runwayml.com',
    pricing: 'freemium',
    rating: 4.6,
    users: '1M+',
    fullDescription: 'Runway is an applied AI research company shaping the next era of art, entertainment and human creativity.',
    features: [
      'Text-to-video generation',
      'Video editing tools',
      'Background removal',
      'Style transfer',
      'Motion graphics',
      'Collaborative workspace'
    ],
    useCases: [
      'Content creation',
      'Film production',
      'Social media videos',
      'Marketing materials',
      'Educational content',
      'Art projects'
    ],
    createdAt: '2018'
  },

  // Analytics & Data
  {
    id: '10',
    name: 'Julius AI',
    description: 'AI data analyst that helps you analyze and visualize data',
    category: 'analytics',
    tags: ['data', 'analysis', 'visualization', 'business'],
    website: 'https://julius.ai',
    pricing: 'freemium',
    rating: 4.2,
    users: '50K+',
    fullDescription: 'Julius AI is your expert data analyst. Chat with your data and get insights in seconds.',
    features: [
      'Natural language data queries',
      'Automated visualizations',
      'Statistical analysis',
      'Data cleaning',
      'Report generation',
      'Multiple data format support'
    ],
    useCases: [
      'Business intelligence',
      'Market research',
      'Performance tracking',
      'Data exploration',
      'Automated reporting',
      'Trend analysis'
    ],
    createdAt: '2023'
  },

  // Additional tools to reach good variety
  {
    id: '11',
    name: 'Notion AI',
    description: 'AI writing assistant integrated into Notion workspace',
    category: 'content-writing',
    tags: ['writing', 'productivity', 'workspace', 'organization'],
    website: 'https://notion.so/ai',
    pricing: 'freemium',
    rating: 4.3,
    users: '30M+',
    fullDescription: 'Notion AI helps you write, think, and work faster in your Notion workspace.',
    features: [
      'Integrated writing assistance',
      'Content generation',
      'Summarization',
      'Translation',
      'Brainstorming support',
      'Workspace integration'
    ],
    createdAt: '2023'
  },
  {
    id: '12',
    name: 'Stable Diffusion',
    description: 'Open-source AI image generator with customizable models',
    category: 'image-generation',
    tags: ['open-source', 'customizable', 'art', 'free'],
    website: 'https://stability.ai',
    pricing: 'free',
    rating: 4.4,
    users: '5M+',
    fullDescription: 'Stable Diffusion is a latent text-to-image diffusion model capable of generating photo-realistic images.',
    features: [
      'Open-source model',
      'Local installation',
      'Custom training',
      'Multiple interfaces',
      'Community extensions',
      'Commercial use allowed'
    ],
    github: 'https://github.com/Stability-AI/stablediffusion',
    createdAt: '2022'
  }
]

// Helper functions
export const getToolsByCategory = (categoryId: string): Tool[] => {
  return tools.filter(tool => tool.category === categoryId)
}

export const getFeaturedTools = (): Tool[] => {
  return tools.filter(tool => tool.featured)
}

export const getAllTags = (): string[] => {
  const allTags = tools.flatMap(tool => tool.tags)
  return Array.from(new Set(allTags)).sort()
}

export const searchTools = (query: string, filters: {
  category?: string
  pricing?: string[]
  tags?: string[]
  sortBy?: string
}): Tool[] => {
  let filteredTools = tools

  // Search query
  if (query) {
    const searchTerm = query.toLowerCase()
    filteredTools = filteredTools.filter(tool => 
      tool.name.toLowerCase().includes(searchTerm) ||
      tool.description.toLowerCase().includes(searchTerm) ||
      tool.tags.some(tag => tag.toLowerCase().includes(searchTerm))
    )
  }

  // Category filter
  if (filters.category) {
    filteredTools = filteredTools.filter(tool => tool.category === filters.category)
  }

  // Pricing filter
  if (filters.pricing && filters.pricing.length > 0) {
    filteredTools = filteredTools.filter(tool => filters.pricing!.includes(tool.pricing))
  }

  // Tags filter
  if (filters.tags && filters.tags.length > 0) {
    filteredTools = filteredTools.filter(tool => 
      filters.tags!.some(tag => tool.tags.includes(tag))
    )
  }

  // Sorting
  switch (filters.sortBy) {
    case 'rating':
      filteredTools.sort((a, b) => b.rating - a.rating)
      break
    case 'popularity':
      filteredTools.sort((a, b) => {
        const aUsers = parseInt(a.users.replace(/[^\d]/g, ''))
        const bUsers = parseInt(b.users.replace(/[^\d]/g, ''))
        return bUsers - aUsers
      })
      break
    case 'newest':
      filteredTools.sort((a, b) => (b.createdAt || '').localeCompare(a.createdAt || ''))
      break
    case 'name':
      filteredTools.sort((a, b) => a.name.localeCompare(b.name))
      break
    default:
      // Featured first, then by rating
      filteredTools.sort((a, b) => {
        if (a.featured && !b.featured) return -1
        if (!a.featured && b.featured) return 1
        return b.rating - a.rating
      })
  }

  return filteredTools
}