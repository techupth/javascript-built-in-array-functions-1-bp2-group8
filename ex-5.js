const students = [
  { name: "John", score: 80 },
  { name: "Jane", score: 90 },
  { name: "Jim", score: 85 },
  { name: "Joan", score: 95 },
];
console.log(students.length)
function getAverageStudentScore(totalScore,student) {
  // Start coding here
  return totalScore+student.score
}

// getAverageStudentScore(students);
 // Output: 87.5
const avgStudentsScore = students.reduce(getAverageStudentScore,0)/students.length;
console.log(avgStudentsScore);
