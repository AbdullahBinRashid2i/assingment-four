// components/StudentCard.js
export default function StudentCard({ name, age, rollNumber, studentClass }) {
    return (
      <div className="max-w-xs bg-white shadow-lg rounded-lg p-6 m-4">
        <h2 className="text-2xl font-bold text-blue-600 mb-2">{name}</h2>
        <p className="text-gray-700"><span className="font-semibold">Age:</span> {age}</p>
        <p className="text-gray-700"><span className="font-semibold">Roll Number:</span> {rollNumber}</p>
        <p className="text-gray-700"><span className="font-semibold">Class:</span> {studentClass}</p>
        <p className="text-gray-100">,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,<br/>.<span className="font-semibold text-white-100"></span> </p>
      </div>
    );
  }
  