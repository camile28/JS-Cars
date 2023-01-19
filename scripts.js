//Sukurkite HTML formą, kurioje vartotojas galės įrašyti (į input laukelius): car brand, model,
//mileage, price ir image (url laukelis). Per konstruktorių, sukuriams objektas ir jis
//atvaizduojamas po forma (CSS rašykite CSS'e) Paspaudus ant automobilio nuotraukos- turi alert išmesti kainą.

//1. Susikurti HTML formą su reikalingais input laukeliais, kurioje vartotojas galės įrašyti (į input laukelius): car brand, model,
//mileage, price ir image (url laukelis). 

//2. Susikurti klasę Car

//3. Pasirašyti funkciją kuri sukurs objektą pagal klasę ir iškvies jo metodą (kuris pridės car kortelę į HTML su reikiamais duomenimis)

//  3.1. Iš pradžių susikurti funkciją, kuri išspausdins formoje įvestus duomenis į konsolę.

//  3.2. Papildyti/pakeisti funkciją taip, kad sukurtų car objektą ir iškviestų to objekto metodą.

//4. Car klasėje sukurti metodą, kuris pridėtų visus objekto duomenis į HMTL (sukurtų kortelę su duomenimis ir ją atvaizduotų puslapyje.)

class Car {
  constructor(brand, model, mileage, price, image) {
    this.brand = brand;
    this.model = model;
    this.mileage = mileage;
    this.price = price;
    this.image = image;
  }
  addToHTML() {
    var container = document.getElementById("car-container");
    var card = document.createElement("div");
    card.innerHTML = `
      <img src="${this.image}" alt="${this.brand} ${this.model}" class="car-image">
      <p>Brand: ${this.brand}</p>
      <p>Model: ${this.model}</p>
      <p>Mileage: ${this.mileage}</p>
      <p>Price: ${this.price}</p>
    `;
    container.appendChild(card);
  }
}
document.getElementById("car-form").addEventListener("submit", function(event) {
  event.preventDefault();
  var car = new Car(
    document.getElementById("brand").value,
    document.getElementById("model").value,
    document.getElementById("mileage").value,
    document.getElementById("price").value,
    document.getElementById("image").value
  );
  car.addToHTML();
});
document.addEventListener("click", function(event) {
  if (event.target.className === "car-image") {
    alert(event.target.parentNode.querySelector('p:last-child').innerHTML);
  }
});

//link for supra https://www.topgear.com/sites/default/files/2022/06/1-Toyota-GR-Supra.jpg
