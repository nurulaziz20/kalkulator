var fs = require("fs"); 
 
const { read } = require("fs"); 
const readline = require("readline"); 
const reader = readline.createInterface({ 
  input: process.stdin, 
  output: process.stdout, 
}); 
 
console.log("Kalkulator"); 
console.log("Pilih operator dengan memasukkan angka (1-4)"); 
console.log("============"); 
console.log("1. Tambah(+)"); 
console.log("2. Kurang(-)"); 
console.log("3. Bagi(/)"); 
console.log("4. Kali(*)"); 
 
reader.question("Pilih Operator yang anda inginkan :", (operator) => { 
  reader.question("Masukkan Angka Pertama : ", (inputSatu) => { 
    reader.question("Masukkan Angka Kedua :", (inputDua) => { 
      console.log("============================================="); 
      console.log("Masukkan Angka Pertama " + inputSatu); 
      console.log("Masukkan Angka Kedua " + inputDua); 
      console.log("=============================================="); 
      if (operator == "1") { 
        var hasil = parseInt(inputSatu) + parseInt(inputDua); 
      } else if (operator == "2") { 
        var hasil = parseInt(inputSatu) - parseInt(inputDua); 
      } else if (operator == "3") { 
        var hasil = parseInt(inputSatu) / parseInt(inputDua); 
      } else if (operator == "4") { 
        var hasil = parseInt(inputSatu) * parseInt(inputDua); 
      } else { 
        console.log("Operator yang anda pilih salah"); 
      } 
      console.log("Hasilnya yaitu :" + hasil); 
      fs.appendFile("hasil.txt", "Hasilnya yaitu :" + hasil, function (err) { 
        if (err) throw err; 
        console.log("saved"); 
      }); 
    }); 
  }); 
});