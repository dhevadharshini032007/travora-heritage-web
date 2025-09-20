import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/contexts/LanguageContext";
import { LanguageToggle } from "@/components/LanguageToggle";
import { ArrowLeft, MapPin, Calendar } from "lucide-react";

const Festivals = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());

  const festivals = [
    // January
    {
      name: "Pongal",
      date: "2024-01-15",
      description: "Harvest festival celebrated in Tamil Nadu to thank the Sun God",
      region: "Tamil Nadu",
      state: "Tamil Nadu",
      traditions: ["Rangoli", "Sweet Pongal", "Jallikattu", "Kite Flying"],
      significance: "Four-day harvest festival marking the end of winter solstice",
      image: "/src/assets/brihadeeswarar-temple.jpg"
    },
    {
      name: "Makar Sankranti",
      date: "2024-01-14",
      description: "Festival marking the transition of Sun into Capricorn",
      region: "Pan-India",
      state: "Multiple States",
      traditions: ["Kite Flying", "Sesame Sweets", "Holy Bath", "Rangoli"],
      significance: "Celebrates the end of winter and beginning of longer days",
      image: "/src/assets/heritage-sites.jpg"
    },
    // February
    {
      name: "Vasant Panchami",
      date: "2024-02-14",
      description: "Festival dedicated to Goddess Saraswati and arrival of spring",
      region: "North India",
      state: "Punjab, Haryana, UP",
      traditions: ["Yellow Clothes", "Saraswati Puja", "Books Worship", "Kite Flying"],
      significance: "Celebrates knowledge, wisdom, and the arts",
      image: "/src/assets/golden-temple.jpg"
    },
    // March
    {
      name: "Holi",
      date: "2024-03-25",
      description: "Festival of Colors marking spring arrival and victory of good over evil",
      region: "North India",
      state: "UP, Rajasthan, Punjab",
      traditions: ["Colored Powder", "Water Balloons", "Gujiya", "Folk Music", "Holika Dahan"],
      significance: "Celebrates the divine love of Krishna and Radha",
      image: "/src/assets/amber-fort.jpg"
    },
    {
      name: "Ugadi",
      date: "2024-03-22",
      description: "Telugu New Year celebrated in Andhra Pradesh and Telangana",
      region: "South India",
      state: "Andhra Pradesh, Telangana",
      traditions: ["Ugadi Pachadi", "Neem Flowers", "New Clothes", "Prayers"],
      significance: "Marks the beginning of new year according to lunar calendar",
      image: "/src/assets/golconda-fort.jpg"
    },
    // April
    {
      name: "Baisakhi",
      date: "2024-04-13",
      description: "Harvest festival and Sikh New Year",
      region: "Punjab",
      state: "Punjab",
      traditions: ["Bhangra", "Giddha", "Gurudwara Visits", "Community Feast"],
      significance: "Commemorates the formation of Khalsa by Guru Gobind Singh",
      image: "/src/assets/golden-temple.jpg"
    },
    {
      name: "Rama Navami",
      date: "2024-04-17",
      description: "Birth celebration of Lord Rama",
      region: "Pan-India",
      state: "Multiple States",
      traditions: ["Temple Visits", "Ramayana Recitation", "Processions", "Fasting"],
      significance: "Celebrates the birth of Lord Rama, symbol of righteousness",
      image: "/src/assets/heritage-sites.jpg"
    },
    // May
    {
      name: "Buddha Purnima",
      date: "2024-05-23",
      description: "Birth, enlightenment and death of Lord Buddha",
      region: "Pan-India",
      state: "Multiple States",
      traditions: ["Meditation", "Monastery Visits", "Prayer Flags", "Charity"],
      significance: "Commemorates the three most important events in Buddha's life",
      image: "/src/assets/monastery.jpg"
    },
    // June - July
    {
      name: "Rath Yatra",
      date: "2024-07-07",
      description: "Chariot festival of Lord Jagannath",
      region: "Odisha",
      state: "Odisha",
      traditions: ["Chariot Procession", "Temple Rituals", "Community Feast", "Devotional Songs"],
      significance: "Annual journey of Lord Jagannath to his aunt's temple",
      image: "/src/assets/konark-sun-temple.jpg"
    },
    // August
    {
      name: "Krishna Janmashtami",
      date: "2024-08-26",
      description: "Birth celebration of Lord Krishna",
      region: "Pan-India",
      state: "Multiple States",
      traditions: ["Dahi Handi", "Midnight Prayers", "Jhulanotsav", "Devotional Songs"],
      significance: "Celebrates the birth of Lord Krishna, the eighth avatar of Vishnu",
      image: "/src/assets/heritage-sites.jpg"
    },
    // September
    {
      name: "Onam",
      date: "2024-09-15",
      description: "Harvest festival and homecoming of King Mahabali",
      region: "Kerala",
      state: "Kerala",
      traditions: ["Pookalam (Flower Carpet)", "Sadya (Feast)", "Kathakali", "Boat Races", "Pulikali"],
      significance: "Celebrates the golden age of King Mahabali's rule",
      image: "/src/assets/namdroling-monastery.jpg"
    },
    {
      name: "Ganesh Chaturthi",
      date: "2024-09-07",
      description: "Birth celebration of Lord Ganesha",
      region: "Maharashtra",
      state: "Maharashtra",
      traditions: ["Ganesh Idols", "Modak", "Processions", "Visarjan", "Cultural Programs"],
      significance: "Celebrates the birth of Lord Ganesha, remover of obstacles",
      image: "/src/assets/heritage-sites.jpg"
    },
    // October
    {
      name: "Durga Puja",
      date: "2024-10-15",
      description: "Worship of Goddess Durga and victory over evil",
      region: "West Bengal",
      state: "West Bengal",
      traditions: ["Pandals", "Cultural Programs", "Dhunuchi Dance", "Bhog", "Sindoor Khela"],
      significance: "Celebrates the victory of Goddess Durga over demon Mahishasura",
      image: "/src/assets/heritage-sites.jpg"
    },
    {
      name: "Navratri",
      date: "2024-10-03",
      description: "Nine nights dedicated to Goddess Durga",
      region: "Gujarat",
      state: "Gujarat",
      traditions: ["Garba Dance", "Dandiya Raas", "Fasting", "Goddess Worship"],
      significance: "Nine forms of Goddess Durga worshipped over nine nights",
      image: "/src/assets/somnath-temple.jpg"
    },
    {
      name: "Karva Chauth",
      date: "2024-10-20",
      description: "Festival where married women fast for their husbands",
      region: "North India",
      state: "Punjab, Haryana, Rajasthan",
      traditions: ["Day-long Fasting", "Moon Worship", "Henna Decoration", "Traditional Attire"],
      significance: "Celebrates marital love and the bond between husband and wife",
      image: "/src/assets/amber-fort.jpg"
    },
    // November
    {
      name: "Diwali",
      date: "2024-11-01",
      description: "Festival of Lights celebrating victory of light over darkness",
      region: "Pan-India",
      state: "Multiple States",
      traditions: ["Oil Lamps", "Fireworks", "Sweets", "Rangoli", "Lakshmi Puja"],
      significance: "Celebrates return of Lord Rama to Ayodhya after defeating Ravana",
      image: "/src/assets/heritage-sites.jpg"
    },
    {
      name: "Bhai Dooj",
      date: "2024-11-03",
      description: "Festival celebrating brother-sister bond",
      region: "North India",
      state: "Multiple States",
      traditions: ["Tilaka Ceremony", "Sister's Prayers", "Gift Exchange", "Special Meals"],
      significance: "Celebrates the love and duty between brothers and sisters",
      image: "/src/assets/heritage-sites.jpg"
    },
    // December
    {
      name: "Christmas",
      date: "2024-12-25",
      description: "Birth celebration of Jesus Christ",
      region: "Pan-India",
      state: "Goa, Kerala, Northeast",
      traditions: ["Church Services", "Christmas Trees", "Carol Singing", "Feast"],
      significance: "Celebrates the birth of Jesus Christ",
      image: "/src/assets/heritage-sites.jpg"
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

  const getStateColor = (state: string) => {
    const colors = [
      "bg-red-100 text-red-800",
      "bg-blue-100 text-blue-800", 
      "bg-green-100 text-green-800",
      "bg-yellow-100 text-yellow-800",
      "bg-purple-100 text-purple-800",
      "bg-pink-100 text-pink-800"
    ];
    return colors[state.length % colors.length];
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
        <div className="max-w-7xl mx-auto">
          <h1 className="text-heritage-title text-secondary mb-6 text-center">
            {t('festivals.title')}
          </h1>
          <p className="text-heritage-subtitle mb-12 leading-relaxed text-center">
            {t('festivals.subtitle')}
          </p>

          <div className="grid lg:grid-cols-12 gap-8">
            {/* Month Navigation */}
            <div className="lg:col-span-3">
              <Card className="card-heritage sticky top-6">
                <CardHeader>
                  <CardTitle className="text-lg">{t('festivals.selectMonth')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-2">
                    {months.map((month, index) => (
                      <Button
                        key={month}
                        variant={selectedDate?.getMonth() === index ? "default" : "outline"}
                        size="sm"
                        onClick={() => setSelectedDate(new Date(2024, index, 1))}
                        className="justify-start"
                      >
                        <Calendar className="w-4 h-4 mr-2" />
                        {month}
                        <Badge variant="secondary" className="ml-auto">
                          {getFestivalsForMonth(index).length}
                        </Badge>
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
                  <Card key={index} className="card-heritage overflow-hidden">
                    <div className="relative h-48">
                      <img 
                        src={festival.image} 
                        alt={festival.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-heritage opacity-50"></div>
                      <div className="absolute top-4 left-4">
                        <Badge className={getStateColor(festival.state)}>
                          <MapPin className="w-3 h-3 mr-1" />
                          {festival.state}
                        </Badge>
                      </div>
                      <div className="absolute bottom-4 left-4">
                        <h2 className="text-2xl font-bold text-white mb-1">
                          {festival.name}
                        </h2>
                        <p className="text-white/90">
                          📅 {new Date(festival.date).toLocaleDateString('en-US', { 
                            month: 'long', 
                            day: 'numeric' 
                          })}
                        </p>
                      </div>
                    </div>
                    
                    <CardContent className="p-6">
                      <div className="space-y-6">
                        <div>
                          <h3 className="font-semibold text-lg mb-2 text-secondary">{t('festivals.description')}</h3>
                          <p className="text-muted-foreground leading-relaxed">
                            {festival.description}
                          </p>
                        </div>

                        <div>
                          <h3 className="font-semibold text-lg mb-2 text-secondary">{t('festivals.significance')}</h3>
                          <p className="text-muted-foreground leading-relaxed">
                            {festival.significance}
                          </p>
                        </div>

                        <div>
                          <h3 className="font-semibold text-lg mb-3 text-secondary">{t('festivals.traditions')}</h3>
                          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                            {festival.traditions.map((tradition, idx) => (
                              <div key={idx} className="bg-accent/10 p-3 rounded-lg text-center hover:bg-accent/20 transition-colors">
                                <span className="font-medium">{tradition}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="flex items-center justify-between pt-4 border-t border-muted">
                          <div className="flex items-center text-muted-foreground">
                            <MapPin className="w-4 h-4 mr-2" />
                            <span>{festival.region}</span>
                          </div>
                          <Button variant="outline" size="sm">
                            {t('festivals.learnMore')}
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
                
                {selectedDate && getFestivalsForMonth(selectedDate.getMonth()).length === 0 && (
                  <Card className="card-heritage">
                    <CardContent className="text-center py-16">
                      <div className="text-6xl mb-4">🎭</div>
                      <h3 className="text-xl font-semibold mb-2 text-secondary">
                        {t('festivals.noFestivals')}
                      </h3>
                      <p className="text-muted-foreground">
                        {t('festivals.noFestivalsDesc')} {months[selectedDate.getMonth()]}
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