import { motion } from "framer-motion";

interface ProgressBarProps {
  current: number;
  total: number;
}

export const ProgressBar = ({ current, total }: ProgressBarProps) => {
  const percentage = (current / total) * 100;

  return (
    <div
      className="w-full max-w-3xl mx-auto mb-12"
      role="progressbar"
      aria-valuenow={current}
      aria-valuemin={0}
      aria-valuemax={total}
      aria-label={`Question ${current} of ${total}`}
    >
      <div className="h-2 bg-quiz-progress-bg rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="h-full bg-quiz-progress-fill rounded-full origin-left"
        />
      </div>
      <p className="text-sm text-muted-foreground mt-2 text-center" aria-live="polite">
        Question {current} of {total}
      </p>
    </div>
  );
};
