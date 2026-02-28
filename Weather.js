let ip = document.querySelectorAll("input")[0].value;
// let ip = "103.102.139.118";
let btn = document.getElementById("btn");
// let apiUrl = `http://ip-api.com/json/${ip}`;

// btn.addEventListener("click", getData);

// async function getData() {
//   try {
//     let response = await fetch(apiUrl);
//     let data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// }
// getData();

btn.addEventListener("click", getData);

function getData() {
  console.log(ip);
}
