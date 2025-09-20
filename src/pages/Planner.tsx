import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useLanguage } from "@/contexts/LanguageContext";
import { LanguageToggle } from "@/components/LanguageToggle";
import { ArrowLeft, MapPin, Calendar, Users, Sparkles } from "lucide-react";
import { toast } from "sonner";

const Planner = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    destination: "",
    duration: "",
    budget: "",
    interests: "",
    groupSize: ""
  });
  const [itinerary, setItinerary] = useState<any>(null);

  const generateItinerary = () => {
    if (!formData.destination || !formData.duration || !formData.budget) {
      toast.error("Please fill in all required fields");
      return;
    }

    // Simulate AI-generated itinerary
    const sampleItinerary = {
      title: `${formData.duration}-Day Heritage Tour of ${formData.destination}`,
      days: [
        {
          day: 1,
          title: "Arrival & City Exploration",
          activities: [
            "Check-in at hotel",
            "Visit local heritage museum",
            "Traditional lunch at heritage restaurant",
            "Evening heritage walk"
          ]
        },
        {
          day: 2,
          title: "Major Monuments",
          activities: [
            "Early morning visit to main monument",
            "Guided tour with heritage expert",
            "Photography session",
            "Local craft workshop"
          ]
        },
        {
          day: 3,
          title: "Cultural Immersion",
          activities: [
            "Traditional cooking class",
            "Visit to artisan workshops",
            "Cultural performance",
            "Shopping for local handicrafts"
          ]
        }
      ],
      estimatedCost: `₹${parseInt(formData.budget) * 0.8} - ₹${formData.budget}`,
      includes: ["Accommodation", "Meals", "Guide", "Entry tickets", "Transportation"]
    };

    setItinerary(sampleItinerary);
    toast.success("Your personalized itinerary is ready!");
  };

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
        <div className="max-w-4xl mx-auto">
          <h1 className="text-heritage-title text-secondary mb-6 text-center">
            {t('planner.title')}
          </h1>
          <p className="text-heritage-subtitle mb-12 leading-relaxed text-center">
            {t('planner.subtitle')}
          </p>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Planning Form */}
            <Card className="card-heritage">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-primary" />
                  {t('planner.planYourTrip')}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="destination">{t('planner.destination')} *</Label>
                  <Select value={formData.destination} onValueChange={(value) => setFormData({...formData, destination: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select destination" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="rajasthan">Rajasthan</SelectItem>
                      <SelectItem value="kerala">Kerala</SelectItem>
                      <SelectItem value="tamil-nadu">Tamil Nadu</SelectItem>
                      <SelectItem value="gujarat">Gujarat</SelectItem>
                      <SelectItem value="karnataka">Karnataka</SelectItem>
                      <SelectItem value="delhi-agra">Delhi & Agra</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="duration">{t('planner.duration')} *</Label>
                  <Select value={formData.duration} onValueChange={(value) => setFormData({...formData, duration: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select duration" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="3">3 Days</SelectItem>
                      <SelectItem value="5">5 Days</SelectItem>
                      <SelectItem value="7">7 Days</SelectItem>
                      <SelectItem value="10">10 Days</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="budget">{t('planner.budget')} *</Label>
                  <Select value={formData.budget} onValueChange={(value) => setFormData({...formData, budget: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select budget range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="15000">₹10,000 - ₹15,000</SelectItem>
                      <SelectItem value="25000">₹15,000 - ₹25,000</SelectItem>
                      <SelectItem value="40000">₹25,000 - ₹40,000</SelectItem>
                      <SelectItem value="60000">₹40,000+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="interests">{t('planner.interests')}</Label>
                  <Select value={formData.interests} onValueChange={(value) => setFormData({...formData, interests: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your interests" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="architecture">Architecture</SelectItem>
                      <SelectItem value="culture">Culture & Traditions</SelectItem>
                      <SelectItem value="food">Food & Cuisine</SelectItem>
                      <SelectItem value="photography">Photography</SelectItem>
                      <SelectItem value="spirituality">Spirituality</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="groupSize">{t('planner.groupSize')}</Label>
                  <Input
                    id="groupSize"
                    type="number"
                    placeholder="Number of travelers"
                    value={formData.groupSize}
                    onChange={(e) => setFormData({...formData, groupSize: e.target.value})}
                  />
                </div>

                <Button onClick={generateItinerary} className="w-full btn-primary-glow">
                  <Sparkles className="w-4 h-4 mr-2" />
                  {t('planner.generateItinerary')}
                </Button>
              </CardContent>
            </Card>

            {/* Generated Itinerary */}
            {itinerary && (
              <Card className="card-heritage">
                <CardHeader>
                  <CardTitle className="text-primary">{itinerary.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {itinerary.days.map((day: any, index: number) => (
                    <div key={index} className="border-l-4 border-primary/30 pl-4">
                      <h3 className="font-semibold text-lg mb-2">
                        Day {day.day}: {day.title}
                      </h3>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        {day.activities.map((activity: string, i: number) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                            {activity}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}

                  <div className="pt-4 border-t">
                    <h4 className="font-semibold mb-2">Estimated Cost: {itinerary.estimatedCost}</h4>
                    <p className="text-sm text-muted-foreground mb-2">Includes:</p>
                    <div className="flex flex-wrap gap-2">
                      {itinerary.includes.map((item: string, index: number) => (
                        <span
                          key={index}
                          className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Button className="w-full" variant="outline">
                    {t('planner.bookNow')}
                  </Button>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Planner;