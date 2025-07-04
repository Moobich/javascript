function printTable() {
  const num = document.getElementById("number").value;
  let a = `<h3>Table of ${num}</h3><ul>`;

  for (let i = 1; i <= 10; i++) {
    a += `<li>${num} × ${i} = ${num * i}</li>`;
  }
  a += "</ul>";
  document.getElementById("tableResult").innerHTML = a;
}

function displayhtml() {
  const num2 = parseInt(document.getElementById("display").value);
  let d = `<h2>Area of circle of radius ${num2} is `
  if (num2 > 0)
    d += `${num2 * num2 * 3.148}`
  d += ` </h2>`
  document.getElementById("displayResult").innerHTML = d;
}

function comparenumbers() {
  const cnum1 = parseInt(document.getElementById("compareinput1").value);
  const cnum2 = parseInt(document.getElementById("compareinput2").value);
  let comparedisplay = `<h2>`
  if (cnum1 < cnum2) {
    comparedisplay += `${cnum1} is less than ${cnum2}`
  }
  else {
    comparedisplay += `${cnum1} is greater than ${cnum2}`
  }
  comparedisplay += ` </h2>`
  document.getElementById("compareResult").innerHTML = comparedisplay;
}

function checklogin() {
  const user1 = document.getElementById("u1").value;
  const pass1 = document.getElementById("p1").value;
  if (user1 === '' || pass1 === '') {
    alert('Please enter both username and password!');
  } else {
    // Show success message for any non-empty input
    alert('You have successfully logged in!');
  }
}

function signcheck() {
  const dig1 = parseInt(document.getElementById("digitcheck").value);
  let digprint = `<h2>The number you entered is `;
  if (dig1 < 0) {
    digprint += `negative`
  }
  else if (dig1 == 0) {
    digprint += `zero`
  }
  else {
    digprint += `positive`
  }
  digprint += `.</h2>`
  document.getElementById("checksign").innerHTML = digprint;
}

function getgrades() {
  const obtm = parseInt(document.getElementById("obtainedmarks").value);
  const ttlm = parseInt(document.getElementById("totalmarks").value);
  let gradeprint = `<h2>Your Grade is `;
  const percntm = (obtm / ttlm) * 100

  if (percntm < 40) {
    gradeprint += `F`
  }
  else if (percntm < 50) {
    gradeprint += `E`
  }
  else if (percntm < 60) {
    gradeprint += `D`
  }
  else if (percntm < 70) {
    gradeprint += `C`
  }
  else if (percntm < 80) {
    gradeprint += `B`
  }
  else if (percntm < 90) {
    gradeprint += `A`
  }
  else {
    gradeprint += `A+`
  }
  gradeprint += `.</h2>`
  document.getElementById("gradeprint").innerHTML = gradeprint;
}

function dayname() {
  let a = parseInt(document.getElementById("weekday").value);
  let dayprint = `<h2> This is `;
  if (a > 0 && a < 8) {
    let day = a;
    switch (day) {
      case 1:
        day = "Monday";
        break;
      case 2:
        day = "Tuesday";
        break;
      case 3:
        day = "Wednesday";
        break;
      case 4:
        day = "Thursday";
        break;
      case 5:
        day = "Friday";
        break;
      case 6:
        day = "Saturday";
        break;
      case 7:
        day = "Sunday";
    }
    dayprint += `${day}.</h2>`
  }
  else {
    alert("Enter numbers only from 1 to 7")
  }
  document.getElementById("weekResult").innerHTML = dayprint;
}

function factorial5() {
  let a = 5;
  let b = 1;
  let print = `<h2> Factorial of 5 is `;
  let i = 1;
  while (i <= a) {
    b *= i
    i++;

  }
  print += `${b} <h2>`
  document.getElementById("factorialResult").innerHTML = print;
}

function calculator() {
  let a = parseInt(document.getElementById("no1").value);
  let b = parseInt(document.getElementById("no2").value);
  let c = document.getElementById("operator").value;
  let d = `<h4> Your answer is `;
  if (c == "add") {
    d += a + b
  }
  else if (c == "subtract") {
    d += a - b
  }
  else if (c == "Multiply") {
    d += a * b
  }
  else {
    d += (a / b).toFixed(3);
  }
  d += `</h4>`
  document.getElementById("calcresult").innerHTML = d;
}

function uinputhtml() {
  let a = parseInt(document.getElementById("uinput").value);
  let b = `<h4> Inverse input for ${a} is: </h4>`
  let c = a
  do {
    b += `${c} <br>`;
    c--;
  }
  while (c > 0)
  // b+= `</h2>`
  document.getElementById("uinputresult1").innerHTML = b;
}

// Manipulating the arrays
// let arraydata =[
//   {Rollno: 1, name: "Ahmad", section: "Grey"},
//   {Rollno: 2, name: "Ali", section: "Brown"},
//   {Rollno: 3, name: "Abdullah", section: "Grey"},
//   {Rollno: 4, name: "Mohsan", section: "Brown"}
// ]
// console.log(arraydata);

// // add new user
// arraydata.push({Rollno: 5, name: "Affan", section: "Brown"})
// console.log(arraydata);



// Remove a user
// arraydata = arraydata.filter(arraydata => arraydata.section !== "Brown")
// console.log(arraydata);

// Finding a user by name
// let finduser1= arraydata.find(arraydata => arraydata.name === "Mohsan");
// console.log(finduser1);

// Finding an array of all students
// let allstudents= arraydata.map(arraydata => arraydata.name.toUpperCase());
// console.log(allstudents);

// Finding users on conditions
// let sectionfinder = arraydata.find(arraydata => arraydata.section === "Brown")
// console.log(sectionfinder);
let arraydata =[
  {Rollno: 1, name: "Ahmad", section: "Grey"},
  {Rollno: 2, name: "Ali", section: "Brown"},
  {Rollno: 3, name: "Abdullah", section: "Grey"},
  {Rollno: 4, name: "Mohsan", section: "Brown"}
];  

document.getElementById("array").textContent = JSON.stringify(arraydata, null, 2);




