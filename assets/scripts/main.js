// // // let firstNumber = 25;
// // // let lastNumber = 10;

// // // function calc() {
// // //   console.log(++firstNumber + lastNumber + lastNumber++); // 26 + 10 + 10 = 46

// // //   let fnumber = 30;
// // //   let inumber = 8;
// // //   console.log(fnumber >= inumber && firstNumber < fnumber); // true

// // //   let numberOne = 15;
// // //   let numberTwo = 35;
// // //   console.log(++numberOne - -numberTwo-- + -numberOne); // 16 + 35 + -16 = 35
// // //   console.log(numberOne-- + ++numberTwo); // 15 + 36 = 51
// // // }
// // // calc();
// // // calc();
// // // calc();

// // // let age = 10;
// // // function humanlifecycle() {
// // //   if (age >= 1 && age <= 3) {
// // //     console.log("baby");
// // //   } else if (age >= 4 && age <= 5) {
// // //     console.log("Preschool");
// // //   } else if (age >= 5 && age <= 8) {
// // //     console.log("Primary school stage");
// // //   } else if (age >= 9 && age <= 12) {
// // //     console.log("Pre-adolescence");
// // //   } else if (age >= 13 && age <= 15) {
// // //     console.log("early adolescence");
// // //   } else if (age >= 16 && age <= 19) {
// //     console.log("Adolescence");
// // //   } else if (age >= 20 && age <= 29) {
// // //     console.log("Youth stage");
// // //   } else if (age >= 30 && age <= 39) {
// // //     console.log("Maturity stage");
// // //   } else if (age >= 40 && age <= 59) {
// // //     console.log("Midlife");
// // //   } else if (age >= 60 && age <= 74) {
// // //     console.log("Seniors");
// // //   } else if (age >= 75 && age <= 100) {
// // //     console.log("Old age stage");
// // //   }
// // // }
// // // humanlifecycle();
// // // humanlifecycle();
// // // humanlifecycle();
// // // humanlifecycle();

// // // array shift

// // let arr = [1, 2, 3, 4, 5]

// // arr.shift();
// // console.log(arr); //[2, 3, 4, 5]

// // console.log(arr.shift());
// // console.log(arr); // [3, 4, 5 ]

// // let firstElement = arr.shift();
// // console.log(firstElement); // 3

// //add one product
// fetch("https://fakestoreapi.com/products/1")
//   .then((res) => res.json())
//   .then((json) => console.log(json));

// //get all products

// fetch("https://fakestoreapi.com/products")
//   .then((res) => res.json())
//   .then((json) => console.log(json));

// //add new product
// fetch("https://fakestoreapi.com/products", {
//   method: "POST",
//   body: JSON.stringify({
//     title: "test product",
//     price: 13.5,
//     description: "lorem ipsum set",
//     image: "https://i.pravatar.cc",
//     category: "electronic",
//   }),
// })
//   .then((res) => res.json())
//   .then((json) => console.log(json));

// // delete product
// fetch("https://fakestoreapi.com/products/6", {
//   method: "DELETE",
// })
//   .then((res) => res.json())
//   .then((json) => console.log(json));

document.getElementById("toggle").onclick = () => {
  if (document.body.classList.contains("dark-theme")) {
    document.body.classList.remove("dark-theme");
    document.getElementById("toggle").src = "assets/icons/moon.png";
  } else {
    document.body.classList.add("dark-theme");
    document.getElementById("toggle").src = "assets/icons/sun.png";
  }
};
let userData = document.getElementById("user-data");
function getData() {
  let data = "";
  fetch(`https://api.github.com/users/dinaHellal`)
    .then((res) => res.json())
    .then((data) => {
      userData.innerHTML = `
        <div class="avatar">
          <img src="${data.avatar_url}" alt="${data.name}" />
          <h1>${data.name}</h1>
          <a hraf="${data.html_url}"target="_blank" > GitHub Profile</a>
        </div>
      `;
    });
}
fetch(`https://api.github.com/users/dinaHellal/repos`)
.then((res) => res.json())
.then((data) => {
  let repos = "";
  for (let i = 0; i < data.length; i++) {
    repos += `
      <li>
        <a href="${data[i].homepage}" target="_blank">${data[i].name}</a>
      </li>
    `;
  }
  document.getElementById("user-repos").innerHTML = repos;
});

getData();
