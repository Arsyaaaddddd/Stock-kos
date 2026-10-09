export type StatusKamar = "tersedia" | "terisi" | "perbaikan";

type Kamar = {
  status: StatusKamar;
};

export function formatRupiah(angka: number): string {
  return "Rp " + angka.toLocaleString("id-ID");
}

export function warnaStatus(status: StatusKamar): string {
  switch (status) {
    case "tersedia":
      return "#16a34a";
    case "terisi":
      return "#dc2626";
    default:
      return "#f59e0b";
  }
}

export function hitungStok(data: Kamar[]) {
  let tersedia = 0;
  let terisi = 0;
  let perbaikan = 0;

  for (const k of data) {
    if (k.status === "tersedia") tersedia++;
    else if (k.status === "terisi") terisi++;
    else perbaikan++;
  }

  return { tersedia, terisi, perbaikan };
}