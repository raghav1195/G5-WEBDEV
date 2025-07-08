function HOF(callback) {
  const student = { name: "Raghav", fees: 30000 };
  callback(student);
}

function studentDetails(student) {
  console.log(`name : ${student.name}\nfees : ${student.fees}`);
}

function feesEmi(student) {
  let emi = student.fees / 10;
  console.log(`Student fees EMI calculated for ${student.name} is ${emi}`);
}

//
HOF(studentDetails);
HOF(feesEmi);