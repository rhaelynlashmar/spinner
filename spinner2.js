const spinner = ['|', '/', '-', '\\', '|', '/', '-', '\\', '|'];

delay = 100;

for (const step in spinner) {
  setTimeout(() => {
    process.stdout.write(`\r${spinner[step]}   `);
  }, delay)
  delay += 200;
};