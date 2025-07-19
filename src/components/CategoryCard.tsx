import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { LucideIcon } from "lucide-react"

interface Category {
  id: string
  name: string
  description: string
  icon: LucideIcon
  toolCount: number
  gradient: string
}

interface CategoryCardProps {
  category: Category
  onClick: (categoryId: string) => void
}

export function CategoryCard({ category, onClick }: CategoryCardProps) {
  const IconComponent = category.icon

  return (
    <Card 
      className="group relative overflow-hidden cursor-pointer bg-gradient-card border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-elegant hover:-translate-y-2 animate-scale-in"
      onClick={() => onClick(category.id)}
    >
      <div 
        className={`absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-300 ${category.gradient}`}
      />
      
      <CardHeader className="relative z-10 pb-3">
        <div className="flex items-center justify-between">
          <div className={`p-3 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 border border-primary/20`}>
            <IconComponent className="w-6 h-6 text-primary" />
          </div>
          <Badge variant="secondary" className="text-xs">
            {category.toolCount} tools
          </Badge>
        </div>
      </CardHeader>
      
      <CardContent className="relative z-10 pt-0">
        <CardTitle className="text-lg font-semibold text-card-foreground group-hover:text-primary transition-colors duration-300 mb-2">
          {category.name}
        </CardTitle>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {category.description}
        </p>
      </CardContent>
      
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
    </Card>
  )
}