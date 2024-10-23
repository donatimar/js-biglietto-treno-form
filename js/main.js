const button = document.querySelector(".btn-success");
console.log(button);
const buttonCancel = document.querySelector(".btn-danger");
console.log(buttonCancel);

// funzione per svuotare i campi col pulsante Annulla
buttonCancel.addEventListener("click", function () {
  document.getElementById("name").value = "";
  document.getElementById("km").value = "";
  document.getElementById("age").value = "";
  document.getElementById("nominative").innerHTML = `
    <h3 class="fw-bolder fs-5">Nome passeggero</h3>
  `;
  document.getElementById("discount").innerHTML = `
    <h3 class="fw-bolder fs-5">Offerta</h3>
  `;
  document.getElementById("carriage").innerHTML = `
    <h3 class="fw-bolder fs-5">Carrozza</h3>
  `;
  document.getElementById("code").innerHTML = `
    <h3 class="fw-bolder fs-5">Codice CP</h3>
  `;
  document.getElementById("price").innerHTML = `
    <h3 class="fw-bolder fs-5">Costo Biglietto</h3>
  `;
});

// funzione per generare il biglietto
button.addEventListener("click", function () {
  const name = document.getElementById("name").value.trim();
  const km = parseFloat(document.getElementById("km").value);
  const age = document.getElementById("age").value;

  console.log(km, age, name);

  // verifico che i dati inseriti siano corretti
  if (name === "" || isNaN(km) || km <= 0 || age === "") {
    alert("Inserisci i valori in modo corretto");
    return;
  }

  // aggiungi i dati raccolti al biglietto generato
  document.getElementById("nominative").innerHTML = `
    <h3 class="fw-bolder fs-5">Nome passeggero</h3>
    <p>${name}</p>
  `;

  document.getElementById("discount").innerHTML = `
    <h3 class="fw-bolder fs-5">Offerta</h3>
    <p>${age}</p>
  `;

  document.getElementById("carriage").innerHTML = `
    <h3 class="fw-bolder fs-5">Carrozza</h3>
    <p>${Math.floor(Math.random() * 10) + 1}</p>
  `;

  document.getElementById("code").innerHTML = `
    <h3 class="fw-bolder fs-5">Codice CP</h3>
    <p>${Math.floor(Math.random() * 90000) + 10000}</p>
  `;

  // calcolo il prezzo del biglietto
  const fixedPrice = 0.21;
  let travelPrice = fixedPrice * km;

  // Sconto del 20%
  if (age === "Biglietto Under 18") {
    travelPrice *= 0.8;
    // Sconto del 40%
  } else if (age === "Biglietto Over 65") {
    travelPrice *= 0.6;
  }

  const decimalCost = travelPrice.toFixed(2);

  // output del prezzo del biglietto
  document.getElementById("price").innerHTML = `
    <h3 class="fw-bolder fs-5 ">Costo Biglietto</h3>
    <p>${decimalCost} €</p>
  `;
});
