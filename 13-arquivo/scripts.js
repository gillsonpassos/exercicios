// 1- var, let e const
var x = 10;
var y = 15;

if (y > 10) {
  var x = 5;
  console.log(x);
}

console.log(x);

let a = 10;
let b = 15;

if (b > 10) {
  let a = 5;
  console.log(a);
}

console.log(a);

let i = 100;

for (let i = 0; i < 5; i++) {
  console.log(i);
}

console.log(i);

function logName() {
  const name = "gilson";
  console.log(name);
}

const name = "pedro";

logName();

console.log(name);

// 2 arrow function
const sum = function sum(a, b) {
  return a + b;
};

const arrowSum = (a, b) => a + b;

console.log(sum(5, 5));
console.log(arrowSum(5, 5));

const greeting = (name) => {
  if (name) {
    return "ola " + name + "!";
  } else {
    return "ola!";
  }
};

console.log(greeting("Gilson"));
console.log(greeting());

const testeArrow = () => console.log("testou!");

testeArrow();

const user = {
  name: "Theo",
  sayUserName() {
    var self = this;
    setTimeout(function () {
      console.log(self);
      console.log("Username: " + self.name);
    }, 500);
  },
  sayUserNameArrow() {
    setTimeout(() => {
      console.log(this);
      console.log("Username: " + this.name);
    }, 700);
  },
};

//user.sayUserName();
//user.sayUserNameArrow();

// 3 filter
const arr = [1, 2, 3, 4, 5];

console.log(arr);

const higtNumbers = arr.filter((n) => {
  if (n >= 3) {
    return n;
  }
});

console.log(higtNumbers);

const users = [
  { name: "Matheus", available: true },
  { name: "Pedro", available: false },
  { name: "Joao", available: false },
  { name: "Lucas", available: true },
];

const availableUsers = users.filter((user) => user.available);
const notavailableUsers = users.filter((user) => !user.available);

console.log(availableUsers);
console.log(notavailableUsers);

// 4 map
const products = [
  { nome: "camisa", price: 10.99, category: "Roupas" },
  { nome: "chaleira eletrica", price: 49.99, category: "Eletro" },
  { nome: "fogão", price: 400, category: "Eletro" },
  { nome: "Calça Jeans", price: 50.99, category: "Roupas" },
];

products.map((product) => {
  if (product.category === "Roupas") {
    product.onSale = true;
  }
});

console.log(products);

// 5 Template Literals
const userName = "Matheus";
const age = 30;

console.log(`o nome do usuario é ${userName} e ele tem ${age} anos`);

// 6 destructuring
const fruits = ["Maçã", "Laranja", "Mamão"];

const [f1, f2, f3] = fruits;

console.log(f1);

console.log(f3);

const productDetails = {
  name: "Mouse",
  price: 39.99,
  category: "Perifericos",
  color: "cinza",
};

const {
  name: productName,
  price,
  category: productCategory,
  color,
} = productDetails;

console.log(
  `o nome do produto é ${productName}, custa R$${price}, pertence a categoria ${productCategory}, e é da cor ${color}`
);

// 7 spread operator
const a1 = [1, 2, 3];
const a2 = [4, 5, 6];

const a3 = [...a1, ...a2];

console.log(a3);

const a4 = [0, ...a1, 4];

console.log(a4);

const carName = { name: "Gol" };
const carBrand = { brand: "VW" };
const otherInfos = { km: 100000, price: 49000 };

const car = { ...carName, ...carBrand, ...otherInfos, wheels: 4 };

console.log(car);

// 8 Classes
class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  productWithDiscount(discount) {
    return this.price * ((100 - discount) / 100);
  }
}

const shirt = new Product("camisa gola v", 20);

console.log(shirt.name);

console.log(shirt.productWithDiscount(10));

console.log(shirt.productWithDiscount(50));

const tenis = new Product("tenis verde", 120);

console.log(tenis.productWithDiscount(20));

// 9 herança
class ProductWithAttributes extends Product {
  constructor(name, price, colors) {
    super(name, price);
    this.colors = colors;
  }

  showColors() {
    console.log("As cores são:");
    this.colors.forEach((color) => {
      console.log(color);
    });
  }
}

const hat = new ProductWithAttributes("Chapeu", 29.99, [
  "Preto",
  "Azul",
  "Verde",
]);

console.log(hat.name);

console.log(hat.productWithDiscount(30));

hat.showColors();
