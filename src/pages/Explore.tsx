import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import { LanguageToggle } from "@/components/LanguageToggle";
import { ArrowLeft } from "lucide-react";

const Explore = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  const exploreOptions = [
    {
      title: "Culture",
      description: "Discover food, traditions, and clothing of Indian states",
      icon: "🎭",
      path: "/culture"
    },
    {
      title: "Festivals", 
      description: "Explore festivals celebrated on specific dates",
      icon: "🎊",
      path: "/festivals"
    },
    {
      title: "Local Guides",
      description: "Connect with certified heritage guides and experts",
      icon: "👥",
      path: "/guides"
    },
    {
      title: "Travel Planner",
      description: "AI-powered itinerary for heritage tourism",
      icon: "🗺️",
      path: "/planner"
    },
    {
      title: "Photo Contests",
      description: "Share and win with heritage photography",
      icon: "📸",
      path: "/contests"
    }
  ];

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
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-heritage-title text-secondary mb-6">
            {t('common.explore')}
          </h1>
          <p className="text-heritage-subtitle mb-12 leading-relaxed">
            Choose what you'd like to explore about Indian heritage
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {exploreOptions.map((option, index) => (
              <Card 
                key={index}
                className="card-heritage cursor-pointer transition-all duration-300 hover:scale-105"
                onClick={() => navigate(option.path)}
              >
                <CardHeader className="text-center">
                  <div className="text-6xl mb-4">{option.icon}</div>
                  <CardTitle className="text-2xl">{option.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center">
                    {option.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;