class Mahasiswa {
  constructor(nama, nim, jurusan, nilai) {
    this.nama = nama;     // atribut publik
    this.nim = nim;       // atribut publik
    this.jurusan = jurusan; // atribut publik
    
    let _nilai = nilai;   // atribut privat 

    // Getter
    this.getNilai = function () {
      return _nilai;
    };

    // Setter dengan validasi
    this.setNilai = function (nilaiBaru) {
      if (typeof nilaiBaru === "number" && nilaiBaru >= 0 && nilaiBaru <= 100) {
        _nilai = nilaiBaru;
      } else {
        console.log("Nilai harus antara 0 dan 100");
      }
    };

    // Method tambahan
    this.info = function () {
      console.log(`Nama: ${this.nama}, NIM: ${this.nim}, Jurusan: ${this.jurusan}, Nilai: ${_nilai}`);
    };
  }
}

// Membuat objek
let prodi1 = new Mahasiswa("Andi", "1234", "Informatika", 70);
let prodi2 = new Mahasiswa("Ansa", "5678", "Sastra", 80);

// Tampilkan info awal
prodi1.info();
prodi2.info();

// Ubah lewat setter
prodi1.setNilai(85);   // valid
prodi2.setNilai(150);  // invalid, akan tampil pesan error

// Tampilkan info setelah perubahan
prodi1.info();
prodi2.info();

// Cek nilai setelah diubah
console.log(prodi1.getNilai()); // 85
console.log(prodi2.getNilai()); // 80 (tidak berubah karena 150 invalid)
