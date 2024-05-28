const fs = require('fs');
const path = require('path');

function readDatabase(filePath) {
  return new Promise((resolve, reject) => {
    const absolutePath = path.resolve(filePath);

    fs.readFile(absolutePath, 'utf8', (err, data) => {
      if (err) {
        reject(err);
      } else {
        try {
          const lines = data.trim().split('\n');
          const fieldStudents = {};

          for (const line of lines.slice(1)) {
            const [firstname, , field] = line.split(',');
            if (!fieldStudents[field]) {
              fieldStudents[field] = [];
            }
            fieldStudents[field].push(firstname);
          }

          resolve(fieldStudents);
        } catch (parseError) {
          reject(parseError);
        }
      }
    });
  });
}

module.exports = readDatabase;
