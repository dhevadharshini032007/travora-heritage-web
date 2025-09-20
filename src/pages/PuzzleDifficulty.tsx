import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import { LanguageToggle } from "@/components/LanguageToggle";
import { ArrowLeft, Brain, Zap, Target } from "lucide-react";

const PuzzleDifficulty = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  const difficulties = [
    {
      level: "easy",
      icon: <Zap className="w-16 h-16 text-green-500" />,
      color: "text-green-600",
      description: "Simple heritage sites with common names",
      puzzles: 3
    },
    {
      level: "medium",
      icon: <Brain className="w-16 h-16 text-yellow-500" />,
      color: "text-yellow-600", 
      description: "Moderate challenge with historical monuments",
      puzzles: 4
    },
    {
      level: "hard",
      icon: <Target className="w-16 h-16 text-red-500" />,
      color: "text-red-600",
      description: "Difficult ancient sites and complex names",
      puzzles: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Header */}
      <div className="flex items-center justify-between p-6">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => navigate('/learn')}
          className="text-primary hover:bg-primary/10"
        >
          <ArrowLeft className="h-6 w-6" />
        </Button>
        <LanguageToggle />
      </div>

      <div className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-heritage-title text-secondary mb-6">
            {t('puzzles.selectDifficulty')}
          </h1>
          <p className="text-heritage-subtitle mb-12 leading-relaxed">
            {t('puzzles.chooseDifficulty')}
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {difficulties.map((difficulty, index) => (
              <Card 
                key={index}
                className="card-heritage cursor-pointer transition-all duration-300 hover:scale-105"
                onClick={() => navigate(`/puzzles?difficulty=${difficulty.level}`)}
              >
                <CardHeader className="text-center">
                  <div className="mb-4 flex justify-center">{difficulty.icon}</div>
                  <CardTitle className={`text-2xl ${difficulty.color} capitalize`}>
                    {t(`difficulty.${difficulty.level}`)}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground mb-4">
                    {difficulty.description}
                  </p>
                  <p className="text-sm font-medium">
                    {difficulty.puzzles} {t('puzzles.puzzles')}
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

export default PuzzleDifficulty;