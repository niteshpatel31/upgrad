const users = ["Raj", "Nitesh", "Ravendra", "Thanay", "Tanjil", "Mahit"];
const orders = { id: 1, name: users[0], order: "Java T-Shirt", price: 5.5 };
// getData(function(data) {
//   processData(data, function(processedData) {
//     saveData(processedData, function(response) {
//       sendNotification(response, function(notificationResult) {
//         console.log("All done!");
//       });
//     });
//   });
// });
async function count() { for (let i = 1; i <= 100; ++i)console.log(i); }
var promise = new Promise((resolve, reject) => {
  let success = true;
  if (success)
    resolve("Data retrived Successfully!")
  else reject("Data Didn't retrived!");
});

console.log(promise);
console.log(users);
console.log(orders);
