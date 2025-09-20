import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, MapPin, Star, Clock, Camera, Users, Calendar, Globe } from "lucide-react";
import { HeritageModel3D } from "@/components/HeritageModel3D";

// Import specific images
import brihadeeswarar from "@/assets/brihadeeswarar-temple.jpg";
import konarkSun from "@/assets/konark-sun-temple.jpg";
import khajuraho from "@/assets/khajuraho-temples.jpg";
import somnath from "@/assets/somnath-temple.jpg";
import amberFort from "@/assets/amber-fort.jpg";
import mehrangarhFort from "@/assets/mehrangarh-fort.jpg";
import golcondaFort from "@/assets/golconda-fort.jpg";
import fortImage from "@/assets/fort.jpg";
import monasteryImage from "@/assets/monastery.jpg";
import tashilhunpoMonastery from "@/assets/tashilhunpo-monastery.jpg";
import mindrollingMonastery from "@/assets/mindrolling-monastery.jpg";
import namdrolingMonastery from "@/assets/namdroling-monastery.jpg";

const SiteDetails = () => {
  const { category, id } = useParams();
  const navigate = useNavigate();

  // Heritage sites data with detailed information
  const heritageData = {
    temples: {
      "1": {
        name: "Brihadeeswarar Temple",
        location: "Thanjavur, Tamil Nadu",
        rating: 4.9,
        visitTime: "2-3 hours",
        image: brihadeeswarar,
        featured: true,
        yearBuilt: "1010 CE",
        architecture: "Dravidian",
        description: "The Brihadeeswarar Temple, also known as Rajarajeswara Temple, is a Hindu temple dedicated to Shiva. Built by Raja Raja Chola I between 1003 and 1010 CE, it is a brilliant example of the major heights achieved by Cholas in temple architecture.",
        highlights: [
          "UNESCO World Heritage Site",
          "13-story vimana (tower) reaching 66m height",
          "Massive Nandi statue carved from single stone",
          "Intricate bronze sculptures and frescoes"
        ],
        history: "Built during the reign of Raja Raja Chola I, this temple represents the pinnacle of Chola architecture. The temple was conceived as a royal chapel where the emperor could directly worship. The massive structure was completed in just seven years, showcasing the advanced architectural and engineering capabilities of the Chola period.",
        architecture_details: "The temple follows the Dravidian architectural style with a massive pyramidal tower (vimana) that dominates the skyline. The temple's design includes a sanctum, a vestibule, a large hall, and a pavilion. The entire structure is built using granite blocks without any binding material.",
        timings: "6:00 AM - 12:30 PM, 4:00 PM - 8:30 PM",
        entryFee: "₹30 for Indians, ₹500 for foreigners"
      },
      "2": {
        name: "Konark Sun Temple",
        location: "Konark, Odisha",
        rating: 4.8,
        visitTime: "2 hours",
        image: konarkSun,
        featured: true,
        yearBuilt: "1250 CE",
        architecture: "Kalinga",
        description: "The Konark Sun Temple is a 13th-century CE Hindu Sun temple at Konark about 35 kilometres northeast of Puri. Dedicated to the Hindu Sun God Surya, what remains of the temple complex has the appearance of a 100-foot high chariot with immense wheels and horses.",
        highlights: [
          "UNESCO World Heritage Site",
          "Designed as a colossal chariot with 24 wheels",
          "Intricate stone carvings depicting daily life",
          "Astronomical significance in wheel positioning"
        ],
        history: "Built in the 13th century by King Narasimhadeva I of the Eastern Ganga Dynasty, the temple was conceived as a massive chariot of the Sun God. Legend says that the temple was completed in 12 years by 1,200 artisans and architects.",
        architecture_details: "The temple is designed in the shape of a colossal chariot with 24 elaborately carved stone wheels, each about 10 feet in diameter, and is pulled by seven spirited horses. The wheels are not merely decorative but also function as sundials.",
        timings: "6:00 AM - 8:00 PM",
        entryFee: "₹40 for Indians, ₹600 for foreigners"
      },
      "3": {
        name: "Khajuraho Temples",
        location: "Madhya Pradesh",
        rating: 4.7,
        visitTime: "4-5 hours",
        image: khajuraho,
        featured: false,
        yearBuilt: "950-1050 CE",
        architecture: "Nagara",
        description: "The Khajuraho Group of Monuments is a group of Hindu and Jain temples in Chhatarpur district, Madhya Pradesh. They are a UNESCO World Heritage Site and are famous for their nagara-style architectural symbolism and erotic sculptures.",
        highlights: [
          "UNESCO World Heritage Site",
          "85 temples originally, 25 survive today",
          "Famous for intricate erotic sculptures",
          "Perfect fusion of architecture and sculpture"
        ],
        history: "Built between 950 and 1050 CE by the Chandela dynasty, these temples represent the peak of creative architecture. The temples were 'rediscovered' by British engineer T.S. Burt in 1838, hidden in dense forests for centuries.",
        architecture_details: "Built in the Nagara style, the temples are characterized by their soaring towers, elaborate decoration, and perfect proportions. The temples are arranged in three groups - Western, Eastern, and Southern - with the Western group being the most famous.",
        timings: "6:00 AM - 6:00 PM",
        entryFee: "₹40 for Indians, ₹600 for foreigners"
      },
      "4": {
        name: "Somnath Temple",
        location: "Gujarat",
        rating: 4.8,
        visitTime: "1-2 hours",
        image: somnath,
        featured: true,
        yearBuilt: "1951 CE (Rebuilt)",
        architecture: "Chalukya",
        description: "The Somnath temple is a Hindu temple located in Prabhas Patan, Veraval in Gujarat. It is one of the twelve Jyotirlinga shrines of Shiva and is considered the first among the twelve.",
        highlights: [
          "First among 12 Jyotirlingas of Lord Shiva",
          "Reconstructed multiple times in history",
          "Beautiful location overlooking Arabian Sea",
          "Symbol of resilience and faith"
        ],
        history: "The original temple is believed to have been built in gold by Somraj (the moon god), then in silver by Ravana, in wood by Lord Krishna, and in stone by Bhimdev. The temple has been destroyed and rebuilt multiple times, with the current structure completed in 1951.",
        architecture_details: "The present temple is built in the Chalukya style of architecture, reflecting the glory of ancient Indian temple architecture. The temple's spire reaches a height of 155 feet, and the flag atop measures 27 feet.",
        timings: "6:00 AM - 9:00 PM",
        entryFee: "Free entry"
      }
    },
    forts: {
      "1": {
        name: "Red Fort",
        location: "Delhi",
        rating: 4.9,
        visitTime: "3-4 hours",
        image: fortImage,
        featured: true,
        yearBuilt: "1648 CE",
        architecture: "Mughal",
        description: "The Red Fort is a historic walled city in Delhi, India, which served as the main residence of the Mughal Emperors for nearly 200 years, until 1857.",
        highlights: [
          "UNESCO World Heritage Site",
          "Symbol of India's independence",
          "Magnificent Mughal architecture",
          "Houses multiple palaces and gardens"
        ],
        history: "Constructed by Emperor Shah Jahan in 1648, the Red Fort served as the political and ceremonial center of the Mughal state. It was from here that the last Mughal emperor was exiled by the British following the Indian Rebellion of 1857.",
        architecture_details: "The fort represents the zenith of Mughal creativity which prevailed during Shah Jahan's reign. The red sandstone walls of the fort are about 2.41 km in circumference and vary in height from 18 meters on the river side to 33 meters on the city side.",
        timings: "9:30 AM - 4:30 PM (Closed on Mondays)",
        entryFee: "₹35 for Indians, ₹500 for foreigners"
      },
      "2": {
        name: "Amber Fort",
        location: "Jaipur, Rajasthan",
        rating: 4.8,
        visitTime: "4-5 hours",
        image: amberFort,
        featured: true,
        yearBuilt: "1592 CE",
        architecture: "Rajput",
        description: "Amber Fort is a majestic fort located in Amer, a town with an area of 4 square kilometres located 11 kilometres from Jaipur, Rajasthan state, India.",
        highlights: [
          "UNESCO World Heritage Site",
          "Sheesh Mahal (Mirror Palace)",
          "Elephant rides to the fort",
          "Stunning views of Maota Lake"
        ],
        history: "Built by Raja Man Singh I in 1592, Amber Fort served as the main residence of the Rajput rulers for several centuries.",
        architecture_details: "The fort is known for its artistic Hindu and Rajput style elements, with large ramparts and series of gates and cobbled paths.",
        timings: "8:00 AM - 6:00 PM",
        entryFee: "₹25 for Indians, ₹550 for foreigners"
      },
      "3": {
        name: "Mehrangarh Fort",
        location: "Jodhpur, Rajasthan",
        rating: 4.9,
        visitTime: "3-4 hours",
        image: mehrangarhFort,
        featured: false,
        yearBuilt: "1459 CE",
        architecture: "Rajput",
        description: "One of the largest forts in India, Mehrangarh Fort stands 400 feet above the city of Jodhpur and is enclosed by imposing thick walls.",
        highlights: [
          "One of largest forts in India",
          "Museum with royal artifacts",
          "Panoramic city views",
          "Intricate latticed windows"
        ],
        history: "Built by Rao Jodha in 1459, the fort has been expanded by successive rulers and houses several palaces with intricate carvings.",
        architecture_details: "The fort features massive walls and intricate carvings, with seven gates leading to the main fort area.",
        timings: "9:00 AM - 5:00 PM",
        entryFee: "₹30 for Indians, ₹600 for foreigners"
      },
      "4": {
        name: "Golconda Fort",
        location: "Hyderabad, Telangana",
        rating: 4.7,
        visitTime: "2-3 hours",
        image: golcondaFort,
        featured: true,
        yearBuilt: "1143 CE",
        architecture: "Indo-Islamic",
        description: "Golconda Fort was a medieval fort that was later fortified by the Qutb Shahi dynasty and became their capital.",
        highlights: [
          "Acoustic architecture",
          "Diamond trading center",
          "Light and sound show",
          "Fateh Darwaza (Victory Gate)"
        ],
        history: "Originally built by the Kakatiya dynasty in the 11th century, later expanded by the Qutb Shahi rulers.",
        architecture_details: "The fort is famous for its acoustic architecture and the ingenious water supply system.",
        timings: "9:00 AM - 5:30 PM",
        entryFee: "₹15 for Indians, ₹200 for foreigners"
      }
    },
    monasteries: {
      "1": {
        name: "Hemis Monastery",
        location: "Ladakh, Jammu & Kashmir",
        rating: 4.8,
        visitTime: "2-3 hours",
        image: monasteryImage,
        featured: true,
        yearBuilt: "1630 CE",
        architecture: "Tibetan Buddhist",
        description: "Hemis Monastery is a Himalayan Buddhist monastery (gompa) of the Drukpa Lineage, in Hemis, Ladakh, India. Situated 45 km from Leh, the monastery was re-established in 1630 by the Ladakhi king Sengge Namgyal.",
        highlights: [
          "Largest and wealthiest monastery in Ladakh",
          "Famous for Hemis Festival",
          "Ancient manuscripts and artifacts",
          "Stunning mountain backdrop"
        ],
        history: "Originally built in 1630 by Stagsang Raspa Nawang Gyatso under the patronage of King Sengge Namgyal. The monastery belongs to the Drukpa Lineage of Buddhism and houses a famous statue of Buddha made of copper and gold.",
        architecture_details: "The monastery follows traditional Tibetan architecture with white walls, flat roofs, and colorful decorations. The main building is three stories high and houses a large collection of ancient Buddhist artifacts, including gold statues and ancient manuscripts.",
        timings: "8:00 AM - 6:00 PM",
        entryFee: "₹25 for Indians, ₹50 for foreigners"
      },
      "2": {
        name: "Tashilhunpo Monastery",
        location: "Sikkim",
        rating: 4.6,
        visitTime: "1-2 hours",
        image: tashilhunpoMonastery,
        featured: false,
        yearBuilt: "1447 CE",
        architecture: "Tibetan Buddhist",
        description: "One of the most significant monasteries in Tibetan Buddhism, serving as the traditional seat of the Panchen Lama.",
        highlights: [
          "Traditional seat of Panchen Lama",
          "Ancient Buddhist sculptures",
          "Peaceful mountain setting",
          "Traditional Tibetan architecture"
        ],
        history: "Founded in 1447 by the 1st Dalai Lama, this monastery has been a center of Buddhist learning for centuries.",
        architecture_details: "Features traditional Tibetan monastic architecture with white-washed walls, golden roofs, and intricate woodwork.",
        timings: "9:00 AM - 5:00 PM",
        entryFee: "₹20 for Indians, ₹40 for foreigners"
      },
      "3": {
        name: "Mindrolling Monastery",
        location: "Dehradun, Uttarakhand",
        rating: 4.7,
        visitTime: "2 hours",
        image: mindrollingMonastery,
        featured: true,
        yearBuilt: "1965 CE",
        architecture: "Tibetan Buddhist",
        description: "One of the largest Buddhist centers in India, featuring a 220-foot tall Buddha statue and traditional monastery complex.",
        highlights: [
          "220-foot tall Buddha statue",
          "Largest Buddhist center in India",
          "Beautiful gardens and grounds",
          "Traditional Tibetan art and architecture"
        ],
        history: "Established in 1965 as the Indian seat of the Mindrolling lineage, one of the six main schools of Tibetan Buddhism.",
        architecture_details: "Combines traditional Tibetan monastery design with modern construction techniques, featuring colorful murals and intricate Buddhist artwork.",
        timings: "6:00 AM - 8:00 PM",
        entryFee: "Free entry, donations welcome"
      },
      "4": {
        name: "Namdroling Monastery",
        location: "Karnataka",
        rating: 4.9,
        visitTime: "3 hours",
        image: namdrolingMonastery,
        featured: false,
        yearBuilt: "1963 CE",
        architecture: "Tibetan Buddhist",
        description: "Also known as the Golden Temple, this is the largest teaching center of Nyingma lineage of Tibetan Buddhism in the world.",
        highlights: [
          "Largest Nyingma teaching center",
          "Golden Buddha statues",
          "Home to thousands of monks",
          "Beautiful Tibetan art and murals"
        ],
        history: "Established in 1963 by Penor Rinpoche, it has grown to become one of the most important centers of Tibetan Buddhism outside Tibet.",
        architecture_details: "Features stunning golden temples with traditional Tibetan architectural elements, colorful prayer flags, and elaborate Buddhist artwork.",
        timings: "5:00 AM - 9:00 PM",
        entryFee: "Free entry"
      }
    }
  };

  const siteData = heritageData[category as keyof typeof heritageData]?.[id as string];

  if (!siteData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Heritage site not found</h1>
          <Button onClick={() => navigate('/categories')}>
            Back to Categories
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Hero Section */}
      <div className="relative h-96 overflow-hidden">
        <img 
          src={siteData.image} 
          alt={siteData.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-heritage opacity-60"></div>
        
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-6">
            <Button
              variant="ghost"
              onClick={() => navigate(`/category/${category}`)}
              className="mb-4 text-white hover:bg-white/20"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to {category?.charAt(0).toUpperCase() + category?.slice(1)}
            </Button>
            
            <div className="max-w-4xl">
              <div className="flex items-center gap-4 mb-4">
                <h1 className="text-heritage-title text-white">
                  {siteData.name}
                </h1>
                {siteData.featured && (
                  <Badge className="bg-primary text-primary-foreground">
                    UNESCO Site
                  </Badge>
                )}
              </div>
              
              <div className="flex items-center text-white/90 mb-4 gap-6">
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 mr-2" />
                  <span className="text-lg">{siteData.location}</span>
                </div>
                <div className="flex items-center">
                  <Star className="w-5 h-5 mr-2 text-heritage-gold fill-current" />
                  <span className="text-lg font-semibold">{siteData.rating}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-5 h-5 mr-2" />
                  <span className="text-lg">{siteData.visitTime}</span>
                </div>
              </div>
              
              <p className="text-xl text-white/90 max-w-3xl leading-relaxed">
                {siteData.description}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Quick Info Cards */}
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <Card className="card-heritage text-center">
              <CardContent className="p-6">
                <Calendar className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="font-bold text-lg text-secondary">{siteData.yearBuilt}</div>
                <div className="text-muted-foreground">Built</div>
              </CardContent>
            </Card>
            
            <Card className="card-heritage text-center">
              <CardContent className="p-6">
                <Globe className="w-8 h-8 text-accent mx-auto mb-3" />
                <div className="font-bold text-lg text-secondary">{siteData.architecture}</div>
                <div className="text-muted-foreground">Architecture</div>
              </CardContent>
            </Card>
            
            <Card className="card-heritage text-center">
              <CardContent className="p-6">
                <Clock className="w-8 h-8 text-heritage-gold mx-auto mb-3" />
                <div className="font-bold text-lg text-secondary">{siteData.timings}</div>
                <div className="text-muted-foreground">Timings</div>
              </CardContent>
            </Card>
            
            <Card className="card-heritage text-center">
              <CardContent className="p-6">
                <Users className="w-8 h-8 text-secondary mx-auto mb-3" />
                <div className="font-bold text-lg text-secondary">{siteData.entryFee}</div>
                <div className="text-muted-foreground">Entry Fee</div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content Tabs */}
          <Tabs defaultValue="overview" className="space-y-8">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="history">History</TabsTrigger>
              <TabsTrigger value="architecture">Architecture</TabsTrigger>
              <TabsTrigger value="3d-model">3D Model</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-8">
              <Card className="card-heritage">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-secondary mb-6">Highlights</h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    {siteData.highlights.map((highlight, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-muted-foreground">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="history" className="space-y-8">
              <Card className="card-heritage">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-secondary mb-6">Historical Background</h2>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {siteData.history}
                  </p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="architecture" className="space-y-8">
              <Card className="card-heritage">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-secondary mb-6">Architectural Details</h2>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {siteData.architecture_details}
                  </p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="3d-model" className="space-y-8">
              <Card className="card-heritage">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-secondary mb-6">Interactive 3D Model</h2>
                  <div className="h-96 rounded-2xl overflow-hidden bg-muted">
                    <HeritageModel3D siteName={siteData.name} />
                  </div>
                  <p className="text-muted-foreground mt-4 text-center">
                    Drag to rotate • Scroll to zoom • Click and drag to explore the monument in 3D
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <Card className="card-heritage bg-gradient-primary">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-primary-foreground mb-4">
                  Plan Your Visit
                </h3>
                <p className="text-primary-foreground/90 mb-6">
                  Ready to experience this magnificent heritage site in person?
                </p>
                <div className="flex justify-center gap-4">
                  <Button className="btn-heritage bg-white text-primary hover:bg-white/90">
                    <MapPin className="w-4 h-4 mr-2" />
                    Get Directions
                  </Button>
                  <Button className="btn-outline-heritage border-white text-white hover:bg-white hover:text-primary">
                    <Camera className="w-4 h-4 mr-2" />
                    Save to Favorites
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

export default SiteDetails;