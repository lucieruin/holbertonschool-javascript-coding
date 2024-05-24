const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      } else {
        const rows = data.split('\n').filter(Boolean);
        const students = rows.slice(1).map((row) => {
          const [firstName, lastName, age, field] = row.split(',');
          return {
            firstName,
            lastName,
            age,
            field,
          };
        });

        const csStudents = students.filter((student) => student.field === 'CS');
        const sweStudents = students.filter((student) => student.field === 'SWE');

        console.log(`Number of students: ${students.length}`);
        console.log(`Number of students in CS: ${csStudents.length}. List: ${csStudents.map((student) => student.firstName).join(', ')}`);
        console.log(`Number of students in SWE: ${sweStudents.length}. List: ${sweStudents.map((student) => student.firstName).join(', ')}`);

        resolve();
      }
    });
  });
}

module.exports = countStudents;
