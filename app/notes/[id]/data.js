// app/notes/[id]/data.js

export const notesData = {
  "bayes-theorem": {
    title: "An Intuitive Look at Bayes' Theorem",
    date: "8 Dec 2024",
    category: "Mathematics",
    tags: ["Probability", "Statistics", "Logic"],
    // İçerik dizisi: Her paragraf veya formül ayrı bir eleman
    content: [

        { type: "text", value: "In probability theory, Bayes' theorem describes the probability of an event based on prior knowledge of the conditions that might be associated with that event. Its formula is:" },
        { type: "formula", value: "P(A|B) = \\frac{P(B|A) \\cdot P(A)}{P(B)}" },
        { type: "text", value: "Where P(A|B) is the probability that event A will occur given event B (posterior probability). P(A) is the prior probability of A (prior probability)." },
        { type: "heading", value: "Why is it important?" } ,
        { type: "text", value: "It's used everywhere from medical diagnoses to spam filters. It's the key to understanding false positives." }
]
  },
  "linear-algebra": {
    title: "Linear Algebra in Game Development",
    date: "15 Nov 2023",
    category: "Mathematics",
    tags: ["Gamedev", "Vectors", "Matrices"],
    content: [
      { type: "text", value: "To move a game character in 3D space, we need vectors and matrices. A rotation matrix looks like this:" },
{ type: "formula", value: "R = \\begin{bmatrix} \\cos \\theta & -\\sin \\theta \\\\ \\sin \\theta & \\cos \\theta \\end{bmatrix}" },
{ type: "text", value: "If you multiply a vector by this matrix, you rotate that vector in space." } ]
  },
  "big-o": {
    title: "How Fast is Your Code? Understanding Big O Notation",
    date: "20 Jan 2024",
    category: "Computer Science",
    tags: ["Algorithms", "Complexity"],
    content: [
      { type: "text", value: "To measure the efficiency of the code you write, we look at the number of operations, not seconds. This is a worst-case scenario analysis." },
{ type: "formula", value: "O(n^2) \\text{ vs } O(n \\log n)" }]
  }
};