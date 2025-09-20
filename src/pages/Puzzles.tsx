import { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import { LanguageToggle } from "@/components/LanguageToggle";
import { ArrowLeft, Shuffle, Check } from "lucide-react";
import { toast } from "sonner";

const Puzzles = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();
  const [searchParams] = useSearchParams();
  const difficulty = searchParams.get('difficulty') || 'easy';

  const allPuzzles = {
    easy: [
      {
        id: 1,
        site: "Taj Mahal",
        scrambled: ["T", "A", "J", " ", "M", "A", "H", "A", "L"],
        correct: "TAJ MAHAL",
        hint: "White marble mausoleum in Agra",
        difficulty: "Easy"
      },
      {
        id: 2,
        site: "Red Fort",
        scrambled: ["R", "E", "D", " ", "F", "O", "R", "T"],
        correct: "RED FORT",
        hint: "Mughal fortress in Delhi",
        difficulty: "Easy"
      },
      {
        id: 3,
        site: "Gateway of India",
        scrambled: ["G", "A", "T", "E", "W", "A", "Y", " ", "O", "F", " ", "I", "N", "D", "I", "A"],
        correct: "GATEWAY OF INDIA",
        hint: "Famous arch monument in Mumbai",
        difficulty: "Easy"
      }
    ],
    medium: [
      {
        id: 1,
        site: "Hampi",
        scrambled: ["H", "A", "M", "P", "I"],
        correct: "HAMPI",
        hint: "Ruined city in Karnataka",
        difficulty: "Medium"
      },
      {
        id: 2,
        site: "Konark Sun Temple",
        scrambled: ["K", "O", "N", "A", "R", "K", " ", "S", "U", "N", " ", "T", "E", "M", "P", "L", "E"],
        correct: "KONARK SUN TEMPLE",
        hint: "Ancient temple dedicated to Sun God",
        difficulty: "Medium"
      },
      {
        id: 3,
        site: "Meenakshi Temple",
        scrambled: ["M", "E", "E", "N", "A", "K", "S", "H", "I", " ", "T", "E", "M", "P", "L", "E"],
        correct: "MEENAKSHI TEMPLE",
        hint: "Famous temple in Madurai",
        difficulty: "Medium"
      },
      {
        id: 4,
        site: "Golconda Fort",
        scrambled: ["G", "O", "L", "C", "O", "N", "D", "A", " ", "F", "O", "R", "T"],
        correct: "GOLCONDA FORT",
        hint: "Historic fort in Hyderabad",
        difficulty: "Medium"
      }
    ],
    hard: [
      {
        id: 1,
        site: "Khajuraho",
        scrambled: ["K", "H", "A", "J", "U", "R", "A", "H", "O"],
        correct: "KHAJURAHO",
        hint: "Temple complex famous for sculptures",
        difficulty: "Hard"
      },
      {
        id: 2,
        site: "Brihadeshwara Temple",
        scrambled: ["B", "R", "I", "H", "A", "D", "E", "S", "H", "W", "A", "R", "A", " ", "T", "E", "M", "P", "L", "E"],
        correct: "BRIHADESHWARA TEMPLE",
        hint: "Great temple in Thanjavur",
        difficulty: "Hard"
      },
      {
        id: 3,
        site: "Namdroling Monastery",
        scrambled: ["N", "A", "M", "D", "R", "O", "L", "I", "N", "G", " ", "M", "O", "N", "A", "S", "T", "E", "R", "Y"],
        correct: "NAMDROLING MONASTERY",
        hint: "Tibetan Buddhist monastery in Karnataka",
        difficulty: "Hard"
      },
      {
        id: 4,
        site: "Chhatrapati Shivaji Terminus",
        scrambled: ["C", "H", "H", "A", "T", "R", "A", "P", "A", "T", "I", " ", "S", "H", "I", "V", "A", "J", "I", " ", "T", "E", "R", "M", "I", "N", "U", "S"],
        correct: "CHHATRAPATI SHIVAJI TERMINUS",
        hint: "Historic railway station in Mumbai",
        difficulty: "Hard"
      },
      {
        id: 5,
        site: "Sundarbans National Park",
        scrambled: ["S", "U", "N", "D", "A", "R", "B", "A", "N", "S", " ", "N", "A", "T", "I", "O", "N", "A", "L", " ", "P", "A", "R", "K"],
        correct: "SUNDARBANS NATIONAL PARK",
        hint: "Mangrove forest and tiger reserve",
        difficulty: "Hard"
      }
    ]
  };

  const puzzles = allPuzzles[difficulty as keyof typeof allPuzzles] || allPuzzles.easy;

  const [currentPuzzle, setCurrentPuzzle] = useState(0);
  const [userAnswer, setUserAnswer] = useState<string[]>([]);
  const [availableLetters, setAvailableLetters] = useState<string[]>([]);
  const [completed, setCompleted] = useState<number[]>([]);
  const [leaderboard, setLeaderboard] = useState<{name: string, score: number, time: number}[]>([]);
  const [startTime, setStartTime] = useState<number>(Date.now());

  // Initialize puzzle
  const initializePuzzle = (puzzleIndex: number) => {
    const puzzle = puzzles[puzzleIndex];
    setAvailableLetters([...puzzle.scrambled]);
    setUserAnswer([]);
  };

  // Start first puzzle on component mount
  useEffect(() => {
    initializePuzzle(0);
  }, []);

  const addLetter = (letter: string, index: number) => {
    if (letter.trim() === "") return;
    
    const newAvailable = [...availableLetters];
    const newAnswer = [...userAnswer, letter];
    
    newAvailable.splice(index, 1);
    setAvailableLetters(newAvailable);
    setUserAnswer(newAnswer);
  };

  const removeLetter = (index: number) => {
    const letter = userAnswer[index];
    const newAnswer = [...userAnswer];
    const newAvailable = [...availableLetters, letter];
    
    newAnswer.splice(index, 1);
    setUserAnswer(newAnswer);
    setAvailableLetters(newAvailable);
  };

  const checkAnswer = () => {
    const answer = userAnswer.join("").replace(/\s+/g, ' ').trim().toUpperCase();
    const correct = puzzles[currentPuzzle].correct.replace(/\s+/g, ' ').trim().toUpperCase();
    
    if (answer === correct) {
      const timeTaken = Date.now() - startTime;
      toast.success("Correct! Well done!");
      setCompleted([...completed, currentPuzzle]);
      
      // Add to leaderboard
      const newScore = {
        name: `Player ${leaderboard.length + 1}`,
        score: completed.length + 1,
        time: timeTaken
      };
      setLeaderboard([...leaderboard, newScore].sort((a, b) => b.score - a.score || a.time - b.time));
      
      if (currentPuzzle < puzzles.length - 1) {
        setTimeout(() => {
          const nextPuzzle = currentPuzzle + 1;
          setCurrentPuzzle(nextPuzzle);
          initializePuzzle(nextPuzzle);
          setStartTime(Date.now());
        }, 1500);
      } else {
        toast.success("All puzzles completed! You're a heritage expert!");
      }
    } else {
      toast.error("Not quite right. Try again!");
    }
  };

  const shufflePuzzle = () => {
    const puzzle = puzzles[currentPuzzle];
    const shuffled = [...puzzle.scrambled].sort(() => Math.random() - 0.5);
    setAvailableLetters(shuffled);
    setUserAnswer([]);
  };

  const resetPuzzle = () => {
    initializePuzzle(currentPuzzle);
  };

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Header */}
      <div className="flex items-center justify-between p-6">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => navigate('/puzzle-difficulty')}
          className="text-primary hover:bg-primary/10"
        >
          <ArrowLeft className="h-6 w-6" />
        </Button>
        <LanguageToggle />
      </div>

      <div className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-heritage-title text-secondary mb-6 text-center">
            {t('puzzles.title')}
          </h1>
          <p className="text-heritage-subtitle mb-12 leading-relaxed text-center">
            {t('puzzles.unscramble')}
          </p>

          {/* Progress */}
          <div className="mb-8">
            <div className="flex justify-center gap-2 mb-4">
              {puzzles.map((_, index) => (
                <div
                  key={index}
                  className={`w-4 h-4 rounded-full ${
                    completed.includes(index)
                      ? 'bg-green-500'
                      : index === currentPuzzle
                      ? 'bg-primary'
                      : 'bg-muted'
                  }`}
                />
              ))}
            </div>
            <p className="text-center text-sm text-muted-foreground">
              {t('quiz.question')} {currentPuzzle + 1} of {puzzles.length} • {t('puzzles.difficulty')}: {puzzles[currentPuzzle].difficulty}
            </p>
          </div>

          <Card className="card-heritage">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl mb-4">
                {t('puzzles.unscramble').split(' ').slice(0, 4).join(' ')}:
              </CardTitle>
              <p className="text-muted-foreground">
                💡 {t('puzzles.hint')}: {puzzles[currentPuzzle].hint}
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Answer Area */}
              <div className="bg-muted/30 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-4 text-center">{t('puzzles.yourAnswer')}:</h3>
                <div className="flex flex-wrap justify-center gap-2 min-h-[60px] items-center">
                  {userAnswer.length === 0 ? (
                    <p className="text-muted-foreground italic">Click letters below to build your answer</p>
                  ) : (
                    userAnswer.map((letter, index) => (
                      <Button
                        key={index}
                        variant="outline"
                        size="lg"
                        onClick={() => removeLetter(index)}
                        className="w-12 h-12 text-lg font-bold hover:bg-destructive/20"
                      >
                        {letter}
                      </Button>
                    ))
                  )}
                </div>
              </div>

              {/* Available Letters */}
              <div className="bg-primary/5 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-4 text-center">{t('puzzles.availableLetters')}:</h3>
                <div className="flex flex-wrap justify-center gap-2">
                  {availableLetters.map((letter, index) => (
                    <Button
                      key={index}
                      variant="secondary"
                      size="lg"
                      onClick={() => addLetter(letter, index)}
                      className="w-12 h-12 text-lg font-bold hover:bg-primary/20"
                    >
                      {letter === " " ? "␣" : letter}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap justify-center gap-4">
                <Button
                  onClick={checkAnswer}
                  disabled={userAnswer.length === 0}
                  className="btn-primary-glow"
                >
                  <Check className="w-4 h-4 mr-2" />
                  {t('puzzles.checkAnswer')}
                </Button>
                <Button
                  onClick={shufflePuzzle}
                  variant="outline"
                >
                  <Shuffle className="w-4 h-4 mr-2" />
                  {t('puzzles.shuffleLetters')}
                </Button>
                <Button
                  onClick={resetPuzzle}
                  variant="outline"
                >
                  {t('puzzles.reset')}
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Completed Puzzles */}
          {completed.length > 0 && (
            <Card className="card-heritage mt-8">
              <CardHeader>
                <CardTitle className="text-center text-green-600">
                  🎉 {t('puzzles.completed')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap justify-center gap-2">
                  {completed.map((puzzleIndex) => (
                    <div
                      key={puzzleIndex}
                      className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm"
                    >
                      {puzzles[puzzleIndex].site}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {/* Leaderboard */}
          {leaderboard.length > 0 && (
            <Card className="card-heritage mt-8">
              <CardHeader>
                <CardTitle className="text-center text-primary">
                  🏆 {t('puzzles.leaderboard')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {leaderboard.slice(0, 5).map((entry, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center p-3 bg-muted/30 rounded-lg"
                    >
                      <div className="flex items-center gap-3">
                        <span className="font-bold text-lg">#{index + 1}</span>
                        <span>{entry.name}</span>
                      </div>
                      <div className="flex items-center gap-4 text-sm">
                        <span>{t('quiz.score')}: {entry.score}</span>
                        <span>Time: {Math.round(entry.time / 1000)}s</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default Puzzles;