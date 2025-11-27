import { motion } from "framer-motion";

interface QuizMascotProps {
  message?: string;
}

export const QuizMascot = ({ message = "Best of Luck!" }: QuizMascotProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="fixed bottom-8 left-8 z-10 hidden lg:block"
      role="complementary"
      aria-label="Quiz mascot with encouragement"
    >
      <div className="relative">
        {/* Speech Bubble */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.5 }}
          className="absolute -top-8 left-0 bg-card px-6 py-3 rounded-2xl shadow-quiz-md border-2 border-accent whitespace-nowrap"
        >
          <span className="font-medium text-foreground">{message}</span>
          {/* Arrow */}
          <div className="absolute -bottom-2 left-8 w-4 h-4 bg-card border-r-2 border-b-2 border-accent rotate-45" />
        </motion.div>

        {/* Cat Paw SVG */}
        <motion.svg
          width="120"
          height="140"
          viewBox="0 0 120 140"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="drop-shadow-lg mt-16"
          initial={{ y: 0 }}
          animate={{ y: [0, -8, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {/* Main Paw Pad */}
          <ellipse
            cx="60"
            cy="90"
            rx="35"
            ry="40"
            fill="#FFB6C1"
            stroke="#FFA0B0"
            strokeWidth="2"
          />

          {/* Top Left Toe */}
          <ellipse
            cx="35"
            cy="50"
            rx="15"
            ry="20"
            fill="#FFB6C1"
            stroke="#FFA0B0"
            strokeWidth="2"
          />

          {/* Top Middle Toe */}
          <ellipse
            cx="60"
            cy="40"
            rx="15"
            ry="22"
            fill="#FFB6C1"
            stroke="#FFA0B0"
            strokeWidth="2"
          />

          {/* Top Right Toe */}
          <ellipse
            cx="85"
            cy="50"
            rx="15"
            ry="20"
            fill="#FFB6C1"
            stroke="#FFA0B0"
            strokeWidth="2"
          />

          {/* Inner pad details */}
          <ellipse cx="60" cy="90" rx="20" ry="25" fill="#FFA0B0" opacity="0.3" />
        </motion.svg>
      </div>
    </motion.div>
  );
};
