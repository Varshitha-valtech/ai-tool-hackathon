import { useState, useMemo } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Sparkles, Zap, Star, TrendingUp } from "lucide-react"
import { CategoryCard } from "@/components/CategoryCard"
import { ToolCard } from "@/components/ToolCard"
import { SearchFilters } from "@/components/SearchFilters"
import { ToolModal } from "@/components/ToolModal"
import { SubmitToolModal } from "@/components/SubmitToolModal"
import { categories, tools, getFeaturedTools, getAllTags, searchTools, type Tool } from "@/data/aiTools"

const Index = () => {
  const [selectedTool, setSelectedTool] = useState<Tool | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isSubmitModalOpen, setIsSubmitModalOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("")
  const [selectedPricing, setSelectedPricing] = useState<string[]>([])
  const [selectedTags, setSelectedTags] = useState<string[]>([])
  const [sortBy, setSortBy] = useState("relevance")
  const [currentView, setCurrentView] = useState<'home' | 'category' | 'search'>('home')

  const featuredTools = getFeaturedTools()
  const availableTags = getAllTags()

  const filteredTools = useMemo(() => {
    return searchTools(searchQuery, {
      category: selectedCategory,
      pricing: selectedPricing,
      tags: selectedTags,
      sortBy
    })
  }, [searchQuery, selectedCategory, selectedPricing, selectedTags, sortBy])

  const handleCategoryClick = (categoryId: string) => {
    setSelectedCategory(categoryId)
    setCurrentView('category')
    setSearchQuery("")
  }

  const handleToolClick = (tool: Tool) => {
    setSelectedTool(tool)
    setIsModalOpen(true)
  }

  const handleSearch = () => {
    setCurrentView('search')
  }

  const handleBackToHome = () => {
    setCurrentView('home')
    setSearchQuery("")
    setSelectedCategory("")
    setSelectedPricing([])
    setSelectedTags([])
    setSortBy("relevance")
  }

  const isFiltered = searchQuery || selectedCategory || selectedPricing.length > 0 || selectedTags.length > 0

  return (
    <div className="min-h-screen bg-gradient-hero">
      {/* Header */}
      <header className="border-b border-border/50 bg-card/30 backdrop-blur-sm sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div 
              className="flex items-center gap-3 cursor-pointer group"
              onClick={handleBackToHome}
            >
              <div className="p-2 rounded-lg bg-gradient-primary">
                <Sparkles className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  AI Tools Hub
                </h1>
                <p className="text-xs text-muted-foreground">Discover the best AI tools</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <Badge variant="outline" className="hidden md:flex">
                {tools.length}+ Tools
              </Badge>
              <Button variant="glow" size="sm" onClick={() => setIsSubmitModalOpen(true)}>
                Submit Tool
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {currentView === 'home' && (
          <>
            {/* Hero Section */}
            <section className="text-center py-16 mb-16">
              <div className="max-w-4xl mx-auto">
                <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 animate-fade-in">
                  Discover the Best
                  <span className="bg-gradient-primary bg-clip-text text-transparent"> AI Tools</span>
                </h1>
                <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed animate-slide-up">
                  Explore our curated collection of cutting-edge AI tools across categories. 
                  Find the perfect solution for your creative and professional needs.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in">
                  <Button size="xl" className="gap-2" onClick={() => setCurrentView('search')}>
                    <Zap className="w-5 h-5" />
                    Explore Tools
                  </Button>
                  <Button variant="glass" size="xl" className="gap-2">
                    <TrendingUp className="w-5 h-5" />
                    View Trending
                  </Button>
                </div>
              </div>
            </section>

            {/* Featured Tools */}
            <section className="mb-16">
              <div className="flex items-center gap-3 mb-8">
                <Star className="w-6 h-6 text-yellow-400 fill-current" />
                <h2 className="text-3xl font-bold text-foreground">Featured Tools</h2>
                <Badge className="bg-accent text-accent-foreground">Trending</Badge>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {featuredTools.map((tool, index) => (
                  <div 
                    key={tool.id} 
                    style={{ animationDelay: `${index * 100}ms` }}
                    className="animate-fade-in"
                  >
                    <ToolCard tool={tool} onViewDetails={handleToolClick} />
                  </div>
                ))}
              </div>
            </section>

            {/* Categories */}
            <section>
              <div className="flex items-center gap-3 mb-8">
                <Sparkles className="w-6 h-6 text-primary" />
                <h2 className="text-3xl font-bold text-foreground">Browse Categories</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {categories.map((category, index) => (
                  <div 
                    key={category.id}
                    style={{ animationDelay: `${index * 100}ms` }}
                    className="animate-scale-in"
                  >
                    <CategoryCard 
                      category={category} 
                      onClick={handleCategoryClick} 
                    />
                  </div>
                ))}
              </div>
            </section>
          </>
        )}

        {(currentView === 'search' || currentView === 'category') && (
          <>
            {/* Search Header */}
            <div className="mb-8">
              <div className="flex items-center gap-4 mb-6">
                <Button variant="ghost" onClick={handleBackToHome}>
                  ← Back to Home
                </Button>
                <div>
                  <h1 className="text-3xl font-bold text-foreground">
                    {currentView === 'category' && selectedCategory 
                      ? categories.find(c => c.id === selectedCategory)?.name 
                      : 'Discover AI Tools'
                    }
                  </h1>
                  <p className="text-muted-foreground">
                    {isFiltered 
                      ? `${filteredTools.length} tools found`
                      : `Browse ${tools.length}+ AI tools`
                    }
                  </p>
                </div>
              </div>

              <SearchFilters
                searchQuery={searchQuery}
                onSearchChange={(query) => {
                  setSearchQuery(query)
                  if (query) setCurrentView('search')
                }}
                selectedCategory={selectedCategory}
                onCategoryChange={setSelectedCategory}
                selectedPricing={selectedPricing}
                onPricingChange={setSelectedPricing}
                selectedTags={selectedTags}
                onTagsChange={setSelectedTags}
                sortBy={sortBy}
                onSortChange={setSortBy}
                categories={categories}
                availableTags={availableTags}
              />
            </div>

            {/* Tools Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredTools.map((tool, index) => (
                <div 
                  key={tool.id}
                  style={{ animationDelay: `${index * 50}ms` }}
                  className="animate-fade-in"
                >
                  <ToolCard tool={tool} onViewDetails={handleToolClick} />
                </div>
              ))}
            </div>

            {filteredTools.length === 0 && (
              <div className="text-center py-16">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-xl font-semibold text-foreground mb-2">No tools found</h3>
                <p className="text-muted-foreground mb-4">
                  Try adjusting your search or filters to find what you're looking for.
                </p>
                <Button 
                  variant="outline" 
                  onClick={() => {
                    setSearchQuery("")
                    setSelectedCategory("")
                    setSelectedPricing([])
                    setSelectedTags([])
                  }}
                >
                  Clear Filters
                </Button>
              </div>
            )}
          </>
        )}
      </main>

      {/* Tool Modal */}
      <ToolModal 
        tool={selectedTool}
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false)
          setSelectedTool(null)
        }}
      />

      {/* Submit Tool Modal */}
      <SubmitToolModal 
        isOpen={isSubmitModalOpen}
        onClose={() => setIsSubmitModalOpen(false)}
      />

      {/* Footer */}
      <footer className="border-t border-border/50 bg-card/30 backdrop-blur-sm mt-20">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <p className="text-muted-foreground">
              Built with ❤️ for the AI community
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              Discover, compare, and find the perfect AI tools for your needs
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
