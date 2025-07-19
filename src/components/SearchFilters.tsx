import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Filter, X, SlidersHorizontal } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

interface SearchFiltersProps {
  searchQuery: string
  onSearchChange: (query: string) => void
  selectedCategory: string
  onCategoryChange: (category: string) => void
  selectedPricing: string[]
  onPricingChange: (pricing: string[]) => void
  selectedTags: string[]
  onTagsChange: (tags: string[]) => void
  sortBy: string
  onSortChange: (sort: string) => void
  categories: { id: string; name: string }[]
  availableTags: string[]
}

export function SearchFilters({
  searchQuery,
  onSearchChange,
  selectedCategory,
  onCategoryChange,
  selectedPricing,
  onPricingChange,
  selectedTags,
  onTagsChange,
  sortBy,
  onSortChange,
  categories,
  availableTags
}: SearchFiltersProps) {
  const [showFilters, setShowFilters] = useState(false)

  const togglePricing = (pricing: string) => {
    if (selectedPricing.includes(pricing)) {
      onPricingChange(selectedPricing.filter(p => p !== pricing))
    } else {
      onPricingChange([...selectedPricing, pricing])
    }
  }

  const toggleTag = (tag: string) => {
    if (selectedTags.includes(tag)) {
      onTagsChange(selectedTags.filter(t => t !== tag))
    } else {
      onTagsChange([...selectedTags, tag])
    }
  }

  const clearFilters = () => {
    onCategoryChange("")
    onPricingChange([])
    onTagsChange([])
    onSortChange("relevance")
  }

  const activeFiltersCount = 
    (selectedCategory ? 1 : 0) + 
    selectedPricing.length + 
    selectedTags.length + 
    (sortBy !== "relevance" ? 1 : 0)

  return (
    <div className="space-y-4">
      {/* Search Bar */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
        <Input
          placeholder="Search AI tools..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="pl-10 pr-4 py-3 bg-card border-border/50 focus:border-primary/50 transition-colors duration-300"
        />
      </div>

      {/* Filter Toggle */}
      <div className="flex items-center justify-between">
        <Button
          variant="outline"
          onClick={() => setShowFilters(!showFilters)}
          className="gap-2"
        >
          <SlidersHorizontal className="w-4 h-4" />
          Filters
          {activeFiltersCount > 0 && (
            <Badge className="ml-1 h-5 min-w-5 text-xs">
              {activeFiltersCount}
            </Badge>
          )}
        </Button>

        {activeFiltersCount > 0 && (
          <Button
            variant="ghost"
            size="sm"
            onClick={clearFilters}
            className="text-muted-foreground hover:text-foreground"
          >
            <X className="w-4 h-4 mr-1" />
            Clear all
          </Button>
        )}
      </div>

      {/* Filters Panel */}
      {showFilters && (
        <Card className="animate-slide-up bg-card/50 backdrop-blur-sm border-border/50">
          <CardContent className="p-4 space-y-4">
            {/* Category Filter */}
            <div>
              <label className="text-sm font-medium text-card-foreground mb-2 block">
                Category
              </label>
              <Select value={selectedCategory} onValueChange={onCategoryChange}>
                <SelectTrigger>
                  <SelectValue placeholder="All categories" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">All categories</SelectItem>
                  {categories.map((category) => (
                    <SelectItem key={category.id} value={category.id}>
                      {category.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Pricing Filter */}
            <div>
              <label className="text-sm font-medium text-card-foreground mb-2 block">
                Pricing
              </label>
              <div className="flex flex-wrap gap-2">
                {['free', 'freemium', 'paid'].map((pricing) => (
                  <Badge
                    key={pricing}
                    variant={selectedPricing.includes(pricing) ? "default" : "outline"}
                    className="cursor-pointer hover:scale-105 transition-transform duration-200"
                    onClick={() => togglePricing(pricing)}
                  >
                    {pricing}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Tags Filter */}
            <div>
              <label className="text-sm font-medium text-card-foreground mb-2 block">
                Popular Tags
              </label>
              <div className="flex flex-wrap gap-2 max-h-24 overflow-y-auto">
                {availableTags.slice(0, 12).map((tag) => (
                  <Badge
                    key={tag}
                    variant={selectedTags.includes(tag) ? "default" : "outline"}
                    className="cursor-pointer hover:scale-105 transition-transform duration-200"
                    onClick={() => toggleTag(tag)}
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Sort Options */}
            <div>
              <label className="text-sm font-medium text-card-foreground mb-2 block">
                Sort by
              </label>
              <Select value={sortBy} onValueChange={onSortChange}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="relevance">Relevance</SelectItem>
                  <SelectItem value="rating">Rating</SelectItem>
                  <SelectItem value="popularity">Popularity</SelectItem>
                  <SelectItem value="newest">Newest</SelectItem>
                  <SelectItem value="name">Name A-Z</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Active Filters Display */}
      {(selectedPricing.length > 0 || selectedTags.length > 0 || selectedCategory) && (
        <div className="flex flex-wrap gap-2">
          {selectedCategory && (
            <Badge variant="secondary" className="gap-1">
              {categories.find(c => c.id === selectedCategory)?.name}
              <X 
                className="w-3 h-3 cursor-pointer hover:text-destructive" 
                onClick={() => onCategoryChange("")}
              />
            </Badge>
          )}
          {selectedPricing.map((pricing) => (
            <Badge key={pricing} variant="secondary" className="gap-1">
              {pricing}
              <X 
                className="w-3 h-3 cursor-pointer hover:text-destructive" 
                onClick={() => togglePricing(pricing)}
              />
            </Badge>
          ))}
          {selectedTags.map((tag) => (
            <Badge key={tag} variant="secondary" className="gap-1">
              {tag}
              <X 
                className="w-3 h-3 cursor-pointer hover:text-destructive" 
                onClick={() => toggleTag(tag)}
              />
            </Badge>
          ))}
        </div>
      )}
    </div>
  )
}