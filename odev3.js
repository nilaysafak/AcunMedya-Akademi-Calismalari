/*
 * JavaScript Değişkenler ve Veri Tipleri Ödevi
 * 
 * Bu dosyayı çalıştırmak için:
 * 1. Tarayıcı konsolunda çalıştırabilirsiniz (F12 -> Console -> kodu yapıştırın)
 * 2. Node.js ile çalıştırabilirsiniz (prompt ve alert kısımları hariç)
 * 3. HTML dosyasına <script src="odev.js"></script> ekleyerek kullanabilirsiniz
 */

// ----- 1. BÖLÜM: var, let, const arasındaki farklar -----
console.log("--- VAR, LET, CONST ARASINDAKİ FARKLAR ---");

// var örneği
var isim1 = "Ahmet";
console.log("var ile tanımlanan ilk değer:", isim1);

var isim1 = "Mehmet"; // var ile aynı değişken tekrar tanımlanabilir
console.log("var ile tekrar tanımlama sonrası:", isim1);

// let örneği
let isim2 = "Ali";
console.log("let ile tanımlanan ilk değer:", isim2);

// let isim2 = "Veli"; // Hata verir: let ile aynı değişken tekrar tanımlanamaz
isim2 = "Veli"; // Ama değeri değiştirilebilir
console.log("let ile değer değiştirme sonrası:", isim2);

// const örneği
const PI = 3.14;
console.log("const ile tanımlanan değer:", PI);

// PI = 3.1415; // Hata verir: const ile tanımlanan değişkenin değeri değiştirilemez

// const ile obje örneği
const kisi = { ad: "Ayşe", yas: 25 };
console.log("const ile tanımlanan obje:", kisi);

kisi.ad = "Fatma"; // Objenin özellikleri değiştirilebilir
console.log("const objesinin özelliğini değiştirme sonrası:", kisi);

// kisi = { ad: "Zeynep", yas: 30 }; // Hata verir: objenin kendisi değiştirilemez

console.log("\n"); 

// ----- 2. BÖLÜM: Farklı veri tiplerinde değişkenler ve typeof -----
console.log("--- VERİ TİPLERİ VE TYPEOF KULLANIMI ---");

// String
let metin = "Merhaba Dünya";
console.log("String değer:", metin);
console.log("typeof metin:", typeof metin); // string

// Number
let sayi = 42;
console.log("Number değer:", sayi);
console.log("typeof sayi:", typeof sayi); // number

// Boolean
let dogruMu = true;
console.log("Boolean değer:", dogruMu);
console.log("typeof dogruMu:", typeof dogruMu); // boolean

// Undefined
let tanimsiz;
console.log("Undefined değer:", tanimsiz);
console.log("typeof tanimsiz:", typeof tanimsiz); // undefined

// Null
let bos = null;
console.log("Null değer:", bos);
console.log("typeof bos:", typeof bos); // object (JavaScript'in bilinen bir hatası)

// Object
let nesne = { ad: "Ali", yas: 25 };
console.log("Object değer:", nesne);
console.log("typeof nesne:", typeof nesne); // object

// Array
let dizi = [1, 2, 3, 4, 5];
console.log("Array değer:", dizi);
console.log("typeof dizi:", typeof dizi); // object
console.log("Array.isArray(dizi):", Array.isArray(dizi)); // true

// Function
let fonksiyon = function() { return "Merhaba"; };
console.log("Function değer:", fonksiyon);
console.log("typeof fonksiyon:", typeof fonksiyon); // function

console.log("\n"); 

// ----- 3. BÖLÜM: Kullanıcıdan prompt ile iki sayı alıp toplamını alert ile gösterme -----
console.log("--- KULLANICIDAN VERİ ALMA VE İŞLEME ---");
console.log("Aşağıdaki fonksiyonu bir web sayfasında çalıştırabilirsiniz:");


console.log(`
function sayilariTopla() {
    let sayi1 = prompt("Birinci sayıyı giriniz:");
    let sayi2 = prompt("İkinci sayıyı giriniz:");
    
    // prompt ile alınan değerler string tipindedir, Number() ile sayıya çeviriyoruz
    let toplam = Number(sayi1) + Number(sayi2);
    
    // Sonucu alert ile gösteriyoruz
    alert("Girdiğiniz sayıların toplamı: " + toplam);
}

sayilariTopla(); // Fonksiyonu çağırarak işlemi başlatıyoruz
`);

console.log("Not: Bu fonksiyonu tarayıcı konsolunda çalıştırabilirsiniz.");
