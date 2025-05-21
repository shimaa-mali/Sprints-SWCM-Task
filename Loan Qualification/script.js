const age = 55;
const salary = 35000;

if (age >= 18 && age <= 60) {
  if (salary >= 5000) {
    let loanAmount = salary * 3;

    //  the maximum loan amount to 60000
    if (loanAmount > 60000) {
      loanAmount = 60000;
    }

    console.log(`Congratulations! You are eligible for ${loanAmount} EGP loan`);
  } else {
    console.log("Applicant is rejected because they do not meet the minimum requirements");
  }
} else {
  console.log("Applicant is rejected because they do not meet the minimum requirements");
}


