import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { ExternalLink, Star, Users, Calendar, Github, BookOpen } from "lucide-react"

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
  fullDescription?: string
  features?: string[]
  useCases?: string[]
  github?: string
  documentation?: string
  createdAt?: string
}

interface ToolModalProps {
  tool: Tool | null
  isOpen: boolean
  onClose: () => void
}

export function ToolModal({ tool, isOpen, onClose }: ToolModalProps) {
  if (!tool) return null

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto bg-gradient-card border-border/50">
        <DialogHeader>
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <DialogTitle className="text-2xl font-bold text-card-foreground mb-2">
                {tool.name}
              </DialogTitle>
              <p className="text-muted-foreground text-lg">
                {tool.description}
              </p>
            </div>
            {tool.featured && (
              <Badge className="bg-accent text-accent-foreground shadow-glow">
                <Star className="w-3 h-3 mr-1 fill-current" />
                Featured
              </Badge>
            )}
          </div>
        </DialogHeader>

        <div className="space-y-6 mt-6">
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Card className="bg-card/50 border-border/50">
              <CardContent className="p-4 text-center">
                <Star className="w-5 h-5 text-yellow-400 mx-auto mb-1 fill-current" />
                <div className="text-lg font-semibold text-card-foreground">{tool.rating}</div>
                <div className="text-xs text-muted-foreground">Rating</div>
              </CardContent>
            </Card>
            <Card className="bg-card/50 border-border/50">
              <CardContent className="p-4 text-center">
                <Users className="w-5 h-5 text-primary mx-auto mb-1" />
                <div className="text-lg font-semibold text-card-foreground">{tool.users}</div>
                <div className="text-xs text-muted-foreground">Users</div>
              </CardContent>
            </Card>
            <Card className="bg-card/50 border-border/50">
              <CardContent className="p-4 text-center">
                <div className={`w-5 h-5 mx-auto mb-1 rounded-full ${
                  tool.pricing === 'free' ? 'bg-success' : 
                  tool.pricing === 'freemium' ? 'bg-warning' : 'bg-primary'
                }`} />
                <div className="text-lg font-semibold text-card-foreground capitalize">{tool.pricing}</div>
                <div className="text-xs text-muted-foreground">Pricing</div>
              </CardContent>
            </Card>
            <Card className="bg-card/50 border-border/50">
              <CardContent className="p-4 text-center">
                <Calendar className="w-5 h-5 text-secondary mx-auto mb-1" />
                <div className="text-lg font-semibold text-card-foreground">{tool.createdAt || '2024'}</div>
                <div className="text-xs text-muted-foreground">Created</div>
              </CardContent>
            </Card>
          </div>

          {/* Full Description */}
          {tool.fullDescription && (
            <Card className="bg-card/50 border-border/50">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-card-foreground mb-3">About</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {tool.fullDescription}
                </p>
              </CardContent>
            </Card>
          )}

          {/* Features */}
          {tool.features && tool.features.length > 0 && (
            <Card className="bg-card/50 border-border/50">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-card-foreground mb-3">Key Features</h3>
                <ul className="space-y-2">
                  {tool.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2 text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          )}

          {/* Use Cases */}
          {tool.useCases && tool.useCases.length > 0 && (
            <Card className="bg-card/50 border-border/50">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-card-foreground mb-3">Use Cases</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {tool.useCases.map((useCase, index) => (
                    <div key={index} className="p-3 bg-muted/20 rounded-lg text-muted-foreground">
                      {useCase}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {/* Tags */}
          <Card className="bg-card/50 border-border/50">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold text-card-foreground mb-3">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {tool.tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="text-sm">
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-3 pt-4">
            <Button 
              size="lg" 
              onClick={() => window.open(tool.website, '_blank')}
              className="gap-2"
            >
              <ExternalLink className="w-4 h-4" />
              Visit Website
            </Button>
            
            {tool.github && (
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => window.open(tool.github, '_blank')}
                className="gap-2"
              >
                <Github className="w-4 h-4" />
                GitHub
              </Button>
            )}
            
            {tool.documentation && (
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => window.open(tool.documentation, '_blank')}
                className="gap-2"
              >
                <BookOpen className="w-4 h-4" />
                Documentation
              </Button>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}