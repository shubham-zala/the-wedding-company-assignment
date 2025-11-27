export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
}

export const quizQuestions: Question[] = [
  {
    id: 1,
    question: "What sound does a cat make?",
    options: ["Bhau-Bhau", "Meow-Meow", "Oink-Oink"],
    correctAnswer: 1,
  },
  {
    id: 2,
    question: "What is the largest planet in our solar system?",
    options: ["Mars", "Jupiter", "Saturn"],
    correctAnswer: 1,
  },
  {
    id: 3,
    question: "Which programming language is known for web development?",
    options: ["Python", "C++", "JavaScript"],
    correctAnswer: 2,
  },
  {
    id: 4,
    question: "What is the capital of France?",
    options: ["London", "Berlin", "Paris"],
    correctAnswer: 2,
  },
  {
    id: 5,
    question: "How many continents are there on Earth?",
    options: ["5", "7", "9"],
    correctAnswer: 1,
  },
];
