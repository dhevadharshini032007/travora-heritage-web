import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import { LanguageToggle } from "@/components/LanguageToggle";
import { ArrowLeft, Camera, Trophy, Calendar, Users, Heart } from "lucide-react";
import { toast } from "sonner";

const Contests = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();
  const [selectedContest, setSelectedContest] = useState<string | null>(null);

  const contests = [
    {
      id: "heritage-monuments",
      title: "Heritage Monuments Photography",
      description: "Capture the architectural beauty of Indian monuments",
      prize: "₹50,000",
      deadline: "2024-12-31",
      participants: 1250,
      category: "Architecture",
      status: "Active",
      image: "🏛️"
    },
    {
      id: "cultural-festivals",
      title: "Cultural Festivals Contest",
      description: "Document the vibrant festivals across India",
      prize: "₹30,000",
      deadline: "2024-11-30",
      participants: 890,
      category: "Culture",
      status: "Active",
      image: "🎊"
    },
    {
      id: "traditional-crafts",
      title: "Traditional Crafts & Artisans",
      description: "Showcase traditional Indian craftsmanship",
      prize: "₹25,000",
      deadline: "2025-01-15",
      participants: 634,
      category: "Arts & Crafts",
      status: "Active",
      image: "🎨"
    },
    {
      id: "heritage-food",
      title: "Heritage Food Photography",
      description: "Capture traditional Indian cuisine and food culture",
      prize: "₹20,000",
      deadline: "2024-10-31",
      participants: 456,
      category: "Food",
      status: "Ending Soon",
      image: "🍛"
    }
  ];

  const winners = [
    {
      name: "Arjun Mehta",
      photo: "Red Fort at Sunset",
      prize: "1st Prize - ₹50,000",
      category: "Architecture"
    },
    {
      name: "Priya Singh",
      photo: "Durga Puja Celebration",
      prize: "2nd Prize - ₹30,000",
      category: "Festivals"
    },
    {
      name: "Vikram Raj",
      photo: "Pottery Artisan at Work",
      prize: "3rd Prize - ₹20,000",
      category: "Crafts"
    }
  ];

  const handleParticipate = (contestId: string) => {
    setSelectedContest(contestId);
    toast.success("Contest participation registered! Upload your photos to compete.");
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
            {t('contests.title')}
          </h1>
          <p className="text-heritage-subtitle mb-12 leading-relaxed text-center">
            {t('contests.subtitle')}
          </p>

          {/* Active Contests */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-center">Active Contests</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {contests.map((contest) => (
                <Card key={contest.id} className="card-heritage">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="text-4xl">{contest.image}</div>
                      <div className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        contest.status === 'Ending Soon' 
                          ? 'bg-red-100 text-red-800' 
                          : 'bg-green-100 text-green-800'
                      }`}>
                        {contest.status}
                      </div>
                    </div>
                    <CardTitle className="text-xl">{contest.title}</CardTitle>
                    <p className="text-muted-foreground">{contest.description}</p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="flex items-center gap-2">
                        <Trophy className="w-4 h-4 text-yellow-500" />
                        <span>Prize: {contest.prize}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-blue-500" />
                        <span>Ends: {contest.deadline}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-green-500" />
                        <span>{contest.participants} participants</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Camera className="w-4 h-4 text-purple-500" />
                        <span>{contest.category}</span>
                      </div>
                    </div>
                    
                    <Button 
                      className="w-full btn-primary-glow"
                      onClick={() => handleParticipate(contest.id)}
                    >
                      {selectedContest === contest.id ? 'Registered!' : 'Participate Now'}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Recent Winners */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-center">Recent Winners</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {winners.map((winner, index) => (
                <Card key={index} className="card-heritage text-center">
                  <CardHeader>
                    <div className="text-4xl mb-2">🏆</div>
                    <CardTitle className="text-lg">{winner.name}</CardTitle>
                    <p className="text-sm text-muted-foreground">"{winner.photo}"</p>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-primary/10 text-primary px-3 py-2 rounded-full text-sm font-semibold">
                      {winner.prize}
                    </div>
                    <p className="text-xs text-muted-foreground mt-2">{winner.category}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Contest Rules */}
          <Card className="card-heritage">
            <CardHeader>
              <CardTitle className="text-center">Contest Rules & Guidelines</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">Eligibility:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Open to all photography enthusiasts</li>
                    <li>• Must be 18+ years old</li>
                    <li>• Original photographs only</li>
                    <li>• India residents only</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Submission Guidelines:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• High resolution (min 2048px)</li>
                    <li>• JPEG format only</li>
                    <li>• Maximum 5 photos per contest</li>
                    <li>• Include location and description</li>
                  </ul>
                </div>
              </div>
              
              <div className="pt-4 border-t">
                <h4 className="font-semibold mb-2">Judging Criteria:</h4>
                <div className="flex flex-wrap gap-4 text-sm">
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full">Technical Quality</span>
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full">Creativity</span>
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full">Cultural Relevance</span>
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full">Storytelling</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contests;