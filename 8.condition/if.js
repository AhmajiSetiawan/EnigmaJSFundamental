const price = 100;
const payment = 50;

//1. Kalau uangnya pas
if(price === payment) {
console.log("Terimakasih sudah bayar dengan uang pas"); 

//2.ketika uang nya lebih
} else if (payment > price ) {
const kembalian = payment - price;

console.log(`Kemblian Anda Rp ${kembalian}`);
} else {
     const moneyDeficit = price - payment;
     console.log(`Maaf uang anda kurang ${moneyDeficit}`)
}