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
      food: ["Dal Baati Churma", "Ghewar", "Laal Maas"],
      traditions: ["Folk Dance", "Puppet Shows", "Camel Safari"],
      clothes: ["Ghagra Choli", "Bandhani", "Pagri"]
    },
    {
      name: "Punjab",
      food: ["Makki di Roti", "Sarson da Saag", "Lassi"],
      traditions: ["Bhangra", "Giddha", "Kite Flying"],
      clothes: ["Punjabi Suit", "Turban", "Phulkari"]
    },
    {
      name: "Kerala",
      food: ["Appam", "Fish Curry", "Coconut Rice"],
      traditions: ["Kathakali", "Boat Racing", "Ayurveda"],
      clothes: ["Mundu", "Saree", "Kasavu"]
    },
    {
      name: "Tamil Nadu",
      food: ["Dosa", "Sambar", "Rasam"],
      traditions: ["Bharatanatyam", "Kolam", "Temple Festivals"],
      clothes: ["Kanchipuram Saree", "Veshti", "Pavadai"]
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
            Indian Cultural Heritage
          </h1>
          <p className="text-heritage-subtitle mb-12 leading-relaxed text-center">
            Explore the rich cultural diversity of Indian states
          </p>

          <div className="grid gap-8">
            {states.map((state, index) => (
              <Card key={index} className="card-heritage">
                <CardHeader>
                  <CardTitle className="text-2xl text-center text-primary">
                    {state.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="food" className="w-full">
                    <TabsList className="grid w-full grid-cols-3">
                      <TabsTrigger value="food">🍽️ Food</TabsTrigger>
                      <TabsTrigger value="traditions">🎭 Traditions</TabsTrigger>
                      <TabsTrigger value="clothes">👗 Clothing</TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="food" className="mt-6">
                      <div className="grid md:grid-cols-3 gap-4">
                        {state.food.map((item, idx) => (
                          <div key={idx} className="bg-accent/10 p-4 rounded-lg text-center">
                            <p className="font-medium">{item}</p>
                          </div>
                        ))}
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="traditions" className="mt-6">
                      <div className="grid md:grid-cols-3 gap-4">
                        {state.traditions.map((item, idx) => (
                          <div key={idx} className="bg-primary/10 p-4 rounded-lg text-center">
                            <p className="font-medium">{item}</p>
                          </div>
                        ))}
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="clothes" className="mt-6">
                      <div className="grid md:grid-cols-3 gap-4">
                        {state.clothes.map((item, idx) => (
                          <div key={idx} className="bg-heritage-gold/10 p-4 rounded-lg text-center">
                            <p className="font-medium">{item}</p>
                          </div>
                        ))}
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