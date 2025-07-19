import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Star, Users } from "lucide-react"

interface Tool {
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
}

interface ToolCardProps {
  tool: Tool
  onViewDetails: (tool: Tool) => void
}

export function ToolCard({ tool, onViewDetails }: ToolCardProps) {
  return (
    <Card className="group relative overflow-hidden bg-gradient-card border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-elegant hover:-translate-y-1 animate-fade-in">
      {tool.featured && (
        <div className="absolute top-3 right-3 z-10">
          <Badge className="bg-accent text-accent-foreground shadow-glow">
            <Star className="w-3 h-3 mr-1 fill-current" />
            Featured
          </Badge>
        </div>
      )}
      
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <CardTitle className="text-lg font-semibold text-card-foreground group-hover:text-primary transition-colors duration-300">
              {tool.name}
            </CardTitle>
            <CardDescription className="text-sm text-muted-foreground mt-1">
              {tool.description}
            </CardDescription>
          </div>
        </div>
        
        <div className="flex items-center gap-4 text-xs text-muted-foreground mt-2">
          <div className="flex items-center gap-1">
            <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
            <span>{tool.rating}</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="w-3 h-3" />
            <span>{tool.users}</span>
          </div>
          <Badge 
            variant={tool.pricing === 'free' ? 'secondary' : tool.pricing === 'freemium' ? 'outline' : 'default'}
            className="text-xs"
          >
            {tool.pricing}
          </Badge>
        </div>
      </CardHeader>
      
      <CardContent className="pt-0">
        <div className="flex flex-wrap gap-1 mb-4">
          {tool.tags.slice(0, 3).map((tag) => (
            <Badge key={tag} variant="outline" className="text-xs px-2 py-1">
              {tag}
            </Badge>
          ))}
          {tool.tags.length > 3 && (
            <Badge variant="outline" className="text-xs px-2 py-1">
              +{tool.tags.length - 3}
            </Badge>
          )}
        </div>
        
        <div className="flex gap-2">
          <Button 
            size="sm" 
            className="flex-1"
            onClick={() => onViewDetails(tool)}
          >
            View Details
          </Button>
          <Button 
            size="sm" 
            variant="outline"
            onClick={() => window.open(tool.website, '_blank')}
          >
            <ExternalLink className="w-3 h-3" />
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}