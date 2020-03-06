const students = [
  { id: 21, name: "Omar sunny" },
  { id: 31, name: "Manna" },
  { id: 41, name: "mim" },
  { id: 71, name: "Dipjol" }
];

const names = students.map(s => s.name);
const ids = students.map(s => s.id);
console.log(names);
