import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import { useLanguage } from "@/contexts/LanguageContext";
import { LanguageToggle } from "@/components/LanguageToggle";
import { ArrowLeft } from "lucide-react";

const Festivals = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());

  const festivals = [
    {
      name: "Diwali",
      date: "2024-11-01",
      description: "Festival of Lights celebrated across India",
      region: "Pan-India",
      traditions: ["Oil lamps", "Fireworks", "Sweets", "Rangoli"]
    },
    {
      name: "Holi",
      date: "2024-03-25",
      description: "Festival of Colors marking spring arrival",
      region: "North India",
      traditions: ["Colored powder", "Water balloons", "Gujiya", "Music"]
    },
    {
      name: "Onam",
      date: "2024-09-15",
      description: "Harvest festival of Kerala",
      region: "Kerala",
      traditions: ["Pookalam", "Sadya", "Kathakali", "Boat races"]
    },
    {
      name: "Durga Puja",
      date: "2024-10-15",
      description: "Worship of Goddess Durga",
      region: "West Bengal",
      traditions: ["Pandals", "Cultural programs", "Dhunuchi dance", "Bhog"]
    },
    {
      name: "Ganesh Chaturthi",
      date: "2024-09-07",
      description: "Birth celebration of Lord Ganesha",
      region: "Maharashtra",
      traditions: ["Ganesh idols", "Modak", "Processions", "Visarjan"]
    }
  ];

  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const getFestivalsForMonth = (month: number) => {
    return festivals.filter(festival => {
      const festivalMonth = new Date(festival.date).getMonth();
      return festivalMonth === month;
    });
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
        <div className="max-w-6xl mx-auto">
          <h1 className="text-heritage-title text-secondary mb-6 text-center">
            Indian Festivals Calendar
          </h1>
          <p className="text-heritage-subtitle mb-12 leading-relaxed text-center">
            Discover festivals celebrated throughout the year
          </p>

          <div className="grid lg:grid-cols-12 gap-8">
            {/* Month Navigation */}
            <div className="lg:col-span-3">
              <Card className="card-heritage">
                <CardHeader>
                  <CardTitle className="text-lg">Select Month</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-2">
                    {months.map((month, index) => (
                      <Button
                        key={month}
                        variant="outline"
                        size="sm"
                        onClick={() => setSelectedDate(new Date(2024, index, 1))}
                        className="justify-start"
                      >
                        {month}
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Festival Details */}
            <div className="lg:col-span-9">
              <div className="grid gap-6">
                {selectedDate && getFestivalsForMonth(selectedDate.getMonth()).map((festival, index) => (
                  <Card key={index} className="card-heritage">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-2xl text-primary mb-2">
                            {festival.name}
                          </CardTitle>
                          <p className="text-sm text-muted-foreground">
                            📅 {new Date(festival.date).toLocaleDateString('en-US', { 
                              month: 'long', 
                              day: 'numeric' 
                            })} • 📍 {festival.region}
                          </p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">
                        {festival.description}
                      </p>
                      <div>
                        <h4 className="font-semibold mb-2">Traditional Elements:</h4>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-2">
                          {festival.traditions.map((tradition, idx) => (
                            <div key={idx} className="bg-accent/10 p-2 rounded text-center text-sm">
                              {tradition}
                            </div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
                
                {selectedDate && getFestivalsForMonth(selectedDate.getMonth()).length === 0 && (
                  <Card className="card-heritage">
                    <CardContent className="text-center py-12">
                      <p className="text-muted-foreground">
                        No major festivals found for {months[selectedDate.getMonth()]}
                      </p>
                    </CardContent>
                  </Card>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Festivals;