const button = document.querySelector(".btn-success");
console.log(button);
const buttonCancel = document.querySelector(".btn-danger");
console.log(buttonCancel);

buttonCancel.addEventListener("click", function () {
  const name = (document.getElementById("name").value = "");
  const km = (document.getElementById("km").value = "");
  const age = (document.getElementById("age").value = "");
  ticket.classList.add("d-none");
});

button.addEventListener("click", function () {
  const name = document.getElementById("name").value;
  const km = document.getElementById("km").value;
  const age = document.getElementById("age").value;
  const ticket = document.getElementById("ticket");
  console.log(km);
  console.log(age);
  console.log(name);
  if (name === "" || isNaN(km) || age === "") {
    alert("inserisci i valori mancanti!");
  } else {
    const nominativo = (document.getElementById("nominative").innerHTML = `
        <h6 class = "fw-bolder">Nome passeggero</h6>
        <p class = "fw-bolder"> ${name} </p>
    `);
    const offerta = (document.getElementById("discount").innerHTML = `
        <h6>Offerta</h6>
        <p> ${age}</p>
    `);
    const carriage = document.getElementById("carriage");
    const nCarriage = (carriage.querySelector("div").innerHTML = Math.floor(
      Math.random() * 10
    ));
    const code = document.getElementById("code");
    const cp = (code.querySelector("div").innerHTML =
      Math.floor(Math.random() * 99999) + 10000);
  }
  const fixedPrice = 0.21;
  let TravelPrice = fixedPrice * km;
  if (age === "Biglietto Under 18") {
    TravelPrice = TravelPrice - (TravelPrice * 20) / 100;
  } else if (age === "Biglietto Over 65") {
    TravelPrice = TravelPrice - (TravelPrice * 40) / 100;
  } else {
    TravelPrice;
  }
  console.log(TravelPrice);
  let decimalCost = TravelPrice.toFixed(2);
  const price = (document.getElementById("price").innerHTML = `
        <h6 class = "fw-bolder">Costo Biglietto</h6>
        <p class = "fw-bolder">${decimalCost} &euro;</p>
        `);
});
