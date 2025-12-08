// app/[category]/data.js
import { Calculator, Code, Atom, Brain } from 'lucide-react';

export const categoryData = {
  "mathematics": {
    title: "Mathematics",
    description: "The language of the universe. Abstract structures, patterns, and evidence.",
    // İkonları burada JSX olarak değil, string veya bileşen referansı olarak tutmak daha güvenlidir ama şimdilik hızlı çözüm için page.js tarafında halledeceğiz.
    // Şimdilik veriyi sade tutalım, ikonları client tarafında eşleştirelim.
    gradient: "from-pink-500 to-rose-500",
    notes: [
      {
        id: "bayes-theorem",
        title: "An Intuitive Look at Bayes' Theorem",
        excerpt: "What does P(A|B) actually mean?",
        date: "2024",
        formula: "P(A|B) = \\frac{P(B|A)P(A)}{P(B)}"
      },
      {
        id: "linear-algebra",
        title: "Linear Algebra in Game Development",
        excerpt: "How can we use linear algebra in game development?",
        date: "2024",
        formula: "R = \\begin{bmatrix} \\cos \\theta & -\\sin \\theta \\\\ \\sin \\theta & \\cos \\theta \\end{bmatrix}"
      },
    ]
  },
  "computer-science": {
    title: "Computer Science",
    description: "Algorithms, data structures, and the art of problem-solving with code.",
    gradient: "from-blue-500 to-cyan-500",
    notes: [
      {
        id: "big-o",
        title: "Understanding Big O Notation",
        excerpt: "A beginner's guide to algorithm efficiency.",
        date: "2023",
        formula: "O(n^2), O(log n), O(n!)"
      },
    ]},
};