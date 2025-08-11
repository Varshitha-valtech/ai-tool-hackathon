import { useState } from "react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { X, Plus } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { categories } from "@/data/aiTools"

interface SubmitToolModalProps {
  isOpen: boolean
  onClose: () => void
}

export function SubmitToolModal({ isOpen, onClose }: SubmitToolModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    category: "",
    website: "",
    pricing: "",
    submitterEmail: "",
    submitterName: "",
    tagInput: ""
  })
  const [tags, setTags] = useState<string[]>([])
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleAddTag = () => {
    const tag = formData.tagInput.trim()
    if (tag && !tags.includes(tag) && tags.length < 8) {
      setTags(prev => [...prev, tag])
      setFormData(prev => ({ ...prev, tagInput: "" }))
    }
  }

  const handleRemoveTag = (tagToRemove: string) => {
    setTags(prev => prev.filter(tag => tag !== tagToRemove))
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      handleAddTag()
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Validate required fields
    if (!formData.name || !formData.description || !formData.category || !formData.website || !formData.pricing) {
      toast({
        title: "Missing Required Fields",
        description: "Please fill in all required fields marked with *",
        variant: "destructive"
      })
      setIsSubmitting(false)
      return
    }

    // Simulate API submission
    try {
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      toast({
        title: "Tool Submitted Successfully!",
        description: "Thank you for your submission. We'll review it and add it to our directory soon.",
      })
      
      // Reset form
      setFormData({
        name: "",
        description: "",
        category: "",
        website: "",
        pricing: "",
        submitterEmail: "",
        submitterName: "",
        tagInput: ""
      })
      setTags([])
      onClose()
    } catch (error) {
      toast({
        title: "Submission Failed",
        description: "Something went wrong. Please try again later.",
        variant: "destructive"
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-foreground">Submit New AI Tool</DialogTitle>
          <DialogDescription className="text-muted-foreground">
            Help grow our AI tools directory by submitting your favorite tools. All submissions are reviewed before publication.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Tool Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Tool Information</h3>
            
            <div className="space-y-2">
              <Label htmlFor="name">Tool Name *</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                placeholder="e.g. ChatGPT, Midjourney, Claude"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Description *</Label>
              <Textarea
                id="description"
                value={formData.description}
                onChange={(e) => handleInputChange('description', e.target.value)}
                placeholder="Brief description of what the tool does and its main features..."
                rows={3}
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="category">Category *</Label>
                <Select value={formData.category} onValueChange={(value) => handleInputChange('category', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category.id} value={category.id}>
                        {category.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="pricing">Pricing Model *</Label>
                <Select value={formData.pricing} onValueChange={(value) => handleInputChange('pricing', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select pricing" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="free">Free</SelectItem>
                    <SelectItem value="freemium">Freemium</SelectItem>
                    <SelectItem value="paid">Paid</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="website">Website URL *</Label>
              <Input
                id="website"
                type="url"
                value={formData.website}
                onChange={(e) => handleInputChange('website', e.target.value)}
                placeholder="https://example.com"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="tags">Tags (Optional)</Label>
              <div className="flex gap-2">
                <Input
                  id="tags"
                  value={formData.tagInput}
                  onChange={(e) => handleInputChange('tagInput', e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Add tags and press Enter"
                />
                <Button type="button" variant="outline" size="sm" onClick={handleAddTag}>
                  <Plus className="w-4 h-4" />
                </Button>
              </div>
              {tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-2">
                  {tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="flex items-center gap-1">
                      {tag}
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        className="h-auto p-0 hover:bg-transparent"
                        onClick={() => handleRemoveTag(tag)}
                      >
                        <X className="w-3 h-3" />
                      </Button>
                    </Badge>
                  ))}
                </div>
              )}
              <p className="text-xs text-muted-foreground">Add up to 8 tags to help users find this tool</p>
            </div>
          </div>

          {/* Submitter Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Your Information (Optional)</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="submitterName">Your Name</Label>
                <Input
                  id="submitterName"
                  value={formData.submitterName}
                  onChange={(e) => handleInputChange('submitterName', e.target.value)}
                  placeholder="John Doe"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="submitterEmail">Your Email</Label>
                <Input
                  id="submitterEmail"
                  type="email"
                  value={formData.submitterEmail}
                  onChange={(e) => handleInputChange('submitterEmail', e.target.value)}
                  placeholder="john@example.com"
                />
              </div>
            </div>
            <p className="text-xs text-muted-foreground">
              We may contact you if we need clarification about the submitted tool
            </p>
          </div>

          {/* Submit Buttons */}
          <div className="flex gap-3 pt-4">
            <Button type="button" variant="outline" onClick={onClose} className="flex-1">
              Cancel
            </Button>
            <Button type="submit" disabled={isSubmitting} className="flex-1">
              {isSubmitting ? "Submitting..." : "Submit Tool"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}