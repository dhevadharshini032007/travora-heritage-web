import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useLanguage } from "@/contexts/LanguageContext";
import { LanguageToggle } from "@/components/LanguageToggle";
import { ArrowLeft, Trophy, RotateCcw } from "lucide-react";
import { toast } from "sonner";

const Quiz = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  const questions = [
    {
      question: "Which monument is known as the 'Symbol of Love'?",
      options: ["Red Fort", "Taj Mahal", "Qutub Minar", "Gateway of India"],
      correct: 1,
      explanation: "The Taj Mahal was built by Shah Jahan in memory of his wife Mumtaz Mahal."
    },
    {
      question: "In which city is the Golden Temple located?",
      options: ["Delhi", "Mumbai", "Amritsar", "Varanasi"],
      correct: 2,
      explanation: "The Golden Temple (Harmandir Sahib) is located in Amritsar, Punjab."
    },
    {
      question: "Which heritage site is famous for its erotic sculptures?",
      options: ["Konark Sun Temple", "Khajuraho", "Hampi", "Ajanta Caves"],
      correct: 1,
      explanation: "Khajuraho temples in Madhya Pradesh are famous for their intricate sculptures."
    },
    {
      question: "The Red Fort was built by which Mughal emperor?",
      options: ["Akbar", "Shah Jahan", "Aurangzeb", "Babur"],
      correct: 1,
      explanation: "The Red Fort (Lal Qila) in Delhi was built by Shah Jahan in the 17th century."
    },
    {
      question: "Which state is home to the ancient ruins of Hampi?",
      options: ["Tamil Nadu", "Kerala", "Karnataka", "Andhra Pradesh"],
      correct: 2,
      explanation: "Hampi, the ancient capital of the Vijayanagara Empire, is located in Karnataka."
    },
    {
      question: "The Ajanta and Ellora caves are located in which state?",
      options: ["Rajasthan", "Maharashtra", "Madhya Pradesh", "Gujarat"],
      correct: 1,
      explanation: "The Ajanta and Ellora caves are UNESCO World Heritage sites in Maharashtra."
    },
    {
      question: "Which temple is dedicated to the Sun God?",
      options: ["Meenakshi Temple", "Konark Sun Temple", "Somnath Temple", "Brihadeeswarar Temple"],
      correct: 1,
      explanation: "The Konark Sun Temple in Odisha is dedicated to Surya, the Sun God."
    },
    {
      question: "In which year was the Taj Mahal completed?",
      options: ["1643", "1653", "1663", "1673"],
      correct: 0,
      explanation: "The Taj Mahal was completed in 1643 after 22 years of construction."
    }
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [answeredQuestions, setAnsweredQuestions] = useState<boolean[]>(new Array(questions.length).fill(false));

  const handleAnswerSelect = (answerIndex: number) => {
    if (answeredQuestions[currentQuestion]) return;
    setSelectedAnswer(answerIndex);
  };

  const handleSubmitAnswer = () => {
    if (selectedAnswer === null) {
      toast.error("Please select an answer");
      return;
    }

    const isCorrect = selectedAnswer === questions[currentQuestion].correct;
    const newAnsweredQuestions = [...answeredQuestions];
    newAnsweredQuestions[currentQuestion] = true;
    setAnsweredQuestions(newAnsweredQuestions);

    if (isCorrect) {
      setScore(score + 1);
      toast.success("Correct!");
    } else {
      toast.error("Incorrect!");
    }

    setShowResult(true);

    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
        setShowResult(false);
      } else {
        setQuizCompleted(true);
      }
    }, 2000);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setScore(0);
    setShowResult(false);
    setQuizCompleted(false);
    setAnsweredQuestions(new Array(questions.length).fill(false));
  };

  const getScoreMessage = () => {
    const percentage = (score / questions.length) * 100;
    if (percentage >= 80) return "Excellent! You're a heritage expert! 🏆";
    if (percentage >= 60) return "Good job! You know your heritage well! 🎉";
    if (percentage >= 40) return "Not bad! Keep learning about Indian heritage! 📚";
    return "You can do better! Try again to improve your score! 💪";
  };

  if (quizCompleted) {
    return (
      <div className="min-h-screen bg-gradient-subtle">
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
          <div className="max-w-2xl mx-auto text-center">
            <Card className="card-heritage">
              <CardHeader>
                <div className="mx-auto w-20 h-20 bg-primary rounded-full flex items-center justify-center mb-4">
                  <Trophy className="w-10 h-10 text-white" />
                </div>
                <CardTitle className="text-3xl text-primary mb-2">
                  Quiz Completed!
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <p className="text-4xl font-bold text-secondary mb-2">
                    {score}/{questions.length}
                  </p>
                  <p className="text-xl text-muted-foreground">
                    {Math.round((score / questions.length) * 100)}% Correct
                  </p>
                </div>
                
                <p className="text-lg">{getScoreMessage()}</p>
                
                <div className="flex gap-4 justify-center">
                  <Button onClick={resetQuiz} className="btn-primary-glow">
                    <RotateCcw className="w-4 h-4 mr-2" />
                    Try Again
                  </Button>
                  <Button onClick={() => navigate('/learn')} variant="outline">
                    Back to Learn
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    );
  }

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
        <div className="max-w-3xl mx-auto">
          <h1 className="text-heritage-title text-secondary mb-6 text-center">
            Heritage Quiz
          </h1>
          
          {/* Progress */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-muted-foreground">
                Question {currentQuestion + 1} of {questions.length}
              </span>
              <span className="text-sm text-muted-foreground">
                Score: {score}/{questions.length}
              </span>
            </div>
            <Progress 
              value={((currentQuestion + 1) / questions.length) * 100} 
              className="mb-4"
            />
          </div>

          <Card className="card-heritage">
            <CardHeader>
              <CardTitle className="text-xl mb-4">
                {questions[currentQuestion].question}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-3">
                {questions[currentQuestion].options.map((option, index) => (
                  <Button
                    key={index}
                    variant={
                      showResult
                        ? index === questions[currentQuestion].correct
                          ? "default"
                          : index === selectedAnswer
                          ? "destructive"
                          : "outline"
                        : selectedAnswer === index
                        ? "secondary"
                        : "outline"
                    }
                    size="lg"
                    onClick={() => handleAnswerSelect(index)}
                    disabled={showResult}
                    className="justify-start text-left p-4 h-auto whitespace-normal"
                  >
                    <span className="font-semibold mr-3">
                      {String.fromCharCode(65 + index)}.
                    </span>
                    {option}
                  </Button>
                ))}
              </div>

              {showResult && (
                <div className="mt-6 p-4 bg-muted/30 rounded-lg">
                  <p className="font-semibold mb-2">
                    {selectedAnswer === questions[currentQuestion].correct ? "✅ Correct!" : "❌ Incorrect!"}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {questions[currentQuestion].explanation}
                  </p>
                </div>
              )}

              {!showResult && (
                <Button
                  onClick={handleSubmitAnswer}
                  disabled={selectedAnswer === null}
                  className="btn-primary-glow w-full mt-6"
                >
                  Submit Answer
                </Button>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Quiz;