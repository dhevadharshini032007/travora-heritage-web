import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/contexts/LanguageContext";
import { LanguageToggle } from "@/components/LanguageToggle";
import { HeritageModel3D } from "@/components/HeritageModel3D";
import { ArrowLeft, Eye, RotateCcw, ZoomIn } from "lucide-react";

const ARExperience = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();
  const [selectedSite, setSelectedSite] = useState<string | null>(null);

  const arSites = [
    {
      name: "Brihadeeswarar Temple",
      category: "Temple",
      location: "Thanjavur, Tamil Nadu",
      description: "Marvel at the architectural grandeur of this Chola masterpiece in 3D",
      image: "/src/assets/brihadeeswarar-temple.jpg",
      color: "bg-gradient-temple"
    },
    {
      name: "Konark Sun Temple",
      category: "Temple", 
      location: "Konark, Odisha",
      description: "Experience the Sun Temple's chariot wheels in immersive 3D",
      image: "/src/assets/konark-sun-temple.jpg",
      color: "bg-gradient-temple"
    },
    {
      name: "Khajuraho Temples",
      category: "Temple",
      location: "Khajuraho, Madhya Pradesh", 
      description: "Explore the intricate sculptures and architecture in 3D detail",
      image: "/src/assets/khajuraho-temples.jpg",
      color: "bg-gradient-temple"
    },
    {
      name: "Somnath Temple",
      category: "Temple",
      location: "Somnath, Gujarat",
      description: "Witness the temple's majestic dome and coastal setting in AR",
      image: "/src/assets/somnath-temple.jpg",
      color: "bg-gradient-temple"
    },
    {
      name: "Amber Fort",
      category: "Fort",
      location: "Jaipur, Rajasthan",
      description: "Navigate the fort's courtyards and palaces in 3D",
      image: "/src/assets/amber-fort.jpg", 
      color: "bg-gradient-royal"
    },
    {
      name: "Mehrangarh Fort",
      category: "Fort",
      location: "Jodhpur, Rajasthan",
      description: "Explore the blue city's towering fortress in immersive AR",
      image: "/src/assets/mehrangarh-fort.jpg",
      color: "bg-gradient-royal"
    },
    {
      name: "Golconda Fort",
      category: "Fort", 
      location: "Hyderabad, Telangana",
      description: "Discover the fort's acoustic marvels and diamond history",
      image: "/src/assets/golconda-fort.jpg",
      color: "bg-gradient-royal"
    },
    {
      name: "Namdroling Monastery",
      category: "Monastery",
      location: "Bylakuppe, Karnataka",
      description: "Experience the golden temple's serene Buddhist architecture",
      image: "/src/assets/namdroling-monastery.jpg",
      color: "bg-gradient-heritage"
    },
    {
      name: "Mindrolling Monastery", 
      category: "Monastery",
      location: "Dehradun, Uttarakhand",
      description: "Explore one of the largest Buddhist institutes in 3D",
      image: "/src/assets/mindrolling-monastery.jpg",
      color: "bg-gradient-heritage"
    },
    {
      name: "Tashilhunpo Monastery",
      category: "Monastery",
      location: "Shigatse, Tibet (Historical)",
      description: "Virtual tour of this significant Tibetan Buddhist monastery",
      image: "/src/assets/tashilhunpo-monastery.jpg", 
      color: "bg-gradient-heritage"
    }
  ];

  const groupedSites = {
    Temples: arSites.filter(site => site.category === "Temple"),
    Forts: arSites.filter(site => site.category === "Fort"),
    Monasteries: arSites.filter(site => site.category === "Monastery")
  };

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Header */}
      <div className="flex items-center justify-between p-6">
        <Button
          variant="ghost"
          size="icon" 
          onClick={() => navigate('/welcome')}
          className="text-primary hover:bg-primary/10"
        >
          <ArrowLeft className="h-6 w-6" />
        </Button>
        <LanguageToggle />
      </div>

      <div className="container mx-auto px-6 py-12">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-heritage-title text-secondary mb-6 text-center">
            {t('experience.ar.title')}
          </h1>
          <p className="text-heritage-subtitle mb-12 leading-relaxed text-center">
            {t('experience.ar.subtitle')}
          </p>

          {selectedSite ? (
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <Button
                  variant="outline"
                  onClick={() => setSelectedSite(null)}
                  className="btn-outline-heritage"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Gallery
                </Button>
                <div>
                  <h2 className="text-2xl font-bold text-secondary">{selectedSite}</h2>
                  <p className="text-muted-foreground">Interactive 3D Model</p>
                </div>
              </div>

              <Card className="card-heritage overflow-hidden">
                <CardContent className="p-0">
                  <div className="h-[600px] relative">
                    <HeritageModel3D siteName={selectedSite} />
                    <div className="absolute top-4 left-4 bg-card/90 backdrop-blur-sm rounded-lg p-4 max-w-sm">
                      <h3 className="font-semibold mb-2">3D Controls</h3>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center gap-2">
                          <RotateCcw className="w-4 h-4" />
                          <span>Click & drag to rotate</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <ZoomIn className="w-4 h-4" />
                          <span>Scroll to zoom</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Eye className="w-4 h-4" />
                          <span>Auto-rotation enabled</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ) : (
            <div className="space-y-12">
              {Object.entries(groupedSites).map(([category, sites]) => (
                <div key={category}>
                  <div className="flex items-center gap-4 mb-8">
                    <h2 className="text-3xl font-bold text-secondary">
                      {category === "Temples" && t('experience.ar.temples')}
                      {category === "Forts" && t('experience.ar.forts')} 
                      {category === "Monasteries" && t('experience.ar.monasteries')}
                    </h2>
                    <Badge variant="outline" className="text-lg px-4 py-1">
                      {sites.length} Sites
                    </Badge>
                  </div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {sites.map((site, index) => (
                      <Card 
                        key={index} 
                        className="card-heritage group cursor-pointer overflow-hidden hover:scale-105 transition-all duration-300"
                        onClick={() => setSelectedSite(site.name)}
                      >
                        <div className="relative h-48 overflow-hidden">
                          <img 
                            src={site.image} 
                            alt={site.name}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                          <div className={`absolute inset-0 ${site.color} opacity-20`}></div>
                          <div className="absolute top-4 right-4">
                            <Badge className="bg-primary/90 text-primary-foreground">
                              AR Ready
                            </Badge>
                          </div>
                        </div>
                        
                        <CardHeader>
                          <CardTitle className="text-xl text-secondary group-hover:text-primary transition-colors">
                            {site.name}
                          </CardTitle>
                          <p className="text-sm text-muted-foreground">{site.location}</p>
                        </CardHeader>
                        
                        <CardContent>
                          <p className="text-muted-foreground mb-4 line-clamp-2">
                            {site.description}
                          </p>
                          <Button 
                            className="w-full btn-heritage group-hover:btn-primary-glow transition-all"
                            onClick={(e) => {
                              e.stopPropagation();
                              setSelectedSite(site.name);
                            }}
                          >
                            <Eye className="w-4 h-4 mr-2" />
                            View in 3D
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
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

export default ARExperience;