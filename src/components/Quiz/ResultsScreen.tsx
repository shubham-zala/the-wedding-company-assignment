import { motion } from "framer-motion";

interface ResultsScreenProps {
  score: number;
  total: number;
  onRestart: () => void;
}

export const ResultsScreen = ({ score, total, onRestart }: ResultsScreenProps) => {
  const percentage = Math.round((score / total) * 100);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-2xl mx-auto text-center"
      role="region"
      aria-live="polite"
      aria-label="Quiz results"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2, duration: 0.5, type: "spring" }}
        className="mb-8"
      >
        <div className="inline-block bg-card rounded-3xl p-12 shadow-quiz-lg">
          <p className="text-body-lg text-muted-foreground mb-4">Your Final Score</p>
          <div className="text-display-lg font-display font-bold text-primary mb-2">
            {percentage}%
          </div>
          <p className="text-heading-lg text-foreground">
            {score} out of {total} correct
          </p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.4 }}
      >
        <p className="text-body-lg text-foreground mb-8">
          {percentage >= 80
            ? "Excellent work! You really know your stuff! 🎉"
            : percentage >= 60
            ? "Good job! You're on the right track! 👍"
            : "Keep practicing! You'll do better next time! 💪"}
        </p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onRestart}
          className="px-10 py-4 bg-primary text-primary-foreground rounded-full text-body-lg font-semibold shadow-quiz-md hover:shadow-quiz-lg transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          aria-label="Restart quiz"
        >
          Try Again
        </motion.button>
      </motion.div>
    </motion.div>
  );
};
