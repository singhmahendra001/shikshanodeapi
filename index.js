// // index.js
// const express = require('express');
// const app = express();
// const port = 3000;
// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });

// // Simple route
// app.get('/', (req, res) => {
//   res.send('Hello World! Node API is running.');
// });
// const cors = require("cors");
// app.use(cors());

// // Start server
// app.listen(port, () => {
//   console.log(`Server running at http://localhost:${port}`);
// });

// const students = [
//   { id: 1, name: 'Mahendra' },
//   { id: 2, name: 'Sita' }
// ];

// const course = [{
//   id: 1,
//   title: "HTML Basics",
//   videoUrl: "https://youtu.be/BGeDBfCIqas",
//   notes: "• HTML stands for HyperText Markup Language ...",
//   practice: "1. Create a basic HTML document ...",
//   assignment: "Create a personal portfolio webpage ..."
// },
// {
//   id: 2,
//   title: "CSS Basics",
//   videoUrl: "https://youtu.be/KRXsAGEYrwo?si=p9ai7FElJffOdE0S",
//   notes: "• CSS stands for Cascading style sheet ...",
//   practice: "1. Create a basic CSS document ...",
//   assignment: "Create a personal portfolio webpage with CSS..."
// },
// {
//   id: 3,
//   title: "Operators",
//   videoUrl: "https://youtu.be/xE7z21nEtCY?si=uyda-YsGuw7S0Its",
//   notes: "• Operators used fore mathematical opration ...",
//   practice: "1. Create a basic Operator document ...",
//   assignment: "Create a personal portfolio webpage Operators ..."
// },
// ];

// // GET all students
// app.get('/students', (req, res) => {
//   res.json(students);
// });

// // GET single student by ID
// app.get('/students/:id', (req, res) => {
//   const id = parseInt(req.params.id);
//   const student = students.find(s => s.id === id);
//   if (student) {
//     res.json(student);
//   } else {
//     res.status(404).send('Student not found');
//   }
// });

// app.get('/course', (req, res) => {
//   res.json(course);
// });

// // GET single student by ID
// app.get('/course/:id', (req, res) => {
//   const id = parseInt(req.params.id);
//   const courses = course.find(s => s.id === id);
//   if (courses) {
//     res.json(courses);
//   } else {
//     res.status(404).send('course not found');
//   }
// });



// updated code -----
// index.js
const express = require('express');
const cors = require('cors');

const app = express();

// Enable CORS
app.use(cors());

// Port setup (local 3000 or live deployment)
const PORT = process.env.PORT || 3000;

// Sample data
const students = [
  { id: 1, name: 'Mahendra' },
  { id: 2, name: 'Sita' }
];

const course = [
  {
    id: 1,
    title: "HTML Basics",
    videoUrl: "https://youtu.be/BGeDBfCIqas",
    notes: "• HTML stands for HyperText Markup Language ...",
    practice: "1. Create a basic HTML document ...",
    assignment: "Create a personal portfolio webpage ..."
  },
  {
    id: 2,
    title: "CSS Basics",
    videoUrl: "https://youtu.be/KRXsAGEYrwo?si=p9ai7FElJffOdE0S",
    notes: "• CSS stands for Cascading style sheet ...",
    practice: "1. Create a basic CSS document ...",
    assignment: "Create a personal portfolio webpage with CSS..."
  },
  {
    id: 3,
    title: "Operators",
    videoUrl: "https://youtu.be/xE7z21nEtCY?si=uyda-YsGuw7S0Its",
    notes: "• Operators used for mathematical operation ...",
    practice: "1. Create a basic Operator document ...",
    assignment: "Create a personal portfolio webpage Operators ..."
  }
];

// Routes
app.get('/', (req, res) => {
  res.send('Hello World! Node API is running.');
});

// Students routes
app.get('/students', (req, res) => res.json(students));

app.get('/students/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const student = students.find(s => s.id === id);
  if (student) res.json(student);
  else res.status(404).send('Student not found');
});

// Course routes
app.get('/course', (req, res) => res.json(course));

app.get('/course/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const courses = course.find(c => c.id === id);
  if (courses) res.json(courses);
  else res.status(404).send('Course not found');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

