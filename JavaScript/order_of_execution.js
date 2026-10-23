let counter = 0;
async function greet() {
  ++counter;
  console.log(counter + "th Greetings !");

}

async function count() {
  setTimeout(() => {
    let string = "";
    let counter = 0;
    while (counter % 100 != 0) {
      string += counter + ", ";
      ++counter;
    }
    console.log(string);
  }, 2000)

}

count();
greet();
greet();
count();
greet();
count();
greet();
