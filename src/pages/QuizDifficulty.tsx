import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import { LanguageToggle } from "@/components/LanguageToggle";
import { ArrowLeft, Brain, Zap, Target } from "lucide-react";

const QuizDifficulty = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  const difficulties = [
    {
      level: 'easy',
      icon: <Zap className="w-8 h-8" />,
      color: 'bg-green-500',
      description: 'Basic heritage knowledge',
      questions: '5 questions'
    },
    {
      level: 'medium',
      icon: <Brain className="w-8 h-8" />,
      color: 'bg-yellow-500',
      description: 'Intermediate heritage facts',
      questions: '8 questions'
    },
    {
      level: 'hard',
      icon: <Target className="w-8 h-8" />,
      color: 'bg-red-500',
      description: 'Advanced heritage expertise',
      questions: '10 questions'
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
        <div className="max-w-4xl mx-auto">
          <h1 className="text-heritage-title text-secondary mb-6 text-center">
            {t('quiz.title')}
          </h1>
          <p className="text-heritage-subtitle mb-12 leading-relaxed text-center">
            {t('quiz.selectDifficulty')}
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            {difficulties.map((difficulty, index) => (
              <Card 
                key={index}
                className="card-heritage cursor-pointer transition-all duration-300 hover:scale-105"
                onClick={() => navigate(`/quiz?difficulty=${difficulty.level}`)}
              >
                <CardHeader className="text-center">
                  <div className={`w-16 h-16 ${difficulty.color} rounded-full flex items-center justify-center mx-auto mb-4 text-white`}>
                    {difficulty.icon}
                  </div>
                  <CardTitle className="text-2xl capitalize">
                    {t(`quiz.${difficulty.level}`)}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground mb-2">
                    {difficulty.description}
                  </p>
                  <p className="text-sm font-semibold">
                    {difficulty.questions}
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

export default QuizDifficulty;