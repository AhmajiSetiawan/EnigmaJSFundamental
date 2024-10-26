//method adalah sebuah fungsi yang bisa digunakan terhadap tipe data 
// cara penggunaan nya menggunakan titik(.)
// jika bergambar balok itu disebut dengan property
// jika bergambar kubus itu disebut dengan method
// method yang dapat digunakan untuk memanipulasi String adalah charAt(), concat(), split(), slice(), toUpperCase(), toLowerCase(),

//1. methode charAt()
// const username = "Ahmaji"
// const firstLater = username.charAt(0) //charAt() digunakan untuk mendapatkan salah satu character tertentu di dalam sebuah String
// console.log(firstLater);

//2. methode toUpperCase() digunakan untuk mengubah String/Teks menjadi String/teks KAPITAL
// let user1 = "setiawan"
// console.log(user1.toUpperCase());

//3. methode toLowerCase() digunakan untuk mengubah String/Teks menjadi String/teks dengan huruf kecil semua
// let user2 = "SETIAWAN"
// console.log(user2.toLowerCase());

//4. methode slice (argument1 , argument 2) untuk memotong sebuah String/teks argument1 dimulai dengan memasukan indeks ke berapa dan argument 2 digunakan untuk akhir pemotongan String/teks
const username = "naruto";
const firstLetterUpperase = username.charAt(0).toUpperCase();
console.log(firstLetterUpperase + username.slice(1));