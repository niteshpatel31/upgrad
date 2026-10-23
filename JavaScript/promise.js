const users = ["Raj", "Nitesh", "Ravendra", "Thanay", "Tanjil", "Mahit"];

const orders = {
  id: 1,
  name: users[0],
  order: "Java T-Shirt",
  price: 5.5
};

async function count() {
  for (let i = 1; i <= 10; ++i) {
    console.log(i);
  }
}

const promise = new Promise((resolve, reject) => {
  let success = true;

  if (success)
    resolve("Data retrieved successfully!");
  else
    reject("Data didn't retrieve!");
});

promise
  .then((result) => {
    console.log("SUCCESS:", result);
  })
  .catch((error) => {
    console.log("ERROR:", error);
  })
  .finally(() => {
    console.log("PROMISE is SETTLED");
  });

const response = await fetch(
  "https://api.thecatapi.com/v1/images/search?limit=100"
);

const cat = await response.json();
cat.forEach(obj => { console.log(obj); })

const func = await setTimeout(() => console.log("Hello World!"), 2000);
console.log("typeof func : ", typeof func);


// count();
