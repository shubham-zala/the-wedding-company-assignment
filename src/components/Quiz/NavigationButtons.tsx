import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavigationButtonsProps {
  onPrevious?: () => void;
  onNext?: () => void;
  canGoPrevious: boolean;
  canGoNext: boolean;
  showResults?: boolean;
}

export const NavigationButtons = ({
  onPrevious,
  onNext,
  canGoPrevious,
  canGoNext,
  showResults = false,
}: NavigationButtonsProps) => {
  return (
    <div className="flex justify-end items-center gap-3 mt-8">
      {canGoPrevious && onPrevious && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onPrevious}
          className={cn(
            "flex items-center justify-center w-12 h-12 rounded-full",
            "bg-card shadow-quiz-sm hover:shadow-quiz-md",
            "transition-all duration-200",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          )}
          aria-label="Previous question"
        >
          <ChevronLeft className="w-6 h-6 text-foreground" aria-hidden="true" />
        </motion.button>
      )}

      {canGoNext && onNext && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onNext}
          className={cn(
            "flex items-center justify-center",
            showResults ? "px-8 h-12 rounded-full" : "w-12 h-12 rounded-full",
            "bg-primary text-primary-foreground shadow-quiz-md hover:shadow-quiz-lg",
            "transition-all duration-200",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
            "font-semibold"
          )}
          aria-label={showResults ? "View results" : "Next question"}
        >
          {showResults ? (
            <span>View Results</span>
          ) : (
            <ChevronRight className="w-6 h-6" aria-hidden="true" />
          )}
        </motion.button>
      )}
    </div>
  );
};
