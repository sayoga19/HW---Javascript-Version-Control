//Membuat 100 nilai random (1 sampai 50) pada 1 array

function randomNumbers (length) {
  let numbers = []
  for (let i = 0; i < length; i++) {
    numbers.push(Math.floor(Math.random() * 50)  + 1)
  }
  return numbers
}

//Membagi 2 array berdasarkan indexnya, yakni array pada index genap dan array pada index ganjil

function splitIndex (numbers) {
  let indexGenap = []
  let indexGanjil = []
  for (let i = 0; i < numbers.length; i++) {
    if(i % 2 == 0) {
      indexGenap.push(numbers[i])
    } else  {
      indexGanjil.push(numbers[i])
    }
  }
  return [indexGenap, indexGanjil]
}

//Mencari fungsi Min, Max, Total dan Rata-rata

function statistikIndex(index) {
  let min = index [0]
  let max = index [0]
  let total = 0
  for (let i = 0; i < index.length; i++) {
    if (index[i] < min) {
      min = index[i]
    }
    if (index[i] > max) {
      max = index[i]
    }
    total += index[i]
  }
  let avg = total / index.length
  return {
    min: min,
    max: max,
    total: total,
    avg: avg
  }
}

//Mencari perbandingan kedua buah array

function perbandingan () {
  return  {
    min: statistikGenap.min > statistikGanjil.min ? "Min lebih besar array genap" :
    statistikGenap.min < statistikGanjil.min ? "Min lebih besar array ganjil" : "Min memiliki nilai sama antara array genap dan ganjil" ,
    max :statistikGenap.max > statistikGanjil.max ? "Max lebih besar array genap" :
    statistikGenap.max < statistikGanjil.max ? "Max lebih besar array ganjil" : "Max memiliki nilai sama antara array genap dan ganjil" ,
    total: statistikGenap.total > statistikGanjil.total ? "Total lebih besar array genap" :
    statistikGenap.total < statistikGanjil.total ? "Total lebih besar array ganjil" : "Total memiliki nilai sama antara array genap dan ganjil" ,
    avg: statistikGenap.avg > statistikGanjil.avg ? "Rata-rata lebih besar array genap" :
    statistikGenap.avg < statistikGanjil.avg ? "Rata-rata lebih besar array ganjil" : "Rata-rata memiliki nilai sama antara array genap dan ganjil" 
  }
}

let arrayRandomNumbers = randomNumbers (100)
let [arrayIndexGenap, arrayIndexGanjil] = splitIndex (arrayRandomNumbers)
let statistikGenap = statistikIndex(arrayIndexGenap)
let statistikGanjil = statistikIndex(arrayIndexGanjil)
let hasilBanding = perbandingan (statistikGenap, statistikGanjil)

console.log("Array 100 nilai random (1 sampai 50) : ", arrayRandomNumbers)
console.log("Array index genap : ", arrayIndexGenap)
console.log("Array index ganjil : ", arrayIndexGanjil)
console.log("Statistik array genap : ", statistikGenap)
console.log("Statistik array ganjil : ", statistikGanjil)
console.log("Perbandingan statistik : ", hasilBanding)