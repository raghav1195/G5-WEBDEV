const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function HOF(callback) {
  rl.question("Enter student name: ", (name) => {
    rl.question("Enter student fees: ", (fees) => {
      const student = { name, fees: parseFloat(fees) };
      callback(student);
      rl.close();
    });
  });
}

function studentDetails(student) {
  console.log(`\nName : ${student.name}\nFees : ${student.fees}`);
}

function feesEmi(student) {
  let emi = student.fees / 10;
  console.log(`\nStudent fees EMI calculated for ${student.name} is ${emi}`);
}

// Ask user what they want to do
rl.question("Choose option:\n1. Show student details\n2. Calculate fees EMI\nEnter 1 or 2: ", (choice) => {
  if (choice === "1") {
    HOF(studentDetails);
  } else if (choice === "2") {
    HOF(feesEmi);
  } else {
    console.log("Invalid choice.");
    rl.close();
  }
});
