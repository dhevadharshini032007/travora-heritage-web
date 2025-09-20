import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import { LanguageToggle } from "@/components/LanguageToggle";
import { ArrowLeft, Star, MapPin, Phone, Mail } from "lucide-react";

const Guides = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  const guides = [
    {
      id: 1,
      name: "Raj Kumar Sharma",
      specialty: "Rajasthan Heritage",
      rating: 4.9,
      reviews: 156,
      languages: ["Hindi", "English", "Rajasthani"],
      experience: "15 years",
      location: "Jaipur, Rajasthan",
      phone: "+91 98765 43210",
      email: "raj@heritaguides.com",
      description: "Expert in Rajput history and architecture. Specialized tours of forts and palaces.",
      image: "👨‍🎓"
    },
    {
      id: 2,
      name: "Priya Nair",
      specialty: "South Indian Temples",
      rating: 4.8,
      reviews: 203,
      languages: ["Tamil", "English", "Malayalam"],
      experience: "12 years",
      location: "Chennai, Tamil Nadu",
      phone: "+91 98765 43211",
      email: "priya@templetourstn.com",
      description: "Temple architecture and Dravidian culture specialist. Certified art historian.",
      image: "👩‍🏫"
    },
    {
      id: 3,
      name: "Vikram Singh",
      specialty: "Mughal Heritage",
      rating: 4.7,
      reviews: 189,
      languages: ["Hindi", "English", "Urdu"],
      experience: "18 years",
      location: "Delhi & Agra",
      phone: "+91 98765 43212",
      email: "vikram@mughalheritage.com",
      description: "Expert on Mughal architecture and history. Special focus on Delhi and Agra monuments.",
      image: "👨‍🏫"
    },
    {
      id: 4,
      name: "Meera Patel",
      specialty: "Gujarat Culture",
      rating: 4.9,
      reviews: 134,
      languages: ["Gujarati", "Hindi", "English"],
      experience: "10 years",
      location: "Ahmedabad, Gujarat",
      phone: "+91 98765 43213",
      email: "meera@gujaratculture.com",
      description: "Traditional crafts, textiles, and cultural heritage of Gujarat. Handicraft expert.",
      image: "👩‍🎨"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Header */}
      <div className="flex items-center justify-between p-6">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => navigate('/explore')}
          className="text-primary hover:bg-primary/10"
        >
          <ArrowLeft className="h-6 w-6" />
        </Button>
        <LanguageToggle />
      </div>

      <div className="container mx-auto px-6 py-12">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-heritage-title text-secondary mb-6 text-center">
            {t('guides.title')}
          </h1>
          <p className="text-heritage-subtitle mb-12 leading-relaxed text-center">
            {t('guides.subtitle')}
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {guides.map((guide) => (
              <Card key={guide.id} className="card-heritage">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="text-6xl">{guide.image}</div>
                    <div className="flex-1">
                      <CardTitle className="text-2xl mb-2">{guide.name}</CardTitle>
                      <p className="text-primary font-semibold">{guide.specialty}</p>
                      <div className="flex items-center gap-2 mt-2">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="font-bold">{guide.rating}</span>
                        <span className="text-muted-foreground">({guide.reviews} reviews)</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{guide.description}</p>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="font-semibold">Experience:</p>
                      <p className="text-muted-foreground">{guide.experience}</p>
                    </div>
                    <div>
                      <p className="font-semibold">Location:</p>
                      <p className="text-muted-foreground flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {guide.location}
                      </p>
                    </div>
                  </div>

                  <div>
                    <p className="font-semibold text-sm mb-2">Languages:</p>
                    <div className="flex flex-wrap gap-2">
                      {guide.languages.map((lang, index) => (
                        <span
                          key={index}
                          className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs"
                        >
                          {lang}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col gap-2 pt-4 border-t">
                    <div className="flex items-center gap-2 text-sm">
                      <Phone className="w-4 h-4" />
                      <span>{guide.phone}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Mail className="w-4 h-4" />
                      <span>{guide.email}</span>
                    </div>
                  </div>

                  <Button className="w-full btn-primary-glow">
                    {t('guides.contact')}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Guides;