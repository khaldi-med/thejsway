"use strict";

const students = [
  {
    name: "Anna",
    sex: "f",
    grades: [4.5, 3.5, 4]
  },
  {
    name: "Dennis",
    sex: "m",
    country: "Germany",
    grades: [5, 1.5, 4]
  },
  {
    name: "Martha",
    sex: "f",
    grades: [5, 4, 2.5, 3]
  },
  {
    name: "Brock",
    sex: "m",
    grades: [4, 3, 2]
  }
];


// Compute female student results 
const femaleStudentsResults = [];
for (const student of students) {
  if (student.sex === "f") {
    let gradesSum = 0;
    for (const grade of student.grades) {
      gradesSum += grade;
    }
    const averageGrade = gradesSum / student.grades.length;
    femaleStudentsResults.push({
      name: student.name,
      avgGrade: averageGrade
    });
  }
}
 console.log(femaleStudentsResults);



// My solution
const female = student => student.sex === "f";
const filter = (students, fun) => students.filter(fun);
const femalGrade = filter(students, female)
const femalStudentsResult = studentList => studentList.map(student => {
  const avgGrade = student.grades.reduce((acc, grade) => acc + grade, 0) / student.grades.length
  	return {
    		name: student.name,
    		avgGrade
  		}
	});

console.log(femalStudentsResult(femalGrade))
