import { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
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
  const [searchParams] = useSearchParams();
  const difficulty = searchParams.get('difficulty') || 'easy';

  const allQuestions = {
    easy: [
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
        question: "Which temple is dedicated to the Sun God?",
        options: ["Meenakshi Temple", "Konark Sun Temple", "Somnath Temple", "Brihadeeswarar Temple"],
        correct: 1,
        explanation: "The Konark Sun Temple in Odisha is dedicated to Surya, the Sun God."
      }
    ],
    medium: [
      {
        question: "Which heritage site is famous for its erotic sculptures?",
        options: ["Konark Sun Temple", "Khajuraho", "Hampi", "Ajanta Caves"],
        correct: 1,
        explanation: "Khajuraho temples in Madhya Pradesh are famous for their intricate sculptures."
      },
      {
        question: "The Ajanta and Ellora caves are located in which state?",
        options: ["Rajasthan", "Maharashtra", "Madhya Pradesh", "Gujarat"],
        correct: 1,
        explanation: "The Ajanta and Ellora caves are UNESCO World Heritage sites in Maharashtra."
      },
      {
        question: "In which year was the Taj Mahal completed?",
        options: ["1643", "1653", "1663", "1673"],
        correct: 0,
        explanation: "The Taj Mahal was completed in 1643 after 22 years of construction."
      },
      {
        question: "Which dynasty built the Brihadeeswarar Temple?",
        options: ["Chola", "Pallava", "Pandya", "Chera"],
        correct: 0,
        explanation: "The Brihadeeswarar Temple was built by the Chola dynasty under Rajaraja I."
      },
      {
        question: "Fatehpur Sikri was built by which Mughal emperor?",
        options: ["Babur", "Humayun", "Akbar", "Jahangir"],
        correct: 2,
        explanation: "Fatehpur Sikri was built by Emperor Akbar and served as the Mughal capital."
      },
      {
        question: "The Victoria Memorial is located in which city?",
        options: ["Delhi", "Mumbai", "Kolkata", "Chennai"],
        correct: 2,
        explanation: "The Victoria Memorial is located in Kolkata, West Bengal."
      },
      {
        question: "Which fort is known as the 'Gibraltar of the East'?",
        options: ["Red Fort", "Golconda Fort", "Gwalior Fort", "Amber Fort"],
        correct: 2,
        explanation: "Gwalior Fort is known as the 'Gibraltar of the East' due to its strategic location."
      },
      {
        question: "The Meenakshi Temple is dedicated to which deity?",
        options: ["Vishnu", "Shiva", "Brahma", "Durga"],
        correct: 1,
        explanation: "The Meenakshi Temple in Madurai is dedicated to Goddess Meenakshi and Lord Shiva."
      }
    ],
    hard: [
      {
        question: "Who commissioned the construction of the Qutub Minar?",
        options: ["Qutb-ud-din Aibak", "Iltutmish", "Alauddin Khilji", "Balban"],
        correct: 0,
        explanation: "Qutub Minar was commissioned by Qutb-ud-din Aibak, the founder of the Delhi Sultanate."
      },
      {
        question: "The Sanchi Stupa was built during which dynasty?",
        options: ["Maurya", "Gupta", "Kushana", "Satavahana"],
        correct: 0,
        explanation: "The Sanchi Stupa was built during the Maurya dynasty under Emperor Ashoka."
      },
      {
        question: "Which architectural style is Hoysala temples famous for?",
        options: ["Dravidian", "Nagara", "Vesara", "Indo-Islamic"],
        correct: 2,
        explanation: "Hoysala temples are famous for the Vesara style, a blend of Dravidian and Nagara styles."
      },
      {
        question: "The Dilwara Temples are dedicated to which religion?",
        options: ["Hinduism", "Buddhism", "Jainism", "Sikhism"],
        correct: 2,
        explanation: "The Dilwara Temples in Mount Abu are exquisite Jain temples known for marble craftsmanship."
      },
      {
        question: "Which Mughal emperor built the Shalimar Gardens in Kashmir?",
        options: ["Akbar", "Jahangir", "Shah Jahan", "Aurangzeb"],
        correct: 1,
        explanation: "The Shalimar Gardens were built by Emperor Jahangir for his wife Nur Jahan."
      },
      {
        question: "The Kailasanatha Temple at Ellora was carved out of a single rock during which dynasty?",
        options: ["Chalukya", "Rashtrakuta", "Pallava", "Chola"],
        correct: 1,
        explanation: "The Kailasanatha Temple was carved during the Rashtrakuta dynasty under Krishna I."
      },
      {
        question: "Which fort contains the famous 'Koh-i-Noor' diamond's original location?",
        options: ["Red Fort", "Golconda Fort", "Amber Fort", "Mehrangarh Fort"],
        correct: 1,
        explanation: "The Koh-i-Noor diamond was mined from the Golconda region in present-day Telangana."
      },
      {
        question: "The Rani ki Vav stepwell is a UNESCO site in which state?",
        options: ["Rajasthan", "Gujarat", "Madhya Pradesh", "Maharashtra"],
        correct: 1,
        explanation: "Rani ki Vav in Patan, Gujarat, is a UNESCO World Heritage stepwell built in the 11th century."
      },
      {
        question: "Which temple complex represents the cosmic universe in stone?",
        options: ["Konark Sun Temple", "Khajuraho", "Hampi Vittala", "Angkor Wat"],
        correct: 0,
        explanation: "The Konark Sun Temple is designed as a colossal chariot representing the cosmic universe."
      },
      {
        question: "The Group of Monuments at Mahabalipuram were built by which dynasty?",
        options: ["Chola", "Pallava", "Pandya", "Vijayanagara"],
        correct: 1,
        explanation: "The Mahabalipuram monuments were built by the Pallava dynasty in the 7th-8th centuries."
      }
    ]
  };

  const questions = allQuestions[difficulty as keyof typeof allQuestions] || allQuestions.easy;

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
                  {t('quiz.completed')}
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
                    {t('quiz.tryAgain')}
                  </Button>
                  <Button onClick={() => navigate('/learn')} variant="outline">
                    {t('quiz.backToLearn')}
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
            {t('quiz.title')} - {t(`quiz.${difficulty}`)}
          </h1>
          
          {/* Progress */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-muted-foreground">
                {t('quiz.question')} {currentQuestion + 1} of {questions.length}
              </span>
              <span className="text-sm text-muted-foreground">
                {t('quiz.score')}: {score}/{questions.length}
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
                    {selectedAnswer === questions[currentQuestion].correct ? `✅ ${t('quiz.correct')}` : `❌ ${t('quiz.incorrect')}`}
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
                  {t('quiz.submitAnswer')}
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