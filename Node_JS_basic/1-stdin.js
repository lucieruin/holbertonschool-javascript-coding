console.log('Welcome to Holberton School, what is your name?');

process.stdin.setEncoding('utf8');

process.stdin.on('data', (data) => {
  const input = data.trim();
  if (input === 'exit') {
    console.log('This important software is now closing');
    process.exit();
  } else {
    console.log(`Your name is: ${input}`);
    console.log('Welcome to Holberton School, what is your name?');
    process.exit();
  }
});
