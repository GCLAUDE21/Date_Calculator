// Config Start Date Format, value et min

let jour = new Date().toISOString().split("T")[0];
const startDate = document.getElementById("start_date");
const endDate = document.getElementById("end_date");
const card = document.querySelector(".card");

startDate.value = jour;
startDate.min = jour;

// Tomorrow Date Calc

let tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate() + 1);

//convert tomorrow to input format

let tomorrowFormat = tomorrow.toISOString().split("T")[0];
console.log(tomorrowFormat);
endDate.value = tomorrowFormat;
endDate.min = tomorrowFormat;

// Condition Start >< End

startDate.addEventListener("change", (e) => {
  const tomorrowChange = Date.parse(e.target.value) + 1000 * 60 * 60 * 24;
  const tomorrowFormat = new Date(tomorrowChange).toISOString().split("T")[0];

  endDate.min = tomorrowFormat;

  if (startDate.value > endDate.value) {
    endDate.value = tomorrowFormat;
  }
});

// CALCUL

card.addEventListener("change", () => {
  const startParse = Date.parse(startDate.value);
  const endParse = Date.parse(endDate.value);
  const jourvacs = (endParse - startParse) / (1000 * 60 * 60 * 24);

  total.innerHTML = jourvacs * nightPrice.innerHTML;
});
