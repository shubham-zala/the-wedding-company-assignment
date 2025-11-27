import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { QuizMascot } from "@/components/Quiz/QuizMascot";
import { ProgressBar } from "@/components/Quiz/ProgressBar";
import { QuestionCard } from "@/components/Quiz/QuestionCard";
import { AnswerOption } from "@/components/Quiz/AnswerOption";
import { NavigationButtons } from "@/components/Quiz/NavigationButtons";
import { ResultsScreen } from "@/components/Quiz/ResultsScreen";
import { quizQuestions } from "@/data/quizData";

const Index = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>(
    Array(quizQuestions.length).fill(-1)
  );
  const [showResults, setShowResults] = useState(false);

  const handleAnswerSelect = (answerIndex: number) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestion] = answerIndex;
    setSelectedAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setSelectedAnswers(Array(quizQuestions.length).fill(-1));
    setShowResults(false);
  };

  const calculateScore = () => {
    return selectedAnswers.reduce((score, answer, index) => {
      return score + (answer === quizQuestions[index].correctAnswer ? 1 : 0);
    }, 0);
  };

  const isLastQuestion = currentQuestion === quizQuestions.length - 1;
  const hasSelectedAnswer = selectedAnswers[currentQuestion] !== -1;
  const allQuestionsAnswered = selectedAnswers.every((answer) => answer !== -1);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background-gradient-start to-background-gradient-end flex items-center justify-center p-8">
      {/* Skip to main content link for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-lg"
      >
        Skip to main content
      </a>

      <QuizMascot />

      <main
        id="main-content"
        className="w-full max-w-4xl mx-auto"
        role="main"
        aria-label="Quiz application"
      >
        <AnimatePresence mode="wait">
          {!showResults ? (
            <motion.div
              key="quiz"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {/* Header */}
              <motion.header
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center mb-12"
              >
                <h1 className="text-display-md md:text-display-lg font-display italic text-foreground mb-4">
                  Test Your Knowledge
                </h1>
                <p className="text-body-lg text-muted-foreground">
                  Answer all questions to see your results
                </p>
              </motion.header>

              <ProgressBar current={currentQuestion + 1} total={quizQuestions.length} />

              {/* Question and Answers */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentQuestion}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="max-w-3xl mx-auto"
                >
                  <QuestionCard
                    questionNumber={currentQuestion + 1}
                    question={quizQuestions[currentQuestion].question}
                  />

                  <div role="radiogroup" aria-label="Answer options">
                    {quizQuestions[currentQuestion].options.map((option, index) => (
                      <AnswerOption
                        key={index}
                        answer={option}
                        isSelected={selectedAnswers[currentQuestion] === index}
                        onSelect={() => handleAnswerSelect(index)}
                        index={index}
                      />
                    ))}
                  </div>

                  <NavigationButtons
                    onPrevious={handlePrevious}
                    onNext={handleNext}
                    canGoPrevious={currentQuestion > 0}
                    canGoNext={isLastQuestion ? allQuestionsAnswered : hasSelectedAnswer}
                    showResults={isLastQuestion && allQuestionsAnswered}
                  />
                </motion.div>
              </AnimatePresence>
            </motion.div>
          ) : (
            <motion.div
              key="results"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <ResultsScreen
                score={calculateScore()}
                total={quizQuestions.length}
                onRestart={handleRestart}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
};

export default Index;
