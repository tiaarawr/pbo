// class induk
class Kuliah {
  constructor(nama, nim) {
    this.nama = nama; // Attribut1
    this.nim = nim; // Attribut2
  }
  disPlayinfo() { //Method1
    console.log('Nama: ${this.nama}, NIM: ${this.nim}');
  }
}
// class anak1
class Mahasiswa {
  // konstruktor untuk inisialisasi objek
  constructor(nama, nim, jurusan) {
    this.nama = nama; // attribut3
    this.nim= nim;
    this.jurusan = jurusan; //Properti objek
}
  // Metode untuk menampilkan informasi mobil
  displayInfo() { //method2
    console.log(`Mahasiswa: ${this.nama} ${this.nim} (${this.jurusan})`);
  }
}
  // class anak2
class Dosen {
  constructor(nama, kodeDosen, mataKuliah) {
    this.nama = nama; 
    this.kodeDosen= kodeDosen; //attribut4
    this.mataKuliah = mataKuliah; //attribut5
  }
  displayInfo() { //method3
    console.log(`Dosen: ${this.nama} ${this.kodeDosen}, Mengajar: (${this.mataKuliah})`);
  }
  perkenalan() { // method4
    console.log(`Halo, saya ${this.nama}, dosen (${this.mataKuliah})`);
  }
}

// Instansiasi objek dari kelas Mobil
const Mahasiswa1 = new Mahasiswa(`Aliqa`, `202401110046`, 'Informatika'); // Membuat objek mahasiswa1
const Mahasiswa2 = new Mahasiswa(`Widya`, `202401110053`, 'Informatika');   // Membuat objek mahasiswa2
const Dosen1 = new Dosen(`Pak Udin`, `D0341`, 'Pemrograman');   // Membuat objek dosen
// Memanggil metode untuk menampilkan informasi
Mahasiswa1.displayInfo(); // Output: mahasiswal: Aliqa (202401110046) Informatika
Mahasiswa2.displayInfo(); // Output: mahasiswal: Widya (202401110053) Informatika
Dosen1.displayInfo(); 
Dosen1.perkenalan();

}
}
let hewan1 = new Hewan();
let hewan2 = new Anjing();
hewan1.speak(); // Output: Hewan berbicara
hewan2.speak(); // Output: Anjing menggonggong
