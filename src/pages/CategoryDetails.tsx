import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, MapPin, Star, Clock, Camera } from "lucide-react";

// Import specific images for each heritage site
import monasteryImage from "@/assets/monastery.jpg";
import tashilhunpoMonastery from "@/assets/tashilhunpo-monastery.jpg";
import mindrollingMonastery from "@/assets/mindrolling-monastery.jpg"; 
import namdrolingMonastery from "@/assets/namdroling-monastery.jpg";

import fortImage from "@/assets/fort.jpg";
import amberFort from "@/assets/amber-fort.jpg";
import mehrangarhFort from "@/assets/mehrangarh-fort.jpg";
import golcondaFort from "@/assets/golconda-fort.jpg";

import templeImage from "@/assets/temple.jpg";
import brihadeeswarar from "@/assets/brihadeeswarar-temple.jpg";
import konarkSun from "@/assets/konark-sun-temple.jpg";
import khajuraho from "@/assets/khajuraho-temples.jpg";
import somnath from "@/assets/somnath-temple.jpg";

const CategoryDetails = () => {
  const { type } = useParams();
  const navigate = useNavigate();

  const categoryData = {
    monasteries: {
      title: "Monasteries",
      description: "Explore ancient Buddhist and Jain monasteries across India",
      image: monasteryImage,
      sites: [
        {
          id: 1,
          name: "Hemis Monastery",
          location: "Ladakh, Jammu & Kashmir",
          rating: 4.8,
          visitTime: "2-3 hours",
          image: monasteryImage,
          featured: true
        },
        {
          id: 2,
          name: "Tashilhunpo Monastery",
          location: "Sikkim",
          rating: 4.6,
          visitTime: "1-2 hours",
          image: tashilhunpoMonastery,
          featured: false
        },
        {
          id: 3,
          name: "Mindrolling Monastery",
          location: "Dehradun, Uttarakhand",
          rating: 4.7,
          visitTime: "2 hours",
          image: mindrollingMonastery,
          featured: true
        },
        {
          id: 4,
          name: "Namdroling Monastery",
          location: "Karnataka",
          rating: 4.9,
          visitTime: "3 hours",
          image: namdrolingMonastery,
          featured: false
        }
      ]
    },
    forts: {
      title: "Forts",
      description: "Discover majestic forts and palaces that narrate tales of valor",
      image: fortImage,
      sites: [
        {
          id: 1,
          name: "Red Fort",
          location: "Delhi",
          rating: 4.9,
          visitTime: "3-4 hours",
          image: fortImage,
          featured: true
        },
        {
          id: 2,
          name: "Amber Fort",
          location: "Jaipur, Rajasthan",
          rating: 4.8,
          visitTime: "4-5 hours",
          image: amberFort,
          featured: true
        },
        {
          id: 3,
          name: "Mehrangarh Fort",
          location: "Jodhpur, Rajasthan",
          rating: 4.9,
          visitTime: "3-4 hours",
          image: mehrangarhFort,
          featured: false
        },
        {
          id: 4,
          name: "Golconda Fort",
          location: "Hyderabad, Telangana",
          rating: 4.7,
          visitTime: "2-3 hours",
          image: golcondaFort,
          featured: true
        }
      ]
    },
    temples: {
      title: "Temples",
      description: "Sacred temples showcasing India's diverse spiritual heritage",
      image: templeImage,
      sites: [
        {
          id: 1,
          name: "Brihadeeswarar Temple",
          location: "Thanjavur, Tamil Nadu",
          rating: 4.9,
          visitTime: "2-3 hours",
          image: brihadeeswarar,
          featured: true
        },
        {
          id: 2,
          name: "Konark Sun Temple",
          location: "Konark, Odisha",
          rating: 4.8,
          visitTime: "2 hours",
          image: konarkSun,
          featured: true
        },
        {
          id: 3,
          name: "Khajuraho Temples",
          location: "Madhya Pradesh",
          rating: 4.7,
          visitTime: "4-5 hours",
          image: khajuraho,
          featured: false
        },
        {
          id: 4,
          name: "Somnath Temple",
          location: "Gujarat",
          rating: 4.8,
          visitTime: "1-2 hours",
          image: somnath,
          featured: true
        }
      ]
    }
  };

  const currentCategory = categoryData[type as keyof typeof categoryData];

  if (!currentCategory) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Category not found</h1>
          <Button onClick={() => navigate('/categories')}>
            Back to Categories
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Header */}
      <div className="relative h-64 overflow-hidden">
        <img 
          src={currentCategory.image} 
          alt={currentCategory.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-heritage opacity-70"></div>
        
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-6">
            <Button
              variant="ghost"
              onClick={() => navigate('/categories')}
              className="mb-4 text-white hover:bg-white/20"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Categories
            </Button>
            
            <h1 className="text-heritage-title text-white mb-4">
              {currentCategory.title}
            </h1>
            <p className="text-xl text-white/90 max-w-2xl">
              {currentCategory.description}
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12">
        {/* Stats */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="card-heritage">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">
                  {currentCategory.sites.length}
                </div>
                <div className="text-muted-foreground">Featured Sites</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent mb-2">
                  {currentCategory.sites.filter(s => s.featured).length}
                </div>
                <div className="text-muted-foreground">UNESCO Sites</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-heritage-gold mb-2">
                  {(currentCategory.sites.reduce((acc, site) => acc + site.rating, 0) / currentCategory.sites.length).toFixed(1)}
                </div>
                <div className="text-muted-foreground">Avg Rating</div>
              </div>
            </div>
          </div>
        </div>

        {/* Sites Grid */}
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-secondary mb-8">
            Popular {currentCategory.title}
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {currentCategory.sites.map((site, index) => (
              <div
                key={site.id}
                className="card-heritage group cursor-pointer overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-48 rounded-2xl overflow-hidden mb-6">
                  <img 
                    src={site.image} 
                    alt={site.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-heritage opacity-30 group-hover:opacity-20 transition-opacity"></div>
                  
                  {site.featured && (
                    <Badge className="absolute top-4 left-4 bg-primary">
                      Featured
                    </Badge>
                  )}
                  
                  <div className="absolute top-4 right-4 bg-card/90 backdrop-blur-sm px-2 py-1 rounded-full flex items-center space-x-1">
                    <Star className="w-4 h-4 text-heritage-gold fill-current" />
                    <span className="text-sm font-semibold">{site.rating}</span>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-secondary mb-2">
                    {site.name}
                  </h3>
                  
                  <div className="flex items-center text-muted-foreground mb-3">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span>{site.location}</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-muted-foreground">
                      <Clock className="w-4 h-4 mr-2" />
                      <span>{site.visitTime}</span>
                    </div>
                    
                    <Button
                      size="sm"
                      onClick={() => navigate(`/site/${type}/${site.id}`)}
                      className="btn-outline-heritage"
                    >
                      <Camera className="w-4 h-4 mr-2" />
                      View Details
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button className="btn-primary-glow">
            Load More {currentCategory.title}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CategoryDetails;