// function kenalanDong(nama, umur) {
//   console.log("halo, nama saya", nama);
//   console.log("umur saya ", umur);
// }

// kenalanDong("Joese Rio", 23);

// function persegiPanjang(panjang, lebar) {
//   const hasil = panjang * lebar;
//   return hasil;
// }

// const luas = persegiPanjang(3, 2);
// console.log(luas);

// function segitiga(alas, tinggi) {
//   const result = (alas * tinggi) / 2;
//   return result;
// }

console.log("============== No 1 ===========");

function wargaSekolah(murid, guru, staff) {
  console.log("halo nama saya adalah ", murid);
  console.log("halo nama saya adalah", guru);
  console.log("halo nama saya adalah ", staff);
}

wargaSekolah("Agus", "Martin", "Sabrina");

console.log("============= No 2 ===========");

class Mobil {
  constructor(merk, tipe, warna) {
    this.merk = merk;
    this.tipe = tipe;
    this.warna = warna;
  }

  iniMobil() {
    console.log(
      "mobil ini bermerek " + this.merk,
      "tipe mobil ini " + this.tipe,
      "warna mobil ini " + this.warna
    );
  }
}

const joese = new Mobil("HONDA", "SUV", "HITAM METALIK");
joese.iniMobil();

console.log("============= No 3 ===========");

class Mesin extends Mobil {
  constructor(merk, tipe, warna, cc) {
    super(merk, tipe, warna);
    this.cc = cc;
  }
  iniMobil() {
    super.iniMobil();
    console.log("mobil ini ber cc " + this.cc);
  }
}

const Mobilini = new Mesin("HONDA", "MPV", "MERAH", 2000);
Mobilini.iniMobil();
