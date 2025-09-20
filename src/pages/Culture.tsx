import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useLanguage } from "@/contexts/LanguageContext";
import { LanguageToggle } from "@/components/LanguageToggle";
import { ArrowLeft } from "lucide-react";

const Culture = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  const states = [
    {
      name: "Rajasthan",
      image: "/src/assets/amber-fort.jpg",
      food: {
        items: ["Dal Baati Churma", "Ghewar", "Laal Maas", "Ker Sangri", "Mawa Kachori"],
        description: "Rajasthani cuisine is known for its rich flavors, use of dried lentils, beans, and limited vegetables due to desert climate. The food is designed to last for days without refrigeration."
      },
      traditions: {
        items: ["Folk Dance (Ghoomar)", "Puppet Shows (Kathputli)", "Camel Safari", "Miniature Paintings", "Royal Heritage Tours"],
        description: "Rich royal heritage with magnificent palaces, vibrant folk music and dance, traditional crafts, and desert culture that reflects the valor and artistic excellence of Rajput rulers."
      },
      clothes: {
        items: ["Ghagra Choli", "Bandhani (Tie-dye)", "Pagri (Turban)", "Lehenga", "Mojari (Footwear)"],
        description: "Colorful and vibrant clothing designed for desert climate. Mirror work, embroidery, and tie-dye techniques are prominent. Clothing reflects royal heritage and practical desert living."
      }
    },
    {
      name: "Punjab",
      image: "/src/assets/golden-temple.jpg",
      food: {
        items: ["Makki di Roti", "Sarson da Saag", "Lassi", "Chole Bhature", "Amritsari Kulcha"],
        description: "Punjabi cuisine is hearty and rich, perfect for the agricultural lifestyle. Heavy use of dairy products, wheat, and seasonal vegetables characterizes this cuisine."
      },
      traditions: {
        items: ["Bhangra Dance", "Giddha", "Kite Flying", "Sikh Festivals", "Agricultural Celebrations"],
        description: "Vibrant culture centered around Sikhism, agriculture, and community celebrations. Known for energetic folk dances, music, and strong community bonds."
      },
      clothes: {
        items: ["Punjabi Suit", "Turban (Pagri)", "Phulkari Dupatta", "Kurta Pajama", "Jutti"],
        description: "Comfortable and practical clothing suitable for farming. Phulkari embroidery is a signature art form. Turbans hold religious and cultural significance in Sikh community."
      }
    },
    {
      name: "Kerala",
      image: "/src/assets/namdroling-monastery.jpg",
      food: {
        items: ["Appam with Stew", "Fish Curry", "Coconut Rice", "Puttu", "Payasam"],
        description: "Kerala cuisine heavily features coconut, rice, and spices. Being a coastal state, seafood is prominent. The food is known for its aromatic spices and coconut-based gravies."
      },
      traditions: {
        items: ["Kathakali Dance", "Mohiniyattam", "Boat Racing (Nehru Trophy)", "Ayurveda", "Theyyam Ritual"],
        description: "Rich performing arts tradition with classical dances, traditional medicine (Ayurveda), and unique boat racing culture. Strong connection to nature and spiritual practices."
      },
      clothes: {
        items: ["Kerala Saree (Kasavu)", "Mundu", "Set Saree", "Traditional Jewelry", "Chatta (Umbrella)"],
        description: "Traditional white and gold clothing reflecting simplicity and elegance. Cotton is preferred due to humid climate. Gold borders (kasavu) are signature elements."
      }
    },
    {
      name: "Tamil Nadu",
      image: "/src/assets/brihadeeswarar-temple.jpg",
      food: {
        items: ["Dosa varieties", "Sambar", "Rasam", "Chettinad Chicken", "Filter Coffee"],
        description: "Tamil cuisine is predominantly vegetarian with rice as staple. Known for its variety of dosas, complex spice blends, and the famous filter coffee culture."
      },
      traditions: {
        items: ["Bharatanatyam", "Kolam (Rangoli)", "Temple Festivals", "Classical Music", "Bronze Sculpture"],
        description: "Ancient Dravidian culture with strong temple traditions, classical arts, and scholarly pursuits. Known for magnificent temple architecture and classical performing arts."
      },
      clothes: {
        items: ["Kanchipuram Saree", "Veshti (Dhoti)", "Pavadai (Half Saree)", "Traditional Jewelry", "Madisar Saree"],
        description: "Silk sarees, especially Kanchipuram, are world-famous. Traditional clothing emphasizes elegance and cultural identity, often worn during religious and cultural ceremonies."
      }
    },
    {
      name: "West Bengal",
      image: "/src/assets/heritage-sites.jpg",
      food: {
        items: ["Fish Curry with Rice", "Mishti Doi", "Rasgulla", "Sandesh", "Hilsa Fish"],
        description: "Bengali cuisine is fish and rice-based with subtle flavors and sweet dishes. Known for its desserts and use of mustard oil, panch phoron spice blend."
      },
      traditions: {
        items: ["Durga Puja", "Baul Music", "Adda (Social Gatherings)", "Literature & Arts", "Handloom Weaving"],
        description: "Rich intellectual and artistic heritage with emphasis on literature, music, and arts. Durga Puja is the biggest festival showcasing community spirit and creativity."
      },
      clothes: {
        items: ["Tant Saree", "Kurta", "Dhoti", "Khadi", "Traditional Jewelry"],
        description: "Cotton handloom sarees and comfortable clothing suitable for humid climate. Emphasis on handwoven textiles and traditional weaving techniques."
      }
    },
    {
      name: "Gujarat",
      image: "/src/assets/somnath-temple.jpg",
      food: {
        items: ["Dhokla", "Thepla", "Gujarati Thali", "Fafda Jalebi", "Khaman"],
        description: "Vegetarian cuisine with sweet and savory flavors. Known for steamed and fermented foods, extensive use of gram flour, and elaborate thali meals."
      },
      traditions: {
        items: ["Garba Dance", "Dandiya Raas", "Navratri Festival", "Business Culture", "Handicrafts"],
        description: "Vibrant festival culture, especially during Navratri. Strong business acumen and entrepreneurial spirit. Rich tradition of textile and handicraft industries."
      },
      clothes: {
        items: ["Chaniya Choli", "Gujarati Saree", "Dhoti Kurta", "Bandhani Work", "Traditional Accessories"],
        description: "Colorful and ornate clothing with intricate mirror work and embroidery. Chaniya choli is especially popular during festivals and celebrations."
      }
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
        <div className="max-w-7xl mx-auto">
          <h1 className="text-heritage-title text-secondary mb-6 text-center">
            {t('culture.title')}
          </h1>
          <p className="text-heritage-subtitle mb-12 leading-relaxed text-center">
            {t('culture.subtitle')}
          </p>

          <div className="grid gap-8">
            {states.map((state, index) => (
              <Card key={index} className="card-heritage overflow-hidden">
                <div className="relative h-48 mb-6">
                  <img 
                    src={state.image} 
                    alt={`${state.name} heritage`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-heritage opacity-50"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <h2 className="text-heritage-title text-white text-center">
                      {state.name}
                    </h2>
                  </div>
                </div>
                
                <CardContent className="p-8">
                  <Tabs defaultValue="food" className="w-full">
                    <TabsList className="grid w-full grid-cols-3 mb-8">
                      <TabsTrigger value="food" className="text-lg">🍽️ {t('culture.food')}</TabsTrigger>
                      <TabsTrigger value="traditions" className="text-lg">🎭 {t('culture.traditions')}</TabsTrigger>
                      <TabsTrigger value="clothes" className="text-lg">👗 {t('culture.clothing')}</TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="food" className="space-y-6">
                      <div className="bg-accent/5 p-6 rounded-lg">
                        <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                          {state.food.description}
                        </p>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                          {state.food.items.map((item, idx) => (
                            <div key={idx} className="bg-accent/10 p-4 rounded-lg text-center hover:bg-accent/20 transition-colors">
                              <p className="font-semibold text-lg">{item}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="traditions" className="space-y-6">
                      <div className="bg-primary/5 p-6 rounded-lg">
                        <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                          {state.traditions.description}
                        </p>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                          {state.traditions.items.map((item, idx) => (
                            <div key={idx} className="bg-primary/10 p-4 rounded-lg text-center hover:bg-primary/20 transition-colors">
                              <p className="font-semibold text-lg">{item}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="clothes" className="space-y-6">
                      <div className="bg-heritage-gold/5 p-6 rounded-lg">
                        <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                          {state.clothes.description}
                        </p>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                          {state.clothes.items.map((item, idx) => (
                            <div key={idx} className="bg-heritage-gold/10 p-4 rounded-lg text-center hover:bg-heritage-gold/20 transition-colors">
                              <p className="font-semibold text-lg">{item}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Culture;