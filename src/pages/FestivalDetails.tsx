import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/contexts/LanguageContext";
import { LanguageToggle } from "@/components/LanguageToggle";
import { ArrowLeft, MapPin, Calendar, Users, Camera } from "lucide-react";

const FestivalDetails = () => {
  const { festivalId } = useParams();
  const navigate = useNavigate();
  const { t } = useLanguage();

  // Sample festival data - in real app this would come from API/database
  const festivalData = {
    name: festivalId?.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()) || "Festival",
    fullDescription: "This is a major Indian festival celebrated with great enthusiasm across various regions. The festival has deep cultural and religious significance, bringing communities together through shared traditions, rituals, and celebrations.",
    history: "The festival traces its origins back to ancient times, rooted in agricultural practices and religious beliefs. Over centuries, it has evolved to incorporate regional variations while maintaining its core spiritual essence.",
    culturalImpact: "This festival plays a crucial role in preserving Indian cultural heritage, promoting social harmony, and passing down traditions to younger generations.",
    celebrations: [
      "Traditional rituals and prayers",
      "Community gatherings and feasts",  
      "Cultural performances and music",
      "Religious ceremonies",
      "Gift exchange and charity"
    ],
    regions: ["Multiple states across India"],
    gallery: [
      "/src/assets/heritage-sites.jpg",
      "/src/assets/brihadeeswarar-temple.jpg", 
      "/src/assets/golden-temple.jpg",
      "/src/assets/amber-fort.jpg"
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Header */}
      <div className="flex items-center justify-between p-6">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => navigate('/festivals')}
          className="text-primary hover:bg-primary/10"
        >
          <ArrowLeft className="h-6 w-6" />
        </Button>
        <LanguageToggle />
      </div>

      <div className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="relative h-96 rounded-3xl overflow-hidden mb-12 shadow-[var(--shadow-festival)]">
            <img 
              src="/src/assets/heritage-sites.jpg" 
              alt={festivalData.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-festival opacity-40"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white">
                <h1 className="text-5xl font-bold mb-4">{festivalData.name}</h1>
                <Badge className="bg-white/20 backdrop-blur-sm text-white border-white/30">
                  <Calendar className="w-4 h-4 mr-2" />
                  Annual Festival
                </Badge>
              </div>
            </div>
          </div>

          {/* Content Sections */}
          <div className="space-y-8">
            {/* Overview */}
            <Card className="card-heritage">
              <CardHeader>
                <CardTitle className="text-2xl text-secondary flex items-center gap-2">
                  <span>📖</span>
                  Festival Overview
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  {festivalData.fullDescription}
                </p>
              </CardContent>
            </Card>

            {/* History & Significance */}
            <Card className="card-heritage">
              <CardHeader>
                <CardTitle className="text-2xl text-secondary flex items-center gap-2">
                  <span>🏛️</span>
                  History & Significance
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                  {festivalData.history}
                </p>
                <div className="bg-heritage-cream/50 p-6 rounded-2xl">
                  <h4 className="font-semibold text-secondary mb-3">Cultural Impact</h4>
                  <p className="text-muted-foreground">
                    {festivalData.culturalImpact}
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Celebrations & Traditions */}
            <Card className="card-heritage">
              <CardHeader>
                <CardTitle className="text-2xl text-secondary flex items-center gap-2">
                  <span>🎉</span>
                  Celebrations & Traditions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {festivalData.celebrations.map((celebration, index) => (
                    <div key={index} className="flex items-center gap-3 p-4 bg-heritage-gold/10 rounded-xl">
                      <div className="w-8 h-8 bg-heritage-gold rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-sm font-bold text-white">{index + 1}</span>
                      </div>
                      <span className="font-medium">{celebration}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Regional Variations */}
            <Card className="card-heritage">
              <CardHeader>
                <CardTitle className="text-2xl text-secondary flex items-center gap-2">
                  <MapPin className="w-6 h-6" />
                  Regional Celebrations
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  {festivalData.regions.map((region, index) => (
                    <div key={index} className="flex items-center gap-4 p-4 border border-border rounded-xl hover:bg-heritage-cream/30 transition-colors">
                      <div className="w-12 h-12 bg-gradient-heritage rounded-xl flex items-center justify-center">
                        <Users className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-secondary">{region}</h4>
                        <p className="text-muted-foreground text-sm">Traditional celebrations with local customs</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Photo Gallery */}
            <Card className="card-heritage">
              <CardHeader>
                <CardTitle className="text-2xl text-secondary flex items-center gap-2">
                  <Camera className="w-6 h-6" />
                  Festival Gallery
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  {festivalData.gallery.map((image, index) => (
                    <div key={index} className="relative rounded-2xl overflow-hidden shadow-lg group">
                      <img 
                        src={image} 
                        alt={`Festival image ${index + 1}`}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-heritage opacity-0 group-hover:opacity-20 transition-opacity"></div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Call to Action */}
            <Card className="card-heritage bg-gradient-festival text-white">
              <CardContent className="text-center py-12">
                <h3 className="text-2xl font-bold mb-4">Experience This Festival</h3>
                <p className="text-lg mb-6 opacity-90">
                  Plan your visit to witness this incredible celebration of culture and tradition
                </p>
                <div className="flex gap-4 justify-center">
                  <Button 
                    variant="secondary" 
                    size="lg"
                    onClick={() => navigate('/planner')}
                  >
                    Plan Your Trip
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="border-white text-white hover:bg-white hover:text-secondary"
                    onClick={() => navigate('/festivals')}
                  >
                    View More Festivals
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FestivalDetails;