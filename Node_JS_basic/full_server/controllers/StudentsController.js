const readDatabase = require('../utils');

class StudentsController {
  static async getAllStudents(request, response) {
    try {
      const students = await readDatabase('/path/to/database.csv');
      let output = 'This is the list of our students\n';

      const fields = Object.keys(students).sort((a, b) => a
        .toLowerCase().localeCompare(b.toLowerCase()));
      for (const field of fields) {
        const firstNames = students[field];
        output += `Number of students in ${field}: ${firstNames.length}. List: ${firstNames.join(', ')}\n`;
      }

      response.status(200).send(output.trim());
    } catch (error) {
      response.status(500).send('Cannot load the database');
    }
  }

  static async getAllStudentsByMajor(request, response) {
    const { major } = request.params;

    if (major !== 'CS' && major !== 'SWE') {
      response.status(500).send('Major parameter must be CS or SWE');
      return;
    }

    try {
      const students = await readDatabase('/path/to/database.csv');
      const firstNames = students[major] || [];

      response.status(200).send(`List: ${firstNames.join(', ')}`);
    } catch (error) {
      response.status(500).send('Cannot load the database');
    }
  }
}

module.exports = StudentsController;
