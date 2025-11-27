import { motion } from "framer-motion";

interface QuestionCardProps {
  questionNumber: number;
  question: string;
}

export const QuestionCard = ({ questionNumber, question }: QuestionCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-quiz-question text-foreground rounded-2xl p-8 mb-8 shadow-quiz-md"
      role="heading"
      aria-level={2}
    >
      <h2 className="text-heading-lg font-semibold text-center">
        {questionNumber}. {question}
      </h2>
    </motion.div>
  );
};
