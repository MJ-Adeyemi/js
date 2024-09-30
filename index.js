// function applyDiscount(){
//     let amount = document.getElementById('amount').value
//     let discount = document.getElementById('discount').value


//     let dAmount = (discount / 100) * amount;
//     let priceAfter = amount - dAmount;
//     // console.log(priceAfter)

//     let blankp = document.getElementById('blankp')
//     blankp.innerHTML = priceAfter
// }

// function totalAmount(){
//     let originalAmount = document.getElementById('amount2').value;
//     let tipp = document.getElementById('tip').value;

//     let discount = (originalAmount * tipp) / 100;
//     let discountedAmount = (originalAmount - discount);

//     let displayamount = document.getElementById('displayamount')
//     displayamount.innerHTML = discountedAmount
// }

// function todoButton(){
//     let todoInput = document.getElementById('todo').value
    
//     let displayArea = document.getElementById('displaytodo')
//     displayArea.innerHTML += todoInput
// }

// function generateNow(){
//     generatednumber.innerHTML = (Math.floor(Math.random() * 100));
//     generatednumber2.innerHTML = (Math.floor(Math.random() * 100));
// }

// // Assignment
// Math.trunc
// // The Math.trunc() method returns the integer part of a number.
// // The Math.trunc() method removes the decimals (does NOT round the number).

// Maths.ceil
// // The Math.ceil() method rounds a number rounded UP to the nearest integer.

// Maths.round
// // The Math.round() method rounds a number to the nearest integer.
// // 2.49 will be rounded down (2), and 2.5 will be rounded up (3).

// Maths.abs
// // The Math.abs() method returns the absolute value of a number.

// Maths.max
// // The Math.max() method returns the number with the highest value.

// Maths.min
// // The Math.min() method returns the number with the lowest value.

// const users = [
//   {
//     id: 1,
//     firstName: "Emily",
//     lastName: "Johnson",
//     maidenName: "Smith",
//     age: 28,
//     gender: "female",
//     email: "emily.johnson@x.dummyjson.com",
//     phone: "+81 965-431-3024",
//     username: "emilys",
//     password: "emilyspass",
//     birthDate: "1996-5-30",
//     image: "...",
//     bloodGroup: "O-",
//     height: 193.24,
//     weight: 63.16,
//     eyeColor: "Green",
//     hair: {
//       color: "Brown",
//       type: "Curly",
//     },
//     ip: "42.48.100.32",
//     address: {
//       address: "626 Main Street",
//       city: "Phoenix",
//       state: "Mississippi",
//       stateCode: "MS",
//       postalCode: "29112",
//       coordinates: {
//         lat: -77.16213,
//         lng: -92.084824,
//       },
//       country: "United States",
//     },
//     macAddress: "47:fa:41:18:ec:eb",
//     university: "University of Wisconsin--Madison",
//     bank: {
//       cardExpire: "03/26",
//       cardNumber: "9289760655481815",
//       cardType: "Elo",
//       currency: "CNY",
//       iban: "YPUXISOBI7TTHPK2BR3HAIXL",
//     },
//     company: {
//       department: "Engineering",
//       name: "Dooley, Kozey and Cronin",
//       title: "Sales Manager",
//       address: {
//         address: "263 Tenth Street",
//         city: "San Francisco",
//         state: "Wisconsin",
//         stateCode: "WI",
//         postalCode: "37657",
//         coordinates: {
//           lat: 71.814525,
//           lng: -161.150263,
//         },
//         country: "United States",
//       },
//     },
//     ein: "977-175",
//     ssn: "900-590-289",
//     userAgent:
//       "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.93 Safari/537.36",
//     crypto: {
//       coin: "Bitcoin",
//       wallet: "0xb9fc2fe63b2a6c003f1c324c3bfa53259162181a",
//       network: "Ethereum (ERC20)",
//     },
//     role: "admin", // or "moderator", or "user"
//   },
// ];

// newparagraph1.innerHTML = users[0].firstName
// newparagraph2.innerHTML = users[0].age;
// newparagraph3.innerHTML = users[0].gender;
// newparagraph4.innerHTML = users[0].university;
// newparagraph5.innerHTML = users[0].hair.color;
// newparagraph6.innerHTML = users[0].company.address.address;
// newparagraph7.innerHTML = users[0].company.department;
// newparagraph8.innerHTML = users[0].bank.currency;
// newparagraph9.innerHTML = users[0].bank.cardType;
// newparagraph10.innerHTML = users[0].address.state;


function playNow() {
  let userInput1 = document.getElementById("userinput1")
  let displayArea = document.getElementById('displayarea')

  let generate1 = Math.floor(Math.random() * 10);
  let randomNum = document.getElementById('generate1')
  randomNum.innerHTML = generate1
  if (userInput1.value == generate1){
    displayArea.innerHTML = 'Congratulations, You Win'
  } else {
    displayArea.innerHTML = 'Ooops, You lost, try again later'
  }
}