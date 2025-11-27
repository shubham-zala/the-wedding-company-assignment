import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnswerOptionProps {
  answer: string;
  isSelected: boolean;
  onSelect: () => void;
  index: number;
}

export const AnswerOption = ({ answer, isSelected, onSelect, index }: AnswerOptionProps) => {
  return (
    <motion.button
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      onClick={onSelect}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onSelect();
        }
      }}
      className={cn(
        "w-full bg-quiz-answer text-foreground rounded-xl p-6 mb-4 shadow-quiz-sm",
        "transition-all duration-300 ease-out",
        "hover:bg-quiz-answer-hover hover:shadow-quiz-md hover:scale-[1.02]",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        "active:scale-[0.98]",
        isSelected && "bg-quiz-answer-selected shadow-quiz-md border-2 border-primary"
      )}
      role="radio"
      aria-checked={isSelected}
      tabIndex={0}
    >
      <span className="text-body-lg font-medium">{answer}</span>
    </motion.button>
  );
};
