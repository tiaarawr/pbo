// ---------------------
// DATA PENDAFTAR 
// ---------------------
window.pendaftar = window.pendaftar || [];

// fungsi simpan pendaftar
function simpanPendaftar(nama, email, gender) {
    window.pendaftar.push({ nama, email, gender });
    console.log("Data pendaftar disimpan!");
}

// fungsi tampilkan pendaftar
function tampilPendaftar() {
    console.log("Daftar Pendaftar:");
    window.pendaftar.forEach(p => {
        console.log(`${p.nama} - ${p.email} - ${p.gender}`);
    });
}

// ---------------------
// DATA MAHASISWA
// ---------------------
class Mahasiswa {
    constructor(nama, jurusan) {
        this.nama = nama;
        this.jurusan = jurusan;
    }
}

window.dataMhs = window.dataMhs || [];

// simpan ke localStorage
function simpanMahasiswa(nama, jurusan) {
    let m = new Mahasiswa(nama, jurusan);
    window.dataMhs.push(m);

    localStorage.setItem("dataMahasiswa", JSON.stringify(window.dataMhs));
    console.log("Data mahasiswa disimpan di localStorage!");
}

// tampilkan mahasiswa
function tampilMahasiswa() {
    console.log("Daftar Mahasiswa:");
    let ambil = JSON.parse(localStorage.getItem("dataMahasiswa")) || [];
    ambil.forEach(m => {
        console.log(`${m.nama} - ${m.jurusan}`);
    });
}


// ====================================================
// EKSEKUSI
// ====================================================
simpanPendaftar("Tiara", "tiara@gmail.com", "Perempuan");
tampilPendaftar();

simpanMahasiswa("Andi", "Informatika");
simpanMahasiswa("Budi", "Sistem Informasi");
tampilMahasiswa();
