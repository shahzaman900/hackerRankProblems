function sockMerchant(n, ar) {
   // Write your code here
   let pairs= 0;
   const count = {};

   ar.forEach(element => {
     count[element] = (count[element] || 0) + 1;
     console.log(count[element]);
    });
    console.log(count);

   for (const [key, value] of Object.entries(count)) {
     pairs += Math.floor(value/2)
   }
console.log(pairs);
   return pairs;
}

sockMerchant(9, [10, 20 ,20 ,10, 10, 30 ,50 ,10 ,20 ])