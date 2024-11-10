// pages/index.js

import StudentCard from "./components/studentCard/page";

export default function Home() {
  const students = [
    { name: "Mishkat Chandio ", age: 16, rollNumber: "101", studentClass: "10th Grade" },
    { name: "Jony Jane ", age: 15, rollNumber: "102", studentClass: "9th Grade" },
    { name: "Moiz Bin Salman", age: 17, rollNumber: "103", studentClass: "11th Grade" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex flex-wrap justify-center items-center">
      {students.map((student, index) => (
        <StudentCard
          key={index}
          name={student.name}
          age={student.age}
          rollNumber={student.rollNumber}
          studentClass={student.studentClass}
        />
      ))}
    </div>
  );
}
