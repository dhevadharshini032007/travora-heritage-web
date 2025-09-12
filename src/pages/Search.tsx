import { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Search as SearchIcon, Filter, MapPin, Star } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import monasteryImage from "@/assets/monastery.jpg";
import fortImage from "@/assets/fort.jpg";
import templeImage from "@/assets/temple.jpg";

const Search = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(searchParams.get('q') || '');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedState, setSelectedState] = useState<string>('all');

  const searchSuggestions = [
    "Red Fort Delhi",
    "Taj Mahal Agra", 
    "Ajanta Caves",
    "Khajuraho Temples",
    "Hampi Ruins",
    "Konark Sun Temple"
  ];

  const searchResults = [
    {
      id: 1,
      name: "Red Fort",
      category: "Fort",
      location: "Delhi",
      state: "Delhi",
      rating: 4.9,
      image: fortImage,
      description: "Historic fortified palace and UNESCO World Heritage Site",
      featured: true
    },
    {
      id: 2,
      name: "Hemis Monastery",
      category: "Monastery", 
      location: "Ladakh, Jammu & Kashmir",
      state: "Jammu & Kashmir",
      rating: 4.8,
      image: monasteryImage,
      description: "Largest and richest monastery in Ladakh",
      featured: false
    },
    {
      id: 3,
      name: "Brihadeeswarar Temple",
      category: "Temple",
      location: "Thanjavur, Tamil Nadu", 
      state: "Tamil Nadu",
      rating: 4.9,
      image: templeImage,
      description: "Magnificent example of Chola architecture",
      featured: true
    },
    {
      id: 4,
      name: "Amber Fort",
      category: "Fort",
      location: "Jaipur, Rajasthan",
      state: "Rajasthan", 
      rating: 4.8,
      image: fortImage,
      description: "Stunning hilltop fort with intricate architecture",
      featured: true
    }
  ];

  const filteredResults = searchResults.filter(result => {
    const matchesQuery = searchQuery === '' || 
      result.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      result.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      result.category.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = selectedCategory === 'all' || 
      result.category.toLowerCase() === selectedCategory.toLowerCase();
    
    const matchesState = selectedState === 'all' || 
      result.state === selectedState;

    return matchesQuery && matchesCategory && matchesState;
  });

  const states = [
    'Delhi', 'Rajasthan', 'Tamil Nadu', 'Jammu & Kashmir', 'Maharashtra', 
    'Karnataka', 'Uttar Pradesh', 'Gujarat', 'Madhya Pradesh', 'Odisha'
  ];

  const handleSearch = () => {
    // Update URL with search query
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Header */}
      <header className="bg-card shadow-sm border-b">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center">
            <Button
              variant="ghost"
              onClick={() => navigate('/categories')}
              className="mr-4 p-2 hover:bg-secondary/10"
            >
              <ArrowLeft className="w-6 h-6" />
            </Button>
            <h1 className="text-2xl font-bold text-secondary">Search Heritage Sites</h1>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        {/* Search Bar */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="relative mb-4">
            <SearchIcon className="absolute left-4 top-4 h-5 w-5 text-muted-foreground" />
            <Input
              placeholder="Search heritage sites, monuments, temples..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
              className="input-heritage pl-12 pr-16"
            />
            <Button
              onClick={handleSearch}
              className="absolute right-2 top-2 btn-heritage"
            >
              Search
            </Button>
          </div>

          {/* Search Suggestions */}
          {searchQuery === '' && (
            <div className="animate-fade-in">
              <p className="text-sm text-muted-foreground mb-3">Popular searches:</p>
              <div className="flex flex-wrap gap-2">
                {searchSuggestions.map((suggestion, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="sm"
                    onClick={() => setSearchQuery(suggestion)}
                    className="btn-outline-heritage text-sm"
                  >
                    {suggestion}
                  </Button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Filters */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="card-heritage">
            <div className="flex items-center gap-4 mb-4">
              <Filter className="w-5 h-5 text-secondary" />
              <h3 className="font-semibold text-secondary">Filters</h3>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium mb-2 block">Category</label>
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger className="input-heritage">
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Categories</SelectItem>
                    <SelectItem value="fort">Forts</SelectItem>
                    <SelectItem value="temple">Temples</SelectItem>
                    <SelectItem value="monastery">Monasteries</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">State</label>
                <Select value={selectedState} onValueChange={setSelectedState}>
                  <SelectTrigger className="input-heritage">
                    <SelectValue placeholder="Select state" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All States</SelectItem>
                    {states.map((state) => (
                      <SelectItem key={state} value={state}>{state}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-secondary">
              Search Results ({filteredResults.length})
            </h2>
            
            {(selectedCategory !== 'all' || selectedState !== 'all') && (
              <Button
                variant="outline"
                onClick={() => {
                  setSelectedCategory('all');
                  setSelectedState('all');
                }}
                className="btn-outline-heritage"
              >
                Clear Filters
              </Button>
            )}
          </div>

          {filteredResults.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-secondary mb-2">No results found</h3>
              <p className="text-muted-foreground">Try adjusting your search criteria or filters</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-6">
              {filteredResults.map((result, index) => (
                <div
                  key={result.id}
                  className="card-heritage group cursor-pointer overflow-hidden"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex gap-4">
                    <div className="relative w-32 h-32 rounded-xl overflow-hidden flex-shrink-0">
                      <img 
                        src={result.image} 
                        alt={result.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-heritage opacity-30"></div>
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-lg font-bold text-secondary truncate">
                          {result.name}
                        </h3>
                        {result.featured && (
                          <Badge className="bg-primary ml-2">Featured</Badge>
                        )}
                      </div>
                      
                      <div className="flex items-center text-muted-foreground mb-2">
                        <MapPin className="w-4 h-4 mr-1 flex-shrink-0" />
                        <span className="text-sm truncate">{result.location}</span>
                      </div>
                      
                      <div className="flex items-center mb-3">
                        <Star className="w-4 h-4 text-heritage-gold fill-current mr-1" />
                        <span className="text-sm font-semibold">{result.rating}</span>
                        <Badge variant="outline" className="ml-2 text-xs">
                          {result.category}
                        </Badge>
                      </div>
                      
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {result.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Search;