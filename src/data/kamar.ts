type KamarData = {
  id: string;
  nomor: string;
  tipe: string;
  harga: number;
  status: "tersedia" | "terisi" | "perbaikan";
  fasilitas?: string;
};

export type Kamar = KamarData;

export const daftarKamar: Kamar[] = [
  { id: "1", nomor: "A1", tipe: "Standar", harga: 800000, status: "tersedia", fasilitas: "Kasur, lemari" },
  { id: "2", nomor: "A2", tipe: "Standar", harga: 800000, status: "terisi" },
  { id: "3", nomor: "B1", tipe: "AC", harga: 1200000, status: "tersedia", fasilitas: "AC, kamar mandi dalam" },
  { id: "4", nomor: "B2", tipe: "AC", harga: 1200000, status: "perbaikan" },
];

// loop untuk menambah data
for (let i = 3; i <= 5; i++) {
  daftarKamar.push({
    id: `C${i}`,
    nomor: `C${i}`,
    tipe: "VIP",
    harga: 1500000 + i * 50000,
    status: "tersedia",
  });
}